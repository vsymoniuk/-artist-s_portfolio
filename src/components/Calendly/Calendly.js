import React, { useEffect } from "react";
import "./Calendly.scss";

export const Calendly = ({ dataUrl }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
    return () => {
      script.remove();
    };
  });

  return (
    <div
      className="calendly-inline-widget"
      data-url={dataUrl}
      style={{
        // position:'relative',
        minWidth: 320,
        height: 943,
        overflow: "hidden",
      }}
    ></div>
  );
};
