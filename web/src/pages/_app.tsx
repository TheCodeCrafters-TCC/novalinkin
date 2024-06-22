import { AppLayout, LoadingScreen } from "@/components";
import { useAppSelector } from "@/hooks/state";
import { ToasterProvider } from "@/hooks/useToast";
import { store } from "@/redux/store";
import { updateTheme } from "@/redux/systemSlice";
import { GlobalStyle, darkTheme, lightTheme } from "@/styles/global";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

store.dispatch(updateTheme());

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <ThemedApp Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}

function ThemedApp({ Component, pageProps, router }: AppProps) {
  const currentTheme: string = useAppSelector((state) => state.system.theme);
  const themed = currentTheme;
  const [isLoading, setIsLoading] = useState(false);

  const theme: any = {
    dark: {
      colors: darkTheme,
    },
    light: {
      colors: lightTheme,
    },
  };

  return (
    <ThemeProvider theme={theme[themed]}>
      <AppLayout isAppLoading={isLoading}>
        <GlobalStyle />
        <ToasterProvider>
          {isLoading ? <LoadingScreen /> : <Component {...pageProps} />}
        </ToasterProvider>
      </AppLayout>
    </ThemeProvider>
  );
}
