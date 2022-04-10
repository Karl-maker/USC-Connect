import style from "../../../styles/modules/event.module.css";
import { checkHowManyDaysTill } from "../../../utils/date";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ReadMore from "../../../utils/read-more";
export default function EventWidget({ event }) {
  /*

    Show take all info for an event and display it

    */

  return (
    <div className={style.widget} style={{ margin: "10px" }}>
      <h3 style={{ marginBottom: "20px" }}>{event.name}</h3>

      <ReadMore limit={300}>{`${event.description}`}</ReadMore>
      <div className="row">
        <div className="col-6 text-start">
          <p className="text-muted p-0 m-0" style={{ fontSize: "12px" }}>
            <HiOutlineLocationMarker
              style={{ marginBottom: "5px", marginRight: "5px" }}
            />
            {`${event.location}`}
          </p>
        </div>
        <div className="col-6 text-end">
          <p
            className="text-muted p-0 m-0"
            style={{ fontSize: "12px" }}
          >{`In ${checkHowManyDaysTill(new Date(), new Date(event.date))}`}</p>
        </div>
      </div>
    </div>
  );
}
