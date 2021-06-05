try {
  window.ibLoginOrchHost = '@frig-lb-scheme@://@frig-gw-pub-unauth-idsvc-lb-host@'
  window.ibLoginFinacleV65Host = '@APPStaticIDHUB-ib-login-finacle-65-host@'
  window.ibLoginHandoverHost = '@ib-gslb-hostname@'
  window.loginSuccessPath = '@APPStaticIDHUB-ib-login-success-path@'
  window.loginSuccessDomain = '@APPStaticIDHUB-ib-login-success-domain@'
  window.loginSuccessSecure = '@APPStaticIDHUB-ib-login-success-secure@'
  window.loginSuccessMaxAge = '@APPStaticIDHUB-ib-login-success-max-age@'
  window.loginSuccessRedirectURL = '@APPStaticIDHUB-ib-login-success-redirect-url@'
  window.ibCroURL = '@APPStaticIDHUB-ib-login-ib-cro-url@'
  window.registrationSpaURL = '@APPStaticIDHUB-ib-login-registration-spa-url@'
  window.plannedMaintenanceFlag = '@APPStaticIDHUB-ib-login-maintenance-flag@'
  window.plannedMaintenanceDateTime = '@APPStaticIDHUB-ib-login-maintenance-date-and-time@'
  window.ctiSnippetServerName = '@APPStaticIDHUB-ib-login-cti-snippet-server-name@'
  window.isKillSwitchEnabled = '@APPStaticIDHUB-ib-login-is-killswitch-enabled@'
} catch (e) {
  window.ibLoginOrchHost = ''
  window.ibLoginHandoverHost = ''
  // swallow exception
}
