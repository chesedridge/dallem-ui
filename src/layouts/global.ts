import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  /* CSS RESET CODE */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* FONT FACE */

    // Import Material Icons
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/materialicons/v129/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2') format('woff2');
  }

    // Import Pretendard
  @font-face {
	  font-family: 'Pretendard';
	  font-weight: 900;
	  font-display: swap;
	  src: local('Pretendard Black'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-Black.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-Black.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-ExtraBold.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-ExtraBold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-SemiBold.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-SemiBold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-Medium.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-Light.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-Light.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: local('Pretendard ExtraLight'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-ExtraLight.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-ExtraLight.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-Thin.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-Thin.woff') format('woff');
  }

  /* CUSTOM SETTINGS */

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
  }
`;
