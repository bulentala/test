import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const pathname = router.pathname;
  const asPath = router.asPath;

  return (
    <Layout>
      <h1>pages/product/[ProductId].js</h1>
      <hr />
      <div>productId: {productId}</div>
      <div>pathname: {pathname}</div>
      <div>asPath: {asPath}</div>
      In the router:
      <pre>{JSON.stringify(router, null, 2)}</pre>
    </Layout>
  );
};

export default ProductId;
