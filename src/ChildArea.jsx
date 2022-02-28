const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// 再レンダリングされる条件
// Stateが更新されたコンポーネント
// Propsが更新されたコンポーネント
// 再レンダリングされたコンポーネント配下の子要素

export const ChildArea = (props) => {
  const { open } = props;
  console.log("レンダリングされた");

  const data = [...Array(2).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
