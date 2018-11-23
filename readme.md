**Folder Structure**
a - Modern React with Redux [2019 Update] - Stephen Grider

### Difference - HTML and JSX

#### Using Style -

HTML `<div style="background-color : red;"></div>`  
JSX `<div style={{ backgroundColor : 'red' }}></div>`

- We will convert the property to a JS object where the key is the name of the property and the value is the value in quotes.

#### Adding Class to an Element -

Use `className` insted of `class` in CSS Properties.

#### JSX can reference JS Variables -

We wrap the variables we want to reference in single curly braces - `{ ... }'. Eg:

```
let buttonText = 'Click Me!';

// reference this at another point
<button> {buttonText} </button>
```

We can take this concept to the next level and use functions too. Eg:

```
function showButtonText(){
  return 'Click Me!';
}

// refernece this at another point
<button> {showButtonText()} </button>
```

## Communicating with Props

### The Three Pillars of Components

- Component Nesting
- Component Reusability
- Component Configuration

### Creating a Reusable and Configurable Component

1. Identify the JSX that appears to be dupicated
2. Name the JSX in the most descriptive manner
3. Create a new file for the component having the same name as the component
4. Create a new component in the file and paste the JSX
5. Make the component configurable using Raeact's `props` system

### Understanding the Props System

- System to pass data from a parent component to a child component
- Used to customize or configure a child compinents

#### Providing props from parent to child

Consider this snippet: `<CommentDetail author="Sam" />`

- 'author' is the name of the property
- `"Sam"` is the valur of the property
