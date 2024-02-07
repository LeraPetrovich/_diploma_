import { styled } from "styled-components";
import image from "../../assets/IMAGE.png";

export const SignInWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export const ImageBox = styled.div`
  flex: 1 1 50%;
  background-image: url(${image});
`;

export const SignInContent = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.p`
  font-size: 56px;
  font-weight: 400;
  line-height: 67.2px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelForm = styled.label``;

export const InputForm = styled.input`
  border: 1px solid #e7e8e3;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  border-radius: 6px;
  text-align: left;
  color: #65665c;
`;

export const ButtonForm = styled.button`
  background: #cf6f49;
  color: white;
  border: none;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
