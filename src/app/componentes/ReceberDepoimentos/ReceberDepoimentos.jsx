'use client';
import { useState } from "react";
import estilo from "./ReceberDepoimentos.module.css";

export default function ReceberDepoimento({ atualizarLista }) {
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [nota, setNota] = useState(5);

  const enviarDepoimento = async (e) => {
    e.preventDefault();
    
    const novoDepoimento = { nome, comentario, nota };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/depoimentos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoDepoimento),
    });

    if (res.ok) {
      alert("Depoimento enviado com sucesso!");
      atualizarLista(); // Atualiza a lista após o envio
      setNome("");
      setComentario("");
      setNota(5);
    } else {
      console.error("Erro ao enviar depoimento");
    }
  };

  return (
    <div className={estilo.formContainer}>
      <h2>Deixe seu Depoimento</h2>
      <form onSubmit={enviarDepoimento} className={estilo.formulario}>
        <label>Nome:</label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required
        />

        <label>Comentário:</label>
        <textarea 
          value={comentario} 
          onChange={(e) => setComentario(e.target.value)} 
          required
        ></textarea>

        <label>Nota:</label>
        <select value={nota} onChange={(e) => setNota(e.target.value)}>
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>{n} ⭐</option>
          ))}
        </select>

        <button type="submit">Enviar Depoimento</button>
      </form>
    </div>
  );
}
