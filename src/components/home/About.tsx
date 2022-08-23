import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { Element, Link } from 'react-scroll'
import profile2 from '../../assets/profile2.jpg'

const expList = [
  {
    value: '08+',
    text: 'Years experience'
  },
  {
    value: '20+',
    text: 'Completed projects'
  },
  {
    value: '05+',
    text: 'Companies worked'
  }
]

const About = () => {
  return (
    <Element name="about" className="min-h-screen max-w-6xl mx-auto">
      <div className="text-gray-300 flex flex-col items-center gap-2 px-32 py-52 my-auto">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="pt-2">My introduction</p>
        <div className="flex flex-row gap-2 pt-14">
          <div className="flex-1">
            <img
              src={profile2}
              className="object-contain rounded-full w-72 mx-auto"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <p>
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and UI/UX design, delivering quality
              work.
            </p>
            <div className="pt-10 flex flex-row">
              {expList.map((c, i) => (
                <div className="flex flex-col items-center gap-2" key={i}>
                  <h1 className="text-2xl font-bold">{c.value}</h1>
                  <p className="text-center">{c.text}</p>
                </div>
              ))}
            </div>

            <a
              className="btn w-52"
              href="https://johnny-resume.herokuapp.com"
              target={'_blank'}
            >
              <span>Download CV</span>
              <FaDownload size={18} />
            </a>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About
