import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { useContactContext } from "../contexts/ContactProvider";
import Spinner from "./Spinner";

export default function Contact() {
    const { contactForm, handleChange, handleSendEmail, loading, error, success } = useContactContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendEmail();
    }

    return (
        <section
            id="contact"
            className="max-w-5xl mx-auto py-20 px-4 border-b border-gray-200"
        >
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-8">
                We’d love to hear from you. Reach out to us anytime.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                {/* Form Section */}
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-4 w-full lg:max-w-lg">
                    <input
                        value={contactForm.name}
                        name="name"
                        onChange={handleChange}
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-gray-600"
                        required
                    />
                    <input
                        value={contactForm.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-gray-600"
                        required
                    />
                    <textarea
                        value={contactForm.message}
                        onChange={handleChange}
                        name="message"
                        placeholder="Your Message"
                        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-gray-600 h-32"
                        required
                    />
                    <button
                        type="submit"
                        className="border border-gray-800 bg-gray-900 text-white py-2 rounded hover:bg-black transition hover:cursor-pointer">
                        {
                            loading ? <Spinner /> : "Send"
                        }
                    </button>
                    {error
                        &&
                        <div className="flex gap-x-2">
                            <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                            <div className="text-red-500 font-semibold text-sm">{error}</div>
                        </div>
                    }
                    {success
                        &&
                        <div className="flex gap-x-2">
                            <CheckCircleIcon className="w-5 h-5 text-green-500" />
                            <div className="text-green-500-500 font-semibold text-sm">{success}</div>
                        </div>
                    }
                </form>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img
                        src="/images/delivery.svg"
                        className="w-2/3 sm:w-1/2 lg:w-full max-w-md object-contain"
                        alt="Contact illustration"
                    />
                </div>
            </div>
        </section>
    );
}
