import React from 'react';

const ContentWithTransparency = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Your content goes here */}
      <h1 style={{ color: '#fff', opacity: 0.8 }}>Your Content</h1>
      <p style={{ color: '#fff', opacity: 0.6 }}>More content...</p>
    </div>
  );
};

export default ContentWithTransparency;
