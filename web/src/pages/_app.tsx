import { store } from "@/redux/store";
import { updateTheme } from "@/redux/systemSlice";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import ThemedApp from "../components/configs/ThemedApp";
import { loadUser } from "@/redux/authSlice";

store.dispatch(updateTheme());
store.dispatch(loadUser());

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <ThemedApp Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}
