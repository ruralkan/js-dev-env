import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//TODO: the above comment in the line allows use the console without warnings in lint
console.log(`I would pay ${courseValue} for this course`); //eslint-disable-line no-console

