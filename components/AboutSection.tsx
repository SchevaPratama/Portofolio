import React from 'react'

function AboutSection() {
  return (
    <section id="about">
      <div className="pb-12 my-12 md:pt-16 md:pb-48">
        <h1 className="text-4xl font-bold text-center">About Me</h1>
        <hr className='w-10 h-1 mx-auto my-4 border-0 rounded bg-cyan-400'></hr>
        <div className='flex flex-col items-stretch justify-center space-y-10 align-top md:text-justify md:space-y-0 md:p-4 md:space-x-10'>
          <div>
            <h1 className="mb-6 text-2xl font-bold text-center md:text-left">
              Get to know me!
            </h1>
            <p>
              My name is Scheva and I am a software engineer residing in Banyuwangi, Indonesia.
              I possess {" "}
              <span className="font-bold">{"strong determination"}</span>,
              <span className="font-bold">{" self-motivation"}</span>, and
              <span className="font-bold">{" ambition"}</span> towards achieving my goals in the field
            </p>
            <br />
            <p>
              I am a passionate software engineer with a focus on back-end development.
              I specialize in using two powerful technologies: Dart, which is a programming language used
              in Flutter framework, and Laravel, which is a popular PHP web framework.
            </p>
            <br />
            <p>
              As a freelancer and remote worker, I enjoy the flexibility that this type of work provides.
              I&#39;m able to choose my own hours and work from wherever I please,
              which allows me to fully immerse myself in my projects and deliver high-quality results.
            </p>
            <p>
              I&#39;m also an avid learner and always seeking new challenges and opportunities to improve my skills.
              That&#39;s why I frequently use my GitHub account to save my projects when
              I&#39;m learning something new or working on a project for a client
            </p>
            <br />
            <p>
              If you&#39;re interested in collaborating with me on a project or would like to learn more about my experience and expertise,
              please don&#39;t hesitate to get in touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection