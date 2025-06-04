"use client";

import { useState, useEffect } from "react";

export default function EnderecoAutoComplete() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(() => {
      const bbox = "-54.75,-20.6,-54.45,-20.3";
      const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=10&bbox=${bbox}`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          const rawSuggestions = data.features || [];

          const uniqueMap = new Map();

          rawSuggestions.forEach((sug) => {
            const { name, street, city, country } = sug.properties;
            const full = [name, street, city, country].filter(Boolean).join(", ");
            if (!uniqueMap.has(full)) {
              uniqueMap.set(full, sug);
            }
          });

          setSuggestions(Array.from(uniqueMap.values()));
        })
        .catch(err => {
          console.error("Erro ao buscar sugestões:", err);
          setSuggestions([]);
        });
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (suggestion) => {
    const { name, street, city, country } = suggestion.properties;
    const full = [name, street, city, country].filter(Boolean).join(", ");
    setQuery(full);
    setSuggestions([]);
  };

  return (
    <div className="mb-3 position-relative">
      <label htmlFor="addrs-foco" className="form-label">Endereço do foco: *</label>
      <input
        type="text"
        className="form-control"
        id="addrs-foco"
        name="addrs-foco"
        required
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <div className="list-group position-absolute w-100 z-3" style={{ maxHeight: 200, overflowY: "auto" }}>
          {suggestions.map((sug, i) => {
            const { name, street, city, country } = sug.properties;
            const full = [name, street, city, country].filter(Boolean).join(", ");
            return (
              <button
                key={i}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => handleSelect(sug)}
              >
                {full}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}