import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { toggleTheme } from "@/redux/systemSlice";
import Head from "next/head";
import { FaMoon } from "react-icons/fa";

export default function Home() {
  const systemTheme = useAppSelector((state) => state.system.theme);

  const dispatch = useAppDispatch();
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
      <main>
        <FaMoon
          color="red"
          size={50}
          onClick={() => dispatch(toggleTheme())}
          style={{ marginTop: 100, marginLeft: 50, cursor: "pointer" }}
        />
      </main>
    </>
  );
}
