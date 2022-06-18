import Tabs from "./components/atoms/Tabs";
import { useEffect, useState } from "react";

export default function App() {
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

  const [tabIndex, setTabIndex] = useState(0);
  const [selectTabsComponent, setSelectTabsComponent] = useState(<Tab1 />);

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

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Tabs
        tabs={[{ title: "bbbbbbb" }, { title: "test" }]}
        selectIndex={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        {selectTabsComponent}
      </Tabs>
    </div>
  );
}
