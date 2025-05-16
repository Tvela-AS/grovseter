import React from "react";
import olabu from "../assets/img/rooms/olabu.jpg";
import midtgard from "../assets/img/rooms/midtgard.jpg";

import HeroSlider from "../components/HeroSlider";
const About = () => {
  return (
    <>
      <HeroSlider />

      <section className='py-24'>
        <div className='container mx-auto lg:px-0'>
          <div className='text-center'>
            <div className='font-tertiary uppercase text-[55px] tracking-[6px]'>
              Om Grøv Seter
            </div>
            <div className='container mx-auto'>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <h2 className='h2'>Litt av historien</h2>
                  <p className='mb-8'>
                    I øvre Valdres har det gjennom tidene vært forholdsvis stor
                    ferdsel. Den Bergenske Hovedvei hadde sin trase her, og
                    allerede før biler begynte å rulle, var behovet for
                    overnatting til stede. Gårdene nede i bygden hadde støler på
                    fjellet. Her begynte det tidlig på 1900 tallet å komme
                    "turister". De ble mottatt på stølene, og en kan vel trygt
                    si at boforholdene ikke alltid var like gode. En del så
                    inntektsmuligheter i dette, og bygget noe som en senere
                    kalte "stølshotell". Det skjedde også på Grøvstølen. Ola
                    Grøv (1882-1943) begynte tidlig å ta i mot turister i
                    stølshuset.
                  </p>
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <img src={olabu} alt='olabu' />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <img src={midtgard} alt='midtgard' />
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <h2 className='h2'>Grøv Seter i dag</h2>
                  <p className='mb-8'>
                    En ny Ola Grøv (1944) overtok tidlig på 70 tallet, men i
                    motsetning til sine forfedre som bygget, begynte han å rive
                    ned. Hus fra 20 tallet var vanskelig å vedlikeholde, og
                    tiden hadde gått fra lignende steder. Det ble imidlertid
                    tatt vare på noe av bygningsmassen, og Grøv Seter fremstår i
                    dag som en hytteutleiebedrift. Hyttene er av vanlig god
                    standard, og det viser seg også at utleiehytter er mer
                    hensiktsmessig enn fjellstuedrift. Dagens vertskap er Bjørg
                    og Ola Grøv. . Neste generasjon er også representert, og
                    heter selvfølgelig Ola men Martin er også tilføyet.
                  </p>
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

export default About;
