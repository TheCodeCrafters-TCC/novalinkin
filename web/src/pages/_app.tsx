import { AppLayout, LoadingScreen } from "@/components";
import { useAppSelector } from "@/hooks/state";
import { ToasterProvider } from "@/hooks/useToast";
import { store } from "@/redux/store";
import { updateTheme } from "@/redux/systemSlice";
import { GlobalStyle, darkTheme, lightTheme } from "@/styles/global";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
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
  const systemState = useAppSelector((state) => state.system);
  const currentTheme: string = systemState.theme;
  const isReturningUser = systemState.isReturningUser;
  const themed = currentTheme;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isReturningUser) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      // Handle articles dispatch here.
    } else {
      setIsLoading(false);
    }
  }, [isReturningUser]);

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
