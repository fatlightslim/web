import Footer from "../components/Footer"
import BlogBanner from "../components/BlogBanner"
import Contact from "../components/Contact"
import Optimal from "../components/Optimal"
import Nav from "../components/Nav"
import Cart from "../components/stripe/Cart"

export default function Layout({ children, ...props }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Nav {...props} />
        {children}
        <Cart {...props} />
        <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-2">
          <BlogBanner />
          <Optimal />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
