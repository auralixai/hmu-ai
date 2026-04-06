"use client";

import React, { useState, DragEvent } from "react";

// Types
type Pipeline = "Robotics Facilities" | "India Labs" | "US Telehealth";
type Stage =
  | "Lead"
  | "Contacted"
  | "Qualified"
  | "Proposal"
  | "Negotiation"
  | "Pilot"
  | "Closed Won"
  | "Closed Lost";

interface Deal {
  id: string;
  title: string;
  pipeline: Pipeline;
  stage: Stage;
  value: number;
  // Custom Fields
  siteType: string;
  scaleMetric: string;
  primaryPainPoint: string;
  dmPersona: string;
  technicalReadiness: string;
  regulatoryFlag: string;
  estimatedPilotRoi: string;
}

// Stages order
const STAGES: Stage[] = [
  "Lead",
  "Contacted",
  "Qualified",
  "Proposal",
  "Negotiation",
  "Pilot",
  "Closed Won",
  "Closed Lost",
];

const PIPELINES: Pipeline[] = ["Robotics Facilities", "India Labs", "US Telehealth"];

// Mock Data Generator
const generateMockData = (): Deal[] => {
  const deals: Deal[] = [];
  const companies = ["TechCorp", "Innova", "BuildMax", "HealthSync", "AgriRobo", "AutoMed", "RoboLife", "MedTech AI", "GigaFactory", "NextGen"];
  let idCounter = 1;

  for (let i = 0; i < 35; i++) {
    const pipeline = PIPELINES[i % PIPELINES.length];
    const stage = STAGES[Math.floor(Math.random() * STAGES.length)];
    const company = companies[Math.floor(Math.random() * companies.length)];
    
    deals.push({
      id: `deal-${idCounter++}`,
      title: `${company} - ${pipeline} Initiative`,
      pipeline,
      stage,
      value: Math.floor(Math.random() * 500) * 1000 + 50000,
      siteType: ["Warehouse", "Hospital", "Lab", "Factory"][Math.floor(Math.random() * 4)],
      scaleMetric: ["10 units", "50 units", "Site-wide", "Regional"][Math.floor(Math.random() * 4)],
      primaryPainPoint: ["High costs", "Inefficiency", "Labor shortage", "Compliance"][Math.floor(Math.random() * 4)],
      dmPersona: `Dr. ${["Smith", "Jones", "Patel", "Garcia", "Kim"][Math.floor(Math.random() * 5)]} (VP)`,
      technicalReadiness: ["Low", "Medium", "High", "Ready"][Math.floor(Math.random() * 4)],
      regulatoryFlag: ["None", "FDA Approval Pending", "HIPAA Review", "Local Permits"][Math.floor(Math.random() * 4)],
      estimatedPilotRoi: ["15%", "25%", "50%", "100%+"][Math.floor(Math.random() * 4)],
    });
  }
  return deals;
};

export default function CRM() {
  const [deals, setDeals] = useState<Deal[]>(generateMockData());
  const [activePipeline, setActivePipeline] = useState<Pipeline>("Robotics Facilities");
  const [view, setView] = useState<"Kanban" | "GlobalContacts">("Kanban");

  const [draggedDealId, setDraggedDealId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Drag & Drop Handlers
  const handleDragStart = (e: DragEvent<HTMLDivElement>, dealId: string) => {
    setDraggedDealId(dealId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, stage: Stage) => {
    e.preventDefault();
    if (!draggedDealId) return;

    setDeals((prev) =>
      prev.map((deal) =>
        deal.id === draggedDealId ? { ...deal, stage } : deal
      )
    );
    setDraggedDealId(null);
  };

  // Field Edit Handler
  const handleFieldChange = (dealId: string, field: keyof Deal, value: string) => {
    setDeals((prev) =>
      prev.map((deal) =>
        deal.id === dealId ? { ...deal, [field]: value } : deal
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-800 text-white flex flex-col flex-shrink-0 z-20 shadow-md md:shadow-none">
        <div className="p-4 text-xl md:text-2xl font-bold border-b border-gray-700 flex justify-between items-center">
          <span>RoboSkill CRM</span>
          <button 
            className="md:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        <div className={`p-4 flex-col gap-2 flex-grow overflow-y-auto ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}`}>
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Views</div>
          <button
            onClick={() => { setView("Kanban"); setIsMobileMenuOpen(false); }}
            className={`text-left px-3 py-2 rounded ${view === "Kanban" ? "bg-blue-600" : "hover:bg-gray-700"}`}
          >
            Kanban Board
          </button>
          <button
            onClick={() => { setView("GlobalContacts"); setIsMobileMenuOpen(false); }}
            className={`text-left px-3 py-2 rounded ${view === "GlobalContacts" ? "bg-blue-600" : "hover:bg-gray-700"}`}
          >
            Global Contacts
          </button>

          {view === "Kanban" && (
            <>
              <div className="text-sm text-gray-400 uppercase tracking-wider mt-6 mb-2">Pipelines</div>
              {PIPELINES.map((pipeline) => (
                <button
                  key={pipeline}
                  onClick={() => { setActivePipeline(pipeline); setIsMobileMenuOpen(false); }}
                  className={`text-left px-3 py-2 rounded ${activePipeline === pipeline ? "bg-gray-700 font-semibold text-blue-400" : "hover:bg-gray-700"}`}
                >
                  {pipeline}
                </button>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold truncate">
            {view === "Kanban" ? `${activePipeline} Pipeline` : "Global Contacts Directory"}
          </h1>
        </header>

        {/* Board or Contacts */}
        <main className="flex-1 overflow-hidden flex flex-col p-4 md:p-6">
          {view === "GlobalContacts" ? (
            <div className="bg-white rounded shadow p-4 md:p-6 overflow-auto w-full flex-1">
              <table className="w-full min-w-[700px] text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 px-4 font-semibold text-gray-700">Contact (DM Persona)</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Deal Title</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Pipeline</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Stage</th>
                  </tr>
                </thead>
                <tbody>
                  {deals.map((deal) => (
                    <tr key={deal.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          value={deal.dmPersona}
                          onChange={(e) => handleFieldChange(deal.id, "dmPersona", e.target.value)}
                          className="w-full bg-transparent border-none focus:ring-0 p-0"
                        />
                      </td>
                      <td className="py-3 px-4">{deal.title}</td>
                      <td className="py-3 px-4">{deal.pipeline}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {deal.stage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex gap-4 md:gap-6 flex-1 pb-4 items-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
              {STAGES.map((stage) => {
                const stageDeals = deals.filter(
                  (d) => d.pipeline === activePipeline && d.stage === stage
                );

                return (
                  <div
                    key={stage}
                    className="flex-shrink-0 w-[90vw] md:w-80 bg-gray-50 rounded-lg flex flex-col h-full border border-gray-200 snap-center"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, stage)}
                  >
                    <div className="p-3 bg-gray-100 border-b border-gray-200 rounded-t-lg flex justify-between items-center font-medium sticky top-0 z-10">
                      <h3>{stage}</h3>
                      <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs">
                        {stageDeals.length}
                      </span>
                    </div>
                    <div className="p-3 overflow-y-auto flex-1 flex flex-col gap-3">
                      {stageDeals.map((deal) => (
                        <div
                          key={deal.id}
                          draggable={true}
                          onDragStart={(e) => handleDragStart(e, deal.id)}
                          className="w-full bg-white p-4 rounded shadow border border-gray-200 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                        >
                          <input 
                            className="font-semibold text-lg w-full border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none mb-1 text-gray-800"
                            value={deal.title}
                            onChange={(e) => handleFieldChange(deal.id, "title", e.target.value)}
                          />
                          <div className="text-green-600 font-medium mb-3">
                            $<input 
                              type="number"
                              className="w-24 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none"
                              value={deal.value}
                              onChange={(e) => handleFieldChange(deal.id, "value", e.target.value)}
                            />
                          </div>
                          
                          <div className="text-xs flex flex-col gap-2 text-gray-600">
                            <div className="flex items-center">
                              <span className="w-24 font-medium flex-shrink-0">Site Type:</span>
                              <input 
                                className="flex-1 min-w-0 bg-gray-50 px-1 py-0.5 border border-transparent hover:border-gray-300 focus:border-blue-500 focus:bg-white rounded"
                                value={deal.siteType}
                                onChange={(e) => handleFieldChange(deal.id, "siteType", e.target.value)}
                              />
                            </div>
                            <div className="flex items-center">
                              <span className="w-24 font-medium flex-shrink-0">Scale Metric:</span>
                              <input 
                                className="flex-1 min-w-0 bg-gray-50 px-1 py-0.5 border border-transparent hover:border-gray-300 focus:border-blue-500 focus:bg-white rounded"
                                value={deal.scaleMetric}
                                onChange={(e) => handleFieldChange(deal.id, "scaleMetric", e.target.value)}
                              />
                            </div>
                            <div className="flex items-center">
                              <span className="w-24 font-medium flex-shrink-0">Pain Point:</span>
                              <input 
                                className="flex-1 min-w-0 bg-gray-50 px-1 py-0.5 border border-transparent hover:border-gray-300 focus:border-blue-500 focus:bg-white rounded"
                                value={deal.primaryPainPoint}
                                onChange={(e) => handleFieldChange(deal.id, "primaryPainPoint", e.target.value)}
                              />
                            </div>
                            <div className="flex items-center">
                              <span className="w-24 font-medium flex-shrink-0">DM Persona:</span>
                              <input 
                                className="flex-1 min-w-0 bg-gray-50 px-1 py-0.5 border border-transparent hover:border-gray-300 focus:border-blue-500 focus:bg-white rounded"
                                value={deal.dmPersona}
                                onChange={(e) => handleFieldChange(deal.id, "dmPersona", e.target.value)}
                              />
                            </div>
                            <div className="flex items-center">
                              <span className="w-24 font-medium flex-shrink-0">Tech Readiness:</span>
                              <input 
                                className="flex-1 min-w-0 bg-gray-50 px-1 py-0.5 border border-transparent hover:border-gray-300 focus:border-blue-500 focus:bg-white rounded"
                                value={deal.technicalReadiness}
                                onChange={(e) => handleFieldChange(deal.id, "technicalReadiness", e.target.value)}
                              />
                            </div>
                            <div className="flex items-center">
                              <span className="w-24 font-medium flex-shrink-0">Reg. Flag:</span>
                              <input 
                                className="flex-1 min-w-0 bg-gray-50 px-1 py-0.5 border border-transparent hover:border-gray-300 focus:border-blue-500 focus:bg-white rounded"
                                value={deal.regulatoryFlag}
                                onChange={(e) => handleFieldChange(deal.id, "regulatoryFlag", e.target.value)}
                              />
                            </div>
                            <div className="flex items-center">
                              <span className="w-24 font-medium flex-shrink-0">Est. ROI:</span>
                              <input 
                                className="flex-1 min-w-0 bg-gray-50 px-1 py-0.5 border border-transparent hover:border-gray-300 focus:border-blue-500 focus:bg-white rounded"
                                value={deal.estimatedPilotRoi}
                                onChange={(e) => handleFieldChange(deal.id, "estimatedPilotRoi", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
