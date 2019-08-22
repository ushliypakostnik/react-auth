export interface StoreType {
  readonly rootReducer: {
    readonly isFetching: boolean;
    readonly auth: {
       readonly isAuth: boolean;
    };
   readonly error? : string;
  }
};

export interface credentialsType {
  usermail: string;
  password: string;
};

export interface errorType {
  error: string[];
};

export interface responseType {
  response: any[];
};
