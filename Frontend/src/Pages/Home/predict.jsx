import React from "react";
import { useLocation } from "react-router-dom";

const Predict = () => {
  const location = useLocation();
  const imageUrl = new URLSearchParams(location.search).get("image");
  const prediction = new URLSearchParams(location.search).get("prediction");
  const predictedProbability = new URLSearchParams(location.search).get("predicted_probability");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-2xl font-bold text-black content-center mb-8">
        <h1>Opthalmic Disease Screening</h1>
      </div>
      <div className="flex gap-4 flex-row bg-gray-200 p-8 rounded-lg shadow-lg text-center md:w-1/2 lg:w-2/3">
        <div className="border border-gray-400 p-4 rounded-lg mb-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Uploaded Image"
              className="max-w-full h-auto"
            />
          ) : (
            <p>No image selected.</p>
          )}
        </div>
        <div className="flex-grow mt-4 column-1">
          <h1 className="text-black content-center mb-4">
            As per the fundus image you uploaded following are the results:
          </h1>
          {prediction && predictedProbability && (
            <div className="font-semibold p-2 text-center text-blue-900">
              <p>Prediction: {prediction}</p>
              <p>Predicted Probability: {predictedProbability}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predict;
