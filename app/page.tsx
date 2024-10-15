import Layout from './layout'
import ExperienceSection from '@/components/experience/ExperienceSection';
import SkillsChart from '@/components/skills/SkillsChart';
import SkillTree from '@/components/skills/SkillTree';
import experiencesData from '../data/experiences.json';

export default function Home() {
  const professionalAreas = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Growth',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'digital-marketing')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'digital-marketing')?.skills || [],
    },
    {
      id: 'startup-strategies',
      title: 'Startup Strategies & Operations',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'startup-strategies')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'startup-strategies')?.skills || [],
    },
    {
      id: 'business-analysis',
      title: 'Business Analysis & Strategy',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'business-analysis')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'business-analysis')?.skills || [],
    },
  ];

  const softSkills = [
    { name: "Leadership", score: 4 },
    { name: "Communication", score: 4 },
    { name: "Problem Solving", score: 5 },
    { name: "Adaptability", score: 5 },
    { name: "Teamwork", score: 5 },
  ];

  const techSkills = [
    {
      name: 'Frontend Development',
      subskills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'Backend Development',
      subskills: ['Node.js', 'Express', 'Python', 'Django'],
    },
    {
      name: 'Data Analysis',
      subskills: ['SQL', 'Python', 'Pandas', 'Tableau'],
    },
  ];

  return (
    <Layout>
      <main>
        <section id="skills" className="mt-16">
          <h2 className="text-3xl font-bold mb-4 heading">Skills Overview</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
              <SkillsChart skills={softSkills} />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <SkillTree skills={techSkills} />
            </div>
          </div>
        </section>
        
        <section id="experiences" className="mt-16">
          <h2 className="text-3xl font-bold mb-4 heading">Professional Experience</h2>
          <ExperienceSection areas={professionalAreas} />
        </section>
      </main>
    </Layout>
  );
}
