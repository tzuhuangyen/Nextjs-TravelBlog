export interface SubscribeRequest {
  email: string;
}

export interface SubscribeResponse {
  message: string;
}

export interface ErrorResponse {
  error: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
