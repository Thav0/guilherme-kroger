import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

// ReactNode quando podemos receber varios componentes

interface ActiveLinkProps extends LinkProps {
  children: ReactElement; // Quando recebemento apenas um componente no children
  shouldMatchExactHref?: boolean;
  defaultColor?: string;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  defaultColor = "var(--chakra-colors-red-800)",
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest} style={{ textDecoration: "none" }}>
      {cloneElement(children, {
        color: isActive ? "white" : defaultColor,
        className: isActive ? "active" : "header-link",
        fontSize: "1.1rem",
      })}
    </Link>
  );
}
