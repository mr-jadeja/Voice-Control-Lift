from gtts import gTTS
mytext1 = "building has only four floor. please tell me right floor"
languages = "en"
myobj = gTTS(text=mytext1,lang=languages,slow=False)
myobj.save("notfloor.mp3")


mytext2 = "tell me on which floor you want to go?"
lang2 = "en"
myobj1 = gTTS(text=mytext2, lang=lang2,slow=False)
myobj1.save("gotofloor.mp3")

mytext3 = "Have a nice day"
myobj2 = gTTS(text=mytext3,lang=lang2,slow=False)
myobj2.save("thank.mp3")