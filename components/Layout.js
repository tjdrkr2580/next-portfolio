import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div>{children}</div>
      <Footer className="" />
    </div>
  );
}
