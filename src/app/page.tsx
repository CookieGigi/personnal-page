
import Avatar from "@/components/avatar"
import Surface from "@/components/surface"
import Buttons from "./buttons";
import ToggleSwitch from "@/components/toggle_switch/toggle_switch";

export default function Home() {


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
                <h2 className="text-onSurface">.Net Developper</h2>
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
            <Buttons />
          </div>
        </div>
      </Surface>
      <ToggleSwitch />
    </div >);


}
