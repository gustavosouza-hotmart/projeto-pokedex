import * as React from "react";
import Structure from './components/Structure/Structure';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./global.css";
import Treinadores from "./routes/Treinadores";
import Pokemons from "./routes/Pokemons/Pokemons";
import Todos from "./routes/Pokemons/Todos";
import Vistos from "./routes/Pokemons/Vistos";
import Capturados from "./routes/Pokemons/Capturados";

export const App = () => (
    <Router>
      
      <Structure>
        <Switch>

          <Route path="/treinadores" component={Treinadores} />

          <Route exact path="/pokemons" component={Todos} />
            
          <Route path="/pokemons/vistos" component={Vistos}/>

          <Route path="/pokemons/capturados" component={Capturados} />

        </Switch>
      </Structure>
    </Router>
);

export default App;