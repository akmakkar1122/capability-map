/* =============================================================
   KPI REFERENCE — DATA FILE
   ---------------------------------------------------------------
   HOW TO EDIT:
   • To add a metric    → find the right unit below, add an object
                          inside that unit's metrics: [ ] array
   • To add a category  → add a { name: "...", metrics: [] } object
                          inside a unit's categories: [ ] array
   • To add a section   → add a { label, tag, content } object
                          inside a metric's sections: [ ] array
   • To add a new unit  → copy an entire { id, label, icon... }
                          block and append it to the UNITS array
   • To edit the hover  → update the "description" field on each unit

   STATUS OPTIONS (assign to each metric's "status" field):
     "live"    → metric is active and data is available today
     "planned" → metric is defined but not yet built; shows as an
                 opportunity card with a brief "opportunity" note

   COLOR OPTIONS (assign to "color" field):
     Finance:           "#0d6efd"
     Sales:             "#198754"
     Customer Support:  "#fd7e14"
     Supplier Dev:      "#6f42c1"
     Military:          "#c0392b"
     (or any hex color)

   SAVE this file, then refresh the browser. That's it.
============================================================= */

const UNITS = [

  /* ──────────────────────────────────────────────────────────
     FINANCE
  ────────────────────────────────────────────────────────── */
  {
    id: "finance",
    label: "Finance",
    icon: "📊",
    color: "#0d6efd",
    description: "Tracks the company's financial health and efficiency across profitability, cash management, and cost control. Covers key GAAP and management reporting metrics used by the CFO office for board and investor reporting.",
    categories: [
      {
        name: "Profitability",
        metrics: [
          {
            name: "Gross Profit %",
            tagline: "Revenue after direct costs",
            status: "live",
            definition: "Gross Margin measures the percentage of revenue remaining after subtracting the Cost of Goods Sold (COGS). It reflects how efficiently the company produces its goods or services before overhead expenses.",
            formula: "(Revenue − COGS) / Revenue × 100",
            owner: "CFO / Controller",
            cadence: "Monthly",
            source: "SAP ERP",
            target: "≥ 42%",
            sections: [
              {
                label: "Calculation Notes",
                tag: "Methodology",
                content: `<strong>Inclusions:</strong> Product revenue, direct labor, raw material costs, manufacturing overhead.<br><br><strong>Exclusions:</strong> Intercompany transactions are eliminated prior to calculation. Returns and allowances are netted against revenue.<br><br><strong>Rounding:</strong> Reported to one decimal place.`
              },
              {
                label: "Historical Context",
                tag: "Trend",
                content: `Gross margin compressed 3.2 pts in FY24 due to supply chain inflation. Recovery target is FY26 Q2. Benchmark vs. industry peers: 38–45% range for comparable defense manufacturers.`
              },
              {
                label: "Improvement Levers",
                tag: "Action",
                content: `<ul><li>Negotiate volume-based supplier contracts</li><li>Shift product mix toward higher-margin SKUs</li><li>Reduce manufacturing scrap rate below 1.5%</li><li>Automate high-labor assembly processes</li></ul>`
              }
            ]
          },
          {
            name: "EBITDA Margin",
            tagline: "Core operating profitability",
            status: "live",
            definition: "EBITDA Margin expresses Earnings Before Interest, Taxes, Depreciation, and Amortization as a percentage of total revenue. It is the primary measure of operational profitability used by investors and lenders to compare companies across capital structures.",
            formula: "EBITDA / Total Revenue × 100",
            owner: "CFO",
            cadence: "Quarterly",
            source: "SAP ERP + Finance Model",
            target: "≥ 18%",
            sections: [
              {
                label: "Adjustments",
                tag: "Methodology",
                content: `Adjusted EBITDA excludes one-time restructuring charges, M&A transaction costs, and non-cash stock compensation. These are disclosed separately in board reporting.`
              },
              {
                label: "Peer Benchmarks",
                tag: "Context",
                content: `Defense sector median: 14–16%. Premium performers: 20–24%. Current performance places Swell in the top quartile for mid-cap defense suppliers.`
              }
            ]
          },
          {
            name: "Operating Expense Ratio",
            tagline: "OpEx as % of revenue",
            status: "planned",
            opportunity: "Automating OpEx ratio reporting would eliminate manual monthly spreadsheet consolidation across 6 cost centers. Connecting SAP cost center data to a live dashboard would give the Controller real-time visibility into overhead creep before month-end close — enabling faster corrective action."
          },
          {
            name: "Revenue by Product Line",
            tagline: "Mix and growth by segment",
            status: "planned",
            opportunity: "Breaking revenue down by Defense, Commercial, and Services product lines would expose mix shift trends that are currently invisible in aggregate reporting. Leadership could see which lines are growing, which are contracting, and make faster capital allocation decisions."
          }
        ]
      },
      {
        name: "Cash & Liquidity",
        metrics: [
          {
            name: "Days Sales Outstanding",
            tagline: "Speed of receivables collection",
            status: "live",
            definition: "DSO measures the average number of days it takes to collect payment after a sale has been made. A lower DSO indicates faster collections and healthier working capital management.",
            formula: "(Accounts Receivable / Revenue) × Days in Period",
            owner: "Treasury",
            cadence: "Monthly",
            source: "SAP AR Module",
            target: "≤ 45 days",
            sections: [
              {
                label: "Red Flag Thresholds",
                tag: "Alert",
                content: `<ul><li><strong>&gt; 60 days</strong> — Escalate to CFO review</li><li><strong>&gt; 75 days</strong> — Customer credit hold review triggered</li><li><strong>&gt; 90 days</strong> — Legal / collections initiated</li></ul>`
              },
              {
                label: "Improvement Actions",
                tag: "Action",
                content: `Early-pay discount program launched Q1 FY26. E-invoicing adoption target: 85% of customers by Q3. Dispute resolution SLA reduced from 14 to 7 days.`
              }
            ]
          },
          {
            name: "Cash Conversion Cycle",
            tagline: "Cash tied up in operations",
            status: "planned",
            opportunity: "The CCC combines DSO, DIO, and DPO into a single working capital health score. Today each component is tracked in isolation across different teams. A unified CCC view would allow Treasury to identify bottlenecks — whether cash is stuck in inventory, slow collections, or overly short payment terms — and act on the right lever."
          }
        ]
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     SALES
  ────────────────────────────────────────────────────────── */
  {
    id: "sales",
    label: "Sales",
    icon: "📈",
    color: "#198754",
    description: "Measures revenue generation effectiveness across pipeline health, deal conversion, and sales efficiency. Provides leadership with visibility into forecast accuracy, team performance, and the economics of customer acquisition.",
    categories: [
      {
        name: "Pipeline & Win",
        metrics: [
          {
            name: "Win Rate",
            tagline: "Deals won vs. competed",
            status: "live",
            definition: "Win Rate is the percentage of competitive opportunities that result in a closed-won deal. It is the primary indicator of sales effectiveness and competitive positioning in the market.",
            formula: "Closed-Won Deals / Total Competed Opportunities × 100",
            owner: "VP Sales",
            cadence: "Monthly",
            source: "Salesforce CRM",
            target: "≥ 38%",
            sections: [
              {
                label: "Segmentation",
                tag: "Breakdown",
                content: `Win rate is tracked separately by:<br><ul><li>Deal size (Enterprise: &gt;$1M, Mid-market: $100K–$1M, SMB: &lt;$100K)</li><li>Competitive displacement vs. greenfield</li><li>Product line (Defense, Commercial, Services)</li><li>Region and sales rep</li></ul>`
              },
              {
                label: "Loss Analysis",
                tag: "Insight",
                content: `Top loss reasons from Q1 FY26 review:<br><ul><li>47% — Price / budget constraints</li><li>28% — Feature gaps vs. competitor</li><li>15% — Procurement delays (no decision)</li><li>10% — Relationship / incumbent advantage</li></ul>`
              },
              {
                label: "Improvement Actions",
                tag: "Action",
                content: `Competitive battlecards updated quarterly. Deal desk review required for all opportunities &gt;$500K. Win/loss interview program launched for all closed opportunities.`
              }
            ]
          },
          {
            name: "Pipeline Coverage Ratio",
            tagline: "Pipeline vs. revenue target",
            status: "live",
            definition: "Pipeline Coverage Ratio measures the total value of qualified opportunities in the sales pipeline relative to the remaining revenue target for the period. It indicates the buffer of opportunity available to meet quota.",
            formula: "Total Pipeline Value / Remaining Revenue Target",
            owner: "VP Sales / RevOps",
            cadence: "Weekly",
            source: "Salesforce CRM",
            target: "≥ 3.5×",
            sections: [
              {
                label: "Pipeline Stages Counted",
                tag: "Methodology",
                content: `Only stages 3+ (Proposal Submitted and beyond) are included in coverage calculation. Earlier stages are tracked separately as leading indicators but not counted in the official ratio.`
              }
            ]
          },
          {
            name: "Average Deal Size",
            tagline: "Mean contract value",
            status: "planned",
            opportunity: "Tracking average deal size over time by segment and rep would reveal whether the business is successfully moving up-market or experiencing price compression. It would also flag when a team is padding volume with small deals at the expense of fewer, larger strategic wins."
          }
        ]
      },
      {
        name: "Efficiency",
        metrics: [
          {
            name: "Sales Cycle Length",
            tagline: "Days from lead to close",
            status: "planned",
            opportunity: "Measuring average days from opportunity creation to close — broken out by segment — would surface where deals stall. Currently reps self-report, creating inconsistency. Automated tracking from Salesforce timestamps would give RevOps a reliable signal to intervene earlier in stalled deals."
          },
          {
            name: "Quota Attainment",
            tagline: "% of reps at/above quota",
            status: "live",
            definition: "Quota Attainment measures the percentage of sales representatives who have achieved or exceeded their assigned revenue quota in a given period. It is a leading indicator of overall sales team health and morale.",
            formula: "# Reps at or Above Quota / Total Quota-Carrying Reps × 100",
            owner: "VP Sales",
            cadence: "Monthly",
            source: "Salesforce + Xactly",
            target: "≥ 65% of reps",
            sections: [
              {
                label: "Distribution Analysis",
                tag: "Insight",
                content: `Healthy distribution target: 5% above 150% quota, 15% between 100–150%, 45% between 75–100%, 35% below 75%. Reps below 75% for 2 consecutive quarters enter a performance improvement plan.`
              }
            ]
          },
          {
            name: "Customer Acquisition Cost",
            tagline: "Cost to win a new customer",
            status: "planned",
            opportunity: "CAC is not currently calculated in a standardized way — marketing spend and sales headcount costs are tracked separately. Building a unified CAC view paired with Customer Lifetime Value would allow leadership to assess the true return on growth investment and optimize channel mix."
          }
        ]
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     CUSTOMER SUPPORT
  ────────────────────────────────────────────────────────── */
  {
    id: "support",
    label: "Customer Support",
    icon: "🎯",
    color: "#fd7e14",
    description: "Monitors the quality and efficiency of customer service delivery. Tracks satisfaction, loyalty, resolution effectiveness, and adherence to contractual service commitments — with direct linkage to retention and renewal outcomes.",
    categories: [
      {
        name: "Quality",
        metrics: [
          {
            name: "Customer Satisfaction (CSAT)",
            tagline: "Post-interaction satisfaction",
            status: "live",
            definition: "CSAT measures customer satisfaction immediately following a support interaction. Customers are asked to rate their experience on a 1–5 scale, and the score reflects the percentage who rated 4 or 5 (Satisfied / Very Satisfied).",
            formula: "# Satisfied Responses (4–5) / Total Responses × 100",
            owner: "VP Customer Success",
            cadence: "Weekly",
            source: "Zendesk + SurveyMonkey",
            target: "≥ 88%",
            sections: [
              {
                label: "Survey Methodology",
                tag: "Methodology",
                content: `Surveys are sent within 2 hours of ticket closure. Response rate target: ≥ 25%. Minimum 30 responses required for a rep-level score to be considered statistically valid. Results lag 48 hours.`
              },
              {
                label: "Driver Analysis",
                tag: "Insight",
                content: `Top CSAT drivers: <ul><li>Resolution on first contact (+12 pts)</li><li>Response within SLA (+8 pts)</li><li>Empathetic tone in communication (+7 pts)</li></ul>Top CSAT detractors:<ul><li>Repeat contacts for same issue (−15 pts)</li><li>Hold time &gt; 5 min (−9 pts)</li></ul>`
              }
            ]
          },
          {
            name: "Net Promoter Score (NPS)",
            tagline: "Loyalty and advocacy index",
            status: "live",
            definition: "NPS measures customer loyalty by asking how likely they are to recommend the company on a 0–10 scale. Promoters (9–10) minus Detractors (0–6) yields the NPS score, ranging from −100 to +100.",
            formula: "% Promoters (9–10) − % Detractors (0–6)",
            owner: "CEO / VP CX",
            cadence: "Quarterly",
            source: "Qualtrics",
            target: "≥ +45",
            sections: [
              {
                label: "Segment Breakdown",
                tag: "Breakdown",
                content: `NPS is tracked separately for: Government customers (target +50), Commercial (target +42), New customers &lt;12 months (target +38), Renewal customers (target +55).`
              },
              {
                label: "Closed-Loop Process",
                tag: "Action",
                content: `All Detractors (0–6) are contacted by a Senior CSM within 48 hours. Root cause logged in Salesforce. Quarterly digest shared with executive team. Recovery rate (Detractor → Passive/Promoter within 6 months): currently 34%.`
              }
            ]
          },
          {
            name: "First Contact Resolution",
            tagline: "Issues resolved on first touch",
            status: "planned",
            opportunity: "FCR is the single strongest predictor of CSAT, yet it is not formally tracked today — agents self-flag resolutions inconsistently. Automating FCR detection via Zendesk re-open logic would give Support Operations a reliable baseline and identify which issue types most frequently require repeat contacts."
          }
        ]
      },
      {
        name: "Efficiency",
        metrics: [
          {
            name: "Average Handle Time",
            tagline: "Time per support interaction",
            status: "planned",
            opportunity: "AHT data exists in Five9 but is not yet connected to a reporting layer visible to management. Surfacing AHT by agent, issue type, and channel would allow Support Operations to identify coaching opportunities and spot emerging complexity spikes before they impact staffing costs."
          },
          {
            name: "SLA Compliance Rate",
            tagline: "Tickets resolved within SLA",
            status: "live",
            definition: "SLA Compliance Rate is the percentage of support tickets resolved within the committed Service Level Agreement timeframe. Breached SLAs trigger escalations and may carry contractual penalties with government customers.",
            formula: "Tickets Resolved Within SLA / Total Tickets × 100",
            owner: "VP Customer Success",
            cadence: "Daily",
            source: "Zendesk",
            target: "≥ 95%",
            sections: [
              {
                label: "SLA Tiers",
                tag: "Breakdown",
                content: `<ul><li><strong>P1 Critical:</strong> 2-hour response, 4-hour resolution</li><li><strong>P2 High:</strong> 4-hour response, 8-hour resolution</li><li><strong>P3 Medium:</strong> 8-hour response, 24-hour resolution</li><li><strong>P4 Low:</strong> 24-hour response, 72-hour resolution</li></ul>`
              },
              {
                label: "Contractual Penalties",
                tag: "Risk",
                content: `Government contracts: SLA breach below 90% triggers a 2% monthly invoice credit. Three consecutive months below 85% grants customer right to terminate. Currently 14 government contracts with SLA penalty clauses active.`
              }
            ]
          },
          {
            name: "Escalation Rate",
            tagline: "% tickets escalated to Tier 2+",
            status: "planned",
            opportunity: "Escalation data is currently captured only in free-text agent notes, making it impossible to trend or segment. Structured escalation tagging in Zendesk would quantify which issue types are driving Tier 2 costs and reveal training gaps that could be addressed to reduce escalations by an estimated 15–20%."
          }
        ]
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     SUPPLIER DEVELOPMENT
  ────────────────────────────────────────────────────────── */
  {
    id: "supplier",
    label: "Supplier Development",
    icon: "🔗",
    color: "#6f42c1",
    description: "Evaluates the performance and strategic value of the supply base across quality, delivery, cost, and compliance dimensions. Supports procurement decisions, supplier risk management, and ESG reporting obligations.",
    categories: [
      {
        name: "Quality & Delivery",
        metrics: [
          {
            name: "On-Time Delivery Rate",
            tagline: "Supplier deliveries on schedule",
            status: "live",
            definition: "OTD Rate measures the percentage of purchase orders delivered by the supplier on or before the committed delivery date. It is the primary measure of supplier schedule reliability and is a direct input to production planning.",
            formula: "POs Delivered On or Before Commit Date / Total POs × 100",
            owner: "VP Supply Chain",
            cadence: "Weekly",
            source: "SAP MM / Supplier Portal",
            target: "≥ 95%",
            sections: [
              {
                label: "Tolerance Window",
                tag: "Methodology",
                content: `On-time is defined as delivery within the agreed date ± 0 days for critical parts and ± 2 business days for standard commodities. Early delivery beyond 5 days is flagged as a schedule disruption and also counted against the supplier's score.`
              },
              {
                label: "Supplier Tiering",
                tag: "Breakdown",
                content: `<ul><li><strong>Tier 1 (Strategic):</strong> Monthly scorecard, executive review, joint improvement plan</li><li><strong>Tier 2 (Preferred):</strong> Quarterly scorecard, buyer review</li><li><strong>Tier 3 (Approved):</strong> Annual scorecard, automated reporting only</li></ul>`
              },
              {
                label: "Consequences",
                tag: "Risk",
                content: `OTD below 90% for 2 consecutive months triggers a Corrective Action Request (CAR). Below 85% for 3 months initiates supplier re-qualification process and activates dual-sourcing contingency.`
              }
            ]
          },
          {
            name: "Supplier Quality Index",
            tagline: "Incoming quality composite score",
            status: "planned",
            opportunity: "SQI would replace four separate quality spreadsheets (incoming inspection, PPM log, warranty tracker, audit scores) with a single composite supplier scorecard. This would give procurement a ranked view of supply risk and enable proactive engagement with underperforming suppliers before issues reach the production line."
          }
        ]
      },
      {
        name: "Cost & Strategy",
        metrics: [
          {
            name: "Cost Savings vs. Plan",
            tagline: "Procurement savings delivered",
            status: "live",
            definition: "Measures the cumulative cost savings achieved by the procurement team versus the annual savings plan. Savings are calculated as the variance between the previous period's price and the current negotiated price, multiplied by volume.",
            formula: "(Prior Price − Current Price) × Volume Purchased",
            owner: "CPO",
            cadence: "Quarterly",
            source: "SAP + Procurement Analytics",
            target: "Plan: $12.4M FY26",
            sections: [
              {
                label: "Savings Categories",
                tag: "Breakdown",
                content: `<ul><li>Negotiated price reductions: 45%</li><li>Volume consolidation: 20%</li><li>Specification optimization: 18%</li><li>Make vs. buy decisions: 10%</li><li>Payment term improvements: 7%</li></ul>`
              }
            ]
          },
          {
            name: "Supplier Diversity Spend %",
            tagline: "Spend with diverse suppliers",
            status: "planned",
            opportunity: "Diverse spend is currently self-reported by buyers with no certification validation step. A structured tracking system linked to certified supplier records would produce an auditable number for DoD contract compliance reporting — reducing the risk of contract penalties and supporting upcoming ESG disclosures."
          },
          {
            name: "Lead Time Reduction",
            tagline: "Improvement in supplier lead times",
            status: "planned",
            opportunity: "Lead times are maintained in separate buyer spreadsheets and never aggregated to a portfolio view. Centralizing this in SAP would allow Supply Chain to quantify working capital freed by lead time improvements, make the ROI case for VMI investments, and set evidence-based targets for the nearshoring initiative."
          }
        ]
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     MILITARY
  ────────────────────────────────────────────────────────── */
  {
    id: "military",
    label: "Military",
    icon: "🛡️",
    color: "#c0392b",
    description: "Covers program readiness, operational performance, and cost efficiency for defense platform programs. Metrics align with DoD reporting standards and support Program Executive Office (PEO) oversight and contract compliance.",
    categories: [
      {
        name: "Readiness",
        metrics: [
          {
            name: "Mission Readiness Rate",
            tagline: "Units ready for deployment",
            status: "live",
            definition: "Mission Readiness Rate measures the percentage of assigned units or platforms that are fully mission-capable (FMC) — meaning all required equipment is operational, personnel are trained, and all certifications are current — at any given time.",
            formula: "Fully Mission-Capable Units / Total Assigned Units × 100",
            owner: "Program Director",
            cadence: "Weekly",
            source: "GCSS-Army / Program LIMS",
            target: "≥ 85% FMC",
            sections: [
              {
                label: "Readiness Categories",
                tag: "Breakdown",
                content: `<ul><li><strong>FMC (Fully Mission Capable):</strong> All systems operational, all crew/personnel qualified</li><li><strong>PMC (Partially Mission Capable):</strong> Primary mission can be performed with limitations</li><li><strong>NMC (Not Mission Capable):</strong> Cannot perform primary mission — split into NMC-Maintenance and NMC-Supply</li></ul>`
              },
              {
                label: "DoD Reporting Requirements",
                tag: "Compliance",
                content: `Readiness data is reported to the Program Executive Office (PEO) weekly. Sustained NMC rates above 20% require a formal Program Review. Data is classified at the system level but aggregate percentages are reported unclassified.`
              },
              {
                label: "Recovery Actions",
                tag: "Action",
                content: `When FMC falls below 80%: automatic escalation to senior program leadership, expedited logistics support request (LSR) initiated, and cross-program cannibalization authority granted to maintenance officer.`
              }
            ]
          },
          {
            name: "Equipment Availability Rate",
            tagline: "Operational uptime of equipment",
            status: "planned",
            opportunity: "EAR data exists in GCSS-Army but is not surfaced in an executive dashboard. A consolidated view across all programs would let leadership distinguish between corrective, preventive, and supply-driven downtime — enabling smarter decisions about parts stocking, contractor support levels, and preventive maintenance scheduling."
          },
          {
            name: "Deployment Readiness Index",
            tagline: "Composite readiness for deployment",
            status: "planned",
            opportunity: "Today, personnel, equipment, training, and sustainment readiness data sit in four separate systems with no single composite view. A DRI dashboard would give senior leadership a single score per program, immediately surfacing which programs are deployment-ready and which require urgent intervention — replacing the current manual roll-up process that takes 3+ days."
          }
        ]
      },
      {
        name: "Operations & Cost",
        metrics: [
          {
            name: "Cost per Operating Hour",
            tagline: "Direct cost per flight/op hour",
            status: "live",
            definition: "Cost per Operating Hour (CPOH) measures the total direct cost — including fuel, labor, parts, and maintenance burden — to operate a military platform for one hour. It is the primary lifecycle cost efficiency metric for weapons system programs.",
            formula: "Total Operating Costs / Total Operating Hours",
            owner: "Program Manager",
            cadence: "Monthly",
            source: "GCSS-Army + Finance",
            target: "Per program baseline",
            sections: [
              {
                label: "Cost Components",
                tag: "Breakdown",
                content: `<ul><li>Fuel & lubricants: ~35% of CPOH</li><li>Direct maintenance labor: ~28%</li><li>Repair parts and components: ~22%</li><li>Contractor support: ~10%</li><li>Other direct costs: ~5%</li></ul>`
              },
              {
                label: "Variance Triggers",
                tag: "Alert",
                content: `CPOH variance &gt;10% above baseline triggers a formal Should-Cost analysis. Variances &gt;20% require PEO notification and may initiate an Engineering Change Proposal (ECP) review.`
              }
            ]
          },
          {
            name: "Training Completion Rate",
            tagline: "Mandatory training vs. requirement",
            status: "planned",
            opportunity: "Training data in DTMS is updated by unit trainers with inconsistent frequency, creating a gap between actual readiness and reported status. Automated pulls from DTMS into a program-level dashboard would provide reliable training currency rates and flag units approaching expiration windows before they become readiness gaps."
          },
          {
            name: "Contract Compliance Rate",
            tagline: "Contractual milestones met",
            status: "live",
            definition: "Measures the percentage of contractual deliverables, milestones, and compliance requirements met on schedule and within specification. Applies to both prime contracts with DoD customers and subcontract management.",
            formula: "Compliant Deliverables / Total Contracted Deliverables × 100",
            owner: "Contracts Director",
            cadence: "Monthly",
            source: "ERP + Contract Management System",
            target: "≥ 97%",
            sections: [
              {
                label: "Risk Consequences",
                tag: "Risk",
                content: `Milestone slippage may trigger: Cure Notices (15-day response), Show-Cause Letters (30-day response), or Termination for Default. Earned Value Management (EVM) variance thresholds: CPI or SPI below 0.90 triggers formal recovery plan.`
              },
              {
                label: "Deliverable Categories",
                tag: "Breakdown",
                content: `<ul><li>Technical Data Packages (TDPs)</li><li>Hardware / system deliveries</li><li>Integrated Logistics Support (ILS) elements</li><li>Test reports and qualification documentation</li><li>CDRL (Contract Data Requirements List) items</li></ul>`
              }
            ]
          }
        ]
      }
    ]
  }

]; // ← end of UNITS — do not remove this line
