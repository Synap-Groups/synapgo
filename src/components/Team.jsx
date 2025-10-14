export default function Team() {
    const team = [
        { name: "Jun Zaragosa", role: "Project Lead | Developer", linkedInURL: 'https://www.linkedin.com/in/jun-jun-zaragosa/', imgURL: '/images/undraw_chill-guy-avatar_tqsm.svg', },
        { name: "Ton Yacapin", role: "Developer", linkedInURL: 'https://www.linkedin.com/in/angel-hamelton-yacapin-2b8271304/', imgURL: '/images/undraw_developer-avatar_f6ac.svg', },
        { name: "Allen Alvaro", role: "UI/UX Designer", linkedInURL: 'https://www.linkedin.com/in/allenjalvaro/', imgURL: '/images/undraw_friendly-guy-avatar_dqp5.svg', },
    ];

    return (
        <section id="teams" className="max-w-5xl mx-auto py-20 px-4 border-b border-gray-200">
            <h3 className="text-2xl font-semibold mb-8">Our Teams</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {team.map((m, i) => (
                    <div key={i} className="border border-gray-300 p-6 rounded-xl text-center hover:shadow-md transition">
                        <img src={m.imgURL} className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200" />
                        <h4 className="font-semibold">{m.name}</h4>
                        <p className="text-gray-600">{m.role}</p>
                        <a target="__blank" href={m.linkedInURL} className="text-gray-900 underline text-sm mt-2 inline-block hover:text-black">View profile →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

