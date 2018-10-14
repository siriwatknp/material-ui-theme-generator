import React from 'react';
import styled, { cx } from 'react-emotion';
import { styles } from 'styled-system';
import toArray from 'lodash/toArray';

export const reduceStyles = className => {
  const styleList = toArray(styles);
  return styleList.map(func => props => ({
    [className]: typeof func === 'function' ? func(props) : {},
  }));
};

const name = 'Block';
const BaseBlock = styled('div')(({ css }) => css);
// create base block to whitelist all styles attr that will be passed to HtmlTag
const Block = styled(({ className, ...props }) => (
  <BaseBlock className={cx(name, className)} {...props} />
))(...reduceStyles(`&.${name}`));

const FullScreenCenter = props => (
  <Block
    width={'100vw'}
    height={'100vh'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    {...props}
  />
);
const Flex = props => <Block display={'flex'} {...props} />;

const Center = props => (
  <Block display={'flex'} justifyContent={'center'} {...props} />
);

const Middle = props => (
  <Block display={'flex'} alignItems={'center'} {...props} />
);

const MiddleCenter = props => (
  <Block
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    {...props}
  />
);

Block.FullScreenCenter = FullScreenCenter;
Block.Center = Center;
Block.Middle = Middle;
Block.MiddleCenter = MiddleCenter;
Block.Flex = Flex;

export default Block;
