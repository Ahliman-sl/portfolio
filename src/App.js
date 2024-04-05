import Header from "./Header/Header.js";
import MainContent from "./Main/MainContent.js";
import FooterContent from "./Footer/Footer.js";

export default function App() {
  return (
    <div className="App w-full h-full bg-[#000000] font-roboto" id="home">
      <Header />
      <MainContent />
      <FooterContent />
    </div>
  );
}
