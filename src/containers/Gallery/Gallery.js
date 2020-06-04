import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPictures } from "../../store/actions/picture";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import "./Gallery.scss";

const Gallery = (props) => {
  useEffect(() => {
    props.fetchPictures();
  },[]);

  return (
    <Fragment>
      {props.loading ? (
        <img src="/pictures/loader.gif" alt="loader"/>
      ) : (
        <div className="Gallery">
          {props.pictures.map((picture) => (
            <GalleryItem key={picture.image + Date.now()} picture={picture} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    pictures: state.picture.pictures,
    loading: state.picture.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
