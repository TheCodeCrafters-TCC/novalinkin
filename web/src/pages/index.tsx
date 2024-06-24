import { Feed, MobileNavBar } from "@/components";
import { poppins } from "@/styles/global";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Feed | NovaLinkin</title>
        <meta
          name="description"
          content="NovaLinkin: Your Centralized Platform for Global Developer Collaboration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileNavBar hasUserIcon hasSearchIcon hasModeIcon />
      <main className={poppins.className}>
        <Feed />
      </main>
    </>
  );
}
