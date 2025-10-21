export default function Portfolio() {
    const projects = [
        {
            title: "Kriya Payroll System",
            desc: "Runs regular, special, and final payruns for employees of Fullsuite, while supporting multiple organizations with a multi-tenant architecture. It also supports data for BIR Form 2314, 1601c, etc, ensuring compliance with reporting requirements.",
            img: "/images/projects/payroll.png",
        },
        {
            title: "Kriya Applicant Tracking System",
            desc: "The ATS enables Fullsuite to efficiently handle and organize applicant information, simplifying the recruitment process. It streamlines HR’s talent acquisition efforts by automating and managing application processing more effectively.",
            img: "/images/projects/ats.png",
        },
    ];

    return (
        <section
            id="portfolio"
            className="max-w-5xl mx-auto py-20 px-4 border-b border-gray-200"
        >
            <h3 className="text-2xl font-semibold mb-12">
                Portfolio & Sample Projects
            </h3>

            <div className="space-y-16">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                    >
                        {/* Text Block */}
                        <div className="flex-1">
                            <h4 className="text-xl font-semibold mb-3">{p.title}</h4>
                            <p className="text-gray-600 mb-4">{p.desc}</p>
                            <a
                                href="#"
                                className="text-gray-900 underline hover:text-black"
                            >
                                See project →
                            </a>
                        </div>

                        {/* Image Block */}
                        <div className="flex-1">
                            <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
