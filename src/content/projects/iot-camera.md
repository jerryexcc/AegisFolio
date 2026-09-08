---
title: "手機 IoT 無線相機連線與控制系統"
period: "2024 - 2025"
tags: ["Android", "Kotlin", "BLE", "Wi-Fi Direct", "Coroutines", "State Machine"]
isPrivate: true
role: "Senior Android Tech Lead"
summary: "基於 Android 平台的硬體連線 App，實現高頻率拍照資料流與大檔案超低延遲穩定傳輸。"
description: "主導設計並實作 Android 裝置與智慧相機硬體之間的混合雙通道（BLE + Wi-Fi Direct）通訊系統，解決在複雜無線電干擾環境下的連線中斷與封包遺失問題。"
demoUrl: "/gdg"
architecture:
  - "Bluetooth Low Energy (BLE) 握手與低功耗心跳偵測"
  - "Wi-Fi Direct (P2P) 高頻寬資料傳輸通道與自動重連機制"
  - "Kotlin Flow / Coroutines 實現的非同步狀態機 (FSM)"
  - "自定義二進位協定解析與 CRC32 封包完整性校驗"
---

### 🚨 隱私安全聲明 (NDA Protection)
本專案涉及前公司商業機密與專利通訊協定。本頁面所呈現之內容均已進行**技術脫敏處理**：
* 移除了所有專有硬體型號與通訊協定細節。
* 核心通訊狀態邏輯以通用有限狀態機 (Finite State Machine) 概念呈現。
* 網頁端將提供純前端 JavaScript 模擬器，展示通訊握手與狀態遷移流程。

---

### 💡 核心技術挑戰與解決方案

#### 1. 混合雙通道傳輸架構 (Dual-Channel Strategy)
* **BLE 控制通道**：負責發送輕量級控制指令（如快門觸發、參數配置、裝置搜尋），保持超低功耗常駐。
* **Wi-Fi Direct 資料通道**：當硬體觸發連拍或需要預覽串流時，透過 BLE 動態喚醒 Wi-Fi Direct P2P Group，提供每秒 50MB+ 的高速傳輸頻寬，傳輸完畢後自動降載以節省相機與手機電量。

#### 2. 強健的有限狀態機 (Finite State Machine)
* 針對 Bluetooth Stack 在不同 Android 晶片廠商（高通、聯發科）上的非預期行為，設計了嚴密的狀態機防禦機制。
* 結合 Kotlin `StateFlow` 與 `SharedFlow`，實現了狀態單向流動（Unidirectional Data Flow），消除多執行緒並發造成的競態條件 (Race Condition)。

#### 3. 現場干擾與自動重連演算法
* 在展場與戶外等強 2.4GHz 頻段干擾環境下，實作指數退避 (Exponential Backoff) 重連與 MTU 動態協商，將連線成功率由 78% 提升至 99.2%。