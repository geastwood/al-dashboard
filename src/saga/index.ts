import { fork, take, put } from 'redux-saga/effects'
import * as uiActions from '../ui/action'
import fixture from './fixture'
import { landPlane } from '../store/action'

function* queryWatcher() {
  while (true) {
    const action: ReturnType<typeof uiActions.query> = yield take(
      uiActions.QUERY
    )

    const { query } = action.payload
    let json = {}
    const url = `http://ec2-35-156-202-115.eu-central-1.compute.amazonaws.com:5000/api/v1/mockup/${encodeURI(
      query
    )}`

    try {
      const res = yield fetch(url)

      json = yield res.json()
    } catch (e) {
      json = fixture[url]
    }

    const charttype = json.chartype || 'bar'

    yield put(
      landPlane(`chart/${encodeURI(query)}`, {
        charttype,
        data: JSON.parse(json.data),
      })
    )

    yield put(
      landPlane(`chart/current`, {
        charttype,
        data: JSON.parse(json.data),
      })
    )
  }
}

function* rootSaga() {
  try {
    yield fork(queryWatcher)
  } catch (e) {}
}

export default rootSaga
