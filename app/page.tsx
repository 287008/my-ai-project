import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 顶部导航 */}
      <nav className="p-6 max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">STUDIO AI</h1>
        <div className="space-x-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black">Projects</a>
          <a href="#" className="hover:text-black">Insights</a>
        </div>
      </nav>

      {/* 主体内容 */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        <header className="mb-16">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            止于至善。<br />
            <span className="text-blue-600">Pursue Excellence.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            专注于 AI 内容创作与金融科技分析。通过算法与创意的结合，
            重塑数字品牌的影响力。
          </p>
        </header>

        {/* 内容板块 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">📊 AI 内容创作</h3>
            <p className="text-gray-600 leading-relaxed">
              利用 NotebookLM 与最新多模态模型，优化视频脚本与音频概览。
              打造高效、专业的社交媒体内容流。
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">📈 金融科技分析</h3>
            <p className="text-gray-600 leading-relaxed">
              深耕美股 News 与 AI 洞察，将复杂的 13F 数据与财报转化为
              直观的数字资产。
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-20 p-10 border-t border-gray-200 text-center text-sm text-gray-400">
        © 2026 How To Best. Built with Gemini & Firebase.
      </footer>
    </div>
  );
}
