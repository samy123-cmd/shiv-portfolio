import React from "react";

const Backstage = () => {
    return (
        <section className="bg-fashion-white text-fashion-black py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    {/* Left Column: Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="font-serif text-5xl md:text-7xl mb-8">Backstage</h2>
                            <p className="font-sans text-fashion-charcoal/80 text-lg leading-relaxed max-w-md mb-12">
                                Open for select collaborations and technical consultations.
                                Let's craft your next digital masterpiece.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div>
                                <span className="text-xs uppercase tracking-widest text-fashion-grey block mb-2">Contact</span>
                                <a href="mailto:pmishra273@gmail.com" className="font-serif text-2xl hover:text-fashion-gold transition-colors duration-300 block">
                                    pmishra273@gmail.com
                                </a>
                                <a href="tel:+919837306974" className="font-serif text-xl hover:text-fashion-gold transition-colors duration-300 block mt-2">
                                    +91-9837306974
                                </a>
                            </div>
                            <div>
                                <span className="text-xs uppercase tracking-widest text-fashion-grey block mb-2">Socials</span>
                                <div className="flex gap-6">
                                    <a href="/" className="font-sans text-sm uppercase tracking-wider hover:text-fashion-gold transition-colors duration-300">LinkedIn</a>
                                    <a href="/" className="font-sans text-sm uppercase tracking-wider hover:text-fashion-gold transition-colors duration-300">GitHub</a>
                                    <a href="/" className="font-sans text-sm uppercase tracking-wider hover:text-fashion-gold transition-colors duration-300">Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <form className="flex flex-col gap-12">
                            <div className="group">
                                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-fashion-grey mb-2 group-focus-within:text-fashion-gold transition-colors duration-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-transparent border-b border-fashion-charcoal/30 py-2 focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-serif text-xl"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-fashion-grey mb-2 group-focus-within:text-fashion-gold transition-colors duration-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-transparent border-b border-fashion-charcoal/30 py-2 focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-serif text-xl"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-fashion-grey mb-2 group-focus-within:text-fashion-gold transition-colors duration-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-fashion-charcoal/30 py-2 focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-serif text-xl resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="self-start px-12 py-4 bg-fashion-black text-fashion-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-fashion-gold hover:text-fashion-black transition-all duration-300"
                            >
                                Request a Fitting
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Backstage;
