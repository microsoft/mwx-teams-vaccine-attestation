interface IAttestationSummarySettings {
  summaryPrompt: string|undefined;
  screenshotPrompt: string|undefined;
  workSiteEntityName: string|undefined;
  vaccinationDatePrompt?: string|undefined;
  testDatePrompt?: string|undefined; 
}

export default IAttestationSummarySettings;