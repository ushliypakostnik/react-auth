export interface StoreType {
  readonly rootReducer: {
    readonly auth : {
      readonly isFetching : boolean;
      readonly isAuth : boolean;
      readonly error : string;
      readonly success : string;
    };
    readonly user : {
      readonly isFetching : boolean;
      readonly profile : {
        readonly id : string | null;
        readonly usermail : string | null;
        readonly username : string | null;
        readonly isVerify : boolean;
        readonly userdata : [];
      };
      readonly error : string;
      readonly success : string;
    };
  };
  readonly router? : any;
};

export interface ObjectOfStringsType {
  readonly [key: string] : string;
};

export interface ObjectOfAnyType {
  readonly [key: string] : any;
};

export interface CredentialsType {
  readonly usermail: string;
  readonly password: string;
};

export interface NewPasswordType {
  readonly id: string;
  readonly password: string;
  readonly token: string;
};

interface CookieType {
  readonly name : string;
  readonly expires : number;
};

export interface CookiesType {
  readonly [key: string] : CookieType;
};

export interface LocalType {
  readonly [key: string] : string;
};

