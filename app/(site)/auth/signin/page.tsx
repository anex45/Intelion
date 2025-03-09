import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Intelion SaaS Solutions",

  // other metadata
  description: "Securely log in to your Intelion account and access advanced SaaS solutions and IT services."
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
