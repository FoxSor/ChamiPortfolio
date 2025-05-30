import { BackgroundWrapper, Wrapper, BackgroundImage } from "./styles";
import React, { useState } from "react";
import SidebarMenu from "./Components/sideBar/sideBar";
import Footer from "./Components/footer/footer";

const images = [
  "/test.webp",
  "/test2.jpg",
  "/test3.jpg",
  "test4.webp",
  "/test.webp",
];

export default function App() {
  return (
    <>
      <BackgroundWrapper>
        {images.map((src, index) => (
          <BackgroundImage
            key={index}
            style={{ backgroundImage: `url(${src})` }}
            delay={index * 3}
          />
        ))}
      </BackgroundWrapper>

      <Wrapper>
        <SidebarMenu />
        <Footer />
      </Wrapper>
    </>
  );
}
