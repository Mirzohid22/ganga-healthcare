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

export type Product = {
    _id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    inStock: boolean;
    createdAt: string;
    content?: string;
    types?: string[];
}

export type Group = {
    _id: string;
    name: string;
    types: Omit<Type, "groupID">[];
}

export type Type = {
    _id: string;
    name: string;
    groupID: string;
}

export type ProductDetailed = {
    _id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    inStock: boolean;
    createdAt: string;
    content: string | TrustedHTML;
    types: string[];
    images: string[];
    details: { label: string; value: string }[];
}