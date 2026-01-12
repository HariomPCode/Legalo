import event from "./event.json";

export const getFormConfig = (module) => {
  const map = {
    event,
  };
  return map[module];
};
