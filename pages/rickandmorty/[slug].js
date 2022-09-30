import Layout from "@/components/Layout";
import slugify from "slugify";

const CharacterDetails = ({ characters }) => {
  return (
    <Layout>
      <pre></pre>
    </Layout>
  );
};
export async function getStaticPaths() {
  //   const res = await fetch("https://rickandmortyapi.com/api/character");
  //   const characters = await res.json();
  const paths = [];
  //: [{ params: { id: "1" } }, { params: { id: "2" } }]
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  console.log(context.params.slug);
  const res = await fetch(`https://rickandmortyapi.com/api/character/1`);
  const characters = await res.json();
  return {
    props: {
      characters,
    },
  };
}
export default CharacterDetails;
