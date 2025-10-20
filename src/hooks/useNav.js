import { useState } from "react";

const useNav = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("about");

    const links = [
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "teams", label: "Teams" },
        { id: "portfolio", label: "Portfolio" },
        { id: "contact", label: "Contact" },
    ];

    return {
        open, setOpen,
        selected, setSelected,
        links,
    }
}

export default useNav;