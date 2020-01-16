import {
  ADD_PARAGRAPH_TO_POST,
  ADD_IMAGE_TO_POST,
  ADD_HEADER_TO_POST,
  REMOVE_ITEM_FROM_POST
} from "../actions/types";

const isEmpty = require("is-empty");
const initialState  = 
{
  title: '',
  category: '',
  img: 'https://via.placeholder.com/780x400?text=Choose+a+photo',
  bodyArr: [
    {
      type: 'header',
      value: ''
    },
    {
      type: 'textArea',
      value: ''
    },
    {
      type: 'image',
      value: 'https://via.placeholder.com/350'
    },
    {
      type: 'textArea',
      value: ''
    }   
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PARAGRAPH_TO_POST' :

          const newArr = [...state.bodyArr];

          newArr.push(
              {
                type: "textArea",
                value: ''
              }
            );

          return {
            ...state,
            bodyArr: newArr
          };

    case 'ADD_HEADING_TO_POST' :

    const Arr = [...state.bodyArr];

    Arr.push(
        {
          type: "header",
          value: ''
        }
      );

    return {
      ...state,
      bodyArr: Arr
    };

    case 'ADD_IMAGE_TO_POST' :

    const ImgArr = [...state.bodyArr];

      ImgArr.push(
        {
          type: "image",
          value: ''
        }
      );

    return {
      ...state,
      bodyArr: ImgArr
    };

    case 'REMOVE_ITEM_FROM_POST' :

          const copiedArr = [...state.bodyArr];
          for(let i=0; i<state.bodyArr.length -1; i++) {
            let copiedObj = {...state.bodyArr[i]}
            copiedArr[i] = copiedObj;
          }
          copiedArr.splice(action.index, 1);
          return {
            ...state,
            bodyArr: copiedArr
          };

  case 'UPDATE_POST_TITLE' :

  return {
    ...state,
    title: action.payload
  };

  case 'SET_MAIN_IMAGE' :
  
  return {
    ...state,
    img: action.payload
  };

  case 'UPDATE_INPUT_TEXT' :
  console.log('set image reducer fired', action.payload, action.index);

  const nextArr = [...state.bodyArr];
  for(let i=0; i<state.bodyArr.length -1; i++) {
    let copiedObj = {...state.bodyArr[i]}
    nextArr[i] = copiedObj;
  }
  nextArr[action.index].value = action.payload;
  return {
    ...state,
    bodyArr: nextArr
  };

  case 'SET_POST_CATEGORTY' :
  
  return {
    ...state,
    category: action.payload
  };



    default:
      return state;
  }
}

