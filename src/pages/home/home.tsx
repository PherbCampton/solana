import { Fragment } from "react";
import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";

export const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Hero />
    </Fragment>
  );
};
