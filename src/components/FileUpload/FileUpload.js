import React, { useEffect, useState } from "react";
import "./FileUpload.scss";
import $ from "jquery";

const FileUpload = () => {



  function readURL() {
    const input = document.querySelector(".file-upload-input");

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        $(".image-upload-wrap").removeClass("image-dropping");
        $(".image-upload-wrap").hide();
        console.log(e.target);

        $(".file-upload-image").attr("src", e.target.result);
        $(".file-upload-content").show();

        $(".image-title").html(input.files[0].name);
      };

      reader.readAsDataURL(input.files[0]);
    } else {
      removeUpload();
    }
  }

  function removeUpload() {
    $(".file-upload-input").replaceWith($(".file-upload-input").clone());
    $(".file-upload-content").hide();
    $(".image-upload-wrap").show();
  }

  return (
    <div className="file-upload">
      <button
        className="file-upload-btn"
        type="button"
        onClick={() => $(".file-upload-input").trigger("click")}
      >
        ADD IMAGE
      </button>

      <div className="image-upload-wrap">
        <input
          className="file-upload-input"
          type="file"
          onChange={readURL}
          accept="image/*"
        />
        <div className="drag-text">
          <h2>DRAG AND DROP A FILE OR SELECT ADD IMAGE</h2>
        </div>
      </div>

      <div className="file-upload-content">
        <img className="file-upload-image" src="#" alt="your file" />
        <div className="image-title-wrap">
          <button type="button" onClick={removeUpload} className="remove-image">
            Remove <span className="image-title">Uploaded Image</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
