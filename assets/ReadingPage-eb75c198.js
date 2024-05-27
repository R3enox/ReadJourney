import{p,j as e,d as u,k as w,u as R,s as b,l as F,r as f,t as j,m as S,o as V,q as C}from"./index-2099c76c.js";import{T as N,B as v,M,b as W,D as H}from"./Title-96cd2c0b.js";import{b as D,a as Q,c as k,d as O}from"./book@2x-d623c287.js";const P=p.form`
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
    width: 295px;
    background-color: #262626;
    border-color: transparent;
    border: none;
    border-radius: 12px;
    padding: 14px 0 14px 99px;
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

  @media (min-width: 768px) {
    .inptForm {
      min-width: 295px;
      font-size: 14px;
      line-height: 1.29;
      padding: 14px 0 16px 111px;
    }

    .desc {
      font-size: 14px;
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
`,L=({startStop:t,page:n,setPage:s,handleSubmit:a})=>{const r=({target:{value:o}})=>{s(o)};return e.jsxs("div",{children:[e.jsx(N,{text:"Start page:"}),e.jsxs(P,{onSubmit:a,children:[e.jsxs("div",{className:"inptWrapper",children:[e.jsx("p",{className:"desc",children:"Page number:"}),e.jsx("input",{className:"inptForm",type:"text",placeholder:"0",value:n,onChange:r,required:!0})]}),t?e.jsx(v,{text:"To start"}):e.jsx(v,{text:"To stop"})]})]})},U=p.div`
  margin-top: 20px;

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: #686868;
    margin-bottom: 20px;
    max-width: 305px;
  }

  .starImg {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 80px;
    height: 80px;
    padding: 24px;
    border: none;
    border-radius: 100%;
    background-color: #262626;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    .title {
      font-size: 20px;
    }
    .desc {
      margin-bottom: 50px;
    }
    .starImg {
      width: 100px;
      height: 100px;
      padding: 25px;
      margin-bottom: 52px;
    }
  }
`,T="data:image/png;base64,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",z="/ReadJourney/assets/starMob@2x-39957138.png",K="data:image/webp;base64,UklGRhIDAABXRUJQVlA4WAoAAAAQAAAAHwAAIAAAQUxQSHwBAAABkHNt2yHJ2u+vata2zciRbZuRbdv2bmTbTG3btm3WE9TXVV0bERPA/5oirSXvie2uJWuYQhdOWfZK/X1F/qxKHsTt/E0qDRT9J132jZAuFgvQTZLGAFMlqRqYE5J+FoqVbZ+kU5D0tm8hFPGkn1NMLNxxnv7morr8H1PSSXreiOBVn6shGy3qyjIdyErYtN0zZP9mO0iZloaQxkmSPO1g2b3amVInTzAxMs/cf/n+y4+/PQX/9/3dw2sHuwPtFWlhKPYzikepgPLP43c5D/78Z+LkLUmKPemKuHwdStBeXrjnNbEbP1XfhrmRC7vjWpkappFxXL8xFsOBMFMJ5Bgy/QhzGBwfuK4D1FHYn2nBuK4DxgAsCKXmAI7Bbk7bfq89E2OOL2Cev5brVXHav7OcDNFIkj5MSMSUoWRf7vuVOthA6d/eXFDo74dUUPGqpFLBKrw9VA9guNQJSGh/43SqYLGPSTuIsuA/6VvqKDpIUrsoau7asX1r+SjiClZQOCBwAQAAUAgAnQEqIAAhAD6VPplIISYQmqwEAFgJRLYATpnMA5fZqYDgAbYC7AN4i/bgjbDEWCWFlHGOb+KQwBH8eNBcgWrKMmAwycAvtfBgAP737QlZDt2S8nCBOUeJvuWLzyZgIcuEVSkrT5Z/K53F90NOv/P9JVEVNZYcj9vz/12Rps42TWfJjUW/OEXJCMDVH1KzHrWViCHPpQzl4paAyG40pjLfO7x6f2kb/3PqCqDg0jVNOzt1rvf/LjnVQG9lhv2lgXFfIO/z7ldnh4gcApGIYiVo0ShnzQrTgC66mUb8SdkvV2gFuwXxF+749skBNU1oJBq3gIVJfk6juO1bxf8/8N11fnBCI9r7SmGNKSwdc3iKRA70tNEBzv1cLG0bhg2B5xC9QH9l54vzfM+jD8kUKnZ8pz0cUtac64ZU8qYeep5GCXn/H8HPQ6rbdi1xnpQDYxb/cjCCzaGeO+LjvRCQTBMbxdLRv+4ktUdg++0AAAA=",X="data:image/webp;base64,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",I="data:image/png;base64,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",J="/ReadJourney/assets/starTablet@2x-15bf33bd.png",Y="data:image/webp;base64,UklGRkYFAABXRUJQVlA4WAoAAAAQAAAAMQAAMgAAQUxQSI4CAAABkHRrmyHJA3oji2Pbtm3btu2ZlWdrmzvbtm1b3WObFe8iIqOi8kxETAD+nyJ9Wm8EhcHM13F1DfzCWqv744VLf0k+T+WS7MbO9HZSzIrwZQZd4vMkOdalL/m8kWOh+HGSbKqrG1FuhzTiAMnfMwNR9f1CdZVuPVVZU5PpN9UTuaJIeZvazwmVZO81XOYoPagfGQWqvtSwqTKQ+k+Zld26tWmjQdbDUpkHwH/Ohb0AZH6jfB7rQ/SJpkiSdwRQSLqdF0AjSfJJM1gV7eLISFpgGt1lSWA0yU1ZYDvPzj8yK5I/NOA0YCK/9kmCGBavATT7Z/I2hMQtUiDWYgONO8Ky8IcTJU+VNkveEhVqNunzy+zqiJ5tG1QtlT9LmuRJEgTcRhy9Gffmw+fvP/9EJO3KyJ9f3z69e3F/YylNC0kP30yiTKCXf5RUyv/00p2UijPwq3fiKkPf8JFXzmSEe7aL3pifGqbJlsvYfeklYB4c8yVW8eURtWjxLjZnMsFm3guxWJocdjNukrb+DfPDVPjcBQK7LcmBgBCOq5EP/suWOBXCZyhgIJDpp62TgGMAN0cAnWj7VQbAcXEAoXEAYJm1SBMAjk4AUAQAJLxkjZOgaqBxoC34094FnwLHRQjoe9H+54waCEcohpvN4j4asbkuaifO5PfIDIVPSpOZlopJg33FAfhbxxucDtkZStcnHX0Idu8CpJjx3eVLdjtLdX+XZgTQKPIzL4BKR3WsbueQ5lhlqAfJyQAQHhanaWdnM8k3/ZJAzfiNvJcMatZFP0hZy07pCyeHhqEfQDLSTgMUmHNiTMiOsW8HSa5x8Wamd8qr5F5qTW09L63SzfHSQ925oIe6rV+7evWK5R3wvwRWUDggkgIAABAPAJ0BKjIAMwA+nUSbSagmqKmsFVwAsBOJbADBxFq9H8Bxy3IEadye4B/nfYRtrfNF+y3rcehXeAPQA8tD2P/3N/aokABh9VitQ4LjXoLD3GMuboFv3Qv5O+qzUSMmzgg363XVFjaDttFaumZnHgb2i1yMv6kixytaKjRGnHQoAAD+9wXdAMe9xZaE9vn0GYz+biUuCvxdLfu1PbfEbbWFbH94NjfLhZR2+Y7bBDZupB2sNxBP6Zk4d1jmTPl2gR35y/NDM7uiNZBL/zxGV5qL3fKhK64UR3WNNmey4oaYD7qBUVYPAlveRSky87RoACHa8m69PxvI3ouFRaj/ey7tHzR2lXqRXL91zqbLc+WaCcSu0zY/70M6JpNbou3JIcdAHeKlc8ByiJedBYN5sz3y9yFtE1Vz9+Idix5GL3vrTQ0+GqnlPPG6ClmWNbYAxyDR0iLyI4dRnXFeRW6XLfgS+rwGqWCH+Vfw4gOr3KxSt3Dtd0awnlIqP8Bsu9xkPUcpee8AUc0L9Q6dkemzzIEt1rRJo09cesMAWaCBMHeG9dEVh4t8m9+mnfIZh6ujWu3H2+lxl7SUzFbB2In/Gc0/ZZl9/5omouD93/n691m/L/eTUwfx/wKtd7W1i6aqcqiRru5rnR7SC5KtWY3ZGqWYATc7N6HmITsAdp+Ii7I3LcywH/9cIRwfHAe+r56176hyRrGtgyGe9Ryp6TF4EJHmIG6RBVimBKNDF0Tp3/8C4LKevvIBAreCtbCaRdVNZRqdxPF6WRUGY75G7nH/zmf//0Ok5A/zb59Npff82+fTH5jN/mcEMKU3vybHO1/72FmYObiUe6X01CyudmUVKdijeiAwFJcx/+wkGaRD4AAAAAA=",Z="data:image/webp;base64,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",G=p.div`
  background-color: #262626;
  border-radius: 12px;
  padding: 16px;
  overflow-y: auto;
  height: 211px;

  .statisticsList {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    border-left: 2px solid #1f1f1f;
    gap: 17px;
  }
  .datePageWrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .iconBW {
    left: -25px;
    position: absolute;
    width: 16px;
    height: 16px;
  }
  .date {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.02em;
  }

  .pageRead {
    margin-right: 24px;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  .percentageWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .totalReadInPercentage {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  .btnWrapper {
    border: none;
    background-color: transparent;
  }

  .svgWrapper {
    display: flex;
    gap: 6px;
  }
  .iconGraf {
    width: 44px;
    height: 18px;
  }
  .iconTrash {
    fill: none;
    stroke: #686868;
    width: 14px;
    height: 14px;
  }
  .minutesWrapper {
    display: flex;
    justify-content: space-between;
  }
  .differenceMinutes {
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }
  .speed {
    width: 43px;
    margin-right: 20px;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  @media (min-width: 768px) {
    height: 252px;
    width: 321px;
    padding: 16px 16px 31px 24px;

    .statisticsList {
      gap: 14px;
    }

    .iconBW {
      left: -27px;
      width: 20px;
      height: 20px;
    }
    .date {
      font-size: 16px;
      line-height: 1.12;
    }
    .pageRead {
      font-size: 14px;
      line-height: 1.29;
    }
    .totalReadInPercentage {
      font-size: 20px;
      line-height: 1;
    }
    .iconGraf {
      width: 59px;
      height: 24px;
    }
    .differenceMinutes {
      font-size: 12px;
      line-height: 1.17;
    }
    .speed {
      width: 55px;
      margin-right: 20px;
      font-size: 12px;
      line-height: 1.17;
    }
  }
`,q=()=>{const{totalPages:t,progress:n,_id:s}=u(w),a=R(),r=(o,i)=>{const l=new Date(o),g=new Date(i)-l,A=Math.floor(g/6e4),x=l.getDate(),c=l.getMonth()+1,m=l.getFullYear();return{formattedDate:`${x<10?"0"+x:x}.${c<10?"0"+c:c}.${m} `,differenceMinutes:A}};return e.jsx(e.Fragment,{children:e.jsx(G,{children:e.jsx("ul",{className:"statisticsList",children:n.slice().reverse().map(({_id:o,startReading:i,finishReading:l,startPage:d,finishPage:g,speed:A})=>{const x=new URLSearchParams({bookId:s,readingId:o}),{formattedDate:c,differenceMinutes:m}=r(i,l),h=g-d+1,B=(h*100/t).toFixed(1);return e.jsxs("li",{className:"listItem",children:[e.jsxs("div",{className:"datePageWrapper",children:[e.jsxs("svg",{className:"iconBW",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"16",height:"16",rx:"4",fill:"#F9F9F9"}),e.jsx("rect",{x:"4",y:"4",width:"8",height:"8",rx:"2",fill:"#141414"})]}),e.jsx("p",{className:"date",children:c}),e.jsxs("p",{className:"pageRead",children:[h," pages"]})]}),e.jsxs("div",{className:"percentageWrapper ",children:[e.jsxs("p",{className:"totalReadInPercentage",children:[B,"%"]}),e.jsxs("div",{className:"svgWrapper",children:[e.jsx("svg",{className:"iconGraf",children:e.jsx("use",{href:b+"#icon-graf"})}),e.jsx("button",{type:"button",className:"btnWrapper",onClick:()=>a(F(x)),children:e.jsx("svg",{className:"iconTrash",children:e.jsx("use",{href:b+"#icon-trash"})})})]})]}),e.jsxs("div",{className:"minutesWrapper",children:[e.jsxs("p",{className:"differenceMinutes",children:[m," minutes"]}),e.jsxs("p",{className:"speed",children:[A," pages per hour"]})]})]},o)})})})})},E=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #262626;
  padding: 20px 90px;

  .desc {
    display: none;
  }
  .circleWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .recWrapper {
    position: relative;
  }
  .icon-green-rec {
    position: absolute;
    top: 2px;
    left: -25px;
    width: 14px;
    height: 14px;
  }

  .totalAllRead {
    position: relative;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .pageTotal {
    font-size: 10px;
    line-height: 1, 2;
    letter-spacing: -0.02em;
    text-align: start;
    color: #686868;
  }

  @media (min-width: 768px) {
    width: 321px;
    padding: 28px 90px;

    .totalAllRead {
      font-size: 20px;
      line-height: 1;
      margin-bottom: 8px;
    }

    .pageTotal {
      font-size: 12px;
      line-height: 1.17;
    }
  }
  @media (min-width: 1280px) {
    height: 281px;
  }
`,$=p.svg`
  width: 116px;
  height: 116px;
  margin-bottom: 21px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,_=p.circle`
  fill: none;
  stroke: #1f1f1f;
  stroke-width: 10;
`,ee=p.circle`
  fill: none;
  stroke: #30b94d;
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dasharray 0.6s ease;
`,te=p.text`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  fill: #f9f9f9;
`,ie=p.div`
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
    max-width: 232px;
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
`,se=()=>e.jsxs(ie,{children:[e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${D} 1x, ${Q} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${k} 1x, ${O} 2x`})]}),e.jsx("img",{srcSet:k,alt:"Thumbs up",className:"imgBook"}),e.jsx("h2",{className:"titleBook",children:"The book is read"}),e.jsxs("p",{className:"desc",children:["It was an ",e.jsx("span",{className:"fillWord",children:"exciting journey"}),", where each page revealed new horizons, and the characters became inseparable friends."]})]}),ne=({getTotalPagesRead:t})=>{const[n,s]=f.useState(!1),{totalPages:a}=u(w),r=(t()*100/a).toFixed(2),o=Number((t()*100/a).toFixed(2).replace(/\.?0+$/,"")),i=53,l=2*Math.PI*i,d=l-r/100*l;return f.useEffect(()=>{o===100&&s(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsxs($,{children:[e.jsxs("g",{transform:`rotate(-90 ${i+5} ${i+5})`,children:[e.jsx(_,{cx:"58",cy:"58",r:i}),e.jsx(ee,{cx:"58",cy:"58",r:i,strokeDasharray:l,strokeDashoffset:d})]}),e.jsx(te,{x:"35%",y:"55%",children:"100%"})]}),e.jsxs("div",{className:"recWrapper",children:[e.jsxs("p",{className:"totalAllRead",children:[r,"%"]}),e.jsxs("svg",{className:"icon-green-rec",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"16",height:"16",rx:"4",fill:"#30b94d"}),e.jsx("rect",{x:"4",y:"4",width:"8",height:"8",rx:"2",fill:"#30b94d"})]})]}),e.jsxs("p",{className:"pageTotal",children:[t()," pages read"]})]}),n&&e.jsx(M,{maxwidth:"342px",body:e.jsx(se,{}),setIsShowModal:s})]})},re=({status:t,isProgress:n})=>{const{progress:s}=u(w),a=()=>{if(s.length===0)return 0;const r=s[0].startPage;return s[s.length-1].finishPage-r+1};return e.jsx(U,{children:n?e.jsxs("div",{className:"emptyWrapper",children:[e.jsx("h2",{className:"title",children:"Progress"}),e.jsx("p",{className:"desc",children:"Here you will see when and how much you read. To record, click on the red button above."}),e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",media:"(min-width: 768px)",srcSet:`${Y} 1x, ${Z} 2x`}),e.jsx("source",{type:"image/png",media:"(min-width: 768px)",srcSet:`${I} 1x, ${J} 2x`}),e.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${K} 1x, ${X} 2x`}),e.jsx("source",{type:"image/png",media:"(max-width: 767px)",srcSet:`${T} 1x, ${z} 2x`}),e.jsx("img",{className:"starImg",srcSet:I,alt:"Star"})]})]}):e.jsx(e.Fragment,{children:t?e.jsx(q,{getTotalPagesRead:a}):e.jsx(ne,{getTotalPagesRead:a})})})},ae=p.section`
  background-color: #1f1f1f;
  border-radius: 30px;
  padding: 40px 20px;

  .textTimerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .timer {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #686868;
  }
  .imgWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .imgBook {
    margin-top: 40px;
    border-radius: 8px;
    width: 137px;
    height: 208px;
  }

  .titleBook {
    margin-top: 10px;
    max-width: 146px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .author {
    margin-top: 5px;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #686868;
  }

  .btnIcon {
    border: none;
    background-color: transparent;
  }

  .iconCircle,
  .iconRectangle {
    margin-top: 16px;
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    padding: 40px 40px;
    .imgBook {
      margin-top: 32px;
      width: 169px;
      height: 256px;
    }
    .titleBook {
      margin-top: 25px;
      max-width: 317px;
      font-size: 20px;
      line-height: 1;
      text-align: center;
    }

    .author {
      margin-top: 5px;
      font-size: 14px;
      line-height: 1, 29;
      letter-spacing: -0.02em;
      color: #686868;
    }
    .iconCircle,
    .iconRectangle {
      width: 50px;
      height: 50px;
    }

    .timer {
      font-size: 16px;
      line-height: 1.29;
    }
  }
  @media (min-width: 1280px) {
    margin-top: 16px;
    padding: 40px 40px 53px 40px;
    width: 847px;

    .imgBook {
      margin-top: 44px;
      width: 224px;
      height: 340px;
    }

    .iconCircle,
    .iconRectangle {
      margin-top: 25px;
    }
  }
`,oe=({startStop:t,handleSubmit:n,isProgress:s})=>{const{imageUrl:a,title:r,author:o,timeLeftToRead:i}=u(w);return e.jsx(ae,{children:e.jsxs("form",{onSubmit:n,children:[e.jsxs("div",{className:"textTimerWrapper",children:[e.jsx(W,{title:"My reading"}),!s&&e.jsx("p",{className:"timer",children:`${i==null?void 0:i.hours} hours and ${i==null?void 0:i.minutes} minutes left`})]}),e.jsxs("div",{className:"imgWrapper",children:[e.jsx("img",{src:a,alt:r,className:"imgBook"}),e.jsx("h2",{className:"titleBook",children:r}),e.jsx("p",{className:"author",children:o}),t?e.jsx("button",{type:"submit",className:"btnIcon",children:e.jsxs("svg",{className:"iconCircle",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"#E90516"}),e.jsx("circle",{cx:"20",cy:"20",r:"19",stroke:"#F9F9F9"})]})}):e.jsx("button",{type:"submit",className:"btnIcon",children:e.jsxs("svg",{className:"iconRectangle",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"20",cy:"20",r:"19",stroke:"#F9F9F9"}),e.jsx("rect",{x:"12",y:"13",width:"15",height:"15",rx:"3",fill:"#E90516"})]})})]})]})})},pe=p.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    .detWrapper {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 1280px) {
      flex-direction: row;
    }
  }
`,y=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;

  .titleSvgWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .desctopDesc {
    display: none;
  }

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .svgWrapper {
    display: flex;
    gap: 8px;
  }
  .btnIcon {
    border: none;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 16px;
    .title {
      font-size: 20px;
    }
  }

  @media (min-width: 1280px) {
    .title {
      font-size: 28px;
      line-height: 1.14;
    }
    .desctopDesc {
      max-width: 293px;
      display: flex;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      color: #686868;
    }
  }
`;p.div`
  .btnIcon {
    border: none;
    background-color: transparent;
  }
`;const le=({status:t,handleChangeStatus:n})=>e.jsx(e.Fragment,{children:t?e.jsx(y,{children:e.jsxs("div",{className:"titleSvgWrapper",children:[e.jsx("h2",{className:"title",children:"Diary"}),e.jsxs("div",{className:"svgWrapper",children:[e.jsx("button",{type:"button",className:"btnIcon",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8 7.99998L5.15141 5.62615C4.72818 5.27346 4.51656 5.09711 4.36443 4.88094C4.22963 4.6894 4.12953 4.47567 4.06868 4.2495C4 3.99424 4 3.71877 4 3.16785V1.33331M8 7.99998L10.8486 5.62615C11.2718 5.27346 11.4834 5.09711 11.6356 4.88094C11.7704 4.6894 11.8705 4.47567 11.9313 4.2495C12 3.99424 12 3.71877 12 3.16785V1.33331M8 7.99998L5.15141 10.3738C4.72818 10.7265 4.51656 10.9028 4.36443 11.119C4.22963 11.3106 4.12953 11.5243 4.06868 11.7505C4 12.0057 4 12.2812 4 12.8321V14.6666M8 7.99998L10.8486 10.3738C11.2718 10.7265 11.4834 10.9028 11.6356 11.119C11.7704 11.3106 11.8705 11.5243 11.9313 11.7505C12 12.0057 12 12.2812 12 12.8321V14.6666",stroke:"#F9F9F9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2.66699 1.33331H13.3337M2.66699 14.6666H13.3337",stroke:"#F9F9F9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("button",{type:"button",className:"btnIcon",onClick:n,children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_18723_4450)",children:[e.jsx("path",{opacity:"0.4",d:"M11.4663 9.33336C11.651 9.33336 11.7433 9.33336 11.8182 9.37436C11.8799 9.40819 11.9374 9.4717 11.9649 9.5365C11.9982 9.61506 11.9898 9.69865 11.973 9.86582C11.8861 10.7325 11.5878 11.5677 11.1008 12.2964C10.5148 13.1735 9.68186 13.857 8.70732 14.2607C7.73278 14.6644 6.66043 14.77 5.62586 14.5642C4.5913 14.3584 3.64099 13.8505 2.89511 13.1046C2.14923 12.3587 1.64128 11.4084 1.43549 10.3738C1.2297 9.33927 1.33532 8.26692 1.73899 7.29238C2.14265 6.31784 2.82624 5.48489 3.7033 4.89885C4.43205 4.41192 5.26718 4.11363 6.13388 4.02667C6.30105 4.00989 6.38464 4.00151 6.4632 4.03484C6.528 4.06233 6.59152 4.11979 6.62534 4.18152C6.66634 4.25636 6.66634 4.34869 6.66634 4.53336V8.80002C6.66634 8.98671 6.66634 9.08005 6.70268 9.15136C6.73463 9.21408 6.78563 9.26507 6.84835 9.29703C6.91965 9.33336 7.01299 9.33336 7.19968 9.33336H11.4663Z",stroke:"#686868",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.33301 1.86668C9.33301 1.68201 9.33301 1.58967 9.37401 1.51484C9.40783 1.4531 9.47135 1.39564 9.53615 1.36815C9.6147 1.33482 9.69829 1.34321 9.86547 1.35997C11.0844 1.48224 12.2303 2.02155 13.1042 2.89544C13.9781 3.76934 14.5174 4.91528 14.6397 6.13421C14.6565 6.30139 14.6649 6.38498 14.6315 6.46354C14.604 6.52834 14.5466 6.59185 14.4848 6.62567C14.41 6.66668 14.3177 6.66668 14.133 6.66668L9.86634 6.66668C9.67966 6.66668 9.58631 6.66668 9.51501 6.63035C9.45229 6.59839 9.4013 6.5474 9.36934 6.48468C9.33301 6.41337 9.33301 6.32003 9.33301 6.13334L9.33301 1.86668Z",stroke:"#686868",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_18723_4450",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})})]})]})}):e.jsxs(y,{children:[e.jsxs("div",{className:"titleSvgWrapper",children:[e.jsx("h2",{className:"title",children:"Statistics"}),e.jsxs("div",{className:"svgWrapper",children:[e.jsx("button",{type:"button",className:"btnIcon",onClick:n,children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8 7.99998L5.15141 5.62615C4.72818 5.27346 4.51656 5.09711 4.36443 4.88094C4.22963 4.6894 4.12953 4.47567 4.06868 4.2495C4 3.99424 4 3.71877 4 3.16785V1.33331M8 7.99998L10.8486 5.62615C11.2718 5.27346 11.4834 5.09711 11.6356 4.88094C11.7704 4.6894 11.8705 4.47567 11.9313 4.2495C12 3.99424 12 3.71877 12 3.16785V1.33331M8 7.99998L5.15141 10.3738C4.72818 10.7265 4.51656 10.9028 4.36443 11.119C4.22963 11.3106 4.12953 11.5243 4.06868 11.7505C4 12.0057 4 12.2812 4 12.8321V14.6666M8 7.99998L10.8486 10.3738C11.2718 10.7265 11.4834 10.9028 11.6356 11.119C11.7704 11.3106 11.8705 11.5243 11.9313 11.7505C12 12.0057 12 12.2812 12 12.8321V14.6666",stroke:"#686868",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2.66699 1.33331H13.3337M2.66699 14.6666H13.3337",stroke:"#686868",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("button",{type:"button",className:"btnIcon",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_18738_4815)",children:[e.jsx("path",{opacity:"0.8",d:"M11.4663 9.33336C11.651 9.33336 11.7433 9.33336 11.8182 9.37436C11.8799 9.40819 11.9374 9.4717 11.9649 9.5365C11.9982 9.61506 11.9898 9.69865 11.973 9.86582C11.8861 10.7325 11.5878 11.5677 11.1008 12.2964C10.5148 13.1735 9.68186 13.857 8.70732 14.2607C7.73278 14.6644 6.66043 14.77 5.62586 14.5642C4.5913 14.3584 3.64099 13.8505 2.89511 13.1046C2.14923 12.3587 1.64128 11.4084 1.43549 10.3738C1.2297 9.33927 1.33532 8.26692 1.73899 7.29238C2.14265 6.31784 2.82624 5.48489 3.7033 4.89885C4.43205 4.41192 5.26718 4.11363 6.13388 4.02667C6.30105 4.00989 6.38464 4.00151 6.4632 4.03484C6.528 4.06233 6.59152 4.11979 6.62534 4.18152C6.66634 4.25636 6.66634 4.34869 6.66634 4.53336V8.80002C6.66634 8.98671 6.66634 9.08005 6.70268 9.15136C6.73463 9.21408 6.78563 9.26507 6.84835 9.29703C6.91965 9.33336 7.01299 9.33336 7.19968 9.33336H11.4663Z",stroke:"#F9F9F9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.33301 1.86668C9.33301 1.68201 9.33301 1.58967 9.37401 1.51484C9.40783 1.4531 9.47135 1.39564 9.53615 1.36815C9.6147 1.33482 9.69829 1.34321 9.86547 1.35997C11.0844 1.48224 12.2303 2.02155 13.1042 2.89544C13.9781 3.76934 14.5174 4.91528 14.6397 6.13421C14.6565 6.30139 14.6649 6.38498 14.6315 6.46354C14.604 6.52834 14.5466 6.59185 14.4848 6.62567C14.41 6.66668 14.3177 6.66668 14.133 6.66668L9.86634 6.66668C9.67966 6.66668 9.58631 6.66668 9.51501 6.63035C9.45229 6.59839 9.4013 6.5474 9.36934 6.48468C9.33301 6.41337 9.33301 6.32003 9.33301 6.13334L9.33301 1.86668Z",stroke:"#F9F9F9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_18738_4815",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})})]})]}),e.jsx("p",{className:"desctopDesc",children:"Each page, each chapter is a new round of knowledge, a new step towards understanding. By rewriting statistics, we create our own reading history."})]})}),xe=()=>{const[t,n]=f.useState(""),[s,a]=f.useState(!0),[r,o]=f.useState(!0),{_id:i,progress:l,totalPages:d}=u(w),g=R(),A=m=>{m.preventDefault();const h={id:i,page:t};if(s&&t<d&&t>0)return a(!1),n(""),j("You have started reading the book!"),g(S(h));if(t<=d&&t>0)return a(!0),n(""),j(`You have finished reading the book in ${h.page} page!`),g(V(h));t<=0?C(`You cannot read fewer pages than the ${h.page} pages of the book.`):C(`You cannot read more pages than the ${d} pages of the book.`)},x=()=>{o(!r)},c=l.length===0;return e.jsxs(pe,{children:[e.jsxs(H,{children:[e.jsx(L,{startStop:s,page:t,setPage:n,handleSubmit:A}),e.jsxs("div",{className:"detWrapper",children:[!c&&e.jsx(le,{status:r,handleChangeStatus:x}),e.jsx(re,{status:r,isProgress:c})]})]}),e.jsx(oe,{startStop:s,handleSubmit:A,isProgress:c})]})};export{xe as default};
