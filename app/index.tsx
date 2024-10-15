import dynamic from 'next/dynamic';
import Layout from './layout';
import ExperienceSection from '../components/experience/ExperienceSection';
import experiencesData from '../data/experiences.json';
import Image from 'next/image';

const SkillTree = dynamic(() => import('@/components/skills/SkillTree'), { ssr: false });

export default function Home() {
  const skills = [
    {
      name: 'Digital Marketing & Growth',
      subskills: ['AdTech', 'Content Marketing', 'SEO'],
    },
    {
      name: 'Startup Strategies & Operations',
      subskills: ['Business Operations', 'Customer Acquisition', 'Scaling'],
    },
    {
      name: 'Business Analysis & Strategy',
      subskills: ['Financial Modeling', 'Data Analysis', 'SaaS Strategies'],
    },
    // Add more skills as needed
  ];

  return (
    <Layout>
      <main className="bg-space-black text-off-white min-h-screen p-4">
        <section className="mb-16 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="David Liew Logo"
            width={150}
            height={150}
            className="mr-4"
          />
          <h1 className="text-4xl font-bold text-burgundy">daveliew</h1>
        </section>
        
        <section id="skills" className="pt-16 pb-32">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <SkillTree skills={skills} />
        </section>
        
        <section id="about" className="mb-16 px-4">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          {/* Your about content */}
        </section>
        
        <ExperienceSection areas={experiencesData.professionalAreas} />
      </main>
    </Layout>
  );
}
