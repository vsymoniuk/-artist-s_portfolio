import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPictures } from "../../store/actions/picture";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import "./Gallery.scss";
import GalleryFilters from "../../components/GalleryFilters/GalleryFilters";

const Gallery = (props) => {
  useEffect(() => {
    props.fetchPictures();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <GalleryFilters />
      {props.loading ? (
        <img src="/pictures/loader.gif" alt="loader" />
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
    pictures: state.picture.visiblePictures,
    loading: state.picture.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
