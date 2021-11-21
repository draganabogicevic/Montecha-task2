export const includesIgnoreCase = (stringToSearch, queryString) => {
  if (queryString.length === 0) return true;
  queryString = (queryString.trim());
  let queries = queryString.split(/\s+/);

  for (let i = 0; i < queries.length; i++) {
    if (i === queries.length - 1) queries[i] = new RegExp("\\b" + queries[i], "i");
    else queries[i] = new RegExp("\\b" + queries[i] + "\\b", "i");
  }
  for (let i = 0; i < queries.length; i++) {
    if (!stringToSearch.match(queries[i])) return false;
  }

  return true;
};