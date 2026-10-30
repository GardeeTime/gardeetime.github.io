// Flat veggie glyphs on a 48×48 grid, outlined in kale. Each one also names the
// packet tint it prints on, so a seed rack reads as varied but harmonious.
export interface Veggie {
  name: string;
  tint: string;
  svg: string;
}

const O = `stroke="#1e2b1b" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"`;

export const VEGGIES: Veggie[] = [
  {
    name: "Tomato",
    tint: "#f6d3c8",
    svg: `<circle cx="24" cy="27" r="14" fill="#d8432a" ${O}/>
      <path d="M17 22c3-1 5-1 7 2 2-3 4-3 7-2" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2" stroke-linecap="round"/>
      <path d="M24 14l2.5-4 1 5 4.5-1.5-3 4 4 2-5 .5L24 22l-4-1.5-5-.5 4-2-3-4 4.5 1.5 1-5z" fill="#5f8f3b" ${O}/>`,
  },
  {
    name: "Carrot",
    tint: "#fbe0c4",
    svg: `<path d="M17 18c4-3 11-3 14 0 1 6-4 20-7 25-3-5-8-19-7-25z" fill="#ee8a2a" ${O}/>
      <path d="M21 25h4M22 31h3M23 37h2" ${O} fill="none"/>
      <path d="M24 17c-1-5-5-8-8-9 3 4 4 7 5 10M24 17c0-5 1-9 3-12 0 4 0 8-1 12M25 18c2-4 6-6 9-6-3 2-5 4-7 7" fill="#7fae48" ${O}/>`,
  },
  {
    name: "Radish",
    tint: "#f7d6e0",
    svg: `<path d="M24 20c8 0 12 5 11 11-1 6-6 9-11 9s-10-3-11-9c-1-6 3-11 11-11z" fill="#d6416b" ${O}/>
      <path d="M24 40v6" ${O}/>
      <path d="M30 34c1-1 2-3 2-5" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>
      <path d="M23 20c-3-6-9-9-13-8 2 5 7 8 13 8zM25 20c3-6 9-9 13-8-2 5-7 8-13 8z" fill="#6c9a3f" ${O}/>`,
  },
  {
    name: "Pea",
    tint: "#dceccd",
    svg: `<path d="M8 30c4-10 22-18 32-14-2 10-20 20-32 14z" fill="#7fb04a" ${O}/>
      <circle cx="17" cy="26" r="3" fill="#a9d36e" ${O}/><circle cx="24" cy="23" r="3" fill="#a9d36e" ${O}/><circle cx="31" cy="20" r="3" fill="#a9d36e" ${O}/>
      <path d="M40 16c2-3 3-6 1-9" fill="none" ${O}/>`,
  },
  {
    name: "Beet",
    tint: "#ecd3df",
    svg: `<path d="M24 21c7 0 11 5 10 11-1 6-5 10-10 13-5-3-9-7-10-13-1-6 3-11 10-11z" fill="#8e2c5a" ${O}/>
      <path d="M22 21c-2-7-7-12-12-13 1 6 5 11 12 13zM26 21c2-7 7-12 12-13-1 6-5 11-12 13z" fill="#5f8f3b" ${O}/>
      <path d="M22 21l-6-11M26 21l6-11" stroke="#c0396b" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    name: "Lettuce",
    tint: "#e3f0cf",
    svg: `<path d="M24 42c-10 0-16-6-16-13 0-4 3-6 5-7-1-4 2-8 6-8 1-3 3-5 5-5s4 2 5 5c4 0 7 4 6 8 2 1 5 3 5 7 0 7-6 13-16 13z" fill="#8dbf56" ${O}/>
      <path d="M24 42c-5-2-8-7-8-13 0-5 3-9 8-12 5 3 8 7 8 12 0 6-3 11-8 13z" fill="#b8dc7f" ${O}/>
      <path d="M24 20v20" fill="none" ${O}/>`,
  },
  {
    name: "Pepper",
    tint: "#fbeac0",
    svg: `<path d="M14 20c2-4 6-5 10-3 4-2 8-1 10 3 3 6 0 18-4 22-2 2-4 1-6-1-2 2-4 3-6 1-4-4-7-16-4-22z" fill="#f2b33a" ${O}/>
      <path d="M24 17v20" fill="none" stroke="#1e2b1b" stroke-opacity=".35" stroke-width="1.5"/>
      <path d="M24 17c0-4 1-7 4-9" fill="none" ${O}/><path d="M19 17c2-2 8-2 10 0" fill="#5f8f3b" ${O}/>`,
  },
  {
    name: "Eggplant",
    tint: "#e4dbef",
    svg: `<path d="M27 15c7 2 11 9 10 17s-8 13-15 11-11-9-8-16c2-5 5-6 6-9 1-2 4-4 7-3z" fill="#5c3a82" ${O}/>
      <path d="M22 13c2-3 6-4 9-2 1 3-1 6-4 7-3 0-5-2-5-5z" fill="#5f8f3b" ${O}/>
      <path d="M27 11c0-3 1-5 3-6" fill="none" ${O}/>
      <path d="M31 24c2 2 3 5 2 8" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2" stroke-linecap="round"/>`,
  },
  {
    name: "Corn",
    tint: "#f8ecbd",
    svg: `<path d="M24 6c5 0 7 8 7 18s-3 18-7 18-7-8-7-18 2-18 7-18z" fill="#f3c94a" ${O}/>
      <path d="M20 13h8M19 19h10M19 25h10M19 31h10M20 37h8M24 7v34" fill="none" stroke="#1e2b1b" stroke-opacity=".35" stroke-width="1.3"/>
      <path d="M17 22c-6 6-7 15-2 22 4-3 7-8 9-14M31 22c6 6 7 15 2 22-4-3-7-8-9-14" fill="#6c9a3f" ${O}/>`,
  },
  {
    name: "Pumpkin",
    tint: "#fadcc0",
    svg: `<ellipse cx="24" cy="29" rx="16" ry="12" fill="#e9782a" ${O}/>
      <path d="M24 17c-5 3-6 20 0 24M24 17c5 3 6 20 0 24M15 19c-5 5-4 16 2 21M33 19c5 5 4 16-2 21" fill="none" ${O}/>
      <path d="M23 17c0-4 1-7 4-9l2 2c-2 2-3 4-3 7" fill="#6f4f33" ${O}/>`,
  },
  {
    name: "Onion",
    tint: "#efe0d0",
    svg: `<path d="M24 16c9 4 13 10 11 17-2 6-7 9-11 9s-9-3-11-9c-2-7 2-13 11-17z" fill="#c9965f" ${O}/>
      <path d="M24 17c-4 6-5 16 0 25M24 17c4 6 5 16 0 25" fill="none" stroke="#1e2b1b" stroke-opacity=".4" stroke-width="1.4"/>
      <path d="M22 17c-1-5-1-9 0-12M26 17c1-5 3-8 5-10M24 16V4" fill="none" stroke="#5f8f3b" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M21 42l-1 3M24 42v3M27 42l1 3" ${O}/>`,
  },
  {
    name: "Kale",
    tint: "#d6e6cf",
    svg: `<path d="M24 44V22" fill="none" stroke="#1e2b1b" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M24 40c-6-1-12-7-13-14 2 0 3-2 2-4 2 0 4-2 3-4 3 1 5-1 5-3 2 1 3 0 3-2 0 2 1 3 3 2 0 2 2 4 5 3-1 2 1 4 3 4-1 2 0 4 2 4-1 7-7 13-13 14z" fill="#3f6b2a" ${O}/>
      <path d="M24 38l-6-8M24 32l5-7M24 28l-4-5" fill="none" stroke="#a9d36e" stroke-width="1.4" stroke-linecap="round"/>`,
  },
];

export function veggieFor(key: string): Veggie {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) h = Math.imul(h ^ key.charCodeAt(i), 16777619);
  return VEGGIES[(h >>> 0) % VEGGIES.length];
}

export const STATUS_LABEL: Record<string, string> = {
  shipped: "Harvested",
  "in-progress": "Growing",
  poc: "Seedling",
  concept: "Seed idea",
  ongoing: "Perennial",
};
