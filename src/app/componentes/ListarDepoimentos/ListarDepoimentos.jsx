'use client';
import { useEffect, useState } from "react";
import estilo from "./ListarDepoimentos.module.css";

export default function ListaDepoimentos() {
  const [depoimentos, setDepoimentos] = useState([]);

  useEffect(() => {
    buscarDepoimentos();
  }, []);

  const buscarDepoimentos = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/depoimentos`);
    const data = await res.json();
    setDepoimentos(data);
  };

  return (
    <div className={estilo.listaContainer}>
      <h2>Depoimentos dos Clientes</h2>
      <div className={estilo.depoimentos}>
        {depoimentos.map((depo) => (
          <div key={depo.id} className={estilo.depoimento}>
            <strong>{depo.nome}</strong>
            <p>"{depo.comentario}"</p>
            <p>Nota: {depo.nota} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
}


