import{p as d,r as n,u as h,j as e,d as g,a as j,L as u,s as A,n as y,g as w,e as k,f as W}from"./index-293646f1.js";import{T as L,B,s as T,L as Q,b as S,D as N}from"./booksSelectors-ebe8089e.js";import{M as I,a as v}from"./ModalBody-fa169b13.js";const H=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`,M=d.form`
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
`,E=()=>{const[t,r]=n.useState(""),[s,i]=n.useState(""),[l,a]=n.useState(""),p=h(),o=c=>{r(c.target.value)},x=c=>{i(c.target.value)},m=c=>{a(c.target.value)},b=c=>{c.preventDefault(),(t||s||l)&&p()};return e.jsxs("div",{children:[e.jsx(L,{text:"Filters:"}),e.jsxs(M,{onSubmit:b,children:[e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"Book title:"}),e.jsx("input",{className:"inptForm",type:"text",placeholder:"I See You Are Interested In The Dark",value:t,onChange:o,required:!0})]}),e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"The author:"}),e.jsx("input",{className:"inptForm inptFormSecond",type:"text",placeholder:"Hilarion Pavlyuk",value:s,onChange:x,required:!0})]}),e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"Number of pages:"}),e.jsx("input",{className:"inptForm inptFormThird",type:"text",placeholder:"664",value:l,onChange:m,required:!0})]}),e.jsx(B,{text:"Add book"})]})]})},J=d.div`
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
`,q=()=>{const t=h(),r=g(T),{books:{results:s}}=r,i={title:"",author:"",page:1,per_page:3};return n.useEffect(()=>{t(j(i))},[t]),e.jsxs(J,{children:[e.jsx("h2",{className:"title",children:"Recommended books"}),e.jsx("ul",{className:"listItem",children:s.map(({imageUrl:l,title:a,author:p,_id:o})=>e.jsxs("li",{className:"item",children:[e.jsx("img",{srcSet:l,alt:a,className:"imgBook"}),e.jsx("h2",{className:"titleBook",children:a}),e.jsx("p",{className:"author",children:p})]},o))}),e.jsxs("div",{className:"linkWrapper",children:[e.jsx(u,{className:"libraryLink ",to:"/recommended",children:"Home"}),e.jsx(u,{to:"/recommended",children:e.jsx("button",{className:"arrowBtn",children:e.jsx("svg",{className:"arrowIcon",children:e.jsx("use",{href:A+"#icon-arrow"})})})})]})]})},P=["Unread","In progress","Done"],C=d.form`
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
`,U=d.div`
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
`,z=({books:t,setFilteredBooks:r})=>{const[s,i]=n.useState(""),[l,a]=n.useState(null);n.useEffect(()=>{let o=t;s==="All books"||!s?o=t:o=o.filter(x=>{const m=s.trim().replace(/\s+/g,"-");return i(m),x.status.toLowerCase()===m.toLowerCase()}),r(o)},[s,t,r]);const p=({target:{value:o}})=>{i(o),a(!1)};return e.jsx(C,{className:"formWrapper",children:e.jsxs("div",{className:"labelWrapper wrapper",children:[e.jsxs("select",{onFocus:()=>a(!0),onBlur:()=>a(!1),onChange:p,id:"status",value:s,children:[e.jsx("option",{value:"All books",defaultValue:!0,children:"All books"},"default"),P.map(o=>{const x=y();return e.jsx("option",{value:o,children:o},x)})]}),e.jsx(U,{$statusClick:l,children:e.jsx("button",{type:"button",className:"btnWrapper",children:e.jsx("svg",{className:"iconChevron statusChevron",children:e.jsx("use",{href:A+"#icon-chevron-down"})})})})]})})},D=d.section`
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
`,X="/ReadJourney/assets/booksMob-9778bda0.png",F="/ReadJourney/assets/booksMob@2x-05705aad.png",R="data:image/webp;base64,UklGRgAEAABXRUJQVlA4WAoAAAAQAAAAMgAAMgAAQUxQSI4BAAABkAQAkCE5tTjb5ty+zjail23btp28rJf1tG3btm0nXeFUV0XfiJgA+JtbgiqM3TAmVI5fuYGLL31GRHzW3c7nEprfds75D2j2TG07h4ujybQdjxWSP67IsGiKTu5y5APq/jLd0LPyHbLe6e+l4yRyX6lloV1mQ9xaZJGHz+dEEnZIQHw6JMhU0XMRiFfq2k1A4VMZqA4kmYCCmzKebKpiBoofiBgGxFIRWZSQLxISzPTObTxrl5JQZiLqHUq918n1F/ko98t8t59VEvN+94Qc+HkFEeregvqGK/za+CCh2AbEaRL6AjXxjYCzXhSYKEC1JBlP+HCvMwXGCvhUQAq4yIdLLBToy/f+UjjJ5QLbmRSgt2HDPWE060k2POZLgsqKDXe5kDzW8Z1KIEHJO64XXkC3LuW6BjrTXjHd1AILmV65aIl5yaOGaYEJPHjXTUvAM13q+ZHZXcqHgt7hGt4cmz+kusMOjP6nfqXe3zu8bFQthzvwN8B3bz48Obd0WOPsIAsItQ4qjTb87fD/DFZQOCBMAgAA8AsAnQEqMwAzAD6dPpdIpimsorAYDPiwE4lqAMHAQc8kZf2v57TTAPQA6WklYPlIRQC2ZwrUcOj7deEwIswGT0Ne8YSaSUFNw/9rVaV5n/3SinJmBXpUrFv9AJYrHiONyrrp3ec+IgAA/RK8X59pK1vjJ9bdYqcoTeMe2ei+UfB0+v9ENyiiRF9GvJrYYKRhhbc+HYfcKrBSJDU+fCKTAVS6o9DHpJSNiYhARNrcK6AL5db92utCbjJ/um+3xiyaOkhzA0A92cEtunXkQNMYLxMqdcwq/jBT3LYWUCYtZaf/rzHhA/jkC1LqgMEuCnhwZNThEo7i2ZbLPTJ1fOzBfrVLey/F1UJZqqWKE4NZO6agxycaa3n/OaRzmnvcwnudI13XFPkt7oyCRWMWkg0x2kwGt0D2PweB6qd69gdENIQn71NRBKGZIzFchoZfqY8o+ypsQzWFpUPFhOMXQ9qg7gzZ4GxqZodiN9qIQXnZyoWuHaTNY09DzjsKp1eqeY9CRUZ+5Ynej3jaS9PrfyEJGuS8kyuuHJflG64pJg1m9Hp70/jR/8mIejz1ySz2zOaV1tAUgiTcegL6rYLSVHTDZzFkQTx+eh/BnHv3yB6TP60ZqkMNJs9gpeXy9R+8O9+bTjd24JouhYFhJJwO8i8/hZykqhLhIp9iWDF2qyGs6oaP3YEHe//W+z6Mrm0FwWRYR/Hx90j+ndD8UFf3Iz90lTGYolfu9hKBfPeuftxf7MaWLzMoRHeWx1ylA0ff+hlIeQIOGz2ySPoEAAAA",Y="data:image/webp;base64,UklGRn4JAABXRUJQVlA4WAoAAAAQAAAAZAAAZAAAQUxQSMMDAAABoEXbtilJOi/DEWmrbNu2bdu2bdu2bdu2kShXpSqDL+Kdrx757r2n/RMREwD/Amt8s9Yds7hnlBdhprwNJx988MmJv09XN1BkiCrWZPahd078Y9eFCjpKNOaAbDVHbL4bl+LBNH5clduLCFO2aoM2XPsso7rKx5HRomkCs5Ttv/pKXKJLQYby43YRAllytpp2/PFPD3JoPVnWSwRd+trjD71zIsf2LaW8uDJqJUvhqfcT3Mi5+934zBp+/Gb1arjpp4IiKo+7BXDT0upIdaOo1pP1ffnQzXCj0Amrc3Fh2qSIhZg0L5vEzrIPhXfd6+/PzPe4eIies42MjPzOUIBKyu7SZjanSEDET3NDWPgcpQLxw4hISTXLdjow5WJTf7U0Ax10IKYeKqpVB8LPyISgEjc/j14VyHOJEkT38x7+qkD4eQ8liMqz5hY1IP9BDymIP7b4qwGZjrtpcV5JpwqkO+KgQ741vVq0pA5k2E9HTF5g6LNLJsJz0JsFZNpKhDxawwRaEZFSX2JTR6YhtQ6wLWmlIamGOhkKakCXrlqfBYdkGmztJDUs615NGbLs3k8nUulaGySpUO4zUus6VEmFLk5yEBMmZJPSMhoplm+W8UrDLJLQtdachsX0KNaEWzOzA22Ol7t6l/KGNC8iRLF9ODWpSjqLBCrOJsPxek2HggESqNzfTUPSyAJGYFnkDQ2JzYCtfqpMgnLUhw1kf0MCJpdjBLMUEnC+llGGRzTEFGCkHaKQ4BzPCAJfkYCvfRlBXysJSluJUeRVEvCAHyNoaCPhVw1WYSdIwC0aRlLtZBLi8zECw36FAtcEIyOo+o0CvBvMyrRMPPeTJyfDWUHhJOE847JFAvslsmiY0MuLgyIvhMOfXc3stOPEw+/12UHkI/EwsRM7wwC7ePilHjMIuUsAfmrIDHqnEIDvSkusQs9T4BquYQVV7eId7OIDzI1HhPuVGXis9U20+xoufNaIdgj4LPZTsH2c6OfLYh3jBPLHiHVa4gRmeoR6rOUl5wOhvobwohkqlGeQnhPwfSQSpo7QcgI9bSLh64y8hJ0VKXGFNy9SA6sAipwU82D/1A4FA4Bb/xOcKa6Yy+uG1S+cziQB1xV/cKI4vjw9s2pg7dwWCUQ0bvMwUlzWhJgbWya1KZE5yCiBsKVjGSjWD1d2jm9VNqMZhNdPV0NxfH97c+uk1qXSBVg0EpCY7nMalIQnh2Z3r5g3zAC09neg581zu/Xr66s7J7YuHaYDksOXJ5woka9xvVI5w300QLdvWT/4fyAAVlA4IJQFAABwHgCdASplAGUAPp1GnkskKiemp9FbcLATiWQAy2DfyjyqMj469hD1WbdPzDfsl+1Xvg+jr/a+aT1mHoNdMV5Ud44fm5Gyv8iBsoZYl35PnfQA/SUxdhBl8gDqSa1aV2/f5E/3dwu12yYYmrmIq2XF9DAkmWyY7LZMqYeM/pEXBUVMTW/i5hTiimRl+p9x5A58aCDJak/Eg057rBeITiU7mxtXDZHt7RkwYwCPzYL3mgncb/6cd0fSxFVA/KlkJ8xPbTsikwXhkJQ+/XrK27q+7WmFP6LHqPJZkJxnR0X4QtC1EWCLFcQQRbdexEsaS+/U/himqcjg0WHl5AAA/v4TD3HCcEA5qruz7MB+R7QsD2v/sa0uLZSe3F4u1twUhRHbo3/NhhnP+pFT19+6M/K3/3iCOyqN4vJZaytSN1Ikw/rIEAoWA7nG1e0Tnjdm4OBfPrKdgL17PURxh34QlJqIn/8vTP/7HSZ65zZlxv4wqtT9t0GmnB0X8i1LZ5QMm/4zoED+0BGbSmafLG1r6BCbP/cGsYWZciRH7Gcyx1Bpse3fIuY3xuQtjg4WhCANLgDq366HK2pHUClXzKdmN0+YXJTwD4fxVJqlgANz4OANk68jyiMof/qx01GXyJ2OE0k5mU+3x4Tw4cpKqnwrENgyjCK1h3LG2oPvleg3WnB3F9G/xMjaVlrQcxxdstbHFZrJv3yoAkPqJdy52+VNrAwSL2uF+JuRSfsazCZLJSoyHIlNxM4Y6A38imx0vmNn4NI2NGQ2AQB+iOwn+PW8g8KHpMZ1RcaXn/QRqeztYqfnIfbjJOmFZX071nrzGgmogMQqbI6IIYEWBdtPitvdZxHlipVG9rr8GCXM61iy317jGy1DsShmJEvj37DsE1dI/9eS/XGQVTsqYdr5t2u8RzkYS76Jp8R4dPMfVpr1oRAJiWF7oPW0jgiiUvUl5H2K4G8cMOMv7pZrB1kR4Gu6KtG4qBTmZQfWVIQrYr0qdmM0aEHqB44atuPPTdlW/JqO9yBn/Ap5rYtvhBi6QFq0urm94tHu5yFgXk7Ezs0dn6dEe+uBcoxEa+MEwD6Tjq3UnIaLuvtT5V2Yn0rV83DJCDEI+PbzTHyx5IWAeZJ/biuU07mOAvDxoxMobgqiHw8kXrjTxLMuA7s2IQq17OKUMJBpXjKVLt8m/RtBghjAmYbltr6fTDXgFM1o5DeCkXuoul8RAcfdQoRFwJtjFcY/75IM4pyrNkXqA3JtDT8sLPa3r8+SiqU1lhnEE0+NEhHETi6HCXQ9lDjbZEWubo6e5Wl99u6tVG/++oEImS02Js9WIGk2qIB9uao5kHKztujUx1XJTt203dwbUU4KY43Bq9pL/3Ukvt9ySZrtDfCCU7MACFB3NqAssVJTohVf1EIZyapRHbHUBHiizSZgEgr85aiDenvWIUSN6c/WX2iOmPiAwALx1mPL5DIu+bMImE2BXQFW9VM79ysxsDd84MKYw1M03HkXQhfnfWQ/sdZbjcuJZqsbK3oMBdzbH/001l6aAVL7mPyAh8RYD+TJV8fbZfe2AfWwVhos38QM3VZM71fZVcQfj//QYOFQq5uuuTB5uYXzilcycySBBPclGNg6PHCJwE2zOXBBqVHFoG4SZzem1+11oLtsMVvhNU672gko6qEWB2jkd6WNxomW7dG3X1MhT2a4ya9+lHhcLES7N2e1HTTWRHXmhNVQ73OXsrxOw69WPWgtBNtetvIkHLxPglhYnoLzy/3PhT7ASUD/pwASkTj72wltvPG+WvsNxy5zudy2RzhyqbHXe5295UmNKO3ufOAWR7nj5MuNlPuoYeBkhQZDMEjZnR+6941EvxYoBv37FZEF53OejzjmXw1wwDfG3+b/TEEOVfeu/wvAAAAAAAAAAAA=",f="/ReadJourney/assets/booksTab-65971bb4.png",G="/ReadJourney/assets/booksTab@2x-834ea577.png",O="data:image/webp;base64,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",V="data:image/webp;base64,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",Z=t=>t.library.libraryBooks,K=d.li`
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
`,$=({id:t})=>{const r=h(),s=()=>{r(w(t))};return e.jsx(Q,{className:"btnAdd",to:"/reading",onClick:s(),children:"Start reading"})},_=({book:t})=>{const[r,s]=n.useState(!1),{imageUrl:i,title:l,author:a,_id:p}=t,o=h();return e.jsxs(e.Fragment,{children:[e.jsxs(K,{children:[e.jsx("img",{srcSet:i,alt:l,className:"imgBook",onClick:()=>s(!0)}),e.jsxs("div",{className:"textWrapper",children:[e.jsx("h2",{className:"titleBook",children:l}),e.jsx("p",{className:"author",children:a}),e.jsx("button",{type:"button",className:"btnWrapper",onClick:()=>o(k(p)),children:e.jsx("svg",{className:"iconTrash",children:e.jsx("use",{href:A+"#icon-trash"})})})]})]}),r&&e.jsx(I,{body:e.jsx(v,{book:t,btn:e.jsx($,{id:p})}),setIsShowModal:s})]})},ee=d.ul`
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
`,te=({results:t})=>e.jsx(ee,{children:t==null?void 0:t.map(r=>e.jsx(_,{book:r},r._id))}),se=()=>{const[t,r]=n.useState(null),s=h(),i=g(Z);return n.useEffect(()=>{s(W())},[s]),e.jsxs(D,{children:[e.jsxs("div",{className:"flexWrapper",children:[e.jsx(S,{title:"My Library"}),e.jsx(z,{books:i,setFilteredBooks:r})]}),e.jsx(te,{results:t||i}),i.length===0&&e.jsxs("div",{className:"imgWrapper",children:[e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",media:"(min-width: 768px)",srcSet:`${O} 1x, ${V} 2x`}),e.jsx("source",{type:"image/png",media:"(min-width: 768px)",srcSet:`${f} 1x, ${G} 2x`}),e.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${R} 1x, ${Y} 2x`}),e.jsx("source",{type:"image/png",media:"(max-width: 767px)",srcSet:`${X} 1x, ${F} 2x`}),e.jsx("img",{className:"libImg",srcSet:f,alt:"Iphone"})]}),e.jsxs("p",{className:"desc",children:[e.jsx("span",{className:"textFill",children:"To start training, add"})," some of your books"," ",e.jsx("span",{className:"textFill",children:"or from the recommended ones"})]})]})]})},ae=()=>e.jsxs(H,{children:[e.jsxs(N,{children:[e.jsx(E,{}),e.jsx(q,{})]}),e.jsx(se,{})]});export{ae as default};
