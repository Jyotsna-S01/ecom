// import React from 'react'
// import Layout from '../Layout'
// import { useAuth } from '../../Context/Auth.jsx'

// const Dashboard = () => {
//   const [auth,setAuth] = useAuth()
//   return (
//     <Layout>
//       <div className='contaier-fluid-m-10 p10'>
//         <div className='row'>
//             {/* <div className='col-md-3'>
//                 <Usermenu/>
//             </div> */}
//             <div className='col-md-10' style={{display: "flex"}}>
//                 <div className='card w-5 p-3 m-7' style={{marginTop: "10px"}}>
//                     <h3>User Name: {auth?.user?.name}</h3>
//                     <h3>User Email: {auth?.user?.email}</h3>
//                     <h3>User Address: {auth?.user?.address}</h3>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Dashboard


import React from 'react'
import Layout from '../Layout'
import { useAuth } from '../../Context/Auth.jsx'

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className='container-fluid m-10 p-10'>
        <div className='row'>
          {/* <div className='col-md-3'>
            <Usermenu />
          </div> */}
          
          <div className='col-md-9' style={{ display: "flex" }}>
            <div className='card w-100 p-3' style={{ marginTop: "10px" }}>
              <h3>User Name: {auth?.user?.name}</h3>
              <h3>User Email: {auth?.user?.email}</h3>
              <h3>User Address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard;