import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="content-container fade-in">
        <div className="about-header">
          <h1>About Our Platform</h1>
          <p className="about-subtitle">
            We are committed to providing secure, high-quality content while protecting intellectual property and ensuring a safe user experience.
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to create a secure digital environment where valuable content can be shared and consumed without the risk of unauthorized copying, distribution, or misuse. We believe that protecting intellectual property is essential for fostering creativity and innovation.
            </p>
          </div>

          <div className="about-section">
            <h2>Security First Approach</h2>
            <div className="security-features">
              <div className="security-item">
                <div className="security-icon">🔒</div>
                <h3>Content Protection</h3>
                <p>Advanced measures to prevent copying, printing, and unauthorized access to content.</p>
              </div>
              <div className="security-item">
                <div className="security-icon">🛡️</div>
                <h3>Access Control</h3>
                <p>Multi-factor authentication and verification systems to ensure legitimate access.</p>
              </div>
              <div className="security-item">
                <div className="security-icon">🔐</div>
                <h3>Data Encryption</h3>
                <p>End-to-end encryption and secure transmission protocols for all data.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Technology Stack</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <h3>Frontend</h3>
                <ul>
                  <li>React 18 with modern hooks</li>
                  <li>Responsive design with CSS Grid</li>
                  <li>Progressive Web App features</li>
                  <li>Accessibility compliance</li>
                </ul>
              </div>
              <div className="tech-item">
                <h3>Security</h3>
                <ul>
                  <li>Content Security Policy (CSP)</li>
                  <li>XSS protection headers</li>
                  <li>Code obfuscation</li>
                  <li>Session management</li>
                </ul>
              </div>
              <div className="tech-item">
                <h3>Performance</h3>
                <ul>
                  <li>Optimized bundle size</li>
                  <li>Lazy loading components</li>
                  <li>Efficient state management</li>
                  <li>Modern browser support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Privacy</h3>
                <p>We respect user privacy and implement strict data protection measures.</p>
              </div>
              <div className="value-item">
                <h3>Transparency</h3>
                <p>Clear communication about our security measures and data handling practices.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Continuously improving our platform with the latest security technologies.</p>
              </div>
              <div className="value-item">
                <h3>Reliability</h3>
                <p>Maintaining high availability and consistent performance for all users.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Compliance & Standards</h2>
            <div className="compliance-info">
              <p>
                Our platform adheres to industry best practices and security standards to ensure the highest level of protection for both content creators and consumers. We regularly update our security measures to address emerging threats and maintain compliance with relevant regulations.
              </p>
              <div className="compliance-badges">
                <span className="badge">GDPR Compliant</span>
                <span className="badge">SSL Secured</span>
                <span className="badge">Regular Audits</span>
                <span className="badge">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
