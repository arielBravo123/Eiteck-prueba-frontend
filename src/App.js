/* 
Se utiliza react-router-dom para el manejo de rutas
*/
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import CharacterDetailsPage from "./pages/CharacterScreen/Character_details_page";
import Header from "./components/Header/Header_component";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/:page?" exact component={HomePage} />
          <Route
            path="/character/:id?"
            exact
            component={CharacterDetailsPage}
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
