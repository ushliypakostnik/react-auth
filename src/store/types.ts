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
        readonly userid : string | null;
        readonly usermail : string | null;
        readonly username : string | null;
        readonly isVerify : boolean;
      };
      readonly error : string;
      readonly success : string;
    };
  };
};

export interface CredentialsType {
  readonly usermail: string;
  readonly password: string;
};

interface MessageType {
  readonly message : string;
};

export interface MessagesType {
  readonly verify_account : MessageType;
  readonly resend_verify_email: MessageType;
};

interface CookieType {
  readonly name : string;
  readonly expires : number;
};

export interface CookiesType {
  readonly TOKEN : CookieType;
};

export interface LocalType {
  readonly PROFILE : string;
};

