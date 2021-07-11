import Header from "@/components/Header"
import Footer from "@/components/Footer"

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
