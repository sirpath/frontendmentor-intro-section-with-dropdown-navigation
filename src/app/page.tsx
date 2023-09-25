import BackgroundMain from '@/components/BackgroundMain'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

const Home = () => (

  <main className="flex min-h-screen w-full flex-col items-center justify-center bg-primary text-lg md:max-w-7xl ">
    <NavBar />
    <section className="w-full md:flex md:max-w-7xl md:flex-row-reverse md:items-center md:gap-10 md:p-10 md:text-left">
      <BackgroundMain />
      <Content />
    </section>
    <Footer />
  </main>
)

export default Home
