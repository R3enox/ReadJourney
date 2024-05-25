import{p as l,r as s,h as c,j as e,s as d}from"./index-293646f1.js";const p=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.6);
  z-index: 99;

  &:hover {
    cursor: pointer;
  }

  .modal {
    position: relative;
    padding: 40px 50px;
    max-width: 335px;
    width: 100%;
    min-height: 421px;
    background-color: #1f1f1f;
    border: 1px solid rgba(104, 104, 104, 0.2);
    border-radius: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      cursor: auto;
    }
  }

  .btnCross {
    border: none;
    background-color: transparent;
  }

  .iconClose {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 22px;
    height: 22px;
    stroke: #f9f9f9;
  }
`,g=({body:n,setIsShowModal:t})=>{const a=document.getElementById("portal");s.useEffect(()=>(window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}),[]);const r=s.useCallback(o=>{o.code==="Escape"&&t(!1)},[t]),i=s.useCallback(o=>{o.target===o.currentTarget&&t(!1)},[t]);return c.createPortal(e.jsx(p,{onClick:i,children:e.jsxs("div",{className:"modal",children:[e.jsx("button",{className:"btnCross",type:"button",onClick:()=>t(!1),children:e.jsx("svg",{className:"iconClose",children:e.jsx("use",{href:d+"#icon-close"})})}),n]})}),a)},x=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .imgBook {
    width: 140px;
    height: 213px;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .titleBook {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 2px;
    max-width: 250px;
  }

  .author {
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #686868;
    text-align: center;
    margin-bottom: 4px;
  }

  .totalPages {
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 20px;
  }
`,h=({book:n,btn:t})=>{const{imageUrl:a,title:r,author:i,totalPages:o}=n;return e.jsxs(x,{children:[e.jsx("img",{srcSet:a,alt:r,className:"imgBook"}),e.jsx("h2",{className:"titleBook",children:r}),e.jsx("p",{className:"author",children:i}),e.jsxs("p",{className:"totalPages",children:[o," pages"]}),t]})};export{g as M,h as a};
