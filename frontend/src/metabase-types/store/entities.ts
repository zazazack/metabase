import {
  NormalizedAlert,
  NormalizedCard,
  NormalizedCollection,
  NormalizedDashboard,
  NormalizedDatabase,
  NormalizedField,
  NormalizedMetric,
  NormalizedNativeQuerySnippet,
  NormalizedSchema,
  NormalizedSegment,
  NormalizedTable,
  NormalizedUser,
  NormalizedWritebackAction,
} from "metabase-types/api";

export interface EntitiesState {
  actions: Record<string, NormalizedWritebackAction>;
  alerts: Record<string, NormalizedAlert>;
  collections: Record<string, NormalizedCollection>;
  dashboards: Record<string, NormalizedDashboard>;
  databases: Record<string, NormalizedDatabase>;
  schemas: Record<string, NormalizedSchema>;
  tables: Record<string, NormalizedTable>;
  fields: Record<string, NormalizedField>;
  segments: Record<string, NormalizedSegment>;
  metrics: Record<string, NormalizedMetric>;
  snippets: Record<string, NormalizedNativeQuerySnippet>;
  users: Record<string, NormalizedUser>;
  questions: Record<string, NormalizedCard>;
}
