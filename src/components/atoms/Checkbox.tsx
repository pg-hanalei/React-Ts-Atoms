import React, { useState, useEffect, memo } from "react";

//checkboxのvalueリスト 本来ここはpropsで渡す
const checkLists = [
  "パン",
  "おにぎり",
  "焼き肉",
  "ラーメン",
  "たこ焼き",
  "アイスクリーム"
] as string[];
///////////////////////////////////////

//checkboxコンポーネント
interface CheckboxProps {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.VFC<CheckboxProps> = ({
  id,
  value,
  checked,
  onChange
}) => {
  return (
    <input
      id={id}
      type="checkbox"
      name="inputNames"
      checked={checked}
      onChange={onChange}
      value={value}
    />
  );
};

export const CheckBoxList = memo(() => {
  //checkedItemsは初期値を空のオブジェクトにする
  interface checkedItemsType {
    items: { id: string; checked: boolean };
  }
  const [checkedItems, setCheckedItems] = useState({} as checkedItemsType | {});

  //ひとつでもcheckedになっている場合にのみ送信ボタンを表示させたいので、全体のStateを監視する
  const [isBtnHide, setIsBtnHide] = useState(true);

  useEffect(() => {
    //checkedItemsが空では無い場合、送信ボタンを表示させる
    // Object.keys(checkedItems).length && setIsBtnHide(false);

    //すべてのcheckedItemの値がfalseの場合に送信ボタンを表示させる
    if (
      Object.values(checkedItems).every((checkedItem) => {
        return checkedItem === false;
      })
    ) {
      setIsBtnHide(true);
    }
  }, [checkedItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //checkedItemsのstateをセット
    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked
    });

    //コンソール確認用
    console.log("checkedItems:", {
      ...checkedItems,
      [e.target.id]: e.target.checked
    });
  };

  //送信ボタンイベント　　本来は親からのpropsで受け取る////////////////////////////////////////////////////////////
  const dataSendBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    //既定のイベントをキャンセルさせる
    e.preventDefault();

    //送信ボタンを押したタイミングで、checkedItemsオブジェクトのvalueがtrueのkeyのみを配列にしてconsoleに表示させる
    const dataPushArray = Object.entries(checkedItems).reduce(
      (pre, [key, value]) => {
        // value && pre.push(key);
        if (value) {
          pre.push(key);
        }
        return pre;
      },
      [] as string[]
    );
    console.log("dataPushArray:", dataPushArray);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <h2>好きな食べ物</h2>
      <form>
        {checkLists.map((item, index) => {
          index = index + 1;
          return (
            <label htmlFor={`id_${index}`} key={`key_${index}`}>
              <CheckBox
                id={`id_${index}`}
                value={item}
                onChange={handleChange}
                checked={checkedItems[item]}
              />
              {item}
            </label>
          );
        })}
        {/* checkedがない場合には送信ボタンを表示させない */}
        {!isBtnHide && (
          <button onClick={dataSendBtn}>アンケート送信ボタン</button>
        )}
      </form>
    </>
  );
});
