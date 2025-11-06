import { Suspense } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blogs from "@/components/blogs/Landing";

function BlogsPage() {
  return (
    <div>
      <Navbar currentPage="Blogs" />
      <Suspense fallback={<div>Loading blogs...</div>}>
        <Blogs />
      </Suspense>
      <Footer />
    </div>
  );
}

export default BlogsPage;