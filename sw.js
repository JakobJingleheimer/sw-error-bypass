function onFetch(event) {
  return fetch(new Request(event.request.clone())) // clone is needed IRL for re-tries
    .catch((err) => console.error(err)); // ← doesn't get called
}

self.addEventListener('fetch', onFetch);
