import { useEffect, useState } from "react";

export const Debouncing = () => {
  const [query, setQuery] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        try {
          console.log(query);
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          setRes(await res.json());
        } catch (err) {
          console.log(err);
          setRes([]);
        }
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {res.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};
