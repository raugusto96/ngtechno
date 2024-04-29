import { IndividualClassificationCardProps } from "./protocol";

const IndividualClassificationCard: React.FC<
  IndividualClassificationCardProps
> = ({ classification, category, isPersonalBest }) => {
  return (
    <div>
      {isPersonalBest && "MEDAL"}
      {classification}
      {category}
    </div>
  );
};

export default IndividualClassificationCard;
