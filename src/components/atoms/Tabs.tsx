import React, { memo } from "react";

interface Tab {
  title: string;
}

interface Props {
  tabs?: Tab[];
  defaultIndex?: number;
  onChange: (index: number) => void;
  selectTabsComponent: () => JSX.Element;
}

export const Tabs: React.VFC<Props> = memo((props) => {
  const { onChange, tabs = [], defaultIndex = 0, selectTabsComponent } = props;

  return (
    <div className="">
      <div className="categoryList-wrap">
        <ul className="categoryList">
          {tabs.map((tab, index) => (
            <React.Fragment key={index}>
              <li className="categoryList-item">
                <button
                  onClick={() => onChange(index)}
                  className={defaultIndex === index ? "active" : ""}
                >
                  {tab.title}
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
      {selectTabsComponent()}
    </div>
  );
});
