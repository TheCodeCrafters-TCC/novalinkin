import { AppLayout, LoadingScreen } from "@/components";
import { ArticleModalProvider } from "@/context/useArticlesModal";
import { CCModalProvider } from "@/context/useCreateCommunity";
import { C_RequestModalProvider } from "@/context/useCRequest";
import { MobileSideNavProvider } from "@/context/useMobileNav";
import { MobileSearchProvider } from "@/context/useMobileSearch";
import { EditProfileProvider } from "@/context/useProfileEdit";
import { SearchModalProvider } from "@/context/useSearchModal";
import { ProfileUpdateModalProvider } from "@/context/useUpdateProfileModal";
import { useAppSelector } from "@/hooks/state";
import { ToasterProvider } from "@/hooks/useToast";
import { ToastContainer } from "@/lib";
import { store } from "@/redux/store";
import { getCommunities } from "@/redux/thunks/community";
import { getAllUsers } from "@/redux/thunks/user";
import { darkTheme, lightTheme, GlobalStyle } from "@/styles/global";
import { AppProps } from "next/app";
import { useState, useEffect, startTransition } from "react";
import { ThemeProvider } from "styled-components";

const ThemedApp = ({ Component, pageProps, router }: AppProps) => {
  const systemState = useAppSelector((state) => state.system);
  const userState = useAppSelector((state) => state.user);
  const currentTheme: string = systemState.theme;
  const isReturningUser = systemState.isReturningUser;
  const isfetching = userState.fetching_status === "pending";
  const user = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Make sure all data are available before returning
    if (isReturningUser === true) {
      if (isfetching) {
        setIsLoading(true);
        //  Dispatch stores here
        // store.dispatch(getAllUsers());
        // store.dispatch(getCommunities)
      } else setIsLoading(false);
    } else {
      //  nahh
    }
  }, [isReturningUser]);

  useEffect(() => {
    if (user.userLoaded === false) {
      router.replace("/auth/login");
    }
  }, [user.userLoaded]);

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
                    <ProfileUpdateModalProvider>
                      <C_RequestModalProvider>
                        <EditProfileProvider>
                          {isLoading ? (
                            <LoadingScreen />
                          ) : (
                            <Component {...pageProps} />
                          )}
                        </EditProfileProvider>
                      </C_RequestModalProvider>
                    </ProfileUpdateModalProvider>
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
