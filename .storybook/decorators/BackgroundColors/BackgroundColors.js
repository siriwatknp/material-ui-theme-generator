import React from 'react';
import './BackgroundColors.css';

class BackgroundColors extends React.Component {

  constructor(props) {
    super(props);
    const { colors } = props;
    let defaultColor = '#ffffff';
    if (colors.length > 0) {
      defaultColor = colors.find(({ defaultColor }) => defaultColor).value || '#ffffff'
    }
    this.state = {
      selectedColor: defaultColor
    };
  }

  render() {
    const { story, colors = [] } = this.props;
    const { selectedColor } = this.state;
    return (
      <div
        className={'BackgroundColors'}
        style={{
          minWidth: '100vw',
          minHeight: '100vh',
          backgroundColor: selectedColor,
          transition: '0.3s'
        }}
      >
        {story()}
        <div className={'wrapper'}>
          {colors.map(({ value }) => (
            <div
              key={value}
              className={`swatch ${selectedColor === value ? 'selected' : ''}`}
              style={{
                backgroundColor: value,
              }}
              onClick={() => this.setState({ selectedColor: value })}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default backgroundColors => story => (
  <BackgroundColors colors={backgroundColors} story={story} />
)