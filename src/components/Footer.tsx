import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>함께 일해요!</h3>
          <p>새로운 프로젝트나 협업 기회가 있다면 언제든 연락주세요.</p>
          <a href="mailto:contact@example.com" className="footer-email">
            <Mail size={18} />
            contact@example.com
          </a>
        </div>
        <div className="social-links">
          <a href="#" className="social-link" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <Twitter size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Portfolio. 모든 권리 보유.</p>
      </div>
    </footer>
  );
};

export default Footer; 