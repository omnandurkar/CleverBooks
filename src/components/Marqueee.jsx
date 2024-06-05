import React from 'react';

export const Marqueee = () => {
  const strings = [
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c7ce8d5a488d39c51_maisha.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c8d12e2df177eeec2_ajanta.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c00347cedbc54fcdb_the%20white%20willow.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77ce4473d4ee696e286_TAILOR%20AND%20CIRCUS.svg",
   
  ];

  return (
    <div className="  overflow-hidden whitespace-nowrap">
      <div className="animate-marquee pt-10 mt-5       flex flex-row space-x-12 ">
        {strings.map((s, index) => (
          <img className='h-16' src={s} key={index} />       ))}
      </div>
    </div>
  );
};
