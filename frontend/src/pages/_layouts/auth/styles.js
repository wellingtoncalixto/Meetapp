import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  height: 100%;
  background: linear-gradient(#22202c, #402845);
  background-attachment: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      height: 50px;
      width: 315px;
      margin: 15px auto;
      background: #22202c;
      border: 0;
      padding: 15px;
      border-radius: 5px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f94d6a;
      align-self: flex-start;
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      height: 50px;
      background: #f94d6a;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font-family: Roboto;
      font-weight: bold;

      &:hover {
        background: ${darken(0.3, '#f94d6a')};
      }
    }

    a {
      color: rgba(255, 255, 255, 0.4);
      font-family: Roboto;
      margin-top: 10px;
    }
  }
`;
