import { 
SET_MAIN_ARTICLE,
INITIALIZE_MAIN_ARTICLE
} from "../actions/types";

const initialState = {
  category: '',
  title: '',
  author: '',
  date: '',
  image: '',
  body: [
    {
      type: 'hey',
      value: ''
    }
  ],
  likes: '',
  dislikes: '',
  comments: '',
  id: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MAIN_ARTICLE:
    const newBody = [];
    for (let i=0; i<action.payload.body.length; i++) {
      newBody[i] = action.payload.body[i]
    }

      return {
        ...state,
        category: action.payload.category,
        title: action.payload.title,
        author: action.payload.author,
        date: action.payload.date,
        image: action.payload.image,
        body: newBody,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes,
        comments: action.payload.comments,
        id: action.payload._id
      }

      case INITIALIZE_MAIN_ARTICLE: 

    console.log('inititalize main artile fired');
      const updateBody = [];
    for (let i=0; i<action.payload.body.length; i++) {
      updateBody[i] = action.payload.body[i]
    }

      return {
        ...state,
        category: action.payload.category,
        title: action.payload.title,
        author: action.payload.author,
        date: action.payload.date,
        image: action.payload.image,
        body: updateBody,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes,
        comments: action.payload.comments,
        id: action.payload._id
      }
    default:
      return state;
  }
}