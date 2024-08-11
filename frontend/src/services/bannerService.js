import axios from 'axios';

export const fetchAllBanners = async () => {
    try {
        const response = await axios.get('/api/v1/banners');
        return response.data;
    } catch (error) {
        console.error('Error fetching all banners: ', error);
        throw error;
    }
};

export const fetchLatestVisibleBanner = async () => {
    try {
        const response = await axios.get('/api/v1/banners/latest');
        return response.data;
    } catch (error) {
        console.error('Error fetching latest visible banner: ', error);
        throw error;
    }
};

export const fetchBannerById = async (id) => {
    try {
        const response = await axios.get(`/api/v1/banner/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching banner by id: ', error);
        throw error;
    }
}

export const createBanner = async (newBanner) => {
    try {
        const response = await axios.post('/api/v1/banner', newBanner);
        return response.data;
    } catch (error) {
        console.error('Error creating banner: ', error);
        throw error;
    }
};

export const updateBanner = async (id, updateBanner) => {
    try {
        const response = await axios.put(`/api/v1/banner/${id}`, updateBanner);
        return response.data;
    } catch (error) {
        console.error('Error updating banner: ', error);
        throw error;
    }
};

export const deleteBanner = async (id) => {
    try {
        const response = await axios.delete(`/api/v1/banner/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting banner: ', error);
        throw error;
    }
}