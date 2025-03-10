import { Provider } from "react-redux";
import { store } from "./store";
import FormComponent from "./FormComponent";
import CardList from "./CardList";

const App = () => {
  return (
    <Provider store={store}>
      <FormComponent />
      <CardList    />
    </Provider>
  );
};

export default App;

