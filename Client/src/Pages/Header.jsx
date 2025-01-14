// import React from 'react';
// import { Link } from 'react-router-dom';
// import Layout from './Layout';
// import { useAuth } from '../Context/Auth';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const Header = () => {
//     const [auth, setAuth] = useAuth();

//     const handleLogout = () => {
//         setAuth({
//             ...auth,
//             user: null,
//         });
//         localStorage.removeItem("token");
//     }
//     return (
//         <div >
//             <header style={{ left: 0, top: 0, width: '100%' }}>
//                 <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                     <div style={{ display: 'flex', justifyContent: 'left' }}>
//                         <img src='data:image/png;base64,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' style={{ height: '25px', width: '25px' }}></img>
//                         <p style={{ font: '35px', padding: '5px' }}><b>ECOMMERCE APP</b></p>
//                     </div>
//                     <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'right' }}>
//                         <li style={{ padding: '10px' }}><Link to="/">Home</Link></li>
//                         <li style={{ padding: '10px' }}><Link to="/register">Register</Link></li>
//                         <li style={{ padding: '10px' }}><Link to="/login">Login</Link></li>
//                         <NavDropdown title={auth.user.name} id="basic-nav-dropdown">
//                             <NavDropdown.Item as={Link} to={'/dashboard/${auth?.user?.role === 1? "admin" : "user"}'}>
//                             Dashboard
//                             </NavDropdown.Item>
//                             <NavDropdown.Item onClick={handleLogout} as={Link} to="/login">
//                             LOGOUT
//                             </NavDropdown.Item>
//                         </NavDropdown>
//                     </ul>
//                 </nav>
//             </header>
//         </div>
//     )
// }

// export default Header

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { useAuth } from '../Context/Auth.jsx';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
        });
        localStorage.removeItem("token");
    }

    return (
        <div>
            <header style={{ left: 0, top: 0, width: '100%' }}>
                <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                        <img src='data:image/png;base64,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' alt='Logo' />
                    </div>
                    <div>
                        <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', listStyle: 'none' }}>
                            {!auth.user ? (
                                <>
                                    <li style={{ marginRight: '20px' }}><Link to='/register'>Register</Link></li>
                                    <li style={{ marginRight: '20px' }}><Link to='/login'>Login</Link></li>
                                </>
                            ) : (
                                <>
                                    <li style={{ marginRight: '20px' }}><Link to='/product'>Product</Link></li>
                                    <li style={{ marginRight: '20px' }}><Link to='/category'>Category</Link></li>
                                    <li style={{ marginRight: '20px' }}><Link to='/users'>Users</Link></li>
                                    <li>
                                        <NavDropdown title={auth.user ? auth.user.name : 'User'} id="basic-nav-dropdown">
                                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
            <Layout />
        </div>
    );
}

export default Header;
