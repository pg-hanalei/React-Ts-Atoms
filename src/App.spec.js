import {
  render,
  screen,
  cleanup
  // getByPlaceholderText
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

//itごとにアンマウント 今は不要？
afterEach(() => cleanup());

describe("最初のテスト", () => {
  it("Appレンダリング確認", () => {
    //コンポーネントを読込
    render(<App />);
    console.log("レンダリングA");
    //DOM確認
    // screen.debug();
    //hタグを取得 //ロールについて　　https://github.com/A11yance/aria-query#elements-to-roles
    // screen.debug(screen.getAllByRole("heading"));

    //判定 hタグが存在するか？
    // 判定方法について　　https://jestjs.io/docs/en/expect
    expect(screen.getAllByRole("heading")[0]).toBeTruthy();

    //テスト結果について　下記をpackage.jsonに記載するとitの項目がわかる
    //"test": "react-scripts test --env=jsdom --verbose",

    //テスト駆動開発では先にテスト項目を作成して、失敗、それをクリアするように実際のコードを書いていく。

    //buttonが表示されているか
    expect(screen.getAllByRole("button")[0]).toBeTruthy();

    //テキストが表示されているか確認
    //screen.debug(screen.getAllByText("好きな食べ物"));
    expect(screen.getAllByText("好きな食べ物")).toBeTruthy();

    //存在しないことを確認するにはqueryByTextでnullを取得してtoBeNull（）で判定
    expect(screen.queryByText("嫌いな食べ物")).toBeNull();

    //idを使ったテスト方法 data-testIdに"test"が含まれたものが存在するか
    //<span data-testId="test">test</span>
    expect(screen.getByTestId("test")).toBeTruthy();

    //inputテキストが表示されているか
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  describe("ユーザーイベントのテスト", () => {
    it("ボタンの動作確認", () => {
      render(<App />);
      console.log("レンダリング０");
      // inputのテキストボックスの有無を確認
      expect(screen.getByPlaceholderText("入力してください")).toBeTruthy();
      // inputの要素を取得する
      const inputElement = screen.getByTestId("input01");
      // 指定のinputの要素に「testだよ」と入力したことにする
      userEvent.type(inputElement, "testだよ");
      // 指定のinputの要素に「testだよ」が入力されていることを確認する
      expect(inputElement.value).toBe("testだよ");
    });

    it("テキストが入力されずにボタンをクリック", () => {
      render(<App />);
      console.log("レンダリング");
      //関数のモック
      const outputConsole = jest.fn();
      // ボタンをクリックイベントが発生
      userEvent.click(screen.getByTestId("button01"));
      // 入力していないので呼び出されない
      expect(outputConsole).not.toHaveBeenCalled();
    });

    it("テキストが入力してボタンをクリック", () => {
      //関数のモック
      const outputConsole = jest.fn();
      // 画面をレンダリング
      render(<App />);
      console.log("レンダリング２");

      // inputの要素を取得する
      const inputElement = screen.getByTestId("input01");

      userEvent.type(inputElement, "test2");
      console.log(inputElement);
      // ボタンをクリックイベントが発生
      // userEvent.click(screen.getByTestId("button01"));
      // outputConsoleがよびだされr
      // expect(outputConsole).toHaveBeenCalled();
    });
  });

  // it("足し算", () => {
  //   expect(1 + 2).toEqual(3);
  // });
});
