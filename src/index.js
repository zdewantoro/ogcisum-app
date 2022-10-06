import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Share from "./pages/ShareSamplesPage";
import Editing from "./pages/EditingSamplesPage";
import {
  toneObject,
  toneTransport,
  tonePartGuitar,
  tonePartPiano,
  tonePartFrenchHorn,
  tonePartDrums,
} from "./data/instruments";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Create-Samples"
          element={
            <Editing
              toneObject={toneObject}
              toneTransport={toneTransport}
              tonePartGuitar={tonePartGuitar}
              tonePartPiano={tonePartPiano}
              tonePartFrenchHorn={tonePartFrenchHorn}
              tonePartDrums={tonePartDrums}
            />
          }
        />
        <Route
          path="/Edit-Samples/:id"
          element={
            <Editing
              toneObject={toneObject}
              toneTransport={toneTransport}
              tonePartGuitar={tonePartGuitar}
              tonePartPiano={tonePartPiano}
              tonePartFrenchHorn={tonePartFrenchHorn}
              tonePartDrums={tonePartDrums}
            />
          }
        />
        <Route path="/Share-Samples" element={<Share />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
