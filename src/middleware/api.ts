import axios from 'axios';
// import {normalize} from 'normalizr';
import config from 'react-native-config';

export const CALL_API = Symbol('CALL_API');

function makeAPICall(
  endpoint,
  schema,
  data = {},
  method = 'GET',
  headers = {},
) {
//   const fullUri = `${config.API_BASE_URL}${endpoint}`;
//   const options = {
//     headers: {
//       'Accept': 'application/json', // eslint-disable-line quote-props
//       'Content-Type': 'application/json',
//       'x-api-key': config.API_KEY,
//       ...headers,
//     },
//     method,
//   };
//   if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
//     options.body = JSON.stringify(data);
//   }

  const instance = axios.create({
    baseURL: config.API_BASE_URL,
    timeout: 10000,
    headers: {
      'Accept': 'application/json', // eslint-disable-line quote-props
      'Content-Type': 'application/json',
      'x-api-key': config.API_KEY,
      ...headers,
    },
  });

  // TODO: Abstract this into some helper class
  return instance
    .get(endpoint)
    .then((res) => {
      // TODO: Load this into redux
      console.log(`success for ${endpoint}:`, res.data);
    })
    .catch((err) => {
      console.log('settings error:', err);
    });

//   return fetch(fullUri, options)
//     .then(response => response.json().then(json => ({json, response})))
//     .then(({json, response}) => {
//       if (!response.ok) {
//         return Promise.reject(json);
//       }
//       return {...normalize(json, schema)};
//     });
}

export default (store) => (next) => (action) => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  let { endpoint } = callAPI;
  const {
    schema,
    types,
    data,
    method,
    headers,
    resolve,
    reject,
    context,
  } = callAPI;
  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }
  function actionWith(dat) {
    const finalAction = { ...action, ...dat };
    delete finalAction[CALL_API];
    return finalAction;
  }
  const [REQUEST, SUCCESS, FAILURE] = types;
  next(actionWith({ type: REQUEST }));
  return makeAPICall(endpoint, schema, data, method, headers, context).then(
    (response) =>
      next(
        actionWith({
          response,
          resolve,
          reject,
          context,
          type: SUCCESS,
        }),
      ),
    (error) =>
      next(
        actionWith({
          type: FAILURE,
          resolve,
          reject,
          context,
          error,
        }),
      ),
  );
};
