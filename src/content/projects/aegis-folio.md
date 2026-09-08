---
title: "AegisFolio - 特務級個人隱私防護作品集網站"
period: "2026.06 - 至今"
tags: ["Astro", "Vue 3", "TypeScript", "LINE Bot", "Google Apps Script"]
isPrivate: false
role: "Full Stack & System Architect"
summary: "整合 Astro Islands 架構與 LINE Bot 2FA 驗證機制的無伺服器個人作品集。"
description: "為了解決工程師在履歷與個人網站展示真實專案時常面臨的商業機密外洩風險，打造了具備動態脫敏與雙向驗證防禦機制的個人網站系統。"
demoUrl: "/"
githubUrl: "https://github.com/jerryexcc"
architecture:
  - "Astro 7 Islands 架構：首屏 0 JavaScript，秒開極致效能"
  - "Vue 3 互動組件：局部水合 (Partial Hydration) 降低客戶端負載"
  - "LINE Messaging API：實現雙向 2FA 動態通行證機制"
  - "Google Apps Script (GAS)：無伺服器後端處理驗證日誌與訪問權限"
---

### 🛡️ 專案背景與痛點
在軟體產業中，資深工程師的許多核心技術產出常涉及前雇主之商業機密（如底層硬體協議、專利演算法、內部系統架構）。在求職面試或公開展示作品時，往往面臨兩難：
1. **全公開展示**：有違背保密協議 (NDA) 之法律風險。
2. **全不展示**：無法向面試官具體證明自身在系統架構、效能調校等深層技術實力。

**AegisFolio** 的誕生便是為了解決此痛點——建立一個「自帶防禦系統」的作品集。

---

### ⚡ 核心技術架構

#### 1. 極速靜態生成與局部水合 (Islands Architecture)
* **Astro 7**：全站核心內容採用靜態生成 (SSG)，帶來接近 100 分的 Google PageSpeed Insights 評分與極致 SEO 表現。
* **Vue 3 整合**：僅在需要複雜狀態機（如藍牙 IoT 模擬器、LINE 驗證面板）的區塊注入客戶端腳本，確保最佳效能。

#### 2. 特務級動態脫敏機制
* 透過環境變數（`import.meta.env`）與動態權限狀態，在編譯期與渲染期分別實施敏感字串遮罩（Redaction）。
* 將真實硬體協議與公司專利代碼進行架構級抽象化，保留純技術思維與架構圖，確保 100% 合規。

#### 3. 雙向 2FA 動態通行證 (規劃中)
* 訪客可在頁面申請專屬驗證碼。
* 透過 LINE Bot 自動推播驗證通知至開發者手機，經開發者授權後，訪客端即可即時解鎖受保護的專案技術深水區。