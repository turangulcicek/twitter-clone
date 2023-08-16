// local storage eleman ekleme
export const setLocal = (key, data) => {
  const strData = JSON.stringify(data);
  localStorage.setItem(key, strData);
};
// localden eleman alma
export const getLocal = (key) => {
  const strData = localStorage.getItem(key);
  const data = JSON.parse(strData);
  return data;
};
