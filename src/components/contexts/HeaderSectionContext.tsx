"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type HeaderSectionContextType = {
  setSection: (section: ReactNode | null) => void;
  section: ReactNode | null;
};

const HeaderSectionContext = createContext<
  HeaderSectionContextType | undefined
>(undefined);

export function HeaderSectionProvider({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<ReactNode | null>(null);

  return (
    <HeaderSectionContext.Provider value={{ section, setSection }}>
      {children}
    </HeaderSectionContext.Provider>
  );
}

export function useHeaderSection() {
  const context = useContext(HeaderSectionContext);
  if (!context) {
    throw new Error(
      "useHeaderSection must be used within a HeaderSectionProvider"
    );
  }
  return context;
}
