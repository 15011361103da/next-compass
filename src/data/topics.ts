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
};

export const topics: Topic[] = [
  {
    id: 0,
    title: "📖 大纲总览",
    icon: "LayoutDashboard",
    content: `
      <h2 class="text-2xl font-bold mb-4">Next.js 核心大纲</h2>
      <p class="text-slate-600 mb-6">本培训将带你系统掌握 Next.js 的核心概念与最佳实践。以下是本次培训的全部章节：</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors">
          <h3 class="font-semibold text-slate-800">第一章：基础概念</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• 什么是 SSR？</li>
            <li>• SSR 的应用场景</li>
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
            <li>• 布局与模板</li>
            <li>• 页面元数据</li>
            <li>• 路由分组</li>
          </ul>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors">
          <h3 class="font-semibold text-slate-800">第四章：部署</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• Vercel 自动部署</li>
          </ul>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors md:col-span-2">
          <h3 class="font-semibold text-slate-800">第五章：高级路由</h3>
          <ul class="mt-2 text-sm text-slate-600 space-y-1">
            <li>• 动态路由 (Dynamic Routes)</li>
            <li>• 平行路由 (Parallel Routes)</li>
            <li>• 拦截路由 (Intercepting Routes)</li>
          </ul>
        </div>
      </div>
      <p class="mt-6 text-slate-500 text-sm">💡 点击左侧菜单开始学习，每章都包含理论说明和代码示例。</p>
    `,
  },
  {
    id: 1,
    title: "什么是 SSR?",
    icon: "Server",
    content: `
      <h2 class="text-2xl font-bold mb-4">什么是 SSR？</h2>
      <p class="text-slate-600 mb-4">SSR（Server-Side Rendering，服务端渲染）是指页面的 HTML 内容由服务器端生成，然后发送给客户端的技术。</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">CSR vs SSR vs SSG 对比</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-4 py-2 text-left">特性</th>
              <th class="border border-slate-200 px-4 py-2 text-left">CSR (客户端渲染)</th>
              <th class="border border-slate-200 px-4 py-2 text-left">SSR (服务端渲染)</th>
              <th class="border border-slate-200 px-4 py-2 text-left">SSG (静态生成)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">首屏性能</td>
              <td class="border border-slate-200 px-4 py-2">慢</td>
              <td class="border border-slate-200 px-4 py-2">快</td>
              <td class="border border-slate-200 px-4 py-2">最快</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">SEO 友好</td>
              <td class="border border-slate-200 px-4 py-2">差</td>
              <td class="border border-slate-200 px-4 py-2">好</td>
              <td class="border border-slate-200 px-4 py-2">最好</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">数据实时性</td>
              <td class="border border-slate-200 px-4 py-2">实时</td>
              <td class="border border-slate-200 px-4 py-2">每次请求</td>
              <td class="border border-slate-200 px-4 py-2">构建时</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-2 font-medium">服务器压力</td>
              <td class="border border-slate-200 px-4 py-2">小</td>
              <td class="border border-slate-200 px-4 py-2">大</td>
              <td class="border border-slate-200 px-4 py-2">无</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">Next.js 如何解决首屏加载与 SEO 问题</h3>
      <p class="text-slate-600 mb-4">Next.js 默认在服务端渲染页面，生成完整的 HTML 后发送给浏览器，这样：</p>
      <ul class="list-disc pl-6 text-slate-600 mb-4 space-y-1">
        <li>搜索引擎爬虫可以直接抓取到完整的页面内容，提升 SEO 效果</li>
        <li>用户能更快看到页面内容，减少白屏时间</li>
        <li>配合 React Hydration，页面在客户端激活后获得完整的交互能力</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">核心代码示例</h3>
      <p class="text-slate-600 mb-2">Next.js App Router 中，默认所有组件都是 Server Component（服务端组件）：</p>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto"><code>// app/page.tsx
// 默认就是服务端组件，无需额外配置
async function HomePage() {
  // 直接在组件中获取数据（服务端执行）
  const data = await fetch('https://api.example.com/data').then(res => res.json());

  return (
    &lt;main&gt;
      &lt;h1&gt;Hello Next.js&lt;/h1&gt;
      &lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;
    &lt;/main&gt;
  );
}

export default HomePage;</code></pre>
    `,
  },
  {
    id: 2,
    title: "SSR 的应用场景",
    icon: "Target",
    content: `
      <h2 class="text-2xl font-bold mb-4">SSR 的应用场景</h2>
      <p class="text-slate-600 mb-6">SSR 并不是万能的，选择合适的渲染方式对项目性能和开发体验都至关重要。以下是 SSR 最常见的应用场景。</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">🛒 电商商品详情页</h3>
      <p class="text-slate-600 mb-3">电商网站的商品页面需要良好的 SEO 以吸引搜索流量，同时商品价格和库存需要实时更新。</p>
      <ul class="list-disc pl-6 text-slate-600 mb-4 space-y-1">
        <li>商品标题、描述、图片需要被搜索引擎索引</li>
        <li>价格、库存等信息需要实时准确</li>
        <li>首屏加载速度直接影响转化率</li>
      </ul>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-6"><code>// app/products/[id]/page.tsx
async function ProductPage({ params }: { params: { id: string } }) {
  // 每次请求都获取最新的商品数据
  const product = await fetch(
    \`https://api.example.com/products/\${params.id}\`,
    { cache: 'no-store' } // 不缓存，每次都重新获取
  ).then(res => res.json());

  return (
    &lt;div className="product-detail"&gt;
      &lt;h1&gt;{product.name}&lt;/h1&gt;
      &lt;p className="price"&gt;¥{product.price}&lt;/p&gt;
      &lt;p&gt;库存: {product.stock}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default ProductPage;</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">📝 CMS 内容展示页面</h3>
      <p class="text-slate-600 mb-3">新闻、博客、文档等内容型网站，核心诉求是 SEO 和快速的内容分发。</p>
      <ul class="list-disc pl-6 text-slate-600 mb-4 space-y-1">
        <li>文章内容需要被搜索引擎收录</li>
        <li>内容更新后用户应尽快看到</li>
        <li>社交分享时需要正确的预览图和描述</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">📣 营销活动页面</h3>
      <p class="text-slate-600 mb-3">需要社交分享的营销页面、落地页（Landing Page）等。</p>
      <ul class="list-disc pl-6 text-slate-600 mb-4 space-y-1">
        <li>分享到微信、Twitter 等平台时需要正确的 Open Graph 标签</li>
        <li>活动数据（倒计时、库存）需要实时更新</li>
        <li>页面加载速度影响用户留存</li>
      </ul>
      <pre class="bg-slate-900 text-white p-4 rounded text-sm overflow-x-auto mb-6"><code>// app/campaign/summer/page.tsx
import { Metadata } from 'next';

export async function generateMetadata(): Promise&lt;Metadata&gt; {
  const campaign = await fetchCampaignData();
  return {
    title: campaign.title,
    description: campaign.description,
    openGraph: {
      title: campaign.title,
      description: campaign.description,
      images: [campaign.coverImage],
    },
  };
}

// 页面组件同样在服务端渲染
export default async function SummerCampaign() {
  const data = await fetchCampaignData();
  return &lt;div&gt;{/* 营销页面内容 */}&lt;/div&gt;;
}</code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-3">💡 什么时候不适合用 SSR？</h3>
      <ul class="list-disc pl-6 text-slate-600 space-y-1">
        <li>纯后台管理系统（对 SEO 无要求，用户登录后才能访问）</li>
        <li>高度交互的应用（如在线编辑器、游戏），可采用 CSR + 局部 SSR</li>
        <li>数据变化不频繁的静态内容，优先使用 SSG（静态生成）</li>
      </ul>
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
      <h2 class="text-2xl font-bold mb-4">10. API 接口开发</h2>
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
];

export function getTopicById(id: number): Topic | undefined {
  return topics.find((topic) => topic.id === id);
}
