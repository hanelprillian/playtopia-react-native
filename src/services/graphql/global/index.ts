import {graphQLFetch} from '../../../lib/graphql-fetch';
import {QUERY_GET_GLOBAL_DATA} from './queries';

export const getGlobalOptions = async () => {
  const {data} = await graphQLFetch(QUERY_GET_GLOBAL_DATA);

  return {
    response: data || null,
    message: data ? '200' : '404',
  };
};
