export type Member = {
    _id: string;
    name: string;
    profession: string;
    image: string;
    metadata: string;
    createdAt: string;
    updatedAt: string;
}

export type Blog = {
    _id: string;
    image: string;
    title: string;
    description: string;
    related?: string[];
    content?: string;
    createdAt: string;
}