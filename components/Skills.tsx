import skills from '../assets/data'
const Skills = () => {
    return (
        <section className=" max-w-7xl w-full lg:flex rounded-xl bg-white p-6 mt-12">
            <div className='w-full'>    
                <h2 className="mt-4 mb-4 text-black text-opacity-80 text-2xl font-semibold">Front End</h2>
                <div className="mt-4 mb-4">
                    {skills.map((item)=>{
                        const {skill, proficiency} = item;
                        return (                
                            <div key={skill} className="flex justify-between items-center">
                                <p className="mr-4 text-lg font-medium text-neutral-700">{skill}</p>
                                <div className="w-2/4 h-2 rounded-xl bg-gray-400">
                                    <div style={{width: `${proficiency}%`}} className={'h-2 rounded-xl bg-blue-500'}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills;