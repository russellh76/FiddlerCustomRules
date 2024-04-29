<?php
    header("Content-Type: text/plain");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");
    $DCX_TARGET_VERSION = "12.1.8 PHP Experimental";
    $DCX_MAX_REQ_LENGTH = 200000;
    /*
     * NOTE: Update the DCX_MAX_REQ_LENGTH setting to reflect the typical POST data size specific to your deployment.
     */

    /*
     * NOTE:  This is a sample page.  Please review and modify it to avoid any security threats as per your organization
     * specific policies.  The Target Page needs to receive the full POST content from the UI SDK client before writing
     * the response.  As long as it is configured to do so without dropping any packets, you may modify this page.
     */

    // Debug flag is set in querystring, can be overriden below
    // this odd logic is to avoid case sensitivity issues
    $DEBUG=false;
    $pos = strripos($_SERVER['QUERY_STRING'], "&debug=true");
    if ($pos >= -1) {
      $DEBUG=true;	
    }
    $pos = strripos($_SERVER['QUERY_STRING'], "debug=true");
    if ($pos === 0) {
      $DEBUG=true;	
    }
    //$DEBUG=true;  // hardcode debug flag on

    /*
     * Utility function to return the timestamp in milliseconds.
     */
    function MSTimestamp()
    {
      $ms = microtime(true) * 1000;  //milliseconds
      //$ms = microtime(true);  // seconds
      return $ms;
    }

    $start = MSTimestamp();

    /*
     * Read the raw POST data to ensure the request is read before the response is generated.
     */
    function AddDebugging()
    {
	global $start;
	global $DCX_MAX_REQ_LENGTH;
	global $DCX_TARGET_VERSION;
	$html = "DiscoverUIPostVersion: $DCX_TARGET_VERSION\n\n";
	$html .= "Hint1: ?debug=true can be added to querystring for POSTs or OPTIONs calls to get DEBUG output\n";
	$html .= "Hint2: ?X-Discover-Saas-Tltsid=DebugTestSession001 can be added to querystring on GET to test sessioning\n\n";
	$html .= "REQUEST Header Values\n";
	$html .= "Request Method: ";
	$html .= $_SERVER['REQUEST_METHOD'];
	$html .= "\n";
	$html .= "ServerProtocol: ";
	$html .= $_SERVER['SERVER_PROTOCOL'];
	$html .= "\n";
	$html .= "RemoteAddress: ";
	$html .= $_SERVER['REMOTE_ADDR'];
	$html .= "\n";
        
/*$_SERVER is an array which contain all the information about request headers, paths, and script locations. It will have a 'non-empty' value if the request was sent through HTTPS and empty or '0' if the request was sent through HTTP.  */
	//$html .= "HTTPS: ";
	//$html .= $_SERVER['HTTPS'];
	//$html .= "\n";
        
	$html .= "HostName: ";
	$html .= $_SERVER['HTTP_HOST'];
	$html .= "\n";
	$html .= "PHPSelf: ";
	$html .= $_SERVER['PHP_SELF'];
	$html .= "\n";
	$html .= "fullURL: ";
	$html .= $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
	$html .= "\n";

	// Output all existing Request headers
	foreach(getallheaders() as $name => $value) {
	    $html .= "$name: $value\n";
	}
	  
	$html .= "\nRESPONSE Header Values\n";
	// Output all existing Response headers
	foreach(headers_list() as $name => $value) {
	    $html .= "$name: $value\n";
	}

	$html .= "\nQUERYSTRING Values\n";
	// Output all existing arguments 1 
	foreach($_GET as $query_string_variable => $value) {
	    $html .= "$query_string_variable: $value\n";
	}
	$html .= "\nPROCESSING ";
	$html .= "\nTimestampUTC: ";
	date_default_timezone_set('UTC');
	$html .= date(DATE_RFC2822);
	$html .= "\nDCX_MAX_REQ_LENGTH: $DCX_MAX_REQ_LENGTH";
	$html .= "\nDCX_TARGET_VERSION: $DCX_TARGET_VERSION";  

	return $html;
    }
    

    function ProcessPost()
    {
      global $start;
      global $DEBUG;
      global $DCX_MAX_REQ_LENGTH;
      global $DCX_TARGET_VERSION;
      //$start = MSTimestamp();
      $html="";
      // OPTIONS
      if (!strcasecmp($_SERVER['REQUEST_METHOD'], "OPTIONS")) {
        if ($DEBUG === true) {
          $html .= AddDebugging();
        }
        return $html;
      }
      // GET
      if (!strcasecmp($_SERVER['REQUEST_METHOD'], "GET")) {
      //if ($DEBUG === true) {
      $html .= AddDebugging();
      //}

      //sleep(10);  // for timing testing

      $html .= "\nReadBytes: 0\n";
      $html .= "PageProcessingTime: ";
      $end = MSTimestamp();
      $html .= number_format(($end-$start),10);
      $html .= " milliseconds";

      $html .= "\nPHPProcessingTime: ";
      $time = $end - ($_SERVER["REQUEST_TIME_FLOAT"]*1000);
      $html .= number_format($time,10);
      $html .= " milliseconds";

      return $html;
      }
	// POST
      if (!strcasecmp($_SERVER['REQUEST_METHOD'], "POST")) {
        $actualReadLength = 0;
        $maxReadLength = 0;
        try {
          // Limit the read size to at most DCX_MAX_REQ_LENGTH bytes.

          $reqLength = isset($_SERVER['CONTENT_LENGTH']) ? $_SERVER['CONTENT_LENGTH'] : 0;
          $maxReadLength = (!$reqLength || $reqLength > $DCX_MAX_REQ_LENGTH) ? $DCX_MAX_REQ_LENGTH : $reqLength;
        if ($DEBUG === true) {
          $html .= AddDebugging();
        }  

          // Open the input stream for access to raw POST data
          $postFileHandle = fopen("php://input", 'rb');
          if ($postFileHandle) {
            while ($actualReadLength < $maxReadLength) {
              $postData = fread($postFileHandle, $maxReadLength);
              if ($postData) {
                $actualReadLength += strlen($postData);
              }
              else {
                $html .= "Error: Failed to read the raw POST data. Read of the input stream failed.";
                break;
              }
              $postData = null;
            }
            fclose($postFileHandle);
          }
          else {
            $html .= "Error: Failed to read the raw POST data. Open of the input stream failed.";
          }
        }
        catch (Exception $e) {
          $html .= "Error: Exception when reading request data!".$e->getMessage();
        }
        $html .= "\nReadBytes: $actualReadLength\n";
	    $end = MSTimestamp();
	    //$html .= "PageProcessingTime: ";
	    //$html .= number_format(($end-$start),10);
	    //$html .= " milliseconds\n";

	    $html .= "PHPProcessingTime: ";
	    $time = $end - ($_SERVER["REQUEST_TIME_FLOAT"]*1000);
	    $html .= number_format($time,10);
	    $html .= " milliseconds";
        return $html;
      }
      return "";
    }
    echo ProcessPost();
?>
