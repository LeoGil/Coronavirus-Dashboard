import styled from 'styled-components';
import { colors } from '../../GlobalStyles';

const CountryDetailsCardStyles = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  font-weight: 800;
  font-size: 18px;

  .flag {
    display: flex;
    font-size: x-large;
    align-items: center;
    @media all and (max-width: 499px) {
      justify-content: center;
    }
    img {
      height: 48px;
      border-radius: 20%;
    }
    figcaption {
      margin-left: 1rem;
    }
  }

  .cases {
    display: flex;
    flex-wrap: wrap;
    @media all and (min-width: 500px) {
      background: ${colors.bgActive};
      border-radius: 0.5rem;
    }
    div {
      @media all and (max-width: 499px) {
        background: ${colors.bgActive};
        border-radius: 0.5rem;
      }
      margin: 0.5rem;
      padding: 0.5rem;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      text-align: center;
      .country-data-numbers {
        font-size: 2.5rem;
        @media all and (max-width: 499px) {
          font-size: 1.7rem;
        }
        font-weight: 800;
      }
    }
  }
`;
export default CountryDetailsCardStyles;
