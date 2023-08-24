
import React, { useState } from "react";

/**
 * Form for creating a new Box
 *
 * Props:
 * -addBox function
 *
 * State:
 * -boxFormData
 *
 *
 * -BoxList -> NewBoxForm
*/
function NewBoxForm({ addBox }) {

  const initialData = {
    backgroundColor: '',
    width: '',
    height: ''
  };

  const [boxFormData, setBoxFormData] = useState(initialData);

  console.log('NewBoxForm', boxFormData);

  /** Send {backgroundColor, height, width} to parent
    *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(boxFormData);
    setBoxFormData(initialData);
  }


  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setBoxFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={boxFormData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={boxFormData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={boxFormData.height}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  );

}

export default NewBoxForm;