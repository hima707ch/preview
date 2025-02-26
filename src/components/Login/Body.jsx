import React from "react";
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import RememberMeCheckbox from "./RememberMeCheckbox";
import LoginButton from "./LoginButton";
import ForgotPasswordLink from "./ForgotPasswordLink";
import SocialLoginButtons from "./SocialLoginButtons";
import SignUpLink from "./SignUpLink";

const Body = () => {
  return (
    <div>
      <UsernameField />
      <PasswordField />
      <RememberMeCheckbox />
      <LoginButton />
      <ForgotPasswordLink />
      <SocialLoginButtons />
      <SignUpLink />
    </div>
  );
};

export default Body;
