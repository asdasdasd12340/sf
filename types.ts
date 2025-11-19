export interface Project {
  id: string;
  title: string;
  descriptor: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  client?: string;
  role?: string;
  year: string;
  credits: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
