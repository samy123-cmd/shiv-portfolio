"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
}

export default function Typewriter({ words, className, cursorClassName }: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];
        const typeSpeed = isDeleting ? 50 : 100;
        const delay = isDeleting ? 0 : 1500;

        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === word) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else {
                setCurrentText(
                    word.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1)
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className={`inline-block w-[2px] h-[1em] bg-fashion-gold ml-1 align-middle ${cursorClassName}`}
            />
        </span>
    );
}
