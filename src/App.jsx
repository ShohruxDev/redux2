import { Provider } from "react-redux";
import { store } from "./store";
import FormComponent from "./FormComponent";
import Cardlist from "./CardList";

const App = () => {
  return (
    <Provider store={store}>
      <FormComponent />
      <Cardlist    />
    </Provider>
  );
};

export default App;

