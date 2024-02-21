# CustomRules.js
Initial upload of Fiddler Custom Rules set.  There's a lot here already.  


## Library Injection
Add your domain to the if in the OnBeforeResponse function to add the refereence to the javascript library.  AutoResponder may be needed to serve up the file.

##  Static Content Capture
Add your domain to the if in the OnBeforeResponse function and comment in/out the response types desired.

##  Toolset Identification
This works with the Comments column (and color highlighting).  No configuration needed.

##  CORS (and other header) hacking
At the bottom of the OnBeforeResponse function set the string for the desired hack to be applied.

##  SessionID Injection
This is code for adding a sessionID argument for GETs of the target page.  Aiding in testing of Sessionization configuration.

##  Beacon Hack
Modification of headers to work around a (now closed) Beacon support issue.

##  Worker Hack

##  SessionID Column
No configuration needed, enabled on initial configuration of Fiddler.

##  Impersonate Tealeaf Headers
Changes Discover headers over to corresponding Tealeaf headers.

##  Impersonate Discover Headers
Changes Telead headers over to corresponding Discover headers.

##  Shorthand Column
Logic is called from OnBeforeResponse, compresses a version of each UI Post into the Comments column for ease of use.

##  Cookie Hardcode
Hardcode a session ID that overwrites the value used by the browser.

##  Cross Domain Sessionization.
Configure IFs for the relevant domains such that sessions will stitch across domain.
















