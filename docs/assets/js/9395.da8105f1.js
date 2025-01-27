(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([["9395"],{7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,s,i]=t;if(r&&i){r=parseInt(r);let e=r<(i=parseInt(i))?1:-1;("-"===s||".."===s||"\u2025"===s)&&(i+=e);for(let t=r;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},5094:function(e,t,n){"use strict";n.d(t,{Z:()=>B});var r=n("5893"),s=n("7294"),i=n("7026"),o=n("6025"),a=n("4681");let l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(e){let{type:t,className:n,children:s}=e;return(0,r.jsx)("div",{className:(0,i.Z)(a.k.common.admonition,a.k.common.admonitionType(t),l.admonition,n),children:s})}function d(e){let{icon:t,title:n}=e;return(0,r.jsxs)("div",{className:l.admonitionHeading,children:[(0,r.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function u(e){let{children:t}=e;return t?(0,r.jsx)("div",{className:l.admonitionContent,children:t}):null}function m(e){let{type:t,icon:n,title:s,children:i,className:o}=e;return(0,r.jsxs)(c,{type:t,className:o,children:[s||n?(0,r.jsx)(d,{title:s,icon:n}):null,(0,r.jsx)(u,{children:i})]})}let h={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,r.jsx)(m,{...h,...e,className:(0,i.Z)("alert alert--secondary",e.className),children:e.children})}let p={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function x(e){return(0,r.jsx)(m,{...p,...e,className:(0,i.Z)("alert alert--success",e.className),children:e.children})}let j={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,r.jsx)(m,{...j,...e,className:(0,i.Z)("alert alert--info",e.className),children:e.children})}function v(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let g={icon:(0,r.jsx)(v,{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},y={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},N={icon:(0,r.jsx)(v,{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},k={note:f,tip:x,info:b,warning:function(e){return(0,r.jsx)(m,{...g,...e,className:(0,i.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(m,{...y,...e,className:(0,i.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,r.jsx)(f,{title:"secondary",...e}),important:e=>(0,r.jsx)(b,{title:"important",...e}),success:e=>(0,r.jsx)(x,{title:"success",...e}),caution:function(e){return(0,r.jsx)(m,{...N,...e,className:(0,i.Z)("alert alert--warning",e.className),children:e.children})}};function B(e){let t=function(e){let{mdxAdmonitionTitle:t,rest:n}=function(e){let t=s.Children.toArray(e),n=t.find(e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),i=t.filter(e=>e!==n);return{mdxAdmonitionTitle:n?.props.children,rest:i.length>0?(0,r.jsx)(r.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}(e),n=function(e){let t=k[e];return t?t:(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),k.info)}(t.type);return(0,r.jsx)(n,{...t})}},5427:function(e,t,n){"use strict";n.d(t,{Z:()=>j});var r=n("5893");n("7294");var s=n("7026"),i=n("6025"),o=n("4819");function a(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n("4681"),h=n("5094");function f(e){let{className:t}=e;return(0,r.jsx)(h.Z,{type:"caution",title:(0,r.jsx)(d,{}),className:(0,s.Z)(t,m.k.common.draftBanner),children:(0,r.jsx)(u,{})})}function p(e){let{className:t}=e;return(0,r.jsx)(h.Z,{type:"caution",title:(0,r.jsx)(a,{}),className:(0,s.Z)(t,m.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function x(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{...e})]})}function j(e){let{metadata:t}=e,{unlisted:n,frontMatter:s}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||s.unlisted)&&(0,r.jsx)(x,{}),s.draft&&(0,r.jsx)(f,{})]})}},6594:function(e,t,n){"use strict";n.d(t,{Z:()=>x});var r=n("5893");n("7294");var s=n("7026"),i=n("6025"),o=n("4681"),a=n("3012");let l="iconEdit_Z9Sw";function c(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(l,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(a.Z,{to:t,className:o.k.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n("2933");function m(e){let{lastUpdatedAt:t}=e,n=new Date(t),s=(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,u.Z)(),n=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,u.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})})({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,r.jsx)(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,r.jsx)(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function f(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,r.jsxs)("span",{className:o.k.common.lastUpdated,children:[(0,r.jsx)(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,r.jsx)(m,{lastUpdatedAt:t}):"",byUser:n?(0,r.jsx)(h,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}let p="lastUpdated_JAkA";function x(e){let{className:t,editUrl:n,lastUpdatedAt:i,lastUpdatedBy:o}=e;return(0,r.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,r.jsx)("div",{className:"col",children:n&&(0,r.jsx)(d,{editUrl:n})}),(0,r.jsx)("div",{className:(0,s.Z)("col",p),children:(i||o)&&(0,r.jsx)(f,{lastUpdatedAt:i,lastUpdatedBy:o})})]})}},6798:function(e,t,n){"use strict";n.d(t,{Z:()=>en});var r=n("5893"),s=n("7294"),i=n("65"),o=n("4819"),a=n("7227"),l=n("7026"),c=n("4239"),d=n("140");function u(){let{prism:e}=(0,d.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var m=n("4681"),h=n("7594"),f=n.n(h);let p=/title=(?<quote>["'])(?<title>.*?)\1/,x=/\{(?<range>[\d,-]+)\}/,j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b={...j,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(j);function g(e,t){let n=e.map(e=>{let{start:n,end:r}=b[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let y="codeBlockContainer_Ckt0";function N(e){let{as:t,...n}=e,s=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,i=t[r];i&&"string"==typeof s&&(n[i]=s)}),n}(u());return(0,r.jsx)(t,{...n,style:s,className:(0,l.Z)(n.className,y,m.k.common.codeBlock)})}let k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return(0,r.jsx)(N,{as:"pre",tabIndex:0,className:(0,l.Z)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,r.jsx)("code",{className:k.codeBlockLines,children:t})})}var w=n("5346");let C={attributes:!0,characterData:!0,childList:!0,subtree:!0};var Z=n("1844");let L={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function E(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:i,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let a=i({line:t,className:(0,l.Z)(n,s&&L.codeLine)}),c=t.map((e,t)=>(0,r.jsx)("span",{...o({token:e})},t));return(0,r.jsxs)("span",{...a,children:[s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:L.codeLineNumber}),(0,r.jsx)("span",{className:L.codeLineContent,children:c})]}):c,(0,r.jsx)("br",{})]})}var _=n("6025");function T(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function A(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function S(e){let{code:t,className:n}=e,[i,o]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),c=(0,s.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);let n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let s=document.getSelection(),i=s.rangeCount>0&&s.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}n.remove(),i&&(s.removeAllRanges(),s.addRange(i)),r&&r.focus()}(t),o(!0),a.current=window.setTimeout(()=>{o(!1)},1e3)},[t]);return(0,s.useEffect)(()=>()=>window.clearTimeout(a.current),[]),(0,r.jsx)("button",{type:"button","aria-label":i?(0,_.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,_.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,_.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,I.copyButton,i&&I.copyButtonCopied),onClick:c,children:(0,r.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,r.jsx)(T,{className:I.copyButtonIcon}),(0,r.jsx)(A,{className:I.copyButtonSuccessIcon})]})})}function M(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let H={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function z(e){let{className:t,onClick:n,isEnabled:s}=e,i=(0,_.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,r.jsx)("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,s&&H.wordWrapButtonEnabled),"aria-label":i,title:i,children:(0,r.jsx)(M,{className:H.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){var t,n,i;let{children:o,className:a="",metastring:c,title:m,showLineNumbers:h,language:j}=e,{prism:{defaultLanguage:b,magicComments:y}}=(0,d.L)();let B=(t=j??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(a)??b,t?.toLowerCase()),L=u(),_=function(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),i=(0,s.useRef)(null),o=(0,s.useCallback)(()=>{let n=i.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[i,e]),a=(0,s.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=i.current;r(e>t||i.current.querySelector("code").hasAttribute("style"))},[i]);return!function(e,t){let[n,r]=(0,s.useState)(),i=(0,s.useCallback)(()=>{r(e.current?.closest("[role=tabpanel][hidden]"))},[e,r]);(0,s.useEffect)(()=>{i()},[i]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,r=(0,w.zX)(t),i=(0,w.Ql)(n);(0,s.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,i),()=>t.disconnect()},[e,r,i])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(i,a),(0,s.useEffect)(()=>{a()},[e,a]),(0,s.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:i,isEnabled:e,isCodeScrollable:n,toggle:o}}();let T=(n=c,(n?.match(p)?.groups.title??"")||m),{lineClassNames:A,code:I}=function(e,t){let n=e.replace(/\n$/,""),{language:r,magicComments:s,metastring:i}=t;if(i&&x.test(i)){let e=i.match(x).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=s[0].className;return{lineClassNames:Object.fromEntries(f()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===r)return{lineClassNames:{},code:n};let o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);case"vb":case"vba":case"visual-basic":return g(["vb","rem"],t);case"vbnet":return g(["vbnet","rem"],t);case"batch":return g(["rem"],t);case"basic":return g(["rem","f90"],t);case"fsharp":return g(["js","ml"],t);case"ocaml":case"sml":return g(["ml"],t);case"fortran":return g(["f90"],t);case"cobol":return g(["cobol"],t);default:return g(v,t)}}(r,s),a=n.split("\n"),l=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(o);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?l[c[n]].range+=`${e},`:d[n]?l[d[n]].start=e:u[n]&&(l[u[n]].range+=`${l[u[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let m={};return Object.entries(l).forEach(e=>{let[t,{range:n}]=e;f()(n).forEach(e=>{m[e]??=[],m[e].push(t)})}),{lineClassNames:m,code:n}}(o,{metastring:c,language:B,magicComments:y});let M=h??(i=c,!!i?.includes("showLineNumbers"));return(0,r.jsxs)(N,{as:"div",className:(0,l.Z)(a,B&&!a.includes(`language-${B}`)&&`language-${B}`),children:[T&&(0,r.jsx)("div",{className:k.codeBlockTitle,children:T}),(0,r.jsxs)("div",{className:k.codeBlockContent,children:[(0,r.jsx)(Z.y$,{theme:L,code:I,language:B??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:i,getTokenProps:o}=e;return(0,r.jsx)("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,l.Z)(t,k.codeBlock,"thin-scrollbar"),style:n,children:(0,r.jsx)("code",{className:(0,l.Z)(k.codeBlockLines,M&&k.codeBlockLinesWithNumbering),children:s.map((e,t)=>(0,r.jsx)(E,{line:e,getLineProps:i,getTokenProps:o,classNames:A[t],showLineNumbers:M},t))})})}}),(0,r.jsxs)("div",{className:k.buttonGroup,children:[(_.isEnabled||_.isCodeScrollable)&&(0,r.jsx)(z,{className:k.codeButton,onClick:()=>_.toggle(),isEnabled:_.isEnabled}),(0,r.jsx)(S,{className:k.codeButton,code:I})]})]})]})}function V(e){var t;let{children:n,...i}=e,o=(0,a.Z)();let l=(t=n,s.Children.toArray(t).some(e=>(0,s.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t);return(0,r.jsx)("string"==typeof l?R:B,{...i,children:l},String(o))}function U(e){return(0,r.jsx)("code",{...e})}var $=n("3012"),O=n("1065"),D=n("7455");let W={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function q(e){return!!e&&("SUMMARY"===e.tagName||q(e.parentElement))}function P(e){let{summary:t,children:n,...i}=e;(0,O.Z)().collectAnchor(i.id);let o=(0,a.Z)(),c=(0,s.useRef)(null),{collapsed:d,setCollapsed:u}=(0,D.u)({initialState:!i.open}),[m,h]=(0,s.useState)(i.open),f=s.isValidElement(t)?t:(0,r.jsx)("summary",{children:t??"Details"});return(0,r.jsxs)("details",{...i,ref:c,open:m,"data-collapsed":d,className:(0,l.Z)(W.details,o&&W.isBrowser,i.className),onMouseDown:e=>{q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let t=e.target;if(!!(q(t)&&function e(t,n){return!!t&&(t===n||e(t.parentElement,n))}(t,c.current)))e.preventDefault(),d?(u(!1),h(!0)):u(!0)},children:[f,(0,r.jsx)(D.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),h(!e)},children:(0,r.jsx)("div",{className:W.collapsibleContent,children:n})})]})}let F="details_b_Ee";function G(e){let{...t}=e;return(0,r.jsx)(P,{...t,className:(0,l.Z)("alert alert--info",F,t.className)})}function J(e){let t=s.Children.toArray(e.children),n=t.find(e=>s.isValidElement(e)&&"summary"===e.type),i=(0,r.jsx)(r.Fragment,{children:t.filter(e=>e!==n)});return(0,r.jsx)(G,{...e,summary:n,children:i})}var Y=n("4403");function K(e){return(0,r.jsx)(Y.Z,{...e})}let Q={containsTaskList:"containsTaskList_mC6p"},X="img_ev3q";var ee=n("5094");let et={Head:o.Z,details:J,Details:J,code:function(e){var t;return void 0!==(t=e).children&&s.Children.toArray(t.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,r.jsx)(U,{...e}):(0,r.jsx)(V,{...e})},a:function(e){return(0,r.jsx)($.Z,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,l.Z)(e,e?.includes("contains-task-list")&&Q.containsTaskList)}(e.className)})},li:function(e){return(0,O.Z)().collectAnchor(e.id),(0,r.jsx)("li",{...e})},img:function(e){var t;return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,l.Z)(t,X))})},h1:e=>(0,r.jsx)(K,{as:"h1",...e}),h2:e=>(0,r.jsx)(K,{as:"h2",...e}),h3:e=>(0,r.jsx)(K,{as:"h3",...e}),h4:e=>(0,r.jsx)(K,{as:"h4",...e}),h5:e=>(0,r.jsx)(K,{as:"h5",...e}),h6:e=>(0,r.jsx)(K,{as:"h6",...e}),admonition:ee.Z,mermaid:()=>null};function en(e){let{children:t}=e;return(0,r.jsx)(i.Z,{components:et,children:t})}},1397:function(e,t,n){"use strict";n.d(t,{Z:()=>a});var r=n("5893");n("7294");var s=n("7026"),i=n("6365");let o="tableOfContents_bqdL";function a(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.Z)(o,"thin-scrollbar",t),children:(0,r.jsx)(i.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},6365:function(e,t,n){"use strict";n.d(t,{Z:()=>c});var r=n("5893"),s=n("7294"),i=n("140");function o(e){let t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}var a=n("3012");let l=s.memo(function e(t){let{toc:n,className:s,linkClassName:i,isChild:o}=t;return n.length?(0,r.jsx)("ul",{className:o?void 0:s,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(a.Z,{to:`#${t.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:s,linkClassName:i})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,i.L)(),f=d??h.tableOfContents.minHeadingLevel,p=u??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,s.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:s}=t;return n.flatMap(t=>{var n;let i=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:s});return(n=t).level>=r&&n.level<=s?[{...t,children:i}]:i})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):r.push(s)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return!function(e){let t=(0,s.useRef)(void 0),n=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,s.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:a}=e;function l(){var e;let l=(e=r,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>o(e).top>=n);if(r){var s;return(s=o(r)).top>0&&s.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),{anchorTopOffset:n.current}),d=l.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});l.forEach(e=>{var n;n=e,e===d?(t.current&&t.current!==n&&t.current.classList.remove(s),n.classList.add(s),t.current=n):n.classList.remove(s)})}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}},[e,n])}((0,s.useMemo)(()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:p}},[a,c,f,p])),(0,r.jsx)(l,{toc:x,className:n,linkClassName:a,...m})}},65:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(7294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);