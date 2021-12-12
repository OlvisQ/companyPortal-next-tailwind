import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  activeLinkClass?: string;
  linkText?: string;
  href: string;
};

const ActiveLink: React.FC<Props> = ({
  activeLinkClass,
  linkText,
  href,
}: Props) => {
  const router = useRouter();

  if (href === router.pathname) {
    return (
      <Link href={href}>
        <li className={activeLinkClass}>
          <a className="text-titles cursor-pointer">{linkText}</a>
        </li>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <li className="mr-12 py-6">
          <a className="text-secondary cursor-pointer">{linkText}</a>
        </li>
      </Link>
    );
  }
};

export default ActiveLink;
