export function createApiClient({ provider }) {
  async function fetchMedia() {
    const raw = await provider.fetchMedia();
    return raw;
  }

  async function fetchById(id) {
    const raw = await provider.fetchById(id);
    return raw;
  }

  return { fetchMedia, fetchById };
}
