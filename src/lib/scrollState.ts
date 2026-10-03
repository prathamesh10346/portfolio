export interface ScrollState {
  progress: number
  velocity: number
  scrollY: number
  // fractional index of the section currently centred in the viewport (3.5 = halfway from section 3 to 4)
  sectionFloat: number
  pointerX: number
  pointerY: number
  // time (ms, performance.now) of the last click pulse
  burstAt: number
}

export const scrollState: ScrollState = {
  progress: 0,
  velocity: 0,
  scrollY: 0,
  sectionFloat: 0,
  pointerX: 0,
  pointerY: 0,
  burstAt: -1e9,
}

export const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'terminal', 'contact'] as const
export type SectionId = (typeof sectionIds)[number]
