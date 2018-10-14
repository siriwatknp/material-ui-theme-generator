import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle, withState } from 'recompose';
import Block from '../components/Block/Block';
import RTDBFactory from '../firebase/clientApi';
import ThemeCollector from './ThemeCollector';
import ThemeSelector from './ThemeSelector';

const ThemeController = compose(
  withState('themes', 'setThemes', {}),
  lifecycle({
    componentDidMount() {
      const { setThemes } = this.props;
      const dbApi = RTDBFactory('/themes');
      dbApi.find().then(themes => {
        setThemes(themes || {});
      });
    },
  })
)(({ currentTheme, themes, setThemes, onChange }) => (
  <Block.Flex
    p={16}
    justifyContent={'space-between'}
    background={'#ffffff'}
    borderBottom={'1px solid #e5e5e5'}
  >
    <ThemeSelector themes={themes} onChange={onChange} />
    <ThemeCollector
      onSuccess={setThemes}
      themes={themes}
      currentTheme={currentTheme}
    />
  </Block.Flex>
));

ThemeController.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentTheme: PropTypes.shape({}).isRequired,
};
ThemeController.defaultProps = {};

export default ThemeController;
