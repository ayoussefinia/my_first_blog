import axios from "axios";
import {
  ADD_PARAGRAPH_TO_POST,
  ADD_IMAGE_TO_POST,
  ADD_HEADER_TO_POST,
  REMOVE_ITEM_FROM_POST,
  SET_MAIN_IMAGE
} from "./types";


export const addParagraphToPost = () => {
  return {
    type: ADD_PARAGRAPH_TO_POST
  };
};

export const addImageToPost = () => {
  return {
    type: ADD_Image_TO_POST
  };
};

export const addHeadingToPost = () => {
  return {
    type: ADD_Heading_TO_POST
  };
};


export const removeParagraphFromPost = (index) => {
  return {
    type: REMOVE_ITEM_FROM_POST,
    index: index
  };
};

export const twoWayBindPostTitle = (data) => {

  return {
    type: UPDATE_POST_TITLE,
    payload: data
  };
};

export const setMainImage = (data) => {

  return {
    type: SET_MAIN_IMAGE,
    payload: data
  };
};

export const twoWayBindParagraphText = (index, data) => {

  return {
    type: UPDATE_INPUT_TEXT,
    index: index,
    payload: data
  };
};

