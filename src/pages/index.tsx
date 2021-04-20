// TRÊS FORMAS DE PUXAR DADOS DE UM JSON
// -------------------------------------

/* // SPA
import { useEffect } from "react";

export default function Home() {
  //deixar o array vazio faz a função do useEffect ser executada uma única vez
  useEffect(() => {
    fetch("http://localhost:3333/episodes")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <h1>Index</h1>
    </>
  );
} */
//-------------------------------------------------------------

/* // SSR
export default function Home(props) {
  console.log(props.episodes);
  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  );
}

//o next executa essa função antes de exibir o conteúdo da página
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
  };
} */
//------------------------------------------------------------

// SSG (igual ao modo SSR, só mudou o nome da async function)
export default function Home(props) {
  console.log(props.episodes);
  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  );
}

//o next executa essa função antes de exibir o conteúdo da página
export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    //revalidate: de quanto em quanto tempo (segundos) os dados irão atualizar
    revalidate: 60 * 60 * 8,
  };
}
