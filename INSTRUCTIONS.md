
# OVERVIEW
We're going to use the SWAPI API (http://swapi.co) to create a simple application. This app will illustrate the component lifecycle, updating state, how to use props, and how to get and store data from a REST API.

## INITIAL RENDER
- [ ] Run the app and a server to server up the index.html file
- [ ] Go to the page and view the console
- [ ] Notice the consoles and the order in which they appear

## UPDATE STATE
- [ ] Define a state variable called `character`
- [ ] Get the initial value from an array of objects:
  ```javascript
  {
    name: 'Luke',
    id: 1
  },
  {
    name: 'C-3P0',
    id: 2
  },
  {
    name: 'R2D2',
    id: 3
  },
  {
    name: 'Darth Vadar',
    id: 4
  }
  ```
- [ ] Store this array in a constants file called `App.js`
- [ ] Render the name of the character
- [ ] Create a new button element (with some styles), that when clicked will random assign a new character to the state
- [ ] Run the app. You should be able to see the character's name and change it by clicking on the button

## PROPS
- [ ] Move the button element you just made into it's own React component. Name it `Button.js` and place it in `src/components` 
- [ ] Update App.js to use this new Button component
- [ ] Define a new prop called `type` with the following PropType: `React.PropTypes.oneOf(['primary', 'secondary'])
- [ ] Use the value of the prop type to determine which styles to use on the button.
- [ ] In App.js, pass a `type` prop (primary or secondary) to the Button component to determine the style of the button.

## GETTING DATA FROM THE API
- [ ] Install `axios` as a depedency: `npm install axios --save`. We'll be using this to make API calls to the SWAPI API
- [ ] Require `axios` in App.js. App.js will server as our "container" component
- [ ] We'll need to make a request to the API at two different time, when the component initially loads and whenever we click our button to get a new character
- [ ] Use axios to make a call to the SWAPI api in the `componentWillMount` method
- [ ] On success, assign the results to the state as a new property called `characterDetails`
- [ ] Use axios to make a call to the SWAPI api and assign the result to the state, whenever the button in clicked.
- [ ] Use a console log inside the `render` method to make sure we're getting data from the API and it's being set onto the state.

## UPDATING PROPS
- [ ] Create a new component called `Character.js` and place it in `src/components`. This will be responsible for displaying the character details we get from the SWAPI API
- [ ] Define a new prop called `details` with the following PropType: `React.Proptypes.object`
- [ ] Have this new component render out `this.props.details.name`
- [ ] Render a `Character` component in App.js
- [ ] Define the `details` prop as the `characterDetails` state property.
- [ ] Run the app. You should now be able to see the character's full name. Click the button to make sure you can get a different character.

## PROJECT
- [ ] Update the UI of the Character component to something fancy
- [ ] Update the Character component to display details about the character's homeworld