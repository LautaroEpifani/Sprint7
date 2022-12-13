import React from "react";

const Help = ({info}) => {

 
  return (
<div>
{/* The button to open modal */}
<label htmlFor="my-modal-3" className=""></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal m-auto justify-start">
  <div className="modal-box w-96 mb-16 ml-16 border-2 border-black">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
   
    <p className="py-4">{info}</p>
  </div>
</div>
</div>
  );
};

export default Help;
