import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
    {
        id: "1",
        position: { x: 0, y: 0 },
        data: { label: "Data Preparation\n(Input Features & Target)" },
        style: {
            background: "#2563eb", // blue-600
            color: "white",
            width: 180,
            height: 80,
            borderRadius: "8px", // rectangular with slight rounding
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            textAlign: "center",
            whiteSpace: "pre-wrap",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        },
    },
    {
        id: "2",
        position: { x: 250, y: 0 },
        data: { label: "Training & Testing\n(80% Train | 20% Test)" },
        style: {
            background: "#16a34a", // green-600
            color: "white",
            width: 180,
            height: 80,
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            textAlign: "center",
            whiteSpace: "pre-wrap",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        },
    },
    {
        id: "3",
        position: { x: 520, y: 0 },
        data: { label: "Model Evaluation\n(MAE, RMSE, NSE, WI, R²)" },
        style: {
            background: "#9333ea", // purple-600
            color: "white",
            width: 200,
            height: 80,
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            textAlign: "center",
            whiteSpace: "pre-wrap",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        },
    },
    {
        id: "4",
        position: { x: 820, y: 0 },
        data: { label: "Optimization\n(RSM Optimization)" },
        style: {
            background: "#db2777", // pink-600
            color: "white",
            width: 180,
            height: 80,
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            textAlign: "center",
            whiteSpace: "pre-wrap",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        },
    },
];

const edges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true },
    { id: "e3-4", source: "3", target: "4", animated: true },
];

export default function MethodologyFlow() {
    return (
        <div className="h-[400px] w-full bg-white rounded-xl shadow-md p-4">
            <ReactFlow nodes={nodes} edges={edges} fitView>
                {/* 🔹 Old-school net/grid background */}
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}
