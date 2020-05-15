這是一款專門開發 utils 的開發環境，適合放類似 [Lodash](https://lodash.com/docs/4.17.15) 之類的 function

### 環境介紹

1. 開發環境：[Jest](https://jestjs.io/), [TypeScript](https://www.typescriptlang.org/)
2. 打包環境：[TSDX](https://github.com/jaredpalmer/tsdx)
3. Documentation：客製化 script 搭配 [VuePress](https://vuepress.vuejs.org/guide/)

### 開發流程

每次新增一個 utils 需要建立

- 1 個資料夾
- 3 個檔案

假設我今天要新增一個 `add` utils，則可以使用以下方式

`index.ts` 完整程式碼

```ts
function add(a: number, b: number) {
  return a + b;
}

// 這邊只能有一個 default export, 跟 Vue 一樣，不能有其他的 name export
export default add;
```

`.test.ts` 測試程式碼

```ts
import add from './';

describe('add', () => {
  it('adds two given number', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

必須要在 `src/` 資料夾底下的任何一個地方建立如以下的目錄結構

```bash
src
  math # <- 第一層類別一定要有
    addition # <- 視情況可以加上第二個類別 (最多 3 ~ 4 個類別)
      add # <- 跟 utils 名稱一樣的資料夾
        .test.ts # 這邊寫 Jest 測試你的 utils，就是上面的程式碼
        index.ts # <- utils，檔案內容就是上面的程式碼
        README.md # <- 可以加上描述 utils 的文件
```

這樣就完成了新增 utils 的過程

### NPM scripts

接下來介紹可以用的 `NPM scripts`

- `npm run start`

開啟 TSDX 編譯的 watch 模式，TSDX 會 print 出任何程式有錯誤的地方，如果這邊出錯，build 的時候也會出錯

- `npm run build`

TSDX 會編譯出 `dist/` 資料夾，包含打包好的 bundle js

- `npm run test`

會針對 `src/` 資料夾底下所有檔名有 `.test.ts` 做測試，也可以只針對某一個檔案做測試 `npm run test add`

- `npm run format`

會根據專案的 `.prettierrc` 來 format 整個 codebase

- `npm run release`

會先針對整個 codebase 跑過一次測試，然後會自動升 `package.json` 的版號並 commit 和加上對應的 `git tag`，然後會將 tag push 到遠端 `git push --follow-tags origin master`

執行這個 script 的時候，需要確保沒有任何檔案在 git stage

- `npm run docs:preview`

可以在 local 看 documentation 的 website

- `npm run docs:build`

會 build 出 documentation 的 website

### 備註

如果有一些 `inner function` 沒有要 `export` 成 `API`，可以寫在 `index.ts` 的旁邊，比如說

```bash
src
  math
    addition
      add
        .test.ts
        index.ts
        README.md
        otherFile.ts # <- 這邊可以自由加上任何檔案
        otherFile2.ts # <- 這邊可以自由加上任何檔案
```
