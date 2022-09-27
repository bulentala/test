import Router, { useRouter } from "next/router";
import Layout from "@/components/Layout";

const ReviewPage = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <Layout>
      <h1>pages/product/[productId]/review/[reviewId.js]</h1>
      <hr />
    </Layout>
  );
};

export default ReviewPage;
