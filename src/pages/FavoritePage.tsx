import Favorite from "components/Favorite/Favorite";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import MainLayout from "layouts/MainLayout/MainLayout";

export const FavoritePage = () => {
  return (
    <MainLayout
      Header={<Header />}
      MainContent={<Favorite />}
      Footer={<Footer />}
    ></MainLayout>
  );
};
