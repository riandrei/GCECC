import '../css/login.css';
import { signIn } from '../actions/authActions.js';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleCredentialResponse = (response) => {
    // Dispatch the signIn action
    props.signIn(response.credential);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const brandingContainer = document.querySelector(`.right`);
    const brandingChildren = [...brandingContainer.children];
    const google = window.google;

    if (document.body.clientWidth < 810) {
      brandingChildren.forEach((node) => {
        node.style.height = `${brandingContainer.firstElementChild.clientHeight}px`;
      });
    }

    google.accounts.id.initialize({
      client_id: '654052078162-oee7b55pllvg568frjffnjkdmpelb9j7.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(document.querySelector('#buttonDiv'), {
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      width: `${document.querySelector(`.login`).clientWidth}`
    });
  });

  return (
    <>
      <section className="left">
        <div className="left-circle">
          <img className="woman-shopping-img" src="./pictures/woman-removebg-preview.png" alt="" draggable="false" />
          <img className="shopping-cart-img" src="./pictures/skating.png" alt="" draggable="false" />
        </div>
      </section>
      <section className="right">
        <div className="website-branding">
          <img className="logo" src="./pictures/logo.png" alt="" draggable="false" />
          <h1>Student's Marketplace</h1>
        </div>
        <div className="login">
          <p>Welcome Students!</p>
          <div id="buttonDiv"></div>
        </div>

        <p className="contact">Contact Us</p>
      </section>
    </>
  );
};

const mapDispatchToProps = { signIn };

export default connect(null, mapDispatchToProps)(Login);

// import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// import { connect, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signIn } from '../actions/authActions.js';

// function Login(props) {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const navigate = useNavigate();
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false);
//   const [isGoogleReady, setIsGoogleReady] = useState(false);
//   const loginRef = useRef(null);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/home');
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://accounts.google.com/gsi/client';
//     script.async = true;
//     script.defer = true;
//     script.onload = () => {
//       setIsGoogleReady(true);
//     };
//     document.head.appendChild(script);
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   useLayoutEffect(() => {
//     if (isGoogleReady) {
//       const google = window.google;

//       const handleCredentialResponse = (response) => {
//         // Dispatch the signIn action
//         props.signIn(response.credential);
//       };

//       google.accounts.id.initialize({
//         client_id: '654052078162-oee7b55pllvg568frjffnjkdmpelb9j7.apps.googleusercontent.com',
//         callback: handleCredentialResponse
//       });

//       const renderButton = () => {
//         google.accounts.id.renderButton(document.querySelector('#buttonDiv'), {
//           theme: 'outline',
//           size: 'large',
//           text: 'continue_with',
//           width: `${loginRef.current.clientWidth}`
//         });
//         setIsScriptLoaded(true);
//       };

//       if (google.accounts.id) {
//         renderButton();
//       } else {
//         const checkGoogleLoaded = setInterval(() => {
//           if (google.accounts.id) {
//             clearInterval(checkGoogleLoaded);
//             renderButton();
//           }
//         }, 100);
//       }
//     }
//   }, [isGoogleReady, props]);

//   useLayoutEffect(() => {
//     if (loginRef.current) {
//       const brandingContainer = document.querySelector(`.right`);
//       console.log(brandingContainer);
//       if (brandingContainer && document.body.clientWidth < 810) {
//         const brandingChildren = [...brandingContainer.children];
//         brandingChildren.forEach((node) => {
//           node.style.height = `${loginRef.current.clientHeight}px`;
//         });
//       }
//     }
//   });

//   return (
//     <>
//       {isScriptLoaded && (
//         <>
//           <section className="left">
//             <div className="left-circle">
//               <img
//                 className="woman-shopping-img"
//                 src="./pictures/woman-removebg-preview.png"
//                 alt=""
//                 draggable="false"
//               />
//               <img className="shopping-cart-img" src="./pictures/skating.png" alt="" draggable="false" />
//             </div>
//           </section>
//           <section className="right">
//             <div className="website-branding">
//               <img className="logo" src="./pictures/logo.png" alt="" draggable="false" />
//               <h1>Student's Marketplace</h1>
//             </div>
//             <div className="login">
//               <p>Welcome Students!</p>
//               <div id="buttonDiv"></div>
//             </div>

//             <p className="contact">Contact Us</p>
//           </section>
//         </>
//       )}
//     </>
//   );
// }

// const mapDispatchToProps = { signIn };

// export default connect(null, mapDispatchToProps)(Login);
