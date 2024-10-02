// components/Team.js
import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Project Manager (PM)'},
    { name: 'Jane Doe', role: 'CTO' },
    { name: 'Mike Smith', role: 'CFO' },
    { name: 'Sarah Johnson', role: 'CMO' },
    { name: 'David Lee', role: 'Developer' },
    { name: 'Linda White', role: 'Designer' },
    { name: 'Chris Evans', role: 'Project Manager' },
    { name: 'Amy Adams', role: 'Content Writer' },
    { name: 'Steve Brown', role: 'QA Engineer' },
    { name: 'Emily Clark', role: 'HR' },
    { name: 'Sophia Davis', role: 'Account Manager' },
    { name: 'Daniel King', role: 'Business Analyst' }
  ];

  return (
    <section id="team">
      <h2>Anggota Tim</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className={`team-card ${member.isPM ? 'pm' : ''}`} key={index}>
            <div className="team-photo"></div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
