//import "./styles.css";
import { useState } from "react";
import Modal from "./Components/Modal.js";
export default function App() {
  const [openmodal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="container text-center mt-3">
        <h2>OPen the Modal</h2>
        <button
          className="btn btn-info"
          onClick={() => {
            setModal(true);
          }}
        >
          Click
        </button>
        <div className="d-flex justify-content-center">
          {openmodal && <Modal changemodal={setModal} />}
        </div>
      </div>
    </div>
  );
}
