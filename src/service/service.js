export const getUser = (link) => {
  const token = "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";
  return (fetch(link, {
    method: "GET",
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
      "Authorization": 'Token' + token  
    }
  })).then(response => response.json())
  .catch((error) => {
    console.log(error.message);
    throw new Error(error);
  })
}

export const showRepos = (reposUrl, f) => {
  fetch(reposUrl)
  .then (respons => respons.json())
  .then(data => f(data))
  .catch((error) => {
    console.log(error);
  })
}

export const showEvents = (eventsUrl, f) => {
  fetch(eventsUrl)
  .then (respons => respons.json())
  .then(data => f(data))
  .catch((error) => {
    console.log(error);
  })
}


