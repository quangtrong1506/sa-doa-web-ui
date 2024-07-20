'use client';
import React, { FormEvent } from 'react';
import Image from 'next/image';
import { BuildConfig } from '@/config/config';

const authStr = {
  signup: {
    title: 'Sign up',
    message: 'Already have an account?',
    href: '/login',
  },
  login: {
    title: 'Sign in',
    message: 'Don’t have an account yet?',
    href: '/signup',
  },
};

interface AuthViewModel {
  isSignup?: boolean;
  email?: string;
  password?: string;
  repassword?: string;
  isRemember?: boolean;
  isFailRePassword?: boolean;
  isFailPassword?: boolean;
}

const DEFAULT_PATTERN = 0

const PASSWORD_PATTERN = [
  {
    regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message:"Minimum eight characters, at least one letter and one number"
  },
  {
    regex:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message:"Minimum eight characters, at least one letter, one number and one special character"
  },
  {
    regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
  },
  {
    regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
  },
  {
    regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
    message:"Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
  }
]

class Auth extends React.Component<{isSignup:boolean}, AuthViewModel> {
  constructor(prop:{isSignup: boolean}) {
    super(prop);
    console.log('isSignup', prop.isSignup);
    this.state = {
      isSignup: prop.isSignup,
      email: '',
      password: '',
      repassword: '',
      isRemember: false,
      isFailRePassword: false,
      isFailPassword: false,
    }
  }

  onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { isSignup, email, password, repassword,isFailRePassword } = this.state;
    if (isSignup) {
      this.setState({
        isFailRePassword: password !== repassword
      })
    } else {

    }
    console.log(this.state)
    alert(this.state)
  }

  render() {
    const { isSignup, email, password, repassword, isFailRePassword, isFailPassword } = this.state;
    const str = isSignup ? authStr.signup : authStr.login;
    const strOpposite = isSignup ? authStr.login : authStr.signup;
    const pattern = PASSWORD_PATTERN[DEFAULT_PATTERN]
    let ele = <>
      <div>
        <label htmlFor="re-password"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Retype
          Password</label>
        <input type="password" name="re-password" id="re-password" placeholder="••••••••"
               className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               required={true}
               onChange={(event) => {
                 this.setState({
                   repassword: event.target.value,
                   isFailRePassword: password !== event.target.value
                 });
               }}
        />
        <p className={"text-red-600"} style={{display: isFailRePassword ? "block" : "none"}}>
          Re-Password does not match!
        </p>
      </div>
    </>;

    if (!isSignup) {
      ele = <>

        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="remember" aria-describedby="remember" type="checkbox"
                     className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"

                     onChange={(event) => {
                       this.setState({isRemember: event.target.value === "true"});
                     }}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
            </div>
          </div>
          <a href="#"
             className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
            password?</a>
        </div>
      </>;
    }
    return (
      <>
        <section className="absolute top-0 left-0 h-screen w-screen z-50 bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
               style={{ height: '100vh', width: '100vw' }}>
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <Image src={BuildConfig.LOGO} className="w-8 h-8 mr-2" alt="logo" />
              {BuildConfig.APP_NAME}
            </a>
            <div
              className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                  className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {str.title}
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={event => (
                  this.onSubmit(event)
                )}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                      email</label>
                    <input type="email" name="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com" required={true}
                           onChange={(event) => {
                             this.setState({email: event.target.value});
                           }}
                    />
                  </div>
                  <div>
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required={true}
                           onChange={(event) => {
                             this.setState({
                               password: event.target.value,
                               isFailPassword: !pattern.regex.test(event.target.value)
                             });
                           }}
                    />
                  </div>
                  <p className={"text-red-600"} style={{display: isFailPassword ? "block" : "none"}}>
                    {pattern.message}
                  </p>
                  {ele}
                  <button type="submit"
                          className="w-full text-sm px-5 py-2.5 text-center border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600">
                    <p className="text-gray-500 dark:text-white">
                      {str.title}
                    </p>
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {str.message}
                    <a href={str.href}
                       className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      {strOpposite.title}
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Auth;