

## Overview

Recently, [President Biden’s announced his COVID vaccination attestation mandate](https://www.cbsnews.com/live-updates/biden-covid-19-vaccine-mandate-live-stream-today-2021-09-09/) for employers and it impacts both the public and private sectors.

![Screenshot of home screen](../../wiki/assets/home-screen-clean.png)

## Attestation Solutions

There are a few variations of the solution and different factors within your organization will drive what version to use.  These include, but not limited to:
*  Organization Size
*  Microsoft 365 Version
*  Power Platform Licensing

### Microsoft Dataverse for Teams

The **[Microsoft Dataverse for Teams](https://docs.microsoft.com/en-us/power-platform/admin/about-teams-environment)** solution is for organizations that have Microsoft 365 licensing.  Organizations can deploy it as is or customize it to meet their requirements. Dataverse for Teams has a 2GB limit for environment (data) per team.  If you need more than 2GB of data, you will need to deploy to multiple teams or archive or remove previous attestations based on your organizations retention policy.

### Microsoft Dataverse ###

The Microsoft Dataverse for Teams solution can be upgraded to the **[Microsoft Dataverse](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/data-platform-intro)** if your organization has Power Platform user or app licensing.  The benefits of the Microsft Dataverse includes environment (data) size limit of 4TB.

## Microsoft Compatability

Solution|Commercial|GCC|GCC High|GCC DoD
-|-|-|-|-
Microsoft Teams Dataverse|![Supported](../../wiki/assets/supported.png)|![Supported](../../wiki/assets/supported.png)|![Not Supported](../../wiki/assets/not-supported.png)|![Not Supported](../../wiki/assets/not-supported.png)
Microsoft Dataverse|![Supported](../../wiki/assets/supported.png)|![Supported](../../wiki/assets/supported.png)|![Not Supported](../../wiki/assets/supported.png)|![Not Supported](../../wiki/assets/supported.png)

## Solution Functionality

Users are able to: 
*  [Submit an attestation for themselves](https://github.com/microsoft/mwx-teams-vaccine-attestation/wikiteams-dataverse/submit-attestation).*  [Submit an attestation onbehalf of another person](https://github.com/microsoft/mwx-teams-vaccine-attestation/wikiteams-dataverse/submit-attestation-onbehalf).
*  [View their attestation submissions](https://github.com/microsoft/mwx-teams-vaccine-attestation/wikiteams-dataverse/view-submissions)

Admins are able to:
*  [Export vaccine attestation data for reporting](https://github.com/microsoft/mwx-teams-vaccine-attestation/wikiteams-dataverse/exporting-attestation-data)

## Disclaimer

THIS CODE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.

## Getting Help

If you find you're having difficulty installing the solution, have found what you believe is a bug, or just have general questions please submit an issue in the repository. We try to monitor and respond to issues as fast as you can.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
