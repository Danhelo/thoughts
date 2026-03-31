start watching at 12:31:30

omeleo :2:25:00 am
#MSU/AIClub #project #CS
# Devpost:
## Inspiration

The Neurosity's Crown is a powerful EEG device with endless potential, and we choose to use it for entertainment purposes, specifically watching movies. This project enables everyone to retain tangible memories of the movies they have watched.

## What it does

The user will wear the Neurosity's Crown on their head and begin watching a movie. Their focus data will then be recorded smoothly into a .csv file format by the Crown and stored in our system. After the user finishes watching the movie, our program will proceed to clean the data to facilitate data analysis and manipulation. Our program will then perform algorithms, which use standard deviation and z-score, on the cleaned data to determine which parts of the movie the user was most focused on. Finally, the program will extract those "favorite moments" clips from the movie using the starting and ending timestamps provided by the algorithms. We also work with YouTube videos in addition to movies.

## How we built it

We used Node.js, Neurosity API, and Bluetooth to connect the Crown to our computers. Regarding the data processing, algorithms, and video extraction parts, we used Python, pandas, pytube, and moviepy.

## Challenges we ran into

We are all new to Electroencephalography (EEG) data, which is the electrical signals your brain's neurons use to communicate with each other. It took us a long time to acquaint ourselves with the intricacies of this data and the Crown itself. Another problem was that the data initially recorded by the Crown did not match the format that we wanted, so we had to come up with a way to clean and preprocess it. Furthermore, there were many rules we had to stick to while we were watching the movies, such as keeping our heads completely still or sitting in a very quiet environment. If those rules were violated, the quality of the data would be greatly jeopardized.

## Accomplishments that we're proud of

This project is by no means simple. Working with and understanding EEG data as undergraduate students is already a huge feat, and we even managed to tailor it to our preferences by completing this project.

## What we learned

How to work with complex data such as EEG data, multiple data science techniques such as using standard deviation and z-score, and how to create a compact pipeline to get from recording the data to extracting the clips.

## What's next for Neurosity

We will build a mobile app using React Native, Firebase, and Node.js to demonstrate this project during the upcoming semester.

## Built With

- [firebase](https://devpost.com/software/built-with/firebase)
- moviepy
- [node.js](https://devpost.com/software/built-with/node-js)
- [pandas](https://devpost.com/software/built-with/pandas)
- [python](https://devpost.com/software/built-with/python)
- pytube
- [react-native](https://devpost.com/software/built-with/react-native)

## Try it out

-  [GitHub Repo](https://github.com/Imagine-Software-Club/PRJ-JG8NG-Neurosity/tree/example_code "https://github.com/Imagine-Software-Club/PRJ-JG8NG-Neurosity/tree/example_code")
