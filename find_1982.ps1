$lines = Get-Content 'index.html' -Encoding UTF8
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'renderFwc1982|fwc1982Special|fwc1982Posters|fwc1982Stadiums') {
        Write-Output ('{0}: {1}' -f ($i+1), $lines[$i])
    }
}
