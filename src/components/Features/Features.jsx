import React from 'react'

export const Features = () => {
  return (
    <>

      <section className="bg-white light:bg-gray-900 md:px-0 px-5">
        <div className="py-8 mx-auto max-w-screen-xl sm:py-16 ">
          <div className=" mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl md:text-5xl flex justify-center text-center font-bold text-gray-900 light:text-white">Four key questions answered by Crest</h2>

          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-9 md:space-y-0 text-black">
            <div className='bg-[#f1e9fc] p-6 space-y-4 rounded-3xl shadow-lg '>
              <div className="flex justify-center items-center mb-4 w-10 h-10  lg:h-12 lg:w-12 light:bg-pink-900">
                <img className='h-14' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg' alt='' />
              </div>
              <h3 className="mb-2 text-2xl font-semibold ">What to order</h3>
              <p className="">Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
            </div>
            <div className='bg-[#f1e9fc] p-6 space-y-4 p-6 rounded-3xl'>
            <div className="flex justify-center items-center mb-4 w-10 h-10  lg:h-12 lg:w-12 light:bg-pink-900">
                <img className='h-14' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg' alt='' />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">When to order</h3>
              <p className="">Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
            </div>
            <div className='bg-[#f1e9fc] p-6 space-y-4 p-6 rounded-3xl'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-pink-100 lg:h-12 lg:w-12 light:bg-pink-900">
                <img className='h-14' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg' alt='' />

              </div>
              <h3 className="mb-2 text-2xl font-semibold">How much to stock</h3>
              <p className="">Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
            </div>
            <div className='bg-[#f1e9fc] p-6 space-y-4 p-6 rounded-3xl'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-pink-100 lg:h-12 lg:w-12 light:bg-pink-900">

                <img className='h-14' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg' alt='' />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">Where to place</h3>
              <p className="">Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
