const capabilities = [
    {
        title: "Product Thinking",
        description: "Defining vision, strategy, and roadmap. Aligning business goals with user needs.",
    },
    {
        title: "Execution & Delivery",
        description: "Turning strategy into reality. Managing backlogs, sprints, and release cycles.",
    },
    {
        title: "Stakeholder Alignment",
        description: "Bridging the gap between engineering, design, and business leadership.",
    },
    {
        title: "Systems Design",
        description: "Building scalable processes and workflows that enable teams to move faster.",
    },
];

export default function Capabilities() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <h3 className="text-sm font-semibold tracking-wider text-muted-teal uppercase mb-12">
                    Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((cap) => (
                        <div key={cap.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                            <h4 className="font-semibold text-lg mb-3 text-dark-charcoal">{cap.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
