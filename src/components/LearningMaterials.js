// components/LearningMaterials.js
import React from 'react';

const LearningMaterials = () => {
  const materials = [
    { title: 'React Basics', description: 'Learn the basics of React.js' },
    { title: 'Advanced React', description: 'Dive deeper into React.js concepts' },
    { title: 'State Management', description: 'Understanding Redux and Context API' },
    { title: 'React Hooks', description: 'Master hooks like useState and useEffect' },
    { title: 'React Routing', description: 'Implementing navigation using React Router' }
  ];

  return (
    <section id="materials">
      <h2>Materi Pembelajaran</h2>
      <div className="card-container">
        {materials.map((material, index) => (
          <div className="card" key={index}>
            <h3>{material.title}</h3>
            <p>{material.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningMaterials;
