'use client';

import { useState, useEffect, useRef } from 'react';
import { Calendar, CheckSquare, Activity, Clock, Plus, MoveRight, CheckCircle2, Trash2 } from 'lucide-react';

// Types
interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
}

interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  location?: string;
}

export default function MissionControl() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loadingCalendar, setLoadingCalendar] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Load tasks from local storage
  useEffect(() => {
    const savedTasks = localStorage.getItem('mission-control-tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks([
        { id: '1', title: 'Implement Mission Control UI', status: 'in-progress' },
        { id: '2', title: 'Connect to Google Calendar', status: 'todo' },
        { id: '3', title: 'Deploy to Vercel', status: 'todo' },
      ]);
    }
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('mission-control-tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Simulate live agent activity log
  useEffect(() => {
    const activities = [
      { msg: 'Checking email inbox...', type: 'info' },
      { msg: 'No new urgent emails found.', type: 'success' },
      { msg: 'Analyzing project dependencies...', type: 'info' },
      { msg: 'Health check completed: All systems normal.', type: 'success' },
      { msg: 'Memory usage at 45%.', type: 'warning' },
      { msg: 'Syncing local changes...', type: 'info' },
      { msg: 'Waiting for user input...', type: 'info' },
    ];

    const interval = setInterval(() => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      const newLog: LogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        message: randomActivity.msg,
        type: randomActivity.type as any,
      };
      setLogs(prev => [...prev.slice(-49), newLog]); // Keep last 50
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Fetch calendar data from API
  useEffect(() => {
    const fetchCalendar = async () => {
      setLoadingCalendar(true);
      try {
        const res = await fetch('/api/calendar');
        if (!res.ok) throw new Error('Failed to fetch calendar');
        const data = await res.json();
        if (data.events) {
          setEvents(data.events.map((e: any) => ({
            id: e.id || Math.random().toString(),
            title: e.title || 'Untitled Event',
            start: e.start || new Date().toISOString(),
            end: e.end || new Date().toISOString(),
            location: e.location
          })));
        }
      } catch (err) {
        console.error('Error loading calendar:', err);
      } finally {
        setLoadingCalendar(false);
      }
    };
    fetchCalendar();
  }, []);

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTaskTitle,
      status: 'todo',
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8 font-sans">
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Mission Control
          </h1>
          <p className="text-gray-400 mt-1">Agent Operations Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 px-3 py-1.5 bg-gray-900 rounded-full border border-gray-800">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            System Online
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)] min-h-[600px]">
        
        {/* Kanban Board */}
        <div className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-xl p-4 md:p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-blue-400" />
              Tasks
            </h2>
            <form onSubmit={addTask} className="flex gap-2">
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="New task..."
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 w-40 md:w-60"
              />
              <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <Plus className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 overflow-y-auto md:overflow-hidden pb-2">
            {/* Todo Column */}
            <div className="bg-gray-900/50 rounded-lg p-3 md:p-4 flex flex-col gap-3 min-h-[200px]">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">To Do</h3>
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {tasks.filter(t => t.status === 'todo').map(task => (
                  <div key={task.id} className="bg-gray-800 p-3 rounded border border-gray-700 hover:border-blue-500/50 transition-all group shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-medium text-gray-200">{task.title}</p>
                      <button onClick={() => deleteTask(task.id)} className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => moveTask(task.id, 'in-progress')} className="text-xs flex items-center gap-1 text-gray-400 hover:text-blue-400 bg-gray-700/50 px-2 py-1 rounded">
                        Start <MoveRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress Column */}
            <div className="bg-gray-900/50 rounded-lg p-3 md:p-4 flex flex-col gap-3 min-h-[200px]">
              <h3 className="text-xs font-semibold text-blue-400/80 uppercase tracking-wider mb-1">In Progress</h3>
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {tasks.filter(t => t.status === 'in-progress').map(task => (
                  <div key={task.id} className="bg-gray-800 p-3 rounded border-l-2 border-l-blue-500 border-y border-r border-gray-700 hover:border-blue-500/50 transition-all group shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2 pl-1">
                      <p className="text-sm font-medium text-gray-200">{task.title}</p>
                      <button onClick={() => deleteTask(task.id)} className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button onClick={() => moveTask(task.id, 'done')} className="text-xs flex items-center gap-1 text-gray-400 hover:text-green-400 bg-gray-700/50 px-2 py-1 rounded">
                        Done <CheckCircle2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Done Column */}
            <div className="bg-gray-900/50 rounded-lg p-3 md:p-4 flex flex-col gap-3 min-h-[200px]">
              <h3 className="text-xs font-semibold text-green-400/80 uppercase tracking-wider mb-1">Done</h3>
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {tasks.filter(t => t.status === 'done').map(task => (
                  <div key={task.id} className="bg-gray-800/30 p-3 rounded border border-gray-800/50 opacity-60 hover:opacity-100 transition-opacity group">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium line-through text-gray-500">{task.title}</p>
                      <button onClick={() => deleteTask(task.id)} className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Activity & Calendar */}
        <div className="flex flex-col gap-6 h-full overflow-hidden">
          
          {/* Activity Log */}
          <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-4 md:p-6 flex flex-col min-h-0 shadow-sm">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-purple-400" />
              Live Activity
            </h2>
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent font-mono text-xs">
              {logs.length === 0 && <p className="text-gray-600 italic">Waiting for activity...</p>}
              {logs.map(log => (
                <div key={log.id} className="border-l-2 border-gray-700 pl-3 py-1 hover:bg-gray-800/30 rounded-r transition-colors">
                  <span className="text-[10px] text-gray-500 block mb-0.5">
                    {new Date(log.timestamp).toLocaleTimeString([], {hour12: false, hour:'2-digit', minute:'2-digit', second:'2-digit'})}
                  </span>
                  <p className={`${log.type === 'error' ? 'text-red-400' : log.type === 'success' ? 'text-green-400' : log.type === 'warning' ? 'text-yellow-400' : 'text-gray-300'}`}>
                    {log.message}
                  </p>
                </div>
              ))}
              <div ref={logsEndRef} />
            </div>
          </div>

          {/* Calendar Widget */}
          <div className="h-1/3 min-h-[200px] bg-gray-900/50 border border-gray-800 rounded-xl p-4 md:p-6 flex flex-col shadow-sm">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-orange-400" />
              Schedule
            </h2>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
              {loadingCalendar ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <span className="animate-spin mr-2">⏳</span>
                </div>
              ) : events.length > 0 ? (
                events.map(event => (
                  <div key={event.id} className="flex items-start gap-3 group p-2 hover:bg-gray-800/40 rounded-lg transition-colors">
                    <div className="mt-1">
                      <Clock className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-200 group-hover:text-orange-200 transition-colors">{event.title}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(event.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 
                        {new Date(event.end).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                      {event.location && (
                        <p className="text-xs text-gray-600 mt-0.5">{event.location}</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-600 gap-2">
                  <Calendar className="w-8 h-8 opacity-20" />
                  <p className="text-sm">No upcoming events</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
