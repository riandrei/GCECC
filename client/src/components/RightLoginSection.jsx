import { useEffect } from 'react';
import pageLogo from '../assets/logo.png';

import '../css/rightLoginSection.css';

const RightLoginSection = ({ signIn }) => {
  // dispatches the signIn action when google sends their JWT after user clicked log in
  const handleCredentialResponse = (response) => {
    signIn(response.credential);
  };
  // connects to google cloud project and renders the button
  useEffect(() => {
    const google = window.google;

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

  // gives the same height to the children of the right section which makes sure the elements are vertically centered
  useEffect(() => {
    const brandingContainer = document.querySelector(`.right`);
    const brandingChildren = [...brandingContainer.children];

    if (document.body.clientWidth < 810) {
      brandingChildren.forEach((node) => {
        node.style.height = `${brandingContainer.firstElementChild.clientHeight}px`;
      });
    }
  }, []);

  // gives the same width of the signIn button to the welcome student
  useEffect(() => {
    const signInButtonWidth = document.querySelector(`#buttonDiv`).children[0].clientWidth;
    const welcome = document.querySelector(`.login`);

    welcome.style.width = `${signInButtonWidth}px`;
  }, []);

  return (
    <section className="right">
      <div className="website-branding">
        <img className="logo" src={pageLogo} alt="" draggable="false" />
        <h1>Student's Marketplace</h1>
      </div>
      <div className="login">
        <p>Welcome Students!</p>
        <div id="buttonDiv"></div>
      </div>
      <a href="mailto:202110056@gordoncollege.edu.ph">
        <p className="contact">Contact Us</p>
      </a>
    </section>
  );
};

export default RightLoginSection;
