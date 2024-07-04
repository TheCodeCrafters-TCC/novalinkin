import { AppLayout, LoadingScreen } from "@/components";
import { ArticleModalProvider } from "@/context/useArticlesModal";
import { CCModalProvider } from "@/context/useCreateCommunity";
import { MobileSideNavProvider } from "@/context/useMobileNav";
import { MobileSearchProvider } from "@/context/useMobileSearch";
import { EditProfileProvider } from "@/context/useProfileEdit";
import { SearchModalProvider } from "@/context/useSearchModal";
import { useAppSelector } from "@/hooks/state";
import { ToasterProvider } from "@/hooks/useToast";
import { ToastContainer } from "@/lib";
import { store } from "@/redux/store";
import { darkTheme, lightTheme, GlobalStyle } from "@/styles/global";
import { AppProps } from "next/app";
import { useState, useEffect, startTransition } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const ThemedApp = ({ Component, pageProps, router }: AppProps) => {
  const systemState = useAppSelector((state) => state.system);
  const currentTheme: string = systemState.theme;
  const isReturningUser = systemState.isReturningUser;
  const [isLoading, setIsLoading] = useState(false);
  const user = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isReturningUser === true) {
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

  useEffect(() => {
    if (user.userLoaded === false) {
      router.push("/auth/login");
    }
  }, [router]);

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
          <SearchModalProvider>
            <ArticleModalProvider>
              <AppLayout isAppLoading={isLoading}>
                <GlobalStyle />
                <MobileSearchProvider>
                  <ToastContainer />
                  <CCModalProvider>
                    <EditProfileProvider>
                      {isLoading ? (
                        <LoadingScreen />
                      ) : (
                        <Component {...pageProps} />
                      )}
                    </EditProfileProvider>
                  </CCModalProvider>
                </MobileSearchProvider>
              </AppLayout>
            </ArticleModalProvider>
          </SearchModalProvider>
        </MobileSideNavProvider>
      </ToasterProvider>
    </ThemeProvider>
  );
};

export default ThemedApp;
