import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="section-content">
        <h2 className="section-title">소개</h2>
        <div className="about-content">
          <div className="about-image">
            <User size={120} />
          </div>
          <div className="about-text">
            <p>
              안녕하세요! 저는 열정적인 풀스택 개발자입니다. 
              사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하며, 
              최신 기술 트렌드를 따라가며 지속적으로 학습하고 있습니다.
            </p>
            <p>
              React, TypeScript, Node.js 등의 기술을 주로 사용하며, 
              깔끔하고 유지보수가 쉬운 코드를 작성하는 것을 중요하게 생각합니다. 
              팀워크를 중시하며 협업을 통해 더 나은 결과물을 만들어내는 것을 즐깁니다.
            </p>
            <p>
              새로운 도전을 두려워하지 않으며, 문제 해결 과정에서 창의적인 접근을 시도합니다. 
              사용자가 만족할 수 있는 서비스를 만드는 것이 저의 목표입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 