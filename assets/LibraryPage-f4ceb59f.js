import{p as n,j as e,r,u as c,f as L,d as b,e as W,a as k,L as g,s as m,n as U,g as B,h as S,i as C}from"./index-2099c76c.js";import{T as I,B as v,M as j,L as G,b as E,D as R}from"./Title-96cd2c0b.js";import{M}from"./ModalBody-74b107f0.js";const F=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`,J=n.form`
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
    padding: 14px 14px 14px 77px;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #f9f9f9;
    outline: none;
  }

  .inptFormSecond {
    padding-left: 85px;
  }

  .inptFormThird {
    padding-left: 119px;
  }

  .inptForm:hover {
    border: 1px solid rgba(249, 249, 249, 0.1);
  }

  .inptForm::placeholder {
    color: #f9f9f9;
  }

  @media (min-width: 768px) {
    .inptForm {
      min-width: 295px;
      font-size: 14px;
      line-height: 1.29;
      padding: 16px 16px 16px 86px;
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

    .inptFormThird {
      padding-left: 135px;
    }
  }

  @media (min-width: 1280px) {
  }
`,z=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 46px 60px;

  .imgBook {
    margin-bottom: 20px;
    width: 50px;
    height: 50px;
  }

  .titleBook {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    max-width: 242px;
    color: #686868;
  }

  .fillWord {
    color: #f9f9f9;
  }

  @media (min-width: 768px) {
    padding: 50px;

    .imgBook {
      width: 68px;
      height: 70px;
      margin-bottom: 32px;
    }
    .titleBook {
      font-size: 20px;
      margin-bottom: 14px;
    }
  }
`,T="data:image/png;base64,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",q="/ReadJourney/assets/upMobPng@2x-1f131511.png",N="data:image/webp;base64,UklGRkQEAABXRUJQVlA4WAoAAAAQAAAAMQAAMgAAQUxQSKUBAAABkGzbtiFZu+rZtm3btm27xZZt27Zt27Zt2xGncePcjNhfEBETAL/jFa2bLyKoe78RcW7WjkhU75eYbh+ihaL25Bmi/UpFU0mT+TRpvml3o7NEvaz9zs+CxZrUo+ln0ZCmgUV1mvLarzw0bbRHsVjCNmlrwZrxq9aOZpzoRVmyf7MoQBL9rlh25oiyTGwfp2KIMEPs3w9LHxZUxMkS8ucNDVNlK1iydNHMcfwJm+qGJiL/XBER9+uG7BZhYcoAR4K9nUJp8+7b03Pb5o/rO0QCn+tV3BXe51GNeFeE+HU0o60wL4Z5mOlBOiPhd6KZCWGWEeLvw8OMbkzijDLGUsmXRADmcjmpAazi+p0MwGaubQCwjepsGmMjU98YMOczPY7u0Z9JBnuUodrrkeA90z4PrGYa6FXrF8+BxF5YQfJnTYswqDFOKe63p0d3/vPtbxPYJp/2V/6+2j24YdYoCG/5xi85GckGSF8rc3So6Tb99elpXLsQI+ab98GX45ECABCt4czL30NxuiD4CAky5i7U/eib3664v98erALexAXKlClTICF0AFZQOCB4AgAA8A0AnQEqMgAzAD6ROpZIM6cjITfyvfiwEglsBigA7HM4+Z8f90FICdScseODQR+YD9SfWZ/s37Ae4DeAPQA/arrQyJQVVvHsvnfX1hK1ss7yCfxvhifL817bE1EHQPntysaLo9/2Ur3WLW77PoN14fpwsO7n8PvYAP78rRDd/DspRxpbaH9dgGUWCIQD2xzMGlX82//Cvfnr4if4sx8w5UqxVj5z4mtesz8gDYFTJk2+gZtqq9/d17//2BWTf+fNuoCpCTq5tln/6kuRubQ0ZJqJ7La87rSG59mtK3eiunkPEHesb6erYZ4xWzr41Ype5lHvODALmN60Jqj0zgeefejBAcCYjakGoIxE0HqXIGy2sk2n8PrnhfwhS9vLhqFR3KgS6d0AQ1sZABrhqSxGPgRUBjZWOtBz8dECUyCq5slBL5ZS43RcMTztx2SWUyvr6+tf//U2uQDxDnA7oFVyeyaN7XKP//t+pcL9v/sQckN/7B5lf9xe5f9hOSDccemx0okTo8pXZI0bd8d+iFa6PKFaB8UvTivf02TLODtLaOGPKDN6sFIN60G5T8AHTupTYs9tfx+AtEkKWuhWx2D4q4gSbq/h7uzX9LKEBQ5B0sLvQzWU/fa9guNapUK2x6OAi1t572NFHBIQawNUl+WnWvWoAeCS38fsaqgKSpo0i3WvaBKMgcz/f//pRNrpq7tCdmrQvu0J2bvr/HlAriOa4rCnYo1f5Ouyt92jeZgSko5elPhGTCXv5q6KIjRFA6Sz2rmcc7rqwUrOc7CtgaC5I2+VesezLEDnMH9KyGVq3SReQ95TM/2YtL7Qui219YcYLoXV0XQAAAA=",D="data:image/webp;base64,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",f="/ReadJourney/assets/upTabletPng-35f5baec.png",Y="/ReadJourney/assets/upTabletPng@2x-541f6b70.png",H="data:image/webp;base64,UklGRngFAABXRUJQVlA4WAoAAAAQAAAAQwAARAAAQUxQSD8CAAABkC1JtmlbY3ufa9u2bdv2fbNt27Zt27Zt2/a9a7zMOdZas38gIiaAXPfGThHfT9jhtiffffxwuH4AKf4xVh/MATSM9e9LwcS+LOCXmVHi3ZfwjdggUbaKuCMI9ZVdjQRSzhL9qAKS4oOIx4IEH8h2+zBojexSDJCesuvxQCrLrsQBySE7GQkkpWyjBySLbBiBNhT9rQjiPSh6FAsk63fRJgIdyuJhIOleytpiBHayvD1GK7Y5CaLyaztXogDkesN2rfUJjEt3jR18MCi5WWmus7OvFxf0mJPqPjv+/970+Wu27t5/YM+m6e0L+d1IeZYN/bQwtg2vJN45NndnZEncYQsmDe7UrEaRnGkTxtrDJncVpDjASuv3hye3LrLRdz0azyYGTqmpzMgZVOGLSF+CqiZ/gazhpN7AwAe9qpi3cb6MjUnqjH9x7tUOaxoy8M/5MVSDkJhnqpZjcXrFHrDOijNgfRS3wdoonmL9TqF4C/VzBCnfIX0fH1a9BNpd1EfqW0B3k5L2IBBvC2pmI/0uo2mCxEM0qb4jTdUELiIN1VB/oF/FdLlf4Ez26DxzUV52D5Ew0k2IrVUjkTz3fRufLm/6aMDFFGQ3zTnNv8vzWhVPFiOQ55573MoWRet87Nnp2R2LxyFtqjU/XFtjjyhaqsgkD9e45NZWJ5yM2WDLB1emmEFEuYcffefYv3LGEEXJU7/f3J0nbz17/8PG9zEeg6SRW+x6/OW3xWz9+XJvVXaCjZ6netPmzZvVyhuDxABWUDggEgMAAFARAJ0BKkQARQA+gTaUSCcnkJ1sNvxQCAS1AxQAgKTA6azK3deTZ9Q+U2m6Ve3q8wH7Aesx6JfNd6iL0AP2A9Mz2NhyyWn/fQi7WYJSA8//3NSlbjIu0ht38tmw/XvHBksrUQM0b0erdFI/1XOjaybOHw05l5tHjmNC1vOZDCVdXqbzrG18kl6l8vpoXPSiJ3dS8AD+/PhQ/8mAIp8Yv/FBwJy7v8+0nHnQbtQrL3wHAf5ODq0zLJBL5JzENVsUe8snTkstmERxZciNTJv0Og4weB04VDlAGmbPy9suptrSQN9sJtz0LTUlJtYZ399rLzwooF7hZd/++mr1yPRv00+dvbQYTdjoyy1wLCavPeiiEHPqn4/aViXbGno/y7NV26RtvNJ8894HMhZ2D6FxUgBZAfjW/27dynu8D+2xu0PIoVK93/HjnoF+Z6qYpljPI+FVJ//G+rZ932Fx5VDPLQNDFuu//zP/asUDKE+xmpKSjtZIh4WSmVzRS57EwtN3cEv9F3xIq8X+ZsPOnHJinSQK/SCi354/6YQm8F55ilZOWiJS8JpT9pWwq3NHkPAYNXWfNJATjFCaE5snAVPjfIxlil0b41REfglnUIW24k1vSa/OxlsL1hNtcJMuuimmpTEhfSetjnPpyN/7u9ODu3PJzkDDwaYYz1EavgLWJ9PZ2MhW4McZvUahACFwPpA0eGJ+1ufardJwkS7vrCDwinb/4qs/KqAG6KLmdylhIcikdn316pOT0vM2oXhGXy/b3IdlBKubpzwIe+HVcmq7ZPf9/Ap8eboGxAW4gYy/Uqms1URJV8y9PLSZXD1shvtxsgPE073SWKsJrZDCo3LHXuSDr1uW7018Xbwo1PmZ/ngrL+t5FTexqP//w6pJCD++SjL02918i7dV74w+puXLkfnAC6tZwX8838l0bmD554AuF/yQsAK/eHG857inueLF3eaBegyjZ3duHv74JiWJGE3SFsUn/wqiiksfolkXFlC3fq7o1k2DWEoc09FTiHzbsrdq5/5BsJEs6D5wDSVQAAAAAA==",P="data:image/webp;base64,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",X=()=>e.jsxs(z,{children:[e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",media:"(min-width: 768px)",srcSet:`${H} 1x, ${P} 2x`}),e.jsx("source",{type:"image/png",media:"(min-width: 768px)",srcSet:`${f} 1x, ${Y} 2x`}),e.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${N} 1x, ${D} 2x`}),e.jsx("source",{type:"image/png",media:"(max-width: 767px)",srcSet:`${T} 1x, ${q} 2x`})]}),e.jsx("img",{srcSet:f,alt:"Thumbs up",className:"imgBook"}),e.jsx("h2",{className:"titleBook",children:"Good job"}),e.jsxs("p",{className:"desc",children:["Your book is now in ",e.jsx("span",{className:"fillWord",children:"the library!"})," The joy knows no bounds and now you can start your training"]})]}),Z=()=>{const[t,i]=r.useState(""),[s,a]=r.useState(""),[A,l]=r.useState(""),[x,o]=r.useState(!1),d=c(),h=p=>{i(p.target.value)},w=p=>{a(p.target.value)},y=p=>{l(p.target.value)},Q=p=>{p.preventDefault(),(t||s||A)&&(d(L({title:t,author:s,totalPages:A})),o(!0))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(I,{text:"Filters:"}),e.jsxs(J,{onSubmit:Q,children:[e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"Book title:"}),e.jsx("input",{className:"inptForm",type:"text",placeholder:"I See You Are Interested In The Dark",value:t,onChange:h,required:!0})]}),e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"The author:"}),e.jsx("input",{className:"inptForm inptFormSecond",type:"text",placeholder:"Hilarion Pavlyuk",value:s,onChange:w,required:!0})]}),e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"Number of pages:"}),e.jsx("input",{className:"inptForm inptFormThird",type:"text",placeholder:"664",value:A,onChange:y,required:!0})]}),e.jsx(v,{text:"Add book"})]})]}),x&&e.jsx(j,{maxwidth:"342px",body:e.jsx(X,{}),setIsShowModal:o})]})},O=n.div`
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
    flex-direction: row;
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

  .item {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  .imgBook {
    border-radius: 8px;
    width: 71px;
    height: 107px;
    border-radius: 8px;
    width: 71px;
    height: 107px;
  }

  .titleBook {
    font-weight: 700;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    max-width: 71px;
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

    .linkWrapper {
      margin-top: 26px;
    }
  }

  @media (min-width: 1280px) {
    .titleBook {
      max-width: 71px;
    }
  }
`,V=()=>{const t=c(),i=b(W),{books:{results:s}}=i,a={title:"",author:"",page:1,per_page:3};return r.useEffect(()=>{t(k(a))},[t]),e.jsxs(O,{children:[e.jsx("h2",{className:"title",children:"Recommended books"}),e.jsx("ul",{className:"listItem",children:s.map(({imageUrl:A,title:l,author:x,_id:o})=>e.jsxs("li",{className:"item",children:[e.jsx("img",{srcSet:A,alt:l,className:"imgBook"}),e.jsx("h2",{className:"titleBook",children:l}),e.jsx("p",{className:"author",children:x})]},o))}),e.jsxs("div",{className:"linkWrapper",children:[e.jsx(g,{className:"libraryLink ",to:"/recommended",children:"Home"}),e.jsx(g,{to:"/recommended",children:e.jsx("button",{className:"arrowBtn",children:e.jsx("svg",{className:"arrowIcon",children:e.jsx("use",{href:m+"#icon-arrow"})})})})]})]})},K=["Unread","In progress","Done"],$=n.form`
  .labelWrapper {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  select {
    border: 1px solid #3e3e3e;
    border-radius: 12px;
    padding: 12px 14px;
    background-color: transparent;
    width: 120px;
    appearance: none;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  option {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #686868;
    background-color: #262626;
  }

  @media (min-width: 768px) {
    select {
      padding: 14px;
      font-size: 14px;
      line-height: 1.29;
    }
  }

  @media (min-width: 1280px) {
    select {
      width: 153px;
    }
  }
`,_=n.div`
  .btnWrapper {
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 11px;
    right: 15px;
  }
  .iconChevron {
    pointer-events: none;
    stroke: #f9f9f9;
    fill: transparent;
    width: 16px;
    height: 16px;
  }
  .statusChevron {
    transition: transform 250ms cubic-bezier(0, 0.91, 1, 0.56);
  }

  .statusChevron {
    transform: ${t=>t.$statusClick?"rotate(180deg)":"none"};
  }
`,ee=({books:t,setFilteredBooks:i})=>{const[s,a]=r.useState(""),[A,l]=r.useState(null);r.useEffect(()=>{let o=t;s==="All books"||!s?o=t:o=o.filter(d=>{const h=s.trim().replace(/\s+/g,"-");return a(h),d.status.toLowerCase()===h.toLowerCase()}),i(o)},[s,t,i]);const x=({target:{value:o}})=>{a(o),l(!1)};return e.jsx($,{className:"formWrapper",children:e.jsxs("div",{className:"labelWrapper wrapper",children:[e.jsxs("select",{onFocus:()=>l(!0),onBlur:()=>l(!1),onChange:x,id:"status",value:s,children:[e.jsx("option",{value:"All books",defaultValue:!0,children:"All books"},"default"),K.map(o=>{const d=U();return e.jsx("option",{value:o,children:o},d)})]}),e.jsx(_,{$statusClick:A,children:e.jsx("button",{type:"button",className:"btnWrapper",children:e.jsx("svg",{className:"iconChevron statusChevron",children:e.jsx("use",{href:m+"#icon-chevron-down"})})})})]})})},te=n.section`
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 40px 20px;

  .flexWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .imgWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 49px;
  }

  .libImg {
    padding: 25px;
    border-radius: 100%;
    background-color: #262626;
    margin-bottom: 10px;
  }

  .desc {
    max-width: 197px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .textFill {
    color: #686868;
  }

  @media (min-width: 768px) {
    .flexWrapper {
      margin-bottom: 86px;
    }
    .libImg {
      margin-bottom: 20px;
    }

    .desc {
      max-width: 274px;
    }
  }

  @media (min-width: 1280px) {
    margin-top: 16px;
    width: 847px;

    .flexWrapper {
      margin-bottom: 147px;
    }
  }
`,se="/ReadJourney/assets/booksMob-9778bda0.png",ie="/ReadJourney/assets/booksMob@2x-05705aad.png",oe="data:image/webp;base64,UklGRgAEAABXRUJQVlA4WAoAAAAQAAAAMgAAMgAAQUxQSI4BAAABkAQAkCE5tTjb5ty+zjail23btp28rJf1tG3btm0nXeFUV0XfiJgA+JtbgiqM3TAmVI5fuYGLL31GRHzW3c7nEprfds75D2j2TG07h4ujybQdjxWSP67IsGiKTu5y5APq/jLd0LPyHbLe6e+l4yRyX6lloV1mQ9xaZJGHz+dEEnZIQHw6JMhU0XMRiFfq2k1A4VMZqA4kmYCCmzKebKpiBoofiBgGxFIRWZSQLxISzPTObTxrl5JQZiLqHUq918n1F/ko98t8t59VEvN+94Qc+HkFEeregvqGK/za+CCh2AbEaRL6AjXxjYCzXhSYKEC1JBlP+HCvMwXGCvhUQAq4yIdLLBToy/f+UjjJ5QLbmRSgt2HDPWE060k2POZLgsqKDXe5kDzW8Z1KIEHJO64XXkC3LuW6BjrTXjHd1AILmV65aIl5yaOGaYEJPHjXTUvAM13q+ZHZXcqHgt7hGt4cmz+kusMOjP6nfqXe3zu8bFQthzvwN8B3bz48Obd0WOPsIAsItQ4qjTb87fD/DFZQOCBMAgAA8AsAnQEqMwAzAD6dPpdIpimsorAYDPiwE4lqAMHAQc8kZf2v57TTAPQA6WklYPlIRQC2ZwrUcOj7deEwIswGT0Ne8YSaSUFNw/9rVaV5n/3SinJmBXpUrFv9AJYrHiONyrrp3ec+IgAA/RK8X59pK1vjJ9bdYqcoTeMe2ei+UfB0+v9ENyiiRF9GvJrYYKRhhbc+HYfcKrBSJDU+fCKTAVS6o9DHpJSNiYhARNrcK6AL5db92utCbjJ/um+3xiyaOkhzA0A92cEtunXkQNMYLxMqdcwq/jBT3LYWUCYtZaf/rzHhA/jkC1LqgMEuCnhwZNThEo7i2ZbLPTJ1fOzBfrVLey/F1UJZqqWKE4NZO6agxycaa3n/OaRzmnvcwnudI13XFPkt7oyCRWMWkg0x2kwGt0D2PweB6qd69gdENIQn71NRBKGZIzFchoZfqY8o+ypsQzWFpUPFhOMXQ9qg7gzZ4GxqZodiN9qIQXnZyoWuHaTNY09DzjsKp1eqeY9CRUZ+5Ynej3jaS9PrfyEJGuS8kyuuHJflG64pJg1m9Hp70/jR/8mIejz1ySz2zOaV1tAUgiTcegL6rYLSVHTDZzFkQTx+eh/BnHv3yB6TP60ZqkMNJs9gpeXy9R+8O9+bTjd24JouhYFhJJwO8i8/hZykqhLhIp9iWDF2qyGs6oaP3YEHe//W+z6Mrm0FwWRYR/Hx90j+ndD8UFf3Iz90lTGYolfu9hKBfPeuftxf7MaWLzMoRHeWx1ylA0ff+hlIeQIOGz2ySPoEAAAA",ae="data:image/webp;base64,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",u="/ReadJourney/assets/booksTab-65971bb4.png",re="/ReadJourney/assets/booksTab@2x-834ea577.png",ne="data:image/webp;base64,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",le="data:image/webp;base64,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",Ae=t=>t.library.libraryBooks,pe=n.li`
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
    max-width: 95px;
    margin-bottom: 2px;
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

  .textWrapper {
    position: relative;
  }

  .btnWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    padding: 7px;
    border: 1px solid rgba(232, 80, 80, 0.1);
    border-radius: 50%;
    background-color: transparent;
  }

  .iconTrash {
    width: 14px;
    height: 14px;
    fill: none;
    stroke: #e85050;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-basis: calc((100% - 75px) / 4);

    .titleBook {
      max-width: 89px;
    }
    .btnWrapper {
      top: 0;
      right: 10px;
    }
  }
  @media (min-width: 1280px) {
    flex-wrap: wrap;
    flex-basis: calc((100% - 80px) / 5);
  }
`,xe=({id:t})=>{const i=c(),s=()=>{i(B(t))};return e.jsx(G,{className:"btnAdd",to:"/reading",onClick:s(),children:"Start reading"})},de=({book:t})=>{const[i,s]=r.useState(!1),a=c();return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{children:[e.jsx("img",{srcSet:t==null?void 0:t.imageUrl,alt:t.title,className:"imgBook",onClick:()=>s(!0)}),e.jsxs("div",{className:"textWrapper",children:[e.jsx("h2",{className:"titleBook",children:t.title}),e.jsx("p",{className:"author",children:t.author}),e.jsx("button",{type:"button",className:"btnWrapper",onClick:()=>a(S(t._id)),children:e.jsx("svg",{className:"iconTrash",children:e.jsx("use",{href:m+"#icon-trash"})})})]})]}),i&&e.jsx(j,{body:e.jsx(M,{book:t,btn:e.jsx(xe,{id:t._id})}),setIsShowModal:s})]})},ce=n.ul`
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
`,he=({results:t})=>e.jsx(ce,{children:t==null?void 0:t.map(i=>e.jsx(de,{book:i},i._id))}),me=()=>{const[t,i]=r.useState(null),s=b(Ae),a=c();return r.useEffect(()=>{a(C())},[a]),e.jsxs(te,{children:[e.jsxs("div",{className:"flexWrapper",children:[e.jsx(E,{title:"My Library"}),e.jsx(ee,{books:s,setFilteredBooks:i})]}),e.jsx(he,{results:t||s}),s.length===0&&e.jsxs("div",{className:"imgWrapper",children:[e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",media:"(min-width: 768px)",srcSet:`${ne} 1x, ${le} 2x`}),e.jsx("source",{type:"image/png",media:"(min-width: 768px)",srcSet:`${u} 1x, ${re} 2x`}),e.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${oe} 1x, ${ae} 2x`}),e.jsx("source",{type:"image/png",media:"(max-width: 767px)",srcSet:`${se} 1x, ${ie} 2x`}),e.jsx("img",{className:"libImg",srcSet:u,alt:"Iphone"})]}),e.jsxs("p",{className:"desc",children:[e.jsx("span",{className:"textFill",children:"To start training, add"})," some of your books"," ",e.jsx("span",{className:"textFill",children:"or from the recommended ones"})]})]})]})},je=()=>e.jsxs(F,{children:[e.jsxs(R,{children:[e.jsx(Z,{}),e.jsx(V,{})]}),e.jsx(me,{})]});export{je as default};
