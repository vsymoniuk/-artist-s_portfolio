import React, { useEffect } from "react";
import { fetchPictureById, deletePictureById } from "../../store/actions/picture";
import { connect } from "react-redux";
import "./Picture.scss";

const Picture = (props) => {
  useEffect(() => {
    props.fetchPictureById(props.match.params.id);
    // eslint-disable-next-line 
  }, []);

  const deleteHandler = () => {
    props.deletePictureById(props.match.params.id)
  }

  if (props.loading) {
    return <img src="/pictures/loader.gif" alt="loader" className="Loader" />;
  } else {
    if (props.picture) {
      console.log(props.picture);
      return (
        <div className="Picture">
          <img
            src={props.picture.image}
            className="Image"
            alt={props.picture.name}
          />
          <div>
            <div className="Info">
              <b>Name</b>: {props.picture.name}
            </div>
            <div className="Info">
              <b>Year</b>: {props.picture.year}
            </div>
            <div className="Info">
              <b>Description</b>: {props.picture.description}
            </div>
            <div className="Info">
              <b>Technics</b>: {props.picture.technics}
            </div>
            {props.isAuthenticated ? (
              <button onClick={deleteHandler} className="Button btn black waves-effect waves-light ">
                DELETE
              </button>
            ) : null}
          </div>
        </div>
      );
    } else {
      return (
        <h1 className="Error">
          Error 404. <br /> Image could not be found
        </h1>
      );
    }
  }
};

function mapStateToProps(state) {
  return {
    picture: state.picture.picture,
    loading: state.picture.loading,
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPictureById: (id) => dispatch(fetchPictureById(id)),
    deletePictureById: (id) => dispatch(deletePictureById(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
