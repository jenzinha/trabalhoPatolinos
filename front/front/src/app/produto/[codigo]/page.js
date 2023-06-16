'use client'



import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const codigo = { codigo: parseInt(params.codigo) }

    const codigoJson = JSON.stringify(codigo);

    const req = await fetch("http://localhost:3004/produtos", {
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
        <div>
        <p style={{fontWeight: 'bold', fontSize: 20, marginTop:10}}>{produto.titulo}</p>
        <img style={{width: 170}} src={produto.imagem}/>
          <p>{produto.dataCad}</p>
          <p>R${produto.preco}</p>
          <p>{produto.descricao}</p>
          
            <button style={{
                
            }} 
            onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}