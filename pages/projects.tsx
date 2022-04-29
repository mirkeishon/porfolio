import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Footer from "../components/Footer";
import { sanityClient, urlFor} from "../sanity";
import { Post } from "../typings";

interface Props {
    projects: [Post],
    tags: [Post],
}

const Projects = ({projects, tags}: Props) => {
    const [allProjects, setAllProjects] = useState([...projects])
    
    const filterItems = (event : React.MouseEvent<HTMLButtonElement>) => {
        const tag: HTMLButtonElement = event.currentTarget;
        const newProjects = projects.filter((project)=>{      
            return project.tags.includes(tag.innerText);
        })
        setAllProjects([...newProjects])
    }
    
    
    console.log(projects)
    
    
    return (
        <><main className="max-w-7xl w-full rounded-xl bg-white p-6 m-auto mt-12">
            <Link href={'/'}>
                <p className="inline-flex items-center cursor-pointer text-blue-500 hover:text-blue-400"><span><FaAngleLeft/></span> Back to Home</p>
            </Link>
            <h2 className="mt-4 mb-4 text-black text-opacity-80 text-2xl font-semibold">Projects</h2>
            <div className="flex items-center overflow-auto">
                {tags.map((tag)=>{
                    return <button onClick={filterItems} key={tag._id} className="whitespace-nowrap hover:bg-blue-500 hover:text-white text-sm hover:border-blue-500 text-neutral-400 border-neutral-400 border mr-3 rounded-xl p-0.5 pl-4 pr-4">{tag.title}</button>
                })}
            </div>
            <div className="md:flex md:flex-wrap md:justify-start">
                {allProjects.map((project) => {
                    return <div key={project._id} className="md:w-1/4 mt-4 mb-4 overflow-hidden md:mr-4">
                            {project.mainImage ?
                                <img className="mt-4 w-full h-40 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(project.mainImage).url()!} alt="project image" /> :
                                <img className="mt-4 w-full h-40 rounded-xl" src='/logo.jpg' alt="logo" />}
                            <p className="mt-4 text-lg font-semibold text-neutral-700">{project.title}</p>
                            <p className="mt-4 text-base font-medium text-neutral-400">{project.description}</p>
                            <div className="flex space-x-4 mt-4">
                                <a className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-3xl" href={project.demo} target='_blank'>
                                    Demo
                                </a>
                                <a className="flex items-center border border-blue-500 text-blue-500 px-2 py-1 rounded-3xl" href={project.code} target='_blank'>
                                    Code
                                </a>
                            </div>
                        </div>                  
                })}

            </div>
        </main><Footer /></>
    )
  }
  
export default Projects;

export const getServerSideProps = async () => {
    const projectsQuery = `*[_type == 'project'] | order(publishedAt desc){
        _id,
        title,
        description,
        code,
        demo,
        mainImage,
        'tags': tag[]
      }`;
const projects = await sanityClient.fetch(projectsQuery);

const tag = `*[_type == 'tags']{
    _id,
    title
  }`

const tags = await sanityClient.fetch(tag);

return {
    props: {
    projects,
    tags,
    }
}
}
