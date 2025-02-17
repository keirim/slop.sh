import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toUTCString().split(" ")[4];
  };

  const formatLocalTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="fixed top-3 right-0 m-4 mr-8 text-primary text-2xl font-mono hidden sm:block">
      <div>{formatTime(time)} UTC</div>
      <div>{formatLocalTime(time)} Local</div>
    </div>
  );
}
