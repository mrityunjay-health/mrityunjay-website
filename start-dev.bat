@echo off
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
)
echo Starting Next.js Development Server...
call npm run dev
pause
