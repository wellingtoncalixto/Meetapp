import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Loading = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;

  img {
    width: 100%;
    height: auto;
    margin-top: 15px;
  }

  p {
    color: #ffffff;
    margin-top: 35px;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > strong {
    font-family: Roboto;
    font-size: 32px;
    color: #fff;
  }
`;

export const Buttons = styled.nav`
  display: flex;
  align-items: center;
`;
export const EditButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 10px;
  margin-right: 10px;
  background: #4dbaf9;
  border: 0;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background: ${darken(0.3, '#4dbaf9')};
  }
`;
export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 10px;
  background: #d44059;
  border: 0;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background: ${darken(0.3, '#d44059')};
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 100px;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;

  span {
    color: rgba(255, 255, 255, 0.5);
    margin: 0 10px;
  }
`;

export const Local = styled.div`
  display: flex;
  align-items: center;

  span {
    color: rgba(255, 255, 255, 0.5);
    margin: 0 10px;
  }
`;
