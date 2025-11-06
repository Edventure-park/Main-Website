import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blogs from "@/components/blogs/Landing";

function BlogsPage() {
  return (
    <div>
      <Navbar currentPage="Blogs" />
      <Blogs />
      <Footer />
    </div>
  );
}

export default BlogsPage;