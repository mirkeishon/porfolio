import Head from 'next/head'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hobbies from '../components/Hobbies'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { sanityClient, urlFor} from '../sanity'
import { Post } from '../typings';



interface Props {
  posts: [Post],
  projects: [Post],
}

export default function Home({ posts, projects}: Props) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Portfolio</title>
          <link rel="icon" href="/logo.jpg" />
        </Head>

        <Header />
        <Skills />
        <Hobbies />
        <Projects projects={projects}/>
        <Blogs posts={posts} />
      </main>
      <Footer />
    </>
    
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
      _id,
      title,
      description,
      mainImage,
      slug
      
    }[0...3]`;
  const projectsQuery = `*[_type == 'project'] | order(publishedAt desc){
    _id,
    title,
    description,
    code,
    demo,
    mainImage,
  }[0...3]`;

  const projects = await sanityClient.fetch(projectsQuery)
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
      projects,
    }
  }
}
