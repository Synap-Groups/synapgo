import { useNavContext } from "../contexts/NavProvider";


const Navbar = () => {
    const { open, setOpen, selected, setSelected, links } = useNavContext();

    return (
        <header className="border-b border-gray-300 sticky top-0 bg-white/90 backdrop-blur z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold tracking-tight flex gap-x-1.5">
                    <p>{`< >`}</p>
                    <h1>Chicode</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-gray-700">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setSelected(link.id)}
                            className={`pb-1 hover:text-black transition border-b-2 ${selected === link.id ? "border-black text-black" : "border-transparent"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden border p-1 rounded"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <nav className="flex flex-col text-gray-700">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => {
                                    setSelected(link.id);
                                    setOpen(false);
                                }}
                                className={`p-3 border-b hover:text-black ${selected === link.id ? "border-l-4 border-black bg-gray-50" : ""
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
export default Navbar;
