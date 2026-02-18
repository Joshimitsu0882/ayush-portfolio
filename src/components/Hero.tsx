import { Button } from "./ui/Button";

export default function Hero() {
    return (
        <section className="py-20 md:py-32 max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-dark-charcoal mb-6">
                Ayush Joshi
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-8">
                Product Thinker · Delivery Executor · Strategy Translator
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                I bridge the gap between abstract strategy and concrete delivery.
                Building calm, effective systems for complex product challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="#work">View Work</Button>
                <Button
                    variant="secondary"
                    href="https://drive.google.com/file/d/1D14Bc2BhItqpayCJvIWRpRmJG5Hv5OR2/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Resume (PDF)
                </Button>
            </div>
        </section>
    );
}
