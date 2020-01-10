import {
  ADD_PARAGRAPH_TO_POST,
  ADD_IMAGE_TO_POST,
  ADD_HEADER_TO_POST
} from "../actions/types";

const isEmpty = require("is-empty");
const initialState  = 
{
  img: 'https://via.placeholder.com/780x400?text=Choose+a+photo',
  bodyArr: [
    {
      type: 'textArea',
      value: ''
    },
    {
      type: 'textArea',
      value: ''
    },
    {
      type: 'headerFour',
      value: ''
    },
    {
      type: 'textArea',
      value: ''
    },
    {
      type: 'image',
      source: ''
    },
    {
      type: 'headerFour',
      value: ''
    },
    {
      type: 'textArea',
      value: ''
    }   
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PARAGRAPH_TO_POST:

    const newArr = [...state.bodyArr];
    newArr.push(
      {
        type: "textArea",
        value: ''
      }
    )
      return {
        ...state,
        bodyArr: newArr
      };

    default:
      return state;
  }
}