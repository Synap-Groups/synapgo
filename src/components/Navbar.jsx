import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-gray-300 sticky top-0 bg-white/90 backdrop-blur z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold tracking-tight flex gap-x-1.5">
                    <p>{`< >`}</p>
                    <h1>Chicode</h1>
                </div>
                <nav className="hidden md:flex gap-6 text-gray-700">
                    <a href="#about" className="hover:text-black">About</a>
                    <a href="#services" className="hover:text-black">Services</a>
                    <a href="#members" className="hover:text-black">Teams</a>
                    <a href="#portfolio" className="hover:text-black">Portfolio</a>
                    <a href="#contact" className="hover:text-black">Contact</a>
                </nav>
                <button onClick={() => setOpen(!open)} className="md:hidden border p-1 rounded">
                    ☰
                </button>
            </div>
            {open && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <nav className="flex flex-col text-gray-700">
                        <a href="#about" className="p-3 border-b hover:text-black">About</a>
                        <a href="#services" className="p-3 border-b hover:text-black">Services</a>
                        <a href="#members" className="p-3 border-b hover:text-black">Members</a>
                        <a href="#portfolio" className="p-3 border-b hover:text-black">Portfolio</a>
                        <a href="#contact" className="p-3 hover:text-black">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
