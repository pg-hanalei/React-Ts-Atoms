import { Tabs } from "./components/atoms/Tabs";
import { useEffect, useState } from "react";
import { CheckBoxList } from "./components/atoms/Checkbox";
import { Selectbox } from "./components/atoms/Selectbox";
import Button from "./components/atoms/Button";
export default function App() {
  // TAB  //////////////////////////////////////////////////////////////////////////////////////////

  // 呼ばれるコンポーネントの用意
  const Tab1 = () => {
    return (
      <div>
        <h1>tab1</h1>
      </div>
    );
  };

  const Tab2 = () => {
    return (
      <div>
        <h1>tab2</h1>
      </div>
    );
  };

  //　　タブで選択中のindex
  const [tabIndex, setTabIndex] = useState(0);
  // タブで呼ばれたコンポーネントのstate
  const [selectTabsComponent, setSelectTabsComponent] = useState(<Tab1 />);

  // タブのindexが変更されたらコンポーネントを呼び出す
  useEffect(() => {
    console.log(tabIndex);
    switch (tabIndex) {
      case 0:
        setSelectTabsComponent(<Tab1 />);
        break;
      case 1:
        setSelectTabsComponent(<Tab2 />);
        break;
      default:
        setSelectTabsComponent(<Tab1 />);
        break;
    }
  }, [tabIndex]);
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
      <Tabs
        tabs={[{ title: "bbbbbbb" }, { title: "test" }]}
        selectIndex={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        {selectTabsComponent}
      </Tabs>

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
