export interface User {
  id: string;
  username: string;
  role: 'teacher' | 'student';
  lastLogin: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  createdBy: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  createdBy: string;
}

export interface Homework {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdBy: string;
  submissions: HomeworkSubmission[];
}

export interface HomeworkSubmission {
  id: string;
  homeworkId: string;
  studentId: string;
  answer: string;
  fileUrl?: string;
  submittedAt: string;
}

export interface Message {
  id: string;
  content: string;
  createdAt: string;
  createdBy: string;
  authorName: string;
}

export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  uploadedBy: string;
  uploadedAt: string;
}