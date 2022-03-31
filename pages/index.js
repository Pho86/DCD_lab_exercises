import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  header,
  animalLists,
  colorLists
} from '../data/indexcontent';
import Lists, {Item, ListsFooter} from '../comps/Lists';

  var bag2=[];
  for(var i= 0; i < animalLists.length; i++) {
    bag2.push(<h3>{animalLists[i]}</h3>)
  }

// import {Item, ListsFooter} from '../comps/Lists';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>{header}</h1>
      {/* {bag2} */}
      {/* {animalLists.map((booger,i)=><h3>{booger}</h3>)} */}
      <Lists arr={animalLists} />
      <Lists arr={colorLists}/>
      <ul>
        <Item />
      </ul>
      <ListsFooter/>
    </div>
  )
}
