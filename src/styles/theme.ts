import { css } from 'styled-components';

const theme = {
  brown: '#AB6254',
  middleBrown: '#E1B8A6',
  lightBrown: '#EFDAC7',
  ivory: '#FFE3C9',
  deepIvory: '#BB9E93',
  coral: '#E69F9A',
  black: '#323232',
  borderGrey: '#DBDBDB',
  white: '#FFFFFF',
  grey: 'rgba(196,196,196,0.3)',
  middleGrey: 'rgba(65,65,65,0.4)',
  deepGrey: '#828282',
  lightOrange: 'rgba(255,195,170,0.3)',
  fontColor: '#2D2B2B',
  fontTitle: "'Alata', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
  // mixin
  flexSet: (justify = 'center', align = 'center') =>
    `display: flex; justify-content: ${justify}; align-items: ${align};`,
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default theme;
