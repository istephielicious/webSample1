$(document).ready(function () {
/*Setup date */
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
	today = yyyy+'-'+mm+'-'+dd;
	$('#sched').attr("min", today);
/*Setup sidebar*/
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        return;
    });
});

function hideSideNav() {
	$('#sidebar').toggleClass('active', true);

} 

function showSideNav() {
	$('#sidebar').toggleClass('active', false);
}