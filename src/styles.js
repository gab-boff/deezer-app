import styled from "styled-components";

export const Cards = styled.div`
display: flex;
background-color: white;
overflow: hidden;
padding: 32px;
margin: 48px auto 0;
width: 50%;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.25), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 5px;
`;

export const CardButton = styled.button`
  display: block;
  width: 200px;
  margin:20px;
  padding: 6px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #De9113;
  border: 0;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const Block = styled.div`
  display: flex;
  width: 700px;  
  justify-content: space-between;
`;

export const Text = styled.div`
  line-height:60px;
  font-size:14px;
`;

export const Body = styled.div`
  background-color: #09112d
`;

export const FavButton = styled.button`
display: block;
width: 200px;
margin:20px;
padding: 6px 0;
font-family: inherit;
font-size: 14px;
font-weight: 700;
background-color: #De9113;
border: 0;
border-radius: 15px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
`;

export const aLink = styled.a`
  text-decoration: none;
  color: #Ffffff;
`; 

export const CenterButton = styled.button`
  display: inline-flex;
  flex-diretion: row;
  justify-content: center;
  align-items: center;
  margin: 20px 45%;
  width:200px;
  padding: 6px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #De9113;
  border: 0;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const Input = styled.input`
  height: 30px;
  margin: 20px auto;
  font-size: 25px;
  width: 70%;
  border: 2px solid #aaa;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  cursor: pointer;

  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  margin: 0 40%;
  width: 45%;

`;
