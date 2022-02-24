import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"
import { urlFor } from "../sanity"
import { Post } from "../typings"

interface Props {
  projects: [Post]
}

const Projects = ({projects}: Props) => {
  return (
    <section className="max-w-7xl w-full rounded-xl bg-white p-6 mt-12">  
        <h2 className="mt-4 mb-4 text-black text-opacity-80 text-2xl font-semibold">Projects</h2>
        <div className="mt-4 mb-4">
            <div className="flex items-center overflow-auto justify-end">
                <Link href={`/projects`}>
                  <button className="hover:text-blue-500 text-lg text-neutral-400  p-0.5 pl-4 pr-4 flex items-center whitespace-nowrap">See All <span><FaAngleRight/></span></button>
                </Link>
            </div>
            <div className="md:flex justify-between">
            {projects.map((project)=>{
                    return <div key={project._id} className="md:w-1/4 mt-4 mb-4 overflow-hidden flex flex-col justify-between">
                            {project.mainImage ? 
                                <img className="mt-4 w-full h-40 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(project.mainImage).url()!} alt="test" /> :
                                <img className="mt-4 w-full h-40 rounded-xl" src='/logo.jpg' alt="test"/>
                            }                                
                            <p className="mt-4 text-lg font-semibold text-neutral-700">{project.title}</p>
                            <p className="mt-4 text-base font-medium text-neutral-400">{project.description}</p>                                                                    
                            <div className="flex space-x-4 mt-4">
                                <a className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-3xl cursor-pointer" href={project.demo} target='_blank'>
                                    Demo
                                </a>
                                <a className="flex items-center border border-blue-500 text-blue-500 px-2 py-1 rounded-3xl cursor-pointer" href={project.code} target='_blank'>
                                    Code
                                </a>
                            </div>
                        </div>
                })}
                
            </div>
        </div>
    </section>
  )
}

export default Projects