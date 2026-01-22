declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URI: string;
      DATABASE_URL: string;
      DATABASE_URL: 'development' | 'production' | 'test';
    }
  }
}
export {};   