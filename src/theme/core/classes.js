import convertToMui from './muiConverter';

export const attach = className => `&.${className}`;
export const nest = className => `& .${className}`;

export const BUTTON = {
  inverted: 'button--inverted',
  danger: 'button--danger',
};

export const ICON_BUTTON = {
  shaded: 'icon-button--shaded',
  noPad: 'icon-button--no-pad',
  narrowPad: 'icon-button--narrow-pad',
  separated: 'icon-button--separated',
  linkInverted: 'icon-button--link-inverted',
};

export const ICON = {
  left: 'icon--left',
  right: 'icon--right',
  front: 'icon__front',
  caret: 'icon__caret',
  frontFlipped: 'icon__front--flipped',
};

// export default convertToMui(classes);
export default {
  BUTTON,
  ICON,
  ICON_BUTTON,
  attach,
  nest,
};
