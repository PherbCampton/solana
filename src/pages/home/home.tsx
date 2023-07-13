import { Fragment } from "react";
import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import CompanyIntegrations from "../../components/CompanyIntegrations/CompanyIntegrations";
import Statistics from "../../components/Statistics/Statistics";

export const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Nav />
      <Hero />
      <CompanyIntegrations />
      <Statistics />
    </Fragment>
  );
};
