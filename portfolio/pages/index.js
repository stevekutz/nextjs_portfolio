import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../component/shared/Header'
import BaseLayout from '../component/Layout/BaseLayout'

class Index extends React.Component {

  render() {
  return (
    <div>
      <Head>
        <title>Portfolio App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <BaseLayout>
        <h1> Index Page </h1>
      </BaseLayout>

    </div>    
  
  
  
  )
  
  
  }
}

export default Index
