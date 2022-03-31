// importing componentes to do the list 
// importing your data from about content 
// using data from about content to make this page 
/*

localhost:3000/about?list=hobbies
localhost:3000/about?list=book
*/
import {
    header,
    hobbiesList,
    name,
    bookList
  } from '../data/aboutcontent';
import Lists from '../comps/Lists';

import {useRouter} from 'next/router';



export default function About() {
    const r = useRouter();
    const{list} = r.query;
    var mainlist = [];
    if (list == 'books'){
        mainlist = bookList;
    }
    if(list === 'hobbies'){
        mainlist = hobbiesList;
    }


    return <div>
        <h1>{header}</h1>
        <ul>
            <Lists arr={mainlist}/>
        </ul>
        <h4>{name}</h4>
    </div>
}