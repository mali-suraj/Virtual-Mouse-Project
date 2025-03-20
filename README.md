# Virtual-Mouse-Project


This project implements a virtual mouse using hand tracking and computer vision techniques. It enables users to control the mouse cursor and perform click actions with hand gestures, eliminating the need for a physical mouse.

## Features
- Move the cursor using hand gestures.
- Perform left and right clicks using finger positions.
- Smooth and accurate tracking using `OpenCV` and `Mediapipe`.
- Fast API integration for web-based applications.

## Demo
![Virtual Mouse in Action](Virtual%20Mouse.gif)

## Requirements
Ensure you have the following dependencies installed:
```bash
pip install opencv-python numpy mediapipe autopy fastapi uvicorn
