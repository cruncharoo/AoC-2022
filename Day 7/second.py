testInput = [
    "$ cd /",
    "$ ls",
    "dir a",
    "14848514 b.txt",
    "8504156 c.dat",
    "dir d",
    "$ cd a",
    "$ ls",
    "dir e",
    "29116 f",
    "2557 g",
    "62596 h.lst",
    "$ cd e",
    "$ ls",
    "584 i",
    "$ cd ..",
    "$ cd ..",
    "$ cd d",
    "$ ls",
    "4060174 j",
    "8033020 d.log",
    "5626152 d.ext",
    "7214296 k",
]


# let currDir = [];
# let contents = [];

currDir = []
contents = []
outputDirs = []
lsList = {}

# for (let x = 0; x < testInput.length; x++) {
for index, value in enumerate(testInput):
#     if (line.startsWith("$ cd") || x === testInput.length - 1) {
    if value[0:4] == "$ cd" or index == len(testInput) - 1:
#         if (contents.length > 0) {
        if len(contents) > 0:
#             if (x === testInput.length - 1) {
            if (index == len(testInput) - 1):
#                 contents.push(line);
#             }
                contents.append(value)
            outputDirs.append([currDir[-1], contents])
            contents = []
#             contents = [];
#         }
#         if (x !== testInput.length - 1) {
        if (index is not len(testInput) - 1):
#             const command = line.slice(5);
            command = value[5:]
#             if (command === "..") {
            if command == "..":
#                 currDir.pop();
#             }
                currDir.pop()
#             else {
#                 currDir.push(command);
#             }
            else:
#         }
               currDir.append(command) 
#     else if (line.startsWith("$ ls")) {
    elif value[0:4] == "$ ls":
        lsList[currDir[-1]] = 1
#     else {
#         contents.push(line);
    else:
        contents.append(value)


print(outputDirs)


values = {}

keep_going = True

while keep_going:
    keep_going = False
    for dir in outputDirs:
        all_values = True
        temp_value = 0
        for contents in dir[1]:
            if contents[0:3] == "dir":
                if values.get(contents[4:]):
                    temp_value += values.get(contents[4:])
                else:
                    if lsList.get(contents[4:]):
                        all_values = False 
            else:
                temp_value += int(contents[0:contents.index(" ")])
        if all_values:
            values[dir[0]] = temp_value
        else:
            keep_going = True

print(values)

new_sum = 0

for key,value in values.items():
    if value <= 100000:
        new_sum += value

print(new_sum)