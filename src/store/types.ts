export interface Store {
  readonly rootReducer: {
    readonly test: string,
    readonly error? : string[],
  }
};

export interface Test {
  test: string,
};

// Actions Types

export const TEST_ACTION_TYPE = 'TEST_ACTION_TYPE';

interface testAction {
  type: typeof TEST_ACTION_TYPE,
  test: Test,
};

export type testActionType = testAction;
