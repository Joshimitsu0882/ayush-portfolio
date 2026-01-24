const tools = [
    "Agile",
    "SaaS Delivery",
    "Cross-functional Leadership",
    "Jira",
    "Notion",
    "Next.js",
    "React",
    "Strategy",
];

export default function Tools() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <h3 className="text-sm font-semibold tracking-wider text-muted-teal uppercase mb-8">
                    Tools & Methods
                </h3>
                <div className="flex flex-wrap gap-3">
                    {tools.map((tool) => (
                        <span
                            key={tool}
                            className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
