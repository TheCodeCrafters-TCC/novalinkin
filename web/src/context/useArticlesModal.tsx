import { ShareArticles } from "@/components";
import { createContext, useContext, useState } from "react";

interface ArticleModalProviderprops {
  children: React.ReactNode;
}

type ArticleContextProps = {
  onClose: () => void;
  onOpen: () => void;
};

const ArticleModalContext = createContext<ArticleContextProps | undefined>(
  undefined
);

export const ArticleModalProvider: React.FC<ArticleModalProviderprops> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }

  return (
    <ArticleModalContext.Provider value={{ onClose, onOpen }}>
      {children}
      {isOpen && <ShareArticles />}
    </ArticleModalContext.Provider>
  );
};

export const useArticleModal = () => {
  const context = useContext(ArticleModalContext);
  if (context === undefined) {
    throw new Error("ArticleModal can't be called outside its provider");
  }
  return context;
};
