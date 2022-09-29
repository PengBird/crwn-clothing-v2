import { AuthContainer } from "./authentication.styles.jsx";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response);
  // }, []);

  // not sure how this works, or how exactly it's going to be used?

  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </AuthContainer>
  );
};

export default Authentication;
