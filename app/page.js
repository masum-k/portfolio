import SectionAbout from "@/components/sections/SectionAbout";
import SectionContact from "@/components/sections/SectionContact";
import SectionHero from "@/components/sections/SectionHero";
import SectionLearning from "@/components/sections/SectionLearning";
import SectionProjects from "@/components/sections/SectionProjects";
import SectionSkills from "@/components/sections/SectionSkills";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionSkills />
      <SectionLearning />
      <SectionProjects />
      <SectionContact />
    </>
  );
}