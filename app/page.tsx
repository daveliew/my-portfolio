import experiencesData from '../data/experiences.json';

export default function Home() {
  return (
    <div>
      {experiencesData.professionalAreas.map(area => (
        <section key={area.id}>
          <h2>{area.title}</h2>
          {/* Render experiences and skills */}
        </section>
      ))}
      {/* Render technical and soft skills */}
    </div>
  );
}