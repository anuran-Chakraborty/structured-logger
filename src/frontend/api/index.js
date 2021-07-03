import axios from "axios";
import urls from "../config/urls";

const getHeader = context => {
  return { Authorization: `Bearer ${JSON.stringify(context)}` };
};

const getUrl = urlkey => {
  return `${urls.base_domain}/${urls[urlkey]}`;
};

const fetchAll = async (context, urlKey, params) => {
  const url = getUrl(urlKey);
  const response = await axios.get(url, {
    headers: getHeader(context),
    params: params
  });
  return response;
};

const fetchOne = async (context, urlKey, id) => {
  const url = `${getUrl(urlKey)}/${id}`;
  const response = await axios.get(url, { headers: getHeader(context) });
  return response;
};

const create = async (context, urlKey, data) => {
  const url = getUrl(urlKey);
  const response = await axios.post(url, data, { headers: getHeader(context) });
  return response;
};

const update = async (context, urlKey, data, id) => {
  const url = `${getUrl(urlKey)}/${id}`;
  const response = await axios.put(url, data, { headers: getHeader(context) });
  return response;
};

const remove = async (context, urlKey, id) => {
  const url = `${getUrl(urlKey)}/${id}`;
  const response = await axios.delete(url, { headers: getHeader(context) });
  return response;
};

export { fetchAll, fetchOne, create, update, remove };
