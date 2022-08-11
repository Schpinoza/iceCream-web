import styled from "styled-components";




export const Container= styled.div`
  font-family: 'lato', sans-serif;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`
export const TableName = styled.h2`
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
`
export const TableHeader = styled.li`
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media(max-width: 767px){
        display:none;
    }
`
export const TableRowHeader = styled.li`
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 767px){
        display:none;
    }
`

export const TableRow = styled.li`
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media(max-width: 767px){
        display:block;
    }

`
export const DivColOne = styled.div `
flex-basis: 40%;
@media(max-width: 767px){
    flex-basis: 100%;
    display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
`
export const DivColTwo = styled.div `
flex-basis: 30%;
@media(max-width: 767px){
    flex-basis: 100%;
    display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
`
export const DivColThree = styled.div `
flex-basis: 20%;
@media(max-width: 767px){
    flex-basis: 100%;
    display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
`
export const DivColFour = styled.div `
flex-basis: 10%;
@media(max-width: 767px){
    flex-basis: 100%;
    display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
`

export const DivColClose = styled.div `
padding-top:20px;
color:red;
font-weight:bold;
font-size:1.2rem;
flex-basis: 10%;
text-align:center;
cursor: pointer;
background-color:#b9bcbd;
border-radius:5px;
&:hover{
    color:#95A5A6
}
`

export const DetailsContainer=styled.div`
background-color: #b9bcbd;
display:block;

    font-size:14px;
    text-align:center;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border-radius: 3px;
    padding: 25px 30px;
    justify-content: space-between;
    margin-bottom: 25px;
    @media(max-width: 767px){
        display:none;
    }
`
export const DivHead = styled.div`
font-size:3rem;
font-weight:bold;
padding:10px;
color:#2C3333;

`
export const DivColOneIce = styled.div `
flex-basis: 40%;
@media(max-width: 767px){
    flex-basis: 100%;
    display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
`
export const DivColTwoIce = styled.div `
flex-basis: 30%;
@media(max-width: 767px){
    flex-basis: 100%;
    display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
`
export const DivColThreeIce = styled.div `
flex-basis: 20%;
@media(max-width: 767px){
    flex-basis: 100%;
    display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
`

export const DivColFourClick = styled.div `
flex-basis: 10%;
cursor: pointer;
background-color:#b9bcbd;
padding:5px;
text-align:center;
border-radius:5px;
&:hover{
    background-color:#87898a;
}
@media(max-width: 767px){
    flex-basis: 100%;
    display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
`

export const TableRowIce = styled.li`
    background-color: #ffffff;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 767px){
        display:block;
    }
`
