import HomePageHeader from "./HomePageHeader";
import HomePageMain from "./HomePageMain";
import "./home-page.css";

function HomePage() {
  return (
    <div className="home-page-wrap">
      <HomePageHeader />
      <HomePageMain />
    </div>
  );
}

export default HomePage;
