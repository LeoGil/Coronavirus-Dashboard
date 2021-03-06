import { createGlobalStyle } from 'styled-components';
import { shade, lighten } from 'polished';

const DashboardColors = {
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

export const themeModes = {
  dark: {
    mode: 'dark',

    background: '#161e2c',

    bgHeader: '#222c45',

    bgActive: '#29344a',

    hoverBorder: '#c62e65',

    mainText: '#eee',

    get scrollThumb() {
      return lighten(0.06, this.bgActive);
    },

    get scrollTrack() {
      return shade(0.2, this.bgActive);
    },

    ...DashboardColors,
  },
  light: {
    mode: 'light',

    background: '#e5eafd',

    bgHeader: '#38486f',

    bgActive: '#f9f8fd',

    hoverBorder: '#Ff22Ff',

    mainText: '#111',

    get scrollThumb() {
      return lighten(0.06, this.bgActive);
    },

    get scrollTrack() {
      return shade(0.2, this.bgActive);
    },

    ...DashboardColors,
  },
};

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* Firefox Scrollbar Width "auto" or "thin"  */
    scrollbar-width: thin;
    scrollbar-color:
      /* scroll thumb */
      ${({ theme }) => theme.scrollThumb}
      /* scroll track */
      ${({ theme }) => theme.scrollTrack};
  }

  /* Chrome Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;

    &-thumb {
      background: ${({ theme }) => theme.bgHeader};
      border-radius: 10px;
      &:hover{
        background: ${({ theme }) => theme.scrollThumb};
      }
    }

    &-track{
      box-shadow: inset 0 0 5px ${({ theme }) => theme.scrollTrack};
      border-radius: 10px;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', -apple-system, Helvetica, sans-serif !important;
    font-weight: 600;
    background: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.mainText};
    overflow-x: hidden !important;
  }

  a, a:hover {
    color: ${({ theme }) => theme.mainText};
    text-decoration: none !important;
  }

  .loading {
    height: calc(100vh - 59px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.mainText} !important;
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
    background: ${({ theme }) => theme.bgActive};
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }


  .color-cases {
    color: ${({ theme }) => theme.colorCases};
  }

  .color-death {
    color: ${({ theme }) => theme.colorDeath};
  }

  .color-recovered {
    color: ${({ theme }) => theme.colorRecovered};
  }

  .color-active {
    color: ${({ theme }) => theme.colorActive};
  }

  .color-new-case {
    color: ${({ theme }) => theme.colorNewCases};
  }

  .color-new-death {
    color: ${({ theme }) => theme.colorNewDeaths};
  }

  .color-new-recoveries {
    color: ${({ theme }) => theme.colorNewRecoveries};
  }

  .color-tests {
    color: ${({ theme }) => theme.colorTests};
  }

  .color-critical {
    color: ${({ theme }) => theme.colorCritical};
  }

  .color-affected {
    color: ${({ theme }) => theme.colorAffected};
  }

  .bg-active {
    background-color: ${({ theme }) => theme.colorActive} !important;
  }

  .bg-recovered {
    background-color: ${({ theme }) => theme.colorRecovered} !important;
  }

  .bg-death {
    background-color: ${({ theme }) => theme.colorDeath} !important;
  }
`;
