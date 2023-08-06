import { useState } from "react";
import axious from "axios";
import type { Users } from "../types/user";

const useFetchUsers = () => {
  // ユーザー情報取得
  const [userList, setUserList] = useState<Users[]>([]);

  // フラグ関連
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickGetUserButton = () => {
    // フラグ更新
    setIsLoading(true);
    setIsError(false);

    // API実行
    axious
      .get("https://example.com/users")
      .then((result) => {
        console.log(result);
        setUserList([
          {
            id: 1,
            name: "主田",
            age: 24,
            personalColor: "blue",
          },
        ]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      })
      .finally(() => {
        console.log("isError:" + isError);
        console.log("isLoading:" + isLoading);
      });
  };

  return { userList, isLoading, isError, onClickGetUserButton };
};

export default useFetchUsers;
