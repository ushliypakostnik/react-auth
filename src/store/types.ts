export interface StoreType {
  readonly rootReducer: {
    readonly auth : {
      readonly isFetching : boolean;
      readonly isAuth : boolean;
      readonly error : string;
    };
    readonly user : {
      readonly isFetching : boolean;
      readonly profile : {
        userid : string | null;
        usermail : string | null;
        username : string | null;
        isVerify : boolean;
      };
      readonly error : string;
      readonly success : string;
    };
  };
};

export interface credentialsType {
  usermail: string;
  password: string;
};
