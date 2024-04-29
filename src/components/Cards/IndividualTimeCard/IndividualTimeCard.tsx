import { IndividualTimeCardProps } from "./protocol";

const IndividualTimeCard: React.FC<IndividualTimeCardProps> = ({
  time,
  label,
  icon,
}) => {
  return (
    <div>
      <h3>{time}</h3>
      <h4>{label}</h4>
      {icon}
    </div>
  );
};

export default IndividualTimeCard;
