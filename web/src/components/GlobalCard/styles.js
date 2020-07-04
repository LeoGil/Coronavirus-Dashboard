/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import styled, { css } from 'styled-components';

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
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      .global-data-title {
        margin: 1rem;
        @media all and (max-width: 499px) {
          margin: 0.5rem 0.3rem;
        }

        ${({ theme }) => {
    const topBorderColors = {
      'top-color-1': theme.colorNewCases,
      'top-color-2': theme.colorNewDeaths,
      'top-color-3': theme.colorNewRecoveries,
      'top-color-4': theme.colorTests,
      'top-color-5': theme.colorCritical,
    };

    let styles = '';
    for (const keyClass in topBorderColors) {
      styles += `
                          &.${keyClass} {
                            border-top: 1rem solid ${topBorderColors[keyClass]};
                          }
                        `;
    }
    return css`${styles}`;
  }}

        background: ${({ theme }) => theme.bgActive};
        border-radius: 0.5rem;
        font-size: 1.5rem;
        @media all and (max-width: 499px) {
          font-size: 1rem;
        }
        &:hover {
          ${({ theme }) => theme.mode === 'light' ? css`filter: brightness(1.05);` : css`filter: brightness(1.2);`};;
          transition: all 0.2s;
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
