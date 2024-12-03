@echo off
echo Setting up the environment...
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
echo Setup completed!
