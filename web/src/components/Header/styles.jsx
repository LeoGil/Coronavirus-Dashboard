import styled from 'styled-components';
import { colors } from '../../AppStyles';

const HeaderStyles = styled.header`
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  background: ${colors.bgActive};
  font-size: 18px;
  font-weight: bold;
  color: ${colors.mainText};
  display: flex;
  * {
    display: flex;
  }
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media all and (max-width: 499px) {
    flex-direction: column;
    height: 120px;
  }
  .title-brand {
    align-items: center;

    .logo {
      margin: auto 0.5rem;
      width: 32px;
      height: 32px;
    }

    .blob {
      background: black;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
      margin: 10px;
      height: 20px;
      width: 20px;
      transform: scale(1);
      animation: pulse-black 2s infinite;
    }

    @keyframes pulse-black {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }

    .blob.white {
      background: white;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
      animation: pulse-white 2s infinite;
    }

    @keyframes pulse-white {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }

    .blob.red {
      background: rgba(255, 82, 82, 1);
      box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
      animation: pulse-red 2s infinite;
    }

    @keyframes pulse-red {
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

    .blob.orange {
      background: rgba(255, 121, 63, 1);
      box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);
      animation: pulse-orange 2s infinite;
    }

    @keyframes pulse-orange {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
      }
    }

    .blob.yellow {
      background: rgba(255, 177, 66, 1);
      box-shadow: 0 0 0 0 rgba(255, 177, 66, 1);
      animation: pulse-yellow 2s infinite;
    }

    @keyframes pulse-yellow {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 177, 66, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);
      }
    }

    .blob.blue {
      background: rgba(52, 172, 224, 1);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
      animation: pulse-blue 2s infinite;
    }

    @keyframes pulse-blue {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
      }
    }

    .blob.green {
      background: rgba(51, 217, 178, 1);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
      animation: pulse-green 2s infinite;
    }

    @keyframes pulse-green {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
      }
    }

    .blob.purple {
      background: rgba(142, 68, 173, 1);
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
      animation: pulse-purple 2s infinite;
    }

    @keyframes pulse-purple {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
      }
    }
  }
`;
export default HeaderStyles;
