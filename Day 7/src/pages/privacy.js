import React from 'react';
import '../assets/css/privacy.css';

function Privacy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy outlines how we collect, use, disclose, and protect
        your personal information when you use our logistics management system
        (LMS).
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect personal and non-personal information, including but not
        limited to:
      </p>
      <ul>
        <li>Information provided during registration</li>
        <li>Transaction data</li>
        <li>Device information</li>
        <li>Usage data</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>
        We use your information for various purposes, including but not limited
        to:
      </p>
      <ul>
        <li>Providing and maintaining the LMS</li>
        <li>Improving our services</li>
        <li>Communicating with you</li>
        <li>Ensuring the security of your data</li>
      </ul>
      {/* Add more sections with details of your Privacy Policy */}
    </div>
  );
}

export default Privacy;
