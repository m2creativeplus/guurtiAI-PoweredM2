import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("opportunities").collect();
  },
});

export const addOpportunity = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("opportunities")
      .filter((q) => q.eq(q.field("id"), args.id))
      .first();
    
    if (existing) {
      await ctx.db.patch(existing._id, args);
      return existing._id;
    } else {
      return await ctx.db.insert("opportunities", args);
    }
  },
});

export const getLogs = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("agent_logs").order("desc").take(50);
  },
});

export const addLog = mutation({
  args: {
    message: v.string(),
    type: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("agent_logs", {
      timestamp: new Date().toISOString(),
      message: args.message,
      type: args.type,
    });
  },
});

export const clearAll = mutation({
  args: {},
  handler: async (ctx) => {
    const opps = await ctx.db.query("opportunities").collect();
    for (const opp of opps) {
      await ctx.db.delete(opp._id);
    }
    const logs = await ctx.db.query("agent_logs").collect();
    for (const log of logs) {
      await ctx.db.delete(log._id);
    }
    return { success: true };
  },
});
