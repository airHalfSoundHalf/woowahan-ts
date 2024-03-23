import React, { SyntheticEvent } from 'react';

enum WeekDays {
  MON = 'MON',
  TUES = 'TUES',
  WEDNES = 'WEDNES',
  TYHURS = 'TYHURS',
  FRI = 'FRI',
}

const MyComponent = () => {
  type WeekDayKey = keyof typeof WeekDays;

  function printDay(key: WeekDayKey, message: string) {
    const day = WeekDays[key];

    if (day <= WeekDays.WEDNES) {
      console.log(`day:${day}, ${message}`);
    }
  }

  printDay('TUES', 'test');

  const booleanType = {
    false: 0,
    true: 1,
  } as const;

  type X = (typeof booleanType)[keyof typeof booleanType];

  let noticePopup: Record<string, never>;

  console.log('noticePopup:', noticePopup);

  type Example = {
    a: number;
    b: string;
    c: boolean;
  };

  type Subset<T> = {
    [K in typeof T]?: T[K];
  };

  const aExample: Subset<Example> = { a: 3 };

  type Xx = {
    readonly a: number;
    readonly b: string;
  };

  type CreateMutable<Type> = {
    readonly [Property in keyof Type]: Type[Property];
  };

  type ResultType = CreateMutable<Xx>;

  const BottomSheetMap = {};

  type BOTTOM_SHEET_ID = keyof typeof BottomSheetMap;

  type BottomSheetStore = {
    [index in BOTTOM_SHEET_ID as `${index}_BOTTOM_SHEET`]: {
      resolver: () => void;
      args: any;
      isOpened: boolean;
    };
  };

  type ExampleArrayType<T> = T[];

  const x: ExampleArrayType<string> = ['1', '2'];

  function exampleFunc<T>(arg: T): T[] {
    return new Array(3).fill(arg);
  }

  interface SubmitEvent<T = HTMLElement> extends SyntheticEvent<T> {
    submitter: T;
  }

  exampleFunc('hello');

  const arrowExampeFunc = <T extends boolean>(arg: T): T[] => {
    return new Array(3).fill(arg);
  };

  return <div></div>;
};

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

// export default MyComponent;
