class httpClient {
  async post(data) {
    return fetch("/api/auth/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

export default httpClient;
