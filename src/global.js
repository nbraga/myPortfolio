import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
}

html, body, #root{
    min-height: 100%;
    
    
}

body{
    background: whitesmoke;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
}

body, input, button{
    color: #ffffff;
    font-size: 14px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
    color: white;
}

ul, li{
    list-style: none;

}

.active {
    font-weight: bold;
    background-color:  gray;
    padding: 10px;
    
  }

#logotipo{
    width: 100px;
    height: 50px ;
}

h2{
    font-family: cursive;
    font-weight: 900;
    line-height: 3em;
    margin-bottom: 20px;

}

`;
