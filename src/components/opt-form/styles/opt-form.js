import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  min-width: 74px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  svg {
    margin-left: 10px;
    fill: white;
    height: 18px;
    width: auto;
  }

  &:hover {
    background: #f40612;
  }
`;

export const Text = styled.p`
  font-size: 19px;
  color: white;
  text-align: center;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
