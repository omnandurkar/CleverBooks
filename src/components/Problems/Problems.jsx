import React, { useEffect, useState } from 'react';
import Image1 from './features-img-1.jpg';
import Image4 from './features-img-4.jpg';
import Image5 from './features-img-5.jpg';
import { Svg6 } from '../Svgs/Svgs';
import { Svg7 } from '../Svgs/Svgs';
import { Svg8 } from '../Svgs/Svgs';
import { Svg9 } from '../Svgs/Svgs';


const Problems = () => {
  const [selectedTab, setSelectedTab] = useState('content-1');

  useEffect(() => {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('[id^="content-"]');

    // Select the "Advanced tools" button by default
    const defaultButton = document.querySelector('[data-tab="content-1"]');
    defaultButton.classList.add('hs-tab-active:bg-blue-600', 'hs-tab-active:text-white');

    // Show the default tab content
    document.getElementById(selectedTab).classList.remove('hidden');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTabId = button.getAttribute('data-tab');

        // Log to console to check if the event listener is triggered
        console.log(`Clicked button for tab: ${targetTabId}`);

        // Hide all tab contents
        tabContents.forEach(content => {
          content.classList.add('hidden');
        });

        // Show the selected tab content
        document.querySelector(`#${targetTabId}`).classList.remove('hidden');


        // Update selectedTab state
        setSelectedTab(targetTabId);

      });
    });
  }, [selectedTab]);


  return (
    <div className=' pt-20 '>
      <div className="flex justify-center w-full -mb-28">
        <h2 className="text-2xl text-black text-center  font-bold sm:text-3xl ">
          Things your spreadsheet wishes it could do
        </h2>
      </div>
      <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="flex   z-10  ">
            <div className="mb-10 text-black p-10 rounded-lg ">


              <nav className="grid text-black mt-5 md:mt-10 space-y-5" aria-label="Tabs" role="tablist">
                <button type="button" className="text-start bg-gray-300 md:bg-transparent w-72 md:w-full hover:text-white hover:bg-gradient-to-br hover:from-fuchsia-400 hover:via-indigo-400 hover:to-red-400 duration-300 p-4 md:p-5 rounded-xl focus:bg-gray-300 focus:drop-shadow-lg" data-tab="content-1" aria-controls="content-1" role="tab" aria-selected="true">
                  <span className="flex">
                    <Svg6 />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold">Accurate Demand Forecasting</span>
                      <span className="block mt-1">Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="text-start bg-gray-300 md:bg-transparent w-72 md:w-full hover:text-white hover:bg-gradient-to-br hover:from-fuchsia-400 hover:via-indigo-400 hover:to-red-400 duration-300 p-4 md:p-5 rounded-xl focus:bg-gray-300 focus:drop-shadow-lg" data-tab="content-2" aria-controls="content-2" role="tab" aria-selected="false">
                  <span className="flex">
                    <Svg6 />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold">HELIX: Workflow Automation</span>
                      <span className="block mt-1">Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="text-start bg-gray-300 md:bg-transparent w-72 md:w-full hover:text-white hover:bg-gradient-to-br hover:from-fuchsia-400 hover:via-indigo-400 hover:to-red-400 duration-300 p-4 md:p-5 rounded-xl focus:bg-gray-300 focus:drop-shadow-lg" data-tab="content-3" aria-controls="content-3" role="tab" aria-selected="false">
                  <span className="flex">
                    <Svg6 />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold">Automated Purchase Planning</span>
                      <span className="block mt-1">Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="text-start bg-gray-300 md:bg-transparent w-72 md:w-full hover:text-white hover:bg-gradient-to-br hover:from-fuchsia-400 hover:via-indigo-400 hover:to-red-400 duration-300 p-4 md:p-5 rounded-xl focus:bg-gray-300 focus:drop-shadow-lg" data-tab="content-4" aria-controls="content-4" role="tab" aria-selected="false">
                  <span className="flex">
                    <Svg6 />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold">Automated Distribution Planning</span>
                      <span className="block mt-1">Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="text-start bg-gray-300 md:bg-transparent w-72 md:w-full hover:text-white hover:bg-gradient-to-br hover:from-fuchsia-400 hover:via-indigo-400 hover:to-red-400 duration-300 p-4 md:p-5 rounded-xl focus:bg-gray-300 focus:drop-shadow-lg" data-tab="content-5" aria-controls="content-5" role="tab" aria-selected="false">
                  <span className="flex">
                    <Svg6 />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold">Custom Dashboards</span>
                      <span className="block mt-1">Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.</span>
                    </span>
                  </span>
                </button>
                <button type="button" className="text-start bg-gray-300 md:bg-transparent w-72 md:w-full hover:text-white hover:bg-gradient-to-br hover:from-fuchsia-400 hover:via-indigo-400 hover:to-red-400 duration-300 p-4 focus: md:p-5 rounded-xl focus:bg-gray-300 focus:drop-shadow-lg" data-tab="content-6" aria-controls="content-6" role="tab" aria-selected="false">
                  <span className="flex">
                    <Svg6 />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold">Consensus Planning demand forecasting</span>
                      <span className="block mt-1">Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning</span>
                    </span>
                  </span>
                </button>
              </nav>

            </div>

            <div className="lg:col-span-12 items-center flex w-screen">
              <div className="relative ">
                <div className='hidden md:block'>
                  <div id="content-1" className="hidden " role="tabpanel" aria-labelledby="button-1">
                    <img className="shadow-xl drop-shadow rounded-xl p-5 py-40 bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-red-400" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp" alt="Image Description" />
                  </div>

                  <div id="content-2" className="hidden" role="tabpanel" aria-labelledby="button-2">
                    <img className="shadow-xl drop-shadow  rounded-xl p-5 py-40 bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-red-400 " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-1080.webp" alt="Image Description" />
                  </div>

                  <div id="content-3" className="hidden" role="tabpanel" aria-labelledby="button-3">
                    <img className="shadow-xl drop-shadow  rounded-xl p-5 py-40 bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-red-400 " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bd0e4b4b78267e66b04_Purchase%20planning-p-1080.webp" alt="Image Description" />

                  </div>
                  <div id="content-4" className="hidden" role="tabpanel" aria-labelledby="button-3">
                    <img className="shadow-xl drop-shadow  rounded-xl p-5 py-40 bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-red-400 " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d89a9ea3f05_distribution%2520planning%2520type-2%2520-p-1080.webp" alt="Image Description" />

                  </div>
                  <div id="content-5" className="hidden" role="tabpanel" aria-labelledby="button-3">
                    <img className="shadow-xl drop-shadow  rounded-xl p-5 py-40 bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-red-400 " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64366b9b4373ee32f68ac19c_dashboard%20ss-p-1080.webp" alt="Image Description" />

                  </div>
                  <div id="content-6" className="hidden" role="tabpanel" aria-labelledby="button-3">
                    <img className="shadow-xl drop-shadow  rounded-xl p-5 py-40 bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-red-400 " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6634db1d80804c8f875b196c_consen%20home%20-p-1080.png" alt="Image Description" />

                  </div>
                </div>
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <Svg9 />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Problems;


