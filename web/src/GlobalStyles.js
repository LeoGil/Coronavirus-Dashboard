import { createGlobalStyle } from 'styled-components';
import { shade, lighten } from 'polished';

export const colors = {
  background: '#161e2c',

  bgHeader: '#222c45',

  bgActive: '#29344a',

  hoverBorder: '#6bfb31',

  mainText: '#eee',

  colorCases: '#0ee9cb',

  colorDeath: '#f35353',

  colorRecovered: '#347fd5',

  colorActive: '#ffc137',

  colorNewCases: '#ff8a37',

  colorNewDeaths: '#af1c1c',

  colorNewRecoveries: '#2a8e3c',

  colorTests: '#6bfb31',

  colorCritical: '#dc3b1f',

  colorAffected: '#da8213',
};

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* Firefox Scrollbar Width "auto" or "thin"  */
    scrollbar-width: auto;
    scrollbar-color:
      /* scroll thumb */
      ${lighten(0.06, colors.bgActive)}
      /* scroll track */
      ${lighten(0.03, colors.background)};
  }

  /* Chrome Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;

    &-thumb {
      background: ${colors.bgHeader};
      border-radius: 10px;
      &:hover{
        background: ${lighten(0.06, colors.bgActive)};
      }
    }

    &-track{
      box-shadow: inset 0 0 5px ${shade(0.2, colors.bgActive)};
      border-radius: 10px;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', -apple-system, Helvetica, sans-serif !important;
    font-weight: 600;
    background: ${colors.background} !important;
    color: ${colors.mainText} !important;
    overflow-x: hidden !important;
  }

  a {
    color: ${colors.mainText} !important;
    text-decoration: none !important;
  }

  .loading {
    height: calc(100vh - 59px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.background} !important;
    color: ${colors.mainText} !important;
  }

  .notification {
    box-shadow: none !important;
  }

  .title-components {
    text-align: center;
    font-weight: 800 !important;
    font-size: 55px;
  }

  .chart-div {
    background: ${colors.bgActive};
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }


  .color-cases {
    color: ${colors.colorCases};
  }

  .color-death {
    color: ${colors.colorDeath};
  }

  .color-recovered {
    color: ${colors.colorRecovered};
  }

  .color-active {
    color: ${colors.colorActive};
  }

  .color-new-case {
    color: ${colors.colorNewCases};
  }

  .color-new-death {
    color: ${colors.colorNewDeaths};
  }

  .color-new-recoveries {
    color: ${colors.colorNewRecoveries};
  }

  .color-tests {
    color: ${colors.colorTests};
  }

  .color-critical {
    color: ${colors.colorCritical};
  }

  .color-affected {
    color: ${colors.colorAffected};
  }

  .bg-active {
    background-color: ${colors.colorActive} !important;
  }

  .bg-recovered {
    background-color: ${colors.colorRecovered} !important;
  }

  .bg-death {
    background-color: ${colors.colorDeath} !important;
  }
`;
