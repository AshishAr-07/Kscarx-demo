"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const NAV_LINKS = [
        { label: "Work", id: "work" },
        { label: "About", id: "hero" },
        { label: "Contact", id: "contact" },
    ];

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const smoothTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between max-w-5xl lg:max-w-7xl mx-auto px-8 lg:px-0 transition-all duration-300 ${scrolled ? "py-4 nav-scrolled bg-black/30 bg-backdrop-blur-md" : "py-6"
                    }`}
            >
                {/* Logo */}
                <Link
                    href="#hero"
                    className=" text-xl font-bold text-cream no-underline"
                    onClick={(e) => {
                        e.preventDefault();
                        smoothTo("hero");
                    }}
                >
                    Kscarx
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-10 list-none m-0 p-0">
                    {NAV_LINKS.map(({ label, id }) => (
                        <li key={id}>
                            <button
                                onClick={() => smoothTo(id)}
                                className="text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <button
                    onClick={() => smoothTo("contact")}
                    className="hidden md:inline-flex text-xs uppercase tracking-widest px-8 py-2 border border-(--color)  rounded bg-transparent hover:bg-(--color) hover:text-white transition-colors duration-200 cursor-pointer"
                >
                    Hire Me
                </button>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="block w-8 h-px bg-(--color)" />
                    <span className="block w-8 h-px bg-(--color)" />
                    <span className="block w-8 h-px bg-(--color)" />
                </button>
            </nav>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-64 bg-black/90 backdrop-blur-md z-40 transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {NAV_LINKS.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => {
                                smoothTo(id);
                                setMenuOpen(false);
                            }}
                            className=" uppercase tracking-widest text-white hover:text-(-color) transition"
                        >
                            {label}
                        </button>
                    ))}

                </div>
            </div>
        </>
    );
}