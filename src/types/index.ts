// ============================================================================
// UI Radar Types
// ============================================================================

export type ToolCategory = "framework" | "styling" | "icons" | "animation" | "components" | "meta-framework";

export type TrendType = "up" | "stable" | "down";

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export type TypeScriptSupport = "native" | "types-available" | "partial" | "none";

export type RingType = "adopt" | "trial" | "assess" | "hold";

export interface ToolRatings {
  design: number;
  integration: number;
  learning: number;
  documentation: number;
  community: number;
  performance: number;
}

export interface UITool {
  id: string;
  name: string;
  category: ToolCategory;
  url: string;
  description: string;
  bundleSize: string;
  bundleSizeBytes: number;
  trend: TrendType;
  difficulty: DifficultyLevel;
  githubStars: string;
  npmDownloads: string;
  lastUpdate: string;
  contributors: number;
  releases: string;
  securityScore: number;
  dependencies: number;
  company: string;
  browserSupport: string[];
  nodeVersion: string;
  typescript: TypeScriptSupport;
  stackOverflow: string;
  discord: string;
  stateOfJS: number;
  ratings: ToolRatings;
  bestFor: string[];
  pros: string[];
  cons: string[];
  recommended: boolean;
  beginnerFriendly: boolean;
}

export interface StackWhy {
  synergy: string;      // Синергия между инструментами
  problem: string;      // Какую проблему решает
  alternative: string;  // Когда НЕ стоит выбирать
}

export interface StackToolsExplanation {
  framework: string;    // Почему этот фреймворк
  styling: string;      // Почему этот CSS инструмент
  components: string;   // Почему эти компоненты
  icons?: string;       // Почему эти иконки
  animation?: string;   // Почему эта анимация
}

export interface StackRecommendation {
  id: string;
  name: string;
  description: string;
  difficulty: "easy" | "medium" | "advanced";
  stack: string[];
  useCase: string;
  pros: string[];
  timeToLearn: string;
  why: StackWhy;
  toolsExplanation: StackToolsExplanation;
}

export interface CategoryConfig {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface LearningPathStep {
  step: number;
  title: string;
  description: string;
  time: string;
  difficulty: number;
  icon: React.ComponentType<{ className?: string }>;
}

export interface TechRadarRing {
  id: RingType;
  label: string;
  color: string;
  description: string;
}

export interface TechRadarItem {
  toolId: string;
  ring: RingType;
  reason: string;
}

// UI State Types
export interface SelectedTool extends UITool {
  reason?: string;
}

export interface FilterState {
  category: ToolCategory | "all";
  difficulty: number | null;
  beginnerOnly: boolean;
  searchQuery: string;
}
