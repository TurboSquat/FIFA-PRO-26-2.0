$line = (Get-Content 'index.html' -Encoding UTF8)[3429]
Write-Output "Line: $line"
$bytes = [System.Text.Encoding]::UTF8.GetBytes($line)
Write-Output "UTF-8 bytes: $bytes"
