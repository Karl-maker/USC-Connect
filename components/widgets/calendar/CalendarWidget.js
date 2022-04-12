import Calendar from "react-calendar";

export default function CalendarWidget({ value, onChange }) {
  return (
    <div style={{ width: "100%" }}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
