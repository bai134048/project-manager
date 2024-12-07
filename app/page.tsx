"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import ProjectOverview from "./components/project-overview"
import SprintManagement from "./components/sprint-management"
import ProductBacklog from "./components/product-backlog"
import KanbanBoard from "./components/kanban-board"
import TeamManagement from "./components/team-management"
import BurndownChart from "./components/burndown-chart"
import GitHubIntegration from "./components/github-integration"
import CustomerList from "./components/customer-list"
import Documentation from "./components/documentation"
import BusinessOverview from "./components/business-overview"
import DesignOverview from "./components/design-overview"
import ApiOverview from "./components/api-overview"
import BatchOverview from "./components/batch-overview"

export default function ScrumDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'プロジェクト概要', color: 'bg-blue-500' },
    { id: 'sprint', label: 'スプリント管理', color: 'bg-green-500' },
    { id: 'backlog', label: 'バックログ', color: 'bg-yellow-500' },
    { id: 'kanban', label: 'カンバンボード', color: 'bg-purple-500' },
    { id: 'team', label: 'チーム管理', color: 'bg-pink-500' },
    { id: 'burndown', label: 'バーンダウン', color: 'bg-red-500' },
    { id: 'github', label: 'GitHub', color: 'bg-gray-500' },
    { id: 'customers', label: '顧客一覧', color: 'bg-indigo-500' },
    { id: 'docs', label: 'ドキュメント', color: 'bg-teal-500' },
    { id: 'business', label: '商業', color: 'bg-orange-500' },
    { id: 'design', label: 'デザイン', color: 'bg-cyan-500' },
    { id: 'api', label: 'API', color: 'bg-lime-500' },
    { id: 'batch', label: 'バッチ', color: 'bg-amber-500' },
  ]

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">スクラム開発</h1>
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`w-full justify-start ${activeTab === tab.id ? tab.color : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && <ProjectOverview />}
          {activeTab === 'sprint' && <SprintManagement />}
          {activeTab === 'backlog' && <ProductBacklog />}
          {activeTab === 'kanban' && <KanbanBoard />}
          {activeTab === 'team' && <TeamManagement />}
          {activeTab === 'burndown' && <BurndownChart />}
          {activeTab === 'github' && <GitHubIntegration />}
          {activeTab === 'customers' && <CustomerList />}
          {activeTab === 'docs' && <Documentation />}
          {activeTab === 'business' && <BusinessOverview />}
          {activeTab === 'design' && <DesignOverview />}
          {activeTab === 'api' && <ApiOverview />}
          {activeTab === 'batch' && <BatchOverview />}
        </div>
      </main>
    </div>
  )
}

