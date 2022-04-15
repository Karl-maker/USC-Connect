/*

This page will be created to allow admin to create events

*/

import { useState, useContext } from "react";
import RedirectGuard from "../components/template/RedirectGuard";
import CalendarWidget from "../components/widgets/calendar/CalendarWidget";
import { UserContext } from "../context/ContextProvider";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Alert,
} from "@mui/material";
import { datePresentation } from "../utils/date";
import { BsCalendar3Event } from "react-icons/bs";
import style from "../styles/modules/create-event.module.css";
import MenuButton from "../components/template/MenuButton";
import Events from "../components/api/events/Events";
import { useRouter } from "next/router";
import AlertWidget from "../components/template/Alert";

const campuses = ["Maracas Valley", "San Fernando", "Jamaica"];

export default function CreateEvents() {
  const router = useRouter();
  const UserService = useContext(UserContext);
  const [step, setStep] = useState(0);
  const [alert, setAlert] = useState(false);
  const [prompt, setPrompt] = useState({});
  const [event, setEvent] = useState({
    name: "",
    date: new Date(),
    location: "",
    description: "",
    campus_name: "Maracas Valley",
    admin_id: UserService.user.id,
  });

  const Submit = async () => {
    const new_event = new Events({
      name: event.name,
      description: event.description,
      date: event.date,
      location: event.location,
      campus_name: event.campus_name,
      admin_id: event.admin_id,
    });

    console.log(UserService.user);

    if (await new_event.save(UserService.user.access_token)) {
      setPrompt({
        severity: "success",
        content: "Event created successfully",
        title: "Event",
      });
      setAlert(true);
      setTimeout(() => {
        router.push("/");
      }, 6000);
    } else {
      setPrompt({
        severity: "error",
        content: "Issue with creating event",
        title: "Event",
      });
      setAlert(true);
    }
  };

  return (
    <>
      <AlertWidget
        severity={prompt.severity}
        content={prompt.content}
        title={prompt.title}
        open={alert}
        setOpen={setAlert}
        duration={8000}
      />
      <RedirectGuard
        condition={UserService.user.is_admin}
        page="/student-login"
      >
        <div
          className={style.body}
          style={{
            height: "100vh",
            width: "100vw",
            paddingTop: "80px",
          }}
        >
          <div className="row">
            <div className="col-12 p-3">
              <div
                className="row p-1 py-3 m-lg-5 m-1"
                style={{ borderRadius: "15px", backgroundColor: "#ffff" }}
              >
                <div className="col-12">
                  <p className="text-muted p-0 m-0 text-center mb-3">
                    <Chip
                      variant={"outlined"}
                      sx={{
                        borderWidth: "0px solid",
                      }}
                      label={`Create Event`}
                    />
                  </p>
                </div>
                <div className="col-lg-5 col-md-12 m-lg-0 m-md-2 m-sm-2 mt-0 p-3">
                  <div className="row">
                    <div className="col-12">
                      <p className="text-muted">
                        <BsCalendar3Event
                          style={{
                            marginRight: "10px",
                            color: "green",
                            marginBottom: "2px",
                          }}
                        />
                        {`${datePresentation(event.date).month}, ${
                          datePresentation(event.date).day_nth
                        } ${datePresentation(event.date).day_name}\t${
                          event.campus_name
                        }`}
                      </p>
                    </div>
                    <div className="col-6">
                      <TextField
                        id="name-input"
                        key="name-input"
                        size="small"
                        label="Title"
                        variant="outlined"
                        value={event.name}
                        onChange={(e) => {
                          e.preventDefault();
                          setEvent((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                          }));
                        }}
                      />
                      <TextField
                        className="mt-3"
                        id="description-input"
                        key="description-input"
                        label="Description"
                        variant="outlined"
                        value={event.description}
                        onChange={(e) => {
                          e.preventDefault();
                          setEvent((prevState) => ({
                            ...prevState,
                            description: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        id="location-input"
                        key="location-input"
                        size="small"
                        label="Location"
                        variant="outlined"
                        value={event.location}
                        onChange={(e) => {
                          e.preventDefault();
                          setEvent((prevState) => ({
                            ...prevState,
                            location: e.target.value,
                          }));
                        }}
                      />
                      <div className="col-6 mt-3">
                        <FormControl>
                          <InputLabel id="demo-simple-select-label">
                            Select Campus
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={event.campus_name}
                            label="Select Campus"
                            sx={{ height: 50, width: "100%" }}
                            onChange={(e) => {
                              setEvent((prevState) => ({
                                ...prevState,
                                campus_name: e.target.value,
                              }));
                            }}
                          >
                            <MenuItem value={"Maracas Valley"}>
                              Maracas Valley
                            </MenuItem>
                            <MenuItem value={"San Fernando"}>
                              San Fernando
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <CalendarWidget
                    value={event.date}
                    onChange={(date) => {
                      setEvent((prevState) => ({
                        ...prevState,
                        date: date,
                      }));
                      setStep(1);
                    }}
                  />
                </div>
                <div className="col-12 text-end">
                  <Button
                    size="medium"
                    color="neutral"
                    variant="contained"
                    style={{ color: "#fff", textAlign: "center" }}
                    className="mt-4"
                    disableElevation
                    onClick={Submit}
                  >
                    Create Event
                  </Button>
                </div>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </RedirectGuard>
    </>
  );
}
