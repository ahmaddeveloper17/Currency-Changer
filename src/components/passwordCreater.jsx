import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12); // Default length is 12
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) {
      charset += "0123456789";
    }

    if (includeSpecialChars) {
      charset += "!@#$%^&*()_-+=";
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #3498db, #8e44ad)',
        textAlign: 'center',
        justifyContent: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Password Generator</h2>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: '#333' }}>
          Password Length: {passwordLength}
        </label>
        <input
          type="range"
          min="6"
          max="20"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          style={{ marginBottom: '1rem', width: '100%' }}
        />
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', color: '#333' }}>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              style={{ marginRight: '0.5rem' }}
            />
            Include Numbers
          </label>
          <label style={{ display: 'flex', alignItems: 'center', color: '#333' }}>
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
              style={{ marginRight: '0.5rem' }}
            />
            Include Special Characters
          </label>
        </div>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '1rem' }}>{password}</p>
        <button
          style={{
            background: '#3498db',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
          }}
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
