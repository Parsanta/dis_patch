import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "../components/Banner";
import { Choose } from "../components/Choose";
import { HomeAbout } from "../components/HomeAbout";
import { Hometrack } from "../components/track";
import { HomeReview } from "../components/Review";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Choose/>
      <HomeAbout/>
      <Hometrack/>
      <HomeReview/>
    </>
  );
};
