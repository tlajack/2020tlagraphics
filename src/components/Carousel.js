import React from "react"

// import {
//   FlickingEvent,
//   SelectEvent,
//   ChangeEvent,
//   NeedPanelEvent,
// } from "@egjs/flicking"
import Flicking from "@egjs/react-flicking"
import { AutoPlay } from "@egjs/flicking-plugins"
import styled from "styled-components"

import tesla from "../images/onTree-DSC_7345.jpg"
import reception from "../images/homepage/reception-01.jpg"
import merch from "../images/homepage/CanadaGoose-01-1200x800.jpg"

const StyledPanel = styled.div`
  height: 70vw;
  width: 100vw;
  background-size: cover;
  background-position: center;

  ${props => {
    return `
        background-image:url(${props.bg});
      background-color:${props.color};
      `
  }}
`
const plugins = [new AutoPlay(5000, "NEXT")]

const Carousel = () => (
  <Flicking
    tag="div"
    viewportTag="div"
    cameraTag="div"
    // onNeedPanel={(e: NeedPanelEvent) => {}}
    // onMoveStart={(e: FlickingEvent) => {}}
    // onMove={(e: FlickingEvent) => {}}
    // onMoveEnd={(e: FlickingEvent) => {}}
    // onHoldStart={(e: FlickingEvent) => {}}
    // onHoldEnd={(e: FlickingEvent) => {}}
    // onRestore={(e: FlickingEvent) => {}}
    // onSelect={(e: SelectEvent) => {}}
    // onChange={(e: ChangeEvent) => {}}
    classPrefix="eg-flick"
    deceleration={0.075}
    horizontal={true}
    circular={true}
    // infinite={true}
    infiniteThreshold={10}
    lastIndex={Infinity}
    threshold={40}
    duration={500}
    defaultIndex={0}
    inputType={["touch", "mouse"]}
    thresholdAngle={45}
    // bounce={10}
    autoResize={false}
    adaptive={false}
    zIndex={500}
    bound={false}
    overflow={false}
    hanger={"50%"}
    anchor={"50%"}
    gap={0}
    moveType={{ type: "snap", count: 2 }}
    collectStatistics={true}
    plugins={plugins}
  >
    <StyledPanel color="red" bg={tesla}></StyledPanel>
    <StyledPanel color="yellow" bg={reception}></StyledPanel>
    <StyledPanel color="green" bg={merch}></StyledPanel>
  </Flicking>
)

export default Carousel
