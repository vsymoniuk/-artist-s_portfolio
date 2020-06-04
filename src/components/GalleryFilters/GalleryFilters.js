import React from "react";
import "./GalleryFilters.scss";
import { sortByYear, filterByTechnics } from "../../store/actions/picture";
import { connect } from "react-redux";

const GalleryFilters = (props) => {
  return (
    <div className="GalleryFilters row">
      <div className="col s12 m6 row">
        <div className="col s12 ">Sort by year:</div>
        <button
          onClick={props.ascYear}
          className="col s12 btn black waves-effect waves-light"
        >
          ASCENDING
        </button>
        <button
          onClick={props.descYear}
          className="col s12  btn black waves-effect waves-light"
        >
          DESCENDING
        </button>
      </div>

      <div className="col s12 m6 row">
        <div className="input-field col s12">
          <input id="technics" type="text" />
          <label htmlFor="technics">Filter by technics:</label>
        </div>
        <button
          onClick={() =>
            props.filterByTechnics(document.getElementById("technics").value)
          }
          className="col s12 btn black waves-effect waves-light"
        >
          APPLY FILTERS
        </button>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    ascYear: () => dispatch(sortByYear("asc")),
    descYear: () => dispatch(sortByYear("desc")),
    filterByTechnics: (filter) => dispatch(filterByTechnics(filter)),
  };
}

export default connect(null, mapDispatchToProps)(GalleryFilters);
