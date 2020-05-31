import React from "react";
import { Calendly } from "../../components/Calendly/Calendly";
import "./Contact.scss";

export const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact__Calendly">
        <Calendly dataUrl="https://calendly.com/vsymoniuk/photosession?primary_color=000000" />
      </div>
      <div className="Contact__Data">
        <div>
          <b>Email</b>: kpopenko78@gmail.com
          <br/>
          <b>Phone number</b>: +45 (542) 34 93 789 
        </div>
        <iframe
          className='pt1 Contact__Data__Map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1188.8835645528097!2d10.880359426487212!3d56.42315657244401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464dd598c3cd588f%3A0xee52f8c28b7943ff!2zw4VzdHJ1cHBhcmtlbiwgODUwMCBHcmVuw6UsINCU0LDQvdGW0Y8!5e0!3m2!1suk!2sau!4v1590852709319!5m2!1suk!2sau"
          title="Map"
          style={{border:0}}
        />
      </div>
    </div>
  );
};
