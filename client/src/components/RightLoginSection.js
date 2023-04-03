import '../css/rightLoginSection.css';
import { useEffect } from 'react';

const RightLoginSection = (props) => {
  const handleCredentialResponse = (response) => {
    // Dispatch the signIn action
    props.signIn(response.credential);
  };

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
  );
};

export default RightLoginSection;
