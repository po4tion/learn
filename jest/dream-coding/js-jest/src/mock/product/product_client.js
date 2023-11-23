class ProductClient {
  fetchItems() {
    return fetch("https://po4tion.dev").then((res) => res.json());
  }
}

module.exports = ProductClient;
