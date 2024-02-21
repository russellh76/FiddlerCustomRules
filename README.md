# CustomRules.js

## Library Injection
Add your domain to the if in the OnBeforeResonse function to add the reference to the javascript library.</br>
AutoResponder may be needed to serve up the file depending on case specifics.</br>
The function is called injectDiscoJSintoHTML.

##  Static Content Capture
Add your domain to the if in the OnBeforeResponse function and comment in/out the response types desired.</br>
The function is called SaveStaticContentOnBeforeResponse.


##  Toolset Identification
This works with the Comments column (and color highlighting).  No configuration needed.</br>
Function list currently is:</br>
highlightAllResponse</br>
highlightDiscoverResponse</br>
highlightUtagResponse</br>
highlightQualtricsResponse</br>
highlightQuantumMetricAnalyticsResponse</br>
highlightDynatraceResponse</br>
highlightCoreMetricsAnalyticsResponse</br>
highlightForeseeAnalyticsResponse</br>
highlightGoogleAnalyticsResponse</br>
highlightGoogleTagManagerResponse</br>
highlightFullStoryResponse</br>
highlightUserReplayAnalyticsResponse</br>
highlightTealeafSaaSResponse</br>
highlightTealeafOnPremResponse</br>
highlightDummyTargetResponse</br>
highlightDiscoverResponse</br>
highlightClickTaleResponse</br>
highlightGlassBoxResponse</br>
highlightSnowPlowResponse</br>


##  CORS (and other header) hacking
At the bottom of the OnBeforeResponse function set the string for the desired hack to be applied.</br>
The function is called responseHack.


##  SessionID Injection
This is code for adding a sessionID argument for GETs of the target page.  Aiding in testing of Sessionization configuration.</br>
The function is called in OnBeforeRequest and the function name is addSessionIDtoTargetGETonRequest.

##  Beacon Hack
Modification of headers to work around a (now closed) Beacon support issue.

##  Worker Hack

##  SessionID Column
No configuration needed, enabled on initial configuration of Fiddler.

##  Impersonate Tealeaf Headers
Changes Discover headers over to corresponding Tealeaf headers.</br>
The function is impersonateTealeafRequest.

##  Impersonate Discover Headers
Changes Telead headers over to corresponding Discover headers.</br>
The function is impersonateDiscoverRequest.

##  Shorthand Column
Logic is called from OnBeforeRequest, compresses a version of each UI Post into the Comments column for ease of use.</br>
The function doing the work is "DiscoRequestMsgType".

##  Cookie Hardcode
Hardcode a session ID that overwrites the value used by the browser.</br>
Logic is presently wholly contained in the OnBeforeRequest function.

##  Cross Domain Sessionization.
Configure IFs for the relevant domains such that sessions will stitch across domain.</br>
Logic is presently wholly contained in the OnBeforeRequest function.

## Reverse Proxy configuration
Handy for redirecting an existing POST to a different target page/domain.</br>
Logic is presently wholly contained in the OnBeforeRequest function.














