export default function Testimonial() {
    const testimonials = [
        {
            name: "Emily Carter",
            role: "Product Manager, NovaTech",
            quote:
                "Chicode transformed our platform with elegant, reliable code. Their attention to detail and design was unmatched.",
        },
        {
            name: "Raj Patel",
            role: "Founder, GreenStack",
            quote:
                "They didn’t just deliver software—they delivered confidence. The Chicode team truly makes a difference.",
        },
        {
            name: "Lena Hoffman",
            role: "CTO, Cloudify",
            quote:
                "Working with Chicode was seamless from start to finish. They combine creativity, precision, and genuine passion.",
        },
    ];

    return (
        <section id="testimonials" className="max-w-5xl mx-auto py-20 px-4 border-b border-gray-200">
            <h3 className="text-2xl font-semibold mb-8 text-center">What Our Clients Say</h3>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="border border-gray-300 rounded-2xl p-6 bg-gray-50 hover:bg-white hover:shadow-md transition"
                    >
                        <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-900">{t.name}</h4>
                            <p className="text-sm text-gray-600">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <a href="#" className="text-gray-900 underline hover:text-black">
                    See all testimonials →
                </a>
            </div>
        </section>
    );
}
