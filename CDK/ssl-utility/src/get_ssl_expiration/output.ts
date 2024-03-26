export type GetSslExpirationOutput = {
  /**
   * @format datetime
   */
  expiration: string;
  daysRemaining: number;
  valid: boolean;
  validFrom: string;
  validFor: string[];
};
