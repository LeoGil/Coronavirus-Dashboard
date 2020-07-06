import styled from 'styled-components';

const HeaderStyles = styled.header`
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.bgHeader};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  * {
    display: flex;
  }
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .title-brand {
    align-items: center;
    color: #fff;

    .logo {
      margin: 0 0.5rem;
      width: 32px;
      height: 32px;
    }

    .blob {
      background: rgba(255, 82, 82, 1);
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
      margin: 10px;
      height: 20px;
      width: 20px;
      transform: scale(1);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
      }
    }
  }

  .header-options {
    align-items: center;

    button {
      margin: 0 0.5rem 0 1rem;
      outline: none;
      border: none;
      border-radius: 50%;
      padding: 0.4rem;
      background: ${({ theme }) => theme.hoverBorder};
      color: ${({ theme }) => theme.mainText};
      &:hover,
      &:focus {
        filter: brightness(1.2);
      }
      &:active {
        filter: brightness(0.9);
        transform: scale(0.9);
      }
    }

    a {
      color: #fff;
      align-items: center;
      span {
        margin: 0 0.5rem;
      }
    }
  }
`;
export default HeaderStyles;
