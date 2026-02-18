import { Button } from "./ui/Button";

export default function CTA() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-dark-charcoal mb-6">
                    I care about ownership over titles.
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Let’s discuss how I can help bring clarity and execution excellence to your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="primary"
                        href="https://drive.google.com/file/d/1D14Bc2BhItqpayCJvIWRpRmJG5Hv5OR2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Resume (PDF)
                    </Button>
                    <Button
                        variant="secondary"
                        href="mailto:joshiayush000@gmail.com"
                    >
                        Email Me
                    </Button>
                    <Button
                        variant="secondary"
                        href="https://www.linkedin.com/in/ayush-j-6b4894162/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Button>
                </div>
                <p className="mt-16 text-sm text-gray-400">
                    © Ayush Joshi · Built with Next.js · Deployed on Vercel
                </p>
            </div>
        </section>
    );
}
