(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),i=(n(0),n(84)),r={id:"customize-admission",title:"Customizing Admission Behavior"},s={unversionedId:"customize-admission",id:"customize-admission",isDocsHomePage:!1,title:"Customizing Admission Behavior",description:"Gatekeeper is a Kubernetes admission webhook",source:"@site/docs/customize-admission.md",slug:"/customize-admission",permalink:"/gatekeeper/website/docs/customize-admission",editUrl:"https://open-policy-agent.github.io/gatekeeper/website/docs/docs/customize-admission.md",version:"current",sidebar:"someSidebar",previous:{title:"Customizing Startup Behavior",permalink:"/gatekeeper/website/docs/customize-startup"},next:{title:"Debugging",permalink:"/gatekeeper/website/docs/debug"}},l=[{value:"Enable Delete Operations",id:"enable-delete-operations",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Gatekeeper is a ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-configuration"},"Kubernetes admission webhook"),"\nwhose default configuration can be found in the ",Object(i.b)("inlineCode",{parentName:"p"},"gatekeeper.yaml")," manifest file. By default, it is\na ",Object(i.b)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," resource named ",Object(i.b)("inlineCode",{parentName:"p"},"gatekeeper-validating-webhook-configuration"),"."),Object(i.b)("p",null,"Currently the configuration specifies two webhooks: one for checking a request against\nthe installed constraints and a second webhook for checking labels on namespace requests\nthat would result in bypassing constraints for the namespace. The namespace-label webhook\nis necessary to prevent a privilege escalation where the permission to add a label to a\nnamespace is equivalent to the ability to bypass all constraints for that namespace.\nYou can read more about the ability to exempt namespaces by label ",Object(i.b)("a",{parentName:"p",href:"#exempting-namespaces-from-the-gatekeeper-admission-webhook"},"above"),"."),Object(i.b)("p",null,"Because Kubernetes adds features with each version, if you want to know how the webhook can be configured it\nis best to look at the official documentation linked at the top of this section. However, two particularly important\nconfiguration options deserve special mention: ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#timeouts"},"timeouts")," and\n",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy"},"failure policy"),"."),Object(i.b)("p",null,"Timeouts allow you to configure how long the API server will wait for a response from the admission webhook before it\nconsiders the request to have failed. Note that setting the timeout longer than the overall request timeout\nmeans that the main request will time out before the webhook's failure policy is invoked."),Object(i.b)("p",null,"Failure policy controls what happens when a webhook fails for whatever reason. Common\nfailure scenarios include timeouts, a 5xx error from the server or the webhook being unavailable.\nYou have the option to ignore errors, allowing the request through, or failing, rejecting the request.\nThis results in a direct tradeoff between availability and enforcement."),Object(i.b)("p",null,"Currently Gatekeeper is defaulting to using ",Object(i.b)("inlineCode",{parentName:"p"},"Ignore")," for the constraint requests. This is because\nthe webhook server currently only has one instance, which risks downtime during actions like upgrades.\nAs the theoretical availability improves we will likely change the default to ",Object(i.b)("inlineCode",{parentName:"p"},"Fail"),"."),Object(i.b)("p",null,"The namespace label webhook defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"Fail"),", this is to help ensure that policies preventing\nlabels that bypass the webhook from being applied are enforced. Because this webhook only gets\ncalled for namespace modification requests, the impact of downtime is mitigated, making the\ntheoretical maximum availability less of an issue."),Object(i.b)("p",null,"Because the manifest is available for customization, the webhook configuration can\nbe tuned to meet your specific needs if they differ from the defaults."),Object(i.b)("h2",{id:"enable-delete-operations"},"Enable Delete Operations"),Object(i.b)("p",null,"To enable Delete operations for the ",Object(i.b)("inlineCode",{parentName:"p"},"validation.gatekeeper.sh"),' admission webhook, add "DELETE" to the list of operations in the ',Object(i.b)("inlineCode",{parentName:"p"},"gatekeeper-validating-webhook-configuration")," ValidatingWebhookConfiguration as seen in this deployment manifest of gatekeeper: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/v3.1.0-beta.10/deploy/gatekeeper.yaml#L792-L794"},"here"),"\nNote: For admission webhooks registered for DELETE operations, use Kubernetes v1.15.0+"),Object(i.b)("p",null," So you have"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-YAML"},"   operations:\n   - CREATE\n   - UPDATE\n   - DELETE\n")),Object(i.b)("p",null,"You can now check for deletes."))}u.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(r,".").concat(h)]||p[h]||b[h]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);