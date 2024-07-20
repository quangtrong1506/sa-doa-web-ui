'use client';
import React from 'react';
import Auth from '@/presentation/components/reuse/auth';

class Login extends React.Component<any, {}> {
  render() {
    return (
      <>
        <Auth isSignup={false}/>
      </>
    );
  }
}

export default Login;