import { combineReducers } from 'redux';

import { issues } from './issues';

export const appReducer = combineReducers({
  issues
})

export type RootState = ReturnType<typeof appReducer>;
