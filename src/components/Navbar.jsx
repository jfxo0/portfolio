import { Link } from "react-router";

 function Navbar() {
    return (
        <header className="sticky top-0 z-20 bg-[url('/navBar.gif')] bg-cover bg-center bg-no-repeat  backdrop-blur bg-gray-50/80 border-b border-gray-200 font-itim">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div>
                    <Link to="/" className="font-semibold text-lg">
                        Janisha Wong
                    </Link>
                    <p className="text-sm text-gray-500">
                        Creative Media & Game Technologies Student
                    </p>
                </div>

                <nav className="flex gap-3">
                    <a
                        href="#top"
                        className="rounded-2xl px-4 py-2 text-sm bg-blue-100 text-gray-700 border border-gray-200 hover:border-gray-300"
                    >
                        Home
                    </a>
                    <a
                        href="#projects"
                        className="rounded-2xl px-4 py-2 text-sm bg-blue-100 text-gray-700 border border-gray-200 hover:border-gray-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="rounded-2xl px-4 py-2 text-sm bg-blue-100 text-gray-700 border border-gray-200 hover:border-gray-300"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;;