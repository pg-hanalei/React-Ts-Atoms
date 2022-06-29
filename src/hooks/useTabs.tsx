import { useState, memo, useCallback } from "react";
import { Tabs } from "../components/atoms/Tabs";

// タブのカスタムフックの返却の型
interface useTabsResult {
  tabIndex: number;
  TabsComponent: React.MemoExoticComponent<() => JSX.Element>;
}

// カスタムフック作成
export const useTabs = (
  tabTitles: Array<{ title: string; component: () => JSX.Element }>,
  defaultTabIndex: number
): useTabsResult => {
  //　　タブで選択中のindex
  const [tabIndex, setTabIndex] = useState<number>(defaultTabIndex);

  // タブの切替
  const onClickTabs = useCallback(
    (index: number) => {
      setTabIndex(index);
    },
    [setTabIndex]
  );

  const TabsComponent = memo(() => (
    <Tabs
      tabs={tabTitles.map((title) => title)}
      defaultIndex={tabIndex}
      onChange={onClickTabs}
      selectedComponent={tabTitles[tabIndex].component}
    />
  ));

  return { tabIndex, TabsComponent };
};
