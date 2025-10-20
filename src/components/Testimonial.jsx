import { ENV } from "../configs/env";

export default function Testimonial() {
    const testimonials = [
        {
            name: "John Doe",
            role: "Product Manager, NovaTech",
            quote: `${ENV.DEVELOPERS_NAME} transformed our platform with elegant, reliable code. Their attention to detail and design was unmatched.`,
            image: "/images/clients/undraw3.svg",
            companyImg: "/images/clients/star.svg",
        },
        {
            name: "James Smith",
            role: "Founder, GreenStack",
            quote: `They didn’t just deliver software—they delivered confidence. The ${ENV.DEVELOPERS_NAME} team truly makes a difference.`,
            image: "/images/clients/undraw2.svg",
            companyImg: "/images/clients/star.svg",
        },
        {
            name: "Juniper Williams",
            role: "CTO, Cloudware",
            quote: `Working with ${ENV.DEVELOPERS_NAME} was seamless from start to finish. They combine creativity, precision, and genuine passion.`,
            image: "/images/clients/undraw1.svg",
            companyImg: "/images/clients/star.svg",
        },
    ];

    return (
        <section id="testimonials" className="max-w-5xl mx-auto py-20 px-4 border-t border-gray-200">
            <h3 className="text-2xl font-semibold mb-8">What Our Clients Say</h3>

            <div className="grid gap-10 md:grid-cols-3">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between transition-colors hover:bg-gray-50"
                    >
                        <p className="text-gray-700 italic mb-6 leading-relaxed">“{t.quote}”</p>

                        <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                                <p className="text-sm text-gray-600">{t.role}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="#"
                    className="text-gray-800 text-sm font-medium underline underline-offset-4 hover:text-gray-900"
                >
                    See all testimonials →
                </a>
            </div>
        </section>
    );
}
