type FormDataProps = {
    fullName: string;
    phone: string;
    comment: string;
    terms: boolean;
}

type ResponseType = {
    status: 'success' | 'error';
    message: string;
}

const URL = process.env.NEXT_PUBLIC_URL;

export async function submitFormData({ comment, phone, fullName, terms }: FormDataProps): Promise<ResponseType> {
    const response = await fetch(`${URL}/mail`, {
        method: 'POST',
        body: JSON.stringify({ fullName, comment, phone, terms }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return await response.json()
}