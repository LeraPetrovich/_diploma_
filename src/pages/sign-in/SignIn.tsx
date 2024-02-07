import { FunctionComponent, useContext, useRef, useEffect } from "react";
import {
  SignInWrapper,
  ImageBox,
  SignInContent,
  Title,
  Form,
  FormBlock,
  LabelForm,
  InputForm,
  ButtonForm,
} from "./SignIn.styles";
import { AuthContext } from "../../provider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseSetup";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

////
import { checkTokenExpiration } from "../../utils/authUtils";
//////

export const SignIn: FunctionComponent = () => {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );
      const user = userCredential.user;
      cookies.set("authToken", await user.getIdToken(), { path: "/" });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // const signOut = async () => {
  //   await auth.signOut();
  // };

  //////просмотреть как перененсти в appRouter

  useEffect(() => {
    const shouldRedirect = checkTokenExpiration();

    if (shouldRedirect) {
      navigate("/sign-in");
    }
  }, [navigate]);

  ///////////////

  return (
    <SignInWrapper>
      <ImageBox />
      <SignInContent>
        <Title>Sign In</Title>
        <Form>
          <FormBlock>
            <LabelForm htmlFor="login">Email:</LabelForm>
            <InputForm ref={emailRef} type="email" id="login" name="login" />
          </FormBlock>
          <FormBlock>
            <LabelForm htmlFor="password">Password:</LabelForm>
            <InputForm
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
            />
          </FormBlock>
          <ButtonForm onClick={signIn} type="button">
            Submit
          </ButtonForm>
        </Form>
      </SignInContent>
    </SignInWrapper>
  );
};
