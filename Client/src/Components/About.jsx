import React from 'react'
import Layout from '../Pages/Layout'

const About = () => {
  return (
    <Layout title={"The about page of Ecomm"}>
      <table>
        <tr>
            <td><img src='https://res.cloudinary.com/dg53wx2ei/image/upload/v1681145439/6183551_3053975_zxzcfv.jpg' style={{height:'600px', width:'1000px'}}></img></td>
            <td><p style={{fontSize:'20px'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></td>
        </tr>
      </table>
    </Layout>
  )
}

export default About
