$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

function hideSideNav() {
	$('#sidebar').toggleClass('active', true);

} 