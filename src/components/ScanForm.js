import React, { useState } from "react";
import axios from "axios";

function ScanForm({ onScanComplete }) {
  const [targetUrl, setTargetUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/scan/", {
        target_url: targetUrl,
      });
      onScanComplete(response.data); // Call the callback with scan results
    } catch (error) {
      setError("An error occurred during the scan. Please try again.");
      console.error("Error scanning:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="targetUrl">Target URL:</label>
        <input
          type="text"
          id="targetUrl"
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Scanning..." : "Scan"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default ScanForm;
