import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.2);

  label {
    width: 100%;
    display: flex;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      height: 400px;
      background: rgba(0, 0, 0, 0.2);
    }

    .icon-add {
      display: flex;
      width: 100%;
      height: 400px;
      align-items: center;
      justify-content: center;
    }

    input {
      display: none;
    }
  }
`;
