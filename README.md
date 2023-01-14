
Folder description:

	-- MSc_DL_Model.ipynb : The file where I built and trained my DL models, data 
	   visualisation and data manipulation 
	-- app.py : The file where Flask framework used to connect both DL model and the website.
	-- model_5.h5 is the trained model with Adam optimization function
	-- heartbeat.js and index.js : The implementation for extracting rPPG signal
	-- index.html : The website


In order to execute this programme, please follow:

1- Please download the dataset first. Then, put that file into the Code file. They have to be in the same folder.
   I had to remove it since there was a limitation (max 50 MB) on QM+. The dataset is a 55 MB file.
   LINK (https://drive.google.com/file/d/19MDJylakwdTKNS55zMpTtZX8PbYWNTkX/view?usp=sharing)
   
2- app.py file has to be run before running the index.html file. In terminal, run: python app.py
   Then, open the given link by clicking. (We are not using this web page to estimate BP)

3- I used Visual Studio Code, and in the application, I can run .html files by right-clicking the file and pressing Open with Live Server option. Then, it opens the html file. (Now, you can estimate your BP with this web page by clicking the button that says 'Let's predict your BP'.)

4- While app.py is executed, you are free to use index.html file to measure your BP.
	4.1- I suggest you, while trying to measure your BP, make sure that you have also opened
	     Inspects of the browser (mine was Chrome). In the console, in inspect, you can see the
	     logs saying the website is running and tracking your face properly. 
	4.2- After around 10 seconds, you can see your predicted BP on the pop-up menu; once 
             the webcam sees your face stayed remained.



Please let me know if you need any kind of help or guidance.
Email: enesbasbugeng@gmail.com

Regards,

Samil Enes Basbug