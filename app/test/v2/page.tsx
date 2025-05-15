import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/portfolio/P2'

function Page() {
  return (
    <>
      <Navbar currentPage='portfolio' />
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default Page
