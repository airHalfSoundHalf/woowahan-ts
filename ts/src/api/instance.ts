class Axios<T> {
  async put(url: T, config: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }

  async get(url: T, config: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
}

const instance = new Axios();

export default instance;
