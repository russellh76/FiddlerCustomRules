# CustomRules.js

## Library Injection
Add your domain to the if in the _OnBeforeResonse_ function to add the reference to the javascript library.</br>
AutoResponder may be needed to serve up the file depending on case specifics.</br>
The function is called _injectDiscoJSintoHTML_.

##  Static Content Capture
Add your domain to the if in the _OnBeforeResponse_ function and comment in/out the response types desired.</br>
The function is called _SaveStaticContentOnBeforeResponse_.

##  Toolset Identification
This works with the Comments column (and color highlighting).  No configuration needed.</br>
Function list currently is:</br>
_highlightAllResponse_</br>
_highlightDiscoverResponse_</br>
_highlightUtagResponse_</br>
_highlightQualtricsResponse_</br>
_highlightQuantumMetricAnalyticsResponse_</br>
_highlightDynatraceResponse_</br>
_highlightCoreMetricsAnalyticsResponse_</br>
_highlightForeseeAnalyticsResponse_</br>
_highlightGoogleAnalyticsResponse_</br>
_highlightGoogleTagManagerResponse_</br>
_highlightFullStoryResponse_</br>
_highlightUserReplayAnalyticsResponse_</br>
_highlightTealeafSaaSResponse_</br>
_highlightTealeafOnPremResponse_</br>
_highlightDummyTargetResponse_</br>
_highlightClickTaleResponse_</br>
_highlightGlassBoxResponse_</br>
_highlightSnowPlowResponse_</br>

##  CORS (and other header) hacking
At the bottom of the _OnBeforeResponse_ function set the string for the desired hack to be applied.</br>
The function is called _responseHack_.

##  SessionID Injection
This is code for adding a sessionID argument for GETs of the target page.  Aiding in testing of Sessionization configuration.</br>
The function is called in _OnBeforeRequest_ and the function name is _addSessionIDtoTargetGETonRequest_.

##  SessionID Column
No configuration needed, enabled on initial configuration of Fiddler.

##  Shorthand Column
Logic is called from _OnBeforeRequest_, compresses a version of each UI Post into the Comments column for ease of use.</br>
The function doing the work is _DiscoRequestMsgType_.</br>
This function includes logic for decrypting beacon POSTs which can be disabled (it modifies the POST minimally).

##  Cookie Hardcode
Hardcode a session ID that overwrites the value used by the browser.</br>
Logic is presently wholly contained in the _OnBeforeRequest_ function.

##  Cross Domain Sessionization.
Configure IFs for the relevant domains such that sessions will stitch across domain.</br>
Logic is presently wholly contained in the _OnBeforeRequest_ function.

##  Target page chang
Redirect POSTS to a different target page domain/url.

##  Worker Hack

##  Impersonate Tealeaf Headers
Changes Discover headers over to corresponding Tealeaf headers.</br>
The function is _impersonateTealeafRequest_.

##  Impersonate Discover Headers
Changes Telead headers over to corresponding Discover headers.</br>
The function is _impersonateDiscoverRequest_.

## Reverse Proxy configuration
Handy for redirecting an existing POST to a different target page/domain or similar.</br>
Logic is presently wholly contained in the _OnBeforeRequest_ function.

##  Beacon Hack
Modification of headers to work around a (now closed) Beacon support issue.</br>
The function is called _DiscoBeaconFix_.

