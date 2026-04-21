import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const SOCIALS = ["YT", "IG", "LI"];

const Footer = () => (
    <footer className="bg-surface border-t border-white/8 px-8 md:px-16 py-6 flex flex-wrap items-center justify-between gap-6">
        {/* Logo */}
        <p className="font-bold text-cream text-base m-0">
            Kscarx (Video Editor)
        </p>

        {/* Copyright */}
        <p className="text-muted text-sm tracking-wide m-0">
            © 2026 Kscarx. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex gap-4">
            <a href="https://www.instagram.com/edits_by_kscarx" className="bg-(--color)/10 hover:bg-(--color) hover:text-white p-2 rounded-full transition-colors">
                <FaInstagram size={16} />
            </a>
            <a href="https://x.com/noahkscarx" className="bg-(--color)/10 hover:bg-(--color) hover:text-white p-2 rounded-full transition-colors">
                <RiTwitterXLine size={16} />
            </a>
        </div>
    </footer>
);

export default Footer;