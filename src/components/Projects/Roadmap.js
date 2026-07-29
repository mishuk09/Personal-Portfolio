import React from "react";
import { motion } from "framer-motion";

const columns = [
    { key: "2025-q3", year: "2025", quarter: "Q3" },
    { key: "2025-q4", year: "2025", quarter: "Q4" },
    { key: "2026-q1", year: "2026", quarter: "Q1" },
    { key: "2026-q2", year: "2026", quarter: "Q2", current: true },
    { key: "2026-q3", year: "2026", quarter: "Q3" },
    { key: "2026-q4", year: "2026", quarter: "Q4" },
    { key: "2027-q1", year: "2027", quarter: "Q1" },
    { key: "2027-q2", year: "2027", quarter: "Q2" },
];

const roadmapRows = [
    { task: "1. Survey, Literature Review & Formulation", bars: ["2025-q3", "2025-q4"], style: "solid" },
    { task: "2. Data Acquisition & Preprocessing", bars: ["2025-q4", "2026-q1"], style: "solid" },
    { task: "3. ML Model Development & Training", bars: ["2026-q1", "2026-q2"], style: "solid" },
    { task: "4. Evaluation & Optimization", bars: ["2026-q2", "2026-q3"], style: "planned" },
    { task: "5. Results Analysis & Discussion", bars: ["2026-q3", "2026-q4"], style: "planned" },
    { task: "6. Thesis Writing & Editing", bars: ["2026-q4", "2027-q1"], style: "planned" },
    { task: "7. Submission & Viva Preparation", bars: ["2027-q1", "2027-q2"], style: "planned" },
];

const gradientCell = (isPlanned) =>
    isPlanned
        ? "bg-[linear-gradient(135deg,rgba(147,197,253,0.95)_0%,rgba(191,219,254,0.95)_45%,rgba(219,234,254,0.95)_45%,rgba(219,234,254,0.95)_100%)]"
        : "bg-blue-500";

export default function RoadmapTimeline() {
    return (
        <div className="w-full bg-white px-4 lg:py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[1320px]">
                <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                       
                        
                        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                            Project <span className="text-blue-500">Timeline</span>
                        </h2>
                        <p className="mt-2  font-medium text-slate-700 sm:text-xl">
                            Master&apos;s Research Gantt Chart (July 2025 – June 2027)
                        </p>
                    </div>

                    <div className="flex items-center w-full lg:w-auto gap-3 self-start rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-base font-semibold text-amber-700 shadow-sm">
                        <span className="text-lg">📍</span>
                        <span>We are here: July-Sept 2026</span>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-none border border-slate-300 shadow-sm">
                    <div className="min-w-[1150px]">
                    <div className="grid grid-cols-[minmax(320px,2.2fr)_repeat(8,minmax(112px,1fr))] border-b border-slate-300 bg-blue-600 text-white">
                        <div className="border-r border-slate-700 px-3 py-3 text-lg font-bold">Research Activities</div>
                        <div className="col-span-2 border-r border-slate-700 px-3 py-2 text-center text-lg font-semibold">2025</div>
                        <div className="col-span-4 border-r border-slate-700 px-3 py-2 text-center text-lg font-semibold">2026</div>
                        <div className="col-span-2 px-3 py-2 text-center text-lg font-semibold">2027</div>
                    </div>

                    <div className="grid grid-cols-[minmax(320px,2.2fr)_repeat(8,minmax(112px,1fr))] border-b border-slate-300 bg-blue-500 text-white">
                        <div className="border-r border-slate-700 px-3 py-2 text-lg font-bold" />
                        {columns.map((column) => (
                            <div
                                key={column.key}
                                className={`border-r border-slate-700 px-3 py-1 text-center text-lg font-medium ${column.current ? "bg-amber-500 text-white" : "bg-blue-500"}`}
                            >
                                {column.current ? (
                                    <>
                                        <div>Q2</div>
                                        <div className="text-sm font-bold">(Current)</div>
                                    </>
                                ) : (
                                    column.quarter
                                )}
                            </div>
                        ))}
                    </div>

                    {roadmapRows.map((row, rowIndex) => (
                        <div
                            key={row.task}
                            className={`grid grid-cols-[minmax(320px,2.2fr)_repeat(8,minmax(112px,1fr))] border-b border-slate-300 ${rowIndex % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}`}
                        >
                            <div className="border-r border-slate-400 px-3 py-2 text-[1.05rem] font-semibold text-slate-800">
                                {row.task}
                            </div>

                            {columns.map((column) => {
                                const isActive = row.bars.includes(column.key);
                                const isCurrent = column.current && row.task === "3. ML Model Development & Training";

                                return (
                                    <div key={column.key} className="relative border-r border-slate-400 px-2 py-3">
                                        {isActive && (
                                            <motion.div
                                                initial={{ scaleX: 0, opacity: 0 }}
                                                animate={{ scaleX: 1, opacity: 1 }}
                                                transition={{ duration: 0.45, delay: rowIndex * 0.05 }}
                                                className={`h-9 w-full origin-left rounded-md shadow-sm ${gradientCell(row.style === "planned")}`}
                                            />
                                        )}

                                        {isCurrent && (
                                            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 bg-amber-300/70" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                        </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-end gap-6 pr-2 text-lg text-slate-700">
                    <div className="flex items-center gap-3">
                        <span className="h-8 w-8 rounded-md bg-blue-500 shadow-sm" />
                        <span>Completed / In Progress</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="h-8 w-8 rounded-md bg-[linear-gradient(135deg,rgba(147,197,253,0.95)_0%,rgba(191,219,254,0.95)_45%,rgba(219,234,254,0.95)_45%,rgba(219,234,254,0.95)_100%)] shadow-sm" />
                        <span>Planned Future Work</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
