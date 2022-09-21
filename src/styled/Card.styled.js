import styled from "styled-components";
import { device } from "../helpers/device";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.Colors.DarkBlue};
  display: grid;
  grid-template-rows: auto 50px;
`;
export const CardWrapper = styled.div`
  max-width: 400px;
  align-self: center;
  justify-self: center;
  position: relative;
  margin: 20px;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  background-color: ${({ theme }) => theme.Colors.DarkGrayishBlue};
  padding: 50px 10px;
  justify-content: space-between;
  gap: 10px;
`;
export const CardTitle = styled.div`
  color: ${({ theme }) => theme.Colors.NeonGreen};
`;
export const CardBody = styled.div`
  color: ${({ theme }) => theme.Colors.LightCyan};
  text-align: center;
  p {
    font-size: 28px;
    font-weight: 800;
  }
`;
export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  img {
    width: 100%;
  }
`;
export const DiceButton = styled.div`
  display: flex;
  place-content: center;
  padding: 18px;
  background-color: ${({ theme }) => theme.Colors.NeonGreen};
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  transform: translateY(30px);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  img {
    width: 20px;
  }
  &:hover {
    transform: translateY(30px) rotate(45deg);
    box-shadow: 0px 0px 9px 3px ${({ theme }) => theme.Colors.NeonGreen};
  }
`;

export const Developer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    h5{
      padding: 0;
      margin: 0;

    }

    span {
      color: red;
    }
  }
`;

