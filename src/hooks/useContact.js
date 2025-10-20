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
    const [success, setSuccess] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSendEmail = async () => {
        setLoading(true);
        try {
            const response = await sentEmailMessage(contactForm);
            console.log('response: ', response);
            setContactForm({ ...formData });
            setSuccess("Successfully sent query. We'll get in touch to you soon!")
        } catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return {
        contactForm, setContactForm,
        loading, setLoading,
        error, setError,
        handleSendEmail,
        handleChange, success
    }
};

export default useContact;