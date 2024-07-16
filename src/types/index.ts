export type Member = {
    id: string;
    name: string;
    profession: string;
    image: string;
    metadata: string;
    createdAt: string;
    updatedAt: string;
}

export type Blog = {
    id: string;
    image: string;
    title: string;
    description: string;
    related?: string[];
    content?: string;
    createdAt: string;
}