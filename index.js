//call frameworks
const inquirer = require('inquirer');

//call module
const { Circle, Triangle, Square } = require('./lib/shapes');
const TextProcessor = require('./lib/text');

//prompt the user to choose a shape
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 characters:',
      validate: (input) => {

        //validate that the input contains up to three characters
        return input.length <= 3 ? true : 'Please enter up to 3 characters.';
      },
    },

    //adding prompt for text color with keyword command or a hexadecimal number
    {
        type: 'input',
        name: 'textColour',
        message: 'Enter a color keyword or hexadecimal number:',
        validate: (input) => {
          //validate that the input is a color keyword or a hexadecimal number
          const isColorKeyword = /^[a-zA-Z]+$/.test(input);
          const isHexNumber = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i.test(input);
          return isColorKeyword || isHexNumber ? true : 'Please enter a valid color keyword or hexadecimal number.';
        },
    },

    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
  ])
  .then((answers) => {

    const { text, textColour, shape } = answers;

    const textProcessor = new TextProcessor(text);

    //process the entered text using the textProcessor instance
    const processedText = textProcessor.transformText();

    //based on the user's choice, create the corresponding shape instance
    let selectedShape;
    switch (shape) {
      case 'Circle':
        selectedShape = new Circle(5); //random values
        break;
      case 'Triangle':
        selectedShape = new Triangle(4, 6);
        break;
      case 'Square':
        selectedShape = new Square(8);
        break;
      default:
        console.log('Invalid choice!');
        return;
    }

    // log check
    console.log('Processed text:', processedText);
    console.log('Selected text colour:', textColour);
    console.log('Selected shape:', selectedShape);

    //
  })
  .catch((error) => {
    console.error('Error:', error);
  });
