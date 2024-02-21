# CustomRules.js

## Library Injection
Add your domain to the if in the OnBeforeResonse function to add the reference to the javascript library.  AutoResponder may be needed to serve up the file depending on case specifics.


##  Static Content Capture
Add your domain to the if in the OnBeforeResponse function and comment in/out the response types desired.


##  Toolset Identification
This works with the Comments column (and color highlighting).  No configuration needed.


##  CORS (and other header) hacking
At the bottom of the OnBeforeResponse function set the string for the desired hack to be applied.


##  SessionID Injection
This is code for adding a sessionID argument for GETs of the target page.  Aiding in testing of Sessionization configuration.
The function is called in OnBeforeRequest and the function name is addSessionIDtoTargetGETonRequest.

##  Beacon Hack
Modification of headers to work around a (now closed) Beacon support issue.

##  Worker Hack

##  SessionID Column
No configuration needed, enabled on initial configuration of Fiddler.

##  Impersonate Tealeaf Headers
Changes Discover headers over to corresponding Tealeaf headers.
The function is impersonateTealeafRequest.

##  Impersonate Discover Headers
Changes Telead headers over to corresponding Discover headers.
The function is impersonateDiscoverRequest.

##  Shorthand Column
Logic is called from OnBeforeRequest, compresses a version of each UI Post into the Comments column for ease of use.
The function doing the work is "DiscoRequestMsgType".

##  Cookie Hardcode
Hardcode a session ID that overwrites the value used by the browser.
Logic is presently wholly contained in the OnBeforeRequest function.

##  Cross Domain Sessionization.
Configure IFs for the relevant domains such that sessions will stitch across domain.
Logic is presently wholly contained in the OnBeforeRequest function.

## Reverse Proxy configuration
Handy for redirecting an existing POST to a different target page/domain.
Logic is presently wholly contained in the OnBeforeRequest function.














