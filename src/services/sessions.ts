import { getRequest, postRequest } from "../shared/api";

interface IGetSessions {
  params?: any;
  id?: number;
}

interface IPostSessions {
  params?: any;
  payload?: any;
}

export const getSessions = ({ params, id }: IGetSessions) => {
  const URL = `/todos/` + id;
  return getRequest(URL, params);
};

export const createSession = ({ params, payload }: IPostSessions) => {
  const URL = `/todos`
  return postRequest(URL, payload, params);
};