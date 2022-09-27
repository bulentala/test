import Layout from "@/components/Layout";
import { useRouter } from "next/router";
const Index = ({ characters }) => {
  const { next, pages, prev, count } = characters.info;
  const router = useRouter();
  const pathname = router.pathname;
  const characterId = router.query.charactertId;

  return (
    <Layout>
      <pre>{JSON.stringify(characterId, null, 2)}</pre>
      <pre>{JSON.stringify(next, null, 2)}</pre>
      <pre>{JSON.stringify(pages, null, 2)}</pre>
      <pre>{JSON.stringify(prev, null, 2)}</pre>
      <pre>{JSON.stringify(count, null, 2)}</pre>
      <pre>{JSON.stringify(pathname, null, 2)}</pre>
      <pre>{JSON.stringify(router, null, 2)}</pre>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  return {
    props: {
      characters,
    },
  };
}

export default Index;
