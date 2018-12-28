import React from 'react';
import { CoreLayout } from '../components';

export default () => {
  const submit = async (e, b) => {
    e.preventDefault();
    let data = {
      name: document.getElementById('name').value,
      email: document.getElementById('mail').value,
      msg: document.getElementById('msg').value
    };

    const rawResponse = await fetch('/api/contact.js', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const content = await rawResponse.json();

    document.getElementById('name').value=''
    document.getElementById('mail').value=''
    document.getElementById('msg').value=''
  };

  return (
    <CoreLayout>
      <h2>Contact</h2>
      <div className="contact-form">
        <form onSubmit={submit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name" />
          </div>
          <div>
            <label htmlFor="mail">E-mail:</label>
            <input type="email" id="mail" name="user_mail" />
          </div>
          <div>
            <label htmlFor="msg">Message:</label>
            <textarea id="msg" name="user_message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </CoreLayout>
  );
};
