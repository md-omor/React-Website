import React from "react";



const Footer = () => {

    const date = new Date().getFullYear()
  return (
    <>
    <div className="container bg-primary w-100 text-center">
      <div>
          <p>
            © {date} Md Omor. ALL Rights Reserved | Terms & Condition
          </p>
      </div>
    </div>
      
    </>
  );
};

export default Footer;

//© 2020 Md Omor. ALL Rights Reserved | Terms & Condition
