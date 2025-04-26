import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Personal Data Exposure Checker</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Email Check</h2>
        <input 
          type="email" 
          placeholder="Enter your email"
          style={{ 
            padding: '10px',
            width: '100%',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Check Email
        </button>
      </div>
    </div>
  );
}

export default App;
