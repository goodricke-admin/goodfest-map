import React from "react";

function Food({ onClickFunc, closeModal }) {
  const modalContent = (
    <div>
      <h1>Food menues</h1>
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
      <h1>Food Menus</h1>
      <p>
        This is a link to show the food menus from the food trucks located at
        the entrance to the college
      </p>
      <p>
        {" "}
        This is where you can get some food, all alergens/dietary requirements
        catered for.
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

export default Food;
