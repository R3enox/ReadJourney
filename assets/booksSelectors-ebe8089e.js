import{p as o,j as i,L as n}from"./index-293646f1.js";const r=o.section`
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
`,d=({children:t})=>i.jsx(r,{children:t}),e=o.h2`
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  margin-left: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`,l=({text:t})=>i.jsx(e,{children:t}),x=o.button`
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
`,c=o(n)`
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
`,s=o.button`
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
`,f=({text:t})=>i.jsx(s,{className:"btnSbmt",type:"submit",children:t}),a=o.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14;
  }
`,g=({title:t})=>i.jsx(a,{className:"title",children:t}),h=t=>t.books,m=t=>t.books.book;export{f as B,d as D,c as L,l as T,x as a,g as b,m as c,h as s};
