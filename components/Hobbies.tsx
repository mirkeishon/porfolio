const Hobbies = () => {

    return (
        <section className="max-w-7xl w-full rounded-xl bg-white p-6 mt-12">  
            <h2 className="mt-4 mb-4 text-black text-opacity-80 text-2xl font-semibold">Hobbies</h2>
            <div className="mt-4 mb-4 md:flex justify-between">
                <div className="mt-4 mb-4 md:w-1/4">             
                    <img className="mt-4 w-full h-56 rounded-xl" src="/Gaming.jpg" alt="Photo by Mateo on Unsplash" />
                    <p className="mt-4 text-lg font-semibold text-neutral-700">Gaming</p>
                    <p className="text-base font-medium text-neutral-400">Not an avid gamer but i like some games</p>                    
                </div>
                <div className="mt-4 mb-4 md:w-1/4">             
                    <img className="mt-4 w-full h-56 rounded-xl" src="/Learning.jpg" alt="Photo by Tim Mossholder on Unsplash" />
                    <p className="mt-4 text-lg font-semibold text-neutral-700">Learning</p>
                    <p className="text-base font-medium text-neutral-400">I like to learn about everything, the subject doesn't matter</p>                    
                </div>
                <div className="mt-4 mb-4 md:w-1/4">             
                    <img className="mt-4 w-full h-56 rounded-xl" src="/Web Browsing.jpg" alt="Photo by Firmbee.com on Unsplash" />
                    <p className="mt-4 text-lg font-semibold text-neutral-700">Web Navigation</p>
                    <p className="text-base font-medium text-neutral-400">Learning is about investigation, and the internet is the world's information in my hands</p>                    
                </div>
            </div>
        </section>
  )
}

export default Hobbies;