export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

// src/components/models.ts
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
