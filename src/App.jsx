import { useState, useEffect } from 'react'; // Adicione o useEffect aqui
import './App.css';

function App() {
  const [data, setData] = useState(null); // Estado para armazenar os dados

  useEffect(() => {
    // Função para buscar os dados
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/exemplo"); // Substitua pelo seu endpoint
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        const result = await response.json();
        setData(result); // Armazena os dados no estado
      } catch (err) {
        console.error(err); // Armazena o erro no estado
      }
    };

    fetchData();
  }, []); // O array vazio faz com que a requisição ocorra apenas uma vez ao montar o componente

  return (
    <div>
      <h1>Dados carregados:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
