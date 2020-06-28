import styled from 'styled-components';

const colors = {
  background: '#161e2c',
  bgActive: '#29344a'
}

export const ChartsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  section {
    flex: 1;

    margin: 1rem;
    /* max-width: 50%; */

    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);
  }
  
  .break {
      flex-basis: 100%;
      height: 0;
    }

  .recent-changes {
    height: inherit;
    overflow-y: scroll;
  }

  @media all and (max-width: 499px) {
    display: none !important;
  }

`;

export const GlobalDataHeader = styled.main`
  @media all and (min-width:499px){
    display: flex;

    .global-data {
      flex: 1 25%;

      /* max-width: 25%; */
      /* height: 100vh; */
    }
    .countries-data{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      /* background: ${colors.bgActive}; */
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
