// components/LearningMaterials.js
import React from 'react';

const LearningMaterials = () => {
  const materials = [
    { title: 'Trivia Q.S AT-TIN', description: 'Learn the basics of React.js' },
    { title: 'Trivia Q.S AL-QURAISY', description: 'Dive deeper into React.js concepts' },
    { title: 'Trivia Q.S AL-FIL', description: 'Understanding Redux and Context API' },
    { title: 'Trivia Q.S AL-ZALZALAH', description: 'Master hooks like useState and useEffect' },
    { title: 'Trivia Q.S AL-LAHAB', description: 'Implementing navigation using React Router' }
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
