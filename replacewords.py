import os
def main():
    path = "."


    roots = []
    dirss = []
    filess = []
    for (root,dirs,files) in os.walk('.', topdown=True): 
        roots.append(root) 
        dirss.append(dirs) 
        filess.append(files) 

    #print(roots[0],dirss[0],filess[0])
    '''
    f = open("./testfile.txt","r")
    contents = f.read()
    edited = contents.replace("Lexend","'Courier New', monospace")
    print(edited)
    f.close()

    f = open("./testfile.txt","w")
    f.write(edited)
    f.close()
    '''


    # for i in range(len(roots)):
        
    for i in range(len(roots)):
        for j in range(len(filess[i])):
            filepath = str(roots[i])+"/"+str(filess[i][j])
            f = open(filepath,"r")
            if filepath == "./replacewords.py":
                pass
            else:
                try:
                    contents = f.read()
                    edited = contents.replace("Arial","'Courier New', monospace")
                    f.close()
    
                    f = open(filepath,"w")
                    f.write(edited)
                    f.close()
                    print("file changed: " + filepath)
                except Exception:
                    print("file failed to read: "+filepath)
    

    # for x in dirss:
    #     for y in x:
    #         for z in y:
    #                 print(str(root)+str(y)+str(z))
        
main()