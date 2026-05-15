import { Assets } from '../assets/Assets'

export const signupPageData = {
  logo: Assets.Kytes_Logo,

  title: 'Sign up',
  subtitle: 'Welcome to Community Kytes Signup.',

  illustration: Assets.Signup_Illustration,

  fields: [
    {
      id: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'username',
      name: 'username',
    },
    {
      id: 'email',
      label: 'Business email*',
      type: 'email',
      placeholder: 'Email',
      name: 'email',
    },
    {
      id: 'password',
      label: 'Password*',
      type: 'password',
      placeholder: 'Password@#2026',
      name: 'password',
      hasToggle: true,
    },
    {
      id: 'confirmPassword',
      label: 'Confirm Password*',
      type: 'password',
      placeholder: '********',
      name: 'confirmPassword',
      hasToggle: true,
    },
  ],

  termsText: 'By registering, you agree to the',
  termsLinkText: 'Terms of Service',
  privacyLinkText: 'Privacy Policy',

  signUpText: 'Sign up',
  googleText: 'Sign in with Google',

  footerText: 'Already have an account?',
  loginText: 'Login',
}