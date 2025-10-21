import { ENV } from "../configs/env";

export default function Footer() {
    return (
        <footer className="text-center text-gray-600 py-6 border-t border-gray-200">
            <p>© {new Date().getFullYear()} {ENV.DEVELOPERS_NAME}. All rights reserved.</p>
        </footer>
    );
}
