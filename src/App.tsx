import useFetchUsers from "./hooks/useFetchUsers";

const App = () => {
  // カスタムフック ユーザー情報取得
  const { userList, isLoading, isError, onClickGetUserButton } =
    useFetchUsers();

  return (
    <div>
      <button onClick={onClickGetUserButton}>ユーザー取得</button>
      {/* エラーメッセージ表示 */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {isLoading ? (
        <p>データ取得中…</p>
      ) : (
        userList.map((user) => (
          <div key={user.id}>
            {user.id}:{user.name}({user.age})
            <div>趣味:{user.hobbies?.join(",")}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
