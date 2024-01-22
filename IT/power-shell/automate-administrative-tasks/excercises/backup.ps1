Param(
    [string]$Path = './app',
    [string]$DestinationPath = './'
)
If (-Not (Test-Path $Path)) {
    Throw "The source directory $Path doesn't exist, specify an existing one"
}
$date = Get-Date -format "yyyy-MM-dd"
Compress-Archive -Path $Path -CompressionLevel 'fastest' -DestinationPath "$($DestinationPath + 'backup-' + $date)"
Write-Host "Created backup at $('./backup-' + $date + '.zip')"