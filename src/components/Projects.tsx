import React from 'react';
import { ExternalLink, Github, Monitor } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-커머스 플랫폼',
      description: '현대적인 UI/UX를 갖춘 온라인 쇼핑몰 플랫폼입니다. 사용자 친화적인 인터페이스와 안전한 결제 시스템을 구현했습니다.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      icon: <Monitor size={40} />,
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: '태스크 관리 앱',
      description: '팀 협업을 위한 프로젝트 관리 도구입니다. 실시간 업데이트와 직관적인 칸반 보드를 제공합니다.',
      technologies: ['React', 'Redux', 'Express', 'Socket.io'],
      icon: <Monitor size={40} />,
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: '날씨 대시보드',
      description: '실시간 날씨 정보와 예보를 제공하는 반응형 웹 애플리케이션입니다. 깔끔한 디자인과 직관적인 UI가 특징입니다.',
      technologies: ['React', 'API Integration', 'CSS3', 'Chart.js'],
      icon: <Monitor size={40} />,
      githubLink: '#',
      liveLink: '#'
    },{
      title: '날씨 대시보드',
      description: '실시간 날씨 정보와 예보를 제공하는 반응형 웹 애플리케이션입니다. 깔끔한 디자인과 직관적인 UI가 특징입니다.',
      technologies: ['React', 'API Integration', 'CSS3', 'Chart.js'],
      icon: <Monitor size={40} />,
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: '날씨 대시보드',
      description: '실시간 날씨 정보와 예보를 제공하는 반응형 웹 애플리케이션입니다. 깔끔한 디자인과 직관적인 UI가 특징입니다.',
      technologies: ['React', 'API Integration', 'CSS3', 'Chart.js'],
      icon: <Monitor size={40} />,
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="section-content">
        <h2 className="section-title">프로젝트</h2>
        <p className="section-subtitle">
          다양한 기술을 활용하여 개발한 프로젝트들을 소개합니다
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.icon}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="project-link">
                    <Github size={16} style={{ marginRight: '4px' }} />
                    GitHub
                  </a>
                  <a href={project.liveLink} className="project-link">
                    <ExternalLink size={16} style={{ marginRight: '4px' }} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 