import {
  DynamicBar,
  Feed,
  MobileNavBar,
  NoSSRBar,
  SideBar,
} from "@/components";
import { poppins } from "@/styles/global";
import { MainWrapper } from "@/styles/pages/styled";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Feed | Connectify</title>
        <meta
          name="description"
          content="Connectify: Your Centralized Platform for Global Developer Collaboration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSSRBar hasUserIcon hasSearchIcon hasModeIcon />
      <main className={poppins.className}>
        <Feed />
      </main>
    </>
  );
}
