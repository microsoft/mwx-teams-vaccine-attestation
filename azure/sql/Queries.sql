SELECT [Name], [Value] FROM ApplicationSetting WHERE [Name] LIKE 'Privacy.%'

SELECT [Name], [Value] FROM ApplicationSetting WHERE [Name] LIKE 'General.%.GroupId' OR [Name] LIKE 'Home.%'

SELECT [Name], [Value] FROM ApplicationSetting WHERE ([Name] LIKE 'Submission.%' OR [Name] LIKE 'General.%') AND [Name] NOT LIKE 'General.%.GroupId'


SELECT ResourceLinkID, [Text], [Url], SortOrder FROM ResourceLink ORDER BY SortOrder

SELECT WorkSiteID, WorkSite FROM WorkSite WHERE Active = 1 ORDER BY WorkSite

SELECT VaccinationStatusID, VaccinationStatus, RequireVaccineDate, RequireTestDate, RequireSupportingDocuments, Active FROM VaccinationStatus WHERE Active = 1 ORDER BY SortOrder



UPDATE ApplicationSetting
SET [Value] = 'c0c6791b-fb98-4dcd-9531-55b8c1085c53'
WHERE [Name] = 'General.Admin.GroupId'

UPDATE ApplicationSetting
SET [Value] = '82c5d330-871c-4bf8-b66a-6f2428f1edde'
WHERE [Name] = 'General.Reviewer.GroupId'

UPDATE ApplicationSetting
SET [Value] = 'Vaccination Status Submission'
WHERE [Name] = 'Submission.Header'
