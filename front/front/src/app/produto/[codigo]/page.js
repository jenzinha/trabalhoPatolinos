'use client'



import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const codigo = { codigo: parseInt(params.codigo) }

    const codigoJson = JSON.stringify(codigo);

    const req = await fetch("http://localhost:3001/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: codigoJson
    })
    const produto = await req.json();


    const remover = () => {
        console.log(codigoJson)
        try {
            fetch("http://localhost:3004/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: codigoJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div className="container3">
        <h3>{produto.titulo}</h3>
        <img className="imagemCodigo" src={produto.imagem}/>
          <p className="data"> {produto.cadastro}</p>
          <p  className="precoPro">R${produto.preco}</p>
          <p className="descriPro">{produto.descricao}</p>
          
            <button id="removePage" onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}