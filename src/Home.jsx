import React, { useRef, useState } from "react";

function Home() {
  const inputRef = useRef();

  const [produtos, setProdutos] = useState([]);

  function inserirProdutos() {
    const novoProduto = inputRef.current.value;
    setProdutos([...produtos, novoProduto]);
    inputRef.current.value = "";
  }

  return (
    <section>
      <h1>Home</h1>
      <input type="text" ref={inputRef} />
      <button onClick={inserirProdutos}>adicionar</button>

      {produtos.map((produto, index) => (
        <div key={index}>{produto}</div>
      ))}
    </section>
  );
}

export default Home;
