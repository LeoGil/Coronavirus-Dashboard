import styled from 'styled-components';

export const HiddenChartonMobile = styled.div`
  @media all and (max-width: 499px) {
    display: none !important;
  }
`;

export const GlobalDataHeader = styled.main`
  .charts {
    section {
      box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);
    }
  }
  @media all and (min-width: 700px) and (max-width: 1499px) {
    .charts {
      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        section {
          margin: 1rem;
          flex: 1 50%;
          max-width: 47%;
        }
      }
    }
  }

  @media all and (min-width: 1500px) {
    display: flex;
    .global-data {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .charts {
      flex: 0 0 75%;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 60%;
      }
    }
  }
`;
