import styled from 'styled-components';
import { colors } from '../../AppStyles';

const CountryCardStyles = styled.div`
  .pais-article {
    margin: 20px auto 10px;
    padding: 20px;

    font-size: 18px;
    font-weight: 800;
    background: ${colors.bgActive};
    border-radius: 0.5rem;
    border: 3px solid ${colors.bgActive};
    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);

    transition: all ease-in-out 0.09s;
    &:hover {
      filter: brightness(1.2);
      transform: translateY(-10px);
      border: 3px solid ${colors.hoverBorder};
    }
    .flag {
      display: grid;
      grid-template-columns: 1fr 5fr;
      align-items: center;

      margin-right: 55px;
      font-size: x-large;
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
      margin-top: -5px;
      font-size: 12px;
    }
  }
`;
export default CountryCardStyles;
