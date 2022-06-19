import React, { ReactChild, memo } from "react";

interface Tab {
  title: string;
}

interface Props {
  tabs?: Tab[];
  selectIndex?: number;
  onChange: (index: number) => void;
  children?: ReactChild | ReactChild[];
}

export const Tabs: React.VFC<Props> = memo((props) => {
  const { onChange, tabs = [], selectIndex = 0, children } = props;

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
        {children}
      </div>
    </div>
  );
});
