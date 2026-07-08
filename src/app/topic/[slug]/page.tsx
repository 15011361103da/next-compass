import { notFound } from "next/navigation";
import { topics, iconMap, getTopicById } from "@/data/topics";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return topics.map((topic) => ({
    slug: String(topic.id),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicById(Number(slug));
  return {
    title: topic ? `${topic.title} - Next.js 培训系统` : "页面未找到",
    description: topic?.title ?? "Next.js 核心内部分享培训演示系统",
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topicId = Number(slug);
  const topic = getTopicById(topicId);

  if (!topic) {
    notFound();
  }

  const IconComponent = iconMap[topic.icon];

  return (
    <div className="animate-fade-in">
      <div className="bg-white border-b border-slate-200 px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link
            href="/topic/0"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <Home size={14} />
            <span>首页</span>
          </Link>
          <ChevronRight size={14} />
          <span className="text-slate-700 font-medium">{topic.title}</span>
        </div>
      </div>

      <div className="p-8">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <IconComponent size={24} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">
                第 {topic.id} 章
              </div>
              <h1 className="text-2xl font-bold text-slate-800">
                {topic.title}
              </h1>
            </div>
          </div>

          <div
            className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-slate-700 prose-code:text-sm prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-white prose-pre:rounded-lg prose-pre:shadow-inner"
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />

          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
            {topicId > 0 ? (
              <Link
                href={`/topic/${topicId - 1}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ChevronRight
                  size={16}
                  className="rotate-180"
                />
                上一章
              </Link>
            ) : (
              <div />
            )}
            {topicId < topics.length - 1 ? (
              <Link
                href={`/topic/${topicId + 1}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                下一章
                <ChevronRight size={16} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
