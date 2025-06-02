import "../../styles/global.css";
import styles from "./App.module.css";
import store from "../../redux/store";
import Filter from "../Filter/Filter";
import UserList from "../UserList/UserList";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <h1>User List</h1>
        <Filter />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
