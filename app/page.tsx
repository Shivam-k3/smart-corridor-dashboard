"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

export default function ResearchDashboard() {
  // Section 1: Traffic Density Data
  const trafficDensityData = [
    { lane: "Lane 1", vehicles: 45 },
    { lane: "Lane 2", vehicles: 30 },
    { lane: "Lane 3", vehicles: 18 },
    { lane: "Lane 4", vehicles: 7 },
  ]

  // Section 2: Adaptive Signal Timing Data
  const signalTimingData = [
    { vehicleCount: 0, greenTime: 20 },
    { vehicleCount: 10, greenTime: 25 },
    { vehicleCount: 20, greenTime: 35 },
    { vehicleCount: 30, greenTime: 45 },
    { vehicleCount: 40, greenTime: 55 },
    { vehicleCount: 50, greenTime: 65 },
  ]

  // Section 3: Corridor Performance Comparison Data
  const corridorPerformanceData = [
    { method: "Fixed-Time Control", time: 820, color: "#94a3b8" },
    { method: "Local Adaptive Control", time: 670, color: "#64748b" },
    { method: "Proposed Smart Corridor System", time: 540, color: "#10b981" },
  ]

  // Section 4: Emergency Vehicle Priority Data
  const emergencyVehicleData = [
    { scenario: "Without Priority Control", time: 220 },
    { scenario: "With Smart Corridor Priority", time: 130 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 text-balance">
            Smart Corridor Traffic Management System
          </h1>
          <p className="text-xl text-gray-700 mb-2">Experimental Results Visualization</p>
          <p className="text-sm text-gray-600 italic">
            Research prototype developed for performance evaluation using simulated traffic scenarios
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-6 py-12">
        <div className="space-y-16">
          {/* Section 1: Traffic Density Estimation */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Figure 1: Traffic Density Estimation at Intersection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trafficDensityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="lane" tick={{ fill: "#374151", fontSize: 14 }} />
                    <YAxis
                      label={{
                        value: "Vehicle Count",
                        angle: -90,
                        position: "insideLeft",
                        style: { fill: "#374151", fontSize: 14 },
                      }}
                      tick={{ fill: "#374151", fontSize: 14 }}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                      labelStyle={{ color: "#374151", fontWeight: 600 }}
                    />
                    <Bar dataKey="vehicles" fill="#3b82f6" name="Vehicles" />
                  </BarChart>
                </ResponsiveContainer>
                <CardDescription className="text-base text-gray-700 leading-relaxed pt-4 border-t">
                  This result demonstrates the system's ability to perceive and quantify lane-wise traffic density,
                  which serves as the primary input for adaptive control.
                </CardDescription>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Adaptive Signal Timing Response */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Figure 2: Adaptive Signal Timing Based on Traffic Load
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={signalTimingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="vehicleCount"
                      label={{
                        value: "Vehicle Count",
                        position: "insideBottom",
                        offset: -5,
                        style: { fill: "#374151", fontSize: 14 },
                      }}
                      tick={{ fill: "#374151", fontSize: 14 }}
                    />
                    <YAxis
                      label={{
                        value: "Green Signal Duration (seconds)",
                        angle: -90,
                        position: "insideLeft",
                        style: { fill: "#374151", fontSize: 14 },
                      }}
                      tick={{ fill: "#374151", fontSize: 14 }}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                      labelStyle={{ color: "#374151", fontWeight: 600 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="greenTime"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Green Time (s)"
                      dot={{ fill: "#3b82f6", r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <CardDescription className="text-base text-gray-700 leading-relaxed pt-4 border-t">
                  As traffic density increases, the system proportionally increases green signal duration to reduce
                  queue length and waiting time.
                </CardDescription>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: Corridor-Level Performance Comparison */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Figure 3: Comparison of Average Corridor Travel Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={corridorPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="method"
                      tick={{ fill: "#374151", fontSize: 12 }}
                      angle={-15}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis
                      label={{
                        value: "Average Travel Time (seconds)",
                        angle: -90,
                        position: "insideLeft",
                        style: { fill: "#374151", fontSize: 14 },
                      }}
                      tick={{ fill: "#374151", fontSize: 14 }}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                      labelStyle={{ color: "#374151", fontWeight: 600 }}
                    />
                    <Bar dataKey="time" name="Travel Time (s)">
                      {corridorPerformanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <CardDescription className="text-base text-gray-700 leading-relaxed pt-4 border-t">
                  The proposed corridor-level coordination achieves a significant reduction in average travel time
                  compared to baseline methods.
                </CardDescription>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Emergency Vehicle Priority Evaluation */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Figure 4: Emergency Vehicle Traversal Time Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={emergencyVehicleData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="scenario"
                      tick={{ fill: "#374151", fontSize: 13 }}
                      angle={-10}
                      textAnchor="end"
                      height={70}
                    />
                    <YAxis
                      label={{
                        value: "Traversal Time (seconds)",
                        angle: -90,
                        position: "insideLeft",
                        style: { fill: "#374151", fontSize: 14 },
                      }}
                      tick={{ fill: "#374151", fontSize: 14 }}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                      labelStyle={{ color: "#374151", fontWeight: 600 }}
                    />
                    <Bar dataKey="time" fill="#3b82f6" name="Time (s)" />
                  </BarChart>
                </ResponsiveContainer>
                <CardDescription className="text-base text-gray-700 leading-relaxed pt-4 border-t">
                  Priority-based signal coordination enables faster emergency vehicle movement across the corridor,
                  improving response efficiency.
                </CardDescription>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-6 py-8">
          <p className="text-center text-sm text-gray-600 leading-relaxed">
            All results are based on simulated traffic scenarios.
            <br />
            This interface is intended for experimental evaluation and academic demonstration.
          </p>
        </div>
      </footer>
    </div>
  )
}
