import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme, Loader } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import "./App.css";
import TabConfig from "./TabConfig"
import PrivacyActStatement from "./PrivacyActStatement";
import Home from "./Home";
import Attestation from "./Attestation";
import AttestationSummary from "./AttestationSummary";
import MyAttestations from "./MyAttestations";
import Admin from "./Admin";
import AdminSettings from "./AdminSettings";
import AdminAttestationStatus from "./AdminAttestationStatus";
import AdminLocations from "./AdminLocations";
import AdminLinks from "./AdminLinks";
import { Welcome } from "./sample/Welcome";


/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { theme, loading } = useTeamsFx();
  return (
    <Provider theme={theme || teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
      <Router>
        <Route exact path="/">
          <Redirect to="/privacyActStatement" />
        </Route>
        {loading ? (
          <Loader style={{ margin: 100 }} />
        ) : (
          <>
            <Route exact path="/privacyActStatement" component={PrivacyActStatement} />
            <Route exact path="/home" component={Home} />            
            <Route exact path="/attestation" component={Attestation} />
            <Route exact path="/summary/:id" component={AttestationSummary} />
            <Route exact path="/my" component={MyAttestations} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/settings" component={AdminSettings} />
            <Route exact path="/status" component={AdminAttestationStatus} />
            <Route exact path="/locations" component={AdminLocations} />
            <Route exact path="/links" component={AdminLinks} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/termsofuse" component={TermsOfUse} />            
            <Route exact path="/config" component={TabConfig} />
            <Route exact path="/tab" component={Tab} />
            <Route exact path="/welcome" component={Welcome} />
          </>
        )}
      </Router>
    </Provider>
  );
}
