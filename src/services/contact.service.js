import { api } from "../configs/api";

export const sentEmailMessage = async (formData) => {
    return await api.post('/api/forward-email', formData);
};