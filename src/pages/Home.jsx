import { Mail, User, FolderGit2} from "lucide-react";
import SectionTitle from "../components/Title.jsx";
import ProjectCard from "../components/Cards.jsx";
import LinkedInIcon from "../components/LinkedIn.jsx";

import { projects } from "../data/projects";

export default function HomePage() {
    return (
        <>
            <section id="top" className="max-w-6xl mx-auto px-6 py-20 ">
                <div className="grid gap-10 items-center">
                    <div>
            <span className="inline-block mb-4 text-sm rounded-full px-3 py-1 bg-green-500 border  shadow-sm">
              Available for internship
            </span>

                        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
                            Janisha Wong
                        </h1>

                        <p className="text-lg text-gray-600 max-w-xl mb-8">
                            I am a Creative Media and Game Technologies student focused on
                            front-end and full-stack development. This portfolio shows my
                            projects, my process, and the skills I am developing.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="rounded-2xl px-5 py-3 bg-[url('public/button.jpg')] bg-cover bg-center bg-no-repeat text-indigo-300  hover:opacity-90 transition"
                            >
                                View Projects
                            </a>

                            <a
                                href="mailto:janisha.ly.wong@gmail.com"
                                className="rounded-2xl px-5 py-3 border border-gray-300 bg-[url('public/button.jpg')] bg-cover bg-center bg-no-repeat text-indigo-300 inline-flex items-center gap-2 hover:border-gray-400 transition"
                            >
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-3xl border border-gray-200 p-5">
                                <User className="w-5 h-5 mb-3" />
                                <h3 className="font-semibold mb-1">About me</h3>
                                <p className="text-sm text-gray-600">
                                    Student developer with interest in UI, front-end, and
                                    full-stack work.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-gray-200 p-5">
                                <FolderGit2 className="w-5 h-5 mb-3" />
                                <h3 className="font-semibold mb-1">Projects</h3>
                                <p className="text-sm text-gray-600">
                                    School, personal, and case-study projects presented clearly.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-gray-200 p-5 col-span-2">
                                <h3 className="font-semibold mb-2">Tech stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "JavaScript", "Node.js", "PHP", "Laravel", "CSS"].map(
                                        (item) => (
                                            <span
                                                key={item}
                                                className="text-sm px-3 py-1 rounded-full bg-gray-50 border border-gray-200"
                                            >
                        {item}
                      </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
                <SectionTitle
                    icon={FolderGit2}
                    title="Projects"
                    subtitle="A selection of projects that show my development skills, design choices, and growth."
                />
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
                <SectionTitle
                    icon={Mail}
                    title="Contact"
                    subtitle="Looking for an intern or want to know more about my work?"
                />

                <div className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Let’s connect</h3>
                        <p className="text-gray-600">
                            You can reach me by email or view more of my code on GitHub.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:janisha.ly.wong@gmail.com"
                            className="rounded-2xl px-5 py-3 bg-black text-white inline-flex items-center gap-2"
                        >
                            <Mail className="w-4 h-4"/>
                            Email Me
                        </a>
                        <a
                            href="https://github.com/jfxo0"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl px-5 py-3 border border-gray-300 inline-flex items-center gap-2"
                        >
                            <FolderGit2 className="w-4 h-4"/>
                            GitHub
                        </a>
                        <a
                            href="https://nl.linkedin.com/in/janisha-wong-03257534a"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl px-5 py-3 border border-gray-300 inline-flex items-center gap-2 hover:border-gray-400 transition"
                        >
                            <LinkedInIcon className="w-4 h-4"/>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}