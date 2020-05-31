import React, { useEffect, Fragment } from "react";
import M from "materialize-css";

export default function About() {
  const image = '/pictures/1.jpg'

  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    const instances = M.Parallax.init(elems);
    return () => {
      instances.forEach((parallax) => parallax.destroy());
    };
  }, []);

  return (
    <Fragment>
      <div style={{height: 350}} className="parallax-container">
        <div style={{zIndex:1}}  className="parallax">
          <img className="parallax-img" src={image} alt="Kate on the work" />
        </div>
      </div>
      <p className="container py2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, impedit? Dolorum nihil, laborum dolor sunt doloremque quod recusandae commodi tenetur officiis maxime, eum quibusdam. Minima quasi aspernatur ipsum delectus nobis!
      </p>
      <div className="parallax-container">
        <div style={{zIndex:1}} className="parallax">
          <img className="parallax-img" src={image} alt="Kate on the work" />
        </div>
      </div>
    </Fragment>
  );
}
