import React from 'react';

export const Review = () => {
  return (
    <section className="text-gray-600 body-font mx-auto w-full md:max-w-7xl py-10">
      <div className="mx-auto px-5 py-24 flex space-x-0 md:space-x-32 flex-col md:flex-row items-center">
        <div className="w-full  md:w-1/2">
          <p className="mb-8 leading-relaxed w-full md:max-w-2xl">
            D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
          </p>

          <div className="flex items-center space-x-2 mb-8">
            <img className="w-14 h-14 p-1 rounded-full" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp" alt="Bordered avatar" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="title-font text-xl font-medium text-gray-900 text-center">Diksha Pande <br /> <span className='text-sm'>Co-founder, Samosa Party</span></h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-center space-x-0 space-y-4 md:space-x-8 md:space-y-0">
            <div className="flex flex-col space-y-2 w-full md:w-52 items-center bg-[#f1e9fc] p-4 px-9 rounded-2xl">
              <h1 className="text-3xl font-bold bg-gradient-to-br from-red-400 to-fuchsia-400 bg-clip-text text-transparent">upto 95%</h1>
              <span className="text-sm font-semibold">Demand Fulfilment</span>
            </div>
            <div className="flex flex-col space-y-2  items-center bg-[#f1e9fc] p-4 px-9 rounded-2xl">
              <h1 className="text-3xl font-bold bg-gradient-to-br from-red-400 to-fuchsia-400 bg-clip-text text-transparent">3%</h1>
              <span className="text-sm font-semibold">Daily Stock-out</span>
            </div>
            <div className="flex flex-col space-y-2  justify-center items-center border-2 border-[#f1e9fc] p-4 px-9 rounded-2xl">
              <h1 className="text-md font-bold bg-gradient-to-br from-red-400 to-fuchsia-400 bg-clip-text text-transparent">Read Story</h1>
              <img className="w-4" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg" alt="vector" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:max-w-lg mt-10 md:mt-0">
          <img className="border-2 border-[#d8c3ff] py-5 object-center rounded-3xl" alt="hero" src="https://static.uengage.in/uploads/31763/image-WA7BK8-1697042198.jpg" />
        </div>
      </div>
    </section>
  );
};
