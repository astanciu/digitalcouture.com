import React from 'react';
import { CoreLayout } from '../components';
import spinnerDress from '../images/spinner.gif';
import './about.css';

export default () => {
  const submit = async (e, b) => {
    e.preventDefault();
    let data = {
      name: document.getElementById('name').value,
      email: document.getElementById('mail').value,
      msg: document.getElementById('msg').value
    };

    await fetch('/api/contact.js', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    document.getElementById('name').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('msg').value = '';
  };

  return (
    <CoreLayout>
      <h2>Welcome to Digital Couture</h2>
      <img
        src={spinnerDress}
        alt="Spinning 3D dress"
        style={{ float: 'left', margin: '0px 20px' }}
        width={100}
      />
      <p>
        The Digital Couture® line is an exquisite, one-of-a-kind and limited
        edition collection of original, signature digital art, printed on
        couture fashion.
      </p>
      <p>
        All aspects of production, from the original artwork and designing to
        the printing, cutting and sewing, are personally performed in their home
        studio. They combine art, fashion and the newest technology with the
        highest attention to detail.
      </p>

      <div className="contact-form">
        <h3>Contact</h3>
        <form onSubmit={submit}>
          <div className="grid-wrapper">
            <div className="box a">
              <label htmlFor="name">Name:</label>
              <input className="input" type="text" id="name" name="user_name" />
            </div>
            <div className="box b">
              <label htmlFor="mail">E-mail:</label>
              <input
                className="input"
                type="email"
                id="mail"
                name="user_mail"
              />
            </div>
            <div className="box c">
              <label htmlFor="msg">Message:</label>
              <textarea className="input" id="msg" name="user_message" />
              <button className="submit-btn" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </CoreLayout>
  );
};

// export default () => (
//   <CoreLayout>
//     <h2>Welcome to Digital Couture</h2>
//     <img src={spinnerDress} alt="Spinning 3D dress" style={{float: 'left', margin: '0px 20px'}} width={100}/>
//     <p>The Digital Couture® line is an exquisite, one-of-a-kind and limited edition collection of original, signature digital art, printed on couture fashion.</p>
//     <p>All aspects of production, from the original artwork and designing to the printing, cutting and sewing, are personally performed in their home studio. They combine art, fashion and the newest technology with the highest attention to detail.</p>
//   </CoreLayout>
// );
