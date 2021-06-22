import { createGlobalStyle } from "styled-components";
import HelveticaNeue from "../../assets/fonts/helveticaneuemedium.ttf";
import HelveticaNeueBold from "../../assets/fonts/helveticaneuebold.ttf";
const GlobalStyle = createGlobalStyle`
  body {
    margin:0px;
    box-sizing:border-box;
  }
  .MuiMenu-paper {
    margin-top: 8px;
  }
  .MuiIcon-root{
    font-size: 1.2rem!important;

  }
  .center{
    display:flex;
    justify-content:center;
    align-items:center
  }
  .App{
    color:#666666;
  }
  .PersistentDrawerLeft-content-3{
    overflow:unset!important;
  }
  @font-face {
    font-family: 'Helvetica Neue' ;
    src: url(${HelveticaNeue});
  }
  @font-face {
    font-family: 'Helvetica Neue Bold' ;
    src: url(${HelveticaNeueBold});
  }
`;
export default GlobalStyle;
