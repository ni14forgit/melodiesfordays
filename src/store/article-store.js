import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    // SET_TITLE: (curState, text) => {
    //   return { title: text };
    // },
    // SET_DATE: (curState, text) => {
    //   return { date: text };
    // },
    // SET_LOCATION: (curState, text) => {
    //   return { location: text };
    // },
    // SET_PARAGRAPHS: (curState, text) => {
    //   return { listOfParagraphs: text };
    // },
    // SET_MEDIA: (curState, text) => {
    //   return { listOfMedia: text };
    // },
    // SET_PROFILE_PHOTO: (curState, text) => {
    //   return { profilePhoto: text };
    // },
    SET_ID: (curState, text) => {
      return { id: text };
    },
  };

  initStore(actions, {
    // title: "",
    // date: "",
    // location: "",
    // listOfParagraphs: [],
    // listOfMedia: [],
    // profilePhoto: null,
    id: "",
  });
};

export default configureStore;
