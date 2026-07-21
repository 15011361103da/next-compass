import {
  LayoutDashboard,
  Server,
  Target,
  FolderPlus,
  MapPin,
  Layout,
  Globe,
  FolderTree,
  Rocket,
  SquareCode,
  Split,
  Shield,
  Braces,
  Database,
  ShieldCheck,
} from "lucide-react";

export interface Topic {
  id: number;
  title: string;
  icon: keyof typeof iconMap;
  content: string;
}

export const iconMap = {
  LayoutDashboard,
  Server,
  Target,
  FolderPlus,
  MapPin,
  Layout,
  Globe,
  FolderTree,
  Rocket,
  SquareCode,
  Split,
  Shield,
  Braces,
  Database,
  ShieldCheck,
};

export const topics: Topic[] = [
  {
    id: 0,
    title: "📖 大纲总览",
    icon: "LayoutDashboard",
    content: `
      <h2 class="text-2xl font-bold mb-4">Next.js 核心大纲</h2>
      <p class="text-slate-600 mb-4">本培训将带你系统掌握 Next.js 的核心概念与最佳实践。</p>

      <div class="mb-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">🚀 什么是 Next.js？</h3>
        <p class="text-slate-600 mb-3">Next.js 是由 Vercel 团队开发的<strong>全栈 Web 开发框架</strong>，基于 React 构建。它将 React 的组件化开发模式扩展到了服务端，提供了开箱即用的生产级能力。</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">⚛️</span>
            <span class="text-slate-600"><strong>基于 React</strong> — 支持 Server Component、Client Component，天然集成 React 生态</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">🔄</span>
            <span class="text-slate-600"><strong>全栈开发</strong> — 前后端一体化，可在同一项目中编写页面和 API 接口</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">⚡</span>
            <span class="text-slate-600"><strong>混合渲染</strong> — 支持 SSR / SSG / ISR / CSR，按页面粒度灵活选择渲染策略</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">📁</span>
            <span class="text-slate-600"><strong>文件路由</strong> — 基于文件系统的约定式路由，文件夹即路由，直观易维护</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">🎯</span>
            <span class="text-slate-600"><strong>TypeScript 优先</strong> — 内置 TypeScript 支持，提供完整的类型定义</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">🚀</span>
            <span class="text-slate-600"><strong>零配置部署</strong> — 与 Vercel 深度集成，推送代码即可自动部署上线</span>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold text-slate-800 mb-3">📚 培训章节（共 7 章，15 个模块）</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors">
          <h3 class="font-semibold text-slate-800">第一章：基础概念</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• 混合渲染（SSR / SSG / ISR / CSR）</li>
            <li>• Next.js 的应用场景</li>
          </ul>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors">
          <h3 class="font-semibold text-slate-800">第二章：快速上手</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• 创建项目</li>
            <li>• 路由 (Routing)</li>
          </ul>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors">
          <h3 class="font-semibold text-slate-800">第三章：核心特性</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• 布局 (Layout) 与模板 (Template)</li>
            <li>• 页面元数据 (Metadata)</li>
            <li>• 路由分组 (Route Groups)</li>
          </ul>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors">
          <h3 class="font-semibold text-slate-800">第四章：高级路由</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• 动态路由 (Dynamic Routes)</li>
            <li>• 平行路由 (Parallel Routes)</li>
            <li>• 拦截路由 (Intercepting Routes)</li>
          </ul>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors">
          <h3 class="font-semibold text-slate-800">第五章：API 与数据库</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• API 接口开发（Route Handler）</li>
            <li>• 连接数据库（Prisma / Drizzle / MongoDB）</li>
          </ul>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors">
          <h3 class="font-semibold text-slate-800">第六章：请求控制</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• 中间件（Middleware）— 认证、限流、国际化</li>
          </ul>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors md:col-span-2">
          <h3 class="font-semibold text-slate-800">第七章：部署</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• Vercel 自动部署 — 零配置、自动 HTTPS、预览环境</li>
          </ul>
        </div>
      </div>
      <p class="mt-6 text-slate-500 text-sm">💡 点击左侧菜单开始学习，每个模块都包含理论说明和代码示例。</p>
    `,
  },
  {
    id: 1,
    title: "混合渲染",
    icon: "Server",
    content: `
      <h2 class="text-2xl font-bold mb-4">Next.js 混合渲染</h2>
      <p class="text-slate-600 mb-4">Next.js 的<strong>混合渲染（Hybrid Rendering）</strong>是其核心竞争力之一。同一应用中可以根据不同页面的需求，灵活选择 SSR、SSG、ISR 或 CSR 四种渲染策略，实现性能与灵活性的最佳平衡。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">CSR vs SSR vs SSG vs ISR 对比</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">特性</th>
              <th class="border border-slate-200 px-4 py-2 text-left">CSR (客户端渲染)</th>
              <th class="border border-slate-200 px-4 py-2 text-left">SSR (服务端渲染)</th>
              <th class="border border-slate-200 px-4 py-2 text-left">SSG (静态生成)</th>
              <th class="border border-slate-200 px-4 py-2 text-left">ISR (增量再生成)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">渲染时机</td>
              <td class="border border-slate-200 px-4 py-2">客户端运行时</td>
              <td class="border border-slate-200 px-4 py-2">每次请求时</td>
              <td class="border border-slate-200 px-4 py-2">构建时</td>
              <td class="border border-slate-200 px-4 py-2">构建时 + 按需后台更新</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">首屏性能</td>
              <td class="border border-slate-200 px-4 py-2">慢</td>
              <td class="border border-slate-200 px-4 py-2">快</td>
              <td class="border border-slate-200 px-4 py-2">最快</td>
              <td class="border border-slate-200 px-4 py-2">快（首次后等同 SSG）</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">SEO 友好</td>
              <td class="border border-slate-200 px-4 py-2">差</td>
              <td class="border border-slate-200 px-4 py-2">好</td>
              <td class="border border-slate-200 px-4 py-2">最好</td>
              <td class="border border-slate-200 px-4 py-2">好</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">数据实时性</td>
              <td class="border border-slate-200 px-4 py-2">实时</td>
              <td class="border border-slate-200 px-4 py-2">每次请求最新</td>
              <td class="border border-slate-200 px-4 py-2">构建时固定</td>
              <td class="border border-slate-200 px-4 py-2">可配置 revalidate 间隔</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">服务器压力</td>
              <td class="border border-slate-200 px-4 py-2">无</td>
              <td class="border border-slate-200 px-4 py-2">大</td>
              <td class="border border-slate-200 px-4 py-2">无</td>
              <td class="border border-slate-200 px-4 py-2">低（仅在过期时重新生成）</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">适用场景</td>
              <td class="border border-slate-200 px-4 py-2">后台管理系统、需要强交互的 SPA</td>
              <td class="border border-slate-200 px-4 py-2">实时数据页面、个性化内容</td>
              <td class="border border-slate-200 px-4 py-2">博客、文档、营销落地页</td>
              <td class="border border-slate-200 px-4 py-2">电商商品页、内容需定期更新的站点</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">四种渲染模式详解</h3>
      <div class="space-y-4">
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-2">🖥️ SSR — 服务端渲染</h4>
          <p class="text-slate-600 text-sm mb-2">每次用户请求时，服务器动态生成完整 HTML 返回给客户端。适用于需要实时数据或个性化内容的页面。</p>
          <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>// 设置 cache: 'no-store' 或 dynamic = 'force-dynamic' 即为 SSR
const res = await fetch('https://api.example.com/data', {
  cache: 'no-store',
});</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-2">📄 SSG — 静态生成</h4>
          <p class="text-slate-600 text-sm mb-2">在构建时预渲染所有页面为静态 HTML，访问时直接返回。性能最优，适合内容很少变化的页面。</p>
          <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>// 默认行为就是静态生成，或显式声明
export const dynamic = 'force-static';
// 配合 generateStaticParams 预生成动态路由页面</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-2">🔄 ISR — 增量静态再生成</h4>
          <p class="text-slate-600 text-sm mb-2">在 SSG 基础上，设置过期时间后首次请求触发后台重新生成新页面。兼顾 SSG 的性能和动态数据更新。</p>
          <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>// revalidate: 60 表示 60 秒后首次请求会触发重新生成
const res = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 },
});</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-2">💻 CSR — 客户端渲染</h4>
          <p class="text-slate-600 text-sm mb-2">页面在客户端通过 JavaScript 动态渲染。Next.js 中使用 'use client' 指令将组件标记为客户端组件。</p>
          <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>'use client';
// 此组件在客户端渲染，可使用 useState、useEffect 等
import { useState, useEffect } from 'react';</code></pre>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">💻 客户端渲染（CSR）流程图</h3>
      <p class="text-slate-600 mb-4">传统 SPA 的客户端渲染流程，从用户访问到页面可交互，需要经历多个串行步骤：</p>
      <div class="overflow-x-auto mb-6">
        <div class="flex items-start gap-0 min-w-[720px]">
          <div class="flex flex-col items-center">
            <div class="w-32 h-20 bg-red-50 border-2 border-red-200 rounded-lg flex flex-col items-center justify-center p-2 text-center">
              <span class="text-lg">🌐</span>
              <span class="text-xs font-semibold text-red-700">浏览器请求</span>
            </div>
            <span class="text-[10px] text-red-400 mt-1">请求 HTML</span>
            <span class="text-slate-300 text-lg">↓</span>
          </div>
          <div class="flex items-center pt-8 mx-1">
            <span class="text-slate-300 text-lg">→</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-32 h-20 bg-orange-50 border-2 border-orange-200 rounded-lg flex flex-col items-center justify-center p-2 text-center">
              <span class="text-lg">📄</span>
              <span class="text-xs font-semibold text-orange-700">空壳 HTML</span>
            </div>
            <span class="text-[10px] text-orange-400 mt-1">仅含 &lt;div id="root"&gt;</span>
            <span class="text-slate-300 text-lg">↓</span>
          </div>
          <div class="flex items-center pt-8 mx-1">
            <span class="text-slate-300 text-lg">→</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-32 h-20 bg-amber-50 border-2 border-amber-200 rounded-lg flex flex-col items-center justify-center p-2 text-center">
              <span class="text-lg">📦</span>
              <span class="text-xs font-semibold text-amber-700">下载 JS</span>
            </div>
            <span class="text-[10px] text-amber-400 mt-1">bundle 加载</span>
            <span class="text-slate-300 text-lg">↓</span>
          </div>
          <div class="flex items-center pt-8 mx-1">
            <span class="text-slate-300 text-lg">→</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-32 h-20 bg-yellow-50 border-2 border-yellow-200 rounded-lg flex flex-col items-center justify-center p-2 text-center">
              <span class="text-lg">⚙️</span>
              <span class="text-xs font-semibold text-yellow-700">执行 React</span>
            </div>
            <span class="text-[10px] text-yellow-400 mt-1">构建虚拟 DOM</span>
            <span class="text-slate-300 text-lg">↓</span>
          </div>
          <div class="flex items-center pt-8 mx-1">
            <span class="text-slate-300 text-lg">→</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-32 h-20 bg-blue-50 border-2 border-blue-200 rounded-lg flex flex-col items-center justify-center p-2 text-center">
              <span class="text-lg">🔌</span>
              <span class="text-xs font-semibold text-blue-700">请求 API</span>
            </div>
            <span class="text-[10px] text-blue-400 mt-1">获取数据</span>
            <span class="text-slate-300 text-lg">↓</span>
          </div>
          <div class="flex items-center pt-8 mx-1">
            <span class="text-slate-300 text-lg">→</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-32 h-20 bg-green-50 border-2 border-green-200 rounded-lg flex flex-col items-center justify-center p-2 text-center">
              <span class="text-lg">✅</span>
              <span class="text-xs font-semibold text-green-700">页面就绪</span>
            </div>
            <span class="text-[10px] text-green-400 mt-1">渲染完成</span>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">⚠️ 客户端渲染的弊端</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">🐢 白屏时间长</h4>
          <p class="text-sm text-red-600">用户需等待 JS 下载、解析、执行完毕才能看到任何内容。网络慢或设备性能不足时，白屏可达数秒。</p>
        </div>
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">🔍 SEO 不友好</h4>
          <p class="text-sm text-red-600">搜索引擎爬虫抓取到的 HTML 几乎是空的，无法索引页面内容。虽然 Google 声称能执行 JS，但效果不稳定。</p>
        </div>
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">📉 首屏性能差</h4>
          <p class="text-sm text-red-600">FCP（首次内容绘制）和 LCP（最大内容绘制）远慢于 SSR/SSG，直接影响用户体验和 Core Web Vitals 评分。</p>
        </div>
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">🔄 请求瀑布流</h4>
          <p class="text-sm text-red-600">页面渲染后才能发 API 请求获取数据，形成 JS 下载 → 渲染 → 请求数据 → 再渲染的串行瀑布流，耗时成倍增加。</p>
        </div>
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">📱 低端设备体验差</h4>
          <p class="text-sm text-red-600">所有渲染计算都在客户端执行，低端手机或老旧设备上页面交互响应缓慢，甚至卡顿。</p>
        </div>
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">🔗 社交分享失效</h4>
          <p class="text-sm text-red-600">分享到微信、Twitter 等平台时，抓取不到标题、描述和封面图（Open Graph），显示为空白链接。</p>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">Next.js 中的 SSR 核心机制</h3>
      <p class="text-slate-600 mb-3">Next.js 通过以下方式实现高效的服务端渲染：</p>
      <ul class="list-disc pl-6 text-slate-600 mb-4 space-y-1">
        <li><strong>Server Components 默认行为</strong>：App Router 中所有组件默认为服务端组件，直接在服务端执行</li>
        <li><strong>Streaming（流式渲染）</strong>：使用 React Suspense 将页面分块流式传输，不等所有数据加载完毕</li>
        <li><strong>React Hydration</strong>：服务端 HTML 到达浏览器后，React 在客户端激活（hydration），赋予交互能力</li>
        <li><strong>按页选择策略</strong>：通过 fetch 的 cache 选项或 route segment config，每个页面可独立选择渲染模式</li>
      </ul>

      <div class="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <h4 class="font-semibold text-amber-800 mb-2">💡 如何选择渲染策略？</h4>
        <ul class="text-sm text-amber-700 space-y-1">
          <li>⚡ 追求极致性能、内容固定 → <strong>SSG</strong></li>
          <li>🔄 内容需要更新但非实时 → <strong>ISR</strong></li>
          <li>🎯 需要实时数据或个性化 → <strong>SSR</strong></li>
          <li>🖱️ 强交互、不需要 SEO → <strong>CSR</strong></li>
        </ul>
      </div>
    `,
  },
  {
    id: 2,
    title: "Next.js的应用场景",
    icon: "Target",
    content: `
      <h2 class="text-2xl font-bold mb-4">Next.js 的应用场景</h2>
      <p class="text-slate-600 mb-4">Next.js 作为全栈框架，凭借混合渲染能力几乎覆盖所有 Web 应用场景。结合之前的四种渲染策略（SSR/SSG/ISR/CSR），下面来看 Next.js 在不同场景中的最佳实践。</p>

      <div class="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p class="text-sm text-blue-700"><strong>核心理念：</strong>Next.js 不强求统一渲染方式，而是让你<strong>按页面粒度灵活选择</strong>。同一项目中，首页用 SSG、商品详情用 SSR/ISR、后台管理用 CSR，各取所长。</p>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">🛒 电商平台</h3>
      <p class="text-slate-600 mb-3">电商是最能体现混合渲染价值的场景，不同页面对性能和实时性的要求完全不同：</p>
      <div class="overflow-x-auto mb-4">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">页面类型</th>
              <th class="border border-slate-200 px-4 py-2 text-left">推荐策略</th>
              <th class="border border-slate-200 px-4 py-2 text-left">原因</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">首页 / 类目页</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">ISR</span></td>
              <td class="border border-slate-200 px-4 py-2">商品列表定期更新，设置 5-10 分钟 revalidate</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">商品详情页</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-mono">SSR</span> + <span class="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-mono">ISR</span></td>
              <td class="border border-slate-200 px-4 py-2">SEO 要求高，价格/库存需实时；热点商品可用 ISR 减轻压力</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">购物车 / 结算</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-mono">CSR</span></td>
              <td class="border border-slate-200 px-4 py-2">高度交互，无需 SEO，用户已登录状态</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">后台管理</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-mono">CSR</span></td>
              <td class="border border-slate-200 px-4 py-2">纯管理后台，对 SEO 无要求</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-6"><code>// 商品详情页 - SSR 示例
// app/products/[id]/page.tsx
async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetch(
    \`https://api.example.com/products/\${params.id}\`,
    { cache: 'no-store' }  // SSR：每次都获取最新数据
  ).then(res => res.json());

  return (
    &lt;div className="product-detail"&gt;
      &lt;h1&gt;{product.name}&lt;/h1&gt;
      &lt;p className="price"&gt;¥{product.price}&lt;/p&gt;
      &lt;p&gt;库存: {product.stock}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">📝 内容型网站</h3>
      <p class="text-slate-600 mb-3">博客、文档站、新闻资讯等内容驱动型网站，核心需求是 SEO + 快速加载：</p>
      <ul class="list-disc pl-6 text-slate-600 mb-4 space-y-1">
        <li><strong>博客 / 文档站</strong> → <span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-mono">SSG</span> 文章内容变化少，构建时预渲染，访问速度最快</li>
        <li><strong>新闻资讯站</strong> → <span class="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-xs font-mono">ISR</span> 内容定时更新，revalidate 设置 5-30 分钟</li>
        <li><strong>聚合/推荐页</strong> → <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">SSR</span> + <span class="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-xs font-mono">ISR</span> 个性化推荐用 SSR，公共内容用 ISR</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">📣 营销活动页面</h3>
      <p class="text-slate-600 mb-3">落地页（Landing Page）、活动专题页等，关键在于社交分享和加载速度：</p>
      <ul class="list-disc pl-6 text-slate-600 mb-4 space-y-1">
        <li><strong>静态活动页</strong> → <span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-mono">SSG</span>，构建时生成，最大性能</li>
        <li><strong>含倒计时/库存的活动页</strong> → <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">SSR</span>，每次请求保证数据实时</li>
        <li>通过 <code class="bg-slate-100 px-1 rounded">generateMetadata</code> 动态生成 Open Graph 标签，社交分享完美展示</li>
      </ul>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-6"><code>// app/campaign/[slug]/page.tsx
import { Metadata } from 'next';

// 动态生成 SEO 元数据
export async function generateMetadata({ params }): Promise&lt;Metadata&gt; {
  const campaign = await fetchCampaignData(params.slug);
  return {
    title: campaign.title,
    description: campaign.description,
    openGraph: {
      images: [campaign.coverImage],
    },
  };
}

export default async function CampaignPage({ params }) {
  const data = await fetchCampaignData(params.slug);
  return &lt;CampaignUI data={data} /&gt;;
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">🖥️ SaaS / 后台管理系统</h3>
      <p class="text-slate-600 mb-3">后台管理系统通常对 SEO 无要求，但需要丰富的交互和实时数据：</p>
      <ul class="list-disc pl-6 text-slate-600 mb-4 space-y-1">
        <li><strong>仪表盘</strong> → <span class="bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded text-xs font-mono">CSR</span> + 部分 <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">SSR</span>，布局用服务端组件，交互面板用客户端组件</li>
        <li><strong>数据大屏</strong> → 使用 'use client' + WebSocket/轮询实现实时刷新</li>
        <li><strong>表单/配置页</strong> → <span class="bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded text-xs font-mono">CSR</span>，大量交互逻辑放在客户端</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">🏢 企业官网</h3>
      <p class="text-slate-600 mb-3">企业官网是 Next.js 的<strong>最佳使用场景之一</strong>。官网的核心需求——SEO、加载速度、社交分享、多语言——恰恰是 Next.js 混合渲染的强项。</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">🔍 SEO 天然优势</h4>
          <p class="text-sm text-green-700">使用 SSG/SSR 预渲染完整 HTML，搜索引擎可直接抓取所有页面内容，完美支持百度、Google 收录。</p>
        </div>
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">⚡ 极速加载</h4>
          <p class="text-sm text-green-700">静态生成的 HTML 通过 CDN 分发，首屏加载速度极快，Core Web Vitals 评分优秀。</p>
        </div>
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">📱 社交分享完美</h4>
          <p class="text-sm text-green-700">通过 generateMetadata 为每个页面动态生成 Open Graph 标签，分享到微信/Twitter 等平台展示完美。</p>
        </div>
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">🌍 国际化支持</h4>
          <p class="text-sm text-green-700">内置 i18n 路由，轻松实现多语言官网，SEO 友好的多语言 URL 结构。</p>
        </div>
      </div>
      <p class="text-slate-600 mb-3">企业官网的不同页面应采用不同的渲染策略：</p>
      <div class="overflow-x-auto mb-4">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">页面类型</th>
              <th class="border border-slate-200 px-4 py-2 text-left">推荐策略</th>
              <th class="border border-slate-200 px-4 py-2 text-left">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">首页 / 产品页</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">SSG</span></td>
              <td class="border border-slate-200 px-4 py-2">内容相对固定，构建时预渲染，CDN 分发极速加载</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">新闻 / 动态</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-mono">ISR</span></td>
              <td class="border border-slate-200 px-4 py-2">定时更新内容，revalidate 设置 5-30 分钟</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">联系我们 / 表单</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">SSG</span> + <span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-mono">CSR</span></td>
              <td class="border border-slate-200 px-4 py-2">页面用 SSG，表单交互部分用客户端组件</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">案例展示</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">SSG</span> / <span class="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-mono">ISR</span></td>
              <td class="border border-slate-200 px-4 py-2">案例不多用 SSG，定期新增案例用 ISR</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// app/(www)/page.tsx — 企业官网首页 SSG 示例
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'XX科技 — 领先的数字化解决方案提供商',
  description: 'XX科技为全球500+企业提供数字化转型服务...',
  openGraph: {
    title: 'XX科技 — 领先的数字化解决方案提供商',
    description: '为全球500+企业提供数字化转型服务',
    images: ['https://www.example.com/og-home.jpg'],
  },
};

export default async function HomePage() {
  // SSG 模式：构建时获取数据，生成静态 HTML
  const { cases, news } = await fetchHomeData();

  return (
    &lt;&gt;
      {/* Hero 区域 */}
      &lt;section className="hero"&gt;
        &lt;h1&gt;数字驱动未来&lt;/h1&gt;
        &lt;p&gt;让技术赋能每一个商业场景&lt;/p&gt;
        &lt;Link href="/contact"&gt;立即咨询&lt;/Link&gt;
      &lt;/section&gt;

      {/* 案例展示 */}
      &lt;section className="cases"&gt;
        {cases.map(item =&gt; (
          &lt;article key={item.id}&gt;{item.title}&lt;/article&gt;
        ))}
      &lt;/section&gt;

      {/* 新闻动态（ISR 定期更新）*/}
      &lt;section className="news"&gt;
        {news.map(item =&gt; (
          &lt;article key={item.id}&gt;{item.title}&lt;/article&gt;
        ))}
      &lt;/section&gt;
    &lt;/&gt;
  );
}</code></pre>
      <div class="p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
        <h4 class="font-semibold text-green-800 mb-2">💡 官网用 Next.js 的核心优势</h4>
        <ul class="list-disc pl-6 text-sm text-green-700 space-y-1">
          <li><strong>SSG 生成静态文件</strong>：可部署到 CDN，访问速度极快，服务器成本低</li>
          <li><strong>服务端组件零 JS</strong>：官网大多纯展示内容，服务端渲染后客户端几乎不需要加载 JS</li>
          <li><strong>next/image 自动优化</strong>：官网上大量图片自动懒加载、格式转换（WebP/AVIF），性能大幅提升</li>
          <li><strong>Preview Mode</strong>：编辑人员在 CMS 更新内容后，可预览未发布的页面</li>
          <li><strong>配合 Headless CMS</strong>（如 Strapi / Contentful）：市场人员在 CMS 中编辑内容，触发 Webhook 重新构建/ISR 更新</li>
        </ul>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">📊 场景与策略速查表</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">应用场景</th>
              <th class="border border-slate-200 px-4 py-2 text-left">推荐策略</th>
              <th class="border border-slate-200 px-4 py-2 text-left">关键原因</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2">企业官网</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">SSG</span> + <span class="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-mono">ISR</span></td>
              <td class="border border-slate-200 px-4 py-2">SEO + 速度 + 社交分享，Next.js 最佳场景</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2">技术文档站</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">SSG</span> / <span class="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-mono">ISR</span></td>
              <td class="border border-slate-200 px-4 py-2">版本化文档用 SSG；频繁更新的用 ISR</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2">在线商城</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-mono">SSR</span> + <span class="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-mono">ISR</span> + <span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-mono">CSR</span></td>
              <td class="border border-slate-200 px-4 py-2">混合策略各取所长</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2">社交媒体 Feed</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-mono">SSR</span></td>
              <td class="border border-slate-200 px-4 py-2">个性化内容 + SEO 需求</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2">实时数据看板</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-mono">CSR</span></td>
              <td class="border border-slate-200 px-4 py-2">实时刷新，无需 SEO</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2">内网管理系统</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-mono">CSR</span></td>
              <td class="border border-slate-200 px-4 py-2">登录后访问，SEO 无意义</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2">营销落地页</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">SSG</span> / <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-mono">SSR</span></td>
              <td class="border border-slate-200 px-4 py-2">需要社交分享 OG 标签</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2">全栈 SaaS 产品</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-mono">SSR</span> + <span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-mono">CSR</span></td>
              <td class="border border-slate-200 px-4 py-2">营销页 SSR，App 内页 CSR</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  {
    id: 3,
    title: "创建项目",
    icon: "FolderPlus",
    content: `
      <h2 class="text-2xl font-bold mb-4">创建项目</h2>
      <p class="text-slate-600 mb-6">使用 create-next-app 脚手架快速初始化一个 Next.js 项目。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">create-next-app 命令</h3>
      <p class="text-slate-600 mb-3">在终端执行以下命令来创建新项目：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code># 使用 npx 创建（推荐，无需全局安装）
npx create-next-app@latest my-app

# 或者使用 pnpm
pnpm create next-app my-app

# 或者使用 yarn
yarn create next-app my-app</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">pnpm vs npm 区别</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">特性</th>
              <th class="border border-slate-200 px-4 py-2 text-left">npm</th>
              <th class="border border-slate-200 px-4 py-2 text-left">pnpm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">安装速度</td>
              <td class="border border-slate-200 px-4 py-2">较慢</td>
              <td class="border border-slate-200 px-4 py-2">快（2-3倍）</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">磁盘占用</td>
              <td class="border border-slate-200 px-4 py-2">每个项目独立复制</td>
              <td class="border border-slate-200 px-4 py-2">硬链接共享，节省空间</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">严格性</td>
              <td class="border border-slate-200 px-4 py-2">宽松（幽灵依赖）</td>
              <td class="border border-slate-200 px-4 py-2">严格（非扁平 node_modules）</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">生态兼容</td>
              <td class="border border-slate-200 px-4 py-2">最好</td>
              <td class="border border-slate-200 px-4 py-2">良好（少数包有问题）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">项目文件结构</h3>
      <p class="text-slate-600 mb-3">创建后的项目结构如下：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>my-next-app/
├── app/                    # App Router 目录
│   ├── layout.tsx          # 根布局（必选）
│   ├── page.tsx            # 首页页面
│   ├── globals.css         # 全局样式
│   └── favicon.ico         # 网站图标
├── public/                 # 静态资源
├── next.config.ts          # Next.js 配置
├── tsconfig.json           # TypeScript 配置
├── tailwind.config.ts      # Tailwind CSS 配置
├── postcss.config.mjs      # PostCSS 配置
├── eslint.config.mjs       # ESLint 配置
└── package.json            # 项目依赖</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">关键文件说明</h3>
      <ul class="list-disc pl-6 text-slate-600 space-y-2">
        <li><code class="bg-slate-100 px-1 rounded">app/layout.tsx</code> - 定义页面的根布局，所有页面共享</li>
        <li><code class="bg-slate-100 px-1 rounded">app/page.tsx</code> - 首页的 UI 组件，访问 / 时渲染</li>
        <li><code class="bg-slate-100 px-1 rounded">next.config.ts</code> - Next.js 的配置文件，如重写、重定向等</li>
        <li><code class="bg-slate-100 px-1 rounded">tsconfig.json</code> - TypeScript 编译选项，包含路径别名 @/</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "路由 (Routing)",
    icon: "MapPin",
    content: `
      <h2 class="text-2xl font-bold mb-4">路由 (Routing)</h2>
      <p class="text-slate-600 mb-6">Next.js App Router 采用基于文件系统的路由，文件夹结构直接映射为 URL 路径。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">文件系统路由 vs React Router 编程式路由</h3>
      <p class="text-slate-600 mb-4">传统 React 项目使用 <strong>React Router</strong> 通过代码配置路由，而 Next.js 采用<strong>约定式文件系统路由</strong>，两者在理念和开发体验上有本质区别。</p>

      <h4 class="font-semibold mb-3">🔧 路由定义方式对比</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p class="text-xs text-slate-400 mb-2 font-medium">React Router（编程式配置）</p>
          <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import BlogList from '@/pages/BlogList';
import BlogPost from '@/pages/BlogPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: &lt;RootLayout /&gt;,
    children: [
      { index: true, element: &lt;HomePage /&gt; },
      { path: 'about', element: &lt;AboutPage /&gt; },
      { path: 'blog', element: &lt;BlogList /&gt; },
      { path: 'blog/:slug', element: &lt;BlogPost /&gt; },
    ],
  },
]);</code></pre>
        </div>
        <div>
          <p class="text-xs text-slate-400 mb-2 font-medium">Next.js（文件系统约定）</p>
          <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>app/
├── layout.tsx          # 根布局
├── page.tsx            # → /
├── about/
│   └── page.tsx        # → /about
└── blog/
    ├── page.tsx        # → /blog
    └── [slug]/
        └── page.tsx    # → /blog/:slug

// 无需手动编写路由配置！
// 创建文件夹 = 定义路由</code></pre>
        </div>
      </div>

      <h4 class="font-semibold mb-3">📊 核心区别对比</h4>
      <div class="overflow-x-auto mb-4">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">对比维度</th>
              <th class="border border-slate-200 px-4 py-2 text-left">React Router</th>
              <th class="border border-slate-200 px-4 py-2 text-left">Next.js 文件系统路由</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">路由定义方式</td>
              <td class="border border-slate-200 px-4 py-2">代码中配置路由表（JSX 对象/组件）</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">约定优于配置</span>，文件夹即路由</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">动态路由</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded text-xs">:param</code> 语法在配置中声明</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded text-xs">[param]</code> 文件夹命名约定</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">嵌套布局</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded text-xs">&lt;Outlet /&gt;</code> 组件手动指定位置</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded text-xs">layout.tsx</code> 自动嵌套，天然支持</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">代码分割</td>
              <td class="border border-slate-200 px-4 py-2">需手动 <code class="bg-slate-100 px-1 rounded text-xs">React.lazy()</code> + <code class="bg-slate-100 px-1 rounded text-xs">Suspense</code></td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">自动按路由拆分</span>，每个 page 独立 chunk</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">404 处理</td>
              <td class="border border-slate-200 px-4 py-2">配置 <code class="bg-slate-100 px-1 rounded text-xs">path: '*'</code> 通配路由</td>
              <td class="border border-slate-200 px-4 py-2">创建 <code class="bg-slate-100 px-1 rounded text-xs">not-found.tsx</code> 文件即可</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">加载状态</td>
              <td class="border border-slate-200 px-4 py-2">需自行实现 loading 状态管理</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded text-xs">loading.tsx</code> 自动包裹 Suspense</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">错误处理</td>
              <td class="border border-slate-200 px-4 py-2">自行创建 ErrorBoundary 类组件</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded text-xs">error.tsx</code> 自动作为错误边界</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">服务端渲染</td>
              <td class="border border-slate-200 px-4 py-2">需额外配置（如 react-router + Express）</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">内置 SSR</span>，无需额外配置</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">路由组织性</td>
              <td class="border border-slate-200 px-4 py-2">路由表与页面文件分离，项目大了难维护</td>
              <td class="border border-slate-200 px-4 py-2">路由和页面在同一目录树，<span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">直观好找</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 class="font-semibold mb-3">🧭 导航方式对比</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p class="text-xs text-slate-400 mb-2 font-medium">React Router</p>
          <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>import { Link, useNavigate } from 'react-router-dom';

// 声明式导航
&lt;Link to="/about"&gt;关于我们&lt;/Link&gt;

// 编程式导航
const navigate = useNavigate();
navigate('/blog/hello-world');</code></pre>
        </div>
        <div>
          <p class="text-xs text-slate-400 mb-2 font-medium">Next.js</p>
          <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>import Link from 'next/link';
import { useRouter } from 'next/navigation';

// 声明式导航（支持预加载）
&lt;Link href="/about"&gt;关于我们&lt;/Link&gt;

// 编程式导航
const router = useRouter();
router.push('/blog/hello-world');</code></pre>
        </div>
      </div>

      <h4 class="font-semibold mb-3">✨ Next.js 文件系统路由的独特优势</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div class="p-3 border border-blue-100 bg-blue-50 rounded-lg">
          <h5 class="font-semibold text-blue-800 text-sm mb-1">📂 零配置上手快</h5>
          <p class="text-xs text-blue-700">不需要安装 react-router-dom，也不需要写任何路由配置代码。创建文件 = 创建路由，删除文件 = 删除路由。</p>
        </div>
        <div class="p-3 border border-blue-100 bg-blue-50 rounded-lg">
          <h5 class="font-semibold text-blue-800 text-sm mb-1">🧩 布局自动嵌套</h5>
          <p class="text-xs text-blue-700">layout.tsx 自动作用于该目录及所有子目录，导航时保持状态不重新挂载，而 React Router 需手动配置 Outlet 层级。</p>
        </div>
        <div class="p-3 border border-blue-100 bg-blue-50 rounded-lg">
          <h5 class="font-semibold text-blue-800 text-sm mb-1">⚡ 自动代码分割</h5>
          <p class="text-xs text-blue-700">每个 route segment 自动拆分为独立 JS bundle，用户只加载当前页面的代码，无需手动配置 lazy loading。</p>
        </div>
        <div class="p-3 border border-blue-100 bg-blue-50 rounded-lg">
          <h5 class="font-semibold text-blue-800 text-sm mb-1">🎯 内置最佳实践</h5>
          <p class="text-xs text-blue-700">loading.tsx、error.tsx、not-found.tsx 等约定文件开箱即用，把 React Router 中需要自行实现的功能变成了内置约定。</p>
        </div>
      </div>

      <div class="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
        <h4 class="font-semibold text-amber-800 mb-2">💡 一句话总结</h4>
        <p class="text-sm text-amber-700">React Router 是<strong>"你告诉框架路由是什么"</strong>，Next.js 是<strong>"文件夹结构本身就是路由"</strong>。前者灵活但需要维护路由表，后者约束性强但开发效率高、团队协作更规范。</p>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">文件约定 (page.tsx)</h3>
      <p class="text-slate-600 mb-3">在 App Router 中，只有命名为 <code class="bg-slate-100 px-1 rounded">page.tsx</code> 的文件才是可公开访问的路由页面：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
├── page.tsx            →  /
├── about/
│   └── page.tsx        →  /about
├── blog/
│   ├── page.tsx        →  /blog
│   └── [slug]/
│       └── page.tsx    →  /blog/:slug
└── dashboard/
    ├── layout.tsx      ← 布局，不是路由
    └── page.tsx        →  /dashboard</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">嵌套路由的文件夹结构</h3>
      <p class="text-slate-600 mb-3">嵌套文件夹对应嵌套的 URL 路径，布局可以嵌套使用：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
├── layout.tsx              # 根布局
├── page.tsx                # 首页
├── dashboard/
│   ├── layout.tsx          # Dashboard 布局（侧边栏等）
│   ├── page.tsx            # /dashboard
│   ├── analytics/
│   │   └── page.tsx        # /dashboard/analytics
│   └── settings/
│       ├── layout.tsx      # Settings 子布局
│       ├── page.tsx        # /dashboard/settings
│       └── profile/
│           └── page.tsx    # /dashboard/settings/profile
└── docs/
    └── page.tsx            # /docs</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">page.tsx 示例</h3>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-6"><code>// app/about/page.tsx
// 访问 /about 时渲染此页面
export default function AboutPage() {
  return (
    &lt;div className="max-w-2xl mx-auto py-12"&gt;
      &lt;h1&gt;关于我们&lt;/h1&gt;
      &lt;p&gt;这是关于页面的内容。&lt;/p&gt;
    &lt;/div&gt;
  );
}

// 生成静态元数据
export const metadata = {
  title: '关于我们 - My App',
  description: '了解我们的团队和使命。',
};</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">特殊文件约定</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">文件</th>
              <th class="border border-slate-200 px-4 py-2 text-left">作用</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">page.tsx</td>
              <td class="border border-slate-200 px-4 py-2">定义路由的 UI 内容</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">layout.tsx</td>
              <td class="border border-slate-200 px-4 py-2">定义该路由段及其子路由的共享布局</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">template.tsx</td>
              <td class="border border-slate-200 px-4 py-2">类似 layout，但导航时会重新挂载</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">loading.tsx</td>
              <td class="border border-slate-200 px-4 py-2">定义加载状态（Suspense）</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">error.tsx</td>
              <td class="border border-slate-200 px-4 py-2">定义错误边界 UI</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">not-found.tsx</td>
              <td class="border border-slate-200 px-4 py-2">定义 404 页面</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  {
    id: 5,
    title: "布局(Layout)与模板(Template)",
    icon: "Layout",
    content: `
      <h2 class="text-2xl font-bold mb-4">布局 (Layout) 与模板 (Template)</h2>
      <p class="text-slate-600 mb-6">Layout 和 Template 都用于包裹子页面，但它们在导航时的行为有本质区别。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">什么是 Layout？</h3>
      <p class="text-slate-600 mb-3">Layout 是在多个页面之间共享的 UI 组件，导航时会<strong>保持状态</strong>、<strong>不会重新渲染</strong>。</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/dashboard/layout.tsx
import { Sidebar } from '@/components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    &lt;div className="flex h-screen"&gt;
      {/* 侧边栏在导航时保持状态，不会重新挂载 */}
      &lt;Sidebar /&gt;
      &lt;main className="flex-1 overflow-auto"&gt;
        {children}
      &lt;/main&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">Layout 的特性</h3>
      <ul class="list-disc pl-6 text-slate-600 space-y-2 mb-6">
        <li><strong>状态保留</strong>：在同布局下的子路由间切换时，布局组件的 state 会保留</li>
        <li><strong>不重新渲染</strong>：组件不会重新挂载，useEffect 只在首次加载时执行</li>
        <li><strong>支持嵌套</strong>：可以多层嵌套，每层对应一个路由段</li>
        <li><strong>默认服务端组件</strong>：可以在布局中获取数据（注意不能访问子页面数据）</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">什么是 Template？</h3>
      <p class="text-slate-600 mb-3">Template 与 Layout 类似，但在导航时会<strong>为每个子页面重新挂载</strong>。</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/(marketing)/template.tsx
'use client';

import { useState, useEffect } from 'react';

export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [viewCount, setViewCount] = useState(0);

  // 每次进入新页面，这个 effect 都会重新执行
  // 因为组件被重新挂载了
  useEffect(() => {
    setViewCount(prev =&gt; prev + 1);
    console.log('页面访问次数：', viewCount);
  }, []);

  return &lt;div className="marketing-wrap"&gt;{children}&lt;/div&gt;;
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">Layout vs Template 对比</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">特性</th>
              <th class="border border-slate-200 px-4 py-2 text-left">Layout</th>
              <th class="border border-slate-200 px-4 py-2 text-left">Template</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">导航时状态</td>
              <td class="border border-slate-200 px-4 py-2">保留状态</td>
              <td class="border border-slate-200 px-4 py-2">重置状态（重新挂载）</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">useEffect</td>
              <td class="border border-slate-200 px-4 py-2">只执行一次</td>
              <td class="border border-slate-200 px-4 py-2">每次导航都执行</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">使用场景</td>
              <td class="border border-slate-200 px-4 py-2">导航栏、侧边栏、Footer</td>
              <td class="border border-slate-200 px-4 py-2">进入/退出动画、页面埋点</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">性能</td>
              <td class="border border-slate-200 px-4 py-2">更好</td>
              <td class="border border-slate-200 px-4 py-2">较差（重新挂载）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">嵌套规则</h3>
      <p class="text-slate-600 mb-3">同一目录下可以同时存在 layout.tsx 和 template.tsx，渲染顺序为：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// 渲染层级
Layout → Template → 子页面的 Layout → 子页面的 Template → 页面

// 对应 DOM 结构
&lt;RootLayout&gt;
  &lt;RootTemplate&gt;
    &lt;DashboardLayout&gt;
      &lt;DashboardTemplate&gt;
        &lt;SettingsPage /&gt;
      &lt;/DashboardTemplate&gt;
    &lt;/DashboardLayout&gt;
  &lt;/RootTemplate&gt;
&lt;/RootLayout&gt;</code></pre>
    `,
  },
  {
    id: 6,
    title: "页面元数据 (Metadata)",
    icon: "Globe",
    content: `
      <h2 class="text-2xl font-bold mb-4">页面元数据 (Metadata)</h2>
      <p class="text-slate-600 mb-6">Next.js 提供了强大的元数据 API，用于设置页面的 title、description、OG 标签等，对 SEO 和社交分享至关重要。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">什么是 OG 标签？</h3>
      <p class="text-slate-600 mb-3"><strong>OG 标签（Open Graph）</strong>是由 Facebook 于 2010 年提出的一套<strong>元数据协议</strong>，通过在 HTML 的 <code class="bg-slate-100 px-1 rounded">&lt;head&gt;</code> 中插入 <code class="bg-slate-100 px-1 rounded">&lt;meta&gt;</code> 标签，让网页在社交平台分享时能展示出<strong>标题、描述、缩略图</strong>等富媒体卡片，而不是一个光秃秃的链接。</p>

      <div class="mb-4">
        <p class="text-xs text-slate-400 mb-2 font-medium">没有 OG 标签 vs 有 OG 标签 — 分享效果对比</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-red-200 bg-red-50 rounded-lg">
            <h5 class="font-semibold text-red-800 text-sm mb-2">❌ 没有 OG 标签</h5>
            <p class="text-xs text-red-600 mb-2">分享到微信 / Twitter / Facebook 时只显示：</p>
            <div class="bg-white border border-red-100 rounded p-2 text-xs text-slate-500">
              <p class="text-blue-500 underline truncate">https://example.com/products/123</p>
              <p class="text-slate-400 mt-1">（无标题、无描述、无图片）</p>
            </div>
          </div>
          <div class="p-4 border border-green-200 bg-green-50 rounded-lg">
            <h5 class="font-semibold text-green-800 text-sm mb-2">✅ 有 OG 标签</h5>
            <p class="text-xs text-green-600 mb-2">同样的链接分享时展示为富媒体卡片：</p>
            <div class="bg-white border border-green-100 rounded overflow-hidden">
              <div class="bg-slate-200 h-20 flex items-center justify-center text-xs text-slate-400">📷 封面图</div>
              <div class="p-2">
                <p class="text-xs font-semibold text-slate-800">2024新款运动跑鞋 | XX品牌旗舰店</p>
                <p class="text-[10px] text-slate-500 mt-0.5">轻盈透气，全掌碳板科技，限时优惠 ¥599</p>
                <p class="text-[10px] text-slate-400 mt-0.5">example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="font-semibold mb-3">🏷️ 常用 OG 标签一览</h4>
      <div class="overflow-x-auto mb-4">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">OG 标签</th>
              <th class="border border-slate-200 px-4 py-2 text-left">含义</th>
              <th class="border border-slate-200 px-4 py-2 text-left">示例值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">og:title</td>
              <td class="border border-slate-200 px-4 py-2">分享卡片的标题</td>
              <td class="border border-slate-200 px-4 py-2 text-xs text-slate-500">2024新款运动跑鞋 | XX品牌旗舰店</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">og:description</td>
              <td class="border border-slate-200 px-4 py-2">分享卡片的描述文字</td>
              <td class="border border-slate-200 px-4 py-2 text-xs text-slate-500">轻盈透气，全掌碳板科技...</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">og:image</td>
              <td class="border border-slate-200 px-4 py-2">分享卡片的封面缩略图</td>
              <td class="border border-slate-200 px-4 py-2 text-xs text-slate-500">https://example.com/og-image.jpg</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">og:url</td>
              <td class="border border-slate-200 px-4 py-2">页面的规范 URL</td>
              <td class="border border-slate-200 px-4 py-2 text-xs text-slate-500">https://example.com/products/123</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">og:type</td>
              <td class="border border-slate-200 px-4 py-2">内容类型（website / article / product 等）</td>
              <td class="border border-slate-200 px-4 py-2 text-xs text-slate-500">product</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">og:site_name</td>
              <td class="border border-slate-200 px-4 py-2">网站名称</td>
              <td class="border border-slate-200 px-4 py-2 text-xs text-slate-500">XX品牌旗舰店</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">og:locale</td>
              <td class="border border-slate-200 px-4 py-2">语言区域</td>
              <td class="border border-slate-200 px-4 py-2 text-xs text-slate-500">zh_CN</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h4 class="font-semibold text-purple-800 mb-2">🔗 OG 标签最终生成的 HTML</h4>
        <p class="text-sm text-purple-700 mb-2">当 Next.js 渲染页面时，metadata 对象会被转换为 <code class="bg-purple-100 px-1 rounded">&lt;meta&gt;</code> 标签插入到 <code class="bg-purple-100 px-1 rounded">&lt;head&gt;</code> 中：</p>
        <pre class="bg-slate-900 text-white p-3 rounded text-xs overflow-x-auto"><code>&lt;!-- Next.js metadata 生成的 HTML --&gt;
&lt;head&gt;
  &lt;title&gt;2024新款运动跑鞋 | XX品牌旗舰店&lt;/title&gt;
  &lt;meta name="description" content="轻盈透气，全掌碳板科技..." /&gt;
  
  &lt;!-- Open Graph 标签 → 社交平台读取这些 --&gt;
  &lt;meta property="og:title" content="2024新款运动跑鞋 | XX品牌旗舰店" /&gt;
  &lt;meta property="og:description" content="轻盈透气，全掌碳板科技..." /&gt;
  &lt;meta property="og:image" content="https://example.com/cover.jpg" /&gt;
  &lt;meta property="og:url" content="https://example.com/products/123" /&gt;
  &lt;meta property="og:type" content="product" /&gt;
  &lt;meta property="og:site_name" content="XX品牌旗舰店" /&gt;
  
  &lt;!-- Twitter Card 标签 --&gt;
  &lt;meta name="twitter:card" content="summary_large_image" /&gt;
  &lt;meta name="twitter:title" content="2024新款运动跑鞋 | XX品牌旗舰店" /&gt;
&lt;/head&gt;</code></pre>
        <p class="text-xs text-purple-600 mt-2">微信、QQ、Facebook、Twitter、LinkedIn、Slack、Discord 等几乎所有社交/通讯平台都会解析 OG 标签来生成链接预览卡片。</p>
      </div>

      <div class="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
        <h4 class="font-semibold text-amber-800 mb-2">💡 为什么 OG 标签对 SEO 和用户体验至关重要？</h4>
        <ul class="list-disc pl-6 text-sm text-amber-700 space-y-1">
          <li><strong>社交传播转化率</strong>：带封面图的分享链接点击率比纯文本链接高 <strong>3-5 倍</strong></li>
          <li><strong>品牌形象</strong>：精美的分享卡片提升品牌专业感，差的展示降低用户信任</li>
          <li><strong>SEO 间接影响</strong>：虽然 OG 标签不直接影响搜索排名，但更高的社交点击率带来更多流量和反向链接，间接提升 SEO</li>
          <li><strong>必选项</strong>：对于电商、内容站、企业官网，OG 标签不是"锦上添花"，而是<strong>必须配置</strong>的基础设施</li>
        </ul>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">静态 Metadata 写法</h3>
      <p class="text-slate-600 mb-3">在 page.tsx 或 layout.tsx 中直接 export 一个 metadata 对象：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 | MyApp',
  description: '了解我们的团队和产品使命。',
  keywords: ['关于我们', '团队', '公司介绍'],
  authors: [{ name: 'MyApp Team' }],
  openGraph: {
    title: '关于我们 | MyApp',
    description: '了解我们的团队和产品使命。',
    type: 'website',
    url: 'https://myapp.com/about',
    siteName: 'MyApp',
    images: [
      {
        url: 'https://myapp.com/og-about.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于我们 | MyApp',
    description: '了解我们的团队和产品使命。',
    images: ['https://myapp.com/og-about.png'],
  },
};

export default function AboutPage() {
  return &lt;h1&gt;关于我们&lt;/h1&gt;;
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">动态 generateMetadata</h3>
      <p class="text-slate-600 mb-3">当页面元数据需要根据数据动态生成时（如详情页），使用 <code class="bg-slate-100 px-1 rounded">generateMetadata</code> 函数：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/products/[id]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: Promise&lt;{ id: string }&gt;;
};

// 动态生成元数据
export async function generateMetadata(
  { params }: Props
): Promise&lt;Metadata&gt; {
  const { id } = await params;
  const product = await fetchProduct(id);

  return {
    title: \`\${product.name} | MyApp 商城\`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
      type: 'product',
    },
  };
}

// 页面组件
export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await fetchProduct(id);

  return (
    &lt;div&gt;
      &lt;h1&gt;{product.name}&lt;/h1&gt;
      &lt;p&gt;{product.description}&lt;/p&gt;
    &lt;/div&gt;
  );
}

async function fetchProduct(id: string) {
  const res = await fetch(\`https://api.example.com/products/\${id}\`);
  return res.json();
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">Metadata 的继承与合并</h3>
      <p class="text-slate-600 mb-3">元数据会从父 layout 一直合并到当前 page，形成最终的元数据：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/layout.tsx (根布局)
export const metadata: Metadata = {
  title: {
    default: 'MyApp - 首页',
    template: '%s | MyApp',  // 子页面的 title 会替换 %s
  },
  description: 'MyApp 是一个...',
};

// app/about/page.tsx (子页面)
export const metadata: Metadata = {
  title: '关于我们',  // 最终标题：关于我们 | MyApp
  description: '关于页面描述...', // 覆盖父级 description
};

// 最终合并结果：
// title: "关于我们 | MyApp"
// description: "关于页面描述..."</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">常用 Metadata 字段</h3>
      <ul class="list-disc pl-6 text-slate-600 space-y-1">
        <li><code class="bg-slate-100 px-1 rounded">title</code> - 页面标题</li>
        <li><code class="bg-slate-100 px-1 rounded">description</code> - 页面描述</li>
        <li><code class="bg-slate-100 px-1 rounded">keywords</code> - 关键词</li>
        <li><code class="bg-slate-100 px-1 rounded">openGraph</code> - Facebook/LinkedIn/微信 等分享标签</li>
        <li><code class="bg-slate-100 px-1 rounded">twitter</code> - Twitter Card 标签</li>
        <li><code class="bg-slate-100 px-1 rounded">robots</code> - 搜索引擎爬虫规则</li>
        <li><code class="bg-slate-100 px-1 rounded">icons</code> - favicon 配置</li>
      </ul>
    `,
  },
  {
    id: 7,
    title: "路由分组 (Route Groups)",
    icon: "FolderTree",
    content: `
      <h2 class="text-2xl font-bold mb-4">路由分组 (Route Groups)</h2>
      <p class="text-slate-600 mb-6">路由分组允许你将相关的路由组织在一起，而不会影响 URL 路径结构。使用括号 <code class="bg-slate-100 px-1 rounded">(groupName)</code> 语法。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">基本用法</h3>
      <p class="text-slate-600 mb-3">用括号包裹的文件夹名称不会出现在 URL 中：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
├── (marketing)/           # 分组：营销相关页面
│   ├── layout.tsx         # 营销布局（单独的布局）
│   ├── about/
│   │   └── page.tsx       →  /about  (注意：没有 /marketing)
│   └── blog/
│       └── page.tsx       →  /blog
├── (dashboard)/           # 分组：后台管理
│   ├── layout.tsx         # 后台布局（带侧边栏）
│   └── page.tsx           →  /
└── (auth)/                # 分组：认证页面
    ├── layout.tsx         # 认证布局（居中卡片）
    ├── login/
    │   └── page.tsx       →  /login
    └── register/
        └── page.tsx       →  /register</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">应用场景一：不同布局</h3>
      <p class="text-slate-600 mb-3">最常见的用途是为不同模块的页面设置不同的根布局：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/(marketing)/layout.tsx
// 营销页面布局：顶部导航 + 底部 Footer
export default function MarketingLayout({ children }) {
  return (
    &lt;div&gt;
      &lt;header&gt;营销站点导航&lt;/header&gt;
      &lt;main&gt;{children}&lt;/main&gt;
      &lt;footer&gt;© 2024 MyApp&lt;/footer&gt;
    &lt;/div&gt;
  );
}

// app/(dashboard)/layout.tsx
// 后台布局：左侧菜单 + 内容区
export default function DashboardLayout({ children }) {
  return (
    &lt;div className="flex h-screen"&gt;
      &lt;aside className="w-64 bg-slate-900 text-white"&gt;
        后台侧边栏
      &lt;/aside&gt;
      &lt;main className="flex-1"&gt;{children}&lt;/main&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">应用场景二：按功能组织文件</h3>
      <p class="text-slate-600 mb-3">即使使用相同的布局，也可以用路由分组来组织代码结构，使项目更清晰：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
├── (shop)/
│   ├── products/          →  /products
│   ├── cart/              →  /cart
│   └── checkout/          →  /checkout
├── (user)/
│   ├── profile/           →  /profile
│   ├── orders/            →  /orders
│   └── settings/          →  /settings
└── (support)/
    ├── help/              →  /help
    └── contact/           →  /contact</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">注意事项</h3>
      <ul class="list-disc pl-6 text-slate-600 space-y-2">
        <li>
          <strong>同一路径不能有多个同层级页面</strong>：
          <br />
          <code class="bg-slate-100 px-1 rounded">(group1)/page.tsx</code> 和 <code class="bg-slate-100 px-1 rounded">(group2)/page.tsx</code> 都指向 <code class="bg-slate-100 px-1 rounded">/</code>，会冲突
        </li>
        <li><strong>路由分组不影响 URL</strong>：括号里的名字只是给开发者看的，不会出现在路径中</li>
        <li><strong>可以多层嵌套分组</strong>：分组里还可以再嵌套分组</li>
        <li><strong>根布局仍在 app/layout.tsx</strong>：分组内的 layout 是子布局，会嵌套在根布局中</li>
      </ul>
    `,
  },
  {
    id: 8,
    title: " Vercel 自动部署",
    icon: "Rocket",
    content: `
      <h2 class="text-2xl font-bold mb-4"> Vercel 自动部署</h2>
      <p class="text-slate-600 mb-6">Vercel 是 Next.js 官方团队打造的部署平台，与 Next.js 深度集成，提供极速、零配置的部署体验。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">Git 连接与自动部署</h3>
      <p class="text-slate-600 mb-3">将代码推送到 GitHub / GitLab / Bitbucket 后，Vercel 会自动检测并部署：</p>
      <ol class="list-decimal pl-6 text-slate-600 space-y-2 mb-4">
        <li>在 vercel.com 点击 "New Project"</li>
        <li>选择你的 Git 仓库</li>
        <li>配置项目设置（通常默认即可）</li>
        <li>点击 "Deploy"，等待自动部署完成</li>
      </ol>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code># 开发工作流变得超级简单
git add .
git commit -m "feat: add new feature"
git push origin main

# 🚀 Vercel 自动触发构建和部署
# 几分钟后你的变更就上线了！</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">预览部署 (Preview Deployments)</h3>
      <p class="text-slate-600 mb-3">每次发起 Pull Request 时，Vercel 会自动生成一个预览 URL，方便团队评审：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>main 分支      →  https://my-app.vercel.app       (生产环境)
feat/login 分支  →  https://my-app-git-feat-login-team.vercel.app  (预览)
PR #42           →  https://my-app-pr-42.vercel.app  (PR 预览)</code></pre>
      <ul class="list-disc pl-6 text-slate-600 space-y-1">
        <li>每次 PR 都会生成唯一的预览链接</li>
        <li>可以在合并前测试和验收功能</li>
        <li>预览部署使用与生产相同的基础设施</li>
        <li>可以配置保护密码，防止未授权访问</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">自定义域名</h3>
      <p class="text-slate-600 mb-3">在 Vercel 项目设置中添加自定义域名，并配置 DNS 解析：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code># DNS 配置示例（在域名服务商处设置）
# A 记录指向 Vercel 的 IP
example.com    A    76.76.21.21

# 或者 CNAME 记录（推荐用于子域名）
www            CNAME  cname.vercel-dns.com

# 配置后 Vercel 会自动：
# - 颁发 SSL 证书（HTTPS）
# - 全球 CDN 加速
# - 自动续期证书</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">Vercel 的其他优势</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">⚡ 边缘计算</h4>
          <p class="text-sm text-slate-600">Edge Functions 在全球边缘节点运行，延迟极低</p>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">🖼️ 图片优化</h4>
          <p class="text-sm text-slate-600">next/image 自动优化图片并通过 CDN 分发</p>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">📊 分析监控</h4>
          <p class="text-sm text-slate-600">Web Analytics、Speed Insights 一键开启</p>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">🔄 增量再生成</h4>
          <p class="text-sm text-slate-600">ISR 支持页面在后台自动更新缓存</p>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">环境变量</h3>
      <p class="text-slate-600 mb-3">在 Vercel 后台配置环境变量，代码中通过 process.env 访问：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// 服务端组件可以直接使用所有环境变量
export default async function Page() {
  const apiKey = process.env.DATABASE_URL;
  // ...
}

// 客户端组件只能使用 NEXT_PUBLIC_ 前缀的变量
'use client';
export default function ClientComponent() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  // ...
}</code></pre>
    `,
  },
  {
    id: 9,
    title: "动态路由 (Dynamic Routes)",
    icon: "SquareCode",
    content: `
      <h2 class="text-2xl font-bold mb-4">动态路由 (Dynamic Routes)</h2>
      <p class="text-slate-600 mb-6">当你需要根据动态数据生成页面时（如商品详情、用户资料），使用动态路由。文件夹名用方括号包裹：<code class="bg-slate-100 px-1 rounded">[slug]</code>。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">单参数动态路由 [slug]</h3>
      <p class="text-slate-600 mb-3">最基础的动态路由，匹配 URL 中的一个段：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
└── blog/
    └── [slug]/
        └── page.tsx    →  /blog/first-post
                           /blog/hello-world
                           /blog/anything-here</code></pre>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/blog/[slug]/page.tsx
type Props = {
  params: Promise&lt;{ slug: string }&gt;;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // slug 就是 URL 中的动态部分
  // 例如访问 /blog/my-first-post → slug = "my-first-post"

  const post = await fetchPostBySlug(slug);

  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;div className="content"&gt;{post.content}&lt;/div&gt;
    &lt;/article&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">生成静态参数 generateStaticParams</h3>
      <p class="text-slate-600 mb-3">在构建时预生成所有已知动态路由的 HTML，加快访问速度（SSG）：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/blog/[slug]/page.tsx

// 在构建时生成所有已知文章的静态页面
export async function generateStaticParams() {
  const posts = await fetchAllPosts();

  return posts.map((post) =&gt; ({
    slug: post.slug,
  }));
  // 返回值示例：
  // [
  //   { slug: 'first-post' },
  //   { slug: 'second-post' },
  //   { slug: 'third-post' },
  // ]
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  // ...
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">捕获所有路由 [...catchAll]</h3>
      <p class="text-slate-600 mb-3">使用 <code class="bg-slate-100 px-1 rounded">[...slug]</code> 匹配后面所有路径段：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
└── docs/
    └── [...slug]/
        └── page.tsx    →  /docs
                           /docs/getting-started
                           /docs/api/reference/auth
                           /docs/a/b/c/d/e (任意层级)</code></pre>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/docs/[...slug]/page.tsx
type Props = {
  params: Promise&lt;{ slug: string[] }&gt;;  // 注意：是数组
};

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;
  // 访问 /docs/intro/installation → slug = ["intro", "installation"]
  // 访问 /docs → slug = undefined（见下一条，可选捕获所有）

  const content = await fetchDocContent(slug || []);
  return &lt;div&gt;{content}&lt;/div&gt;;
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">可选捕获所有路由 [[...slug]]</h3>
      <p class="text-slate-600 mb-3">在普通捕获路由外面再包一层方括号，根路径也会匹配：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
└── shop/
    └── [[...categories]]/
        └── page.tsx    →  /shop                    (categories = undefined)
                           /shop/electronics         (categories = ["electronics"])
                           /shop/electronics/phones  (categories = ["electronics", "phones"])</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">动态路由组合使用</h3>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
└── [storeId]/
    ├── page.tsx              →  /store-123
    ├── products/
    │   └── [productId]/
    │       └── page.tsx      →  /store-123/products/456
    └── [...catchall]/
        └── page.tsx          →  /store-123/any/other/path</code></pre>
    `,
  },
  {
    id: 10,
    title: "平行路由 (Parallel Routes)",
    icon: "Split",
    content: `
      <h2 class="text-2xl font-bold mb-4">平行路由 (Parallel Routes)</h2>
      <p class="text-slate-600 mb-6">平行路由允许你在同一个布局中同时渲染多个独立的页面（或称为 slot）。每个 slot 都有自己独立的导航和状态。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">@slot 命名约定</h3>
      <p class="text-slate-600 mb-3">用 <code class="bg-slate-100 px-1 rounded">@</code> 前缀的文件夹表示一个平行路由 slot：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
└── dashboard/
    ├── layout.tsx       # 布局中接收 @team 和 @analytics 作为 props
    ├── @team/
    │   └── page.tsx     # Team 面板的内容
    ├── @analytics/
    │   └── page.tsx     # Analytics 面板的内容
    └── page.tsx         # 主页面内容（默认 slot，也叫 children）</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">布局中使用平行路由</h3>
      <p class="text-slate-600 mb-3">在布局组件中，每个 slot 作为单独的 prop 传入：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,      // 默认 slot，对应 page.tsx
  team,          // @team 插槽
  analytics,     // @analytics 插槽
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    &lt;div className="dashboard"&gt;
      &lt;header&gt;Dashboard 头部&lt;/header&gt;
      
      {/* 主内容区 */}
      &lt;div className="main-content"&gt;
        {children}
      &lt;/div&gt;
      
      {/* 底部左右两个独立面板 */}
      &lt;div className="grid grid-cols-2 gap-4 mt-6"&gt;
        &lt;div className="panel"&gt;
          {team}
        &lt;/div&gt;
        &lt;div className="panel"&gt;
          {analytics}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">仪表盘场景示例</h3>
      <p class="text-slate-600 mb-3">典型的仪表盘布局，每个区域独立加载和导航：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
└── dashboard/
    ├── layout.tsx
    ├── page.tsx              →  主内容
    ├── @notifications/
    │   └── page.tsx          →  通知中心
    ├── @sidebar/
    │   └── page.tsx          →  侧边栏
    └── @revenue/
        └── page.tsx          →  收入图表

// 每个 slot 可以独立导航：
// /dashboard/revenue/daily  → @revenue 显示日报表
// /dashboard/revenue/monthly → @revenue 显示月报表
// 其他 slot 不受影响，保持原有状态</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">独立导航示例</h3>
      <p class="text-slate-600 mb-3">每个 slot 可以有自己的子路由，导航时只更新对应 slot：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    ├── @team/
    │   ├── page.tsx          # 默认：团队列表
    │   ├── [userId]/
    │   │   └── page.tsx      # 团队成员详情
    │   └── settings/
    │       └── page.tsx      # 团队设置
    └── @analytics/
        ├── page.tsx          # 默认：总览
        └── revenue/
            └── page.tsx      # 收入分析

// 访问 /dashboard → 主页面 + 团队列表 + 分析总览
// 访问 /dashboard/team/user-1 → 主页面 + 成员详情 + 分析总览
// 注意：URL 只显示其中一个 slot 的路径，
// 其他 slot 显示自己的默认内容</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">default.tsx - 回退内容</h3>
      <p class="text-slate-600 mb-3">当某个 slot 没有匹配的路由时，使用 <code class="bg-slate-100 px-1 rounded">default.tsx</code> 作为回退：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/dashboard/@team/default.tsx
// 当 URL 中不包含 @team 对应的路径时，显示此内容
export default function TeamDefault() {
  return &lt;div&gt;请选择一个团队成员&lt;/div&gt;;
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">使用场景</h3>
      <ul class="list-disc pl-6 text-slate-600 space-y-1">
        <li>复杂的仪表盘布局（多个独立区域）</li>
        <li>结合拦截路由实现 Modal 弹窗（下一章）</li>
        <li>需要独立导航的侧边栏/内容区</li>
        <li>A/B 测试（可实现不同 slot 的组合）</li>
      </ul>
    `,
  },
  {
    id: 11,
    title: "拦截路由 (Intercepting Routes)",
    icon: "Shield",
    content: `
      <h2 class="text-2xl font-bold mb-4">拦截路由 (Intercepting Routes)</h2>
      <p class="text-slate-600 mb-6">拦截路由允许你在当前布局中"拦截"某个导航，显示另一个路由的内容，而 URL 保持不变。常用于 Modal 弹窗、图片画廊等场景。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">匹配规则</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">约定</th>
              <th class="border border-slate-200 px-4 py-2 text-left">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">(.)photo</td>
              <td class="border border-slate-200 px-4 py-2">匹配同一层级的 <code class="bg-slate-100 px-1 rounded">photo</code> 路由</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">(..)photo</td>
              <td class="border border-slate-200 px-4 py-2">匹配上一层级的 <code class="bg-slate-100 px-1 rounded">photo</code> 路由</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">(..)(..)photo</td>
              <td class="border border-slate-200 px-4 py-2">匹配往上两层的 <code class="bg-slate-100 px-1 rounded">photo</code> 路由</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono">(...)photo</td>
              <td class="border border-slate-200 px-4 py-2">从根目录匹配 <code class="bg-slate-100 px-1 rounded">photo</code> 路由</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">经典场景：图片画廊 + Modal 弹窗</h3>
      <p class="text-slate-600 mb-3">点击相册中的图片，以 Modal 形式打开（拦截路由），但刷新页面会显示独立的图片详情页：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>app/
├── layout.tsx
├── page.tsx                  # 首页：图片网格
└── photo/
    └── [id]/
        └── page.tsx          # /photo/123 独立页面（刷新时访问）

app/
└── @modal/                   # 配合平行路由
    ├── default.tsx           # 默认 null
    └── (.)photo/             # 拦截同级的 photo 路由
        └── [id]/
            └── page.tsx      # 点击图片时的 Modal 内容</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">完整实现示例</h3>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/layout.tsx
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    &lt;html&gt;
      &lt;body&gt;
        {children}
        {modal}  {/* Modal 层 */}
      &lt;/body&gt;
    &lt;/html&gt;
  );
}

// app/page.tsx (图片列表页)
import Link from 'next/link';

export default function GalleryPage() {
  const photos = [
    { id: '1', title: '日出' },
    { id: '2', title: '海滩' },
    { id: '3', title: '山脉' },
  ];

  return (
    &lt;div className="grid grid-cols-3 gap-4"&gt;
      {photos.map((photo) =&gt; (
        &lt;Link key={photo.id} href={\`/photo/\${photo.id}\`} className="block"&gt;
          &lt;div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center"&gt;
            {photo.title}
          &lt;/div&gt;
        &lt;/Link&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/@modal/default.tsx
// 默认不显示 modal
export default function Default() {
  return null;
}

// app/@modal/(.)photo/[id]/page.tsx
// 拦截 /photo/[id]，以 Modal 形式展示
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  useEffect(() =&gt; {
    // 按 ESC 关闭
    const handleEsc = (e: KeyboardEvent) =&gt; {
      if (e.key === 'Escape') router.back();
    };
    window.addEventListener('keydown', handleEsc);
    return () =&gt; window.removeEventListener('keydown', handleEsc);
  }, [router]);

  return (
    &lt;div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={() =&gt; router.back()}
    &gt;
      &lt;div 
        className="bg-white rounded-xl p-6 max-w-lg w-full mx-4"
        onClick={(e) =&gt; e.stopPropagation()}
      &gt;
        &lt;h2 className="text-xl font-bold mb-4"&gt;图片详情 - {params.id}&lt;/h2&gt;
        &lt;p&gt;这是通过拦截路由显示的 Modal 弹窗。&lt;/p&gt;
        &lt;p className="text-sm text-slate-500 mt-4"&gt;
          尝试刷新页面 → 你会看到独立的图片详情页
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/photo/[id]/page.tsx
// 真正的独立页面（刷新或直接访问时显示）
export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    &lt;div className="max-w-2xl mx-auto py-12"&gt;
      &lt;h1&gt;图片详情 - {params.id}&lt;/h1&gt;
      &lt;p&gt;这是独立的图片详情页面。&lt;/p&gt;
      &lt;a href="/"&gt;← 返回画廊&lt;/a&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">工作原理</h3>
      <ul class="list-disc pl-6 text-slate-600 space-y-1">
        <li><strong>站内导航时</strong>：点击 Link 跳转，路由被拦截，显示 Modal 内容</li>
        <li><strong>刷新/直接访问时</strong>：不触发拦截，显示真正的页面</li>
        <li><strong>后退时</strong>：关闭 Modal，URL 回到上一个页面</li>
        <li><strong>配合平行路由</strong>：通常和 <code class="bg-slate-100 px-1 rounded">@modal</code> 这样的 slot 一起使用</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">常见应用场景</h3>
      <ul class="list-disc pl-6 text-slate-600 space-y-1">
        <li>图片画廊 / 视频弹窗</li>
        <li>登录/注册弹窗</li>
        <li>商品快速预览</li>
        <li>通知中心展开</li>
      </ul>
    `,
  },
  {
    id: 12,
    title: "API 接口开发",
    icon: "Braces",
    content: `
      <h2 class="text-2xl font-bold mb-4">API 接口开发</h2>
      <p class="text-slate-600 mb-6">Next.js 不仅可以渲染页面，还能在同一项目中编写后端 API 接口。这样前后端代码共享同一技术栈，极大简化全栈开发。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">App Router 中的 Route Handlers</h3>
      <p class="text-slate-600 mb-3">App Router 推荐使用 <code class="bg-slate-100 px-1 rounded">route.ts</code> 文件来定义 API 端点。将文件放在 <code class="bg-slate-100 px-1 rounded">route.ts</code>（或 <code class="bg-slate-100 px-1 rounded">route.js</code>）中，即可对外暴露 HTTP 接口：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

// GET /api/users
export async function GET() {
  const users = [
    { id: 1, name: '张三', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', email: 'lisi@example.com' },
  ];

  return NextResponse.json({ users });
}

// POST /api/users
export async function POST(request: NextRequest) {
  const body = await request.json();

  // 模拟创建用户
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };

  return NextResponse.json(
    { user: newUser, message: '创建成功' },
    { status: 201 }
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">支持的 HTTP 方法</h3>
      <p class="text-slate-600 mb-3">在 <code class="bg-slate-100 px-1 rounded">route.ts</code> 中导出对应名称的函数，即可处理对应的 HTTP 请求：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ method: 'GET' });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ method: 'POST', data });
}

export async function PUT(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ method: 'PUT', data });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ method: 'DELETE' });
}

export async function PATCH(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ method: 'PATCH', data });
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">动态路由参数</h3>
      <p class="text-slate-600 mb-3">和页面动态路由一样，API 也可以接收动态参数，用于获取/操作单个资源：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

type Props = {
  params: Promise&lt;{ id: string }&gt;;
};

// GET /api/users/123 → 获取单个用户
export async function GET(_request: NextRequest, { params }: Props) {
  const { id } = await params;

  // 模拟从数据库查询
  const user = await db.user.findById(id);

  if (!user) {
    return NextResponse.json(
      { error: '用户不存在' },
      { status: 404 }
    );
  }

  return NextResponse.json({ user });
}

// PUT /api/users/123 → 更新用户
export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const updatedUser = await db.user.update(id, body);

  return NextResponse.json({ user: updatedUser });
}

// DELETE /api/users/123 → 删除用户
export async function DELETE(_request: NextRequest, { params }: Props) {
  const { id } = await params;

  await db.user.delete(id);

  return NextResponse.json(
    { message: '删除成功' },
    { status: 200 }
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">查询参数与请求头</h3>
      <p class="text-slate-600 mb-3">通过 <code class="bg-slate-100 px-1 rounded">NextRequest</code> 对象可以获取 URL 查询参数和请求头信息：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 获取查询参数
  // 例如请求：/api/search?keyword=next&page=1&limit=10
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get('keyword');
  const page = Number(searchParams.get('page') || '1');
  const limit = Number(searchParams.get('limit') || '10');

  // 获取请求头
  const authHeader = request.headers.get('authorization');
  const contentType = request.headers.get('content-type');

  // 模拟搜索
  const results = await db.search({ keyword, page, limit });

  return NextResponse.json({
    keyword,
    page,
    limit,
    total: results.total,
    data: results.items,
  });
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">文件上传处理</h3>
      <p class="text-slate-600 mb-3">Next.js API Route 可以处理文件上传，配合 <code class="bg-slate-100 px-1 rounded">FormData</code> 解析请求：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json(
      { error: '未提供文件' },
      { status: 400 }
    );
  }

  // 读取文件内容
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 保存到本地或上传到云存储
  // await writeFile('./uploads/' + file.name, buffer);

  return NextResponse.json({
    message: '上传成功',
    filename: file.name,
    size: file.size,
    type: file.type,
  });
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">与 Pages Router API Routes 的区别</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">特性</th>
              <th class="border border-slate-200 px-4 py-2 text-left">App Router (route.ts)</th>
              <th class="border border-slate-200 px-4 py-2 text-left">Pages Router (api/)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">文件位置</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded">app/api/xxx/route.ts</code></td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded">pages/api/xxx.ts</code></td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">请求对象</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded">NextRequest</code> (基于 Web API)</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded">NextApiRequest</code> (基于 Node.js)</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">响应对象</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded">NextResponse</code></td>
              <td class="border border-slate-200 px-4 py-2">直接操作 <code class="bg-slate-100 px-1 rounded">res</code> 对象</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">Body 解析</td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded">await request.json()</code></td>
              <td class="border border-slate-200 px-4 py-2"><code class="bg-slate-100 px-1 rounded">req.body</code>（自动解析）</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">推荐程度</td>
              <td class="border border-slate-200 px-4 py-2">✅ 推荐使用</td>
              <td class="border border-slate-200 px-4 py-2">兼容旧项目</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">完整 CRUD 示例：待办事项 API</h3>
      <p class="text-slate-600 mb-3">下面是一个完整的 RESTful API 示例，实现待办事项的增删改查：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/api/todos/route.ts
import { NextRequest, NextResponse } from 'next/server';

// 模拟内存数据库
let todos = [
  { id: 1, title: '学习 Next.js', completed: false },
  { id: 2, title: '写 API 接口', completed: true },
];

// GET /api/todos
export async function GET() {
  return NextResponse.json({ todos });
}

// POST /api/todos
export async function POST(request: NextRequest) {
  const body = await request.json();

  const newTodo = {
    id: Date.now(),
    title: body.title,
    completed: false,
  };

  todos.push(newTodo);

  return NextResponse.json({ todo: newTodo }, { status: 201 });
}

// app/api/todos/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

type Props = {
  params: Promise&lt;{ id: string }&gt;;
};

// PUT /api/todos/123
export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const todoIndex = todos.findIndex(
    (t) =&gt; t.id === Number(id)
  );

  if (todoIndex === -1) {
    return NextResponse.json(
      { error: '未找到' },
      { status: 404 }
    );
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    ...body,
  };

  return NextResponse.json({ todo: todos[todoIndex] });
}

// DELETE /api/todos/123
export async function DELETE(_request: NextRequest, { params }: Props) {
  const { id } = await params;

  todos = todos.filter((t) =&gt; t.id !== Number(id));

  return NextResponse.json({ message: '删除成功' });
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">在 Server Component 中调用 API</h3>
      <p class="text-slate-600 mb-3">虽然 Server Component 可以直接操作数据库，但有时也需要调用内部 API：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/todos/page.tsx (Server Component)
export default async function TodosPage() {
  // 直接调用内部 API（服务端执行，不会发 HTTP 请求）
  const res = await fetch(
    'http://localhost:3000/api/todos',
    { cache: 'no-store' }
  );
  const { todos } = await res.json();

  return (
    &lt;ul&gt;
      {todos.map((todo) =&gt; (
        &lt;li key={todo.id}&gt;
          {todo.title} {todo.completed ? '✅' : '⬜'}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">CORS 跨域配置</h3>
      <p class="text-slate-600 mb-3">如果 API 需要被外部域名调用，需要配置 CORS：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/api/external/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  const allowedOrigins = ['https://myapp.com', 'https://admin.myapp.com'];

  const response = NextResponse.json({ data: 'Hello' });

  if (allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return response;
}

// 处理 OPTIONS 预检请求
export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}</code></pre>

      <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 class="font-semibold text-blue-800 mb-2">💡 最佳实践</h4>
        <ul class="list-disc pl-6 text-blue-700 space-y-1">
          <li>优先在 Server Component 中直接操作数据库，减少内部 HTTP 调用</li>
          <li>使用 <code class="bg-blue-100 px-1 rounded">route.ts</code> 处理所有 API 逻辑，保持前后端代码一致性</li>
          <li>为 API 响应添加统一的错误处理和状态码</li>
          <li>敏感操作（如删除）需要添加身份验证中间件</li>
        </ul>
      </div>
    `,
  },
  {
    id: 13,
    title: "连接数据库",
    icon: "Database",
    content: `
      <h2 class="text-2xl font-bold mb-4">Next.js 连接数据库</h2>
      <p class="text-slate-600 mb-6">Next.js 作为<strong>全栈框架</strong>，天然支持在服务端连接数据库。你可以在 Server Component、Route Handler 或 Server Action 中直接操作数据库，无需单独搭建后端服务。</p>

      <div class="mb-6 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl">
        <h3 class="text-lg font-semibold text-indigo-800 mb-3">🗄️ 数据库连接的核心原则</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div class="flex items-start gap-2">
            <span class="text-indigo-500 mt-0.5 text-lg">🖥️</span>
            <span class="text-slate-600"><strong>只在服务端连接</strong> — 数据库凭据不能暴露给客户端，所有数据库操作必须在 Server Component、Route Handler 或 Server Action 中执行</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-indigo-500 mt-0.5 text-lg">🔌</span>
            <span class="text-slate-600"><strong>连接复用</strong> — 使用单例模式管理数据库连接，避免每次请求都创建新连接（特别是 Serverless 环境）</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-indigo-500 mt-0.5 text-lg">🛡️</span>
            <span class="text-slate-600"><strong>ORM 推荐</strong> — 优先使用 Prisma 或 Drizzle ORM，享受类型安全、自动迁移和查询构建器</span>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">🔧 主流 ORM 对比</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">特性</th>
              <th class="border border-slate-200 px-4 py-2 text-left">Prisma</th>
              <th class="border border-slate-200 px-4 py-2 text-left">Drizzle ORM</th>
              <th class="border border-slate-200 px-4 py-2 text-left">TypeORM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">类型安全</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">自动生成</span></td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">编译时推断</span></td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-xs">装饰器</span></td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">Schema 定义</td>
              <td class="border border-slate-200 px-4 py-2">Prisma Schema 文件（DSL）</td>
              <td class="border border-slate-200 px-4 py-2">TypeScript 代码定义</td>
              <td class="border border-slate-200 px-4 py-2">装饰器 / Entity 类</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">数据库迁移</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">内置 prisma migrate</span></td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">drizzle-kit</span></td>
              <td class="border border-slate-200 px-4 py-2">需手动或使用 synchronize</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">性能</td>
              <td class="border border-slate-200 px-4 py-2">优秀（有额外 JS 层）</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">极佳（零运行时开销）</span></td>
              <td class="border border-slate-200 px-4 py-2">中等</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">Next.js 适配度</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">⭐⭐⭐⭐⭐</span></td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">⭐⭐⭐⭐⭐</span></td>
              <td class="border border-slate-200 px-4 py-2">⭐⭐⭐</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">生态成熟度</td>
              <td class="border border-slate-200 px-4 py-2">最成熟，社区最大</td>
              <td class="border border-slate-200 px-4 py-2">快速增长</td>
              <td class="border border-slate-200 px-4 py-2">成熟但更新慢</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">🚀 实战一：Prisma + PostgreSQL</h3>
      <p class="text-slate-600 mb-3">Prisma 是 Next.js 生态中最流行的 ORM，以下是完整接入步骤：</p>

      <h4 class="font-semibold mb-3">1. 安装与初始化</h4>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code># 安装 Prisma
npm install prisma @prisma/client

# 初始化 Prisma（生成 prisma/schema.prisma）
npx prisma init

# 安装完成后，Prisma CLI 可用
npx prisma --version</code></pre>

      <h4 class="font-semibold mb-3">2. 定义数据模型 (schema.prisma)</h4>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  avatar    String?
  role      Role     @default(USER)
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  ADMIN
  EDITOR
}</code></pre>

      <h4 class="font-semibold mb-3">3. 创建数据库迁移</h4>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code># 开发环境：生成迁移文件并应用到数据库
npx prisma migrate dev --name init

# 生产环境：应用迁移
npx prisma migrate deploy

# 查看数据库（Prisma Studio）
npx prisma studio</code></pre>

      <h4 class="font-semibold mb-3">4. 封装 Prisma 客户端（单例模式）</h4>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// 声明全局变量避免开发时热更新创建多个连接
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// 使用方式：在任何服务端代码中直接 import
// import { prisma } from '@/lib/prisma';</code></pre>
      <div class="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-4">
        <h5 class="font-semibold text-amber-800 text-sm mb-1">⚠️ 为什么要单例？</h5>
        <p class="text-xs text-amber-700">Next.js 开发模式下会热更新，每次请求可能触发模块重新加载，导致创建多个数据库连接耗尽连接池。将 client 挂在 <code class="bg-amber-100 px-1 rounded">globalThis</code> 上确保全局只有一个实例。</p>
      </div>

      <h4 class="font-semibold mb-3">5. 在 Server Component 中查询数据</h4>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// app/posts/page.tsx (Server Component)
import { prisma } from '@/lib/prisma';

export default async function PostsPage() {
  // 直接在服务端查询数据库，无需 API 中转！
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { name: true } } },
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  return (
    &lt;div className="max-w-4xl mx-auto py-8"&gt;
      &lt;h1 className="text-2xl font-bold mb-6"&gt;文章列表&lt;/h1&gt;
      &lt;ul className="space-y-4"&gt;
        {posts.map((post) =&gt; (
          &lt;li key={post.id} className="p-4 border rounded-lg"&gt;
            &lt;h2 className="text-lg font-semibold"&gt;{post.title}&lt;/h2&gt;
            &lt;p className="text-sm text-slate-500"&gt;作者：{post.author.name}&lt;/p&gt;
            &lt;p className="text-slate-600 mt-2"&gt;{post.content?.slice(0, 200)}&lt;/p&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h4 class="font-semibold mb-3">6. 在 Route Handler 中增删改</h4>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST /api/posts — 创建文章
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: body.authorId,
      },
    });
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: '创建失败' },
      { status: 500 }
    );
  }
}

// DELETE /api/posts?id=1 — 删除文章
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: '缺少 id' }, { status: 400 });
  }
  await prisma.post.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: '删除成功' });
}</code></pre>

      <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
        <h4 class="font-semibold text-blue-800 mb-2">💡 Server Component 直接查库 vs API Route 查库</h4>
        <ul class="list-disc pl-6 text-sm text-blue-700 space-y-1">
          <li><strong>Server Component 直接查库</strong>：适用于页面加载时获取数据（SSR/SSG），代码最简洁，无额外网络开销</li>
          <li><strong>API Route 查库</strong>：适用于客户端交互（表单提交、实时更新），或需要给外部系统调用</li>
          <li><strong>Server Action</strong>：适用于表单提交、数据变更，比 API Route 更简洁，天然类型安全</li>
        </ul>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">🟢 实战二：Drizzle ORM + MySQL</h3>
      <p class="text-slate-600 mb-3">Drizzle ORM 以零运行时开销和 TypeScript 原生体验著称，是 Prisma 的有力竞争者：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code># 安装
npm install drizzle-orm mysql2
npm install -D drizzle-kit

# 初始化配置 drizzle.config.ts</code></pre>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// db/schema.ts — 用 TypeScript 定义表结构
import { mysqlTable, int, varchar, text, boolean, timestamp, mysqlEnum } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: int('id').autoincrement().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  role: mysqlEnum('role', ['user', 'admin', 'editor']).default('user'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const posts = mysqlTable('posts', {
  id: int('id').autoincrement().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content'),
  published: boolean('published').default(false),
  authorId: int('author_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});</code></pre>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// db/index.ts — 数据库连接
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const db = drizzle(connection, { schema, mode: 'default' });</code></pre>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// app/posts/page.tsx — 使用 Drizzle 查询
import { db } from '@/db';
import { posts, users } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export default async function PostsPage() {
  const allPosts = await db
    .select({
      id: posts.id,
      title: posts.title,
      content: posts.content,
      authorName: users.name,
    })
    .from(posts)
    .leftJoin(users, eq(posts.authorId, users.id))
    .where(eq(posts.published, true))
    .orderBy(desc(posts.createdAt))
    .limit(20);

  return (
    &lt;ul&gt;
      {allPosts.map((post) =&gt; (
        &lt;li key={post.id}&gt;{post.title} — {post.authorName}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">🍃 MongoDB（NoSQL）接入</h3>
      <p class="text-slate-600 mb-3">对于文档型数据库，Next.js 配合 Mongoose 也是常见选择：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code># 安装
npm install mongoose
npm install -D @types/mongoose</code></pre>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// lib/mongodb.ts — 连接管理（带缓存单例）
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

// 利用 globalThis 缓存连接
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}</code></pre>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// models/Post.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
  title: string;
  content: string;
  authorId: string;
  published: boolean;
  createdAt: Date;
}

const PostSchema = new Schema&lt;IPost&gt;({
  title: { type: String, required: true },
  content: { type: String },
  authorId: { type: String, required: true },
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Post = mongoose.models.Post 
  || mongoose.model&lt;IPost&gt;('Post', PostSchema);</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">📊 主流数据库支持度一览</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">数据库</th>
              <th class="border border-slate-200 px-4 py-2 text-left">类型</th>
              <th class="border border-slate-200 px-4 py-2 text-left">Prisma 支持</th>
              <th class="border border-slate-200 px-4 py-2 text-left">Drizzle 支持</th>
              <th class="border border-slate-200 px-4 py-2 text-left">适用场景</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">PostgreSQL</td>
              <td class="border border-slate-200 px-4 py-2">关系型</td>
              <td class="border border-slate-200 px-4 py-2">✅ 最佳支持</td>
              <td class="border border-slate-200 px-4 py-2">✅ 最佳支持</td>
              <td class="border border-slate-200 px-4 py-2">通用首选，功能最全面</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">MySQL</td>
              <td class="border border-slate-200 px-4 py-2">关系型</td>
              <td class="border border-slate-200 px-4 py-2">✅ 完整支持</td>
              <td class="border border-slate-200 px-4 py-2">✅ 完整支持</td>
              <td class="border border-slate-200 px-4 py-2">传统项目、已有 MySQL 基础设施</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">SQLite</td>
              <td class="border border-slate-200 px-4 py-2">嵌入式</td>
              <td class="border border-slate-200 px-4 py-2">✅ 支持</td>
              <td class="border border-slate-200 px-4 py-2">✅ 原生支持</td>
              <td class="border border-slate-200 px-4 py-2">原型开发、小型项目、边缘计算</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">MongoDB</td>
              <td class="border border-slate-200 px-4 py-2">文档型</td>
              <td class="border border-slate-200 px-4 py-2">✅ 支持</td>
              <td class="border border-slate-200 px-4 py-2">❌ 不支持</td>
              <td class="border border-slate-200 px-4 py-2">灵活 Schema、快速迭代</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">PlanetScale</td>
              <td class="border border-slate-200 px-4 py-2">MySQL 兼容</td>
              <td class="border border-slate-200 px-4 py-2">✅ 支持</td>
              <td class="border border-slate-200 px-4 py-2">✅ 支持</td>
              <td class="border border-slate-200 px-4 py-2">Serverless 无服务器数据库</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">Neon / Supabase</td>
              <td class="border border-slate-200 px-4 py-2">PostgreSQL</td>
              <td class="border border-slate-200 px-4 py-2">✅ 原生支持</td>
              <td class="border border-slate-200 px-4 py-2">✅ 原生支持</td>
              <td class="border border-slate-200 px-4 py-2">Vercel 生态最佳搭配</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">Redis</td>
              <td class="border border-slate-200 px-4 py-2">KV 缓存</td>
              <td class="border border-slate-200 px-4 py-2">❌ 不支持</td>
              <td class="border border-slate-200 px-4 py-2">❌ 不支持</td>
              <td class="border border-slate-200 px-4 py-2">缓存、会话、限流（用 ioredis）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">⚡ Server Action 直接操作数据库</h3>
      <p class="text-slate-600 mb-3">Server Action 是 Next.js 推荐的表单提交方式，可以直接操作数据库，无需定义 API Route：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// app/posts/actions.ts
'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// 创建文章
export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const authorId = formData.get('authorId') as string;

  if (!title || !authorId) {
    return { error: '标题和作者为必填项' };
  }

  await prisma.post.create({
    data: {
      title,
      content: content || '',
      authorId: Number(authorId),
    },
  });

  // 刷新文章列表页面的缓存数据
  revalidatePath('/posts');
  redirect('/posts');
}

// 切换发布状态
export async function togglePublish(postId: number) {
  const post = await prisma.post.findUnique({ where: { id: postId } });
  if (!post) return { error: '文章不存在' };

  await prisma.post.update({
    where: { id: postId },
    data: { published: !post.published },
  });

  revalidatePath('/posts');
  return { success: true };
}</code></pre>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// app/posts/new/page.tsx — 使用 Server Action 的表单页面
import { createPost } from '../actions';

export default function NewPostPage() {
  return (
    &lt;form action={createPost} className="max-w-lg mx-auto space-y-4"&gt;
      &lt;div&gt;
        &lt;label&gt;标题&lt;/label&gt;
        &lt;input name="title" type="text" required 
          className="w-full border rounded px-3 py-2" /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label&gt;内容&lt;/label&gt;
        &lt;textarea name="content" rows={6}
          className="w-full border rounded px-3 py-2" /&gt;
      &lt;/div&gt;
      &lt;input type="hidden" name="authorId" value="1" /&gt;
      &lt;button type="submit" 
        className="bg-blue-600 text-white px-4 py-2 rounded"&gt;
        发布文章
      &lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">🌐 Next.js + Vercel 推荐数据库方案</h3>
      <p class="text-slate-600 mb-3">部署在 Vercel 上时，以下 Serverless 数据库有原生的连接优化：</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">🐘 Neon</h4>
          <p class="text-sm text-slate-600 mb-2">Serverless PostgreSQL，按需自动扩缩，支持分支数据库（类似 Git 分支）。Vercel 官方推荐。</p>
          <pre class="bg-slate-900 text-white p-2 rounded text-xs overflow-x-auto"><code>DATABASE_URL="postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/db?sslmode=require"</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">⚡ Supabase</h4>
          <p class="text-sm text-slate-600 mb-2">开源 Firebase 替代品，基于 PostgreSQL，内置认证、实时订阅、存储。</p>
          <pre class="bg-slate-900 text-white p-2 rounded text-xs overflow-x-auto"><code>DATABASE_URL="postgresql://postgres:pass@db.xxx.supabase.co:5432/postgres"</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">🚀 PlanetScale</h4>
          <p class="text-sm text-slate-600 mb-2">MySQL 兼容的 Serverless 数据库，支持数据库分支和在线 Schema 变更。</p>
          <pre class="bg-slate-900 text-white p-2 rounded text-xs overflow-x-auto"><code>DATABASE_URL="mysql://user:pass@aws.connect.psdb.cloud/db?sslaccept=strict"</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">📦 Upstash Redis</h4>
          <p class="text-sm text-slate-600 mb-2">Serverless Redis，适合缓存、限流、会话管理。支持 HTTP API 连接。</p>
          <pre class="bg-slate-900 text-white p-2 rounded text-xs overflow-x-auto"><code>import { Redis } from '@upstash/redis';
const redis = new Redis({
  url: 'https://xxx.upstash.io',
  token: 'xxx',
});</code></pre>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">🛡️ 安全最佳实践</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">❌ 永远不要在客户端连接数据库</h4>
          <p class="text-sm text-red-600">数据库凭据必须保持在服务端。使用 Server Component、Route Handler 或 Server Action，不要将数据库客户端引入 'use client' 组件。</p>
        </div>
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">❌ 不要拼接 SQL 字符串</h4>
          <p class="text-sm text-red-600">永远不要用字符串拼接构建 SQL 查询，这会导致 SQL 注入。始终使用 ORM 的参数化查询或 Prepared Statement。</p>
        </div>
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">✅ 使用环境变量存储凭据</h4>
          <p class="text-sm text-green-700">数据库连接字符串放在 <code class="bg-green-100 px-1 rounded">.env</code> 中，通过 <code class="bg-green-100 px-1 rounded">process.env.DATABASE_URL</code> 访问。</p>
        </div>
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">✅ 实现查询限流</h4>
          <p class="text-sm text-green-700">对数据库查询添加超时限制，防止慢查询阻塞整个应用。使用 <code class="bg-green-100 px-1 rounded">prisma.$transaction()</code> 设置超时。</p>
        </div>
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">✅ 生产环境启用连接池</h4>
          <p class="text-sm text-green-700">Serverless 环境数据库连接管理很重要。使用 <code class="bg-green-100 px-1 rounded">@prisma/client</code> 的 <code class="bg-green-100 px-1 rounded">connection_limit</code> 或 pgBouncer。</p>
        </div>
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">✅ 敏感数据脱敏</h4>
          <p class="text-sm text-green-700">查询用户数据时，使用 Prisma 的 <code class="bg-green-100 px-1 rounded">select</code> 或 <code class="bg-green-100 px-1 rounded">omit</code> 排除密码等敏感字段，确保不会意外泄露到前端。</p>
        </div>
      </div>

      <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h4 class="font-semibold text-indigo-800 mb-2">🎯 总结</h4>
        <ul class="list-disc pl-6 text-sm text-indigo-700 space-y-1">
          <li><strong>ORM 首选 Prisma 或 Drizzle</strong>：前者生态成熟、开发体验好；后者性能极致、TypeScript 原生</li>
          <li><strong>PostgreSQL 是首选数据库</strong>：功能最全面，Next.js + Vercel 生态中集成最完善</li>
          <li><strong>Server Component 直接查库</strong>：比"前端 → API → 数据库"减少一层网络开销</li>
          <li><strong>Server Action 处理写操作</strong>：表单提交、数据变更最优雅的方式，无需手动创建 API Route</li>
          <li><strong>连接单例 + 环境变量</strong>：避免连接泄露和凭据泄露</li>
        </ul>
      </div>
    `,
  },
  {
    id: 14,
    title: "中间件",
    icon: "ShieldCheck",
    content: `
      <h2 class="text-2xl font-bold mb-4">Next.js 中间件（Middleware）</h2>
      <p class="text-slate-600 mb-6">Middleware（中间件）是 Next.js 中一个强大的"门卫"机制，它在<strong>请求完成之前执行</strong>，可以拦截、修改请求，并根据逻辑返回重定向、重写或自定义响应。它运行在 <strong>Edge Runtime</strong>，延迟极低。</p>

      <div class="mb-6 p-5 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-xl">
        <h3 class="text-lg font-semibold text-purple-800 mb-3">🛡️ Middleware 的核心能力</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div class="flex items-start gap-2">
            <span class="text-purple-500 mt-0.5 text-lg">🔐</span>
            <span class="text-slate-600"><strong>认证与授权</strong> — 在请求到达页面之前验证用户身份，未登录用户自动跳转登录页</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-purple-500 mt-0.5 text-lg">🌍</span>
            <span class="text-slate-600"><strong>国际化路由</strong> — 根据请求的 Accept-Language 或 Cookie 自动重定向到对应语言版本</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-purple-500 mt-0.5 text-lg">🔀</span>
            <span class="text-slate-600"><strong>A/B 测试与特性开关</strong> — 基于 Cookie 或请求头将流量分流到不同页面版本</span>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">📁 Middleware 文件位置</h3>
      <p class="text-slate-600 mb-3">Middleware 必须是<strong>项目根级别</strong>的文件（或 <code class="bg-slate-100 px-1 rounded">src</code> 下），且只允许<strong>一个</strong>：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// ✅ 正确位置（二选一）
// 1. 根目录
// middleware.ts

// 2. src 目录下
// src/middleware.ts

// ❌ 错误：不能放在 app 目录下
// app/middleware.ts （不会生效）</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">🏗️ 基础结构</h3>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. 获取请求信息
  const { pathname } = request.nextUrl;
  const country = request.geo?.country;      // 地理位置
  const ip = request.ip;                     // 客户端 IP
  
  // 2. 业务逻辑判断
  if (pathname.startsWith('/admin')) {
    // 3. 返回响应：重定向 / 重写 / 返回 Response
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // 4. 继续请求（不拦截）
  return NextResponse.next();
}

// 5. 配置匹配规则 — 决定哪些路径触发中间件
export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">🔧 配置详解：matcher</h3>
      <p class="text-slate-600 mb-3"><code class="bg-slate-100 px-1 rounded">matcher</code> 决定了哪些请求会经过中间件处理。精准的匹配规则可避免不必要的开销：</p>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">写法</th>
              <th class="border border-slate-200 px-4 py-2 text-left">含义</th>
              <th class="border border-slate-200 px-4 py-2 text-left">示例匹配</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">'/about'</td>
              <td class="border border-slate-200 px-4 py-2">精确匹配单个路径</td>
              <td class="border border-slate-200 px-4 py-2 text-slate-500">/about</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">'/about/:path*'</td>
              <td class="border border-slate-200 px-4 py-2">匹配 /about 及其所有子路径</td>
              <td class="border border-slate-200 px-4 py-2 text-slate-500">/about, /about/team, /about/team/1</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">'/dashboard/:path*'</td>
              <td class="border border-slate-200 px-4 py-2">匹配 dashboard 及其子路由</td>
              <td class="border border-slate-200 px-4 py-2 text-slate-500">/dashboard, /dashboard/settings</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">'/:path*'</td>
              <td class="border border-slate-200 px-4 py-2"><span class="bg-red-100 text-red-700 px-1.5 py-0.5 rounded text-xs">匹配所有路径</span></td>
              <td class="border border-slate-200 px-4 py-2 text-slate-500">全部请求</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">'/((?!api|_next|static).*)'</td>
              <td class="border border-slate-200 px-4 py-2">排除 api、_next、static 开头的路径</td>
              <td class="border border-slate-200 px-4 py-2 text-slate-500">除静态资源外的所有页面</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-4">
        <h5 class="font-semibold text-amber-800 text-sm mb-1">⚠️ matcher 注意事项</h5>
        <ul class="list-disc pl-6 text-xs text-amber-700 space-y-1">
          <li>必须是<strong>常量数组</strong>，不能用变量或运行时计算的值</li>
          <li>路径必须以 <code class="bg-amber-100 px-1 rounded">/</code> 开头</li>
          <li>不支持 <code class="bg-amber-100 px-1 rounded">has</code> / <code class="bg-amber-100 px-1 rounded">missing</code>（要用条件判断写在函数体内）</li>
          <li>值必须用单引号括起来（<code class="bg-amber-100 px-1 rounded">'path'</code> 而非 <code class="bg-amber-100 px-1 rounded">"path"</code>）</li>
        </ul>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">🔐 实战一：认证守卫</h3>
      <p class="text-slate-600 mb-3">最常见的中间件场景 — 根据 Cookie/Token 判断用户是否已登录：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// 1. 定义需要保护的路径
const protectedRoutes = ['/dashboard', '/profile', '/settings'];
const authRoutes = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 2. 读取 Token（Cookie 或 Header）
  const token = request.cookies.get('token')?.value 
    || request.headers.get('Authorization')?.replace('Bearer ', '');

  const isAuthenticated = !!token; // 实际项目中应验证 Token 有效性

  // 3. 访问受保护路径但未登录 → 跳转登录页
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname); // 登录后回跳
    return NextResponse.redirect(loginUrl);
  }

  // 4. 已登录却访问登录/注册页 → 跳转首页
  if (authRoutes.some(route => pathname.startsWith(route)) && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/login',
    '/register',
  ],
};</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">🌍 实战二：国际化（i18n）路由</h3>
      <p class="text-slate-600 mb-3">根据浏览器的语言偏好自动跳转到对应语言路径：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// 支持的语言
const locales = ['zh-CN', 'en', 'ja', 'ko'];
const defaultLocale = 'zh-CN';

function getLocale(request: NextRequest): string {
  // 1. Cookie 中手动选择的语言优先级最高
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Accept-Language 请求头
  const acceptLanguage = request.headers.get('accept-language') || '';
  for (const lang of acceptLanguage.split(',')) {
    const code = lang.split(';')[0].trim();
    if (locales.includes(code)) return code;
    if (locales.includes(code.substring(0, 2))) return code.substring(0, 2);
  }

  // 3. 兜底默认语言
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 检查路径是否已包含语言前缀
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // 自动重定向到对应语言路径
  const locale = getLocale(request);
  const newUrl = new URL(\`/\${locale}\${pathname}\`, request.url);
  
  const response = NextResponse.redirect(newUrl);
  response.cookies.set('NEXT_LOCALE', locale);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">🧪 实战三：A/B 测试分流</h3>
      <p class="text-slate-600 mb-3">基于 Cookie 将用户分配到不同版本页面，用于测试新功能效果：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// A/B 测试配置
const AB_CONFIG = {
  experimentName: 'new-landing-page',
  variants: ['control', 'variant-a'] as const,
  cookieName: 'ab_experiment',
};

function getOrAssignVariant(request: NextRequest): string {
  // 已有分配，保持不变
  const existing = request.cookies.get(AB_CONFIG.cookieName)?.value;
  if (existing && AB_CONFIG.variants.includes(existing as any)) {
    return existing;
  }
  // 随机分配（50%/50%）
  return Math.random() < 0.5 ? 'control' : 'variant-a';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 只在首页做 A/B 测试
  if (pathname !== '/') return NextResponse.next();

  const variant = getOrAssignVariant(request);

  if (variant === 'variant-a') {
    // 重写到新版本页面
    const url = request.nextUrl.clone();
    url.pathname = '/landing-v2'; // 实验组看到的页面
    const response = NextResponse.rewrite(url);
    response.cookies.set(AB_CONFIG.cookieName, variant, {
      maxAge: 60 * 60 * 24 * 30, // 30 天保持一致性
      httpOnly: true,
    });
    return response;
  }

  // control 组：正常走原始页面，不做处理
  const response = NextResponse.next();
  response.cookies.set(AB_CONFIG.cookieName, variant, {
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  });
  return response;
}

export const config = {
  matcher: '/',
};</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">🛡️ 实战四：安全头注入与 Bot 拦截</h3>
      <p class="text-slate-600 mb-3">为所有响应统一添加安全头，同时拦截恶意爬虫：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// 恶意 UA 黑名单
const BLOCKED_USER_AGENTS = [
  'HeadlessChrome',
  'scraper',
  'python-requests',
  'curl',
];

// 安全头配置
const SECURITY_HEADERS: Record&lt;string, string&gt; = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-XSS-Protection': '1; mode=block',
};

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  // Bot 检测：拦截恶意爬虫
  if (BLOCKED_USER_AGENTS.some(bot => userAgent.includes(bot.toLowerCase()))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 正常请求：注入安全头
  const response = NextResponse.next();

  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // 配置 CSP（Content Security Policy）
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
  );

  return response;
}

export const config = {
  matcher: '/((?!api).*)', // 不拦截 API 路由
};</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">📊 NextResponse API 完整参考</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">方法</th>
              <th class="border border-slate-200 px-4 py-2 text-left">作用</th>
              <th class="border border-slate-200 px-4 py-2 text-left">HTTP 状态码</th>
              <th class="border border-slate-200 px-4 py-2 text-left">典型场景</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">NextResponse.next()</td>
              <td class="border border-slate-200 px-4 py-2">放行，继续处理请求</td>
              <td class="border border-slate-200 px-4 py-2">—</td>
              <td class="border border-slate-200 px-4 py-2">仅需读取/修改 headers</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">NextResponse.redirect(url)</td>
              <td class="border border-slate-200 px-4 py-2">重定向到新 URL</td>
              <td class="border border-slate-200 px-4 py-2">307（临时）</td>
              <td class="border border-slate-200 px-4 py-2">登录跳转、语言跳转</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">NextResponse.rewrite(url)</td>
              <td class="border border-slate-200 px-4 py-2">内部重写，URL 不变</td>
              <td class="border border-slate-200 px-4 py-2">—</td>
              <td class="border border-slate-200 px-4 py-2">A/B 测试、代理、子路径托管</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">NextResponse.json(body)</td>
              <td class="border border-slate-200 px-4 py-2">返回 JSON 响应</td>
              <td class="border border-slate-200 px-4 py-2">200</td>
              <td class="border border-slate-200 px-4 py-2">API 拦截、健康检查</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-mono text-xs">new NextResponse(body)</td>
              <td class="border border-slate-200 px-4 py-2">返回自定义响应</td>
              <td class="border border-slate-200 px-4 py-2">自定义</td>
              <td class="border border-slate-200 px-4 py-2">拦截返回 403/404/429</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">⚡ 实战五：限流（Rate Limiting）</h3>
      <p class="text-slate-600 mb-3">在 Edge Runtime 中实现轻量级限流，保护 API 路由：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-4"><code>// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// 简单的内存限流器（适合单实例 / Demo）
// 生产环境推荐 Upstash Redis 或 Vercel KV
const rateLimitMap = new Map&lt;string, { count: number; resetTime: number }&gt;();

const RATE_LIMIT = 10;      // 窗口内最大请求数
const WINDOW_MS = 60_000;    // 窗口 60 秒

export function middleware(request: NextRequest) {
  // 只对 API 路由限流
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  // 获取或初始化该 IP 的限流记录
  let record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    record = { count: 0, resetTime: now + WINDOW_MS };
    rateLimitMap.set(ip, record);
  }

  record.count++;

  // 设置限流头
  const response = record.count > RATE_LIMIT
    ? new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((record.resetTime - now) / 1000)),
        },
      })
    : NextResponse.next();

  response.headers.set('X-RateLimit-Limit', String(RATE_LIMIT));
  response.headers.set('X-RateLimit-Remaining', String(Math.max(0, RATE_LIMIT - record.count)));
  response.headers.set('X-RateLimit-Reset', String(Math.ceil(record.resetTime / 1000)));

  return response;
}

export const config = {
  matcher: '/api/:path*',
};</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">⚙️ Edge Runtime 约束</h3>
      <p class="text-slate-600 mb-3">Middleware 运行在 <strong>Edge Runtime</strong>，与 Node.js 环境有显著差异：</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 border border-green-100 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">✅ 支持的操作</h4>
          <ul class="list-disc pl-6 text-sm text-green-700 space-y-1">
            <li>读取/设置 Cookie</li>
            <li>读取/设置 Headers</li>
            <li>URL 重定向/重写</li>
            <li><code class="bg-green-100 px-1 rounded">fetch</code> 请求外部 API</li>
            <li>读取 <code class="bg-green-100 px-1 rounded">geo</code>、<code class="bg-green-100 px-1 rounded">ip</code></li>
            <li>简单的字符串/对象判断</li>
          </ul>
        </div>
        <div class="p-4 border border-red-100 bg-red-50 rounded-lg">
          <h4 class="font-semibold text-red-800 mb-2">❌ 不支持的操作</h4>
          <ul class="list-disc pl-6 text-sm text-red-700 space-y-1">
            <li>Node.js 原生模块（<code class="bg-red-100 px-1 rounded">fs</code>、<code class="bg-red-100 px-1 rounded">net</code>、<code class="bg-red-100 px-1 rounded">crypto</code>）</li>
            <li>直接操作数据库（应通过 API 转发）</li>
            <li><code class="bg-red-100 px-1 rounded">process.env</code> 动态环境变量</li>
            <li>长时间运行的同步操作</li>
            <li><code class="bg-red-100 px-1 rounded">eval</code> / <code class="bg-red-100 px-1 rounded">new Function</code></li>
          </ul>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">🔄 中间件执行流程图</h3>
      <div class="p-6 bg-white border border-slate-200 rounded-lg mb-6">
        <div class="flex flex-col items-center gap-3 text-sm">
          <div class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold w-full text-center">🌐 用户请求</div>
          <div class="text-slate-400 text-lg">⬇️</div>
          <div class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold w-full text-center">🛡️ Middleware（Edge Runtime）<br/><span class="text-xs font-normal opacity-90">认证 / 重定向 / 重写 / 限流 / Headers</span></div>
          <div class="text-slate-400 text-lg">⬇️</div>
          <div class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold w-full text-center">📄 页面 / API Route（Node.js Runtime）</div>
          <div class="text-slate-400 text-lg">⬇️</div>
          <div class="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold w-full text-center">✅ 响应返回</div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">💡 最佳实践</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">🎯 精准匹配，避免全量拦截</h4>
          <p class="text-sm text-slate-600">不要用 <code class="bg-slate-100 px-1 rounded">/:path*</code> 匹配所有请求。精确的 <code class="bg-slate-100 px-1 rounded">matcher</code> 可避免对静态资源、<code class="bg-slate-100 px-1 rounded">_next</code> 文件的不必要拦截。</p>
          <pre class="bg-slate-900 text-white p-2 rounded text-xs overflow-x-auto mt-2"><code>// ✅ 好：精确匹配
matcher: ['/admin/:path*', '/dashboard/:path*']

// ❌ 差：全量匹配（影响性能）
matcher: '/:path*'</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">⚡ 保持轻量快速</h4>
          <p class="text-sm text-slate-600">Middleware 在每次匹配请求时都执行，必须快速完成。避免复杂的计算和多次串行 <code class="bg-slate-100 px-1 rounded">fetch</code>，考虑缓存策略。</p>
          <pre class="bg-slate-900 text-white p-2 rounded text-xs overflow-x-auto mt-2"><code>// ❌ 坏：串行多次 fetch
const a = await fetch(url1);
const b = await fetch(url2);  // 等待 a 完成

// ✅ 好：并行 fetch
const [a, b] = await Promise.all([
  fetch(url1), fetch(url2)
]);</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">🔍 善用条件判断前置</h4>
          <p class="text-sm text-slate-600">尽早用 <code class="bg-slate-100 px-1 rounded">if</code> 排除不需要处理的路径，让大部分请求快速通过。</p>
          <pre class="bg-slate-900 text-white p-2 rounded text-xs overflow-x-auto mt-2"><code>export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 快速排除公共资源
  if (pathname.startsWith('/public/')) return;
  if (pathname.includes('.')) return; // 静态文件
  
  // 实际逻辑...
}</code></pre>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg">
          <h4 class="font-semibold mb-2">🔄 避免在中间件中做数据变更</h4>
          <p class="text-sm text-slate-600">Middleware 在 Edge Runtime 中没有持久化存储，不应直接写数据库。数据变更放到 Server Action 或 API Route 中。</p>
          <pre class="bg-slate-900 text-white p-2 rounded text-xs overflow-x-auto mt-2"><code>// ❌ 不要在 middleware 中写数据库
await db.posts.create(...)  // Edge 环境不可用

// ✅ 通过 API Route 转发
const res = await fetch('/api/log', { ... })</code></pre>
        </div>
      </div>

      <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h4 class="font-semibold text-indigo-800 mb-2">🎯 总结</h4>
        <ul class="list-disc pl-6 text-sm text-indigo-700 space-y-1">
          <li><strong>Middleware 是请求的第一道防线</strong>：在页面/API 处理之前执行</li>
          <li><strong>运行在 Edge Runtime</strong>：延迟极低，但也有使用限制（没有 Node.js API）</li>
          <li><strong>核心场景</strong>：认证守卫、国际化路由、A/B 测试、安全头注入、限流</li>
          <li><strong>精准 matcher</strong>：只拦截需要处理的路径，避免性能浪费</li>
          <li><strong>保持轻量</strong>：Middleware 每次请求都执行，复杂逻辑移到 API Route 或 Server Action</li>
          <li><strong>与 Server Action 职责分离</strong>：Middleware 负责"拦截和路由"，Server Action 负责"数据变更"</li>
        </ul>
      </div>
    `,
  },
];

export function getTopicById(id: number): Topic | undefined {
  return topics.find((topic) => topic.id === id);
}
