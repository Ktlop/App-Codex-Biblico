export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PreviewSample {
  title: string;
  type: 'hebrew' | 'sermon' | 'theology';
  content: {
    original: string;
    transliteration: string;
    meaning: string;
    application: string;
  };
}
