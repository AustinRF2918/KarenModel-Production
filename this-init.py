import os

def executeCommand(word, command):
    print('!!!!!!!!!!!!!!!!!!!!')
    print('!!!!!!!!!' + word + '!!!!!!!!')
    print('!!!!!!!!!!!!!!!!!!!!')
    os.system(command);

#Insecure. But this is a development script so it doesn't matter.
#Also, this should all probably be packed into a seperate script
#to make it easier to modify...
executeCommand('Installing express.', 'npm install express --save-dev')
executeCommand('Installing Tiny-LR.', 'npm install tiny-lr --save-dev')
executeCommand('Installing Live Reload.', 'npm install express --save-dev')


