import React from "react";
import Marque from "../marque/Marque";

const Work = () => {
    
  return (
      <div>
         {/* <Marque></Marque> */}
         <section 
      className="bg-gray-100 rounded py-10 px-4 md:my-16 my-16 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">1. Browse Companies</h3>
          <p>Visit the homepage and explore available company icons.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">2. Register/Login</h3>
          <p>You must register or log in before viewing company details.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">3. View Details</h3>
          <p>Click on any company icon to see detailed job requirements.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">4. Apply</h3>
          <p>Click the 'Betel' button to see more info and apply for the job.</p>
        </div>
      </div>
    </section>
     </div>
  );
};

export default Work;