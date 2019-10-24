import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 0;

    input {
      margin: 15px 0 15px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      height: 50px;
      padding: 10px;
      color: rgba(255, 255, 255, 0.5);
      border-radius: 5px;
    }

    textarea {
      margin: 15px 0 15px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      height: 200px;
      padding: 10px;
      color: rgba(255, 255, 255, 0.5);
      border-radius: 5px;
      font-family: sans-serif;
      font-size: 14px;
      resize: none;
    }

    span {
      color: #f94d6a;
    }

    > button {
      height: 42px;
      align-self: flex-end;
      width: 20%;
      background: #f94d6a;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
    }

    .react-datepicker__input-container {
      display: flex;

      input {
        width: 100%;
      }
    }
  }
`;
