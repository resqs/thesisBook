# Thesis book for ITP NYU 2017 Spring

MIT License, Yining Shi

Demo: 
[https://itp.nyu.edu/thesis2017](https://itp.nyu.edu/thesis2017)
or
[https://thesis-book-itp-2017.firebaseapp.com](https://thesis-book-itp-2017.firebaseapp.com)

### Directory Layout

```shell
├── components/                 # Shared or generic UI components
│   ├── Layout/                 # Website layout component
│   └── ...                     # etc.
├── docs/                       # Documentation to the project
├── node_modules/               # 3rd-party libraries and utilities
├── src/                        # Application source code
│   ├── about/                  # About page
│   ├── error/                  # Error page
│   ├── home/                   # Home page
│   ├── history.js              # Handles client-side navigation
│   ├── main.js                 # <== Application entry point <===
│   ├── router.js               # Handles routing and data fetching
│   ├── routes.json             # This list of application routes
│   └── store.js                # Application state manager (Redux)
├── public/                     # Static files such as favicon.ico etc.
│   ├── dist/                   # The folder for compiled output
│   ├── favicon.ico             # Application icon to be displayed in bookmarks
│   ├── robots.txt              # Instructions for search engine crawlers
│   └── ...                     # etc.
├── test/                       # Unit and integration tests
├── tools/                      # Utility and helper classes
└── package.json                # The list of project dependencies and NPM scripts
```

### Getting Started

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer and
[Yarn](https://yarnpkg.com/) installed on your development machine.

**Step 2**. Clone this repository (alternatively, use [Yeoman
generator](https://github.com/kriasoft/react-static-boilerplate/tree/generator-react-static) to
bootstrap your project):

```shell
$ git clone git clone https://github.com/yining1023/thesisBook.git
$ cd thesisBook
$ yarn install                  # Install project dependencies listed in package.json
```

**Step 2.1**. Create a 'config.js' file in the `Tools` folder, and copy paste the following code into 'config.js' file
```javascript
module.exports = {
  title: 'thesis book itp 2017',        // Your website title
  url: 'https://thesis-book-itp-2017.firebaseapp.com',          // Your website URL
  project: 'thesis-book-itp-2017',      // Firebase ProjectPage. See README.md -> How to Deploy
  trackingID: 'xxxxxxxxxxxxx',                 // Google Analytics Site's ID
}
```

**Step 3**. Compile and launch your app by running:

```shell
$ yarn start                    # Compiles the app and opens it in a browser with "live reload"
```

You can also test your app in release (production) mode by running `yarn start -- --release` or
with HMR and React Hot Loader disabled by running `yarn start -- --no-hmr`. The app should become
available at [http://localhost:3000/](http://localhost:3000/).


### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```shell
$ yarn lint                     # Check JavaScript and CSS code for potential issues
$ yarn test                     # Run unit tests. Or, `yarn run test:watch`
```


### How to Deploy

Update `publish` script in the [`tools/publish.js`](tools/publish.js) file with your full Firebase
project name as found in your [Firebase console](https://console.firebase.google.com/). Note that
this may have an additional identifier suffix than the shorter name you've provided. Then run: 

```shell
$ yarn publish                  # Builds and deployes the app to Firebase
```

The first time you publish, you will be prompted to authenticate with Google and generate an
authentication token in order for the publish script to continue.

![publish](https://koistya.github.io/files/react-static-boilerplate-publish.gif)

If you need to build the project without publishing it, simply run:

```shell
$ yarn build                    # Compiles the app into the /public/dist folder
```


### How to publish the updated site

```shell
$ yarn build
$ firebase serve
$ firebase deploy
```
# thesisBook
