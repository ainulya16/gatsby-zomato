import { all } from 'redux-saga/effects';

// import {
  // get,
  // getWhyChooseUsData,
  // getContactUsData,
  // getPlanSummaryData,
  // getCommentData,
// } from './restaurant/saga';

export default function* rootSaga() {
  yield all([
    // getHowItWorksData(),
    // getWhyChooseUsData(),
    // getContactUsData(),
    // getPlanSummaryData(),
    // getCommentData(),
  ]);
}
