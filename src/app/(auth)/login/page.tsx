'use client';
import React from 'react';
import Image from 'next/image';
import { BuildConfig } from '@/config/config';
import Auth from '@/presentation/components/reuse/auth/auth';

class Login extends React.Component<any, {}> {
  render() {
    return (
      <>
        <Auth  isSignup={false}/>
      </>
    );
  }
}

export default Login;