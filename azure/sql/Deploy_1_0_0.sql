
IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Privacy.Header')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Privacy.Header', 'Privacy Act', 'Deployment', 'Deployment')

END
GO


IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Privacy.Statement')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Privacy.Statement', '<strong>Authority:</strong>
      <p>Pursuant to 5 U.S.C. chapters 11 and 79, and in discharging the functions directed under Executive Order 14043, Requiring Coronavirus Disease 2019 Vaccination for Federal Employees (Sept. 9, 2021), we are authorized to collect this information. The authority for the system of records notice (SORN) associated with this collection of information, OPM/GOVT-10, Employee Medical File System of Records, 75 Fed. Reg. 35099 (June 21, 2010), amended 80 Fed. Reg. 74815 (Nov. 30, 2015), also includes 5 U.S.C. chapters 33 and 63 and Executive Order 12196, Occupational Safety and Health Program for Federal Employees (Feb. 26, 1980). Providing this information is mandatory, and we are authorized to impose penalties for failure to provide the information pursuant to applicable Federal personnel laws and regulations.</p>
      <p><strong>Purpose:</strong></p>
      <p>This information is being collected and maintained to promote the safety of Federal workplaces and the Federal workforce consistent with the above-referenced authorities, Executive Order 13991, Protecting the Federal Workforce and Requiring Mask-Wearing (Jan. 20, 2021), the COVID-19 Workplace Safety: Agency Model Safety Principles established by the Safer Federal Workforce Task Force, and guidance from Centers for Disease Control and Prevention and the Occupational Safety and Health Administration.</p>
      <p><strong>Routine Uses:</strong></p>
      <p>While the information requested is intended to be used primarily for internal purposes, in certain circumstances it may be necessary to disclose this information externally, for example to disclose information to: a Federal, State, or local agency to the extent necessary to comply with laws governing reporting of communicable disease or other laws concerning health and safety in the work environment; to adjudicative bodies (e.g., the Merit System Protection Board), arbitrators, and hearing examiners to the extent necessary to carry out their authorized duties regarding Federal employment; to contractors, grantees, or volunteers as necessary to perform their duties for the Federal Government; to other agencies, courts, and persons as necessary and relevant in the course of litigation, and as necessary and in accordance with requirements for law enforcement; or to a person authorized to act on your behalf. A complete list of the routine uses can be found in the SORN associated with this collection of information.</p>
      <p><strong>Consequence of Failure to Provide Information:</strong></p>
      <p>Providing this information is mandatory. Unless granted a legally required exception, all covered Federal employees are required to be vaccinated against COVID-19 and to provide documentation concerning their vaccination status to their employing agency. Unless you have been granted a legally required exception, failure to provide this information may subject you to disciplinary action, including and up to removal from Federal service</p>'
      , 'Deployment', 'Deployment')

END
GO


IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Home.Header')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Home.Header', 'Home', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.Header')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.Header', 'Submission', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.OnBehalfOf.Enable')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.OnBehalfOf.Enable', '1', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.OnBehalfOf.Prompt')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.OnBehalfOf.Prompt', 'I am attesting on behalf of another user', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.Employee.Header')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.Employee.Header', 'Employee Information', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.WorkSite.Prompt')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.WorkSite.Prompt', 'Please select the work site that you report to in the drop down below:', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.VaccintationStatus.Header')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.VaccintationStatus.Header', 'Vaccintation Status Information', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.VaccintationStatus.Text')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.VaccintationStatus.Text', 'Employees are considered "fully vaccinated" two weeks after completing the second dose of a two-dose COVID-19 vaccine (e.g., Pfizer or Moderna) or two weeks after receiving a single dose of a one-dose vaccine (e.g., Johnson & Johnson/Janssen)

Employees who choose not to complete the form or decline to attest their vaccination status will be assumed to be not fully vaccinated for purposes of application of the safety protocols.
      
If you are not vaccinated due to medical or religious reasons, please check either "I am not fully vaccinated" or "I decline to respond."
      
Note that if you have already received one dose of a vaccine, but are not fully vaccinated, or if you received your final dose less than two weeks ago, then you will be treated as not fully vaccinated until you are at least two weeks past your final doe and submit a new attestation.'
, 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.VaccintationStatus.Prompt')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.VaccintationStatus.Prompt', 'Vaccination Status', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.VaccintationStatus.Description')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.VaccintationStatus.Description', 'Please select the statement that best describes your current COVID-19 vaccination status', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.Certification.Header')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.Certification.Header', 'Submission Certification', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.Certification.SubHeader')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.Certification.SubHeader', 'Certification', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.Certification.Prompt')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.Certification.Prompt', 'I attest that the information provided in this form is accurate and true to the best of my knowledge', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.Certification.Acknowledgement')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.Certification.Acknowledgement', 'I understand that a knowing and willful false statement on this form can be punished by a fine or imprisonment or both (18 U.S.C. 1001). Selecting "I decline to respond" does not constitute a false statement. I understand that making a false statement on this form could result in additional administrative action including an adverse personnel action up to and including removal from my position', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'Submission.SendEmail')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('Submission.SendEmail', '0', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'General.Admin.GroupId')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('General.Admin.GroupId', '', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'General.Reviewer.GroupId')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('General.Reviewer.GroupId', '', 'Deployment', 'Deployment')

END
GO


IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'General.VaccinationDate.Prompt')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('General.VaccinationDate.Prompt', 'Date of Most Recent Vaccine', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'General.TestDate.Prompt')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('General.TestDate.Prompt', 'Date of Most Recent Negative COVID-19 Test', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'General.WorkSite.EntityName')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('General.Worksite.EntityName', 'Work Site', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'SubmissionConfirmation.Header')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('SubmissionConfirmation.Header', 'Submission Summary', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'SubmissionConfirmation.SubHeader')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('SubmissionConfirmation.SubHeader', 'Your submission has been completed', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 [Name] FROM ApplicationSetting WHERE [Name] = 'SubmissionConfirmation.Footer')
BEGIN

    INSERT INTO ApplicationSetting ([Name], [Value], CreatedBy, ModifiedBy)
    VALUES ('SubmissionConfirmation.Footer', '*** PLEASE TAKE A SCREENSHOT OF THIS SUBMISSION FOR YOUR RECORDS ***', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 ReviewStatusID FROM ReviewStatus WHERE ReviewStatusID = 0)
BEGIN

    INSERT INTO ReviewStatus (ReviewStatusID, ReviewStatus, IconName, IconColor, CreatedBy, ModifiedBy)
    VALUES (0, 'Pending', 'StatusCircleQuestionMark', '#00008b', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 ReviewStatusID FROM ReviewStatus WHERE ReviewStatusID = 0)
BEGIN

    INSERT INTO ReviewStatus (ReviewStatusID, ReviewStatus, IconName, IconColor, CreatedBy, ModifiedBy)
    VALUES (1, 'Approved', 'Completed', '#006400', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 ReviewStatusID FROM ReviewStatus WHERE ReviewStatusID = 0)
BEGIN

    INSERT INTO ReviewStatus (ReviewStatusID, ReviewStatus, IconName, IconColor, CreatedBy, ModifiedBy)
    VALUES (2, 'Not Approved', 'ErrorBadge', '#ed1c24', 'Deployment', 'Deployment')

END
GO

IF NOT EXISTS (SELECT TOP 1 VaccinationStatusID FROM VaccinationStatus)
BEGIN

    INSERT INTO VaccinationStatus (VaccinationStatus, RequireVaccineDate, RequireTestDate, RequireSupportingDocuments, SortOrder, Active, CreatedBy, ModifiedBy)
    VALUES ('I am fully vaccinated - Johnson & Johnson', 1, 0, 1, 1, 1, 'Deployment', 'Deployment')
    
    INSERT INTO VaccinationStatus (VaccinationStatus, RequireVaccineDate, RequireTestDate, RequireSupportingDocuments, SortOrder, Active, CreatedBy, ModifiedBy)
    VALUES ('I am fully vaccinated - Moderna', 1, 0, 1, 2, 1, 'Deployment', 'Deployment')

    INSERT INTO VaccinationStatus (VaccinationStatus, RequireVaccineDate, RequireTestDate, RequireSupportingDocuments, SortOrder, Active, CreatedBy, ModifiedBy)
    VALUES ('I am fully vaccinated - Pfizer', 1, 0, 1, 3, 1, 'Deployment', 'Deployment')

    INSERT INTO VaccinationStatus (VaccinationStatus, RequireVaccineDate, RequireTestDate, RequireSupportingDocuments, SortOrder, Active, CreatedBy, ModifiedBy)
    VALUES ('I am only partially vaccinated', 0, 1, 0, 5, 1, 'Deployment', 'Deployment')

    INSERT INTO VaccinationStatus (VaccinationStatus, RequireVaccineDate, RequireTestDate, RequireSupportingDocuments, SortOrder, Active, CreatedBy, ModifiedBy)
    VALUES ('I have tested negative for COVID-19 in the past 7 days', 0, 1, 0, 6, 1, 'Deployment', 'Deployment')

    INSERT INTO VaccinationStatus (VaccinationStatus, RequireVaccineDate, RequireTestDate, RequireSupportingDocuments, SortOrder, Active, CreatedBy, ModifiedBy)
    VALUES ('I decline to respond', 0, 1, 0, 7, 1, 'Deployment', 'Deployment')
END
GO

IF NOT EXISTS (SELECT TOP 1 WorkSiteID FROM WorkSite)
BEGIN

    INSERT INTO WorkSite (WorkSite, Active, CreatedBy, ModifiedBy)
    VALUES ('Default', 1, 'Deployment', 'Deployment')
    
END
GO

IF NOT EXISTS (SELECT TOP 1 ResourceLinkID FROM ResourceLink)
BEGIN

    INSERT INTO ResourceLink ([Text], [Url], SortOrder, CreatedBy, ModifiedBy)
    VALUES ('Find a COVID-19 vaccine near you', 'https://www.vaccines.gov/', 1, 'Deployment', 'Deployment')

    INSERT INTO ResourceLink ([Text], [Url], SortOrder, CreatedBy, ModifiedBy)
    VALUES ('Find a COVID-19 Testing location', 'https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html', 1, 'Deployment', 'Deployment')
    
END
GO