import { useCallback } from "react";
import { CheckBoxList } from "./components/atoms/Checkbox";
import { Selectbox } from "./components/atoms/Selectbox";
import Button from "./components/atoms/Button";
import { useTabs } from "./hooks/useTabs";

export default function App() {
  // TAB  //////////////////////////////////////////////////////////////////////////////////////////

  // 呼ばれるコンポーネントの用意
  const Tab1 = useCallback(() => {
    return (
      <div>
        <h1>tab1</h1>
      </div>
    );
  }, []);

  const Tab2 = useCallback(() => {
    return (
      <div>
        <h1>tab2</h1>
      </div>
    );
  }, []);

  const Tab3 = useCallback(() => {
    return (
      <div>
        <h1>tab3</h1>
      </div>
    );
  }, []);

  const tabTitles = [
    { title: "test1", component: Tab1 },
    { title: "test2", component: Tab2 },
    { title: "test3", component: Tab3 }
  ];

  //表示させたいタブ、　初期表示のindex
  const { tabIndex, TabsComponent } = useTabs(tabTitles, 1);

  // /TAB  //////////////////////////////////////////////////////////////////////////////////////////

  // /Selectbox  //////////////////////////////////////////////////////////////////////////////////////////

  // セレクトボックス optionの準備
  const options = [
    { value: 1, label: "セレクト1" },
    { value: 2, label: "セレクト2" }
  ];

  // セレクトボックス 初期表示の準備
  const defaultValueSelectebox = { value: 2, label: "セレクト2" };

  // セレクトボックスの変更でvalueを取得
  const onChangeSelect = (e) => console.log(e.target.value);
  // /Selectbox  //////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <h1>Tabs</h1>
      {tabIndex}
      <TabsComponent />

      <h1>チェックボックス</h1>
      <CheckBoxList />

      <h1>セレクトボックス</h1>
      <Selectbox
        options={options}
        defaultValue={defaultValueSelectebox}
        onChange={onChangeSelect}
      />

      <h1>ボタン</h1>
      <Button
        className={""}
        id={"button1"}
        disabled={false}
        onClick={() => alert("Click")}
      >
        ボタン
      </Button>
    </div>
  );
}
