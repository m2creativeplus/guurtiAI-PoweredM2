import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    code: v.string(),
    project_name: v.string(),
    amount: v.string(),
    donor: v.string(),
    category: v.string(),
    status: v.string(),
    priority: v.string(),
    alignment: v.string(),
    date: v.string(),
    description: v.string(),
  }).index("by_category", ["category"]),
  
  kpis: defineTable({
    totalValue: v.number(),
    activeProjects: v.number(),
    donorsEngaged: v.number(),
    completionRate: v.number(),
  }),

  opportunities: defineTable({
    id: v.string(),
    type: v.string(),
    title: v.string(),
    organization: v.string(),
    location: v.string(),
    deadline: v.string(),
    url: v.string(),
    mahmoud_score: v.number(),
    m2_score: v.number(),
    overall_priority: v.string(),
    matched_keywords: v.array(v.string()),
    value_usd: v.optional(v.number()),
  }),

  agent_logs: defineTable({
    timestamp: v.string(),
    message: v.string(),
    type: v.string(),
  }),
});

