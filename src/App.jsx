import { useState } from "react";
import Header from "./components/Header";
import {Context} from "./context/Context";
import {notifications} from './data/data'

function App() {
  const [data, setData] = useState(notifications)
  const [showNotification, setShowNotification] = useState(false)
  const [amountOfRead, setAmountOfRead] = useState(data.filter(item => item.read === false).length);
  const [newClass, setNewClass] = useState(undefined)
  const markAllAsRead = () => {
    setAmountOfRead(0)
    setNewClass(data.map(item => item.new = false))
  }

  return (
    <Context.Provider value={{
      data, showNotification, setShowNotification, markAllAsRead, amountOfRead
    }}>
      <Header></Header>
    </Context.Provider>
  );
}

export default App;