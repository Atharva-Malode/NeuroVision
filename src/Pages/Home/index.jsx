import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const Navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    // Navigate to the "Predict" component with the image data as a parameter
    Navigate(`/predict?image=${URL.createObjectURL(file)}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-2xl font-bold text-black content-center mb-8">
        <h1>Opthalmic Disease Screening</h1>
      </div>
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg text-center md:w-1/2 lg:w-1/3">
        <h1 className="text-black mb-8">Upload an Image</h1>
        <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        {selectedImage && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Image"
              className="max-w-full h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


// const Home = () => {

//     return (
        
//       <div className="mx-auto pl-18 max-w-7xl h-full p-8 mt-20 flex justify-center items-center content-center">
//       <div className="bg-white pl-8 rounded-lg shadow-lg flex-grow">
//       <h1 className="text-2xl font-bold  text-black content-center">
//          Methods
//         </h1>
//           <div className="px-6 py-4">
//           {/* this container should be divided in two containers vertically parellel  */}
//           </div>
       
//       </div>
//     </div>
//     );
// };
// export default Home;