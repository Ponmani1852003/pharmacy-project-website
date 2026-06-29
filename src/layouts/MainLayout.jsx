import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import TagsBar from "../components/TagsBar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ScrollTopButton from "../components/ScrollTopButton.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <TagsBar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <ScrollTopButton />
    </div>
  );
}
