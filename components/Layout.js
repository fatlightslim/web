import Footer from "../components/Footer"
import BlogBanner from "../components/BlogBanner"
import Contact from "../components/Contact"
import Optimal from "../components/Optimal"
import Nav from "../components/Nav"
import Cart from "../components/stripe/Cart"
import Payment from "../components/stripe/Payment"

export default function Layout({ children, ...props }) {
  const { form } = props

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {!form.key && <Nav {...props} />}
        {form.key ? (
          <Payment {...props} />
        ) : (
          <>
            {children}
            <Cart {...props} />
            <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-2">
              <BlogBanner />
              <Optimal />
              <Contact />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
