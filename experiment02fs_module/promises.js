// promises
const fs = require('fs').promises;
async function writeFile(){
    try{
        await fs.writeFile("promises.txt","Hello Student!");
        console.log("file created and data written successfully.");
    } catch (error){
        console.log("error: ",error);
    }
}
writeFile();

// read
async function readFile(){
    try{
        const data = await fs.readFile("promises.txt","utf8");
        console.log("file content");
        console.log(data);
    } catch(error){
        console.log("error: ",error);
    }
}
readFile();

// update 
async function appendFile(){
    try{
        await fs.appendFile("promise.txt", "\n Welcome to FSD Training.");
        console.log("Data appended successfully");
    } catch(error){
        console.log("error: ", error);
    }
}
appendFile();

// rename 
async function renameFile() {
    try {
        // syntax: fs.rename("old_name.txt", "new_name.txt")
        await fs.rename("promises.txt", "renamed_promises.txt");
        console.log("File renamed successfully!");
    } catch (error) {
        console.log("Error renaming file:", error);
    }
}
renameFile();

// delete
async function deleteFile() {
    try {
        // syntax: fs.unlink("file_path")
        await fs.unlink("promisesStudent.txt");
        console.log("File deleted successfully!");
    } catch (error) {
        console.log("Error deleting file:", error);
    }
}
deleteFile();