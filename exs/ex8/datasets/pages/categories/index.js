// import {useRouter}
import { useRouter } from 'next/router';
import Display from '../../comps/Display';
import { header, cat1, cat2, cat3, cat1Imgs, cat2Imgs, cat3Imgs} from '../../data/cate_content';



export default function Categories() {

  const r = useRouter();

  // retrieve the page variable from the url
  const { page, type } = r.query;

  if (page === '3') {
    return <div>
      <h1>THIS IS THE END!</h1>
      <button onClick={
        () => r.push("/categories")
      }>Restart</button>
    </div>
  }



  return <div>
    <h1>Categories - #{page} - {type}</h1>
    <button onClick={
      () => console.log(r)
    }>Console log the router</button>

    <button onClick={
      () => r.replace({
        pathname: "/categories",
        query: {
          // set the page variable to the url
          // if page is undefined then page:1 else page:Number(page)+1
          page: page === undefined ? page : Number(page) + 1, // change this number from 1 - 2 - 3... (increase by 1 every time we click on the button)
          type: "sports"
        }
      })
    }>Try Router</button>
    <hr />
    <div>
      {
        type === undefined ? <h1>CHOOSE A CATEGORY</h1> : <h3>{header}{type}</h3>
      }
      {/* <h1>{header}</h1> */}
      <div>

        <div onClick={
          () => r.push({
            pathname: "/categories",
            query: {
              type: cat1.route
            }
          })
        }>{cat1.title}</div>

        <div onClick={
          () => r.push({
            pathname: "/categories",
            query: {
              type: cat2.route
            }
          })
        }>{cat2.title}</div>

        <div onClick={
          () => r.push({
            pathname: "/categories",
            query: {
              type: cat3.route
            }
          })
        }>{cat3.title}</div>

      </div>

      {
        type === 'fo' && <div>
          SHOW ALL THE FOOD PICTURES

          {/* {
            cat1Imgs.map((o, i) => <img src={o} height={100} />)
          } */}
          <Display arr={cat1Imgs}></Display>
        </div>
      }

      {
        type === "an" && <div>
          SHOW ALL THE ANIMAL PICTURES
          <Display arr={cat2Imgs}></Display>
          {
          //   //<Display arr={cat1Imgs}/>
          //   cat2Imgs.map((o, i) => <img src={o} height={100} />)
          }
        </div>
      }

      {
        type === "bo" && <div>
          SHOW ALL THE BOTTLE PICTURES
          <Display arr={cat3Imgs}></Display>
          {
          //   cat3Imgs.map((o, i) => <img src={o} height={100} />)
          }
        </div>
      }
    </div>
  </div>
}


/*
1. ? :
2. &&
3. ||

  if boolean condition is true, then use value 1, else use value 2
  value can be both data types (int, string, array etc) AND UI Elements (<div>, <h1>, etc)
1. boolean condition ? value1: value2

  if boolean condition is true, then use value
2. boolean condition && value

if value1 is usable, use it, otherwise use value2
3. value1 || value2
*/