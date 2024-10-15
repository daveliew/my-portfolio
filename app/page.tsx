import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import experiencesData from '../data/experiences.json';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Welcome to My Portfolio</h1>
      
      {experiencesData.professionalAreas.map(area => (
        <ExperienceSection key={area.id} area={area} />
      ))}
      
      <SkillsSection skills={experiencesData.skills} />
    </div>
  );
}
