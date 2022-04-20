import { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, InputLabel, Select, MenuItem, Card } from "@mui/material";
import environment from "../next.config";
import style from "../styles/modules/event.module.css";
import Loading from "../components/template/Loading";
import EventWidget from "../components/widgets/events/EventWidget";
import Event from "../components/api/events/Events";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [campus, setCampus] = useState("Maracas Valley");

  useEffect(() => {
    // Everytime webpage refreshes this function is called

    /*
    Notes:
      1. AXIOS sends an HTTP GET request to our server/api then returns the data to us
      2. This function below is a IIFE Immediatly Invoked Function Expression so that warning about using ASYNC keyword within useEffect won't show up
      3. Everytime pageNumber changes the useEffect fires to reload data
    */

    (async function fetchRequest() {
      try {
        const result = await axios.get(
          `${environment.env.BACKEND_URL}/api/events?page_size=10&page_number${pageNumber}&campus_name=${campus}&category=event`
        );

        // Change into classes first..

        let data = [];

        for (let i = 0; i < result.data.length; i++) {
          data.push(new Event(result.data[i]));
        }

        setEvents(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();
  }, [pageNumber, campus]);

  return (
    <Loading loading={loading}>
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
        <div className="container-fluid m-0 p-0" style={{}}>
          <div className="row">
            <div className="col-12 text-end mt-3 p-3">
              <FormControl
                variant="filled"
                sx={{ marginRight: 2, bgcolor: "#ffff", borderRadius: 1 }}
              >
                <InputLabel id="demo-simple-select-label">Campus</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={campus}
                  label="Select Campus"
                  size="small"
                  onChange={(e) => {
                    setCampus(e.target.value);
                  }}
                >
                  <MenuItem value={"Maracas Valley"}>Maracas Valley</MenuItem>
                  <MenuItem value={"San Fernando"}>San Fernando</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sm-0 col-sx-0"></div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-sx-12">
              <div>
                {
                  // Style lists of events
                }
                {error && <>No Events Found</>}
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
                          margin: "0px",
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
            <div className="col-lg-3 col-md-2 col-sm-0 col-sx-0"></div>
          </div>
        </div>
      </div>
    </Loading>
  );
}
