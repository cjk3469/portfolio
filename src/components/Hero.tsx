import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>안녕하세요, 저는 개발자입니다</h1>
        <p>
          창의적이고 혁신적인 웹 솔루션을 만드는 것을 좋아합니다.
          <br />
          사용자 경험을 최우선으로 생각하며 깔끔하고 효율적인 코드를 작성합니다.
        </p>
        <a 
          href="#projects" 
          className="cta-button"
          onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
        >
          프로젝트 보기
        </a>
      </div>
    </section>
  );
};

export default Hero; 