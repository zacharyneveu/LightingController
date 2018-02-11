# server.py
from flask import Flask, render_template
import serial

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

# serInit() initializes resources needed for serial com with arduino
def serInit():
    try:
        port = input("Enter a serial port: ")
        baud = input("Enter a baud rate (9600 recommended): ")
        #TODO: check if error before returning
        return serial.Serial(port, baud, timeout=0)
    except:
        "COM Port is not available or Baud rate invalid"
        return None


# serDeInit() de-initializes resources needed for serial com
def serDeInit(serial):
    serial.close()

#sendCommand sends a char over serial to the Arduino
#@param serial - instance of serial object
#@param command - single byte to send over serial
def sendCommand(serial, command):
    try:
        serial.write(command)
    except:
        "Serial does not exist"

@app.route("/")
def index():
    return render_template("index.html")

################################################################################
#   Routes below are for serial communication
################################################################################

# Initialize a serial object when app initializes
ser = serInit()

# return data for hello
@app.route("/Rainbow")
def hello():
    sendCommand(ser, 'r')
    return


################################################################################
#   App run func below this
################################################################################

if __name__ == "__main__":
    app.run()
