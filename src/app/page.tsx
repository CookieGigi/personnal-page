'use client'

import Avatar from "@/components/avatar"
import Button from "@/components/button"
import Surface from "@/components/surface"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  const handleDownload = async (key: string) => {
    try {
      const response = await fetch('/api/files', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key })
      })
      const { signedUrl } = await response.json()
      window.open(signedUrl, '_blank')
    } catch (error) {
      console.error('Error downloading file:', error)
      alert('Error downloading file')
    }
  }

  const handleLink = async (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <div className="background min-h-svh h-fit  flex flex-col justify-center items-center">
      <Surface className="m-4">
        <div className="flex flex-col m-4 gap-4">
          <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="flex flex-row justify-center m-4 min-w-[232px] grow">
              <Avatar src="/photo-profile.png" alt="Photo de profil" size={200} />
            </div>
            <div className="flex flex-col grow-[10]">
              <div className="">
                <h1 className="text-onSurface">Guillaume Creusot</h1>
              </div>
              <div className="">
                <h2 className="text-onSurface">Software Engineer</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center max-w-[1000px] ">
            <p className="text-onSurface">
              Software engineer with 4 years of experience designing, implementing and managing web applications projects.
              My last job principally involved technologies like ASP.Net, Microsoft SQL Server, JS/JQuery and HTML/CSS, but outside
              of work, I’m an enthusiastic learner who likes to explore other languages such as Python and Rust or other domains
              like self-hosting or Linux.
              In my previous company, I was not only developer. I also had to deal with all aspect of a project including non-technical
              one like project management and client need analysis.
              I’m traveler who after traveling 9 months, search for a stable job in Malaysia.
            </p>
          </div>
          <div className="flex flex-row justify-around items-center flex-wrap">
            <Button
              onClick={() => handleLink("https://linkedin.com/in/guillaume-creusot-678237179")}
              className="bg-primaryContainer text-onPrimaryContainer w-32"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>Linkedin</span>
            </Button>
            <Button
              onClick={() => handleLink("https://github.com/CookieGigi")}
              className="bg-secondaryContainer text-onSecondaryContainer w-32"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Github</span>
            </Button>
            <Button
              onClick={() => handleDownload("Guillaume_Creusot_CV.pdf")}
              className="bg-tertiaryContainer text-onTertiaryContainer w-32"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>CV</span>
            </Button>
          </div>
        </div>
      </Surface>
    </div >);


}
