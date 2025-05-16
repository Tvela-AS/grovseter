import React from "react";
import valdres from "../assets/img/valdres.avif";
import eidsbugarden from "../assets/img/eidsbugarden.jpg";

import HeroSlider from "../components/HeroSlider";
const Facilites = () => {
  return (
    <>
      <HeroSlider />

      <section className='py-24'>
        <div className='container mx-auto lg:px-0'>
          <div className='text-center'>
            <div className='font-tertiary uppercase text-[55px] tracking-[6px]'>
              Fasiliteter i nærområdet
            </div>
            <div className='container mx-auto'>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <h2 className='h2'>Turmuligheter</h2>
                  <p className='mb-8'>
                    {" "}
                    Rett utenfor dørstokken finnes utallige turmuligheter, for
                    alle aldre og nivåer. Nordvest ligger mektige
                    vest-Jotunheimen og venter med sine høye tinder og et rikt
                    DNT-turstinett. Vestover frister Filefjell og Lærdalsfjella
                    med sine rundere topper og spennende Kongevegen-traseer, og
                    mektige vestlandsfjorder en kort kjøretur unna. Østover
                    reiser Vang sine bratte fjellsider og topper seg rundt den
                    store innsjøen Vangsmjøsa - med mange spennende turmål.
                  </p>
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <img src={valdres} alt='Valdres' />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <img src={eidsbugarden} alt='Eidsbugarden Hotel' />
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <h2 className='h2'>Eidsbugarden</h2>
                  <p className='mb-8'>
                    Eidsbugarden hotell ligger vakkert til ved Bygdin i Vang
                    kommune i Valdres. Hotellet ligger i den sørlige delen av
                    Jotunheimen, og er en naturlig innfallsport for turer til
                    fots og på ski i Jotunheimen. Eidsbugarden er et av de
                    eldste turiststedene i Jotunheimen, og et yndet utgangspunkt
                    for fjellturister, med sin beliggenhet 1 060 meter over
                    havet i vestenden av innsjøen Bygdin.
                  </p>
                  <div className='py-8 px-6 mb-12'></div>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <h2 className='h2'>Turmuligheter</h2>
                  <p className='mb-8'>
                    Rett utenfor dørstokken finnes utallige turmuligheter, for
                    alle aldre og nivåer. Nordvest ligger mektige
                    vest-Jotunheimen og venter med sine høye tinder og et rikt
                    DNT-turstinett. Vestover frister Filefjell og Lærdalsfjella
                    med sine rundere topper og spennende Kongevegen-traseer, og
                    mektige vestlandsfjorder en kort kjøretur unna. Østover
                    reiser Vang sine bratte fjellsider og topper seg rundt den
                    store innsjøen Vangsmjøsa - med mange spennende turmål.
                  </p>
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  Bilde fra nærområdet
                </div>
              </div>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  Bilde fra Eidsbugarden
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <h2 className='h2'>Eidsbugarden</h2>
                  <p className='mb-8'>Litt info om Eidsbugarden</p>
                  <div className='py-8 px-6 mb-12'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilites;
