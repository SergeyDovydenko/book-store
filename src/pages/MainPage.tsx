import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import MainContent from "components/MainContent/MainContent";
import MainLayout from "layouts/MainLayout/MainLayout";

export const MainPage = () => {
  return (
    <MainLayout
      Header={<Header />}
      MainContent={<MainContent />}
      Footer={<Footer />}
    ></MainLayout>
  );
};
