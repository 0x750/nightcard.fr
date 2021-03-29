export interface IWork {
    color: string;
    slug: string;
    title: string;
    tags?: string[];
    image: string;
    description?: string;
}

const Work: IWork[] = [
    {
        color: "#24a54b",
        slug: "project-A",
        title: "projet A",
        tags: ["Music", "Video"],
        image: "/video.mp4",
        description: "Video description"
    }
];

export default Work;