import { AppLayout, LoadingScreen } from "@/components";
import { useAppSelector } from "@/hooks/state";
import { ToasterProvider } from "@/hooks/useToast";
import { store } from "@/redux/store";
import { updateTheme } from "@/redux/systemSlice";
import { GlobalStyle, darkTheme, lightTheme } from "@/styles/global";
import type { AppProps } from "next/app";
import { startTransition, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

store.dispatch(updateTheme());

export default function App({ Component, pageProps, router }: AppProps) {
  const theme: any = {
    dark: {
      colors: darkTheme,
    },
    light: {
      colors: lightTheme,
    },
  };
  return (
    <Provider store={store}>
      <ThemedApp Component={Component} pageProps={pageProps} router={router} />
      {/* <ThemeProvider theme={theme["light"]}>
        <AppLayout isAppLoading={false}>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider> */}
    </Provider>
  );
}

function ThemedApp({ Component, pageProps, router }: AppProps) {
  const systemState = useAppSelector((state) => state.system);
  const currentTheme: string = systemState.theme;
  const isReturningUser = systemState.isReturningUser;
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (isReturningUser) {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 5000);
  //     // Handle articles dispatch here.
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [isReturningUser]);

  useEffect(() => {
    if (isReturningUser) {
      startTransition(() => {
        setIsLoading(true);
      });
      const timer = setTimeout(() => {
        startTransition(() => {
          setIsLoading(false);
        });
      }, 5000);
      // Handle articles dispatch here.
      return () => clearTimeout(timer);
    } else {
      startTransition(() => {
        setIsLoading(false);
      });
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
    <ThemeProvider theme={theme[currentTheme]}>
      <AppLayout isAppLoading={isLoading}>
        <GlobalStyle />
        <ToasterProvider>
          {isLoading ? <LoadingScreen /> : <Component {...pageProps} />}
        </ToasterProvider>
      </AppLayout>
    </ThemeProvider>
  );
}
