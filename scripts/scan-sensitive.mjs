#!/usr/bin/env node
/*
 * Sensitive-content scanner for the portfolio site.
 * Runs over src/, docs/, public/ and reports any matches against a curated pattern list.
 * Exits non-zero if any HIGH-RISK pattern matches — this is what blocks the deploy in CI.
 *
 * Add a pattern: edit PATTERNS below.
 * Allow a specific match: add to ALLOWLIST.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SCAN_DIRS = ["src", "docs", "public"];
const SCAN_EXTENSIONS = new Set([".md", ".astro", ".ts", ".tsx", ".js", ".jsx", ".mjs", ".json", ".html", ".css", ".yml", ".yaml"]);

const SKIP_DIRS = new Set(["node_modules", ".git", "dist", ".astro", "build"]);

// HIGH-RISK patterns — fail the build if any match (after applying ALLOWLIST).
const PATTERNS = [
  { name: "Linear ticket IDs", regex: /\bBAC-\d+\b/g, severity: "high" },
  { name: "Customer names",
    regex: /\b(Perry Ellis|Original Penguin|Black Forest Decor|Lyss[eé]|Pearl ?[Ii]z[Uu]?[Mm][Ii]|Cabana Life|Homefield Purdue|Helix Sleep|Cozy Earth|Thirdlove|Third ?Love|Primary Arms|PSD\b|Corduroy(?! Road)|Homeroom)\b/g,
    severity: "high",
  },
  { name: "Internal class / file identifiers",
    regex: /\b(SurgeController|SurgeOrchestrator|SurgeService|SurgeSlackLogging|HeroStep\.tsx|HeroImagePicker|renderHeroCanvas|AnalyticsProvider|FeatureFlagsContext|backstroke_cohort_id|VITE_POSTHOG_[A-Z_]+)\b/g,
    severity: "high",
  },
  { name: "Internal branch refs", regex: /\badam\/[a-z][a-z0-9-]+\b/g, severity: "high" },
  { name: "Internal repo / org refs",
    regex: /\b(BackstrokeDev|backstroke-ui|code-backstroke)\b/g,
    severity: "high",
  },
  { name: "Personal phone", regex: /317-997-2911/g, severity: "high" },

  // SOFT-RISK patterns — surfaced as warnings only.
  { name: "Generic dollar figures", regex: /\$[0-9][0-9.]*[KkMmBb]\+?(?:\/mo|\/month|\/yr|\/year)?/g, severity: "soft" },
  { name: "FullContact references", regex: /\bFullContact\b/g, severity: "soft" },
  { name: "Common staff first-names",
    regex: /\b(?:Allyson|Charlene|Samip)\b/g,
    severity: "soft",
  },
];

// Strings that are explicitly OK and should not trip the scanner.
// Add a literal match here to allowlist a specific occurrence (case-sensitive).
const ALLOWLIST = new Set([
  // Customer names publicly disclosed in Backstroke's Surge launch announcement
  // (https://www.backstroke.com/blog/introducing-surge-...). Safe to reference on the portfolio.
  "Perry Ellis",
  "Helix Sleep",
]);

function listFiles(dir) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const name of entries) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    const s = statSync(full);
    if (s.isDirectory()) {
      out.push(...listFiles(full));
    } else if (SCAN_EXTENSIONS.has(extname(name))) {
      out.push(full);
    }
  }
  return out;
}

const files = SCAN_DIRS.flatMap((d) => listFiles(join(ROOT, d)));

const findings = { high: [], soft: [] };

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");

  for (const { name, regex, severity } of PATTERNS) {
    regex.lastIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      regex.lastIndex = 0;
      const matches = line.matchAll(regex);
      for (const m of matches) {
        if (ALLOWLIST.has(m[0])) continue;
        findings[severity].push({
          pattern: name,
          file: file.replace(ROOT + "/", ""),
          line: i + 1,
          match: m[0],
          context: line.trim().slice(0, 120),
        });
      }
    }
  }
}

function report(group, label, color) {
  if (group.length === 0) return;
  console.log(`\n${color}${label}: ${group.length} match${group.length === 1 ? "" : "es"}\x1b[0m`);
  for (const f of group) {
    console.log(`  ${f.file}:${f.line}  [${f.pattern}]  → ${f.match}`);
    console.log(`    "${f.context}"`);
  }
}

report(findings.high, "HIGH-RISK", "\x1b[31m");
report(findings.soft, "SOFT-WARNING", "\x1b[33m");

console.log(
  `\nScanned ${files.length} files across ${SCAN_DIRS.join(", ")}.\n` +
    `${findings.high.length} high-risk · ${findings.soft.length} soft warnings.`
);

if (findings.high.length > 0) {
  console.error("\n\x1b[31m✗ Sensitive-content scan failed. Fix high-risk matches before committing.\x1b[0m");
  console.error("  (To allowlist a specific match, edit ALLOWLIST in scripts/scan-sensitive.mjs.)");
  process.exit(1);
}

console.log("\n\x1b[32m✓ No high-risk matches.\x1b[0m Soft warnings (if any) are informational — review and proceed if intentional.");
