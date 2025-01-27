"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([["9880"],{9267:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"configuration/ssl-tls","title":"SSL-TLS","description":"How to configure SSL and TLS","source":"@site/docs/configuration/ssl-tls.md","sourceDirName":"configuration","slug":"/configuration/ssl-tls","permalink":"/docs/configuration/ssl-tls","draft":false,"unlisted":false,"editUrl":"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/configuration/ssl-tls.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"SSL-TLS","description":"How to configure SSL and TLS","sidebar_custom_props":{"myEmoji":"\uD83D\uDD10"}},"sidebar":"defaultSidebar","previous":{"title":"Screens","permalink":"/docs/configuration/telemetry-screens"},"next":{"title":"Tools","permalink":"/docs/tools"}}'),r=n("5893"),c=n("65");let o={sidebar_position:11,title:"SSL-TLS",description:"How to configure SSL and TLS",sidebar_custom_props:{myEmoji:"\uD83D\uDD10"}},s=void 0,a={},l=[{value:"Generate the certificate",id:"generate-the-certificate",level:3},{value:"Updating the openc3-traefik Dockerfile",id:"updating-the-openc3-traefik-dockerfile",level:3},{value:"Updating the Traefik config",id:"updating-the-traefik-config",level:3},{value:"Update docker-compose.yaml",id:"update-docker-composeyaml",level:3},{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"KEY",id:"key",level:4},{value:"CRT",id:"crt",level:4},{value:"CRT/KEY Bundle",id:"crtkey-bundle",level:4},{value:"cert.pem",id:"certpem",level:4},{value:"chain.pem",id:"chainpem",level:4},{value:"Checking certs",id:"checking-certs",level:3},{value:"Extracting the certificate and keys from a .pfx file",id:"extracting-the-certificate-and-keys-from-a-pfx-file",level:2},{value:"Extract .crt and .key files from .pfx file",id:"extract-crt-and-key-files-from-pfx-file",level:3},{value:"Convert .pfx file to .pem format",id:"convert-pfx-file-to-pem-format",level:3},{value:"TLS1.2 INADEQUATE_SECURITY Errors",id:"tls12-inadequate_security-errors",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["COSMOS 5 is a container based service which does not use SSL/TLS out of the box. This guide will help you configure SSL and TLS. Learn more at the Traefik ",(0,r.jsx)(t.a,{href:"https://doc.traefik.io/traefik/routing/entrypoints/#tls",children:"docs"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"generate-the-certificate",children:"Generate the certificate"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Note: Self-signed certificates are considered insecure for the Internet. Firefox will treat the site as having an invalid certificate, while Chrome will act as if the connection was plain HTTP."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To create a new Self-Signed SSL Certificate, use the openssl req command (run on linux from the cosmos-project root):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"openssl req -newkey rsa:4096 \\\n            -x509 \\\n            -sha256 \\\n            -days 3650 \\\n            -nodes \\\n            -out ./openc3-traefik/cert.crt \\\n            -keyout ./openc3-traefik/cert.key\n\nCountry Name (2 letter code) [XX]:.\nState or Province Name (full name) []:.\nLocality Name (eg, city) [Default City]:.\nOrganization Name (eg, company) [Default Company Ltd]:.\nOrganizational Unit Name (eg, section) []:.\nCommon Name (eg, your name or your server hostname) []: \x3c!-- UPDATE WITH YOUR HOSTNAME HERE --\x3e\nEmail Address []:\n"})}),"\n",(0,r.jsx)(t.p,{children:"Let's breakdown the command and understand what each option means:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"newkey rsa:4096"})," - Creates a new certificate request and 4096 bit RSA key. The default one is 2048 bits."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"x509"})," - Creates a X.509 Certificate."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"sha256"})," - Use 265-bit SHA (Secure Hash Algorithm)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"days 3650"})," - The number of days to certify the certificate for. 3650 is ten years. You can use any positive integer."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"nodes"})," - Creates a key without a passphrase."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"out ./openc3-traefik/cert.crt"})," - Specifies the filename to write the newly created certificate to. You can specify any file name."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"keyout ./openc3-traefik/cert.key"})," - Specifies the filename to write the newly created private key to. You can specify any file name."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For more information about the ",(0,r.jsx)(t.code,{children:"openssl req"})," command options, visit the ",(0,r.jsx)(t.a,{href:"https://www.openssl.org/docs/man1.0.2/man1/openssl-req.html",children:"OpenSSL req documentation page"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"updating-the-openc3-traefik-dockerfile",children:"Updating the openc3-traefik Dockerfile"}),"\n",(0,r.jsx)(t.p,{children:"Add the new cert to the traefik Docker container."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:"--- a/openc3-traefik/Dockerfile\n+++ b/openc3-traefik/Dockerfile\n@@ -1,3 +1,4 @@\n FROM traefik:2.4\n COPY ./traefik.yaml /etc/traefik/traefik.yaml\n+COPY ./cert.crt ./cert.key /etc/certs/\n EXPOSE 80\n"})}),"\n",(0,r.jsx)(t.h3,{id:"updating-the-traefik-config",children:"Updating the Traefik config"}),"\n",(0,r.jsx)(t.p,{children:"Configure Traefik to use the new cert file."}),"\n",(0,r.jsx)(t.p,{children:"openc3-traefik/traefik.yaml"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:'--- a/openc3-traefik/traefik.yaml\n+++ b/openc3-traefik/traefik.yaml\n@@ -3,6 +3,17 @@\n+tls:\n+  certificates:\n+   - certFile: "/etc/certs/cert.crt"\n+     keyFile: "/etc/certs/cert.key"\n# Listen for everything coming in on the standard HTTP port\nentrypoints:\n  web:\n    address: ":2900"\n+    http:\n+      redirections:\n+        entryPoint:\n+          to: websecure\n+          scheme: https\n+  websecure:\n+    address: ":2943"\n+    http:\n+      tls:\n+        domains:\n+          - main: "\x3c!-- UPDATE WITH YOUR HOSTNAME HERE --\x3e"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"update-docker-composeyaml",children:"Update docker-compose.yaml"}),"\n",(0,r.jsx)(t.p,{children:"Update traefik to use secure port 443 instead of port 80."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:'--- a/compose.yaml\n+++ b/compose.yaml\n services:\n   openc3-minio:\n@@ -70,7 +70,7 @@ services:\n   openc3-traefik:\n     image: "ballaerospace/openc3-traefik:${OPENC3_TAG}"\n     ports:\n-      - "80:2900"\n+      - "443:2943"\n     restart: "unless-stopped"\n     depends_on:\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now you can run ",(0,r.jsx)(t.code,{children:"./openc3.sh start"})," to rebuild the Traefik container and it should include your new cert file."]}),"\n",(0,r.jsx)(t.h2,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,r.jsx)(t.h4,{id:"key",children:"KEY"}),"\n",(0,r.jsx)(t.p,{children:'privkey.pem is the "key" file'}),"\n",(0,r.jsx)(t.p,{children:"Sometimes it is named as cert.key or example.com.key."}),"\n",(0,r.jsx)(t.h4,{id:"crt",children:"CRT"}),"\n",(0,r.jsx)(t.p,{children:'fullchain.pem is your "crt" file.'}),"\n",(0,r.jsx)(t.p,{children:"Sometimes it is named as example.com.crt."}),"\n",(0,r.jsx)(t.h4,{id:"crtkey-bundle",children:"CRT/KEY Bundle"}),"\n",(0,r.jsx)(t.p,{children:"bundle.pem would be made like so: cat fullchain.pem privkey.pem > bundle.pem"}),"\n",(0,r.jsx)(t.p,{children:"HAProxy is the only server that I know of that uses bundle.pem."}),"\n",(0,r.jsx)(t.h4,{id:"certpem",children:"cert.pem"}),"\n",(0,r.jsx)(t.p,{children:"cert.pem contains ONLY your certificate, which can only be used by itself if the browser already has the certificate which signed it, which may work in testing (which makes it seem like it may be the right file), but will actually fail for many of your users in production with a security error of untrusted certificate."}),"\n",(0,r.jsx)(t.p,{children:"However, you don't generally use the cert.pem by itself. It's almost always coupled with chain.pem as fullchain.pem."}),"\n",(0,r.jsx)(t.h4,{id:"chainpem",children:"chain.pem"}),"\n",(0,r.jsx)(t.p,{children:"chain.pem is the intermediary signed authority, signed by the root authority - which is what all browsers are guaranteed to have in their pre-built cache."}),"\n",(0,r.jsx)(t.h3,{id:"checking-certs",children:"Checking certs"}),"\n",(0,r.jsx)(t.p,{children:"You can inspect the cert like so:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"openssl x509 -in cert.pem -text -noout\n"})}),"\n",(0,r.jsx)(t.h2,{id:"extracting-the-certificate-and-keys-from-a-pfx-file",children:"Extracting the certificate and keys from a .pfx file"}),"\n",(0,r.jsx)(t.p,{children:"The .pfx file, which is in a PKCS#12 format, contains the SSL certificate (public keys) and the corresponding private keys. You might have to import the certificate and private keys separately in an unencrypted plain text format to use it on another system. This topic provides instructions on how to convert the .pfx file to .crt and .key files."}),"\n",(0,r.jsx)(t.h3,{id:"extract-crt-and-key-files-from-pfx-file",children:"Extract .crt and .key files from .pfx file"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"PREREQUISITE: Ensure OpenSSL is installed in the server that contains the SSL certificate."}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Start OpenSSL from the OpenSSL\\bin folder."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Open the command prompt and go to the folder that contains your .pfx file."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run the following command to extract the private key:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"openssl pkcs12 -in [yourfile.pfx] -nocerts -out [drlive.key]\n"})}),"\n",(0,r.jsx)(t.p,{children:"You will be prompted to type the import password. Type the password that you used to protect your keypair when you created the .pfx file. You will be prompted again to provide a new password to protect the .key file that you are creating. Store the password to your key file in a secure place to avoid misuse."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Run the following command to extract the certificate:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"openssl pkcs12 -in [yourfile.pfx] -clcerts -nokeys -out [drlive.crt]\n"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Run the following command to decrypt the private key:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"openssl rsa -in [drlive.key] -out [drlive-decrypted.key]\n"})}),"\n",(0,r.jsx)(t.p,{children:"Type the password that you created to protect the private key file in the previous step.\nThe .crt file and the decrypted and encrypted .key files are available in the path, where you started OpenSSL."}),"\n",(0,r.jsx)(t.h3,{id:"convert-pfx-file-to-pem-format",children:"Convert .pfx file to .pem format"}),"\n",(0,r.jsx)(t.p,{children:"There might be instances where you might have to convert the .pfx file into .pem format. Run the following command to convert it into PEM format."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"openssl rsa -in [keyfile-encrypted.key] -outform PEM -out [keyfile-encrypted-pem.key]\n"})}),"\n",(0,r.jsx)(t.h2,{id:"tls12-inadequate_security-errors",children:"TLS1.2 INADEQUATE_SECURITY Errors"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://doc.traefik.io/traefik/https/tls/#cipher-suites",children:"https://doc.traefik.io/traefik/https/tls/#cipher-suites"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/crypto/tls#pkg-constants",children:"https://pkg.go.dev/crypto/tls#pkg-constants"})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"tls:\n  options:\n    default:\n      cipherSuites:\n        - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256\n        - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\n        - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n        - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\n        - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256\n        - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256\n"})})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},65:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var i=n(7294);let r={},c=i.createContext(r);function o(e){let t=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);