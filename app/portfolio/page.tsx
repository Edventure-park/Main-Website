import { Suspense } from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio/PortfolioPage'

function Page() {
  return (
    <>
      <Navbar currentPage='portfolio' />
      <Suspense fallback={<div className="py-20 text-center">Loading portfolio...</div>}>
        <Portfolio />
      </Suspense>
      <Footer />
    </>
  )
}

export default Page
