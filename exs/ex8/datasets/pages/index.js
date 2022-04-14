import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useRouter} from 'next/router'

import { ChangeName } from '../data/que_content'
export default function Home() {
  const r = useRouter();
  return (
    <div className={styles.container}>
      {/* a tag -> reloads the browser to move to the next page -> all the data gets flushed away*/}
      {/* <a href="/questions">Go to questions</a> */}
      <input type ='text' placeholder='what is your name?'
      onChange={
        (e)=>ChangeName(e.target.value)
      }/>
      {/* button w/ router -> reloads only the template -> no data gets destroyed */}
      <button onClick={
        ()=>r.push("/questions")
      }>Go to Questions</button>
    </div>
  )
}
