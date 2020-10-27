
# @types/react-mentions testing

This project is to test @types/react-mentions PRs.


## Usage 

NOTE: The dependency in package.json for @types/react-mentions points to a local folder (`../DefinitelyTyped/types/react-mentions/`). You may need to update it. Below steps assume that is the local folder though...


1. Pull the [DefinitelyTyped repo](https://github.com/DefinitelyTyped/DefinitelyTyped) to `../DefinitelyTyped/`
    * NOTE: You may want to pull a particular PR's branch locally.
1. Run `cp react-mentions-types-package-json/package.json ../DefinitelyTyped/types/react-mentions/`
1. (In this repo's root) run `rm -rf node_modules/`
1. `yarn install`
1. `yarn test`

In general run `yarn test` and make sure they pass and make sure that the files all compile without error. There should be at least 5 tests

NOTE: There is a `pretest` script that also runs tsc just to force a full type check.

## TODO
- [ ] Add more tests by pulling in relevant tests from https://github.com/signavio/react-mentions

# Bootstrapped with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
