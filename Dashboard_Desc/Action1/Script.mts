''-------------------------------------------------------------------------------
'Candidates for enrollment dropdown functionality
''-------------------------------------------------------------------------------
Function Dropdown(Enrollmentstatus_from,Enrollmentstatus_to)
	Set DWebelement=description.Create()
	DWebelement("innertext").value=Enrollmentstatus_from
	DWebelement("index").value="5"
	Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement(DWebelement).click
    Set DWebelement=description.Create()
	DWebelement("innertext").value=Enrollmentstatus_to
	DWebelement("index").value="4"	
	Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement(DWebelement).click
End Function

Browser("Health Home Dashboard").Page("Health Home Dashboard_3").WebElement("Enrollment_Icon").Click
call Dropdown("Candidates for Enrollment","Enrolled Patients")
'Browser("Health Home Dashboard").Page("Health Home Dashboard_3").WebElement("Candidates for Enrollment_2").Click
'Browser("Health Home Dashboard").Page("Health Home Dashboard_3").WebElement("Enrolled Patients").Click
Browser("Health Home Dashboard").Page("Health Home Dashboard_4").WebTable("0").Click


''-------------------------------------------------------------------------------
'Candidates for enrollment dropdown functionality
''-------------------------------------------------------------------------------
''-------------------------------------------------------------------------------
'Viewlist  functionality
''-------------------------------------------------------------------------------

rowcount = Browser("Health Home Dashboard").Page("Health Home Dashboard").WebTable("name:=WebTable","class:=listTable","Index:=0").RowCount
For a=1 to rowcount
	c1= Browser("Health Home Dashboard").Page("Health Home Dashboard").WebTable("name:=WebTable","class:=listTable","Index:=0").GetCellData(a,2)
	c2=Browser("Health Home Dashboard").Page("Health Home Dashboard").WebTable("name:=WebTable","class:=listTable","Index:=0").GetCellData(a,3)
	c3=Browser("Health Home Dashboard").Page("Health Home Dashboard").WebTable("name:=WebTable","class:=listTable","Index:=0").GetCellData(a,5)
'	print c1
'	print c2
'	print c3
	If c1="Richards" and c2="Marty" and c3="06/06/1952" Then
	c4=Browser("Health Home Dashboard").Page("Health Home Dashboard_4").WebTable("0_3").GetCellData(a,1)
	print a
	print c4
	Browser("Health Home Dashboard").Page("Health Home Dashboard_4").WebElement("innertext:="&c4,"Index:=1").Click
	End If

Next


''-------------------------------------------------------------------------------
'Viewlist  functionality
''-------------------------------------------------------------------------------
'-------------------------------------------------------------------------------
'Alert functionality
''-------------------------------------------------------------------------------
rowcount = Browser("Health Home Dashboard").Page("Health Home Dashboard").WebTable("MEDIUM").RowCount
For a=1 to rowcount
	b=Browser("Health Home Dashboard").Page("Health Home Dashboard").WebTable("MEDIUM").GetCellData(a,5)
print b
	If b="Nick Cannon, Patient ID: 3 has been assigned to GSIHTest CareTeam A" Then
		Index=6
		For c=2 to a
			Index=Index+2
		Next
		Browser("Health Home Dashboard").Page("Health Home Dashboard").Image("name:=Image","Index:="&Index).Click

End If
Next
''-------------------------------------------------------------------------------
'Alert functionality
''-------------------------------------------------------------------------------
''-------------------------------------------------------------------------------
'Update user  functionality
''-------------------------------------------------------------------------------


''-------------------------------------------------------------------------------
'Update user  functionality
''-------------------------------------------------------------------------------
ReportFolder ="C:\QTP_Automation_MMC"
File_name = "TestReport.txt"
ScriptName = "Dashboard Login functionality"
Call D_ReportHead_Result(ReportFolder,File_name,ScriptName)
ReportFolder = D_ReportHead_Result()

If Browser("Health Home Dashboard").Page("Health Home Dashboard").WebEdit("portalUserId").Exist(5)Then
Call DEdit("portalUserId","mouser@gsihealth.com")
Call DEdit("portalPassword","Test123#")
Action="Dashboard login successfully displayed"
Status="Pass"
Call D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
Else
Action="Dashboard login failed"
Status="Fail"
Call D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)

End If
RenameTxtFile ReportFolder,ReportFolder, File_name, "QA_Dashboard"



'msgbox environment.Value("TestName")
'call MMCQAURL()
'call  MMCSTAGURL()
'call MMCPRODURL()
'call Closebrowser()
Executefile "C:\Documents and Settings\Administrator\Desktop\MMCautomationexe\Public.vbs"
ReportFolder ="C:\prod\"
File_name = "TestReport.txt"
Call D_ReportHead_Result(ReportFolder,File_name)

StartTime = Timer  
Call DEdit("portalUserId","NathanHHteamuserCM@gsihealth.com")
Call DEdit("portalPassword","Test123#")
Call  Delement("Login")

if Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement("innertext:=Home","html tag:=TD","Class Name:=Webelement").exist(10) then
	Call HomeTab_Icon("enrollments")
	Action="Dashboard login successful and ENROLLMENT icon clicked"
    Status="Pass"
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	
else
	EndTime = Timer
	Action="Dashboard login Failed"
    Status="Fail"
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	RenameTxtFile ReportFolder,ReportFolder, File_name, "Enrollment App"
	exittest
End If
''___________________________________________________Search in Candidates For Enrollment and  Navigation to Modify patient page________________________________________
Call  Delement("Search Patient")
wait(5)
call DEdit("firstName","Katy")
call DEdit("lastName","Robbins")
call DEdit("dateOfBirth_dateTextField","05/19/1954")
call Ddropdown("Male")
Call  Delement("Search")
LN = "Robbins"
SelectP (LN)
wait(5)
Call  Delement("Save")

If  Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement("innertext:=Save successful.","html tag:=TD","Class Name:=Webelement").exist(15) Then
	Action="Search in Candidates For Enrollment and  Navigation to Modify patient page successfull  "
    Status="Pass"
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	Call  Delement("OK") 
	wait(2)
else If Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement("innertext:=Warning","class:=dialogHeaderText","index:=5").Exist(5) then
	Action="Warning found while patient search and modification"
    Status="Fail"
	
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
else
	
	Action="Unable to Searched and Modify Patient "
    Status="Fail"
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	'exittest
End if
End If
 '_______________________________________________Search in Candidates For Enrollment and  Navigation to Modify patient page successfull ####____________________________________


'_______________________________________________Search in Enrolled Patients and  Navigation to Modify patient page_____________________________________________________



Call  Delement("Search Patient")
wait(3)
call Ctenrollmentstatus("Candidates for Enrollment","Enrolled Patients")
wait(3)
call DEdit("firstName","John")
call DEdit("lastName","way")
call DEdit("dateOfBirth_dateTextField","06/14/1955")
call Ddropdown("Male")
Call  Delement("Search")
LN = "way"
SelectP (LN)
wait(5)
Call  Delement("Save")

If  Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement("innertext:=Save successful.","html tag:=TD","Class Name:=Webelement").exist(15) Then
	Action="Search in Enrolled Patients and  Navigation to Modify patient page Successfull  "
    Status="Pass"
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	Call  Delement("OK") 
else If Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement("innertext:=Warning","class:=dialogHeaderText","index:=5").Exist(5) then
	Action="Warning found "
    Status="Fail"
	EndTime = Timer
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	else
	EndTime = Timer
	Action="Unable to Search Patient "
    Status="Fail"
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	'exittest
End if
End If
'___________________________________________####Search in Enrolled Patients and  Navigation to Modify patient page Successfull ####_________________________________________________

'___________________________________________####   Navigating to Add Patient Page   ####_________________________________________________
Call  Delement("Add Patient")
wait(6)
if Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement("Class Name := WebElement","class:= stretchImgButton","html tag := TD","innertext:= Search Patient").exist(10) then
	Action="Navigated to Add Patient page of ENROLLMENT app"
    Status="Pass"
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	EndTime = Timer
	Action="Total Time Taken is "
	Call  D_ReportBody_ResultTime(ReportFolder,File_name,Action,StartTime,EndTime)
	wait(5)
else If Browser("title:=Health Home Dashboard").Page("title:=Health Home Dashboard").WebElement("innertext:=Warning","class:=dialogHeaderText","index:=5").Exist(5) then
	Action="Warning found in Add Patient page of ENROLLMENT app"
    Status="Fail"
	
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
else
	EndTime = Timer
	Action="Unable to Navigated to Add Patient page of ENROLLMENT app "
    Status="Fail"
	Call  D_ReportBody_ResultStatus(ReportFolder,File_name,Action,Status)
	'exittest
End If
End if
	Call DLinkbutton("Logout")
	Call dpopupbutton_Yes()
RenameTxtFile ReportFolder,ReportFolder, File_name, "Enrollment App_Stag"
'RenameTxtFile ReportFolder,ReportFolder, File_name, "Enrollment App_Prod"
wait(10)






















