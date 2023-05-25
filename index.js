//call frameworks
const inquirer = require('inquirer');

//call module
const { Circle, Triangle, Square } = require('./lib/shapes');

//prompt the user to choose a shape
inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
  ])
  .then((answers) => {
    const { shape } = answers;

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
    console.log('Selected shape:', selectedShape);

    //
  })
  .catch((error) => {
    console.error('Error:', error);
  });
