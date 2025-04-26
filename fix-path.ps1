$nodePath = "C:\Program Files\nodejs"
$npmPath = "$env:USERPROFILE\AppData\Roaming\npm"

$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
if (-not $currentPath.Contains($nodePath)) {
    $newPath = $currentPath + ";$nodePath"
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
}
if (-not $currentPath.Contains($npmPath)) {
    $newPath = $currentPath + ";$npmPath"
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
}

Write-Host "PATH has been updated. Please restart your PowerShell window."
