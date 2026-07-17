### AegisFolio (神盾組合) 

**由來**： Aegis（宙斯的神盾，象徵極致的防護）+ Portfolio（作品集）。
**亮點**： 聽起來專業、大氣，直接告訴面試官：「我的履歷自帶防禦系統」。
**小知識**： 目前網站處於【公開模式】，敏感個資已被安全屏蔽。

**框架選擇過程**：
- 選用Astro的原因： 輕量、速度快、對SEO友好，且支援React、Vue等組件。
- 選用TailwindCSS的原因： 工具類CSS框架，開發效率高，客製化程度高。
- 選用GitHub Pages的原因： 免費、穩定、與GitHub整合度高，適合靜態網站部署。
- 雖然本人為Java Android程式設計起家，對用前端相關框架僅有初步涉獵並非正統學習，隨著Android技術的精進，除了Kotlin外，也漸漸開始會想涉略其他可在行動裝置上運行的技術，透過實作Google Apps Script的Line bot後開始對於Liff等相關應用著迷，小遊戲和生活上的『家庭待購清單』(Vue 3 - Vibe coding )，再決定要把作品集網站架設起來，與AI來回比較後決定使用Astro來作為作品集網站架設的框架。

```sh
npm create astro@latest -- --template basics
```


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
