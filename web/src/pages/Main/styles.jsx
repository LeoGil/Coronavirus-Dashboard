import styled from 'styled-components';
import { colors } from '../../GlobalStyles';

export const ChartsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  section {
    width: calc(50% - 1rem);
    margin: 0.5rem;

    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);
    position: relative;
  }

  @media all and (max-width: 499px) {
    display: none !important;
  }
`;

export const GlobalDataHeader = styled.main`
  @media all and (min-width: 499px) {
    display: flex;

    .global-data {
      flex: 1 25%;
    }
    .countries-data {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      border-radius: 12px;

      .countries-panel {
        border-radius: 12px;
        background: ${colors.background};

        display: flex;
        flex-wrap: wrap;

        height: 50rem;
        overflow-y: scroll;
      }
    }
  }
`;
