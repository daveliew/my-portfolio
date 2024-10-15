import Layout from './layout'
import ExperienceSection from '@/components/experience/ExperienceSection';
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

  return (
    <Layout>
      <main>

        <ExperienceSection areas={professionalAreas} />
        
        <section id="skills" className="mt-16">
          <h2 className="text-3xl font-bold mb-4 heading">Skills</h2>
          {/* Render skills here */}
        </section>
      </main>
    </Layout>
  );
}
