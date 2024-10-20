import React from 'react';
import { useParams } from 'react-router-dom';
import alquraisy from '../images/coverstory/alquraisy.png'; // Gambar sesuai materi
import '../style/styles.css';

const materials = [
  { 
    title: 'Trivia Q.S AT-TIN', 
    description: 'Learn the basics of React.js', 
    image: '../images/coverstory/attin.png', 
    content: '...' // other content
  },
  { 
    title: 'Trivia Q.S AL-QURAISY', 
    description: 'Understanding the content of Q.S Al-Quraisy', 
    image: alquraisy,
    content: (
      <div>
        <h2>Surat Al-Quraisy</h2>
        <p>لِإِيلَٰفِ قُرَيْشٍ  
        إِۦلَٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ  
        فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ  
        ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ
        </p>
        <p><strong>Artinya:</strong></p>
        <p>
          Karena kebiasaan orang-orang Quraisy (yaitu) kebiasaan mereka bepergian pada musim dingin dan musim panas. Maka hendaklah mereka menyembah Tuhan (pemilik) rumah ini (Ka‘bah). Yang telah memberi makanan kepada mereka untuk menghilangkan lapar dan mengamankan mereka dari rasa ketakutan.
        </p>
        <h3>Isi Kandungan Surat Al-Quraisy:</h3>
        <p>
          Surat Al-Quraisy berisi pengingat bagi suku Quraisy di Makkah untuk mensyukuri nikmat Allah yang telah memberi mereka rasa aman dan sejahtera. Surat ini mengingatkan bahwa rasa aman dan rezeki mereka adalah berkat penjagaan Kakbah.
        </p>
        <h3>Soal Surat Al-Quraisy:</h3>
        <ol>
          <li>Ada berapa ayat dalam Surat Al-Quraisy?</li>
          <li>Apa yang menjadi kebiasaan orang-orang Quraisy?</li>
          <li>Apa arti dari Al-Quraisy?</li>
          <li>Perintah apa yang ada di dalam Surat Al-Quraisy?</li>
          <li>Siapa yang memberi makan, dan mengamankan mereka dari rasa ketakutan?</li>
        </ol>
        <h3>Jawaban:</h3>
        <ul>
          <li>4 ayat</li>
          <li>Berpergian pada musim dingin dan musim panas</li>
          <li>Orang-orang Quraisy</li>
          <li>Menyembah Allah SWT</li>
          <li>Allah SWT</li>
        </ul>
      </div>
    )
  },
  { 
    title: 'Trivia Q.S AL-FIL', 
    description: 'Understanding Redux and Context API', 
    image: '../images/coverstory/alfil.png',
    content: '...' // other content
  }
];

const MaterialDetail = () => {
  const { title } = useParams(); 
  const material = materials.find((item) => item.title === title);

  if (!material) {
    return <h2>Material not found</h2>;
  }

  return (
    <div>
      <h2>{material.title}</h2>
      <img src={material.image} alt={material.title} />
      <p>{material.description}</p>
      <div className="story">
        {material.content} 
      </div>
    </div>
  );
};

export default MaterialDetail;
