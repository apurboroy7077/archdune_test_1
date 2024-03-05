plz install pnpm package manager as it is fast and disk efficient, to install pnpm, run the following command in the terminal
npm install -g pnpm

then run the following command if you want to make changes using tailwind css,
pnpm start

you can install any package using pnpm like npm, For example, if you want to install express, just type "pnpm install express" instead of "npm install express" the reason why I(Apurbo Roy) am using pnpm is that you do not have to redownload node_modules for every project. Suppose you have three project in your pc that uses express. if you use npm, then it will download express for every project separately. But with pnpm, it will download express only once and then reuse it by linking it with the rest of your projects. so you are using three times less space.

<link rel="stylesheet" href="./css/tailwind/tailwind_output.css" /> add this to your html file for using tailwind
