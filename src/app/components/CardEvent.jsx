const CardEvent = ({ id, title, date, location, description, asset }) => {
  return (
    <div>
      <Image src={asset.url} alt={title} />
      <p>{title}</p>
      <p>{date}</p>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  );
};

export default CardEvent;
