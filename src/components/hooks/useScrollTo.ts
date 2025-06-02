"use client";

import { useRouter } from "next/router";
import { useCallback } from "react";

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
  timeout?: number;
}
export const useScrollTo = () => {
  const router = useRouter();

  const scrollTo = useCallback(
    async (elementId: string, options: ScrollOptions = {}) => {
      const { offset = 80, behavior = "smooth", timeout = 100 } = options;
      const currentPath = window.location.pathname;
      const targetPath = "/";

      if (currentPath !== targetPath) {
        router.push(targetPath); // Remplace navigate() par router.push()

        // attend que la navigation soit terminée
        await new Promise((resolve) => setTimeout(resolve, timeout));
      }

      const element = document.getElementById(elementId);
      if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
      }

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior,
      });

      window.history.pushState(null, "", `#${elementId}`);
      element.setAttribute("tabindex", "-1");
      element.focus({ preventScroll: true });

      const handleBlur = () => {
        element.removeAttribute("tabindex");
        element.removeEventListener("blur", handleBlur);
      };
      element.addEventListener("blur", handleBlur);
    },
    [router]
  );

  return scrollTo;
};
