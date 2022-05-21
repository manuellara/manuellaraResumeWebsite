import ContactTiles from "../components/ContactTiles";
import Heading from "../components/Heading";
import SkillsChart from "../components/SkillsChart";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div className="container rounded-lg bg-white">

      <div className="flex flex-wrap place-content-around xl:mb-5 lg:mb-5 md:mb-5 sm:mb-5">
        <div className="w-1/2">
          <img className="rounded-full" src="/avatar.jpg" width={1930} height={2143} alt="profile picture" />
        </div>

        <div className="mt-5">
          <Heading text="Manuel Lara" />

          <ContactTiles />
        </div>
      </div>

      <Heading text="Employment History" />
      <Timeline />


      <Heading text="Skills"/>
      <SkillsChart />
    </div>
  )
}
