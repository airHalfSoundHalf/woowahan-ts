class LocalDB<T> {
  async put(table: string, row: T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // T 타입의 데이터를 DB에 저장
    });
  }

  async get(table: string, key: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // T 타입의 데이터를 DB에서 가져옴
    });
  }

  async getTaable(table: string): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
      // T[] 타입의 데이터를 DB에서 가져옴
    });
  }
}

class ICacheStore {}

export default class IndexedDB implements ICacheStore {
  private _DB: LocalDB<{ key: string; value: Promise<Record<string, unknown>>; cacheTTL: number }>;

  private DB() {
    if (!this._DB) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._DB = new LocalDB('localCache', {
        ver: 6,
        tables: [{ name: '', keyPath: 'key' }],
      });
      return this._DB;
    }
  }
}
