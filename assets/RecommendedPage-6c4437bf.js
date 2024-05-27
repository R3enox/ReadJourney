import{p as s,r as a,u as h,j as e,a as b,c as k,s as m,b as y,d as N,e as B,L as f}from"./index-2099c76c.js";import{T as v,B as S,a as T,M as L,b as E,D as W}from"./Title-96cd2c0b.js";import{M as z}from"./ModalBody-74b107f0.js";import{b as I,a as F,c as g,d as R}from"./book@2x-d623c287.js";const P=s.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .inptWrapper {
    position: relative;
  }

  .desc {
    position: absolute;
    font-size: 12px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
    top: 14px;
    left: 14px;
  }

  .inptForm {
    width: 100%;
    background-color: #262626;
    border-color: transparent;
    border: none;
    border-radius: 12px;
    padding: 14px 0 14px 77px;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #f9f9f9;
    outline: none;
  }

  .inptFormSecond {
    padding-left: 85px;
  }

  .inptForm:hover {
    border: 1px solid rgba(249, 249, 249, 0.1);
  }

  .inptForm::placeholder {
    color: #f9f9f9;
  }

  .btnSbmt {
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
    }
  }

  @media (min-width: 768px) {
    .inptForm {
      min-width: 295px;
      font-size: 14px;
      line-height: 1.29;
      padding: 16px 0 16px 86px;
    }

    .desc {
      font-size: 14px;
      top: 16px;
      left: 16px;
    }

    .btnSbmt {
      font-size: 16px;
      line-height: 1.12;
      padding: 12px 28px;
      min-width: 122px;
    }

    .inptFormSecond {
      padding-left: 95px;
    }
  }
`,A=({per_page:t})=>{const[i,r]=a.useState(""),[o,n]=a.useState(""),p=h(),x=d=>{r(d.target.value)},c=d=>{n(d.target.value)},j={title:i,author:o,page:1,per_page:t},w=d=>{d.preventDefault(),(i||o)&&p(b(j))};return e.jsxs("div",{children:[e.jsx(v,{text:"Filters:"}),e.jsxs(P,{onSubmit:w,children:[e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"Book title:"}),e.jsx("input",{className:"inptForm",type:"text",placeholder:"Enter text",value:i,onChange:x})]}),e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"The author:"}),e.jsx("input",{className:"inptForm inptFormSecond",type:"text",placeholder:"Enter text",value:o,onChange:c})]}),e.jsx(S,{text:"To apply"})]})]})},D=s.div`
  display: flex;
  gap: 8px;

  .arrowLeft,
  .arrowRight {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 1px solid rgba(249, 249, 249, 0.2);
    background-color: transparent;
    padding: 8px;
  }

  .arrowIcon {
    width: 16px;
    height: 16px;
    stroke: #f9f9f9;
    fill: none;
  }
`,M=s.button`
  ${({page:t})=>t===1&&k`
      /* border-color: rgba(249, 249, 249, 0.2); */
      cursor: auto;

      .left {
        stroke: rgba(249, 249, 249, 0.2);
      }
    `}
`,C=({page:t,setPage:i})=>{const r=()=>{i(t-1)},o=()=>{i(t+1)};return e.jsxs(D,{children:[e.jsx(M,{className:"arrowLeft",onClick:r,page:t,disabled:t===1,children:e.jsx("svg",{className:"arrowIcon left",children:e.jsx("use",{href:m+"#icon-chevron-left"})})}),e.jsx("button",{className:"arrowRight",onClick:o,children:e.jsx("svg",{className:"arrowIcon",children:e.jsx("use",{href:m+"#icon-chevron-right"})})})]})},O=s.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 21px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    gap: 25px;
  }

  @media (min-width: 768px) {
    gap: 20px;
  }
`,$=s.li`
  display: flex;
  flex-direction: column;

  .imgBook {
    border-radius: 8px;
    width: 137px;
    height: 208px;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .titleBook {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    max-width: 137px;
    margin-bottom: 2px;
    width: 137px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .author {
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #686868;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-basis: calc((100% - 75px) / 4);
  }

  @media (min-width: 1280px) {
    flex-wrap: wrap;
    flex-basis: calc((100% - 80px) / 5);
  }
`,K=({id:t,setIsShowModal:i})=>{const r=h();return e.jsx(T,{className:"btnAdd",type:"submit",onClick:()=>{r(y(t)),i(!1)},children:"Add to library"})},_=({book:t})=>{const[i,r]=a.useState(!1),{imageUrl:o,title:n,author:p}=t;return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:[e.jsx("img",{srcSet:o,alt:n,className:"imgBook",onClick:()=>r(!0)}),e.jsx("h2",{className:"titleBook",children:n}),e.jsx("p",{className:"author",children:p})]}),i&&e.jsx(L,{body:e.jsx(z,{book:t,btn:e.jsx(K,{id:t._id})}),setIsShowModal:r})]})},Q=({results:t})=>e.jsx(O,{children:t==null?void 0:t.map(i=>e.jsx(_,{book:i},i._id))}),U=s.section`
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 40px 20px;

  .flexWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
  }

  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding: 20px 40px;
  }
`,q=({page:t,setPage:i})=>{const{books:{results:r}}=N(B);return e.jsxs(U,{children:[e.jsxs("div",{className:"flexWrapper",children:[e.jsx(E,{title:"Recommended"}),e.jsx(C,{page:t,setPage:i})]}),e.jsx(Q,{results:r})]})},G=s.div`
  background-color: #262626;
  border-radius: 12px;
  padding: 20px;

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  .listItem {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f9f9f9;
    padding: 11px 16px;
    width: 40px;
    height: 40px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-align: center;
    color: #1f1f1f;
  }

  .text {
    width: 203px;
  }
  .item {
    display: flex;
    gap: 12px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  .fill {
    color: #686868;
  }

  .linkWrapper {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .libraryLink {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-decoration: underline;
    color: #686868;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      color: #f9f9f9;
    }
  }

  .arrowBtn {
    background-color: transparent;
    border: none;
  }

  .arrowIcon {
    width: 24px;
    height: 24px;
    stroke: #f9f9f9;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 20px;
      margin-bottom: 40px;
    }

    .number {
      font-size: 20px;
      padding: 13px 18px;
      width: 44px;
      height: 44px;
    }

    .text {
      width: 197px;
    }

    .linkWrapper {
      margin-top: 26px;
    }
  }
`,H=()=>e.jsxs(G,{children:[e.jsx("h2",{className:"title",children:"Start your workout"}),e.jsxs("ul",{className:"listItem",children:[e.jsxs("li",{className:"item",children:[e.jsx("p",{className:"number",children:"1"}),e.jsxs("p",{className:"text",children:["Create a personal library:"," ",e.jsx("span",{className:"fill",children:"add the books you intend to read to it."})]})]}),e.jsxs("li",{className:"item",children:[e.jsx("p",{className:"number",children:"2"}),e.jsxs("p",{className:"text",children:["Create your first workout:"," ",e.jsx("span",{className:"fill",children:"define a goal, choose a period, start training."})]})]})]}),e.jsxs("div",{className:"linkWrapper",children:[e.jsx(f,{className:"libraryLink ",to:"/library",children:"My library"}),e.jsx(f,{to:"/library",children:e.jsx("button",{className:"arrowBtn",children:e.jsx("svg",{className:"arrowIcon",children:e.jsx("use",{href:m+"#icon-arrow"})})})})]})]}),J=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
  }
`,l={MOBILE:"mobile",TABLET:"tablet",DESKTOP:"desktop"},u={MOBILE:375,TABLET:768,DESKTOP:1280},V=()=>window.innerWidth>=u.DESKTOP?l.DESKTOP:window.innerWidth>=u.TABLET?l.TABLET:l.MOBILE,X={[l.MOBILE]:2,[l.TABLET]:8,[l.DESKTOP]:10},Y=s.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 15px 20px;
    background-color: #262626;
    border-radius: 12px;

    .desc {
      font-weight: 500;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      color: #686868;
    }
    .fillWord {
      color: #f9f9f9;
    }
  }
`,Z=()=>e.jsxs(Y,{children:[e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${I} 1x, ${F} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${g} 1x, ${R} 2x`}),e.jsx("img",{className:"hero-img",srcSet:g,alt:"Iphone"})]}),e.jsxs("p",{className:"desc",children:['"Books are ',e.jsx("span",{className:"fillWord",children:"windows "}),'to the world, and reading is a journey into the unknown."']})]}),se=()=>{const[t,i]=a.useState(""),[r,o]=a.useState(""),[n,p]=a.useState(1),x=h();let c=X[V()];return a.useEffect(()=>{x(b({title:t,author:r,page:n,per_page:c}))},[x,t,r,n,c]),e.jsxs(J,{children:[e.jsxs(W,{children:[e.jsx(A,{per_page:c}),e.jsx(H,{}),e.jsx(Z,{})]}),e.jsx(q,{page:n,setPage:p})]})};export{se as default};
