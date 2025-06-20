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

interface ProjectLink {
    github: string;
    live_demo: string;
    video_demo?: string;
}