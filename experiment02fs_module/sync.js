const fs=require('fs');
fs.writeFileSync('Synstudent.txt','this is the experiment 2 in fds workshop','utf8');
console.log('file is written successfully');
//read

const data=fs.readFileSync('Synstudent.txt','utf8');
console.log('file is created ',data);

//append
fs.appendFileSync('Synstudent.txt','\n this line is added by append','utf8');
console.log('file content is append ');

//delete
// fs.unlinkSync('riya.txt',);
// console.log('file is deleted');

// //create folder

//delete folder
// fs.rmdirSync('folder');


//check file exist or not
if(fs.existsSync('Synstudent.txt')){
    console.log('file exists!');
}
else{
    console.log('file does not exist');
}