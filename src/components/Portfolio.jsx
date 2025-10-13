export default function Portfolio() {
    const projects = [
        { title: "Project Alpha", desc: "A cutting-edge analytics platform." },
        { title: "Project Beta", desc: "A minimal e-commerce solution." },
        { title: "Project Gamma", desc: "A sleek SaaS dashboard for startups." },
    ];

    return (
        <section id="portfolio" className="max-w-5xl mx-auto py-20 px-4 border-b border-gray-200">
            <h3 className="text-2xl font-semibold mb-8">Portfolio & Sample Projects</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <div key={i} className="border border-gray-300 p-6 rounded-xl hover:shadow-md transition">
                        <h4 className="font-semibold mb-2">{p.title}</h4>
                        <p className="text-gray-600 mb-4">{p.desc}</p>
                        <a href="#" className="text-gray-900 underline hover:text-black">See project →</a>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <a href="#" className="text-gray-900 underline hover:text-black">See all projects →</a>
            </div>
        </section>
    );
}
