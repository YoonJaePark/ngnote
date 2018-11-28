interface NewBoard {
  content: string;
  createdAt: number;
  email: string;
  likes: {
    count: number;
  };
  uid: string;
  updatedAt: number;
  user: string;
}
