class Model {
  static async fetchData(): Promise<void> {
    try {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();

      return Promise.resolve(data);
    }
    catch(err) {
      return Promise.reject(err);
    }
  }
}

export default Model;
