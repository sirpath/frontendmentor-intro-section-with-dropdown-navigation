import Image from 'next/image'

const Content = () => (
  <div className="flex flex-col items-center gap-4 md:max-w-xl md:gap-0 md:pr-24 md:pt-20 md:text-left">
    <div className="flex w-fit justify-center text-center md:max-w-xl md:pr-2 md:text-left">
      <h1 className="pt-8 text-4xl font-bold text-thirdary md:text-7xl">Make remote work</h1>
    </div>
    <p className="px-5 pb-5 text-center text-secondary md:px-0 md:pb-14 md:pt-10 md:text-left">
      Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
    </p>
    <div className="md:flex md:w-full md:items-start">
      <button className="rounded-xl border-2 border-thirdary bg-thirdary px-5 py-2 font-semibold text-primary duration-200 hover:bg-primary hover:text-thirdary" type="button">Learn more</button>
    </div>
    <div className="m-10 flex gap-5 md:m-0 md:mt-32 md:w-full md:justify-between">
      <div>
        <Image height={20} width={114} alt="databizIcon" src="./images/client-databiz.svg" />
      </div>
      <div>
        <Image height={36} width={73} alt="audiophileIcon" src="./images/client-audiophile.svg" />
      </div>
      <div>
        <Image height={20} width={90} alt="meetIcon" src="./images/client-meet.svg" />
      </div>
      <div>
        <Image height={24} width={83} alt="makerIcon" src="./images/client-maker.svg" />
      </div>
    </div>
  </div>
)
export default Content
