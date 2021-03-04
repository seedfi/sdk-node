
import re

first = True
with open("output.ts", "w") as out:
    with open("apicontracts.ts", "r") as f:
        for l in f.readlines():
            l = l.strip()
            try:
                if l.startswith("if((obj") and l.endswith(")) {") and "!= undefined) && (obj" in l: 
                    continue
                
                if 'class' in l:
                    if not first:
                        out.write("}\n")
                    name = l.split()[1]
                    extends = ""
                    if "extends" in l:
                        extends = re.compile(r'extends \w+').search(l).group(0)
                    out.write("interface {} {} {{\n".format(name, extends))
                    first = False
                
                if 'if((' in l:
                    name = l.split('\'')[1]
                    typ = "any"
                    if 'new' in l:
                        typ = re.compile(r'new (\w+)').search(l).group(1)
                    out.write("    {}?: {},\n".format(name, typ))   

            except Exception as e:
                print("STOPPING")
                print(e)
                print(l)
                break
    out.write("}\n")