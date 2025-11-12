# Blog & TOC Infrastructure Upgrade

**Status**: Planning Phase
**Created**: 2025-01-11
**Purpose**: Document TOC implementation options and blog infrastructure strategy for daveliew.com

## Context

Exploring how to articulate "becoming a better agentic engineer" journey on the blog while building necessary infrastructure (blog system + table of contents navigation).

## Key Strategic Questions

1. **Content Strategy**: What blog content articulates the AI coaching positioning?
   - Personal AI Strategy Coach for successful professionals
   - Hybrid model: Group workshops + 1-on-1 implementation
   - Soft referral from daveliew.com → Agentic Brewery

2. **Infrastructure Decisions**:
   - URL structure for blog (`/discoveries/[slug]` recommended)
   - TOC architecture (Winborne simple vs ROJ complex)
   - When to build vs when content needs clarity

## Documents in This Folder

- `01-content-strategy-analysis.md` - Initial exploration findings, coaching positioning
- `02-infrastructure-readiness.md` - What exists, what's missing, quick wins available
- `03-toc-research-findings.md` - ROJ vs Winborne TOC implementations (comprehensive)
- `04-migration-path.md` - Winborne → ROJ upgrade triggers and timeline
- `05-mdx-implementation-decision.md` - **MDX choice rationale and implementation checklist**

## Decision: Full MDX for Blog Infrastructure

**Date**: 2025-01-12
**Status**: Approved

**Rationale**: High content volume planned (10+ post agentic engineering series), authoring ergonomics critical for 2000+ word technical posts. MDX provides industry-standard pattern with excellent syntax highlighting (Shiki), React component support for journey layers, and future-proof flexibility.

**See**: `05-mdx-implementation-decision.md` for complete analysis of all options evaluated (JSON, Hybrid, Full MDX).

## Next Steps

1. ✅ ~~Finalize blog content themes and series structure~~ (Complete - see content-strategy-agentic-engineering.md)
2. ✅ ~~Choose technical approach~~ (Complete - Full MDX approved)
3. **Implement MDX setup** (4-6 hours - see 05-mdx-implementation-decision.md for checklist)
4. **Build TOC component** (start Winborne-style, 2-3 hours)
5. **Write first post**: "The Evolution of Agentic AI: From Prompts to Orchestration"

---

**Files will be extracted to permanent docs and this ACTIVE folder deleted after completion.**
