import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// 1. 定義作品專案的資料結構 (Schema)
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),          // 專案名稱
    period: z.string(),         // 專案時間 (例如: 2024 - 2026)
    tags: z.array(z.string()),  // 技術標籤 (例如: ['Android', 'Kotlin', 'IoT'])
    isPrivate: z.boolean(),     // 是否涉及商業機密（true 就只顯示 Mock/示意版）
    summary: z.string(),        // 一句話簡介
  })
})

// 2. 匯出設定
export const collections = {
  'projects': projectsCollection,
}