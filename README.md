# CI/CD Info
For all information about the CI/CD workflows in this application click on the following PDF link [here](./PDF/CI-CD%20information.pdf)



# Docker instructions
- Before running containers create admin secrets by creating two files in a folder called .secrets file names are admin_email and admin_password
- Then in those files put in the admin email and password respectively
- to build and run the containers use the following code: docker compose up --build

To run backend seperately create a .env.local in the backend folder

- needs to contain PORT, DATABASE_URL, ADMIN_PASSWORD and ADMIN_EMAIL
- change directory to backend by typing cd backend in terminal then type npm run dev.

To run front end seperately type cd frontend then npm run dev into the terminal



# Introduction to Buzz My Day Application

https://buzzmydaycoffee.netlify.app/

This app allows users to find their favourite instant coffee, read and write reviews, view coffee prices, and rate coffee

# Development stage

This app is currently a demo of the full app to come in this app we aim to show some of the many features that will be available in time
The following things you can do

User:

- Browse the home page
- Create login and account
- login and view account
- view saved account once logged in
- edit account
- delete account
- add coffee to favourites when logged in and delete coffee from favourites

Admin

- Go to personal edit page upon logging in (not yet functioning) this page will be unavailable to users

Future features:

- Review add, create, and delete reviews
- Admin can add, update and delete coffee

## Vs code set up

Dependecies note: To run the app in VS code a PC with windows 10 or 11 is required.
To run the app in VS code please note that if opening in Vs code then Ubuntu 22-.04 (WSL) must be installed to install this on a windows device go to the microsoft store and download the Ubuntu 22.04.5 LTS app.
Then install windows terminal from the microsoft app store. Then follow the instructions in the link below https://learn.microsoft.com/en-us/windows/wsl/install.

- Once downloaded go to VS code and use the instructions from the link below to run WSL in VS code https://code.visualstudio.com/docs/remote/wsl-tutorial,

Using VS code:
To set up and run this application a user needs to perform the following steps

- Clone the code from Github by going to the link https://github.com/ImTheDmThatsWhy/emergencyRepository and click on the code button and click copy code, then in VS code click on the search bar at the top and type >Git:Clone (or go to show and run commands and search for Git:Clone and click on it) then paste the copied code into the search bar it will then prompt you to save the cloned repository to a folder

- After you have saved the repository open the folder in VS code by clicking on file open folder,

- After you have opened the folder, open up a terminal by clicking on terminal then new terminal and open up to the Ubuntu 22.04 (WSL),

Note for a mac device ubuntu can also be installed using the instructions in the following link https://gbtimes.com/how-to-install-ubuntu-on-mac/
however, the requirements listed in the instructions must be met.

Vs code for Mac can also be installed.

# React + Vite

Source(1): Wikipedia. (2024). Vite (software). [online] Available at: https://en.wikipedia.org/wiki/Vite_(software).

Source (2): npm. (2025). vite. [online] Available at: https://www.npmjs.com/package/vite [Accessed 23 Mar. 2025].

Vite is a local development server that was written by Evan You, it will be used in the React side of this application to help build and develop the server. Vite also provides a built in server side rendering that will be utilised in this application. Vite will be used as its Hot Module Replacement system reduces wait times during production, and its production build time is faster compared to traditional build tools such as WebPaxk and Parcel (Source 1). Note for this assignment React was used in vite.

Dependencies:

- esbuild
- postcss
- rollup

To Install: Follow the following instructions to view Vite set up and dev dependencies: https://vite.dev/guide/

Dev Dependencies:

- @ampproject/remapping
- @babel/parser
- @jridgewell/trace-mapping
- @polka/compression
- @rollup/plugin-alias
- @rollup/plugin-commonjs
- @rollup/plugin-dynamic-import-vars
- @rollup/plugin-json
- @rollup/plugin-node-resolve
- @rollup/pluginutils
- @types/escape-html
- @types/pnpapi
- artichokie
- cac
- chokidar
- connect
- convert-source-map
- cors
- cross-spawn
- debug
- dotenv
- dotenv-expand
- es-module-lexer
- escape-html
- estree-walker
- etag
- http-proxy
- launch-editor-middleware
- lightningcss
- magic-string
- mlly
- mrmime
- nanoid
- open
- parse5
- pathe
- periscopic
- picocolors
- picomatch
- postcss-import
- postcss-load-config
- postcss-modules
- resolve.exports
- rollup-plugin-dts
- rollup-plugin-esbuild
- rollup-plugin-license
- sass
- sass-embedded
- sirv
- source-map-support
- strip-literal
- terser
- tinyglobby
- tsconfck
- tslib
- ufo
- ws

Licensing and Ethics: Vite is under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of Vite in this application as I have acknowledged that it is under the MIT license, in accordance with the license requirements Source 1.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Why React?

source: GeeksforGeeks. (2022). React VS Angular VS Vue - Which Framework is the Best? [online] Available at: https://www.geeksforgeeks.org/react-vs-angular-vs-vue-which-framework-is-the-best/.

For this web application React will be used over its counterparts Vue.js and Angular. According to the source above React is a javascript library for user interfaces. Angular in comparison is a framework that uses a regular DOM, while Vue which is considered a progressive framework was created to be a better version of Angular with a custom tool. In terms of performance React is known for fast performance due to the virtual DOM implementation, React is also very flexible. In comparison Angular's performance can vary depending on how complex the app is and how its implemented. While Vue also as a high performance capacity it is not as well known as React. Therefore, as React is well known which will be useful for troubleshooting and learning purposes, is flexible and has a high performance capibility it will be used instead of Vue and Angular.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Product access:

The Buzz My Day Application will be a standalone application hosted on a remote server and accessible to users through a web browser.

## Project Dependencies

This project relies on the following which are explained in detail below:

- axios
- react
- react-dom
- react-router
- react-router-dom
- @fontsource/inter

## App Functions:

• User registration and login
• Search function for coffees
• Write, read, update, and delete reviews
• Create, read, update, and delete posts
• Save coffees to a favourites list

## Style Guide

This application uses the Prettier formatter as its style guide.

## Operating design:

• Web Browser: The web app will be accessible through Chrome, Safari, and Internet Explorer browsers.
• Responsive Design: The application will be designed using a mobile-first approach so that the web app can be accessed on tablets, mobiles, and desktop screens
• Cloud-based-server: Render will be used to deploy the application.
• Frontend: To create the frontend React will be used through vite.
• Database Deployment: To deploy the database MongoDB Cloud Atlas will be used.

## Style Guide

This application uses the Prettier formatter as its style guide. Prettier is being used in this applicationto help maintain code consistency throughout the JavaScript project. Follow the instructions in step 6 for VS code to install prettier: https://www.geeksforgeeks.org/how-to-set-up-prettier-in-your-javascript-typescript-project/.

Licensing and Ethics:

Source: npm. (2024). prettier. [online] Available at: https://www.npmjs.com/package/prettier.

Prettier has 0 dependencies and is under the MIT license which is posted below in this

#### MIT LICENSE:

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### React and react-dom

source: npm. (n.d.). react. [online] Available at: https://www.npmjs.com/package/react.

source: npm. (n.d.). react. [online] Available at: https://www.npmjs.com/package/react-dom

React is a JavaScript library that will be used to create the user interface for this web application and it will be used along with react-dom to act as an entry to the DOM and for rendering.

React according to the first source above has 0 dependencies or dev dependencies. To install react follopw the instructions in the following link https://www.npmjs.com/package/react.

React-dom according to the second source has one dependency which is scheduler. To install follow the instructions in the following link:

Licensing and Ethics: React and react-dom are under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of React and react-dom in this application as I have acknowledged that React is under the MIT license, in accordance with the license requirements.

### react-router

source:npm. (n.d.). react-router. [online] Available at: https://www.npmjs.com/package/react-router.

This app has been used to create routers throughout the application according to the source above it has the following depedencies:

- @types/cookie
- cookie
- set-cookie-parser
- turbo-stream

### Dev dependencies

- @types/set-cookie-parser
- react
- react-dom
- rimraf
- tsup
- typescript
- wireit

To install react-router follow the instructions in the following link: https://www.npmjs.com/package/react-router

Licensing and Ethics: react-router is under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of react-router in this application as I have acknowledged that it is under the MIT license, in accordance with the license requirements.

### VS code built in css and HTML

Css will be used to add styling to the application and is already built into VS code source code is under the MIT licence which has already been posted while VS code is under the following license

```
MICROSOFT SOFTWARE LICENSE TERMS
MICROSOFT VISUAL STUDIO CODE
These license terms are an agreement between you and Microsoft Corporation (or based on where you live, one of its affiliates). They apply to the software named above. The terms also apply to any Microsoft services or updates for the software, except to the extent those have different terms.

IF YOU COMPLY WITH THESE LICENSE TERMS, YOU HAVE THE RIGHTS BELOW.

INSTALLATION AND USE RIGHTS.
General. You may use any number of copies of the software to develop and test your applications, including deployment within your internal corporate network.
Demo use. The uses permitted above include use of the software in demonstrating your applications.
Third Party Components. The software may include third party components with separate legal notices or governed by other agreements, as may be described in the ThirdPartyNotices file accompanying the software.
Extensions. The software gives you the option to download other Microsoft and third party software packages from our extension marketplace or package managers. Those packages are under their own licenses, and not this agreement. Microsoft does not distribute, license or provide any warranties for any of the third party packages. By accessing or using our extension marketplace, you agree to the extension marketplace terms located at https://aka.ms/vsmarketplace-ToU.
DATA.
Data Collection. The software may collect information about you and your use of the software, and send that to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may opt-out of many of these scenarios, but not all, as described in the product documentation located at https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting. There may also be some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with Microsoft’s privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.
Processing of Personal Data. To the extent Microsoft is a processor or subprocessor of personal data in connection with the software, Microsoft makes the commitments in the European Union General Data Protection Regulation Terms of the Online Services Terms to all customers effective May 25, 2018, at https://docs.microsoft.com/legal/gdpr.
UPDATES. The software may periodically check for updates and download and install them for you. You may obtain updates only from Microsoft or authorized sources. Microsoft may need to update your system to provide you with updates. You agree to receive these automatic updates without any additional notice. Updates may not include or support all existing software features, services, or peripheral devices. If you do not want automatic updates, you may turn them off by following the instructions in the documentation at https://go.microsoft.com/fwlink/?LinkID=616397.
FEEDBACK. If you give feedback about the software to Microsoft, you give to Microsoft, without charge, the right to use, share and commercialize your feedback in any way and for any purpose. You will not give feedback that is subject to a license that requires Microsoft to license its software or documentation to third parties because we include your feedback in them. These rights survive this agreement.
SCOPE OF LICENSE. This license applies to the Visual Studio Code product. Source code for Visual Studio Code is available at https://github.com/Microsoft/vscode under the MIT license agreement. The software is licensed, not sold. This agreement only gives you some rights to use the software. Microsoft reserves all other rights. Unless applicable law gives you more rights despite this limitation, you may use the software only as expressly permitted in this agreement. In doing so, you must comply with any technical limitations in the software that only allow you to use it in certain ways. You may not
reverse engineer, decompile or disassemble the software, or otherwise attempt to derive the source code for the software except and solely to the extent required by third party licensing terms governing use of certain open source components that may be included in the software;
remove, minimize, block or modify any notices of Microsoft or its suppliers in the software;
use the software in any way that is against the law;
share, publish, rent or lease the software, or provide the software as a stand-alone offering for others to use.
SUPPORT SERVICES. Because this software is “as is,” we may not provide support services for it.
ENTIRE AGREEMENT. This agreement, and the terms for supplements, updates, Internet-based services and support services that you use, are the entire agreement for the software and support services.
EXPORT RESTRICTIONS. You must comply with all domestic and international export laws and regulations that apply to the software, which include restrictions on destinations, end-users, and end use. For further information on export restrictions, see https://www.microsoft.com/exporting.
APPLICABLE LAW. If you acquired the software in the United States, Washington law applies to interpretation of and claims for breach of this agreement, and the laws of the state where you live apply to all other claims. If you acquired the software in any other country, its laws apply.
CONSUMER RIGHTS; REGIONAL VARIATIONS. This agreement describes certain legal rights. You may have other rights, including consumer rights, under the laws of your state or country. Separate and apart from your relationship with Microsoft, you may also have rights with respect to the party from which you acquired the software. This agreement does not change those other rights if the laws of your state or country do not permit it to do so. For example, if you acquired the software in one of the below regions, or mandatory country law applies, then the following provisions apply to you:
Australia. You have statutory guarantees under the Australian Consumer Law and nothing in this agreement is intended to affect those rights.
Canada. If you acquired this software in Canada, you may stop receiving updates by turning off the automatic update feature, disconnecting your device from the Internet (if and when you re-connect to the Internet, however, the software will resume checking for and installing updates), or uninstalling the software. The product documentation, if any, may also specify how to turn off updates for your specific device or software.
Germany and Austria.
Warranty. The properly licensed software will perform substantially as described in any Microsoft materials that accompany the software. However, Microsoft gives no contractual guarantee in relation to the licensed software.
Limitation of Liability. In case of intentional conduct, gross negligence, claims based on the Product Liability Act, as well as, in case of death or personal or physical injury, Microsoft is liable according to the statutory law.
Subject to the foregoing clause (ii), Microsoft will only be liable for slight negligence if Microsoft is in breach of such material contractual obligations, the fulfillment of which facilitate the due performance of this agreement, the breach of which would endanger the purpose of this agreement and the compliance with which a party may constantly trust in (so-called "cardinal obligations"). In other cases of slight negligence, Microsoft will not be liable for slight negligence.

DISCLAIMER OF WARRANTY. The software is licensed “as-is.” You bear the risk of using it. Microsoft gives no express warranties, guarantees or conditions. To the extent permitted under your local laws, Microsoft excludes the implied warranties of merchantability, fitness for a particular purpose and non-infringement.
LIMITATION ON AND EXCLUSION OF DAMAGES. You can recover from Microsoft and its suppliers only direct damages up to U.S. $5.00. You cannot recover any other damages, including consequential, lost profits, special, indirect or incidental damages.

This limitation applies to (a) anything related to the software, services, content (including code) on third party Internet sites, or third party applications; and (b) claims for breach of contract, breach of warranty, guarantee or condition, strict liability, negligence, or other tort to the extent permitted by applicable law.

It also applies even if Microsoft knew or should have known about the possibility of the damages. The above limitation or exclusion may not apply to you because your state or country may not allow the exclusion or limitation of incidental, consequential or other damages.
```

As the license allows the development of applications and for third party software there is no ethical concerns in regards to using VS code software including HTML (used to build front end layout) and other imported software providing the imported softwares licensing conditions are met.

### react-router-dom

Source:
npm. (n.d.). react-router-dom. [online] Available at: https://www.npmjs.com/package/react-router-dom.

Used to smooth upgrade path from react-router.

To install follow instructions at: https://www.npmjs.com/package/react-router-dom

Dependency:

- react-router

Dev Dependency:

- react
- react-dom
- -tsup
- typescript
- wireit

Licensing and Ethics: react-router-dom is under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of react-router-dom in this application as I have acknowledged that it is under the MIT license, in accordance with the license requirements.

### Axios

Source: npm. (n.d.). axios. [online] Available at: https://www.npmjs.com/package/axios.

Axios is a library that is being used in the front end to make requests to the API server.

To install Axios follow the instructions in https://www.npmjs.com/package/axios.

Licensing and Ethics: axios is under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of axios in this application as I have acknowledged that it is under the MIT license, in accordance with the license requirements.

Dependencies:

- follow-redirects
- form-data
- proxy-from-env

Dev Dependencies:

- @babel/core
- @babel/preset-env
- @commitlint/cli
- @commitlint/config-conventional
- @release-it/conventional-changelog
- @rollup/plugin-alias
- @rollup/plugin-babel
- @rollup/plugin-commonjs
- @rollup/plugin-json
- @rollup/plugin-multi-entry
- @rollup/plugin-node-resolve
- abortcontroller-polyfill
- auto-changelog
- body-parser
- chalk
- coveralls
- cross-env
- dev-null
- dtslint
- es6-promise
- eslint
- express
- formdata-node
- formidable
- fs-extra
- get-stream
- gulp
- gzip-size
- handlebars
- husky
- istanbul-instrumenter-loader
- jasmine-core
- karma
- karma-chrome-launcher
- karma-firefox-launcher
- karma-jasmine
- karma-jasmine-ajax
- karma-rollup-preprocessor
- karma-safari-launcher
- karma-sauce-launcher
- karma-sinon
- karma-sourcemap-loader
- memoizee
- minimist
- mocha
- multer
- pretty-bytes
- release-it
- rollup
- rollup-plugin-auto-external
- rollup-plugin-bundle-size
- rollup-plugin-terser
- sinon
- stream-throttle
- string-replace-async
- terser-webpack-plugin
- typescript

  ### @fontsource/inter

  source: npm. (2025). @fontsource/inter. [online] Available at: https://www.npmjs.com/package/@fontsource/inter [Accessed 23 Mar. 2025].

  This contains CSS and web font files that allows self hosting of the Inter font.

  To install use the instructions in the following link:https://www.npmjs.com/package/@fontsource/inter.

  Zero dependencies according to the above source.

  Licensing and Ethics: According to the information in https://opensource.org/license/ofl-1-1 @fontersource/inter is under the open font license which allows the use of all fonts freely as long as they are not sold. As the fonts will not be sold there is no ethical concerns in using this software.

  ```
  SIL Open Font License Official Text
  Download the current SIL Open Font License Version 1.1 in either plaintext (OFL.txt) or markdown (OFL.md) format.
  ```

For the context and rationale of the license as well as its recognized compliance with the Free Software Definition, the Debian Free Software Guidelines and the Open Source Definition, see Why use the OFL?

Only this English-language original should be considered official and authoritative, see Translation policy.

Text of OFL version 1.1 with example header containing copyright and RFN statements

Copyright (c) <dates>, <Copyright Holder> (<URL|email>),
with Reserved Font Name <Reserved Font Name>.

Copyright (c) <dates>, <additional Copyright Holder> (<URL|email>),
with Reserved Font Name <additional Reserved Font Name>.

Copyright (c) <dates>, <additional Copyright Holder> (<URL|email>).

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org

-———————————————————————

SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-———————————————————————

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and improved in partnership with others.

The OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license. The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives.

DEFINITIONS
“Font Software” refers to the set of files released by the Copyright Holder(s) under this license and clearly marked as such. This may include source files, build scripts and documentation.

“Reserved Font Name” refers to any names specified as such after the copyright statement(s).

“Original Version” refers to the collection of Font Software components as distributed by the Copyright Holder(s).

“Modified Version” refers to any derivative made by adding to, deleting, or substituting – in part or in whole – any of the components of the Original Version, by changing formats or by porting the Font Software to a new environment.

“Author” refers to any designer, engineer, programmer, technical writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:

Neither the Font Software nor any of its individual components, in Original or Modified Versions, may be sold by itself.

Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each copy contains the above copyright notice and this license. These can be included either as stand-alone text files, human-readable headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily viewed by the user.

No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the corresponding Copyright Holder. This restriction only applies to the primary font name as presented to the users.

The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software shall not be used to promote, endorse or advertise any Modified Version, except to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or with their explicit written permission.

The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license, and must not be distributed under any other license. The requirement for fonts to remain under this license does not apply to any document created using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.

Last updated on 24 January 2024

The SIL Open Font License is maintained by Victor Gaultney and Nicolas Spalinger. Contact us.
This site is Copyright © 2005–2024 SIL International (sil.org) | Privacy policy | Colophon | Site map

```

```
