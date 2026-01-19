import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock,
  TrendingUp,
  Activity,
  Server,
  Database,
  Globe,
  Shield,
  Bell,
  ChevronDown,
  ExternalLink
} from "lucide-react";

// Simulated historical data for the past 90 days
const generateUptime = () => {
  const days = [];
  for (let i = 89; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    // Mostly operational with occasional minor issues
    const rand = Math.random();
    let status = 'operational';
    if (rand > 0.98) status = 'degraded';
    if (rand > 0.995) status = 'outage';
    days.push({ date: date.toISOString().split('T')[0], status });
  }
  return days;
};

const services = [
  { 
    name: "API Gateway", 
    status: "operational", 
    uptime: "99.99%", 
    icon: Server,
    description: "Core API endpoints and authentication",
    history: generateUptime(),
    latency: "145ms"
  },
  { 
    name: "Credit Data Pipeline", 
    status: "operational", 
    uptime: "99.98%", 
    icon: Database,
    description: "Bureau data fetching and processing",
    history: generateUptime(),
    latency: "320ms"
  },
  { 
    name: "Dashboard & Portal", 
    status: "operational", 
    uptime: "99.97%", 
    icon: Globe,
    description: "Web application and user interface",
    history: generateUptime(),
    latency: "89ms"
  },
  { 
    name: "Webhook Delivery", 
    status: "operational", 
    uptime: "99.96%", 
    icon: Bell,
    description: "Event notifications and callbacks",
    history: generateUptime(),
    latency: "210ms"
  },
  { 
    name: "Authentication", 
    status: "operational", 
    uptime: "99.99%", 
    icon: Shield,
    description: "OAuth, API keys, and session management",
    history: generateUptime(),
    latency: "78ms"
  },
];

const incidents = [
  {
    date: "2026-01-15",
    title: "Scheduled Maintenance Completed",
    status: "resolved",
    duration: "45 minutes",
    description: "Database optimization and security patches applied successfully.",
    affectedServices: ["Credit Data Pipeline"]
  },
  {
    date: "2026-01-08",
    title: "Minor API Latency Increase",
    status: "resolved",
    duration: "12 minutes",
    description: "Brief latency spike due to increased traffic. Auto-scaling resolved the issue.",
    affectedServices: ["API Gateway"]
  },
  {
    date: "2025-12-28",
    title: "Webhook Delivery Delays",
    status: "resolved",
    duration: "23 minutes",
    description: "Some webhook deliveries experienced delays due to queue backlog.",
    affectedServices: ["Webhook Delivery"]
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational': return 'bg-emerald-500';
    case 'degraded': return 'bg-amber-500';
    case 'outage': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'operational': return 'Operational';
    case 'degraded': return 'Degraded Performance';
    case 'outage': return 'Service Outage';
    default: return 'Unknown';
  }
};

export default function SystemStatus() {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  
  const allOperational = services.every(s => s.status === 'operational');

  return (
    <div className="min-h-screen bg-[#2D2424] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#3A2F2F] to-[#2D2424]" />
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Link to="/support" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Support
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <Activity className="w-10 h-10 text-amber-400" />
            <h1 className="text-3xl md:text-4xl font-bold">System Status</h1>
          </motion.div>
          
          <p className="text-white/60 mb-8">
            Real-time status and historical uptime for all FuteurCredX services.
          </p>

          {/* Overall Status Banner */}
          <div className={`p-6 rounded-2xl border ${allOperational ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
            <div className="flex items-center gap-4">
              {allOperational ? (
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-amber-400" />
              )}
              <div>
                <h2 className={`text-xl font-bold ${allOperational ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {allOperational ? 'All Systems Operational' : 'Some Systems Experiencing Issues'}
                </h2>
                <p className="text-white/60 text-sm">
                  Last updated: {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6">Service Status</h2>
          
          <div className="space-y-4">
            {services.map((service) => (
              <div 
                key={service.name}
                className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
              >
                <button 
                  onClick={() => setExpandedService(expandedService === service.name ? null : service.name)}
                  className="w-full p-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <service.icon className="w-5 h-5 text-white/60" />
                    <div className="text-left">
                      <h3 className="font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-white/50">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-white/60">Uptime</p>
                      <p className="font-semibold text-white">{service.uptime}</p>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                      service.status === 'operational' ? 'bg-emerald-500/20' : 
                      service.status === 'degraded' ? 'bg-amber-500/20' : 'bg-red-500/20'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${getStatusColor(service.status)}`} />
                      <span className={`text-sm font-medium ${
                        service.status === 'operational' ? 'text-emerald-400' : 
                        service.status === 'degraded' ? 'text-amber-400' : 'text-red-400'
                      }`}>
                        {getStatusText(service.status)}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-white/40 transition-transform ${expandedService === service.name ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                {expandedService === service.name && (
                  <div className="px-5 pb-5 border-t border-white/10">
                    <div className="pt-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-white/50">90-day uptime history</span>
                        <span className="text-sm text-white/50">Avg latency: {service.latency}</span>
                      </div>
                      
                      {/* Uptime bars visualization */}
                      <div className="flex gap-[2px]">
                        {service.history.map((day, idx) => (
                          <div
                            key={idx}
                            className={`h-8 flex-1 rounded-sm ${getStatusColor(day.status)} opacity-80 hover:opacity-100 transition-opacity`}
                            title={`${day.date}: ${getStatusText(day.status)}`}
                          />
                        ))}
                      </div>
                      
                      <div className="flex justify-between mt-2 text-xs text-white/40">
                        <span>90 days ago</span>
                        <span>Today</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-12 bg-[#352A2A]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6">Performance Metrics</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-white/50">Overall Uptime</span>
              </div>
              <p className="text-3xl font-bold text-white">99.98%</p>
              <p className="text-xs text-white/40 mt-1">Last 30 days</p>
            </div>
            
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white/50">Avg Response</span>
              </div>
              <p className="text-3xl font-bold text-white">145ms</p>
              <p className="text-xs text-white/40 mt-1">P50 latency</p>
            </div>
            
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white/50">API Requests</span>
              </div>
              <p className="text-3xl font-bold text-white">2.4M</p>
              <p className="text-xs text-white/40 mt-1">Last 24 hours</p>
            </div>
            
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-white/50">Success Rate</span>
              </div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="text-xs text-white/40 mt-1">Last 7 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6">Recent Incidents</h2>
          
          <div className="space-y-4">
            {incidents.map((incident, idx) => (
              <div key={idx} className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <div>
                      <h3 className="font-semibold text-white">{incident.title}</h3>
                      <p className="text-sm text-white/50">{incident.date} • Duration: {incident.duration}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                    Resolved
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-3">{incident.description}</p>
                <div className="flex gap-2">
                  {incident.affectedServices.map((service) => (
                    <span key={service} className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-12 bg-[#352A2A]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold mb-3">Get Status Updates</h2>
          <p className="text-white/60 mb-6">Subscribe to receive notifications about system status changes.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40"
            />
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
