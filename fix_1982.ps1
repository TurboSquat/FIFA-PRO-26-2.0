$lines = Get-Content 'index.html' -Encoding UTF8
$newLines = @()
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($i -eq 3427) {
        $newLines += "  if (currentAlbum === '1982' && (currentGroup === 'all' || currentGroup === 'FWC')) {"
        $newLines += "    const fwc1982All = [...fwc1982Special, ...fwc1982Posters, ...fwc1982Stadiums].sort((a, b) => a.num - b.num);"
        $newLines += "    html += renderFwc1982Section(fwc1982All, 'FWC 1982', '`u{1F3C6}');"
        $newLines += "  }"
    } elseif ($i -ge 3428 -and $i -le 3432) {
        continue
    } else {
        $newLines += $lines[$i]
    }
}
$newLines | Set-Content 'index.html' -Encoding UTF8
Write-Output 'Done'
