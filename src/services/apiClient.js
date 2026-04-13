export function createApiClient({ baseUrl, anonKey }) {
  async function invoke(functionName, payload) {
    const headers = {
      'Content-Type': 'application/json'
    };

    if (anonKey) {
      headers.apikey = anonKey;
      headers.Authorization = `Bearer ${anonKey}`;
    }

    const response = await fetch(`${baseUrl}/${functionName}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || `Function ${functionName} failed`);
    }

    return response.json();
  }

  return { invoke };
}
