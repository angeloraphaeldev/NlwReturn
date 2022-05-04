export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}

// Dirá quais funçoes utilizaremos na nossa aplicação
