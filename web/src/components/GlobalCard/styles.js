/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import styled, { css } from 'styled-components';
import { colors } from '../../GlobalStyles';

const topBorderColors = {
  'top-color-1': colors.colorNewCases,
  'top-color-2': colors.colorNewDeaths,
  'top-color-3': colors.colorNewRecoveries,
  'top-color-4': colors.colorTests,
  'top-color-5': colors.colorCritical,
};

function createTopBorders() {
  let styles = '';
  for (const keyClass in topBorderColors) {
    styles += `
      &.${keyClass} {
        border-top: 1rem solid ${topBorderColors[keyClass]};
      }
    `;
  }
  return css`
    ${styles}
  `;
}

const GlobalCardStyles = styled.div`
  .global-article {
    border-radius: 0.5rem;
    width: 100%;
    font-weight: 800;

    .cases {
      display: flex;
      flex-wrap: wrap;
      @media all and (max-width: 499px) {
        flex-direction: column;
      }
      div {
        min-width: 21rem;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      .global-data-title {
        border: 3px solid ${colors.bgActive};
        ${createTopBorders()}
        margin: 1rem;
        @media all and (max-width: 499px) {
          margin: 0.5rem 0.3rem;
        }
        border-radius: 0.5rem;
        background-color: ${colors.bgActive};
        font-size: 1.5rem;
        @media all and (max-width: 499px) {
          font-size: 1rem;
        }
        &:hover {
          filter: brightness(1.2);
          transition: all 0.2s;
          border: 3px solid ${colors.hoverBorder};
        }
        box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);
      }
      .global-data-numbers {
        font-size: 3rem;
        @media all and (max-width: 499px) {
          font-size: 1.7rem;
        }
        font-weight: 800;
      }
    }
  }
`;
export default GlobalCardStyles;
