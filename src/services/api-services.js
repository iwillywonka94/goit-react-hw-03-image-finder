import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pixabay.com/api',
    params: {
        key: '27156504-08e4058fa79ee4bc3a8930764',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
    },
});

export const searchImages = async (q, page = 1) => {
    const { data } = await instance.get('/', {
        params: {
            q,
            page,
        },
    });
    return data.hits;
}