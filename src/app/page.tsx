'use client'
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
  return (
    <div>
      <h1>Guillaume Creusot</h1>
      <h2>Software Engineer</h2>
      #PHOTO#
      <p>
        Software engineer with 4 years of experience designing, implementing and managing web applications projects.
        My last job principally involved technologies like ASP.Net, Microsoft SQL Server, JS/JQuery and HTML/CSS, but outside
        of work, I’m an enthusiastic learner who likes to explore other languages such as Python and Rust or other domains
        like self-hosting or Linux.
        In my previous company, I was not only developer. I also had to deal with all aspect of a project including non-technical
        one like project management and client need analysis.
        I’m traveler who after traveling 9 months, search for a stable job in Malaysia.
      </p>
      <button
        onClick={() => handleDownload("Guillaume_Creusot_CV.pdf")}
        className="text-blue-500 hover:text-blue-600 transition duration-300"
      >
        Download
      </button>
    </div>);

}
