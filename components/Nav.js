import Link from "next/link";
const Nav = () => {
  return (
    <div>
      <Link href="/">
        <a>--Home-</a>
      </Link>
      <Link href="/about">
        <a>-About-</a>
      </Link>
      <Link href="/profile">
        <a>-Profile-</a>
      </Link>
      <Link href="/blog">
        <a>-Blog-</a>
      </Link>
      <Link href="/product">
        <a>-Product-</a>
      </Link>
      <Link href="/docs">
        <a>-Docs-</a>
      </Link>
      <Link href="/rm">
        <a>-RM-</a>
      </Link>
    </div>
  );
};

export default Nav;
