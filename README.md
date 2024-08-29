# Scheduler - Enhanced Version

日本語版はこちら→　[Japanese ver](https://github.com/tetracontinental/Schefular/blob/main/README-ja.md "日本語版README")

This project is an enhanced version of the original Scheduler repository, created during a school research project. It integrates several advanced functionalities including Google Apps Script (GAS) integration, Optical Character Recognition (OCR) using Python, and CSV data management for web applications.

## Features

- **Google Drive Integration**: Utilize Google Apps Script (GAS) to access and manage files on Google Drive.
- **OCR Processing**: Extract text from images using Python’s OCR libraries and convert it into structured data.
- **CSV Management**: Automatically convert the OCR-processed text into CSV format, which can be displayed in a web application for further analysis or reporting.
  
## Setup Instructions

### Prerequisites

- Google Account with access to Google Drive
- Python 3.x
- Necessary Python libraries (listed below)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tetracontinental/scheduler.git
   cd scheduler
   ```

2. **Google Apps Script (GAS) Setup**
   
   - Create a new project in Google Apps Script and copy the provided GAS script into it.
   - Grant necessary permissions for accessing Google Drive.
   - Deploy the GAS as a web app or run it as needed.

3. **Python Setup**

   - Install required Python packages:

     ```bash
     pip install -r requirements.txt
     ```

   - Run the OCR script to process files from Google Drive:

     ```bash
     python ocr_processor.py
     ```

4. **Web Application Setup**

   - Ensure your web application is configured to read the CSV files generated by the OCR script.
   - Display the data as per your application’s requirements.

## Usage

- Upload files to Google Drive.
- Use the GAS script to automate the retrieval and processing of these files.
- Run the Python script to perform OCR and generate CSV files.
- View and analyze the results in your web application.

## Contributing

Contributions to further improve the project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
