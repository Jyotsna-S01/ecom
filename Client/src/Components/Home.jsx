import React from 'react'
import Layout from '../Pages/Layout'
import { useAuth } from '../Context/Auth.jsx'

const Home = () => {
  const[auth, setAuth] = useAuth()
  return (
    <Layout title={"Home page"}>
     {JSON.stringify(auth, null, 4)} 
    </Layout>
  )
}

export default Home
