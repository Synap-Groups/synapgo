export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 border-b border-gray-200 bg-white">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
                {/* Text Section */}
                <div className="text-center md:text-left max-w-xl md:max-w-lg">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                        Making a difference,<br />one code at a time.
                    </h2>
                    <p className="text-gray-600 mb-8">
                        At <span className="font-semibold text-gray-900">Chicode</span>, we believe in building meaningful digital experiences that empower and inspire.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="border border-gray-300 rounded-full px-5 py-2.5 font-medium hover:bg-gray-100 transition">
                            Learn More
                        </button>
                        <button className="bg-black text-white rounded-full px-5 py-2.5 font-medium hover:bg-gray-800 transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Illustration */}
                <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <img
                        src="/images/hero1.svg"
                        alt="Hero Illustration"
                        className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
