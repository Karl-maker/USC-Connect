import Calendar from "react-calendar";

export default function CalendarWidget({ value, onChange }) {
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
