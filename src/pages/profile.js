import { store } from "../store/create-store";
import { Provider } from "react-redux";

export function ProfilePage() {
    
    return (
        <Provider store={store}>
            <h1> Profile Page </h1>
        </Provider>
    );
  }
  