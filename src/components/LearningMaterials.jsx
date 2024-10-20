import React from 'react';
import { useNavigate } from 'react-router-dom';
import attin from '../images/coverstory/attin.png';
import alquraisy from '../images/coverstory/alquraisy.png';
import allahab from '../images/coverstory/allahab.png';
import alzalzalah from '../images/coverstory/alzalzalah.png';
import alfil from '../images/coverstory/alfil.png';

const materials = [
  { 
    title: 'Trivia Q.S AT-TIN', 
    description: 'Learn the basics of React.js', 
    image: attin 
  },
  { 
    title: 'Trivia Q.S AL-QURAISY', 
    description: 'Dive deeper into React.js concepts', 
    image: alquraisy 
  },
  { 
    title: 'Trivia Q.S AL-FIL', 
    description: 'Understanding Redux and Context API', 
    image: alfil 
  },
  { 
    title: 'Trivia Q.S AL-ZALZALAH', 
    description: 'Master hooks like useState and useEffect', 
    image: alzalzalah 
  },
  { 
    title: 'Trivia Q.S AL-LAHAB', 
    description: 'Implementing navigation using React Router', 
    image: allahab 
  }
];

const LearningMaterials = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate(`/material/${title}`);
  };

  return (
    <section id="materials">
      <h2>Materi Pembelajaran</h2>
      <div className="card-container">
        {materials.map((material, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(material.title)}>
            <img src={material.image} alt={material.title} className="card-image" />
            <h3>{material.title}</h3>
            <p>{material.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningMaterials;
