import { Assets } from '../assets/Assets'

export const loginPageData = {
  logo: Assets.Kytes_Logo,

  title: 'Welcome to Kytes Community',
  subtitle: 'Please enter your details',

  illustration: Assets.Login_Illustration,

  fields: [
    {
      id: 'email',
      label: 'Business Email*',
      type: 'email',
      placeholder: 'Email',
      name: 'email',
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: '********',
      name: 'password',
      hasToggle: true,
    },
  ],

  rememberLabel: 'Remember for 30 days',
  forgotPasswordText: 'Forget Password',
  signInText: 'Sign in',
  googleText: 'Sign in with Google',
  footerText: "Don’t have an account?",
  signUpText: 'Sign up',
}