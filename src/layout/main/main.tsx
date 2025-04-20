import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FC, ReactNode } from "react"

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout