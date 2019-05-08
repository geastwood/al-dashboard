import { fork, take, put } from 'redux-saga/effects'
import * as uiActions from '../ui/action'
import { landPlane, historyAdd } from '../store/action'
import { HistoryType } from '../store/reducer/history'

function* loadHistoryDataWatcher() {
  while (true) {
    const action: ReturnType<typeof uiActions.loadHistory> = yield take(
      uiActions.LOAD_HISTORY_DATA
    )

    const history: HistoryType = action.payload

    yield put(
      landPlane(`chart/current`, {
        charttype: history.charttype,
        data: history.data,
      })
    )
  }
}

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
      const charttype = json.chartype || 'bar'

      const data = JSON.parse(json.data)

      yield put(
        landPlane(`chart/${encodeURI(query)}`, {
          charttype,
          data,
        })
      )

      yield put(
        landPlane(`chart/current`, {
          charttype,
          data,
        })
      )

      yield put(
        historyAdd({
          query,
          charttype,
          data,
          updatedTime: new Date().toISOString(),
        })
      )
    } catch (e) {
      break
    }
  }
}

function* rootSaga() {
  try {
    yield fork(queryWatcher)
    yield fork(loadHistoryDataWatcher)
  } catch (e) {
    console.log(e)
  }
}

export default rootSaga
