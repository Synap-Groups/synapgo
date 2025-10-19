import { useState } from "react";
import { sentEmailMessage } from "../services/contact.service";

const formData = {
    name: '',
    email: '',
    message: '',
}
const useContact = () => {
    const [contactForm, setContactForm] = useState({ ...formData });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSendEmail = async () => {
        const response = await sentEmailMessage(contactForm);
        console.log('response: ', response);
        return;
    }

    return {
        contactForm, setContactForm,
        loading, setLoading,
        error, setError,
        handleSendEmail,
        handleChange
    }
};

export default useContact;