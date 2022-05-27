const formatDate = (param: string) => {
  const year = param.substr(0, 4);
  const month = param.substr(4, 2);
  const date = param.substr(6, 2);
  return `${year}.${month}.${date}`;
};

export default formatDate;
