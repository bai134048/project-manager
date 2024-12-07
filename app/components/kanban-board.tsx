import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function KanbanBoard() {
  const columns = [
    { title: "To Do", color: "bg-red-100 dark:bg-red-900", tasks: [
      { id: 1, title: "タスク1", priority: "高", assignee: "田中" },
      { id: 2, title: "タスク2", priority: "中", assignee: "佐藤" },
      { id: 3, title: "タスク3", priority: "低", assignee: "鈴木" },
    ]},
    { title: "In Progress", color: "bg-yellow-100 dark:bg-yellow-900", tasks: [
      { id: 4, title: "タスク4", priority: "高", assignee: "高橋" },
      { id: 5, title: "タスク5", priority: "中", assignee: "伊藤" },
    ]},
    { title: "Review", color: "bg-blue-100 dark:bg-blue-900", tasks: [
      { id: 6, title: "タスク6", priority: "中", assignee: "渡辺" },
    ]},
    { title: "Done", color: "bg-green-100 dark:bg-green-900", tasks: [
      { id: 7, title: "タスク7", priority: "高", assignee: "山本" },
      { id: 8, title: "タスク8", priority: "低", assignee: "中村" },
    ]},
  ]

  const priorityColors = {
    高: "bg-red-500",
    中: "bg-yellow-500",
    低: "bg-green-500",
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {columns.map((column, index) => (
        <Card key={index} className={`w-80 flex-shrink-0 ${column.color}`}>
          <CardHeader>
            <CardTitle>{column.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {column.tasks.map((task) => (
              <div key={task.id} className="bg-white dark:bg-gray-800 p-3 mb-2 rounded-lg shadow">
                <h3 className="font-semibold mb-2">{task.title}</h3>
                <div className="flex justify-between items-center">
                  <Badge className={priorityColors[task.priority]}>{task.priority}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{task.assignee}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

