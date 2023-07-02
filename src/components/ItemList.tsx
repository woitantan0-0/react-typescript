import type { Users } from "../types/user";
import type { FC } from "react";

const ItemList: FC<Users> = (props) => {
  const { id, name, age, personalColor } = props;

  const styleObject = {
    color: personalColor,
  };

  return (
    <p style={styleObject}>
      {id}:{name}({age})
    </p>
  );
};

export default ItemList;
