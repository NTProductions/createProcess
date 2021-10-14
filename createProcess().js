var copyPath = extPath + "/bin/Win/copy.exe";

var programID = window.cep.process.createProcess(copyPath.replace(/%20/g, " "));
window.cep.process.onquit(programID.data, function() {
// code to execute after process id complete/closed
});