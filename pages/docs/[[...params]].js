import Layout from "@/components/Layout";
import { useRouter } from "next/router";
const DocsPage = () => {
  const router = useRouter();
  const { params } = router.query;
  return (
    <Layout>
      <h1>pages/docs/[...params].js</h1>
      <hr />
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <pre>{JSON.stringify(router, null, 2)}</pre>
    </Layout>
  );
};

export default DocsPage;
