import cv2
import datetime

now   = datetime.datetime.now()
str   = now.strftime("%Y%m%d%H%M%S")
path  = "./public/images/cap/cap"
fName = path + str + ".png"

cam = cv2.VideoCapture(2)

if not cam.isOpened():
    print("Could not open webcam")
    exit()

if cam.isOpened():
    status, img = cam.read()

    if status:
        cv2.imwrite(fName, img)
