try {
  window.ibLoginOrchHost = 'https://gwpubunauthidsvcst1.service.dev'
  window.ibLoginFinacleV65Host = 'https://iblab0101au.dev.anz'
  window.ibLoginHandoverHost = 'https://iblab0401au.dev.anz'
  window.loginSuccessPath = '/'
  window.loginSuccessDomain = '.service.dev'
  window.loginSuccessSecure = 'true'
  window.loginSuccessMaxAge = '60'
  window.loginSuccessRedirectURL = 'https://appstaticidhubst1.service.dev'
  window.ibCroURL = 'https://onlineappssit1.dev.anz/credit-checking/recover/do-you-know-your-crn?target=host1'
  window.registrationSpaURL = 'https://registerst1.service.dev/internetbanking'
  window.plannedMaintenanceFlag = 'false'
  window.plannedMaintenanceDateTime = '2020-10-20T05:37:17.168Z'
  window.ctiSnippetServerName = 'cdn.dev.anz'
  window.isKillSwitchEnabled = 'true'
} catch (e) {
  window.ibLoginOrchHost = ''
  window.ibLoginHandoverHost = ''
  // swallow exception
}