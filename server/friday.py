import speech_recognition as sr
from playsound import playsound
import time
def call_lift():
    playsound("welcome.mp3")
    flag_for_floor = 0
    while flag_for_floor == 0:
        r = sr.Recognizer()
        with sr.Microphone() as source:
            print("say something---")
            Audio = r.record(source, duration=5)
            try:
                text = r.recognize_google(Audio)
            except:
                print("value error")
            try:
                print(text)
                num = None
                floorlist = {
                    0 : ['ground','zero','0'],
                    1 : ['first','1st','one','1'],
                    2 : ['second','2nd','two','2'],
                    3 : ['third','3rd','three','3'],
                    4 : ['forth','4th','four','4'],
                    5: ['fifth', '5th', 'five', '5']
                }
                def get_key(val):
                    for key,value in floorlist.items():
                        if val in value:
                            num = key
                            return num
                    return None

                for word in text.split():
                    num = get_key(word)
                    print(num)
                    if num != None:
                        break

                if num != None:
                    if num == 5:
                        playsound("notfloor.mp3")
                    else:
                        flag_for_floor = 1
                else:
                    playsound("notunderstand.mp3")
            except:
                print("Speech not recognize")

    return num

def goto_lift():
    time.sleep(10)
    playsound("gotofloor.mp3")
    flag_for_floor = 0
    while flag_for_floor == 0:
        rnew = sr.Recognizer()
        with sr.Microphone() as source1:
            print("say ---")
            Audio = rnew.record(source1, duration=5)
            try:
                text = rnew.recognize_google(Audio)
            except:
                print("value error")
            try:
                print(text)
                num = None
                floorlist = {
                    0: ['ground', 'zero', '0'],
                    1: ['first', '1st', 'one', '1'],
                    2: ['second', '2nd', 'two', '2'],
                    3: ['third', '3rd', 'three', '3'],
                    4: ['forth', '4th', 'four', '4'],
                    5: ['fifth', '5th', 'five', '5']
                }

                def get_key(val):
                    for key, value in floorlist.items():
                        if val in value:
                            num = key
                            return num
                    return None

                for word in text.split():
                    num = get_key(word)
                    print(num)
                    if num != None:
                        break

                if num != None:
                    if num == 5:
                        playsound("notfloor.mp3")
                    else:
                        flag_for_floor = 1
                else:
                    playsound("notunderstand.mp3")
            except:
                print("Speech not recognize")

    return num

def thank_you():
    time.sleep(10)
    playsound("thank.mp3")
    return None