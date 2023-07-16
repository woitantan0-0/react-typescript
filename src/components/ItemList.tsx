import type { Users } from "../types/user";
import type { FC } from "react";

const ItemList: FC<Users> = (props) => {
  const { id, name, age, personalColor, hobbies } = props;

  const styleObject = {
    color: personalColor,
    padding: "10px",
  };

  return (
    <div style={styleObject}>
      <div>
        {id}:{name}({age})
      </div>
      <div>趣味:{hobbies?.join(",")}</div>
    </div>
  );
};

ItemList.defaultProps = {
  personalColor: "grey",
};

export default ItemList;
