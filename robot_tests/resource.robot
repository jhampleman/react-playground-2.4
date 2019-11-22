*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Library           SeleniumLibrary
Suite Teardown    Close Browser

*** Variables ***
${SERVER}         http://localhost:3000
${BROWSER}        Firefox
${DELAY}          0
${SESH}			 FF

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${SERVER}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}

Show Form
    Click Button    showme
    
Input Username
    Input Text    sessionval    ${SESH}
    Get Table Cell	tableloc		1	1
    Execute Javascript	alert(document.getElementById("ptag").innerHTML)
    Sleep	10
       	
*** Test Cases *** 
Open Form
	Open Browser To Login Page
	Show Form
	Input Username
