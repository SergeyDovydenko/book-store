import BookDetails from "components/BookDetails/BookDetails";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import MainLayout from "layouts/MainLayout/MainLayout";

export const BookPage = () => {
  return (
    <MainLayout
      Header={<Header />}
      MainContent={<BookDetails />}
      Footer={<Footer />}
    ></MainLayout>
  );
};
