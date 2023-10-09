import React from 'react';
import '../assets/css/terms.css';

function Terms() {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <div className="terms-content">
        <p>
          Welcome to the Logistics Management System (LMS) Terms and Conditions
          page. Please read these terms carefully before using our services.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the LMS, you agree to be bound by these terms
          and conditions.
        </p>
        <h2>2. Privacy Policy</h2>
        <p>
          Your use of the LMS is also governed by our Privacy Policy, which you
          can review{' '}
          <a href="/privacy-policy">here</a>.
        </p>
        <h2>3. User Responsibilities</h2>
        <p>
          - You are responsible for maintaining the confidentiality of your
          account information.
        </p>
        <p>
          - You must not use the LMS for any illegal or unauthorized purpose.
        </p>
        <h2>4. Modifications to the Terms</h2>
        <p>
          We reserve the right to modify these terms and conditions at any
          time. Changes will be effective immediately upon posting.
        </p>
      </div>
    </div>
  );
}

export default Terms;
