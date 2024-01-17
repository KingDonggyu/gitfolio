declare module 'portfolio' {
  interface PortfolioDate {
    year: number;
    month: number;
  }

  interface PortfolioSummary {
    title: string;
    description: string;
    startDate: PortfolioDate;
    endDate: PortfolioDate;
    githubRepositoryUrl: string;
    techStack: Array<string>;
  }
}
