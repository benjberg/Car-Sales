 
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export const removeFeature = item => {
    return {type: 'REMOVE_ITEM', payload: item};
  };

export const buyItem = item => {
    return {type: 'ADD_ITEM', payload: item}
  };