import React, { useState } from "react";
import {
  SidebarContainer,
  Title,
  Subtitle,
  SectionToggle,
  WorkItem,
  Button,
  Line,
} from "./sideBarStyles";

const SidebarMenu = () => {
  const [showWork, setShowWork] = useState(true);
  const [showPlay, setShowPlay] = useState(false);

  return (
    <SidebarContainer>
      <Title>Lila Chami</Title>
      <Subtitle>Diseñadora gráfica</Subtitle>

      <SectionToggle onClick={() => setShowWork(!showWork)}>
        WORK <span>{showWork ? "▾" : "▸"}</span>
      </SectionToggle>
      <Line />
      {showWork && (
        <>
          <WorkItem>
            <strong>Zing</strong> <br />
            Label Design — 2024
          </WorkItem>
          <Line secondary />
          <WorkItem>
            <strong>Sando</strong> <br />
            Brand Identity — 2024
          </WorkItem>
          <Line secondary />
          <WorkItem>
            <strong>New York Bagels</strong> <br />
            Brand Identity — 2024
          </WorkItem>
          <Line secondary />
        </>
      )}

      <SectionToggle onClick={() => setShowPlay(!showPlay)}>
        PLAY <span>{showPlay ? "▾" : "▸"}</span>
      </SectionToggle>
      <Line />
      {showPlay && (
        <>
          <WorkItem>
            <strong>Zing</strong> <br />
            Label Design — 2024
          </WorkItem>
          <Line secondary />
          <WorkItem>
            <strong>Zing</strong> <br />
            Label Design — 2024
          </WorkItem>
          <Line secondary />
        </>
      )}

      <Button>Sobre mí / Contacto</Button>
    </SidebarContainer>
  );
};

export default SidebarMenu;
