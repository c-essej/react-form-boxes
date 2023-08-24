import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid"


/**  */
function BoxList() {

  const [boxesList, setBoxesList] = useState([]);

  console.log('BoxList', boxesList);


  /**  */
  function addBox(boxData) {
    console.log('boxData', boxData);
    let newBoxData = { ...boxData, id: uuid() };
    setBoxesList(boxesList => [...boxesList, newBoxData]);
  }



  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxesList.map(box =>
        <Box backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          key={box.id}
        />)}
    </div>
  );

}

export default BoxList;