import Cookies from 'js-cookie';

export const getSession = () => {
  const token = Cookies.get('AuthToken');

  console.log(!!token);
  return !!token;
}

const generalReq = (url, data, headers, type) => {
  return fetch(url, {
    method: `${type}`,
    body: JSON.stringify(data),
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      ...headers
    },
    credentials: "include"
  });
};

export const post = (url, data, headers) => {
  return generalReq(url, data, headers, "POST");
};

export const get = (url, params = "", headers) => {
  let getUrl = url;

  const parameters = Object.keys(params);

  // setup query parameters
  if (params && parameters && parameters.length > 0) {
    const query = Object.keys(params)
      .filter(i => params[i] !== null) // skip null values
      .map(i => encodeURIComponent(i) + "=" + encodeURIComponent(params[i])) // concatenate key=value
      .join("&"); // separate by &

    getUrl = `${url}${query}`; // add ?parameters=values
  }

  return fetch(getUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...headers
    },
    credentials: "same-origin"
  });
};