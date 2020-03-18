This is to the best of my knowledge a minimal boilerplate web-services based on Flask as the backend, and React as the frontend. This is heavily inspired by https://itnext.io/a-template-for-creating-a-full-stack-web-application-with-flask-npm-webpack-and-reactjs-be2294b111bd

To understand, here is the roadmap. First, for the backend:
1. Build a simple flask app that provides the route and entry point to the index html
2. This index html is rendered by Flask from a template, stored at Flask's template dir.
3. This index leaves a placeholder div with an id for React to load upon later.

That's all backend should do, the further stuff on the html is handed to the frontend, i.e. js and React. Now for the frontend:
1. To write React we need js stuff, including npm for package management, webpack and transpilers for packing React src to a js bundle
2. First use `npm init` and `npm install` to install necessary dependencies
3. Then set up `webpack-config.js` such that webpack knows how to transpile and pack React src codes into js bundle and where to place
4. The packed js bundle should be placed in the static dir which Flask knows in order to load

Code structure:
1. Flask codes are in `services`
2. React codes are in `clients`
3. Flask app specifies clearly that `template_folder` is `templates` and `static_folder` is `static`
4. HTML templates used by Flask to render are put in `templates`
5. Webpack-packed js bundle of React code is in `static`

How to run:
1. Go to `clients` folder and `npm start` (defined by ourselves, check `webpack-config.js` for the actual script it runs) to watch the dev-build of the React src codes.
2. Any frontend change made will immediately repack and update the js bundle and store it as `public/bundel.js` folder (bundle name is specified in `webpack-config.js`)
3. Then in the root `./` run Flask by `FLASK_APP=app_runner DEBUG=1 flask run`.

Caveat:
- For the latest versions, some packages of `babel` should be installed by `@babel/...` instead of the traditional `babel-...`
- I saw my colleague is using a different transpiler called `eslint`
- I saw my colleague is using `react-scripts`, and doesn't explicitly install and configure `webpack` ???

What else I want to learn from here:
[ ] router: Flask or `react-router-dom`?
[ ] styles: `style-loader` and `css-loader` ...
[ ] `eslint`