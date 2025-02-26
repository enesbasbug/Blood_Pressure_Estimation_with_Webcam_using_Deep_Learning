# Blood Pressure Estimation using Deep Learning

<img src="images/1st.png" width="700"/> 
<img src="images/2nd.png" width="700"/> 

## Project Overview
This repository contains a research project for estimating blood pressure using deep learning techniques and rPPG signal extraction.

## Important Notes
- This is a personal research project, and results may vary based on various factors.
- The accuracy of blood pressure estimation is dependent on multiple parameters including webcam quality, lighting conditions, distance from camera, skin tone, and environmental conditions.
- As this is a research project, please understand that the model does not guarantee 85-100% accuracy in blood pressure estimation.
- The trained model file (model_5.h5) is not included in this public repository. For research collaboration or access to the trained model, please contact me directly.
- The training notebook (MSc_DL_Model.ipynb) is not included, but the dataset is provided so you can train your own model.
- For professional consultation or implementation support, feel free to reach out via email.
- The code will be refactored and improved in the future when time permits.
- If you find this project helpful, please consider giving it a star! Your support is appreciated.

## Folder Description
- MSc_DL_Model.ipynb : The file where I built and trained my DL models, data visualization and data manipulation (not included in this repository)
- app.py : The file where Flask framework used to connect both DL model and the website
- model_5.h5 : The trained model with Adam optimization function (not included in this repository)
- heartbeat.js and index.js : The implementation for extracting rPPG signal
- index.html : The website

## Installation & Execution Steps
1. Begin by downloading the dataset from the provided link: [Dataset Link](https://drive.google.com/file/d/19q0Q4wqKwfp9ZWzy_PsPxItMVGXXnTcG/view). Place the downloaded file into the Code folder, ensuring both files are in the same directory. 

2. Run the `app.py` file before launching the `index.html` file. In your terminal, execute the command: `python app.py`. Then, open the generated link by clicking on it. (It's important to mention that this webpage is not used for blood pressure estimation.)

3. If you're using Visual Studio Code, right-click on the `index.html` file and choose the "Open with Live Server" option. This will open the HTML file, allowing you to estimate your blood pressure by clicking the 'Let's predict your BP' button.

4. While the `app.py` is running, you can use the `index.html` file to measure your blood pressure.
   - Ensure that you have the browser's Inspect tool open (preferably in Chrome). In the console of the Inspect tool, you'll see logs indicating that the website is running and successfully tracking your face.
   - After approximately 10 seconds, your predicted blood pressure will appear in a pop-up menu once the webcam detects your face and remains stable.

## Contact & Support
If you require any assistance, guidance, or are interested in research collaboration, custom implementations, or consulting services related to this project, feel free to reach out via email at enesbasbugeng@gmail.com.

Best regards,
Enes
