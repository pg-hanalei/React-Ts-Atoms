import { useState, useEffect, useCallback } from "react";
import { Tabs } from "../components/atoms/Tabs";

// タブのカスタムフックの返却の型
interface useTabsResult {
  tabIndex: number;
  renderTabsComponent: () => JSX.Element;
}

// カスタムフック作成
export const useTabs = (
  tabsTitle: Array<{ title: string }>,
  renderComponents: Array<() => JSX.Element>,
  defaultTabIndex: number
): useTabsResult => {
  //　　タブで選択中のindex
  const [tabIndex, setTabIndex] = useState<number>(defaultTabIndex);

  // タブで呼ばれたコンポーネントのstate
  const [selectTabsComponent, setSelectTabsComponent] = useState<JSX.Element>(
    renderComponents[0]
  );

  // タブの切替
  const onClickTabs = useCallback((index: number) => {
    setTabIndex(index);
  }, []);

  // タブのindexが変更されたらコンポーネントを呼び出す
  useEffect(() => {
    console.log(tabIndex);
    setSelectTabsComponent(renderComponents[tabIndex]);
  }, [tabIndex]);

  const renderTabsComponent = useCallback(
    () => (
      <Tabs
        tabs={tabsTitle}
        selectIndex={tabIndex}
        onChange={onClickTabs}
        selectTabsComponent={selectTabsComponent}
      />
    ),
    [tabIndex, selectTabsComponent, onClickTabs]
  );

  return { tabIndex, renderTabsComponent };
};
