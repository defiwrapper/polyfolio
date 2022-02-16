# Polyfolio

## Live Preview

[Elements -- https://polyfolio.netlify.app/elements](https://polyfolio.netlify.app/elements)  
[Connect -- https://polyfolio.netlify.app](https://polyfolio.netlify.app/)  
[Dashboard -- https://polyfolio.netlify.app/dashboard](https://polyfolio.netlify.app/dashboard)

<br/>

## Folders & Files Structure
* [public](public) -->  *Main index.html file, Favicon & Crypto icons*
* [src](src)
	* [assets](src/assets) -->  *Images, icons & fonts divided by types & components*
	* [components](src/components) --> *React components for elements & sections: Header, Footer, Sidebar, ...etc.*
	* [customHooks](src/customHooks) --> *Custom react hook for stickyState in localStorage, ...*
	* [views](src/views) --> *React components for pages: connect, dashboard, ...etc.*
	* [App.js](src/App.js) --> *Main react app component with web3 wallet integration and routing*
	* [Atoms.js](src/Atoms.js) --> *Recoil global variables for state management across different components*
	* [Constants.js](src/Constants.js) --> *Links in header, footer, social media, ...etc, & common content*
	* [Utils.js](src/Utils.js) --> *Javascript utilities & web3 functions for validation, formatting, ...etc.*
	* [fonts.css](src/fonts.css) --> *Online & offline fonts exported to Tailwind index.css*
	* [index.css](src/index.css) --> *Global styles, utilities & Tailwind components for buttons, inputs, ...etc.*
	* [index.js](src/index.js) --> *Main render file, contains all components & wrapped by Recoil state management*
* [tailwind.config.js](tailwind.config.js) --> *Extending Tailwind classes for spacing, colors, fonts, ...etc.*


<br/>

---

<br/>

## Run in development
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<br/>


## Build the app
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!