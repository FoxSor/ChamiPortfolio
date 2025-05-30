import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 320px;
  background: #f4f3f1;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: #f3eded 0% 0% no-repeat padding-box;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 60px;
  font-family: "Neue Haas Grotesk Text Pro";
  color: #363636;
  margin: 0;
  text-align: left;
`;

export const Subtitle = styled.p`
  font: normal normal normal 20px/27px Victor Mono;
  text-align: left;
  color: #363636;
  margin: 0 0 2rem 0;
`;

export const SectionToggle = styled.div`
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font: normal normal bold 14px/27px Victor Mono;
  letter-spacing: 0px;
  color: #000000;
  display: flex;
  justify-content: space-between;
`;

export const WorkItem = styled.div`
  margin-bottom: 0.5rem;
  font: normal normal normal 14px/20px Victor Mono;
  letter-spacing: 0.7px;
  text-align: left;
  color: #000000;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 2rem;
  font-size: 1rem;
  background: #eae8e4;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  font: normal normal bold 14px/27px Victor Mono;
  color: #000000;
  &:hover {
    background: #dddcd9;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.secondary ? "#B9B9B9" : "#707070")};
  margin: 14px 0;
`;
