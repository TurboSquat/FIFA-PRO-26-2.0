$lines = Get-Content 'index.html' -Encoding UTF8
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'teamBase1982|numBadge|numPhoto|numPlayer') {
        Write-Output ('{0}: {1}' -f ($i+1), $lines[$i])
    }
}
