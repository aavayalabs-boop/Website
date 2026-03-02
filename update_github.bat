@echo off
cd "C:\Users\Aavaya Labs\Documents\Aavaya Website"
echo Enter commit message:
set /p msg=
git add .
git commit -m "%msg%"
git push
pause