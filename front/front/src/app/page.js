"use client"
import Link from 'next/link';
import styles from './page.module.css'
import Image from 'next/image'



export default async function Home() {
 const req = await fetch("http://localhost:3004/produtos", {
  cache: "no-cache"
})
 const produtos = await req.json();

  return (
   
    <main className={styles.moin}> 
<div className='container2'>
      {produtos.map(produtos => (
        <div className={styles.separa} key={produtos.codigo}>
      
          <ul className={styles.ulPage}>
         
          <li><p style={{color:'#4e0c7b', fontWeight: 'bold', fontSize: 17, marginTop:10}}>{produtos.titulo}</p></li>
           <li><Link href={`/produto/${produtos.codigo}`}>
            <image style={{width: 145}} alt="foto" src={produtos.imagem}/>
            </Link>
            </li>
          
          <li style={{
            marginRight:50,
                  color: '#4e0c7b',
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: 'center',
                  textTransform: 'uppercase',
          }}>{produtos.cadastro}</li>

          <li style={{
            marginRight: 50,
             color: '#4e0c7b',
             fontSize: 14,
             fontWeight: 700,
             textAlign: 'center',
             textTransform: 'uppercase',
          }}>R${produtos.preco}</li>

         <li><Link style={{
           color: '#252424b0',
           fontSize: 14,
           fontWeight: 700,
           textAlign: 'center',
           marginLeft:50,
           textTransform: 'uppercase',
         }}
        href={`/produto/${produtos.codigo}`}>VER MAIS</Link></li>
         
          </ul>
        </div>
        

      ))}
      
      </div>
    </main>
  )
}
