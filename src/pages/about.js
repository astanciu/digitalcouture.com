import React from "react";
import { CoreLayout } from "../components";
import spinnerDress from "../images/spinner.gif";
import "./about.css";

const About = () => {
  const submit = async (e, b) => {
    e.preventDefault();
    let data = {
      name: document.getElementById("name").value,
      email: document.getElementById("mail").value,
      msg: document.getElementById("msg").value,
    };

    await fetch("/contactform", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("msg").value = "";
  };

  return (
    <CoreLayout>
      <h2>Welcome to Digital Couture</h2>
      <img src={spinnerDress} alt="Spinning 3D dress" style={{ float: "left", margin: "0px 20px" }} width={100} />
      <p>
        The Digital Couture® line is an exquisite, one-of-a-kind and limited edition collection of original, signature
        digital art, printed on couture fashion.
      </p>
      <p>
        All aspects of production, from the original artwork and designing to the printing, cutting and sewing, are
        personally performed in our studio. We combine art, fashion and the newest technology with the highest attention
        to detail.
      </p>
      <p>
        For more information, email us at <span>info@digitalcouture.com</span>
      </p>
    </CoreLayout>
  );
};

export default About;

// export default () => (
//   <CoreLayout>
//     <h2>Welcome to Digital Couture</h2>
//     <img src={spinnerDress} alt="Spinning 3D dress" style={{float: 'left', margin: '0px 20px'}} width={100}/>
//     <p>The Digital Couture® line is an exquisite, one-of-a-kind and limited edition collection of original, signature digital art, printed on couture fashion.</p>
//     <p>All aspects of production, from the original artwork and designing to the printing, cutting and sewing, are personally performed in their home studio. They combine art, fashion and the newest technology with the highest attention to detail.</p>
//   </CoreLayout>
// );
