var fs=require('fs-extra');
var YandexDisk = require('yandex-disk').YandexDisk;
var Sync=require('sync');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var sync = require('synchronize')


exports.upload=function(fname,domain,capability,command,age,gender,ethnicity,place,res){
// print("COME TO THE UPLOAD,JS FILE");
console.log("COME TO THE UPLOAD JS");
var fname=fname+".webm"  //added the file type

//file manipulation - placing files where should be

// fs.copySync(__dirname+'/files/upload/'+fname,__dirname+'files/upload/'+command);
// fs.removeSync(__dirname+'/files/upload/'+fname)

//yandex uploading

var disk = new YandexDisk('voice.collector', 'abc@123');
//sequrity what is the car - hucar

console.log("disk is "+disk);

sync(disk, 'exists', 'mkdir', 'uploadFile','cd')

function domainChecker() {
        console.log('domain checker');

        // setTimeout(() => resolve('☕'), 2000); // it takes 2 seconds to make coffee
        disk.exists("./"+domain, function(err, exists) {
            console.log("checking for the domain folder");
            if(!exists){
                console.log("creating the domain folder");
                disk.mkdir(domain, function(err, status) {
                        if (err){
                            console.log(err);
                        }
                })
                console.log("outside");
            }
            else{
            console.log("domain folder exists");}
            
        });
        // callback;

}
function commandChecker(){
    console.log("command checker")
    
    disk.exists("./"+domain+"/"+command, function(err, exists) {
        console.log("checking for the command folder");
        consolo.log(command);
        if(!exists){
            console.log("creating a sub folder with command's name");
            disk.mkdir("./"+domain+"/"+command, function(err, status) {
                if (err){
                    console.log(err);
                }
        })
        }
        else{
            console.log("command folder exists")
        }
    
    });
    // callback;
    
}   
function changeDirectory(){
    console.log("before uploading");
    return new Promise((resolve, reject) => {
        var cap=parseInt(capability)+1;
        var com=parseInt(command)+1;
        console.log("./"+domain+"/"+cap+"/"+com+"/"+fname);
        disk.uploadFile(__dirname + '/files/upload/'+fname,"./"+domain+"/"+cap+"/"+com+"/"+ethnicity+"/"+gender+"/"+age+"/"+place+"/"+fname, function(err) {
            if (err) {
                console.log(err)
                return reject(err);
            }
            disk.exists(fname, function(err, exists) {
                return reject(err);
            });
            // res.send("sdudeepa");
            console.log("done uploading")
            resolve(err);
            // res.sendStatus(200);
        });
    });
    
}
async function upload2(){
    var cap=parseInt(capability)+1;
    var com=parseInt(command)+1;
    fs.copySync(__dirname+'/files/upload/'+fname,__dirname+"/files/"+domain+"/"+cap+"/"+com+"/"+ethnicity+"/"+gender+"/"+age+"/"+place+"/"+fname);
// fs.removeSync(__dirname+'/files/upload/'+fname)
    let error= await changeDirectory();
    res.sendStatus(200);
}

upload2();
}
