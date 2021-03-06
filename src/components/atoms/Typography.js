import React from 'react';
import cx from 'classnames';
import MuiTypography from '@material-ui/core/Typography';
import { TEXT } from '../../theme/core';

const Typography = ({
  className,
  bold,
  inline,
  link,
  linkInverted,
  icon,
  inverted,
  indented,
  indentedLarge,
  light,
  lightWeight,
  primary,
  secondary,
  tertiary,
  ...props
}) => (
  <MuiTypography
    className={cx(
      TEXT.root,
      className,
      bold && TEXT.bold,
      inline && TEXT.inline,
      icon && TEXT.icon,
      link && TEXT.link,
      linkInverted && TEXT.linkInverted,
      inverted && TEXT.inverted,
      indented && TEXT.indented,
      indentedLarge && TEXT.indentedLarge,
      light && TEXT.light,
      lightWeight && TEXT.lightWeight,
      primary && TEXT.primary,
      secondary && TEXT.secondary,
      tertiary && TEXT.tertiary
    )}
    {...props}
  />
);

export default Typography;
