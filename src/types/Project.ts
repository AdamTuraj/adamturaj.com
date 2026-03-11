export default interface Project {
    order: number;
    title: string;
    description: string;
    languages: string[];
    imageUrl: string;
    url: string;
    githubUrl?: string;
    sketchfab?: string;
}
