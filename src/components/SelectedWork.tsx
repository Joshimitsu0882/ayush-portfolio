const projects = [
    {
        title: "Anonymous B2B SaaS (Logistics)",
        problem: "Inefficient routing and dispatch caused 20% operational overhead.",
        owned: "End-to-end product delivery, roadmap, and engineering alignment.",
        impact: "Reduced dispatch time by 40% and improved driver utilization.",
    },
    {
        title: "Anonymous B2B2C SaaS (Golf)",
        problem: "Clunky booking experience led to high drop-off rates.",
        owned: "UX redesign strategy and mobile-first implementation oversight.",
        impact: "Increased booking conversion rate by 15% in Q1.",
    },
];

export default function SelectedWork() {
    return (
        <section id="work" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h3 className="text-sm font-semibold tracking-wider text-muted-teal uppercase mb-12">
                    Selected Work
                </h3>
                <div className="space-y-16">
                    {projects.map((project) => (
                        <div key={project.title} className="group border-l-4 border-muted-teal pl-6 py-4 hover:bg-gray-50 rounded-r-lg transition-colors duration-300">
                            <h4 className="text-2xl font-bold text-dark-charcoal mb-4 group-hover:text-muted-teal transition-colors duration-300">{project.title}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <h5 className="text-sm font-bold text-gray-900 mb-1">Problem</h5>
                                    <p className="text-gray-600 text-sm">{project.problem}</p>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-gray-900 mb-1">What I Owned</h5>
                                    <p className="text-gray-600 text-sm">{project.owned}</p>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-gray-900 mb-1">Impact</h5>
                                    <p className="text-gray-600 text-sm">{project.impact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
