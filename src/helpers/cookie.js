export const getCookie = (cname) => {
  const name = cname + '=';
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
};

export const setCookie = (cname, cvalue, exdays = 365) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  document.cookie = `${cname}=${cvalue};expires=${d.toUTCString()};`;
  return cvalue;
};

export const deleteCookie = (cname) => {
  const d = new Date(0);
  document.cookie = `${cname}=;expires=${d.toUTCString()};`;
};
