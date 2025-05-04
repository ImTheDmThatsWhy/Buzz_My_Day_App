# Introduction to Buzz My Day Application

This app allows users to find their favourite instant coffee, read and write reviews, view coffee prices, and talk with other coffee enthusiasts.

## API set up:

Dependecies note: To run the API in VS code a PC with windows 10 or 11 is required.
To run the app in VS code please note that if opening in Vs code then Ubuntu 22-.04 (WSL) must be installed to install this on a windows device go to the microsoft store and download the Ubuntu 22.04.5 LTS app.
Then install windows terminal from the microsoft app store. Then follow the instructions in the link below https://learn.microsoft.com/en-us/windows/wsl/install.

-   Once downloaded go to VS code and use the instructions from the link below to run WSL in VS code https://code.visualstudio.com/docs/remote/wsl-tutorial,

Using VS code:
To set up and run this application a user needs to perform the following steps

-   Clone the code from Github by going to the link https://github.com/ImTheDmThatsWhy/Buzz_My_Day_App and click on the code button and click copy code, then in VS code click on the search bar at the top and type >Git:Clone (or go to show and run commands and search for Git:Clone and click on it) then paste the copied code into the search bar it will then prompt you to save the cloned repository to a folder

-   After you have saved the repository open the folder in VS code by clicking on file open folder,

-   After you have opened the folder, open up a terminal by clicking on terminal then new terminal and open up to the Ubuntu 22.04 (WSL),

Note for a mac device ubuntu can also be installed using the instructions in the following link https://gbtimes.com/how-to-install-ubuntu-on-mac/
however, the requirements listed in the instructions must be met.

Vs code for Mac can also be installed.

## VS code set up

-   once the code has been cloned open a terminal and switch to Ubuntu-22.04(WSL)

-   Install Node.js and NPM installed using the instructions in https://www.geeksforgeeks.org/how-to-download-and-install-node-js-and-npm/.

-   Dependencies have been included already in the package.json file in the document

-   In the event the dependancies have not been installed use the following code in the virtual environment to install them:
    npm install

-   Once installed run the app using the npm start command in the terminal.

## Product access:

The Buzz My Day Application will be a standalone application hosted on a remote server and accessible to users through a web browser.

## Project Dependencies

This project relies on the following which are explained in detail below:

-   express
-   Node.js and npm
-   prettier
-   express validator
-   JSW
-   Bcrypt
-   Helmet
-   Ubuntu-22.04 WSL
-   MongoDB
-   Mongoose

## Deploy

This backend has been deployed on Render :https://buzz-my-day-app-xaqh.onrender.com

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

• Database Deployment: To deploy the database MongoDB Cloud Atlas will be used.

## Style Guide

This application uses the Prettier formatter as its style guide. Prettier is being used in this applicationto help maintain code consistency throughout the JavaScript project. Follow the instructions in step 6 for VS code to install prettier: https://www.geeksforgeeks.org/how-to-set-up-prettier-in-your-javascript-typescript-project/.

Licensing and Ethics:

Source: npm. (2024). prettier. [online] Available at: https://www.npmjs.com/package/prettier.

Prettier has 0 dependencies and is under the MIT license which is posted below in this

## API Design:

For this application a RESTful API will be created that follows RESTful architecture. It will use standard HTTP methods of Get, Post, Patch/Put, and Delete to perform CRUD (elaborated upon later in the document) operations, data will be transferred in JSON format. As explained by Geeks for Geeks 2024(1) the following principles will be included:

• Client Server Architecture: The client and server will be separate entities that communicate through HTTP

• Self-descriptive messages: This will include status codes and error messages to improve debugging and help clients

## Frameworks:

Source: GeeksforGeeks. (2020). Node.js vs Express.js. [online] Available at: https://www.geeksforgeeks.org/node-js-vs-express-js/.

For this web application the express javascript framework will be used for the application. Express according to GeeksforGeeks (2020) is a framework that sits on top of Node JS web server functionality to simplify API's and add features that Node JS does not have. Express improves an applications functionalities through the use of middleware and routing, adds useful utilities to HTTP objects, and facilitates dynamic HTTP object rendering.

Node JS in comparison is not a framework and is instead an open source and cross platform runtime environment. In Node JS routing is not provided, it has fewer features, no middleware and has a longer run time then Express JS. Express JS in comparison provides routing, uses middleware, provides controllers, has a shorter coding time, and is used for building web applications. Therefore, the Express JS framework will be used in the backend of this application.

## MERN

source: geeksforgeeks (2019). MERN Stack. [online] GeeksforGeeks. Available at: https://www.geeksforgeeks.org/mern-stack/.

Erickson, J. (2024). MEAN vs. MERN Stack Explained. [online] Oracle.com. Available at: https://www.oracle.com/database/mean-mern/.

Gophers Lab. (n.d.). Vue.js vs React.js: Which JavaScript Framework to Choose in 2024. [online] Available at: https://gopherslab.com/insights/vue-js-vs-react-js/.

For this assignment the mern stack will be used to build the backend of this web application. A MERN stack is a JavaScript stack that allows for the fast deployment of full stack applications. MERN comprises of four technologies including MongoDB which is a non relational database, Express which is a node JS framework, React which is a front end framework, and node a java script web server. In MERN all four technologies work together to build the web application.

MERN will be used over MEAN (uses angular instead of React (front end technologies)) as React allows for more flexibility, has a simpler API compared to MEAN and (leading to a less steep learning curve), has a faster performance compared to angular due to React using a virtual DOM which allows for efficient updating and rendering.

MERN will also be used over MEVN which uses Vue.js instead of React because react is better for larger scale projects, has more extensive library support, and is the software that is better known by the developers of this web application.

## Libraries, Frameworks and Licenses

### Node.js and npm

Source: www.w3schools.com. (n.d.). Node.js NPM. [online] Available at: https://www.w3schools.com/nodejs/nodejs_npm.asp.

-   GeeksforGeeks. (n.d.). NodeJS Tutorial | Learn NodeJS. [online] Available at: https://www.geeksforgeeks.org/nodejs/.

-   Tal, L. (2020). Node.js licensing and security considerations. [online] Snyk. Available at: https://snyk.io/articles/node-js-licensing-and-security-risks/ [Accessed 14 Mar. 2025].

This application will use node.js version 22.14.0. Instructions on how to install node.js and npm can be found in the following link: https://www.geeksforgeeks.org/how-to-download-and-install-node-js-and-npm/. NPM is a package manager for Node.js packages, and will be used in this application to manage Node.js packages. Node is a powerful javascript run time environment built on chrome V8 engine. Node.js will be used as it allows JavaScript code to be run outside a browser making it ideal to build scalable network applications. Node.js also enables the use of Javascript for front end and backend applications making it ideal for this application.

License and Ethics: According to Tal 202o Node.js is under the MIT license which is posted below in this read me. The MIT license only requires attribution which has been done therefore there is no ethical concerns with using Node.js in this application.

### Express JS

Info: OpenJS Foundation (2017). Express - Node.js web application framework. [online] Expressjs.com. Available at: https://expressjs.com/.

Express is a flexible Node.JS application framework that provides an extensive set of features for mobile and web applications. Express allows for flexible routing with core features that can be augmented through middleware. Furthermore, express has a variety of HTTP utility methods and middleware that allows for the quick building of a robust API.

For this application express has been used for the building of a quick and robust RESTful API through the use of middleware, routes, and HTTP methods such as below:

```Javascript
app.get("URL",(req,res)=>{})
app.post("URL",(req,res)=>{})
app.patch("URL",(req,res)=>{})
app.delete("URL",(req,res)=>{})
```

#### Express Dependencies and Installation:

Source: sndp (2021). ExpressJS. [online] DEV Community. Available at: https://dev.to/lizardkinglk/expressjs-58hg [Accessed 2 Mar. 2025].

The following is required to get Express JS:

-   NodeJS
-   NPM
-   Any IDE or Code Editor (for this application VS code is being used)

To install Express JS follow the instructions in https://dev.to/lizardkinglk/expressjs-58hg

#### Express Licensing:

Source: sndp (2021). ExpressJS. [online] DEV Community. Available at: https://dev.to/lizardkinglk/expressjs-58hg [Accessed 2 Mar. 2025].

According to sndp(2021) Express JS was developed by T.J. Holowaychuk and StrongLoop among other contributors and was released under the MIT license.

#### Ethical concerns:

In accordance with information found on open source intiative (https://opensource.org/license/mit), the Mit License means that permission is granted free of charge to any person who has a copy of the software. Furthermore, the software can be used without restriction and the user can use, copy, modify, merge, publish, distribute, and sell copies of the software unrestrictedly, provided that the user also notes that software in question (Express JS) is under the MIT license. As this is an open license there is no ethical concerns about the use of Express JS in this application as I have acknowledged that Express JS is under the MIT license.

#### MIT LICENSE:

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### Mongoose

Source: GeeksforGeeks. (2024). Mongoose Tutorial. [online] Available at: https://www.geeksforgeeks.org/mongoose-tutorial/.

Source: npm. (2025). mongoose. [online] Available at: https://www.npmjs.com/package/mongoose?activeTab=dependencies [Accessed 2 Mar. 2025].

According to GeeksforGeeks 2024 Mongoose is an object data modeling library for Mongo DB and Node JS that simplifies databaqse interactions by creating schemas that define document structure. Mongoose is used to build scalable, structured, and efficient database applications.

For this assignment mongoose has been used to connect with the mongo Db database, create schemas to give documents structure, build in validation checks, and enables for easier database queries.

According to npm 2025 mongoose has the following dependencies which are bson, kareem, mongodb, mpath, mquery, ms, and sift.

Furthermore, before installing mongoose, Mongo DB and Node.js must first be installed on vs code.

The command to install mongoose is:

```
npm install mongoose
```

For further instructions on installing mongoose and dependencies follow the instructions from https://www.npmjs.com/package/mongoose?activeTab=readme

#### Mongoose License:

According to https://www.npmjs.com/package/mongoose?activeTab=readme mongoose is under the following licence:

```
Copyright (c) 2010 LearnBoost <dev@learnboost.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

#### Mongoose Ethics:

The mongoose license statement on their website states that the software is free to use without restrictions as long as the license is included in the software. As the license has been included in the Read Me and associated with mongoose (as outlined in the license) there is no ethical concerns associated with using mongoose.

### MongoDB

Source: https://www.geeksforgeeks.org/mongodb-tutorial/

According to GeeksforGeeks 2025 MongoDB is a powerfull NoSQL database that uses a document oriented data model. For this assignment MongoDB is being used to store the data for the application.

According to https://www.npmjs.com/package/mongodb before installing Node.js must first be installed and the project must be intialised using the command

```
npm init
```

To install MongoDB type the following into the VS code terminal:

```
npm install mongodb
```

#### MongoDB Licensing

MongoDB Database Server and Tools:
Mongo DB INC: Server Side Public License
Documents: Fall under the creative comments license
Source: https://www.mongodb.com/legal/licensing/community-edition?msockid=210c64d47b5361ef0cdf704f7a206048

```
Server Side Public License
VERSION 1, OCTOBER 16, 2018

Copyright © 2018 MongoDB, Inc.

Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

TERMS AND CONDITIONS
0. Definitions.
“This License” refers to Server Side Public License.

“Copyright” also means copyright-like laws that apply to other kinds of works, such as semiconductor masks.

“The Program” refers to any copyrightable work licensed under this License. Each licensee is addressed as “you”. “Licensees” and “recipients” may be individuals or organizations.

To “modify” a work means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy. The resulting work is called a “modified version” of the earlier work or a work “based on” the earlier work.

A “covered work” means either the unmodified Program or a work based on the Program.

To “propagate” a work means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well.

To “convey” a work means any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying.

An interactive user interface displays “Appropriate Legal Notices” to the extent that it includes a convenient and prominently visible feature that (1) displays an appropriate copyright notice, and (2) tells the user that there is no warranty for the work (except to the extent that warranties are provided), that licensees may convey the work under this License, and how to view a copy of this License. If the interface presents a list of user commands or options, such as a menu, a prominent item in the list meets this criterion.

1. Source Code.
The “source code” for a work means the preferred form of the work for making modifications to it. “Object code” means any non-source form of a work.

A “Standard Interface” means an interface that either is an official standard defined by a recognized standards body, or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language.

The “System Libraries” of an executable work include anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. A “Major Component”, in this context, means a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it.

The “Corresponding Source” for a work in object code form means all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. However, it does not include the work's System Libraries, or general-purpose tools or generally available free programs which are used unmodified in performing those activities but which are not part of the work. For example, Corresponding Source includes interface definition files associated with source files for the work, and the source code for shared libraries and dynamically linked subprograms that the work is specifically designed to require, such as by intimate data communication or control flow between those subprograms and other parts of the work.

The Corresponding Source need not include anything that users can regenerate automatically from other parts of the Corresponding Source.

The Corresponding Source for a work in source code form is that same work.

2. Basic Permissions.
All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program, subject to section 13. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law.

Subject to section 13, you may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.

Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.

3. Protecting Users' Legal Rights From Anti-Circumvention Law.
No covered work shall be deemed part of an effective technological measure under any applicable law fulfilling obligations under article 11 of the WIPO copyright treaty adopted on 20 December 1996, or similar laws prohibiting or restricting circumvention of such measures.

When you convey a covered work, you waive any legal power to forbid circumvention of technological measures to the extent such circumvention is effected by exercising rights under this License with respect to the covered work, and you disclaim any intention to limit operation or modification of the work as a means of enforcing, against the work's users, your or third parties' legal rights to forbid circumvention of technological measures.

4. Conveying Verbatim Copies.
You may convey verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice; keep intact all notices stating that this License and any non-permissive terms added in accord with section 7 apply to the code; keep intact all notices of the absence of any warranty; and give all recipients a copy of this License along with the Program.

You may charge any price or no price for each copy that you convey, and you may offer support or warranty protection for a fee.

5. Conveying Modified Source Versions.
You may convey a work based on the Program, or the modifications to produce it from the Program, in the form of source code under the terms of section 4, provided that you also meet all of these conditions:

a) The work must carry prominent notices stating that you modified it, and giving a relevant date.
b) The work must carry prominent notices stating that it is released under this License and any conditions added under section 7. This requirement modifies the requirement in section 4 to “keep intact all notices”.
c) You must license the entire work, as a whole, under this License to anyone who comes into possession of a copy. This License will therefore apply, along with any applicable section 7 additional terms, to the whole of the work, and all its parts, regardless of how they are packaged. This License gives no permission to license the work in any other way, but it does not invalidate such permission if you have separately received it.
d) If the work has interactive user interfaces, each must display Appropriate Legal Notices; however, if the Program has interactive interfaces that do not display Appropriate Legal Notices, your work need not make them do so.
A compilation of a covered work with other separate and independent works, which are not by their nature extensions of the covered work, and which are not combined with it such as to form a larger program, in or on a volume of a storage or distribution medium, is called an “aggregate” if the compilation and its resulting copyright are not used to limit the access or legal rights of the compilation's users beyond what the individual works permit. Inclusion of a covered work in an aggregate does not cause this License to apply to the other parts of the aggregate.

6. Conveying Non-Source Forms.
You may convey a covered work in object code form under the terms of sections 4 and 5, provided that you also convey the machine-readable Corresponding Source under the terms of this License, in one of these ways:

a) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by the Corresponding Source fixed on a durable physical medium customarily used for software interchange.
b) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by a written offer, valid for at least three years and valid for as long as you offer spare parts or customer support for that product model, to give anyone who possesses the object code either (1) a copy of the Corresponding Source for all the software in the product that is covered by this License, on a durable physical medium customarily used for software interchange, for a price no more than your reasonable cost of physically performing this conveying of source, or (2) access to copy the Corresponding Source from a network server at no charge.
c) Convey individual copies of the object code with a copy of the written offer to provide the Corresponding Source. This alternative is allowed only occasionally and noncommercially, and only if you received the object code with such an offer, in accord with subsection 6b.
d) Convey the object code by offering access from a designated place (gratis or for a charge), and offer equivalent access to the Corresponding Source in the same way through the same place at no further charge. You need not require recipients to copy the Corresponding Source along with the object code. If the place to copy the object code is a network server, the Corresponding Source may be on a different server (operated by you or a third party) that supports equivalent copying facilities, provided you maintain clear directions next to the object code saying where to find the Corresponding Source. Regardless of what server hosts the Corresponding Source, you remain obligated to ensure that it is available for as long as needed to satisfy these requirements.
e) Convey the object code using peer-to-peer transmission, provided you inform other peers where the object code and Corresponding Source of the work are being offered to the general public at no charge under subsection 6d.
A separable portion of the object code, whose source code is excluded from the Corresponding Source as a System Library, need not be included in conveying the object code work.

A “User Product” is either (1) a “consumer product”, which means any tangible personal property which is normally used for personal, family, or household purposes, or (2) anything designed or sold for incorporation into a dwelling. In determining whether a product is a consumer product, doubtful cases shall be resolved in favor of coverage. For a particular product received by a particular user, “normally used” refers to a typical or common use of that class of product, regardless of the status of the particular user or of the way in which the particular user actually uses, or expects or is expected to use, the product. A product is a consumer product regardless of whether the product has substantial commercial, industrial or non-consumer uses, unless such uses represent the only significant mode of use of the product.

“Installation Information” for a User Product means any methods, procedures, authorization keys, or other information required to install and execute modified versions of a covered work in that User Product from a modified version of its Corresponding Source. The information must suffice to ensure that the continued functioning of the modified object code is in no case prevented or interfered with solely because modification has been made.

If you convey an object code work under this section in, or with, or specifically for use in, a User Product, and the conveying occurs as part of a transaction in which the right of possession and use of the User Product is transferred to the recipient in perpetuity or for a fixed term (regardless of how the transaction is characterized), the Corresponding Source conveyed under this section must be accompanied by the Installation Information. But this requirement does not apply if neither you nor any third party retains the ability to install modified object code on the User Product (for example, the work has been installed in ROM).

The requirement to provide Installation Information does not include a requirement to continue to provide support service, warranty, or updates for a work that has been modified or installed by the recipient, or for the User Product in which it has been modified or installed. Access to a network may be denied when the modification itself materially and adversely affects the operation of the network or violates the rules and protocols for communication across the network.

Corresponding Source conveyed, and Installation Information provided, in accord with this section must be in a format that is publicly documented (and with an implementation available to the public in source code form), and must require no special password or key for unpacking, reading or copying.

7. Additional Terms.
“Additional permissions” are terms that supplement the terms of this License by making exceptions from one or more of its conditions. Additional permissions that are applicable to the entire Program shall be treated as though they were included in this License, to the extent that they are valid under applicable law. If additional permissions apply only to part of the Program, that part may be used separately under those permissions, but the entire Program remains governed by this License without regard to the additional permissions.

When you convey a copy of a covered work, you may at your option remove any additional permissions from that copy, or from any part of it. (Additional permissions may be written to require their own removal in certain cases when you modify the work.) You may place additional permissions on material, added by you to a covered work, for which you have or can give appropriate copyright permission.

Notwithstanding any other provision of this License, for material you add to a covered work, you may (if authorized by the copyright holders of that material) supplement the terms of this License with terms:

a) Disclaiming warranty or limiting liability differently from the terms of sections 15 and 16 of this License; or
b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it; or
c) Prohibiting misrepresentation of the origin of that material, or requiring that modified versions of such material be marked in reasonable ways as different from the original version; or
d) Limiting the use for publicity purposes of names of licensors or authors of the material; or
e) Declining to grant rights under trademark law for use of some trade names, trademarks, or service marks; or
f) Requiring indemnification of licensors and authors of that material by anyone who conveys the material (or modified versions of it) with contractual assumptions of liability to the recipient, for any liability that these contractual assumptions directly impose on those licensors and authors.
All other non-permissive additional terms are considered “further restrictions” within the meaning of section 10. If the Program as you received it, or any part of it, contains a notice stating that it is governed by this License along with a term that is a further restriction, you may remove that term. If a license document contains a further restriction but permits relicensing or conveying under this License, you may add to a covered work material governed by the terms of that license document, provided that the further restriction does not survive such relicensing or conveying.

If you add terms to a covered work in accord with this section, you must place, in the relevant source files, a statement of the additional terms that apply to those files, or a notice indicating where to find the applicable terms.

Additional terms, permissive or non-permissive, may be stated in the form of a separately written license, or stated as exceptions; the above requirements apply either way.

8. Termination.
You may not propagate or modify a covered work except as expressly provided under this License. Any attempt otherwise to propagate or modify it is void, and will automatically terminate your rights under this License (including any patent licenses granted under the third paragraph of section 11).

However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.

Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.

Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, you do not qualify to receive new licenses for the same material under section 10.

9. Acceptance Not Required for Having Copies.
You are not required to accept this License in order to receive or run a copy of the Program. Ancillary propagation of a covered work occurring solely as a consequence of using peer-to-peer transmission to receive a copy likewise does not require acceptance. However, nothing other than this License grants you permission to propagate or modify any covered work. These actions infringe copyright if you do not accept this License. Therefore, by modifying or propagating a covered work, you indicate your acceptance of this License to do so.

10. Automatic Licensing of Downstream Recipients.
Each time you convey a covered work, the recipient automatically receives a license from the original licensors, to run, modify and propagate that work, subject to this License. You are not responsible for enforcing compliance by third parties with this License.

An “entity transaction” is a transaction transferring control of an organization, or substantially all assets of one, or subdividing an organization, or merging organizations. If propagation of a covered work results from an entity transaction, each party to that transaction who receives a copy of the work also receives whatever licenses to the work the party's predecessor in interest had or could give under the previous paragraph, plus a right to possession of the Corresponding Source of the work from the predecessor in interest, if the predecessor has it or can get it with reasonable efforts.

You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

11. Patents.
A “contributor” is a copyright holder who authorizes use under this License of the Program or a work on which the Program is based. The work thus licensed is called the contributor's “contributor version”.

A contributor's “essential patent claims” are all patent claims owned or controlled by the contributor, whether already acquired or hereafter acquired, that would be infringed by some manner, permitted by this License, of making, using, or selling its contributor version, but do not include claims that would be infringed only as a consequence of further modification of the contributor version. For purposes of this definition, “control” includes the right to grant patent sublicenses in a manner consistent with the requirements of this License.

Each contributor grants you a non-exclusive, worldwide, royalty-free patent license under the contributor's essential patent claims, to make, use, sell, offer for sale, import and otherwise run, modify and propagate the contents of its contributor version.

In the following three paragraphs, a “patent license” is any express agreement or commitment, however denominated, not to enforce a patent (such as an express permission to practice a patent or covenant not to sue for patent infringement). To “grant” such a patent license to a party means to make such an agreement or commitment not to enforce a patent against the party.

If you convey a covered work, knowingly relying on a patent license, and the Corresponding Source of the work is not available for anyone to copy, free of charge and under the terms of this License, through a publicly available network server or other readily accessible means, then you must either (1) cause the Corresponding Source to be so available, or (2) arrange to deprive yourself of the benefit of the patent license for this particular work, or (3) arrange, in a manner consistent with the requirements of this License, to extend the patent license to downstream recipients. “Knowingly relying” means you have actual knowledge that, but for the patent license, your conveying the covered work in a country, or your recipient's use of the covered work in a country, would infringe one or more identifiable patents in that country that you have reason to believe are valid.

If, pursuant to or in connection with a single transaction or arrangement, you convey, or propagate by procuring conveyance of, a covered work, and grant a patent license to some of the parties receiving the covered work authorizing them to use, propagate, modify or convey a specific copy of the covered work, then the patent license you grant is automatically extended to all recipients of the covered work and works based on it.

A patent license is “discriminatory” if it does not include within the scope of its coverage, prohibits the exercise of, or is conditioned on the non-exercise of one or more of the rights that are specifically granted under this License. You may not convey a covered work if you are a party to an arrangement with a third party that is in the business of distributing software, under which you make payment to the third party based on the extent of your activity of conveying the work, and under which the third party grants, to any of the parties who would receive the covered work from you, a discriminatory patent license (a) in connection with copies of the covered work conveyed by you (or copies made from those copies), or (b) primarily for and in connection with specific products or compilations that contain the covered work, unless you entered into that arrangement, or that patent license was granted, prior to 28 March 2007.

Nothing in this License shall be construed as excluding or limiting any implied license or other defenses to infringement that may otherwise be available to you under applicable patent law.

12. No Surrender of Others' Freedom.
If conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot use, propagate or convey a covered work so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not use, propagate or convey it at all. For example, if you agree to terms that obligate you to collect a royalty for further conveying from those to whom you convey the Program, the only way you could satisfy both those terms and this License would be to refrain entirely from conveying the Program.

13. Offering the Program as a Service.
If you make the functionality of the Program or a modified version available to third parties as a service, you must make the Service Source Code available via network download to everyone at no charge, under the terms of this License. Making the functionality of the Program or modified version available to third parties as a service includes, without limitation, enabling third parties to interact with the functionality of the Program or modified version remotely through a computer network, offering a service the value of which entirely or primarily derives from the value of the Program or modified version, or offering a service that accomplishes for users the primary purpose of the Program or modified version.

“Service Source Code” means the Corresponding Source for the Program or the modified version, and the Corresponding Source for all programs that you use to make the Program or modified version available as a service, including, without limitation, management software, user interfaces, application program interfaces, automation software, monitoring software, backup software, storage software and hosting software, all such that a user could run an instance of the service using the Service Source Code you make available.

14. Revised Versions of this License.
MongoDB, Inc. may publish revised and/or new versions of the Server Side Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the Program specifies that a certain numbered version of the Server Side Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that numbered version or of any later version published by MongoDB, Inc. If the Program does not specify a version number of the Server Side Public License, you may choose any version ever published by MongoDB, Inc.

If the Program specifies that a proxy can decide which future versions of the Server Side Public License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Program.

Later license versions may give you additional or different permissions. However, no additional obligations are imposed on any author or copyright holder as a result of your choosing to follow a later version.

15. Disclaimer of Warranty.
THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

16. Limitation of Liability.
IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

17. Interpretation of Sections 15 and 16.
If the disclaimer of warranty and limitation of liability provided above cannot be given local legal effect according to their terms, reviewing courts shall apply local law that most closely approximates an absolute waiver of all civil liability in connection with the Program, unless a warranty or assumption of liability accompanies a copy of the Program in return for a fee.

END OF TERMS AND CONDITIONS
```

#### Ethics MongoDB:

Source: Team Gyata (2023). Understanding MongoDB License: A Comprehensive Guide. [online] Gyata.ai. Available at: https://www.gyata.ai/mongodb/mongodb-license [Accessed 3 Mar. 2025].

The server side public license is an open source license, the SSPL licence means any source code must be realeased under the SSPL license. As we are not using MongoDB to provide a service but instead to store documents the license is not in brech and therefore, there are no ethical concerns.

### JSONWEB TOKEN

source: GeeksforGeeks. (2019). JSON web token | JWT. [online] Available at: https://www.geeksforgeeks.org/json-web-token-jwt/.

JSON Web Tokens (JWT) will be used to create a secure way to authenticate users and validate identities when users login in to the web application. To use JWT the JWT library will be imported so tokens can be created and verified using the code

```
npm install jsonwebtoken
```

Dependencies:

Source: npm. (2023). jsonwebtoken. [online] Available at: https://www.npmjs.com/package/jsonwebtoken?activeTab=dependencies [Accessed 3 Mar. 2025].

According to npm 2023 JWT has the following dependencies:

-   jws
-   lodash.includes
-   lodash.isboolean
-   lodash.isinteger
-   lodash.isnumber
-   lodash.isplainobject
-   lodash.isstring
-   lodash.once
-   ms
-   semver

#### JWT License and ethics:

JWT is under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of JWT in this application as I have acknowledged that JWT is under the MIT license, in accordance with the license requirements.

### Bcrypt

source: Hoang, N. (2023). Bcrypt — A Beginner’s Guide. [online] Medium. Available at: https://medium.com/@CodeNameNoah/bcrypt-a-beginners-guide-e2293cc1eeb6.

Bcrypt is a powerful cryptographic hashing tool that will be used to hash and salt user passwords. Bcrypt as explained by Hoang (2023) employs blowfish cipher to convert plaintext passwords into a fixed string of characters called hash, which is then stored in the database (MongoDB).

Salting will also be used on user passwords and is where bcrypt generates and incomperates a random salt value into each hash.

To install bcrypt library the following code was used:

```
npm install bcrypt
```

#### Bcrypt Dependencies, License, and Ethics:

Source: npm. (2023). bcrypt. [online] Available at: https://www.npmjs.com/package/bcrypt.

Bcrypt has the following dependencies as listed by npm (2023):

-   @mapbox/node-pre-gyp
-   node-addon-api

MIT license: Bcrypt is under the Mit license which has previously been posted on this Read Me.

Bcrypt is under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of Bcrpt in this application as I have acknowledged that Bcrypt is under the MIT license, in accordance with the license requirements.

### npm run dev (App Development):

GeeksforGeeks. (2024). npm run dev. [online] Available at: https://www.geeksforgeeks.org/npm-run-dev/.

This command intiates the development server that allows for reloading, hot module replacement, error handling and other efficient developmental features. This script is defined in the package.json files. The dev development environment is available in version 22.14.0 of node.js and is run using the npm run dev command in the terminal and through the command "node --watch source/index.js" which is in the dev of the package.json.

### Jest and Supertest

source: Orie, C. (2019). Testing NodeJs/Express API with Jest and Supertest. [online] DEV Community. Available at: https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6 [Accessed 13 Mar. 2025].

In this application jest and supertest is being used to test the code. Jest is a javascript testing framework that uses a built-in test runner, while supertest will be used to test the Node.js HTTP servers.

Installation: To install Jest and Supertest follow the instructions provided in the following link:https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6

#### Jest License and Ethics

source: npm. (n.d.). jest. [online] Available at: https://www.npmjs.com/package/jest.

According to the source above Jest has four dependencies:

-   @jest/types
-   @jest/core
-   import-local
-   jest-cli

And the following dev dependencies:

-   ava
-   babel
-   coverage
-   easy
-   expect
-   facebook
-   immersive
-   instant
-   jasmine
-   jest
-   jsdom
-   mocha
-   mocking
-   painless
-   qunit
-   runner
-   sandboxed
-   snapshot
-   tap
-   tape
-   test
-   testing
-   typescript
-   watch

License: Jest falls under the MIT license which has been posted already in this read me. As this is an open license there is no ethical concerns about the use of Jest in this application as I have acknowledged that Jest is under the MIT license, in accordance with the license requirements.

#### SuperTest License and Ethics

source: npm. (2024). supertest. [online] Available at: https://www.npmjs.com/package/supertest?activeTab=readme [Accessed 13 Mar. 2025].

According to the source above supertest has two dependencies:

-   methods
-   superagent

And the following dev dependencies:

-   body-parser
-   cookie-parser
-   eslint
-   eslint-config-airbnb-base
-   eslint-plugin-import
-   express
-   mocha
-   nock
-   nyc
-   proxyquire
-   should

License and Ethics: Supertest falls under the MIT license which has been posted already in this read me. As this is an open license there is no ethical concerns about the use of supertest in this application as I have acknowledged that supertest is under the MIT license, in accordance with the license requirements.

### express-validator

source: npm. (n.d.). express-validator. [online] Available at: https://www.npmjs.com/package/express-validator.

Github.io. (2019). Getting Started · express-validator. [online] Available at: https://express-validator.github.io/docs/.

express-validator is a set of express.js middlewares that validates and sanitizes code which is what it has been used for in this application. This includes using exoress-validator to verify email format. To install it follow instructions in the following link:https://www.npmjs.com/package/express-validator.

Dependencies:

To run express-validator version Node.js 14 or greater must be used

Other dependencies:

-   lodash
-   validator

Dev Dependencies:

-   @docusaurus/core
-   @docusaurus/plugin-client-redirects
-   @docusaurus/preset-classic
-   @types/jest
-   @types/lodash
-   @typescript-eslint/eslint-plugin
-   @typescript-eslint/parser
-   eslint
-   eslint-config-prettier
-   eslint-plugin-import
-   eslint-plugin-prettier
-   jest
-   prettier
-   ts-jest
-   typescript

express-validator is under the MIT license which has already been posted in this readme. As express-validator has been attributed in accordance with the license conditions there is no ethical concerns in using this software.

### Helmet

source:helmetjs.github.io. (n.d.). Helmet. [online] Available at: https://helmetjs.github.io/.

-   Npmjs.com. (2022). Available at: https://www.npmjs.com/package/helmet/v/5.0.2 [Accessed 14 Mar. 2025].

Helmet is being used in this application to secure the express application by setting HTTP response headers. To use and install helmet use the instructions in the following link https://www.npmjs.com/package/helmet/v/5.0.2

License and dependencies: Helmet has zero dependencies but has the following Dev Dependencies:

-   @rollup/plugin-typescript
-   @types/connect
-   @types/jest
-   @types/supertest
-   @typescript-eslint/eslint-plugin
-   @typescript-eslint/parser
-   connect
-   eslint
-   jest
-   prettier
-   rollup
-   supertest
-   ts-jest
-   typescript

Helmet is under the MIT license which has already been posted in this read me. As helmet has been attributed in accordance with the license conditions there is no ethical concerns in using this software.

## CORS 

Source 1: GeeksforGeeks (2024). HTTP Access Control (CORS). [online] GeeksforGeeks. Available at: https://www.geeksforgeeks.org/http-access-control-cors/.

Source 2: npm. (n.d.). cors. [online] Available at: https://www.npmjs.com/package/cors.

Cors stands for cross origin resource sharing and denies or allows requests for resources across different domains. CORS is used in this web app to allow HTTP requests from the front end to go to the backend. To install CORS follow instructions from https://www.npmjs.com/package/cors

### Dependencies:
- object-assign
- vary
### Dev Dependencies:
- after
- eslint
- express
- mocha
- nyc
- supertest
### License and ethics:
 CORS falls under the MIT license which has been posted already in this read me. As this is an open license there is no ethical concerns about the use of CORS in this application as I have acknowledged that CORS is under the MIT license, in accordance with the license requirements.
