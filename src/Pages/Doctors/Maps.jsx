import DefaultMap from "./AzureMap";

const Maps = () => {

  const doctors = [
    { name: 'Dr. Sudhir', specialty: 'Ophthalmologist' },
    { name: 'Dr. Emily', specialty: 'Cardiologist' },
    // Add more doctors here
  ];
    return (
      

      <section className="w-full bg-white" id="home">
          <div className="mx-auto max-w-7xl h-full lg:py-1  lg:grid items-center lg:grid-cols-12">
            {" "}
            <div className="flex flex-col justify-start px-4 py-2 md:py-16 lg:col-span-5 lg:gap-x-6 lg:px-6 lg:py-10 xl:col-span-3">
              {" "}
              <div className="flex items-center ">
             <input
              type="text"
              placeholder="Search for doctors..."
              className="border rounded-l py-2 px-4 "
            />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-r">Search</button>
            </div>{" "}
            <div>
            <ul className="list-disc pl-6">
              {doctors.map((doctor, index) => (
             <li key={index} className="text-lg text-black">
              {doctor.name} - {doctor.specialty}
             </li>))}
            </ul>{" "}
            
            </div>{" "}
            </div>{" "}
            <div className="py-6 relative lg:col-span-7 lg:-mr-8 xl:col-span-8 flex items-center justify-center">
              <DefaultMap />
            </div>{" "}
          </div>
        </section>
    );
};
export default Maps