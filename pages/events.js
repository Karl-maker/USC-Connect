import { useEffect, useState } from "react";
import axios from "axios";
import environment from "../next.config";

export default function Events() {
  const [items, setItems] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    // Everytime webpage refreshes this function is called

    /*
    Notes:
      1. AXIOS sends an HTTP GET request to our server/api then returns the data to us
      2. This function below is a IIFE Immediatly Invoked Function Expression so that warning about using ASYNC keyword within useEffect won't show up
      3. Everytime pageNumber changes the useEffect fires to reload data
    */

    (async function fetchRequest() {
      const result = await axios.get(
        `${environment.env.BACKEND_URL}/api/events?page_size=10&page_number${pageNumber}`
      );
      setItems(result.data);
    })();
  }, [pageNumber]);

  return (
    <div style={{ backgroundColor: "green", height: "100vh", width: "100vw" }}>
      {
        // Style lists of events
      }
      {items ? (
        <ul>
          {items.map((data) => (
            <li
              key={data.name}
              style={{
                backgroundColor: "yellow",
                margin: "10px",
                borderRadius: "5px",
              }}
            >
              <div>{data.name}</div>
              <div>{data.description}</div>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
