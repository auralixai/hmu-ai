'use client';

import { useState, useEffect } from "react";
import { Bot, Code, Hammer, Briefcase, DollarSign, Activity, CheckSquare, Plus, Trash2, Calendar, Clock } from "lucide-react";
import Link from "next/link";

type Agent = 'Overview' | 'Architect' | 'Builder' | 'Money' | 'Operator';

interface Task {
  id: string;
  agent: Agent;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
}

interface LogEntry {
  id: string;
  agent: Agent;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export default function MissionControl() {
  const [activeTab, setActiveTab] = useState<Agent>('Overview');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // Load initial simulated data
  useEffect(() => {
    setTasks([
      { id: '1', agent: 'Builder', title: 'Implement custom Mission Control UI', status: 'done' },
      { id: '2', agent: 'Builder', title: 'Connect to Google Calendar', status: 'in-progress' },
      { id: '3', agent: 'Operator', title: 'Daily memory consolidation', status: 'todo' },
      { id: '4', agent: 'Money', title: 'Check daily revenue report', status: 'todo' },
      { id: '5', agent: 'Architect', title: 'Plan new feature architecture', status: 'todo' }
    ]);
    
    setLogs([
      { id: '1', agent: 'Overview', timestamp: new Date(Date.now() - 3600000).toISOString(), message: 'System initialized successfully.', type: 'success' },
      { id: '2', agent: 'Builder', timestamp: new Date(Date.now() - 1800000).toISOString(), message: 'Deploying Vercel preview...', type: 'info' },
      { id: '3', agent: 'Operator', timestamp: new Date(Date.now() - 900000).toISOString(), message: 'Memory sync completed.', type: 'success' },
    ]);
  }, []);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim() || activeTab === 'Overview') return;
    setTasks([...tasks, {
      id: Math.random().toString(36).substr(2, 9),
      agent: activeTab,
      title: newTaskTitle,
      status: 'todo'
    }]);
    setNewTaskTitle('');
  };

  const moveTask = (id: string, newStatus: Task['status']) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const activeTasks = activeTab === 'Overview' ? tasks : tasks.filter(t => t.agent === activeTab);
  const activeLogs = activeTab === 'Overview' ? logs : logs.filter(t => t.agent === activeTab || t.agent === 'Overview');

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      <aside className="w-64 border-r border-gray-800 p-4 flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-2 px-2 py-4 hover:opacity-80 transition-opacity">
          <Bot className="h-6 w-6 text-blue-500" />
          <span className="font-bold text-lg">Mission Control</span>
        </Link>
        <nav className="flex flex-col gap-2">
          <button onClick={() => setActiveTab('Overview')} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'Overview' ? 'bg-gray-900 text-blue-400' : 'hover:bg-gray-900 text-gray-400'}`}>
            <Activity className="h-4 w-4"/> Overview
          </button>
          <button onClick={() => setActiveTab('Architect')} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'Architect' ? 'bg-gray-900 text-blue-400' : 'hover:bg-gray-900 text-gray-400'}`}>
            <Briefcase className="h-4 w-4"/> Architect
          </button>
          <button onClick={() => setActiveTab('Builder')} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'Builder' ? 'bg-gray-900 text-blue-400' : 'hover:bg-gray-900 text-gray-400'}`}>
            <Hammer className="h-4 w-4"/> Builder
          </button>
          <button onClick={() => setActiveTab('Money')} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'Money' ? 'bg-gray-900 text-blue-400' : 'hover:bg-gray-900 text-gray-400'}`}>
            <DollarSign className="h-4 w-4"/> Money
          </button>
          <button onClick={() => setActiveTab('Operator')} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'Operator' ? 'bg-gray-900 text-blue-400' : 'hover:bg-gray-900 text-gray-400'}`}>
            <Code className="h-4 w-4"/> Operator
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-8 flex flex-col h-screen overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{activeTab} Dashboard</h1>
          <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm border border-green-500/20 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            System Nominal
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
          
          {/* Kanban Board */}
          <div className="lg:col-span-2 flex flex-col gap-4 border border-gray-800 rounded-xl bg-gray-950 p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold flex items-center gap-2"><CheckSquare className="w-5 h-5 text-blue-400"/> Tasks</h2>
              {activeTab !== 'Overview' && (
                <form onSubmit={addTask} className="flex gap-2">
                  <input type="text" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} placeholder="New task..." className="bg-gray-900 border border-gray-800 rounded px-3 py-1 text-sm focus:outline-none focus:border-blue-500"/>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-1.5 rounded"><Plus className="w-4 h-4 text-white"/></button>
                </form>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 flex-1 overflow-hidden">
              {['todo', 'in-progress', 'done'].map((status) => (
                <div key={status} className="bg-gray-900/50 rounded-lg p-3 flex flex-col gap-2 overflow-y-auto">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase">{status.replace('-', ' ')}</h3>
                  {activeTasks.filter(t => t.status === status).map(task => (
                    <div key={task.id} className="bg-gray-800 p-3 rounded border border-gray-700 shadow-sm text-sm group">
                      <div className="mb-2 text-gray-200">{task.title}</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">{task.agent}</span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {status !== 'todo' && <button onClick={() => moveTask(task.id, 'todo')} className="text-gray-400 hover:text-white">&larr;</button>}
                          {status !== 'done' && <button onClick={() => moveTask(task.id, status === 'todo' ? 'in-progress' : 'done')} className="text-gray-400 hover:text-white">&rarr;</button>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6 h-full min-h-0">
            {/* Activity Feed */}
            <div className="flex-1 flex flex-col gap-4 border border-gray-800 rounded-xl bg-gray-950 p-6 min-h-0">
              <h2 className="text-xl font-semibold flex items-center gap-2"><Activity className="w-5 h-5 text-purple-400"/> Activity Feed</h2>
              <div className="flex-1 overflow-y-auto space-y-3 font-mono text-xs pr-2">
                {activeLogs.map(log => (
                  <div key={log.id} className="border-l-2 border-gray-700 pl-3 py-1">
                    <span className="text-gray-500 block mb-1">{new Date(log.timestamp).toLocaleTimeString()} • {log.agent}</span>
                    <span className={log.type === 'success' ? 'text-green-400' : log.type === 'info' ? 'text-gray-300' : 'text-yellow-400'}>{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="h-1/3 flex flex-col gap-4 border border-gray-800 rounded-xl bg-gray-950 p-6 min-h-[200px]">
              <h2 className="text-xl font-semibold flex items-center gap-2"><Calendar className="w-5 h-5 text-orange-400"/> Calendar</h2>
              <div className="flex-1 overflow-y-auto space-y-3 text-sm">
                <div className="flex items-start gap-3 p-2 bg-gray-900/50 rounded">
                  <Clock className="w-4 h-4 text-orange-400 mt-0.5"/>
                  <div>
                    <p className="font-medium text-gray-200">System Sync</p>
                    <p className="text-xs text-gray-500">10:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 hover:bg-gray-900/50 rounded transition-colors">
                  <Clock className="w-4 h-4 text-gray-600 mt-0.5"/>
                  <div>
                    <p className="font-medium text-gray-200">Weekly Review</p>
                    <p className="text-xs text-gray-500">2:00 PM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
