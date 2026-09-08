import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// 1. 定義作品專案的資料結構 (Schema)
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),                      // 專案名稱
    period: z.string(),                     // 專案時間 (例如: 2024 - 2026)
    tags: z.array(z.string()),              // 技術標籤 (例如: ['Android', 'Kotlin', 'IoT'])
    isPrivate: z.boolean(),                 // 是否涉及商業機密（true 就進入脫敏/保護模式）
    summary: z.string(),                    // 一句話簡介
    role: z.string().optional(),            // 擔當角色 (例如: "Android Tech Lead", "Full Stack Developer")
    description: z.string().optional(),     // 深入技術摘要 (用於 SEO 與詳情頁引言)
    demoUrl: z.string().optional(),         // Live Demo 連結
    githubUrl: z.string().optional(),       // GitHub 原始碼連結
    architecture: z.array(z.string()).optional(), // 核心技術亮點列表
  })
})

// 2. 匯出設定
export const collections = {
  'projects': projectsCollection,
}