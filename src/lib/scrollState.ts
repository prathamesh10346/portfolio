export interface ScrollState {
  progress: number
  velocity: number
  scrollY: number
  sectionIndex: number
  pointerX: number
  pointerY: number
}

export const scrollState: ScrollState = {
  progress: 0,
  velocity: 0,
  scrollY: 0,
  sectionIndex: 0,
  pointerX: 0,
  pointerY: 0,
}

export const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'] as const
export type SectionId = (typeof sectionIds)[number]
