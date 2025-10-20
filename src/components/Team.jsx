export default function Team() {
    const team = [
        { name: "Jun Zaragosa", role: "Project Lead | Developer", linkedInURL: 'https://www.linkedin.com/in/jun-jun-zaragosa/', imgURL: '/images/undraw_chill-guy-avatar_tqsm.svg', description: "Software developer at fullsuite, and manages the development of payroll" },
        { name: "Ton Yacapin", role: "Developer", linkedInURL: 'https://www.linkedin.com/in/angel-hamelton-yacapin-2b8271304/', imgURL: '/images/undraw_developer-avatar_f6ac.svg', description: "Software developer at fullsuite, and manages the development of application tracking system (ATS)" },
        { name: "Francis Alex Darang", role: "Developer", linkedInURL: 'https://www.linkedin.com/in/francisalexdarang/', imgURL: '/images/undraw_fitness-guy-avatar_50y6.svg', description: "Software developer associate at fullsuite, and worked on the public company website" },
        { name: "Allen Alvaro", role: "UI/UX Designer", linkedInURL: 'https://www.linkedin.com/in/allenjalvaro/', imgURL: '/images/undraw_friendly-guy-avatar_dqp5.svg', description: "Software developer at fullsuite, and manages the development of HRIS and company public website" },
    ];
    return (
        <section
            id="teams"
            className="max-w-5xl mx-auto py-20 px-6 border-b border-gray-200"
        >
            <div className="space-y-4  mb-12">
                <h3 className="text-3xl font-semibold tracking-tight">Our Teams</h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We are a growing team of developers with the goal to provide impactful
                    solutions for our clients. At Synap, we believe digital transformation
                    should be accessible to everyone — not just large corporations. That’s
                    why we deliver practical, affordable, and human-centered web solutions
                    tailored to the unique needs of each client.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {team.map((m, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center transition-colors hover:border-gray-300"
                    >
                        <img
                            src={m.imgURL}
                            alt={m.name}
                            className="w-20 h-20 rounded-full mb-4 bg-gray-100 object-cover"
                        />
                        <h4 className="text-lg font-medium">{m.name}</h4>
                        <p className="text-gray-500 text-sm mb-3">{m.role}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {m.description}
                        </p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={m.linkedInURL}
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                            View profile →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );

}

