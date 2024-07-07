import React, { useRef, useState } from "react";
import { v4 } from "uuid";
import AddButton from "../app/style.jsx";

function Home() {
  const inputRef = useRef();

  const [produtos, setProdutos] = useState([]);

  function inserirProdutos() {
    const novoProduto = inputRef.current.value;
    setProdutos([
      ...produtos,
      {
        id: v4(),
        nome: novoProduto,
      },
    ]);
    inputRef.current.value = "";
  }

  function deletarProduto(e) {
    const id = e
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }


  return (
    <div>
      <h1>Home</h1>
      <input type="text" ref={inputRef} />
      <AddButton $btnprop onClick={inserirProdutos}>adicionar</AddButton>
      <AddButton onClick={inserirProdutos}>adicionar</AddButton>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <p> {produto.nome }</p>
          <button  onClick={ () => deletarProduto(produto.id)} >🗑️</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
