/*

This page will be created to allow admin to create events

*/

import { useState, useContext } from "react";
import CalendarWidget from "../components/widgets/calendar/CalendarWidget";
import { UserContext } from "../context/context_provider";
import style from "../styles/modules/create-event.module.css";

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      title: "Create Event",
    },
  };
}

export default function CreateEvents() {
  const UserService = useContext(UserContext);
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(new Date());

  const StepOne = () => {
    return <CalendarWidget value={date} onChange={setDate} />;
  };

  const StepTwo = () => {
    return <></>;
  };

  return (
    <div
      className={style.body}
      style={{
        height: "100vh",
        maxHeight: "100vh",
        width: "100vw",
        paddingTop: "80px",
      }}
    >
      <div className="row p-0 m-0">
        <div className="col-12">
          {/*

        Header

        */}
          <h1>Select A Date</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">{step === 0 && <StepOne />}</div>
        <div className="col-12">{step === 1 && <StepTwo />}</div>
      </div>
    </div>
  );
}
