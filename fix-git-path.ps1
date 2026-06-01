# Run once if "git is not recognized" in Cursor terminal:
# Right-click → Run with PowerShell, OR paste into terminal:

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
Write-Host "PATH refreshed. Testing git..."
& "C:\Program Files\Git\cmd\git.exe" --version
