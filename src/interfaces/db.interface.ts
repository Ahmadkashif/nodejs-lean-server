export interface dbConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  showsql: boolean;
  pool: {
    min: number;
    max: number;
  };
}
