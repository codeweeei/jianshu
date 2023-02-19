import Header from "./components/header"
import { Provider } from 'react-redux'
import store from "./store"

export default function App() {
  return (
    <Provider store={store}>
      <Header></Header>
    </Provider>
  )
}