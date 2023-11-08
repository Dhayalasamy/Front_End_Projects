import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header/>
      <Navbar />
      {isPageLoading ? (<Loading /> ) : 
      (
        <section className='align-element py-20'>
          <Outlet /> {/* all the children of homelayout will be redered*/}
        </section>
      )}
    </>
  );
}

export default HomeLayout;
