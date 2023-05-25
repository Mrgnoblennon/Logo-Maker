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

    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
  ])
  .then((answers) => {

    const { text, shape } = answers;

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
    console.log('Selected shape:', selectedShape);

    //
  })
  .catch((error) => {
    console.error('Error:', error);
  });
