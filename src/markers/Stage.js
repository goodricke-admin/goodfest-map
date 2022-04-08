import React from "react";

function Stage({ onClickFunc, closeModal }) {
  const modalContent = (
    <div>
      <h1>Main Stage Schedule</h1>
      <button
        onClick={() => {
          closeModal();
        }}
      >
        Close Modal
      </button>
    </div>
  );
  return (
    <div className="popup">
      <h1>Main Stage Schedule</h1>
      <p>
        Theses are all of the acts that will be happing during the day in a
        table format with aprox start times :)
      </p>
      <p>
        {" "}
        Or should this be a link to a neater version of the schedule? Nah should
        have a Modal
      </p>
      <button
        onClick={() => {
          onClickFunc(modalContent);
        }}
      >
        Trigger Modal
      </button>
    </div>
  );
}

export default Stage;
