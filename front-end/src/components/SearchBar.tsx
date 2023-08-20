import styled from "styled-components"

const SearchBar = styled.div`
    font-size: 2vh;
    margin-top: 3vh;

    button{
        border: none;
        outline: none;

        text-decoration: none;
        font-size: 2.5vh;
        color: white;

        background-color: #4a4a4a;
        transition: background .3s;
        border-radius: 5px;
        
        margin-top: 2vh;
        padding: 10px;
    }
    button:hover{
        background-color: #bfbfbf;
    }
    a{
        text-decoration: none;
        color: white;
        background-color: #4a4a4a;
        padding: 14px;
        border-radius: 10px;
        margin: 5px;
    }
    a:hover{
        opacity: 0.5;
    }
`

export default SearchBar