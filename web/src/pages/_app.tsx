import { AppLayout, LoadingScreen } from "@/components";
import { ArticleModalProvider } from "@/context/useArticlesModal";
import { LayoutRefProvider } from "@/context/useLayoutRef";
import { MobileSideNavProvider } from "@/context/useMobileNav";
import { MobileSearchProvider } from "@/context/useMobileSearch";
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
  return (
    <Provider store={store}>
      <LayoutRefProvider>
        <ThemedApp
          Component={Component}
          pageProps={pageProps}
          router={router}
        />
      </LayoutRefProvider>
    </Provider>
  );
}

function ThemedApp({ Component, pageProps, router }: AppProps) {
  const systemState = useAppSelector((state) => state.system);
  const currentTheme: string = systemState.theme;
  const isReturningUser = systemState.isReturningUser;
  const [isLoading, setIsLoading] = useState(false);

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
      <ToasterProvider>
        <MobileSideNavProvider>
          <ArticleModalProvider>
            <AppLayout isAppLoading={isLoading}>
              <GlobalStyle />
              <MobileSearchProvider>
                {isLoading ? <LoadingScreen /> : <Component {...pageProps} />}
              </MobileSearchProvider>
            </AppLayout>
          </ArticleModalProvider>
        </MobileSideNavProvider>
      </ToasterProvider>
    </ThemeProvider>
  );
}
