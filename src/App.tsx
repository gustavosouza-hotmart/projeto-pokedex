import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Cosmos global styles */
import "@cosmos/styles/reset.css";
import "@cosmos/styles/base.css";
import "@cosmos/styles/theme.css";

/* Cosmos global components */
import "@cosmos/alert/variations/warning.css";
import "@cosmos/alert/variations/success.css";
import "@cosmos/alert/variations/danger.css";
import "@cosmos/alert";
import "@cosmos/toast";

/* Cosmos global utilities */
import "@cosmos/styles/utilities/cursor.css";
import "@cosmos/styles/utilities/sizing.css";
import "@cosmos/styles/utilities/flex/flex.css";
import "@cosmos/styles/utilities/border/border.css";
import "@cosmos/styles/utilities/spacing/spacing.css";
import "@cosmos/styles/utilities/display/display.css";
import "@cosmos/styles/utilities/background/variations/grays.css";
import "@cosmos/styles/utilities/align.css";
import "@cosmos/styles/utilities/position.css";
import "@cosmos/styles/utilities/text/text.css";
import "@cosmos/button/variations/tertiary.css";
import "@cosmos/styles/utilities/text/variations/primary.css";
import "@cosmos/styles/utilities/text/variations/grays.css";

import Structure from "./components/Structure/Structure";
import "./global.css";
import Treinadores from "./routes/Treinadores/Treinadores";
import NovoTreinador from "./routes/Treinadores/NovoTreinador";
import Todos from "./routes/Pokemons/Todos";
import Vistos from "./routes/Pokemons/Vistos";
import Capturados from "./routes/Pokemons/Capturados";

export const App = () => (
    <Router>
        <Structure>
            <Switch>
                <Route exact path="/treinadores" component={Treinadores} />

                <Route exact path="/pokemons/" component={Todos} />

                <Route
                    path="/treinadores/novo-treinador/"
                    component={NovoTreinador}
                />

                <Route path="/pokemons/vistos" component={Vistos} />

                <Route path="/pokemons/capturados" component={Capturados} />
            </Switch>
        </Structure>
    </Router>
);

export default App;
