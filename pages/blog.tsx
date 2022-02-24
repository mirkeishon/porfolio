import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Footer from "../components/Footer";
import { sanityClient, urlFor} from "../sanity";
import { Post } from "../typings";

interface Props {
    posts: [Post],
    tags: [Post]
}

const Blog = ({posts, tags}: Props) => {
    const [allPosts, setAllPosts] = useState([...posts])
    
    const filterItems = (event : React.MouseEvent<HTMLButtonElement>) => {
        const tag: HTMLButtonElement = event.currentTarget;
        const hola = posts.filter((project)=>{      
            return project.tags.includes(tag.innerText);
        })
        setAllPosts([...hola])
    }
    console.log(posts)
    return (
        <><main className="max-w-7xl w-full rounded-xl bg-white p-6 m-auto mt-12">
            <Link href={'/'}>
                <p className="inline-flex items-center cursor-pointer text-blue-500 hover:text-blue-400"><span><FaAngleLeft/></span> Back to Home</p>
            </Link>
            <h2 className="mt-4 mb-4 text-black text-opacity-80 text-2xl font-semibold">Blogs</h2>
            <div className="flex items-center overflow-auto">
                {tags.map((tag)=>{
                    return <button onClick={filterItems} key={tag._id} className="whitespace-nowrap hover:bg-blue-500 hover:text-white text-sm hover:border-blue-500 text-neutral-400 border-neutral-400 border mr-3 rounded-xl p-0.5 pl-4 pr-4">{tag.title}</button>
                })}
            </div>
            <div className="md:flex md:flex-wrap md:justify-between">
                {posts.map((post) => {
                    return <Link key={post._id} href={`/blog/${post.slug.current}`}>
                        <div className="md:w-1/4 mt-4 mb-4 cursor-pointer overflow-hidden mr-4">
                            {post.mainImage ?
                                <img className="mt-4 w-full h-40 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="blog post image" /> :
                                <img className="mt-4 w-full h-40 rounded-xl" src='/logo.jpg' alt="logo" />}
                            <p className="mt-4 text-lg font-semibold text-neutral-700">{post.title}</p>
                            <p className="mt-4 text-base font-medium text-neutral-400">{post.description}</p>
                        </div>
                    </Link>;
                })}

            </div>
        </main><Footer /></>
    )
  }
  
export default Blog

export const getServerSideProps = async () => {
const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
        name,
        image
    },
    description,
    mainImage,
    slug,
    'tags': categories[]
    }`;
const posts = await sanityClient.fetch(query);

const tag = `*[_type == 'category']{
    _id,
    title
  }`

const tags = await sanityClient.fetch(tag);

return {
    props: {
    posts,
    tags,
    }
}
}