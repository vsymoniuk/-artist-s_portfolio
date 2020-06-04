import React from "react";
import "./GalleryItem.scss";
import { NavLink } from "react-router-dom";

const GalleryItem = ({picture}) => {
  return (
    <NavLink to={"/picture/" + picture.id}>
      <div className="GalleryItem">
        <div
          className="GalleryItem__Cover"
          style={{
            backgroundImage: `url(${picture.image})`,
          }}
        />
      </div>
    </NavLink>
  );
};

export default GalleryItem;
