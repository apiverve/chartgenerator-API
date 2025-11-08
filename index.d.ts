declare module '@apiverve/chartgenerator' {
  export interface chartgeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface chartgeneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class chartgeneratorWrapper {
    constructor(options: chartgeneratorOptions);

    execute(callback: (error: any, data: chartgeneratorResponse | null) => void): Promise<chartgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: chartgeneratorResponse | null) => void): Promise<chartgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<chartgeneratorResponse>;
  }
}
