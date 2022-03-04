import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './js/PeopleList';
import AddPersonForm from './js/AddPersonForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './sass/main.scss';

const initialState = {
  contacts: ['James Smith', 'Thomas Anderson', 'Bruce Wayne'],
};

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PERSON':
      return { ...state, contacts: [...state.contacts, action.data] };
    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root'),
);
