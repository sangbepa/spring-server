# Spring Boot 프로젝트 빌드 및 Docker Compose 실행 스크립트

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Spring Boot JAR 파일 빌드 중..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan

# Gradle 빌드
./gradlew clean build -x test

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "빌드 성공! Docker Compose 실행 중..." -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    
    # Docker Compose 실행
    docker-compose up --build
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "빌드 실패! Docker Compose를 실행하지 않습니다." -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    exit 1
}

