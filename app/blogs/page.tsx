import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CompleteBlogs from '@/components/blogs/CompleteBlogs'

function Blogs() {
  return (
    <>
      <Navbar currentPage='blogs' />
      <CompleteBlogs />
      <Footer />
    </>
  )
}

export default Blogs
