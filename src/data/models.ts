export interface ProjectDetails {
    id: number,
    title: string,
    slug: string,
    type: string,
    description: string,
    tech_stack: string[],
    role: string,
    features: string[],
    challenges_and_learnings: string,
    links: ProjectLink,
    thumbnail: string,
    screenshots: string[],
    tags: string[],
}

/*
 * Shape of each entry in public/papers.json (JSON can't hold comments):
 * {
 *   "id": 1,
 *   "title": "Paper title",
 *   "authors": "Surname et al.",
 *   "venue": "Nature",
 *   "year": 2021,
 *   "status": "reading",   // "reading" | "finished"
 *   "topic": "AI for Healthcare",
 *   "note": "Optional one-line takeaway."
 * }
 */
export interface Paper {
    id: number,
    title: string,
    authors: string,
    venue: string,
    year: number,
    status: "reading" | "finished",
    topic: string,
    note?: string,
}

export interface PathStep {
    id: number,
    title: string,
    status: string,
}

interface ProjectLink {
    github: string;
    live_demo: string;
    video_demo?: string;
}