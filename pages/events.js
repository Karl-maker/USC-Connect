import { useEffect, useState } from "react";
import axios from "axios";
import environment from "../next.config";
import style from "../styles/modules/event.module.css";
import Loading from "../components/template/loading";
import EventWidget from "../components/widgets/events/EventWidget";
import Event from "../components/api/events/Events";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [campus, setCampus] = useState("");

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
        `${environment.env.BACKEND_URL}/api/events?page_size=10&page_number${pageNumber}&campus_name=${campus}`
      );

      // Change into classes first..

      for (let i = 0; i < result.data.length; i++) {
        setEvents((event) => [...event, new Event(result.data[i])]);
      }
      setLoading(false);
    })();
  }, [pageNumber, campus]);

  return (
    <Loading loading={loading}>
      <div className="row">
        <div className="col-6">
          {/*

        Drop down menu for campuses

        */}
        </div>
        <div className="col-6">
          {/*

        Page selection

        */}
        </div>
      </div>
      <div>
        <div
          className={style.body}
          style={{
            height: "100vh",
            maxHeight: "100vh",
            width: "100vw",
            paddingTop: "80px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {
            // Style lists of events
          }
          {events ? (
            <ul
              style={{
                paddingLeft: "0px",
              }}
            >
              {events.map((event) => (
                <li
                  key={event.id}
                  style={{
                    margin: "10px",
                  }}
                >
                  <EventWidget event={event} />
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Loading>
  );
}
