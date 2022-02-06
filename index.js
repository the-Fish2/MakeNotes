import ReactDOM from 'react-dom';
import App from './App';

const arrNotes = [
  {
    id: 1,
    content: 'My name is theFish2',
    important: true
  },
  {
    id: 2,
    content: 'My favorite musical is Hamilton',
    important: false
  },
  {
    id: 3,
    content: 'My favorite color is blue',
    important: true
  }
]


ReactDOM.render(
  <App notes = {arrNotes}/>,
  document.getElementById('root')
);
