import React, { useEffect, useState } from "react";
import M from "materialize-css";
import "./CreatePicture.scss";
import { Toast } from "../../shared/toast";
import axios from "../../axios/axios";
import { createPicture } from "../../store/actions/picture";
import { connect } from "react-redux";

const CreatePicture = (props) => {
  useEffect(() => {
    const textarea = document.getElementById("description");
    M.CharacterCounter.init(textarea);
  }, []);

  const [image, setImage] = useState("");

  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "progbase",
      upload_preset: "echlu8k6",
    },
    (error, result) => checkUploadResult(result)
  );

  function checkUploadResult(resultEvent) {
    if (resultEvent.event === "success") {
      setImage(resultEvent.info.secure_url);
    }
  }

  const createHandler = () => {
    const picture = {
      name: document.getElementById("name").value,
      year: document.getElementById("year").value,
      description: document.getElementById("description").value,
      technics: document.getElementById("technics").value,
      image,
    };

    const isValid = Object.keys(picture).reduce(
      (isValid, key) => isValid && !!picture[key],
      true
    );

    if(isValid) {
        props.createPicture(picture)
        // props.history.push('/gallery')
    } else {
        Toast('Please, fill in all the fields')
    }
  };

  return (
    <div className="CreatePicture row  card-panel">
      <div className="input-field col s12 m6">
        <input id="name" type="text" />
        <label htmlFor="name">picture name</label>
      </div>

      <div className="input-field col s12 m6">
        <input id="year" type="number" />
        <label htmlFor="year">creation year</label>
      </div>

      <div className="input-field col s12">
        <textarea
          id="description"
          className="materialize-textarea"
          data-length="250"
        ></textarea>
        <label htmlFor="description">Description</label>
      </div>

      <div className="input-field col s12 m6">
        <input id="technics" type="text" />
        <label htmlFor="technics">Technics used</label>
      </div>

      <button
        className="input-field col s12 m6 btn black waves-effect waves-light "
        onClick={() => widget.open()}
      >
        Upload image
      </button>

      <button
        onClick={createHandler}
        className="input-field btn black waves-effect waves-light col s12"
      >
        Create
      </button>
    </div>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    createPicture: (picture) => dispatch(createPicture(picture))
  };
}


export default connect(null, mapDispatchToProps)(CreatePicture);
