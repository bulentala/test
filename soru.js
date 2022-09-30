Herkese Merhaba...
Bir konu hakkında fikire ihtiyacım var.

Rick And Morty api üzerinde bir deneme yapıyorum
bütün karakterleri veren bir api var.
https://rickandmortyapi.com/api/character
ve her karakterin bilgilerine ulaşabildiğimiz farklı bir api var.
https://rickandmortyapi.com/api/character/1

Next.js kullanarak pages/rickandmorty/index.js içerisinde getStaticProps
kullanarak bütün karakter bilgilerini çekiyorum

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  return {
    props: {
      characters,
    },
  };
}

yine aynı sayfada isimleri slugify() yardımıyla sluglara dönüştürüp link olarak 
oluşturuyorum
 <Link
href={`/rickandmorty/${slugify(character.name, { lower: true })}`}
>
<a>{character.name}</a>
</Link> 

pages/rickandmorty/[slug].js içerisinde getStaticPaths ile pathleri yine slug olarak oluşturuyorum

fakat getStaticProps içinde kullanacağım karakter id sini burada yakalayamıyorum
https://rickandmortyapi.com/api/character/${id ??????????}

bunu yapmanın bir yolu var mı ? ya da fikri olan 

