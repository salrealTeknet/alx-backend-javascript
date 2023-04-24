export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let queries = 0;
  if (weakMap.has(endpoint)) queries = weakMap.get(endpoint);

  weakMap.set(endpoint, queries + 1);

  if (queries + 1 >= 5) throw Error('Endpoint load is high');
}
