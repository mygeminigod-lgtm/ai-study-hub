# ==============================================================================
# AI Study Hub - Automated GitHub Publish Script
# ==============================================================================

$env:PATH = [System.Environment]::GetEnvironmentVariable("Path","User") + ";" + [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";C:\Program Files\nodejs;" + $env:PATH

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "       AI Study Hub - Publish to GitHub" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

# 1. Verify Git commit status
$status = git status --porcelain
if ($status) {
    Write-Host "Staging and committing latest changes..." -ForegroundColor Yellow
    git add .
    git commit -m "Update AI Study Hub"
} else {
    Write-Host "Git working tree is clean and ready." -ForegroundColor Green
}

Write-Host ""
Write-Host "Choose how you would like to publish to GitHub:" -ForegroundColor Yellow
Write-Host "1) Automatic (Recommended) - Use GitHub CLI (gh) to create & push repo"
Write-Host "2) Existing Repo URL - Push to a repository you already created on GitHub"
$choice = Read-Host "Select [1 or 2] (Default: 1)"

if ($choice -eq "2") {
    $repoUrl = Read-Host "Enter your GitHub repository URL (e.g. https://github.com/username/ai-study-hub.git)"
    if (-not [string]::IsNullOrWhiteSpace($repoUrl)) {
        git remote remove origin 2>$null
        git remote add origin $repoUrl
        git branch -M main
        Write-Host "Pushing to $repoUrl..." -ForegroundColor Cyan
        git push -u origin main
        Write-Host ""
        Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
    } else {
        Write-Host "No URL entered. Aborting." -ForegroundColor Red
    }
} else {
    # Check gh auth status
    $authStatus = gh auth status 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Logging in to GitHub via browser..." -ForegroundColor Yellow
        gh auth login --web -h github.com
    }

    $repoName = Read-Host "Enter repository name [ai-study-hub]"
    if ([string]::IsNullOrWhiteSpace($repoName)) {
        $repoName = "ai-study-hub"
    }

    $visibility = Read-Host "Public or Private? [public/private] (Default: public)"
    if ($visibility -ne "private") {
        $visibility = "--public"
    } else {
        $visibility = "--private"
    }

    Write-Host "Creating GitHub repository '$repoName' and pushing code..." -ForegroundColor Cyan
    gh repo create $repoName $visibility --source=. --remote=origin --push

    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Repository created and code published successfully to GitHub!" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Press any key to close..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
