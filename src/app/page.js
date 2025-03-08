'use client';
import { useState } from "react";
import ReceberDepoimento from "./componentes/ReceberDepoimentos/ReceberDepoimentos";
import ListaDepoimentos from "./componentes/ListarDepoimentos/ListarDepoimentos"
import estilo from "./page.module.css";

export default function Home() {
  const [atualizar, setAtualizar] = useState(false);

  const atualizarLista = () => {
    setAtualizar(!atualizar);
  };

  return (
    <section className={estilo.container}>
      <ReceberDepoimento atualizarLista={atualizarLista} />
      <ListaDepoimentos key={atualizar} />
    </section>
  );
}

