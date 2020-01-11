import axios from "axios";
import {
  ADD_PARAGRAPH_TO_POST,
  ADD_IMAGE_TO_POST,
  ADD_HEADER_TO_POST,
  REMOVE_PARAGRAPH_FROM_POST
} from "./types";


export const addParagraphToPost = () => {
  return {
    type: ADD_PARAGRAPH_TO_POST
  };
};

export const removeParagraphFromPost = (index) => {
  console.log("action fired successfully")
  return {
    type: REMOVE_PARAGRAPH_FROM_POST,
    index: index
  };
};