import { GetStaticProps } from "next";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import Footer from "../../components/Footer";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import PortableText from 'react-portable-text';

interface Props {
    post: Post
}

const Post = ({ post }: Props) => {
    console.log(post)
  return (
    <>  <main className="max-w-7xl w-full rounded-xl bg-white p-6 m-auto mt-12">
            <Link href={'/blog'}>
                <p className="inline-flex items-center cursor-pointer text-blue-500 hover:text-blue-400"><span><FaAngleLeft/></span> Back to Blogs</p>
            </Link>
            <img className="w-full h-40 object-cover" src={urlFor(post.mainImage).url()} alt="main image" />
            <article className="pt-5">
                <h1 className=" text-3xl font-bold">{post.title}</h1>
                <h2 className="text-xl font-light">{post.description}</h2>

                <div className="flex items-center space-x-2">
                    <img className="w-10 h-10 rounded-full" src={urlFor(post.author.image).url()!} alt="author of the blog" />
                    <p className="font-extralight text-sm">
                        Blog post by <span className="text-blue-500">{post.author.name}</span> - Published at {new Date(post._createdAt).toLocaleString()}
                    </p>
                </div>
                <div className="mt-10">
                    <PortableText 
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!} 
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={post.body}
                    serializers={{
                        h1: (props: any) => (
                            <h1 className="text-2xl font-bold my-5" {...props}/>
                        ),
                        h2: (props: any) => (
                            <h1 className="text-xl font-bold my-5" {...props}/>
                        ),
                        li: ({children}: any) => (
                            <li className="ml-4 list-disc">{children}</li>
                        ),
                        link: ({ href, children }: any) => (
                            <a href={href} target='_blank' className="text-blue-500 hover:text-blue-400">
                                {children}
                            </a>
                        ),
                        normal: (props: any) => (
                            <p className="text-xl my-3" {...props}></p>
                        )
                    }}
                    />
                </div>
            </article>
        </main>
        <Footer />
    </>
  )
}

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == 'post']{
            _id,
            slug {
                current
            }
        }
    `;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author->{
            name,
            image
        },
        description,
        mainImage,
        slug,
        body
    }`;

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if(!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post,
        },
        revalidate: 60,
    }
}

