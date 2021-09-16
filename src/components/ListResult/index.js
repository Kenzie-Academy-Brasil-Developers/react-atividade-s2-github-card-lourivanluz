import { CardItem } from "../CardItem";

export const ListResult = ({ resultList }) => {
  return (
    <ul>
      {resultList.map((item, index) => (
        <li key={index}>
          <CardItem info={item} />
        </li>
      ))}
    </ul>
  );
};
