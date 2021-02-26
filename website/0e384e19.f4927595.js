(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(84)),a={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Goals",source:"@site/docs/intro.md",slug:"/",permalink:"/gatekeeper/website/docs/",editUrl:"https://open-policy-agent.github.io/gatekeeper/website/docs/docs/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Installation",permalink:"/gatekeeper/website/docs/install"}},l=[{value:"Goals",id:"goals",children:[]},{value:"How is Gatekeeper different from OPA?",id:"how-is-gatekeeper-different-from-opa",children:[{value:"Admission Webhook Fail-Open Status",id:"admission-webhook-fail-open-status",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"goals"},"Goals"),Object(i.b)("p",null,"Every organization has policies. Some are essential to meet governance and legal requirements. Others help ensure adherance to best practices and institutional conventions. Attempting to ensure compliance manually would be error-prone and frustrating. Automating policy enforcement ensures consistency, lowers development latency through immediate feedback, and helps with agility by allowing developers to operate independently without sacrificing compliance."),Object(i.b)("p",null,"Kubernetes allows decoupling policy decisions from the inner workings of the API Server by means of ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"admission controller webhooks"),", which are executed whenever a resource is created, updated or deleted. Gatekeeper is a validating (mutating TBA) webhook that enforces CRD-based policies executed by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/open-policy-agent/opa"},"Open Policy Agent"),", a policy engine for Cloud Native environments hosted by CNCF as an incubation-level project."),Object(i.b)("p",null,"In addition to the ",Object(i.b)("inlineCode",{parentName:"p"},"admission")," scenario, Gatekeeper's audit functionality allows administrators to see what resources are currently violating any given policy."),Object(i.b)("p",null,"Finally, Gatekeeper's engine is designed to be portable, allowing administrators to detect and reject non-compliant commits to an infrastructure-as-code system's source-of-truth, further strengthening compliance efforts and preventing bad state from slowing down the organization."),Object(i.b)("h2",{id:"how-is-gatekeeper-different-from-opa"},"How is Gatekeeper different from OPA?"),Object(i.b)("p",null,"Compared to using ",Object(i.b)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/kubernetes-admission-control.html"},"OPA with its sidecar kube-mgmt")," (aka Gatekeeper v1.0), Gatekeeper introduces the following functionality:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An extensible, parameterized policy library"),Object(i.b)("li",{parentName:"ul"},'Native Kubernetes CRDs for instantiating the policy library (aka "constraints")'),Object(i.b)("li",{parentName:"ul"},'Native Kubernetes CRDs for extending the policy library (aka "constraint templates")'),Object(i.b)("li",{parentName:"ul"},"Audit functionality")),Object(i.b)("h3",{id:"admission-webhook-fail-open-status"},"Admission Webhook Fail-Open Status"),Object(i.b)("p",null,"Currently Gatekeeper is defaulting to using ",Object(i.b)("inlineCode",{parentName:"p"},"failurePolicy\u200b: \u200bIgnore")," for admission request webhook errors. The impact of\nthis is that when the webhook is down, or otherwise unreachable, constraints will not be\nenforced. Audit is expected to pick up any slack in enforcement by highlighting invalid\nresources that made it into the cluster."),Object(i.b)("p",null,"The reason for fail-open is because the webhook server currently only has one instance, which risks downtime\nduring actions like upgrades. If we were to fail closed, this downtime would lead to\ndowntime in the cluster's control plane. We are currently working on addressing issues\nthat may cause multi-pod deployments of Gatekeeper to not work as expected. Once\nwe can improve availability by running in multiple pods, we will likely make\nthat setup the default and change our default webhook behavior to fail-closed (",Object(i.b)("inlineCode",{parentName:"p"},"failurePolicy: Fail"),")."),Object(i.b)("p",null,"If desired, the webhook can be set to fail-closed by modifying the ValidatingWebhookConfiguration,\nthough this may have uptime impact on your cluster's control plane. In the interim,\nit is best to avoid policies that assume 100% enforcement during request\ntime (e.g. mimicking RBAC-like behavior by validating the user making the request)."))}u.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);