class StubProductClient {
  async fetchItems() {
    return [
      { item: 1, available: true },
      { item: 2, available: false },
      { item: 3, available: true },
    ];
  }
}

module.exports = StubProductClient;
