import styled from 'styled-components';
import { colors } from '../../AppStyles';

const CountryCardStyles = styled.div`
  .pais-article {
    margin: 20px auto 10px;
    padding: 20px;
    border-radius: 0.5rem;
    background: ${colors.bgActive};
    font-weight: 800;
    font-size: 18px;
    border: 3px solid ${colors.bgActive};
    &:hover {
      filter: brightness(1.2);
      transition: all 0.2s;
      position: relative;
      top: -10px;
      border: 3px solid ${colors.hoverBorder};
    }
    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);
    .flag {
      margin-right: 55px;
      display: grid;
      grid-template-columns: 1fr 5fr;
      font-size: x-large;
      align-items: center;
      img {
        height: 48px;
        border-radius: 20%;
        box-shadow: 0.31rem 0.29rem 0.65rem rgba(0, 0, 0, 0.342);
      }
    }

    .cases {
      display: flex;
      flex-wrap: wrap;
      min-height: 67px;
      div {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
      }
    }

    .new-today {
      font-size: 12px;
      margin-top: -5px;
    }
  }
`;
export default CountryCardStyles;
