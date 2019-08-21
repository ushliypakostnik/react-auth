import {
  Test,
  TEST_ACTION_TYPE,
  testActionType
} from './types';

// Action Creators

export function testActionCreator(testText: Test) : testActionType {
  return {
    type: TEST_ACTION_TYPE,
    test: testText,
  };
};
