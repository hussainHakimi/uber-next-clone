import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItem>Start</ActionItem>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex gap-5
`;

const Map = tw.div``;
const ActionItem = tw.div``;
