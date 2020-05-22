import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { SignInContainer, Title, Buttons } from "./sign-in.styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <Buttons>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
