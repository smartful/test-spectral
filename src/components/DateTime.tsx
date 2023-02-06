import { useEffect, useState } from "react";

export interface DateTimeProps {
  city: string;
  timezone: string;
}

const DateTime: React.FC<DateTimeProps> = ({ city, timezone }) => {
  const [date, setDate] = useState(new Date());

  function refreshDate() {
    setDate(new Date());
  }

  useEffect(() => {
    const timeoutId = setInterval(() => refreshDate(), 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, [date]);

  return (
    <div>
      <strong>{city} :</strong>{" "}
      <span>{date.toLocaleString("fr-FR", { timeZone: timezone })}</span>
    </div>
  );
};

export default DateTime;
