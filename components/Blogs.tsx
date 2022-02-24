import { Post } from '../typings'
import Link from "next/link";
import { urlFor } from "../sanity";
import { FaAngleRight } from "react-icons/fa";


interface Props {
    posts: [Post];
  }

const Blogs = ({posts}: Props) => {

    return (
        <section className="max-w-7xl w-full rounded-xl bg-white p-6 mt-12">
            <h2 className="mt-4 mb-4 text-black text-opacity-80 text-2xl font-semibold">Blogs</h2>
            <div className="flex items-center overflow-auto justify-end">
                <Link href={`/blog`}>
                  <button className="hover:text-blue-500 text-lg text-neutral-400  p-0.5 pl-4 pr-4 flex items-center whitespace-nowrap">See All <span><FaAngleRight/></span></button>
                </Link>
            </div>
            <div className="md:flex justify-between">
                {posts.map((post)=>{
                    return <Link key={post._id} href={`/blog/${post.slug.current}`}>
                        <div className="md:w-1/4 mt-4 mb-4 cursor-pointer overflow-hidden">
                            {post.mainImage ? 
                                <img className="mt-4 w-full h-40 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="blog post image" /> :
                                <img className="mt-4 w-full h-40 rounded-xl" src='/logo.jpg' alt="logo"/>
                            }                                
                            <p className="mt-4 text-lg font-semibold text-neutral-700">{post.title}</p>
                            <p className="mt-4 text-base font-medium text-neutral-400">{post.description}</p>                                                                    
                        </div>
                    </Link>
                })}               
            </div>
        </section>
    )
  }
  
  export default Blogs;