import Header from "../../SharedComponents/Header/Header";
import SideNavbar from "../../SharedComponents/side-navbar/SideNavbar";
import BannerCarousel from "../../components/homePage/bannerCarousel/BannerCarousel";
import CarouselCard from "../../components/homePage/carouselCard/CarouselCard";
import "./homePage.scss";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  homeSections,
  responsiveHorizontalCard,
  responsiveVerticalCard,
} from "./constants";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header currentTab="home" />
      <div>
        <SideNavbar activeTab="home" />
        <BannerCarousel />
        {homeSections.map((section, index) => (
          <div className="home-section">
            <h3>{section.label}</h3>
            <Carousel
              responsive={
                index !== 2 && index !== 4
                  ? responsiveHorizontalCard
                  : responsiveVerticalCard
              }
              data-testid="section-carousel"
            >
              {section.data.map((item) => (
                <CarouselCard
                  item={item}
                  cardType={
                    index === 2 || index === 4 ? "vertical" : "horizontal"
                  }
                />
              ))}
            </Carousel>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default HomePage;
