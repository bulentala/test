import Link from "next/link";
import Layout from "@/components/Layout";

const Second = () => {
  return (
    <Layout>
      <h1>pages/blog/second.js</h1>
      <hr />
      <Link href="/blog/first">
        <a>--First--</a>
      </Link>
      <Link href="/blog/second">
        <a>--Second--</a>
      </Link>
    </Layout>
  );
};

export default Second;
