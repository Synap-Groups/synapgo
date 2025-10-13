export default function Services() {
    const services = [
        { title: "Web Development", desc: "Custom web apps built for performance and scalability." },
        { title: "UI/UX Design", desc: "Clean, modern, user-centered design experiences." },
        { title: "Consulting", desc: "Strategic guidance to make your software ideas thrive." },
    ];

    return (
        <section id="services" className="max-w-5xl mx-auto py-20 px-4 border-b border-gray-200">
            <h3 className="text-2xl font-semibold mb-8">Our Services & Packages</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((s, i) => (
                    <div key={i} className="border border-gray-300 rounded-2xl p-6 hover:shadow-md transition">
                        <h4 className="font-semibold mb-2">{s.title}</h4>
                        <p className="text-gray-600 mb-4">{s.desc}</p>
                        <a href="#" className="text-gray-900 underline hover:text-black">See packages →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
