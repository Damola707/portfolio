@echo off
REM Portfolio + Sentra + MIMT App Startup Script
REM Launches the portfolio website, Sentra demo app, and MIMT detection system in separate terminals

echo.
echo ========================================
echo  Portfolio + Sentra + MIMT Launcher
echo ========================================
echo.

REM Get the script directory
set SCRIPT_DIR=%~dp0

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if Python is installed
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python from https://python.org/
    pause
    exit /b 1
)

echo Starting applications...
echo.

REM Start Portfolio App (Terminal 1)
echo Launching Portfolio Website on port 5174...
start cmd /k "cd /d "%SCRIPT_DIR%" && npm run dev"

REM Wait 3 seconds before starting second app
timeout /t 3 /nobreak

REM Start Sentra App (Terminal 2)
echo Launching Sentra Demo App on port 5175...
start cmd /k "cd /d "%SCRIPT_DIR%jamforte-sentra-dashboard" && npm run dev -- --port 5175"

REM Wait 3 seconds before starting third app
timeout /t 3 /nobreak

REM Start MIMT App (Terminal 3)
echo Launching MIMT Detection System on port 5177...
start cmd /k "cd /d "%SCRIPT_DIR%MIMT model\MIMT model" && python app.py"

echo.
echo ========================================
echo Applications starting...
echo.
echo Portfolio:     http://localhost:5174
echo Sentra App:    http://localhost:5175
echo MIMT System:   http://localhost:5177
echo.
echo Close any terminal window to stop the app.
echo ========================================
echo.
pause
