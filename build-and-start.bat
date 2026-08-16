@echo off
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
)
echo Building and Starting Next.js Production Server...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b %errorlevel%
)
call npm run start
pause
