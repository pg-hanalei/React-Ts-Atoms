import React, { memo } from "react";

interface Tab {
  title: string;
}

interface Props {
  tabs?: Tab[];
  selectIndex?: number;
  onChange: (index: number) => void;
  selectTabsComponent: JSX.Element;
}

export const Tabs: React.VFC<Props> = memo((props) => {
  const { onChange, tabs = [], selectIndex = 0, selectTabsComponent } = props;

  return (
    <div className="filter">
      <div className="categoryList-wrap">
        <ul className="categoryList">
          {tabs.map((tab, index) => (
            <React.Fragment key={index}>
              <li className="categoryList-item">
                <button
                  onClick={() => onChange(index)}
                  className={selectIndex === index ? "active" : ""}
                >
                  {tab.title}
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
        {selectTabsComponent}
      </div>
    </div>
  );
});
