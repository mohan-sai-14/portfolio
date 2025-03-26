export interface Skill {
  name: string;
  percentage: number;
}

export interface ToolSkill {
  name: string;
  icon: string;
}

export const financialSkills: Skill[] = [
  {
    name: "Financial Analysis",
    percentage: 85
  },
  {
    name: "Investment Analysis",
    percentage: 80
  },
  {
    name: "Financial Modeling",
    percentage: 75
  }
];

export const programmingSkills: Skill[] = [
  {
    name: "Python (Financial Data Analysis)",
    percentage: 70
  },
  {
    name: "SQL (Database Management)",
    percentage: 65
  }
];

export const businessSkills: Skill[] = [
  {
    name: "Business Strategy",
    percentage: 90
  },
  {
    name: "Financial Management",
    percentage: 85
  },
  {
    name: "Competitive Analysis",
    percentage: 80
  }
];

export const tools: ToolSkill[] = [
  {
    name: "Power BI",
    icon: "fas fa-chart-bar"
  },
  {
    name: "Tableau",
    icon: "fas fa-chart-pie"
  },
  {
    name: "Excel (Basic)",
    icon: "fas fa-file-excel"
  },
  {
    name: "PowerPoint",
    icon: "fas fa-file-powerpoint"
  },
  {
    name: "GitHub (Basic)",
    icon: "fab fa-github"
  }
];

export const professionalSkills: ToolSkill[] = [
  {
    name: "Communication",
    icon: "fas fa-comments"
  },
  {
    name: "Time Management",
    icon: "fas fa-clock"
  },
  {
    name: "Analytical Thinking",
    icon: "fas fa-brain"
  },
  {
    name: "Team Collaboration",
    icon: "fas fa-users"
  }
];

export const radarChartSkills = [
  {
    category: "Financial",
    value: 85
  },
  {
    category: "Programming",
    value: 70
  },
  {
    category: "Business",
    value: 90
  },
  {
    category: "Analytics",
    value: 75
  },
  {
    category: "Communication",
    value: 80
  }
];
