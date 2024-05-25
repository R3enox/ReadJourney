import{p as r,r as a,u as h,j as e,a as u,c as j,s as m,b as y,d as B,L as A}from"./index-953d7561.js";import{T as k,B as v,a as C,s as E,b as S,D as Q}from"./booksSelectors-bb7706ed.js";import{M as N,a as T}from"./ModalBody-ca418a1e.js";const I=r.form`
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
`,W=({per_page:t})=>{const[i,s]=a.useState(""),[o,n]=a.useState(""),p=h(),x=d=>{s(d.target.value)},c=d=>{n(d.target.value)},w={title:i,author:o,page:1,per_page:t},b=d=>{d.preventDefault(),(i||o)&&p(u(w))};return e.jsxs("div",{children:[e.jsx(k,{text:"Filters:"}),e.jsxs(I,{onSubmit:b,children:[e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"Book title:"}),e.jsx("input",{className:"inptForm",type:"text",placeholder:"Enter text",value:i,onChange:x})]}),e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"The author:"}),e.jsx("input",{className:"inptForm inptFormSecond",type:"text",placeholder:"Enter text",value:o,onChange:c})]}),e.jsx(v,{text:"To apply"})]})]})},L=r.div`
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
`,F=r.button`
  ${({page:t})=>t===1&&j`
      border-color: rgba(249, 249, 249, 0.2);

      .left {
        stroke: rgba(249, 249, 249, 0.2);
      }
    `}
`,P=({page:t,setPage:i})=>{const s=()=>{i(t-1)},o=()=>{i(t+1)};return e.jsxs(L,{children:[e.jsx(F,{className:"arrowLeft",onClick:s,page:t,disabled:t===1,children:e.jsx("svg",{className:"arrowIcon left",children:e.jsx("use",{href:m+"#icon-chevron-left"})})}),e.jsx("button",{className:"arrowRight",onClick:o,children:e.jsx("svg",{className:"arrowIcon",children:e.jsx("use",{href:m+"#icon-chevron-right"})})})]})},R=r.ul`
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
`,Z=r.li`
  display: flex;
  flex-direction: column;

  .imgBook {
    border-radius: 8px;
    width: 137px;
    height: 208px;
    margin-bottom: 8px;
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
`,K=({id:t})=>{const i=h();return e.jsx(C,{className:"btnAdd",type:"submit",onClick:()=>i(y(t)),children:"Add to library"})},U=({book:t})=>{const[i,s]=a.useState(!1),{imageUrl:o,title:n,author:p}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(Z,{children:[e.jsx("img",{srcSet:o,alt:n,className:"imgBook",onClick:()=>s(!0)}),e.jsx("h2",{className:"titleBook",children:n}),e.jsx("p",{className:"author",children:p})]}),i&&e.jsx(N,{body:e.jsx(T,{book:t,btn:e.jsx(K,{id:t._id})}),setIsShowModal:s})]})},J=({results:t})=>e.jsx(R,{children:t==null?void 0:t.map(i=>e.jsx(U,{book:i},i._id))}),O=r.section`
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
`,X=({page:t,setPage:i})=>{const{books:{results:s}}=B(E);return e.jsxs(O,{children:[e.jsxs("div",{className:"flexWrapper",children:[e.jsx(S,{title:"Recommended"}),e.jsx(P,{page:t,setPage:i})]}),e.jsx(J,{results:s})]})},D=r.div`
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
`,G=()=>e.jsxs(D,{children:[e.jsx("h2",{className:"title",children:"Start your workout"}),e.jsxs("ul",{className:"listItem",children:[e.jsxs("li",{className:"item",children:[e.jsx("p",{className:"number",children:"1"}),e.jsxs("p",{className:"text",children:["Create a personal library:"," ",e.jsx("span",{className:"fill",children:"add the books you intend to read to it."})]})]}),e.jsxs("li",{className:"item",children:[e.jsx("p",{className:"number",children:"2"}),e.jsxs("p",{className:"text",children:["Create your first workout:"," ",e.jsx("span",{className:"fill",children:"define a goal, choose a period, start training."})]})]})]}),e.jsxs("div",{className:"linkWrapper",children:[e.jsx(A,{className:"libraryLink ",to:"/library",children:"My library"}),e.jsx(A,{to:"/library",children:e.jsx("button",{className:"arrowBtn",children:e.jsx("svg",{className:"arrowIcon",children:e.jsx("use",{href:m+"#icon-arrow"})})})})]})]}),Y=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
  }
`,l={MOBILE:"mobile",TABLET:"tablet",DESKTOP:"desktop"},g={MOBILE:375,TABLET:768,DESKTOP:1280},H=()=>window.innerWidth>=g.DESKTOP?l.DESKTOP:window.innerWidth>=g.TABLET?l.TABLET:l.MOBILE,V={[l.MOBILE]:2,[l.TABLET]:8,[l.DESKTOP]:10},z=r.div`
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
`,f="data:image/png;base64,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",M="/ReadJourney/assets/book@2x-b4c857f3.png",q="data:image/webp;base64,UklGRmQDAABXRUJQVlA4WAoAAAAQAAAAJwAAKAAAQUxQSDcBAAABkAPZtmlb6+KZke33Ihupbdu2bfyIqW3bdmrb9r9YH+fus9dXHBETAH97iV3qxNGLSRISiVnM4LZHavz1kC8vw/DWNTeVyKpcZMXBL3LnJ+T4vk9fjN4n5H0nW8JmiYQng5lsKVC1wo7B+AsF4odRAw1QoyJBvF8oFYJKJQ3icg1QrKDJ19EEnSSv5CAsAXkOySMQdj+7+SWSfksUKkFy9Vq9XxrIXm8plv9SQ6I4MxqhA8KeCorXRsC6hALrmBy/UFySscBcCoxhMntLsYcJhiiUjkzGT/ipW+RMUM8Pv8Sx6dzgh58jmSCXAC/LmGQX+b03APYofrdB7EFujyViAlW8FAFiYB0v3CbK7Zu4L1c3jGS4ykTBQhbFrW3T+V6GwNnsDSIq7uycU+xvArTJJSE+pvC/CQBWUDggBgIAADALAJ0BKigAKQA+nUSZSawiqaeuOAmYsBOJbACdIPO8zgAbcvn49Mg3lhHEZF9aR9L6hWFJ0SAQMYTwXmfl2yJn1UJ7F3Gb6G+45bWis3fQ/YkSJFVHwOlyFKe+/8TYG7aAAPnYm6C9ED/a+vmvrz5/o831bu7g7cyQWUGg7yfmWkw3ZoiOAu6ff73j+6NT+cQG1b9QjE10ED0m4fP/gql+cuD1JMT0x/kPgzEnxuvhS/8s9dMD/XrsC94NHj+r+rvfEOSegQ9bDa70YF/+Urj31pGY2AsVRJe7tXx+7qP/Ha/vC5akbfkMCNKWds2C8ojqCz5oXGNtTYaS1lXSfFSQUo3s+n+4vJ92CbLBa1lIyiPylrlf14d7dKN1hYeFKDUaL3Za7QydicQL1JQXuuhvDyX+IY/g0sRa6TO8OYH1xwpX6qH/KdKEEquiOJEVNwJA3LpnhydRH/v8fWfrzioixJFoSeLO05WSSayxrtWXupkIKxFwAyipWGea2kQuvsllC+7ZzPQpzNmCQBXmj09y7tTWTS5LlhAIVEGbPvz5BNB7OJY7dK4JfCyWK28B7DgzdMnB31xjKN+VZ3QNCZHo4cFOJZE8rt883XYSAatA3+X0wXSmeC8+fz2Vg+rgCzXCX0WcZoYS/j+weItCxkgpFmNHZPMU88osaOhNw+1dwHkMAAAA",$="data:image/webp;base64,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",_=()=>e.jsxs(z,{children:[e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${q} 1x, ${$} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${f} 1x, ${M} 2x`}),e.jsx("img",{className:"hero-img",srcSet:f,alt:"Iphone"})]}),e.jsxs("p",{className:"desc",children:['"Books are ',e.jsx("span",{className:"fillWord",children:"windows "}),'to the world, and reading is a journey into the unknown."']})]}),se=()=>{const[t,i]=a.useState(""),[s,o]=a.useState(""),[n,p]=a.useState(1),x=h();let c=V[H()];return a.useEffect(()=>{x(u({title:t,author:s,page:n,per_page:c}))},[x,t,s,n,c]),e.jsxs(Y,{children:[e.jsxs(Q,{children:[e.jsx(W,{per_page:c}),e.jsx(G,{}),e.jsx(_,{})]}),e.jsx(X,{page:n,setPage:p})]})};export{se as default};
