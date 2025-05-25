import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">&lt; Choi/ &gt;</div>
        <nav className="nav">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            홈
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            소개
          </a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
            기술
          </a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
            경험
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
            프로젝트
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 