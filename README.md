# Getting started with React App bootstraped with Tailwind

<!-- Create React Application -->
1. create-react-app ./

<!-- Install Tailwind -->
2. npm i tailwind postcss autoprefixer 

<!-- Create Tailwind Config files -->
3. npx tailwindcss init -p

<!-- Configure Path To Template Files -->
4. Inside the tailwind.config.js, add contents = "./src/**/*.{js,jsx,ts,tsx}"

<!-- Add Tailwind Directives -->
5. Add the followinf Tailwind directives in index.css.
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    <!-- ************************** -->
    # Blog URL
    https://medium.com/codingthesmartway-com-blog/how-to-use-tailwind-css-with-react-9dd78bbdc0e0