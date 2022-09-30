import Link from "next/link";
import Layout from "@/components/Layout";
import slugify from "slugify";

const Index = ({ characters }) => {
  return (
    <Layout>
      {characters.results.map((character) => {
        return (
          <div key={character.id}>
            <Link
              href={`/rickandmorty/${slugify(character.name, { lower: true })}`}
            >
              <a>{character.name}</a>
            </Link>
          </div>
        );
      })}
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
