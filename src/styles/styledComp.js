import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
   box-sizing: border-box; 
   scroll-behavior: smooth;
   margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  };
`;

export const NavigationBar = styled.div`
  background-color: ${colors.priBackground};
  color: ${colors.secText};
  display: flex;
  flex-flow: row, nowrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 18px;
  a {
    text-decoration: none;
    flex-grow: 1;
    &:visited {
      color: ${colors.secText};
    }
  }
  h1 {
    text-align: center;
    cursor: pointer;
  }
  p {
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
  }
  div {
    display: flex;
    flex-flow: row, nowrap;
    justify-content: space-evenly;
    flex-grow: 2;
    input {
      width: 90%;
      height: 40px;
      border: none;
      border-radius: 8px 0 0 8px;
    }
    div {
      background-color: ${colors.primary};
      width: 48px;
      border-radius: 0 8px 8px 0;
      img {
        width: 24px;
      }
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  div {
    border: solid 1px #00000020;
    border-radius: 4px;
    padding: 20px 26px;
  }
  img {
    cursor: pointer;
  }
`;

export const ProductCardTemp = styled.div`
  width: 365px;
  height: 570px;
  border-bottom: solid #00000030 1px;
  cursor: pointer;
  .img-cont {
    width: 100%;
    height: 365px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: scale-down;
    }
  }
  .score {
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ProductListTemp = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 15px;
  a {
    text-decoration: none;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
`;

export const ProdImgCont = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  .img-list {
    display: flex;
    flex-flow: column wrap;
    gap: 5px;
    cursor: pointer;
    img {
      width: 70px;
      height: 70px;
      object-fit: scale-down;
    }
  }
  .img-selected {
    overflow: hidden;
    border: solid 1px #00000030;
    padding: 20px;
    img {
      width: 30vw;
      height: 30vw;
      object-fit: scale-down;
      transition: 0.3s;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;

export const ProductInfoCont = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
`;

export const ProductDescCont = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-content: center;
  width: 50vw;
  button {
    background-color: ${colors.secundary};
    border: none;
    width: 80%;
    height: 40px;
    margin: 0 auto 0 auto;
    border-radius: 20px;
    cursor: pointer;
  }
`;
