import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta embebida */}
          <Route path="/embed" element={<EmbedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const EmbedPage = () => {
  return (
    <div>
      <h1>Embed Page</h1>
      {/* Aquí se embebe el iframe o contenido externo */}
      <iframe
        src="https://api.ventaflow.co/api/platform/session/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ZlbnRhZmxvdy5jbyIsInN1YmRvbWFpbiI6ImplcmVtaW50aG11bm96c3dlYnNpdGUtMSIsImV4cCI6MTczNDcyMDk5MywidXNlcklkIjo1OTQzODgsImNvbnRlbnQiOiJkT3YzaG5mc2tzWnA0QmxjIn0.q5VgYdeuxq6jUYGpuNZ72uBmwNKqBPNbFDojiTtcZu4"
        title="Website Embed"
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default App;
