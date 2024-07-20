'use client';
import React from 'react';
import Auth from '@/presentation/components/reuse/auth';

class Signup extends React.Component<any, {}> {

  render() {
    return (
      <>
        <Auth isSignup={true}/>
      </>
    );
  }
}

export default Signup