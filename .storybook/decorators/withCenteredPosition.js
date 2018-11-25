import React from 'react';

const withStoryStyles = storyFn => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {storyFn()}
    </div>
  );
};

export default withStoryStyles