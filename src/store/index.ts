import { configureStore } from '@reduxjs/toolkit';
import contact from './contact';
import data from './data';
import edit from './edit';


const store = configureStore({
  reducer: {contact:contact,data:data,edit:edit},
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: ['TYPE'],
        ignoredActionPaths: ['property'],
        ignoredPaths: ['reducer.property']
    }
})
  
});

export default store;