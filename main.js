var nameofthestudentarrray=[];
function submit(){
var displaystudentarray=[];
for (var j=1;j<=4;j++){
    var nameofthestudent=document.getElememtById("name_of_the_student_"+j).value;
    nameofthestudentarrray.push(nameofthestudent);

}
var lengthofarray=nameofthestudentarrray.length;

for (var k=0;k<lengthofarray;k++){
    displaystudentarray.push("<h4>name- "+nameofthestudentarrray[k]+"</h4>");
    
}
document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
var removecommaas=displaystudentarray.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecommaas;
document.getElementById("sumbit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";


}
function sorting(){
nameofthestudentarrray.sort();
var displaystudentarray=[];
var lengthofarray=nameofthestudentarrray.length;

for (var k=0;k<lengthofarray;k++){
    displaystudentarray.push("<h4>name- "+nameofthestudentarrray[k]+"</h4>");
    
}
document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
var removecommaas=displaystudentarray.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecommaas;
}

    
















