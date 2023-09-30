import Image from 'next/image'

const BackgroundMain = () => (
  <div>
    <div className="bg-primary md:hidden">
      <Image height={568} width={750} alt="bannerImg" src="./images/image-hero-mobile.png" />
    </div>
    <div className="hidden bg-primary md:block">
      <Image height={715} width={528} alt="bannerImg" src="./images/image-hero-desktop.png" />
    </div>
  </div>

)
export default BackgroundMain
