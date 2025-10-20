export default function Services() {
    const segments = [
        {
            title: "Freelancers & Professionals",
            desc: "Architects, real estate agents, teachers, consultants who need an online presence.",
            services: [
                "Portfolio or booking website setup",
                "Automation of client scheduling or inquiries",
            ],
            value: "Simple, affordable, fast website creation and management.",
            graphic: "/images/hero2.svg",
        },
        {
            title: "Local Businesses",
            desc: "Cafes, food brands, and small shops that want to grow their customer base online.",
            services: [
                "Website + social media integration",
                "E-commerce and order management systems",
            ],
            value: "End-to-end digital presence solutions that drive sales.",
            graphic: "/images/hero3.svg",
        },
        {
            title: "Organizations & NGOs",
            desc: "Barangays, and local NGOs needing better online operations.",
            services: [
                "Event registration platforms",
                "Data collection and reporting tools",
                "Membership and communication portals",
            ],
            value: "Custom web applications for smooth, transparent operations.",
            graphic: "/images/hero4.svg",
        },
        {
            title: "Micro-startups",
            desc: "Early founders or online sellers testing product ideas.",
            services: [
                "Affordable MVP development",
                "Landing pages and prototype apps",
                "Technical consultation and product validation",
            ],
            value: "Launch faster with low-cost, scalable tech support.",
            graphic: "/images/hero5.svg",
        },
    ];

    return (
        <section id="services" className="max-w-5xl mx-auto py-20 px-4">
            <h3 className="text-2xl font-semibold mb-8">Our Services</h3>
            <div className="flex flex-col space-y-10">
                {segments.map((seg, i) => (
                    <div
                        key={i}
                        className={`flex flex-col md:flex-row items-center md:justify-between gap-10 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Graphic */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={seg.graphic}
                                alt={seg.title}
                                className="w-72 h-72 object-contain"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-1/2 space-y-4 text-gray-700">
                            <h4 className="text-xl font-semibold text-gray-900">
                                {seg.title}
                            </h4>
                            <p className="text-gray-600">{seg.desc}</p>
                            <ul className="list-disc list-inside space-y-1">
                                {seg.services.map((srv, idx) => (
                                    <li key={idx}>{srv}</li>
                                ))}
                            </ul>
                            <p className="font-medium text-gray-900">{seg.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
