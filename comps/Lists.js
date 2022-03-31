import styled from 'styled-components';

const FooterCont = styled.div `
    background:#DDF;
    color:#666;
    padding:10px;
`

const ListItem = styled.li`
font-size:16px;
color:#AAA;
font-family: "Comic Sans MS", cursive, sans-serif;.
`

export function ListsFooter(){
    return <FooterCont>
        List Footer
    </FooterCont>
}
export function Item({
    txt="Item 1"
}) {
    return <ListItem>
        {txt}
    </ListItem>
}

export default function Lists({
    arr=[
        "Item #1",
        "Item #2",
        "Item #3",
        "Item #4",
        "Item #5"
    ]
}) {
    return <div>
        <ul>
            {/*<Item txt='Item #1'/>
            <Item txt='Item #2'/>
            <Item txt='Item #3'/> */ }
    {arr.map((booger,i)=><Item txt={booger}/>)}
        </ul>
        <ListsFooter/>
    </div>
}