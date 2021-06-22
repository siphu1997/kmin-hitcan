import * as moment from "moment";
import "moment/locale/vi";
// import Swal from "sweetalert2";

export const replaceStringBy = (str_origin, str_needToReplace, str_by) => {
  const regex = new RegExp(`${str_needToReplace}`, "g");

  let result = str_origin.replace(regex, `${str_by}`);
  return result;
};

export const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = (cname) => {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const currentDate = () => {
  return new Date();
};

export const FORMAT_DATETIME = "DD/MM/YYYY HH:mm";

export const FORMAT_DATE = "DD/MM/YYYY";

export const formatRelativeTime = (currentDate) => {
  return currentDate ? moment(currentDate).from(moment()) : null;
};

export const formatDateTime = (date) => {
  return date ? moment(date).format(FORMAT_DATETIME) : null;
};

export const formatDate = (date) => {
  return date ? moment(date).format(FORMAT_DATE) : null;
};

export const checkToday = (dateCheck) => {
  return dateCheck
    ? moment(dateCheck).format(FORMAT_DATE) ===
        moment(currentDate()).format(FORMAT_DATE)
    : false;
};

export const convertArrayToObject = (data, key) => {
  if (!key || !data[0][key]) return {};
  return data.reduce(
    (result, item) => ({ ...result, [item[key]]: { ...item } }),
    {}
  );
};

export const findValueInArrayeBy = (list = [], key, value) => {
  const currentIndex = list.findIndex((item) => item[key] === value);
  if (currentIndex < 0) return "";
  return list[currentIndex];
};

export const formatCurrencyVnd = (value) => {
  return (
    `${value}`
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ".") + prev;
      }) + "đ"
  );
};
