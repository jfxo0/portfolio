import { Link } from "react-router";
import { FolderGit2 } from "lucide-react";

 function ProjectCard({ project }) {
    return (
        <div
            className="bg-[url('public/background_portfolio.gif')] bg-cover bg-center bg-no-repeat  border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-52 object-cover"
            />
            <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-xs rounded-full px-3 py-1 bg-gray-100 border border-gray-200">
            {project.status}
          </span>
                </div>

                <p className="text-gray-600 mb-4">{project.summary}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="text-sm px-3 py-1 rounded-full bg-gray-50 border border-gray-200"
                        >
              {item}
            </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <Link
                        to={`/projects/${project.slug}`}
                        className="rounded-2xl px-4 py-2 bg-blue-200 text-white hover:opacity-90 transition"
                    >
                        View Project
                    </Link>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl px-4 py-2 border border-gray-300 hover:border-gray-400 transition inline-flex items-center gap-2"
                    >
                        <FolderGit2 className="w-4 h-4"/>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
 }

export default ProjectCard;