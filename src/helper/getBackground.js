const getBackground = (priority) => {
  return priority.toLowerCase() === "high"
    ? "#FF5555"
    : priority.toLowerCase() === "medium"
    ? "#52d952"
    : "#fdfd57";
};

export default getBackground;
