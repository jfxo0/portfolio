import { useState } from "react";
import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import { FolderGit2, ExternalLink, X } from "lucide-react";

function Project() {
    const { slug } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-3xl font-semibold mb-4">Project not found</h1>
                <Link
                    to="/"
                    className="rounded-2xl px-4 py-2 border border-gray-300 hover:border-gray-400 transition"
                >
                    Back Home
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <Link
                to="/"
                className="mb-8 inline-block rounded-2xl px-4 py-2 border border-gray-300 hover:border-gray-400 transition"
            >
                ← Back to projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                    <span className="inline-block mb-4 text-sm rounded-full px-3 py-1 bg-gray-100 border border-gray-200">
                        {project.category}
                    </span>

                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                        {project.title}
                    </h1>

                    <p className="text-lg text-gray-600 mb-6">{project.summary}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((item) => (
                            <span
                                key={item}
                                className="text-sm px-3 py-1 rounded-full bg-white border border-gray-200"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h2 className="font-semibold text-lg mb-2">My role</h2>
                            <p>{project.role}</p>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg mb-2">Challenge</h2>
                            <p>{project.challenge}</p>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg mb-2">Solution</h2>
                            <p>{project.solution}</p>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg mb-2">What I learned</h2>
                            <p>{project.learned}</p>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl px-5 py-3 bg-black text-white inline-flex items-center gap-2"
                        >
                            <FolderGit2 className="w-4 h-4" />
                            View GitHub
                        </a>

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-2xl px-5 py-3 border border-gray-300 inline-flex items-center gap-2"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                <div className="grid gap-4">
                    {project.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${project.title} preview ${index + 1}`}
                            onClick={() => setSelectedImage(img)}
                            className="w-full rounded-3xl border border-gray-200 shadow-sm cursor-zoom-in hover:opacity-90 transition"
                        />
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition"
                    >
                        <X className="w-7 h-7" />
                    </button>

                    <img
                        src={selectedImage}
                        alt="Enlarged project preview"
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-3xl shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
}

export default Project