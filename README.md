# Qtec-Backend
[Backend Live Preview](https://qtec-backend.vercel.app/) || 
[frontend Live Preview](https://65cc802ab451fc8db58859b6--fastidious-empanada-dff463.netlify.app/)

## Full process
1. **Step 1:** Create a new folder for the project and open it in VS Code. run on terminal npm init -y create package.json file.  

2. **Step 2:** install this package.  

install express ⇒ npm install express  

install mongoose ⇒ npm install mongoose --save  

install typescript ⇒ npm install typescript --save-dev  

install cors ⇒ npm install cors  

install dotenv ⇒ npm install dotenv  

3. **Step 3:** create a tsconfig file ⇒ `tsc --init`  

set rootDir as src and outDir as dist  

4. **Step 4:** Connect Mongoose to the server  
 
 ```javascript
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
```
 

## SetUP Eslint and Prettier

5. **Step 5:** add this in tsconfing.json file  
```
"include": ["src"], // which files to compile
 "exclude": ["node_modules"], // which files to skip 
```   

6. **Step 6:** install eslint ⇒ `npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`  

7. **Step 7:** create a configuration file ⇒ `npx eslint --init` and add this in `.eslintrc`  
 "rules": {  
        "no-unused-vars": "error",  
        "no-unused-expressions": "error",  
        "prefer-const": "error",  
        "no-console": "warn",  
        "no-undef": "error"  
    }  

8. **Step 8:** create a `.eslintignore` file and add the folders or files you want to ignore  
 node_modules  
 dist  

9. **Step 9:** add this in package.json
 ```
 / package.json
{
  // ...
  "scripts": {
    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
   },
  // ...
}
 ```

10. **Step 10:** fix errors in eslint, add this in package.json  
```
/ package.json
{
  // ...
  "scripts": {
    "lint": "eslint src --ignore-path .eslintignore --ext .ts",
    "lint:fix": "npx eslint src --fix",
   },
  // ...
} 
```

## setup prettier  
11. **Step 11:** install prettier ⇒ `npm install --save-dev prettier`  
12. **Step 12:** create a file called .prettierrc.json  
```
{
    "semi": true,
    "singleQuote": true
}
```
13. **Step 13:** add this in package.json
 ```
 / package.json
{
  // ...
  "scripts": {
    "prettier": "prettier --ignore-path .gitignore --write \"**./src/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src",
   },
  // ...
}
 ```

14. **Step 14:** you can open your command palette (Command + Shift + P) and look for Preferences: Open User Settings (JSON).  
```
// settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  ...
}
```

15. **Step 15:** Avoiding conflicts when working with ESLint and Prettier ⇒ `npm install --save-dev eslint-config-prettier`  

16. **Step 16:** install ts node dev ⇒ `npm i ts-node-dev --save-dev`    

17. Step 17: add this code in package.json =>
 ```
  / package.json
{
  // ...
  "scripts": {
    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
   },
  // ...
}
 ```

18. Step 18: run server ⇒  `npm run start:dev`


