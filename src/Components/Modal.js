import React from "react";
//import "./styles.css";

function Modal({ changemodal }) {
  return (
    <>
      <div className=" w-50 mt-3 p-4 bg-secondary">
        <div className="buttonModal">
          <button
            className=" mb-3"
            onClick={() => {
              changemodal(false);
            }}
          >
            x
          </button>
        </div>

        <h2>Are you sure?</h2>
        <button
          className="btn btn-danger"
          onClick={() => {
            changemodal(false);
          }}
        >
          Cancel
        </button>
        <button className="btn btn-info">Continue</button>
      </div>
    </>
  );
}

export default Modal;
