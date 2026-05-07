import Image from "next/image";

const CardEvent = ({ title, date, location, description }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  );
};

export default CardEvent;
