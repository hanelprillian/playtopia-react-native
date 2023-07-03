const GRAPHQL_URL = 'https://dev-graphql.playtopia.id/graphql/v1';

export const graphQLFetch = async (
  query: string,
  variables?: any,
): Promise<any> => {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query, variables}),
  });

  if (!res.ok) {
    throw new Error(`GraphQL endpoint returned ${res.status}`);
  }

  return res.json();
};
