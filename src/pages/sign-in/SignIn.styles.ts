import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(135deg, rgb(113, 186, 228), rgb(79, 142, 160));
`;

export const SignInWrapper = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LogoContent = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextLogo = styled.p`
  margin: 0;
  padding: 0;
  line-height: 85.33px;
  color: #f5f5f5;
  font-size: 70px;
  font-weight: 400;
`;

export const ImageLogo = styled.img`
  width: 65px;
  height: 65px;
  margin-top: -22px;
`;

export const SignInContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dff8ff;
  border-radius: 20px;
  max-width: 549px;
  width: 100%;
  max-height: 549px;
  height: 100%;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 80px;
`;

export const Image = styled.img``;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 33.89px;
  margin: 0px;
  padding: 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
  max-width: 342px;
  width: 100%;
`;

export const FormBlock = styled.div`
  width: 100%;
  position: relative;
`;

export const LabelForm = styled.label`
  position: absolute;
  background-color: #dff8ff;
  padding: 0px 6px;
  top: -10px;
  left: 15px;
  color: #4f8ea0;
  font-weight: 400;
  font-size: 16;
  line-height: 18.96px;
`;

export const InputForm = styled.input`
  border: 1px solid #4f8ea0;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  border-radius: 10px;
  color: #65665c;
  width: calc(100% - 20px);
  max-width: 342px;
  height: 45px;
  background-color: #dff8ff;
  padding-left: 20px;
`;

export const ButtonForm = styled.button`
  background: #4f8ea0;
  color: white;
  border: none;
  margin-top: 20px;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.3px;
  letter-spacing: 0em;
  text-align: left;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
