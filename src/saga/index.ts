import { fork, take } from 'redux-saga/effects'

function* handleCreateProduct() {
  console.log('handleCreateProduct')
  //   while (true) {}
}

function* rootSaga() {
  try {
    yield fork(handleCreateProduct)
  } catch (e) {}
}

export default rootSaga
