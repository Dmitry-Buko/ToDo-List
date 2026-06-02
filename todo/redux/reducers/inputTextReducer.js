const initialStore = {
  inputValue: "",
  errorSpace: "",
};

const inputTextReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "change":
      return { ...store, inputValue: action.payload };
    case "errorSpace":
      return { ...store, errorSpace: action.payload, inputValue: "" };
    case "detele_error":
      return { ...store, errorSpace: "" };
    case "zero":
      return { ...store, inputValue: "", errorSpace: "" };

    default:
      return store;
  }
};

export default inputTextReducer;
