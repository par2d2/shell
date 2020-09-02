import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import apiCall from '../components/apiCall';
import CharacterList from '../components/characterList';

export default function Home() {
    const [characters, setCharacters] = useState(null);
    const [message, setMessage] = useState("Now Loading!");

    useEffect(() => {
        apiCall("http://swapi.dev/api/people/",'get').then((response)=>{
            if (response.status == 200){
                if (Array.isArray(response.data.results)){
                    setCharacters(response.data.results)
                } else {
                    setMessage("Invalid data type!")
                }
            } else {
                setMessage("Failed to load!")
            }
        })
    }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars Characters</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      </Head>

      <header>
        <h1>Star Wars Codex</h1>
      </header>

      <main className={styles.main}>
          { characters ? <CharacterList characters={characters} /> : <div>{message}</div> }
      </main>
    </div>
  )
}
