export default function Contact() {
    return (
        <section id="contact" className="max-w-5xl mx-auto py-20 px-4 border-b border-gray-200">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-8">We’d love to hear from you. Reach out to us anytime.</p>
            <form className="grid gap-4 max-w-md">
                <input type="text" placeholder="Your Name" className="border border-gray-300 rounded p-2 focus:outline-none focus:border-gray-600" />
                <input type="email" placeholder="Your Email" className="border border-gray-300 rounded p-2 focus:outline-none focus:border-gray-600" />
                <textarea placeholder="Your Message" className="border border-gray-300 rounded p-2 focus:outline-none focus:border-gray-600 h-32" />
                <button className="border border-gray-800 bg-gray-900 text-white py-2 rounded hover:bg-black transition">Send Message</button>
            </form>
        </section>
    );
}
