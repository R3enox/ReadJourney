import{p as o,j as e,L as l,r as n,v as c,s as x}from"./index-6d463415.js";const f=o.section`
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 32px;
    gap: 32px;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    padding: 20px;
    margin-top: 16px;
  }
`,w=({children:t})=>e.jsx(f,{children:t}),m=o.h2`
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  margin-left: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`,k=({text:t})=>e.jsx(m,{children:t}),v=o.button`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 24px;
  min-width: 141px;
  background-color: transparent;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: #f9f9f9;

  &:hover,
  &:focus {
    transition-duration: 300ms;
    border: 1px solid transparent;
    color: #1f1f1f;
    background-color: #f9f9f9;
  }

  @media (min-width: 768px) {
    min-width: 162px;
    padding: 14px 28px;
    font-size: 16px;
    line-height: 1.12;
  }
`,y=o(l)`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 24px;
  min-width: 141px;
  background-color: transparent;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: #f9f9f9;

  &:hover,
  &:focus {
    transition-duration: 300ms;
    border: 1px solid transparent;
    color: #1f1f1f;
    background-color: #f9f9f9;
  }
`,h=o.button`
  margin-top: 12px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  background-color: transparent;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 98px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: #f9f9f9;
  align-self: flex-start;

  &:hover,
  &:focus {
    transition-duration: 300ms;
    border: 1px solid transparent;
    color: #1f1f1f;
    background-color: #f9f9f9;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.12;
      padding: 12px 28px;
      min-width: 122px;
    }
  }
`,z=({text:t})=>e.jsx(h,{className:"btnSbmt",type:"submit",children:t}),g=o.div`
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
    max-width: ${t=>t.maxwidth||"335px"};
    width: 100%;
    background-color: #1f1f1f;
    border: 1px solid rgba(104, 104, 104, 0.2);
    border-radius: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

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

  @media (min-width: 768px) {
    .modal {
      max-width: ${t=>t.maxwidth||"500px"};
    }
  }
`,j=({maxwidth:t,body:s,setIsShowModal:r})=>{const d=document.getElementById("portal");n.useEffect(()=>(window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"}),[]);const a=n.useCallback(i=>{i.code==="Escape"&&r(!1)},[r]),p=n.useCallback(i=>{i.target===i.currentTarget&&r(!1)},[r]);return c.createPortal(e.jsx(g,{maxwidth:t,onClick:p,children:e.jsxs("div",{className:"modal",children:[e.jsx("button",{className:"btnCross",type:"button",onClick:()=>r(!1),children:e.jsx("svg",{className:"iconClose",children:e.jsx("use",{href:x+"#icon-close"})})}),s]})}),d)},u=o.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14;
  }
`,C=({title:t})=>e.jsx(u,{className:"title",children:t});export{z as B,w as D,y as L,j as M,k as T,v as a,C as b};
