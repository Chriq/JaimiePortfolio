export interface Project {
    id: string,
    title: string,
}

export interface Testimonial {
    quote: string;
    name: string;
    role?: string;
    project?: string
    year?: string
}