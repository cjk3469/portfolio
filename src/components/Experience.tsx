import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: '시니어 프론트엔드 개발자',
      company: 'Tech Company',
      period: '2023.03 - 현재',
      location: '서울, 대한민국',
      description: 'React 기반 웹 애플리케이션 개발 및 팀 리딩을 담당하고 있습니다.',
      achievements: [
        '사용자 경험 개선으로 전환율 25% 향상',
        '코드 리뷰 프로세스 도입으로 버그 40% 감소',
        '신입 개발자 3명 멘토링'
      ]
    },
    {
      title: '풀스택 개발자',
      company: 'Startup Inc.',
      period: '2021.06 - 2023.02',
      location: '서울, 대한민국',
      description: '스타트업에서 프론트엔드부터 백엔드까지 전체 개발을 담당했습니다.',
      achievements: [
        'MVP 제품 개발 및 출시',
        '월 활성 사용자 10,000명 달성',
        'AWS 인프라 구축 및 운영'
      ]
    },
    {
      title: '주니어 개발자',
      company: 'Software Solutions',
      period: '2020.01 - 2021.05',
      location: '서울, 대한민국',
      description: '웹 개발 기초를 다지며 다양한 프로젝트에 참여했습니다.',
      achievements: [
        '레거시 코드 리팩토링 프로젝트 참여',
        '테스트 커버리지 80% 달성',
        '사내 개발 문서화 시스템 구축'
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="section-content">
        <h2 className="section-title">경험</h2>
        <p className="section-subtitle">
          다양한 환경에서 쌓은 개발 경험과 성과를 소개합니다
        </p>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="experience-company">{exp.company}</span>
                    <div className="experience-details">
                      <span className="experience-period">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="experience-location">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-achievements">
                  <h4>
                    <Award size={16} />
                    주요 성과
                  </h4>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>
                        <TrendingUp size={14} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 