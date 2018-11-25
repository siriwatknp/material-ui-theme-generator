import React from 'react'

export default style => storyFn => {
  return (
    <div
      className={'with-relative-parent'}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {storyFn()}
    </div>
  );
}
