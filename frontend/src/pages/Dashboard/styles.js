import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;

  > div {
    display: flex;
    justify-content: space-between;

    > strong {
      font-size: 32px;
      color: #fff;
      font-family: Roboto;
    }
  }

  section {
    margin-top: 35px;
    display: flex;
    align-items: center;
    flex-direction: column;

    > h1 {
      font-size: 30px;
      text-align: center;
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  height: 42px;
  width: 25%;
  align-items: center;
  background: #f94d6a;
  border: none;
  border-radius: 5px;
  padding: 5px;

  &:hover {
    background: ${darken(0.3, '#f94d6a')};
  }

  > strong {
    margin-left: 10px;
    color: #fff;
  }
`;
export const MeetupList = styled.ul`
  margin-top: 15px;
`;

export const Meetup = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  background: rgba(0, 0, 0, 0.4);
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  opacity: ${props => (props.past ? 0.3 : 1)};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background: ${darken(0.1, 'rgba(0, 0, 0, 0.5)')};
  }
  strong {
    color: #fff;
  }

  aside {
    display: flex;
    align-items: center;

    span {
      color: rgba(255, 255, 255, 0.2);
    }
  }
`;
