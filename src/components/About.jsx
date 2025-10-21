import { ENV } from "../configs/env";

export default function About() {
    return (
        <section id="about" className="max-w-5xl mx-auto py-20 px-4 border-b border-gray-200">
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                {ENV.DEVELOPERS_NAME} is a forward-thinking software company dedicated to creating innovative solutions that empower our clients.
                Our mission is to deliver high-quality software that drives growth and fosters innovation for professionals, organizations, and businesses worldwide.
                <br /> <br />
                Inspired by the remarkable slime mold <i>(Physarum polycephalum)</i>—known for solving complex problems through collaboration—
                {ENV.DEVELOPERS_NAME} embodies the same spirit. We are a team of developers who come together to build, collaborate, and craft solutions that help our clients thrive and scale.
            </p>
            <a href="#" className="text-gray-900 underline hover:text-black">Read more about us →</a>
        </section>
    );
}
