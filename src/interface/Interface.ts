

export interface iData  {
    id: number,
    title: string,
    price: string,
    category: string,
    description?: string,
    image: string,
    rating: {
        rate: string,
        count: string,
    }
}