import styled from 'styled-components';

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
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    @media all and (max-width: 1500px) {
      flex-direction: column;
    }

    .global-data {
      flex: 0 25%;
    }
    .countries-data {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      border-radius: 12px;

      .countries-panel {
        border-radius: 12px;
        background: ${({ theme }) => theme.background};

        display: flex;
        flex-wrap: wrap;

        height: 50rem;
        overflow-y: scroll;
      }
    }
  }
`;
