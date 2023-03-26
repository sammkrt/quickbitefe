import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Home.css";
function Home() {
  return (
    <main className="home-main">
      <Header />
      <section className="home-section">
        <h1 className="home-h1">Restaurants</h1>
      </section>
      <Footer />
    </main>
  );
}
export default Home;
