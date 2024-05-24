import React, { useState } from "react";
import ScanForm from "./components/ScanForm";
import ScanResults from "./components/ScanResults";

function App() {
  const [scanResults, setScanResults] = useState(null);

  return (
    <div>
      <h1>ZapScan: Web Vulnerability Scanner</h1>
      <ScanForm onScanComplete={setScanResults} />
      {scanResults && <ScanResults results={scanResults} />}
    </div>
  );
}

export default App;
