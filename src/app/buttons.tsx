'use client'

import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "@/components/button"

export default function Buttons() {
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
    <>
      <Button
        onClick={() => handleLink("https://linkedin.com/in/guillaume-creusot-678237179")}
        className="bg-primaryContainer text-onPrimaryContainer w-32"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>Linkedin</span>
      </Button><Button
        onClick={() => handleLink("https://github.com/CookieGigi")}
        className="bg-secondaryContainer text-onSecondaryContainer w-32"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>Github</span>
      </Button><Button
        onClick={() => handleDownload("Guillaume_Creusot_CV.pdf")}
        className="bg-tertiaryContainer text-onTertiaryContainer w-32"
      >
        <FontAwesomeIcon icon={faDownload} />
        <span>CV</span>
      </Button>
    </>
  )
}
