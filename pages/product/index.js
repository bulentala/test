import Link from "next/link";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <h1>pages/product/index.js</h1>
      <hr />
      <Link href="pages/product/[ProductId]">
        <a>Product-1</a>
      </Link>
      <div>Product-2</div>
      <div>Product-3</div>
      <div>
        <Link href="/product/sweater">
          <a>Sweater</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
