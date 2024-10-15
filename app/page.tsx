import Layout from './layout'
import ExperienceSection from '@/components/ExperienceSection';
import experiencesData from '../data/experiences.json';

export default function Home() {
  return (
    <Layout>
      <main>
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 heading">About Me</h2>
          <p className="text-[var(--light-slate)] leading-relaxed">
            {/* Your about content */}
          </p>
        </section>
        
        <ExperienceSection areas={experiencesData.professionalAreas} />
        
        <section id="skills" className="mt-16">
          <h2 className="text-3xl font-bold mb-4 heading">Skills</h2>
          {/* Render skills here */}
        </section>
      </main>
    </Layout>
  );
}