import { combineReducers } from 'redux';
import home from './home';
import counter from './counter';
import article from './article';

export default combineReducers({
  home,
  counter,
  article,
});
