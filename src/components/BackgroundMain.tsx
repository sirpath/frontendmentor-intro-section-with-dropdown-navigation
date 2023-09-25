import Image from 'next/image'

const BackgroundMain = () => (
  <div>
    <div>
      <Image height={568} width={750} className="bg-primary md:hidden" alt="bannerImg" src="./images/image-hero-mobile.png" />
    </div>
    <div>
      <Image height={715} width={528} className="hidden bg-primary md:block" alt="bannerImg" src="./images/image-hero-desktop.png" />
    </div>
  </div>

)
export default BackgroundMain
