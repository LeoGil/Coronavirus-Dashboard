import styled from 'styled-components';

// const colors = {
//     background: '#161e2c',
//     bgActive: '#29344a'
// }

export const RecentStyle = styled.div`
  position: absolute; 
  left: 0; top: 0; 
  right: 0; bottom: 0;
  overflow: auto;

  background: #29344a;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;

  .flag {
      display: flex;
      img {
        height: 40px;
        border-radius: 20%;
        box-shadow: 0.31rem 0.29rem 0.65rem rgba(0, 0, 0, 0.342);
      }
      figcaption {
        margin-left: 20px;
        margin-top: 8px;
      }
  }
`;

export default RecentStyle;