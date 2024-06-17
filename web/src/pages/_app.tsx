import { AppLayout } from "@/components";
import { useAppSelector } from "@/hooks/state";
import { store } from "@/redux/store";
import { updateTheme } from "@/redux/systemSlice";
import { GlobalStyle, darkTheme, lightTheme } from "@/styles/global";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

store.dispatch(updateTheme());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <ThemedApp Component={Component} pageProps={pageProps} />
      </AppLayout>
    </Provider>
  );
}

function ThemedApp({ Component, pageProps }: AppProps) {
  const currentTheme = useAppSelector((state) => state.system.theme);

  const theme = {
    dark: {
      color: darkTheme,
    },
    light: {
      color: lightTheme,
    },
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
