import React, { useState } from "react";

const InlineEditForm = () => {
  const [show, setShow] = useState("");      // final value (display wali)
  const [tempName, setTempName] = useState(""); // input me typing wali temporary value
  const [isEditing, setIsEditing] = useState(false);

  const handleEditSave = () => {
    if (isEditing) {
      // jab Save dabaya gaya — ab show update hoga
      setShow(tempName);
    } else {
      // jab Edit dabaya gaya — tempName me purani value bharo
      setTempName(show);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
        {show || "No Name Saved"}
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Name</label>
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              isEditing
                ? "border-blue-400 focus:ring-blue-300"
                : "border-gray-200 bg-gray-100 cursor-not-allowed"
            }`}
          />
        </div>

        <div className="text-center mt-6">
          {
            isEditing?
            <button
            type="button"
            onClick={handleEditSave}
            className='px-6 py-2 rounded-lg text-white font-medium transition bg-green-500 hover:bg-green-600'
          >
         
          edit
          </button>
          :

          <div>
          <button
            type="button"
            onClick={handleEditSave}
            className='px-6 py-2 rounded-lg text-white font-medium transition bg-green-500 hover:bg-green-600'
          >
        
          save
          </button>


           <button
            type="button"
            onClick={handleEditSave}
            className='px-6 py-2 rounded-lg text-white font-medium transition bg-green-500 hover:bg-green-600'
          >
        
          cancle
          </button>
 </div>

          
          }
        </div>
      </form>
    </div>
  );
};

export default InlineEditForm;







