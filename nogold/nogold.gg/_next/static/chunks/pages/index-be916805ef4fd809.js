(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{58988:function(e,t){"use strict";t.E=function(e,t){return e.split(",").map(function(e){var t=(e=e.trim()).match(s),i=t[1],n=t[2],r=t[3]||"",o={};return o.inverse=!!i&&"not"===i.toLowerCase(),o.type=n?n.toLowerCase():"all",r=r.match(/\([^\)]+\)/g)||[],o.expressions=r.map(function(e){var t=e.match(a),s=t[1].toLowerCase().match(l);return{modifier:s[1],feature:s[2],value:t[2]}}),o}).some(function(e){var s=e.inverse,a="all"===e.type||t.type===e.type;if(a&&s||!(a||s))return!1;var l=e.expressions.every(function(e){var s=e.feature,a=e.modifier,l=e.value,i=t[s];if(!i)return!1;switch(s){case"orientation":case"scan":return i.toLowerCase()===l.toLowerCase();case"width":case"height":case"device-width":case"device-height":l=c(l),i=c(i);break;case"resolution":l=o(l),i=o(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":l=r(l),i=r(i);break;case"grid":case"color":case"color-index":case"monochrome":l=parseInt(l,10)||1,i=parseInt(i,10)||0}switch(a){case"min":return i>=l;case"max":return i<=l;default:return i===l}});return l&&!s||!l&&s})};var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,a=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,l=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,n=/(dpi|dpcm|dppx)?$/;function r(e){var t,s=Number(e);return s||(s=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),s}function o(e){var t=parseFloat(e);switch(String(e).match(n)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},49180:function(e,t,s){"use strict";var a=s(58988).E,l="undefined"!=typeof window?window.matchMedia:null;function i(e,t,s){var i,n=this;function r(e){n.matches=e.matches,n.media=e.media}l&&!s&&(i=l.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(r)):(this.matches=a(e,t),this.media=e),this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(r)}}e.exports=function(e,t,s){return new i(e,t,s)}},48312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3492)}])},3492:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return eb}});var a=s(85893),l=s(57597),i=s.n(l),n=s(86570),r=s(67294),o=()=>{let[e,t]=(0,r.useState)(null),[s,a]=(0,r.useState)(0),[l,i]=(0,r.useState)(),n=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;o(s),t(e)},o=e=>{l&&clearTimeout(l),i(setTimeout(()=>{c()},e))},c=()=>{t(null)};return{text:e,persistText:n,handlePoemClick:()=>{switch(a(e=>1),s){case 1:n("lelel1",2e3);case 2:n("lelel2",2e3);case 3:n("lelel3",2e3)}}}};let c=(0,r.createContext)({setNoteText:()=>{}});function d(e){let{children:t}=e,{text:s,persistText:l}=o();return(0,a.jsxs)(c.Provider,{value:{setNoteText:(e,t)=>{l(e,t)}},children:[(()=>{if(s)return(0,a.jsx)("div",{className:"font-huggable text-[2.2vh] tracking-[0.2rem] outlined text-ghost-white bottom-[7vh] bg-[rgba(0,0,0,0.4)] absolute w-screen flex justify-center",children:s})})(),t]})}var m=s(49180),x=s.n(m),h=/[A-Z]/g,p=/^ms-/,u={};function y(e){return"-"+e.toLowerCase()}var f=function(e){if(u.hasOwnProperty(e))return u[e];var t=e.replace(h,y);return u[e]=p.test(t)?"-"+t:t},b=s(45697),j=s.n(b);let g=j().oneOfType([j().string,j().number]),N={all:j().bool,grid:j().bool,aural:j().bool,braille:j().bool,handheld:j().bool,print:j().bool,projection:j().bool,screen:j().bool,tty:j().bool,tv:j().bool,embossed:j().bool},{type:v,...w}={orientation:j().oneOf(["portrait","landscape"]),scan:j().oneOf(["progressive","interlace"]),aspectRatio:j().string,deviceAspectRatio:j().string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:j().bool,colorIndex:j().bool,monochrome:j().bool,resolution:g,type:Object.keys(N)},_={minAspectRatio:j().string,maxAspectRatio:j().string,minDeviceAspectRatio:j().string,maxDeviceAspectRatio:j().string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:j().number,maxColor:j().number,minColorIndex:j().number,maxColorIndex:j().number,minMonochrome:j().number,maxMonochrome:j().number,minResolution:g,maxResolution:g,...w};var k={...N,..._};let z=e=>`not ${e}`,T=(e,t)=>{let s=f(e);return("number"==typeof t&&(t=`${t}px`),!0===t)?s:!1===t?z(s):`(${s}: ${t})`},C=e=>e.join(" and "),E=e=>{let t=[];return Object.keys(k).forEach(s=>{let a=e[s];null!=a&&t.push(T(s,a))}),C(t)},A=(0,r.createContext)(void 0),S=e=>e.query||E(e),R=e=>{if(e)return Object.keys(e).reduce((t,s)=>(t[f(s)]=e[s],t),{})},L=()=>{let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{e.current=!0},[]),e.current},I=e=>{let t=(0,r.useContext)(A),s=()=>R(e)||R(t),[a,l]=(0,r.useState)(s);return(0,r.useEffect)(()=>{let e=s();!function(e,t){if(e===t)return!0;if(!e||!t)return!1;let s=Object.keys(e),a=Object.keys(t),l=s.length;if(a.length!==l)return!1;for(let a=0;a<l;a++){let l=s[a];if(e[l]!==t[l]||!Object.prototype.hasOwnProperty.call(t,l))return!1}return!0}(a,e)&&l(e)},[e,t]),a},O=e=>{let t=()=>S(e),[s,a]=(0,r.useState)(t);return(0,r.useEffect)(()=>{let e=t();s!==e&&a(e)},[e]),s},B=(e,t)=>{let s=()=>x()(e,t||{},!!t),[a,l]=(0,r.useState)(s),i=L();return(0,r.useEffect)(()=>{if(i){let e=s();return l(e),()=>{e&&e.dispose()}}},[e,t]),a},P=e=>{let[t,s]=(0,r.useState)(e.matches);return(0,r.useEffect)(()=>{let t=e=>{s(e.matches)};return e.addListener(t),s(e.matches),()=>{e.removeListener(t)}},[e]),t},D=(e,t,s)=>{let a=I(t),l=O(e);if(!l)throw Error("Invalid or missing MediaQuery!");let i=B(l,a),n=P(i),o=L();return(0,r.useEffect)(()=>{o&&s&&s(n)},[n]),(0,r.useEffect)(()=>()=>{i&&i.dispose()},[]),n};function G(e){let{type:t,size:s,x:l,y:i,z:o,cycleduration:d,amplitude:m,clickNote:x,noteTime:h,mob:p}=e,u=D({query:"(max-width: 768px)"}),{setNoteText:y}=(0,r.useContext)(c),f=()=>{};if(p&&u||!p&&!u)return(0,a.jsx)(n.E.div,{onClick:()=>{f()},style:{top:i+"%",left:l+"%",zIndex:o,maxWidth:s+"%",width:s+"%"},className:"absolute",whileHover:{scale:1.1,cursor:"pointer"},whileTap:{scale:.9},children:(0,a.jsx)(n.E.img,{className:"object-contain",viewport:{once:!0},initial:{y:0},whileInView:{y:m},transition:{duration:d,repeat:1/0,ease:"easeInOut",repeatType:"reverse"},alt:"Cloud",src:"/clouds/"+t+".PNG"})})}function F(){return(0,a.jsx)("div",{className:"w-1/2 absolute pointer-events-none max-md:!w-[90%] max-md:!top-[30vh] max-md:!z-10",style:{zIndex:10},children:(0,a.jsx)("img",{alt:"PacMan",src:"/hero/pacmac.PNG"})})}function H(e){let{iconName:t,href:s}=e;return(0,a.jsx)("div",{onClick:()=>{window.open(s,"_blank")},className:"clickable pl-[20%] pt-[25%] p-[35%] h-16 w-16 shadowed_background flex justify-center items-center",children:(0,a.jsx)("img",{className:"object-contain",src:"/ui/icons/".concat(t,".png")})})}var M=s(4661),W=s(92321),$=()=>{let e=(0,W.m)(),[t,s]=(0,r.useState)(!1),a=new Map([["land",0],["about",100],["tokenomics",200],["airdrop",300],["presale",400],["leaderboard",500]]);return{scrollIntoBlock:e=>{let t=window.innerHeight*(a.get(e)/100);window.scrollTo({top:t,behavior:"smooth"})},isBlockInActiveView:e=>{let t=window.scrollY/window.innerHeight*100,s=a.get(e);return t>s&&t<s+100},getAddress:()=>{if(e.isConnected)return M.G.toShortETHA(e.address)},getRefcode:()=>{},opened:t,openMenu:s}},Z=s(33964),V=s(96229),K=s(48486),Y=s(45962);function q(){let{openConnectModal:e}=(0,Y.We)(),{scrollIntoBlock:t,isBlockInActiveView:s,getAddress:l,getRefcode:i,opened:n,openMenu:o}=$(),c=(0,W.m)(),{openRefMd:d,openSignInMd:m}=(0,r.useContext)(V.t),{userData:x,isUserReady:h}=(0,r.useContext)(Z.R),p=D({query:"(max-width: 768px)"}),{disconnect:u}=(0,K.q)(),y=()=>{c.isConnected?u():e()};return(0,a.jsx)("div",{className:"fixed w-screen h-screen z-20 pointer-events-none",children:(0,a.jsx)("nav",{className:"border-gray-200",children:(0,a.jsxs)("div",{className:"2xl:!min-w-[70%] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pointer-events-auto",children:[(0,a.jsx)("a",{href:"",className:"flex items-center space-x-3 rtl:space-x-reverse",children:(0,a.jsx)("img",{src:"objects/logocoin.PNG",className:"h-16",alt:"Flowbite Logo"})}),(0,a.jsxs)("button",{onClick:()=>{o(!n)},"data-collapse-toggle":"navbar-default",type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200","aria-controls":"navbar-default","aria-expanded":"false",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:(0,a.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),(0,a.jsx)("div",{className:"".concat(n?"block":"hidden"," w-full md:block md:w-auto"),id:"navbar-default",children:(0,a.jsxs)("ul",{className:"max-md:!items-start max-md:!bg-ghost-white font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#about",className:"poppins_nav font-bold block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-golden md:p-0","aria-current":"page",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#tokenomics",className:"poppins_nav font-bold block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-golden md:p-0",children:"Tokenomics"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#airdrop",className:"poppins_nav font-bold block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-golden md:p-0",children:"Airdrop"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#presale",className:"poppins_nav font-bold block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-golden md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Presale"})}),p?(0,a.jsx)("li",{style:{borderTop:"solid 2px black",width:"100%"},children:(0,a.jsx)("a",{className:"width-[100%] poppins_nav font-bold block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-golden md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:l()?l():"CONNECT"})}):(0,a.jsx)("li",{onClick:()=>{y()},className:"wrapped",style:{marginLeft:"4vw",marginRight:"2vw"},children:(0,a.jsx)("span",{className:"poppins_nav font-bold block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-golden md:p-0",style:{color:"inherit"},children:l()?"DISCONNECT":"CONNECT"})}),(()=>{if(h)return p?(0,a.jsx)("li",{onClick:()=>{d()},children:(0,a.jsx)("a",{className:"poppins_nav font-bold block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-golden md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:null==x?void 0:x.referral_code})}):(0,a.jsx)("li",{onClick:()=>{d()},className:"wrapped",style:{marginLeft:"0vw",marginRight:"1vw"},children:(0,a.jsx)("span",{className:"poppins_nav font-bold block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-golden md:p-0",style:{color:"inherit"},children:null==x?void 0:x.referral_code})})})(),(0,a.jsx)("li",{className:"max-md:!hidden",children:(0,a.jsx)(H,{iconName:"x_icn",href:"https://x.com/nogold_gg"})})]})})]})})})}function U(e){let{onClick:t,name:s,size:l,width:i,accent:o,disabled:c,isMd:d}=e,{openClaimMd:m}=(0,r.useContext)(V.t),x=()=>{d?m():t()};return(0,a.jsx)(n.E.div,{onClick:()=>{x()},className:"obj_shadowed btn_1 pl-[2.5em] pr-[2.5em] pt-[1em] pb-[1em] flex justify-center items-center bg-contain bg-no-repeat bg-center ".concat((()=>{if(c)return"noCursor"})()),style:{backgroundColor:c?"gray":o?"#FFD71F":"white",fontSize:l+"vw",width:i?"".concat(i,"%"):""},whileHover:{scale:1.02,cursor:c?"default":"pointer"},whileTap:{scale:.95},children:(0,a.jsx)("span",{className:"poppins font-bold",style:{fontSize:"inherit",textAlign:"center"},children:s})})}var X=s(78323);function J(e){let{children:t,size:s,position:l}=e;return(0,a.jsx)(n.E.div,{onClick:()=>{window.open("https://x.com/GBlast_gg","_blank")},className:"absolute flex justify-center items-center p-[2.5em 4em 2em 2em] ".concat(l),style:{backgroundImage:'url("/objects/tooltipCloud.png")',backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",fontSize:s+"vw",padding:"2.5em 4em 2em 2em"},whileHover:{scale:1.1,cursor:"pointer"},whileTap:{scale:.9},children:(0,a.jsx)("div",{style:{transform:"rotate(-25deg)",textAlign:"center"},children:t})})}function Q(e){let{y:t,type:s}=e;return(0,a.jsx)("div",{className:"w-screen absolute h-[10vh] flex justify-center items-center max-md:!hidden",style:{top:t+"vh"},children:(0,a.jsx)("img",{className:"h-[100%]",src:"/arrows/".concat(s,".png")})})}var ee=s(73108);function et(e){let{size:t}=e;return(0,a.jsxs)("div",{className:"flex flex-col justify-center align-center mt-[1.5em]",style:{fontSize:t+"vw"},children:[(0,a.jsx)(ee.Z,{completed:"",barContainerClassName:"pb_container",completedClassName:"pb_completed",labelClassName:"pb_label",width:"20px"}),(0,a.jsxs)("div",{className:"flex justify-between pt-[0.6em]",children:[(0,a.jsx)("span",{className:"poppins font-[600] max-md:!text-[3.5em]",children:"9.000.000/9.000.000"}),(0,a.jsx)("span",{className:"poppins font-[600] max-md:!text-[3.5em]",children:"100%"})]})]})}var es=s(12368);function ea(e){let{type:t,styles:s}=e;return(0,a.jsx)("div",{className:"hidden flex w-[100%] h-[7vh] max-md:!flex justify-center items-center ".concat(s),children:(0,a.jsx)("img",{className:"h-[100%]",src:"/arrows/".concat(t,".png")})})}var el=s(3751);function ei(){let{leaderBoard:e,position:t}=(0,r.useContext)(Z.R);return(0,a.jsxs)(X.Z,{width:60,type:8,classNames:"",children:[(0,a.jsx)("h2",{className:"huggable_block text-golden text-center text-[4vw] max-md:!text-[1.5em] mb-[0.5em]",style:{zIndex:10},children:"LEADERBOARD"}),(0,a.jsx)("div",{className:"container mx-auto text-[1vw] max-md:!text-[0.6em]",children:(0,a.jsxs)("div",{className:"bg-white rounded",children:[(0,a.jsx)("div",{className:"overflow-y-scroll h-[40vh]",children:(0,a.jsxs)("table",{className:"min-w-full table-auto",children:[(0,a.jsx)("thead",{className:"sticky top-0 bg-[white]",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-2 w-[20%] text-start huggable_block max-md:!text-[1.1em]",style:{color:"white",fontSize:"1.4em"},children:"#"}),(0,a.jsx)("th",{className:"px-4 py-2 text-start w-[35%] huggable_block max-md:!text-[1.1em]",style:{color:"white",fontSize:"1.4em"},children:"Address"}),(0,a.jsx)("th",{className:"px-4 py-2 text-start huggable_block max-md:!text-[1.1em]",style:{color:"white",fontSize:"1.4em"},children:"Referred Amount"})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:e&&void 0!==e.users?null==e?void 0:e.users.map(e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"px-4 py-2  w-[20%] text-start",style:{fontFamily:"poppins",fontWeight:500},children:e.rank}),(0,a.jsx)("td",{className:"px-4 py-2 poppins",style:{fontFamily:"poppins",fontWeight:500},children:M.G.toShortETHA(e.wallet_address)}),(0,a.jsxs)("td",{className:"px-4 py-2 poppins",style:{fontFamily:"poppins",fontWeight:500},children:[M.G.toEthAndRound(BigInt(e.amount))," ETH"]})]})})):null})]})}),(0,a.jsx)("div",{className:"sticky bottom-0",style:{borderTop:"solid black 0.05em"},children:(()=>{if(t)return(0,a.jsx)("table",{className:"min-w-full table-auto",children:(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"px-4 py-2 text-start w-[20%] poppins",children:t.rank?t.rank:"NO RANK"}),(0,a.jsx)("td",{className:"px-4 py-2 w-[40%] poppins",children:M.G.toShortETHA(t.wallet_address)}),(0,a.jsxs)("td",{className:"px-4 py-2 poppins",children:[M.G.toEthAndRound(BigInt(t.amount))," ETH"]})]})})})})()})]})})]})}function en(e){let{children:t}=e,[s,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{a(!0)},[]),s)?t:null}var er=s(29434),eo=s(61117),ec=()=>{let e=(0,W.m)(),[t,s]=(0,r.useState)(BigInt(0)),[a,l]=(0,r.useState)(null),[i,n]=(0,r.useState)(null),[o,c]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!1),[x,h]=(0,r.useState)(null),[p,u]=(0,r.useState)(null),[y,f]=(0,r.useState)(),[b,j]=(0,r.useState)(),g=()=>{er.R.computeAllocationAndRefund(e.address).then(e=>{l(e[0]),n(e[1])}),er.R.getIsClaimedRefs(e.address).then(e=>{m(e)}),er.R.isClaimedPresale(e.address).then(e=>{c(e)}),er.R.depositedInTotal().then(e=>{s(e)})},N=()=>{eo.K.getRefClaimable(e.address).then(e=>{u(BigInt(e.amount)),h(e.merkle_proof),j(e)})};return(0,r.useEffect)(()=>{e.isConnected&&(N(),g())},[e.isConnected]),{getClaimAvailable:()=>(a!=BigInt(0)||i!=BigInt(0))&&!o,isPresaleClaimed:o,isRefClaimed:d,allocation:a,totalRaised:t,refund:i,refAmount:p,getRefAvailable:()=>!!x&&!d,pushPresaleClaimed:()=>{c(!0)},merkle:x,pushRefClaimed:()=>{m(!0)},amountString:y,refResponse:b}},ed=s(42336),em=s(19841),ex=s(82016),eh=s(83540),ep=s(24421),eu=e=>{let{writeContract:t,error:s,isPending:a,data:l}=(0,ex.S)(),[i,n]=(0,r.useState)(ed.N.None),{isLoading:o,isSuccess:c}=(0,eh.A)({hash:l});return(0,r.useEffect)(()=>{c&&(n(ed.N.Success),e()),a&&n(ed.N.AwaitAction),o&&n(ed.N.Loading),s&&(n(ed.N.Failed),console.log(s))},[c,o,a,s]),{claimPresale:()=>{t({address:"0xcDbe12611F18B43098202d45928c905b34736C06",abi:ep.M,functionName:"claimPresale"})},claimState:i}},ey=(e,t,s)=>{let{writeContract:a,error:l,isPending:i,data:n}=(0,ex.S)(),[o,c]=(0,r.useState)(ed.N.None),{isLoading:d,isSuccess:m}=(0,eh.A)({hash:n});return(0,r.useEffect)(()=>{m&&(c(ed.N.Success),e()),i&&c(ed.N.AwaitAction),d&&c(ed.N.Loading),l&&(c(ed.N.Failed),console.log(l))},[m,d,i,l]),{claimRef:()=>{console.log(typeof s.amount.toString()),console.log(s.amount.toString()),a({address:"0xcDbe12611F18B43098202d45928c905b34736C06",abi:ep.M,args:[s.amount,s.merkle_proof],functionName:"claimRefs"})},refState:o}};function ef(){let e=(0,W.m)(),{openConnectModal:t}=(0,Y.We)(),{getClaimAvailable:s,isPresaleClaimed:l,isRefClaimed:i,allocation:n,totalRaised:r,refund:o,refAmount:c,getRefAvailable:d,pushPresaleClaimed:m,merkle:x,amountString:h,refResponse:p}=ec(),{claimPresale:u,claimState:y}=eu(m),{claimRef:f,refState:b}=ey(m,x,p);return ec(),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex items-stretch gap-[6vw]  max-md:!flex-col  max-md:!items-center",children:[(0,a.jsx)(X.Z,{width:30,type:6,children:(0,a.jsx)("div",{className:"min-h-[60vh]",children:e.isConnected?(0,a.jsxs)("div",{className:"flex flex-col-reverse items-center gap-[2em]",children:[(0,a.jsxs)("div",{className:"w-[100%] h-[50%] flex flex-col justify-around gap-[1.5em]",children:[(0,a.jsxs)("h2",{className:"huggable_block text-golden text-center text-[1.8em]",children:["REFERRAL",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-white",children:"ALLOCATION"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("span",{className:"poppins text-[1em] mb-[-0.3em]",children:"Allocation"}),(0,a.jsx)("span",{className:"huggable_block text-[1.5em]",style:{color:"white"},children:M.G.toEthAndRound(c)}),(0,a.jsx)("span",{className:"huggable_block text-[1.5em]",style:{color:"#FFD71F"},children:"$NOGOLD"})]}),(0,a.jsx)(em.Z,{disabled:!d(),onClick:()=>{f()},initName:"CLAIM",status:b,disabledName:i?"CLAIMED":"NOT ELIGIBLE"})]}),(0,a.jsxs)("div",{className:"w-[100%] h-[50%] flex flex-col justify-around items-center gap-[1.5em]",children:[(0,a.jsxs)("h2",{className:"huggable_block text-golden text-center text-[1.8em]",children:["PRESALE",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-white",children:"ALLOCATION"})]}),(0,a.jsxs)("div",{className:"flex justify-between w-[80%]",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("span",{className:"poppins text-[1em] mb-[-0.3em]",children:"Allocation"}),(0,a.jsx)("span",{className:"huggable_block text-[1.5em]",style:{color:"white"},children:M.G.toEthAndRound(n)}),(0,a.jsx)("span",{className:"huggable_block text-[1.5em]",style:{color:"#FFD71F"},children:"$NOGOLD"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("span",{className:"poppins text-[1em] mb-[-0.3em]",children:"Refund"}),(0,a.jsx)("span",{className:"huggable_block text-[1.5em]",style:{color:"white"},children:M.G.toEthAndRound(o)}),(0,a.jsx)("span",{className:"huggable_block text-[1.5em]",style:{color:"#3FD5FF"},children:"ETH"})]})]}),(0,a.jsx)(em.Z,{disabled:!s(),onClick:()=>{u()},initName:"CLAIM",status:y,disabledName:l?"CLAIMED":"NOT ELIGIBLE"})]})]}):(0,a.jsxs)("div",{className:"w-[100%] h-[100%] flex flex-col items-center",children:[(0,a.jsxs)("h2",{className:"huggable_block text-golden text-center text-[2.1em] max-md:!mb-[2em] mb-[40%]",children:["CLAIM",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-white",children:"PRESALE"})]}),(0,a.jsx)(em.Z,{disabled:!1,onClick:t,initName:"CONNECT",status:ed.N.None})]})})}),(0,a.jsx)(X.Z,{width:30,type:7,children:(0,a.jsxs)("div",{className:"flex flex-col h-[100%]",children:[(0,a.jsxs)("h2",{className:"huggable_block text-golden text-center text-[2.1em] max-md:!mb-[2em]",children:["TOTAL DEPOSITED",(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"text-white",children:[M.G.toEthAndRound(r)," ETH"]})]}),(0,a.jsxs)("div",{className:"column w-[100%] h-[40%] flex flex-col justify-center max-md:!hidden",children:[(0,a.jsxs)("div",{className:"w-[100%] flex max-md:!hidden",style:{paddingBottom:"0.5em"},children:[(0,a.jsx)("div",{className:"w-[33%] justify-center flex",children:(0,a.jsx)("span",{className:"text-[0.8em] huggable_block",style:{fontFamily:"huggable",color:"#5DD47F"},children:"GUARANTEED"})}),(0,a.jsx)("div",{className:"grow justify-center flex",children:(0,a.jsx)("span",{className:"text-[0.8em] huggable_block",style:{fontFamily:"huggable",color:"#5DD47F"},children:"OVERSUBSCRIPTION"})})]}),(0,a.jsx)(ee.Z,{completed:"",barContainerClassName:"pb_container",completedClassName:"pb_completed_1",labelClassName:"pb_label"}),(0,a.jsxs)("div",{className:"w-[100%] flex justify-between",style:{padding:"0 0.3em 0 0.3em"},children:[(0,a.jsxs)("div",{className:"w-[33%] flex justify-between",children:[(0,a.jsx)("div",{className:"h-[1em] w-[0.5em] bg-[black]",style:{borderBottomLeftRadius:"0.3em",borderBottomRightRadius:"0.3em"}}),(0,a.jsx)("div",{className:"h-[1em] w-[0.5em] bg-[black]",style:{borderBottomLeftRadius:"0.3em",borderBottomRightRadius:"0.3em"}})]}),(0,a.jsx)("div",{className:"h-[1em] w-[0.5em] bg-[black]",style:{borderBottomLeftRadius:"0.3em",borderBottomRightRadius:"0.3em"}})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsxs)("div",{className:"w-[40%] justify-between flex",children:[(0,a.jsx)("span",{style:{fontWeight:"700"},children:"0"}),(0,a.jsx)("span",{style:{fontWeight:"700"},children:"50 ETH"})]}),(0,a.jsx)("div",{className:"grow flex justify-end",children:(0,a.jsx)("span",{style:{fontWeight:"700"},children:"150 ETH"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col grow max-md:!border-[white]",style:{justifyContent:"space-around",borderTop:"solid 0.2em"},children:[(0,a.jsx)("div",{className:"flex flex-col gap-[1em] text-[1.2em]"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[1em] text-[1.2em]",children:[(0,a.jsxs)("span",{className:"huggable_block max-md:!text-center",style:{color:"white"},children:["Presale hard cap: ",(0,a.jsx)("span",{style:{color:"rgb(138, 209, 251)"},children:"150 ETH"})]}),(0,a.jsxs)("span",{className:"huggable_block max-md:!text-center",style:{color:"white"},children:["Personal min deposit: ",(0,a.jsx)("span",{style:{color:"rgb(138, 209, 251)"},children:"0.05 ETH"})]}),(0,a.jsxs)("span",{className:"huggable_block max-md:!text-center",style:{color:"white"},children:["Presale max deposit: ",(0,a.jsx)("span",{style:{color:"rgb(138, 209, 251)"},children:"2.5 ETH"})]})]})]})]})})]})})}function eb(){let e=new Date(Date.UTC(2024,5,11,16,0,0)),{totalSeconds:t,seconds:s,minutes:l,hours:r,days:o,isRunning:c,start:m,pause:x,resume:h,restart:p}=(0,el.useTimer)({expiryTimestamp:e,onExpire:()=>console.warn("onExpire called")});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(en,{children:(0,a.jsx)(es.Z,{children:(0,a.jsx)(Z.Z,{children:(0,a.jsxs)(V.Z,{children:[(0,a.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"}),(0,a.jsxs)("main",{className:"max-md:!relative max-w-[100%] overflow-hidden flex min-h-screen flex-col bg-strong-soft-blue ".concat(i().className),children:[(0,a.jsx)(q,{}),(0,a.jsxs)(d,{children:[(0,a.jsx)(G,{y:16,x:13,type:"cld_candle_tl",z:1,size:20,cycleduration:2.5,amplitude:15,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3}),(0,a.jsx)(G,{y:60,x:15,type:"cld_p_tl",z:0,size:17,cycleduration:1.7,amplitude:18,clickNote:"Nogold for you here",noteTime:3e3}),(0,a.jsx)(G,{y:42,x:2,type:"cld_p_bl",z:1,size:17,cycleduration:2,amplitude:13,clickNote:"Your cloud violates gold distribution rules",noteTime:3e3}),(0,a.jsx)(G,{y:67,x:70,type:"cld_candle_tr",z:0,size:11,cycleduration:2.5,amplitude:16,clickNote:"We are very developer-biased",noteTime:3e3}),(0,a.jsx)(G,{y:42,x:80,type:"cld_candle_tr",z:0,size:17,cycleduration:3,amplitude:16,clickNote:"This cloud is not eligible. We won't tell you why",noteTime:3e3}),(0,a.jsx)(G,{y:18,x:68,type:"cld_p_tr",z:0,size:20,cycleduration:2,amplitude:16,clickNote:"Yes you found it! It's a shame we have to take it back",noteTime:3e3}),(0,a.jsx)(G,{y:15,x:59,type:"cld_p_trm",z:0,size:5,cycleduration:3,amplitude:16,clickNote:"Sorwrwer",noteTime:3e3}),(0,a.jsx)(G,{y:210,x:10,type:"cld_p_tr",z:0,size:12,cycleduration:3,amplitude:16,clickNote:"devnoteligbl",noteTime:3e3}),(0,a.jsx)(G,{y:195,x:75,type:"cld_p_tr",z:0,size:12,cycleduration:3,amplitude:16,clickNote:"devnoteligbl",noteTime:3e3}),(0,a.jsx)(n.E.img,{className:"w-[16vw] absolute top-[370vh] left-[10%] max-md:!hidden",src:"objects/plane.png",style:{transform:"rotate(-10deg)"}}),(0,a.jsx)(Q,{y:100,type:"arrow1"}),(0,a.jsx)(Q,{y:185,type:"arrow1"}),(0,a.jsx)(Q,{y:275,type:"arrow1"}),(0,a.jsx)(Q,{y:365,type:"arrow1"}),(0,a.jsx)(Q,{y:475,type:"arrow1"}),(0,a.jsxs)("div",{className:"section_",id:"land",children:[(0,a.jsx)(F,{}),(0,a.jsx)(G,{y:-5,x:80,type:"cld_p_tr",z:0,size:50,cycleduration:2.5,amplitude:5,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)(G,{y:15,x:-20,type:"cld_p_tr",z:0,size:50,cycleduration:2.5,amplitude:15,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)(G,{y:28,x:80,type:"cld_p_tr",z:0,size:50,cycleduration:2.5,amplitude:15,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)(G,{y:58,x:-15,type:"cld_p_tr",z:0,size:50,cycleduration:2.5,amplitude:15,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)(G,{y:89,x:80,type:"cld_p_tr",z:0,size:50,cycleduration:2.5,amplitude:5,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsxs)("div",{className:"absolute bottom-[10vh] flex justify-center gap-[5vw] max-md:!flex-col",children:[(0,a.jsx)(U,{onClick:()=>{window.location.href="#airdrop"},name:"Airdrop",size:1}),(0,a.jsx)(U,{onClick:()=>{window.location.href="#presale"},name:"Presale",size:1,accent:!0})]})]}),(0,a.jsx)(ea,{type:"arrow1",styles:""}),(0,a.jsxs)("div",{className:"section_1",id:"about",children:[(0,a.jsx)(G,{y:110,x:12,type:"cld_p_tl",z:0,size:10,cycleduration:3,amplitude:16,clickNote:"Sorry not sorry",noteTime:3e3}),(0,a.jsx)(G,{y:180,x:22,type:"cld_p_tl",z:0,size:10,cycleduration:3,amplitude:16,clickNote:"Sorry not sorry",noteTime:3e3}),(0,a.jsx)(G,{y:170,x:74,type:"cld_p_tl",z:0,size:10,cycleduration:3,amplitude:16,clickNote:"Sorry not sorry",noteTime:3e3}),(0,a.jsx)(G,{y:110,x:68,type:"cld_p_tr",z:0,size:22,cycleduration:12,amplitude:10,clickNote:"Sorry not sorry",noteTime:6e3}),(0,a.jsxs)("div",{className:"h-screen w-1/2 relative max-md:!w-[100%] max-md:!h-1/4",children:[(0,a.jsx)(G,{y:30,x:25,type:"cld_p_tl",z:1,size:50,cycleduration:2.5,amplitude:5,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)(G,{y:25,x:35,type:"cld_p_tl",z:0,size:35,cycleduration:3,amplitude:16,clickNote:"Sorry not sorry",noteTime:3e3}),(0,a.jsx)("img",{className:"max-md:!w-[100%] max-md:!h-[100%] max-md:!bottom-[auto] max-md:!left-[0%] max-md:top-[60vh] w-[50%] absolute top-[40%] bottom-[10%] left-[50%] right-[25%] opacity-20",src:"/backgrounds/dots.png"}),(0,a.jsx)(n.E.img,{className:"max-md:!w-[auto] max-md:!h-[100%] max-md:!bottom-[-3vh] max-md:!top-[auto] max-md:!left-[0px] w-[23vw] absolute right-[-5%] top-[15%] bottom-[25%] z-[1]",src:"/objects/candle_pcmn.PNG"}),(0,a.jsx)(J,{size:1.8,position:"left-[30%] top-[55%] max-md:!top-[60vh] max-md:!hidden max-md:!top-[60vh] max-md:!left-[15%] z-[20] max-md:!text-[2.5vh] ",children:(0,a.jsxs)("span",{className:"huggable_block text-ghost-white",style:{fontSize:"inherit",textAlign:"center",transform:"rotate(-15deg)"},children:["Backed by ",(0,a.jsx)("br",{})," ",(0,a.jsx)("span",{className:"text-golden",children:"GBlast"})]})})]}),(0,a.jsxs)("div",{className:"max-md:!w-[100%] sticky max-md:!justify-between max-md:!grow max-md:!h-[auto] max-md:!justify-between max-md:items-center h-screen w-1/2 flex flex-col justify-center",children:[(0,a.jsx)(G,{y:80,x:0,type:"cld_p_tl",z:1,size:50,cycleduration:2.5,amplitude:5,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsxs)(X.Z,{width:30,type:1,children:[(0,a.jsx)("h3",{className:"huggable_block text-white text-[2.7em]",children:"WHAT IS"}),(0,a.jsx)("h3",{className:"huggable_block text-golden text-[2.7em]",children:"$NOGOLD?"}),(0,a.jsx)("p",{className:"poppins_block pt-11",children:"$NOGOLD is a memecoin with no promises or expectations of financial return. It was born from the idea that Gold is not just for whales, but for everyone. $NOGOLD emerged to hit the Jackpot and spread joy among all Blast degens."})]}),(0,a.jsxs)("div",{className:"w-[100%] justify-center items-center hidden max-md:!flex flex-col pt-[10%]",children:[(0,a.jsx)("h3",{className:"huggable_block text-white text-[2.3em]",children:"BACKED BY"}),(0,a.jsx)("h3",{className:"huggable_block text-golden text-[2.7em]",children:"GBLAST.GG"})]}),(0,a.jsx)("div",{className:"mt-[5vh] ml-[5vw] z-10 max-md:!w-[100%] max-md:!flex max-md:!justify-center max-md:!ml-[0]",children:(0,a.jsx)(X.Z,{width:30,type:2,children:(0,a.jsx)("p",{className:"poppins_block text-center max-md:!text-[0.6em]",children:"0xcDbe12611F18B43098202d45928c905b34736C06"})})})]})]}),(0,a.jsx)(ea,{type:"arrow1",styles:"mt-[3vh] mb-[3vh]"}),(0,a.jsxs)("div",{className:"section_2",id:"tokenomics",children:[(0,a.jsx)(G,{y:46.5,x:65,type:"cld_p_tl",z:0,size:50,cycleduration:2.5,amplitude:5,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)(G,{y:58.5,x:-30,type:"cld_p_tl",z:0,size:50,cycleduration:2.5,amplitude:5,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)("div",{className:"flex justify-center items-center",children:(0,a.jsxs)("h2",{className:"huggable_block text-golden text-center text-[4vw] max-md:!text-[2.2em]",style:{zIndex:10},children:["$nogold",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-white max-md:!text-[1.6em]",children:"Tokenomics"})]})}),(0,a.jsxs)("div",{className:"flex flex-row grow max-md:!flex-col max-md:!mr-[0]",style:{marginTop:"3vh",gap:"2vw",marginRight:"5vw"},children:[(0,a.jsx)("div",{className:"max-md:!mt-[5vh] w-[50%] flex items-center justify-end max-md:!w-[100%] max-md:!justify-center",children:(0,a.jsx)("img",{className:"w-[60%]",src:"/objects/nodev_pcmn.PNG"})}),(0,a.jsxs)("div",{className:"flex flex-col w-[50%] max-md:!w-[100%] max-md:!grow",children:[(0,a.jsxs)("div",{className:"flex flex-col items-start justify-end text-[2.5vw] max-md:!flex max-md:!items-center max-md:!text-[2em] grid_macro_pad max-md:!hidden",children:[(0,a.jsx)("span",{className:"huggable_block text-white text-[1.3em]",children:"100,000,000"}),(0,a.jsx)("span",{className:"poppins_block text-[0.6em]",style:{fontSize:"0.6em"},children:"SUPPLY"})]}),(0,a.jsxs)("div",{className:"text-[2.5vw] grid_params grid_params_pad grow",style:{zIndex:"10"},children:[(0,a.jsxs)("div",{style:{gridArea:"1 / 1 / 2 / 2"},className:"flex flex-col items-start justify-end text-[inherit] max-md:!flex max-md:!items-center max-md:!text-[2em] ",children:[(0,a.jsx)("span",{className:"huggable_block text-white text-[1.3em]",children:"20%"}),(0,a.jsx)("span",{className:"poppins_block text-[0.6em]",style:{fontSize:"0.6em"},children:"LP"})]}),(0,a.jsxs)("div",{style:{gridArea:"1 / 2 / 2 / 3"},className:"flex flex-col items-start justify-end text-[inherit] max-md:!flex max-md:!items-center max-md:!text-[2em]",children:[(0,a.jsx)("span",{className:"huggable_block text-white text-[1.3em]",children:"50%"}),(0,a.jsx)("span",{className:"poppins_block text-[0.6em]",style:{fontSize:"0.6em"},children:"Presale"})]}),(0,a.jsxs)("div",{style:{gridArea:"2 / 1 / 3 / 2"},className:"flex flex-col items-start justify-center text-[inherit] max-md:!flex max-md:!items-center max-md:!text-[2em]",children:[(0,a.jsx)("span",{className:"huggable_block text-white text-[1.3em]",children:"15%"}),(0,a.jsx)("span",{className:"poppins_block text-[0.6em]",style:{fontSize:"0.6em"},children:"Airdrop + Referral"})]}),(0,a.jsxs)("div",{style:{gridArea:"2 / 2 / 3 / 3"},className:"flex flex-col items-start justify-center text-[inherit] max-md:!flex max-md:!items-center max-md:!text-[2em]",children:[(0,a.jsx)("span",{className:"huggable_block text-white text-[1.3em]",children:"5%"}),(0,a.jsx)("span",{className:"poppins_block text-[0.6em]",style:{fontSize:"0.6em"},children:"Kols and Pacman"})]}),(0,a.jsxs)("div",{style:{gridArea:"3 / 1 / 4 / 2"},className:"flex flex-col items-start justify-start text-[inherit] max-md:!flex max-md:!items-center max-md:!text-[2em]",children:[(0,a.jsx)("span",{className:"huggable_block text-white text-[1.3em]",children:"10%"}),(0,a.jsx)("span",{className:"poppins_block text-[0.6em]",style:{fontSize:"0.6em"},children:"Community Fund"})]}),(0,a.jsxs)("div",{style:{gridArea:"3 / 2 / 4 / 3"},className:"flex flex-col items-start justify-start text-[inherit] max-md:!flex max-md:!items-center max-md:!text-[2em]",children:[(0,a.jsx)("span",{className:"huggable_block text-white text-[1.3em]",children:"0%"}),(0,a.jsx)("span",{className:"poppins_block text-[0.6em]",style:{fontSize:"0.6em"},children:"Team (not eligible)"})]})]})]})]})]}),(0,a.jsx)(ea,{type:"arrow1",styles:"mb-[3vh]"}),(0,a.jsxs)("div",{className:"section_3",id:"airdrop",children:[(0,a.jsx)(G,{type:"cld_p_tr",size:20,x:16,y:43,z:2,cycleduration:2,amplitude:14}),(0,a.jsx)(G,{type:"cld_p_tr",size:25,x:57,y:15,z:0,cycleduration:3,amplitude:17}),(0,a.jsx)(G,{type:"cld_p_tr",size:16,x:87,y:5,z:0,cycleduration:2,amplitude:19}),(0,a.jsx)(G,{type:"cld_p_tr",size:15,x:93,y:70,z:2,cycleduration:3,amplitude:17}),(0,a.jsx)(G,{type:"cld_p_tr",size:16,x:-4,y:20,z:2,cycleduration:2,amplitude:19}),(0,a.jsx)(G,{type:"cld_p_tr",size:15,x:-3,y:70,z:2,cycleduration:3,amplitude:16}),(0,a.jsx)(G,{y:-20,x:0,type:"cld_p_tl",z:0,size:50,cycleduration:3,amplitude:14,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)(G,{y:75,x:60,type:"cld_p_tl",z:0,size:50,cycleduration:2,amplitude:11,clickNote:"Thank you! But your gold is another cloud!",noteTime:3e3,mob:!0}),(0,a.jsx)(n.E.img,{src:"/objects/aircoin.PNG",className:"absolute w-[15%] left-[25vw] top-[10%] z-0",style:{transform:"rotate(-5deg)"},whileInView:{rotate:[8,-8]},transition:{duration:19,ease:"linear",repeat:1/0,repeatType:"reverse"}}),(0,a.jsx)(n.E.img,{src:"/objects/aircoin.PNG",className:"absolute w-[8%] left-[3vw] top-[10%] z-0",style:{transform:"rotate(-5deg)"},whileInView:{rotate:[40,-40]},transition:{duration:12,ease:"linear",repeat:1/0,repeatType:"reverse"}}),(0,a.jsx)(n.E.img,{src:"/objects/aircoin.PNG",className:"absolute w-[5%] left-[82vw] top-[20%] z-0",style:{transform:"rotate(-5deg)"},whileInView:{rotate:[-22,22]},transition:{duration:11,ease:"linear",repeat:1/0,repeatType:"reverse"}}),(0,a.jsx)(n.E.img,{src:"/objects/aircoin.PNG",className:"absolute w-[9%] left-[5vw] top-[50%] z-0",style:{transform:"rotate(5deg)"},whileInView:{rotate:[-30,30]},transition:{duration:14,ease:"linear",repeat:1/0,repeatType:"reverse"}}),(0,a.jsx)(n.E.img,{src:"/objects/aircoin.PNG",className:"absolute w-[40%] right-[5%] top-[25%] max-md:!right-[-5%] max-md:!top-[-10%] z-30",style:{pointerEvents:"none",transform:"rotate(5deg)"},whileInView:{rotate:[8,-8]},transition:{duration:9,ease:"linear",repeat:1/0,repeatType:"reverse"}}),(0,a.jsxs)(X.Z,{width:30,type:3,children:[(0,a.jsxs)("div",{style:{padding:"0em 1.5em 0em 1.5em",marginBottom:"0.5em"},children:[(0,a.jsxs)("h2",{className:"huggable_block text-golden text-center text-[2em]",children:["$nogold",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-white",children:"airdrop"})]}),(0,a.jsxs)("p",{className:"poppins_block text-[0.3em] pt-11 text-center pt-[1.5em] mb-[2em] pb-[3em] max-md:!pt-[2.75em]",children:["Everyone deserves $NOGOLD, not just Pacman's friends or whales! Claim yours now and add it to your deck.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Invite friends and earn 10% of their claims."]}),(0,a.jsx)(U,{onClick:()=>{},isMd:!1,disabled:!0,name:"CHECK CLAIMED",size:1.1,accent:!0})]}),(0,a.jsx)(et,{size:1})]})]}),(0,a.jsx)(ea,{type:"arrow1",styles:"mt-[3vh] mb-[3vh]"}),(0,a.jsxs)("div",{className:"section_4",id:"presale",children:[(0,a.jsxs)("h2",{className:"huggable_block text-golden text-center text-[4vw] max-md:!text-[2.2em]",style:{zIndex:10},children:["$nogold",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-white max-md:!text-[1.6em]",children:"PRESALE"})]}),(0,a.jsx)(ef,{})]}),(0,a.jsxs)("div",{className:"section_5",id:"presale",children:[(0,a.jsx)(G,{y:400,x:5,type:"cld_candle_tr",z:0,size:12,cycleduration:3,amplitude:16,clickNote:"devnoteligbl",noteTime:3e3}),(0,a.jsx)(G,{y:370,x:75,type:"cld_candle_tr",z:0,size:16,cycleduration:3,amplitude:16,clickNote:"devnoteligbl",noteTime:3e3}),(0,a.jsx)(G,{y:410,x:3,type:"cld_candle_mid",z:0,size:8,cycleduration:3,amplitude:16,clickNote:"devnoteligbl",noteTime:3e3}),(0,a.jsx)(G,{y:450,x:87,type:"cld_candle_mid",z:0,size:8,cycleduration:3,amplitude:16,clickNote:"devnoteligbl",noteTime:3e3}),(0,a.jsx)(G,{y:480,x:65,type:"cld_p_tl",z:0,size:28,cycleduration:3,amplitude:16,clickNote:"devnoteligbl",noteTime:3e3}),(0,a.jsx)(G,{y:530,x:7,type:"cld_p_tr",z:0,size:28,cycleduration:3,amplitude:16,clickNote:"devnoteligbl",noteTime:3e3}),(0,a.jsxs)("div",{className:"flex flex-col gap-[5vw] justify-center items-center sticky",children:[(0,a.jsx)(ei,{}),(0,a.jsx)("div",{className:"flex justify-center h-[20%] items-center w-[60%] text-center",children:(0,a.jsx)("p",{className:"huggable_block max-md:!hidden",style:{color:"white"},children:"The amount of $NOGOLD received from your referrals depends on the ratio of the ETH deposited by your referrals to the total deposited ETH to the presale"})})]})]})]})]})]})})})})})}},57597:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[296,5128,8466,6824,2888,9774,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);