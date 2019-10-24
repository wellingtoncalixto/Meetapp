import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  img {
    height: 32px;
  }

  aside {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      strong {
        color: #fff;
        font-family: Roboto;
        font-size: 14px;
      }

      a {
        color: #999999;
        font-size: 14px;
      }
    }

    button {
      margin-left: 10px;
      border: 0;
      background: #f94d6a;
      width: 55px;
      border-radius: 5px;
      color: #fff;

      &:hover {
        background: ${darken(0.3, '#f94d6a')};
      }
    }
  }
`;
