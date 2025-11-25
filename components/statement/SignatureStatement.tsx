import React from "react";

const SignatureStatement = () => {
    return (
        <section className="bg-fashion-white text-fashion-black py-24 md:py-32 px-6 md:px-24 flex justify-center items-center">
            <div className="max-w-4xl text-center">
                <p className="font-serif text-2xl md:text-4xl leading-relaxed md:leading-tight text-fashion-charcoal">
                    "I build digital ecosystems where <span className="italic text-fashion-gold">precision engineering</span> meets <span className="italic text-fashion-gold">aesthetic perfection</span>.
                    My work is not just about code; it is about crafting high-performance data architectures that feel as effortless as they are powerful."
                </p>
                <div className="mt-12 flex justify-center">
                    <div className="h-1 w-24 bg-fashion-black" />
                </div>
            </div>
        </section>
    );
};

export default SignatureStatement;
