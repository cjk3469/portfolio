import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: '프론트엔드 개발',
      description: 'React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS를 사용한 모던 웹 개발'
    },
    {
      icon: <Database size={24} />,
      title: '백엔드 개발',
      description: 'Node.js, Express, Python, Django를 활용한 서버 사이드 개발 및 API 구축'
    },
    {
      icon: <Globe size={24} />,
      title: '웹 기술',
      description: 'RESTful API, GraphQL, WebSocket, PWA 등 다양한 웹 기술 활용'
    },
    {
      icon: <Smartphone size={24} />,
      title: '모바일 개발',
      description: 'React Native를 사용한 크로스 플랫폼 모바일 앱 개발'
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="section-content">
        <h2 className="section-title">기술 스택</h2>
        <p className="section-subtitle">
          다양한 기술을 활용하여 완성도 높은 웹 서비스를 개발합니다
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 