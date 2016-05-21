$(document).ready(function() {
    
    // events
    $('form').submit(function(event) {
        event.preventDefault();
        
        var company = $('#company').val() || null;
        var product = $('#product').val() || null;
        var center = $('#center').val() || null;
        var year = $('#year').val() || null;
        
        $.getJSON('/query/inventory/'+center+'/'+product+'/'+company+'/'+year, function(data) {
            obj.render(data);
        });
        
    });
});


var obj = {
    render: function(data) {
        $('#content').html('');
        
        var data = data.data;
        
        for(var i = 0; i < data.length; i++) {
            var date = new Date(data[i].created_on);
            if(data[i].company_name == null) {
                data[i].company_name = 'Hope Foundation';
            }
            
          var html = '<div class="list-group-item">' +
            '<div class="row-action-primary">' +
              '<i class="material-icons">folder</i>' +
             '</div>' +
            '<div class="row-content">'+
              '<div class="least-content">'+date.toDateString()+'</div>'+
              '<h4 class="list-group-item-heading">'+data[i].company_name+'</h4>'+
              '<p class="list-group-item-text">'+data[i].product_name+'</p>'+
              '<p class="list-group-item-text">'+data[i].description+'</p>'+
              '<div class="list-group-item-text">'+data[i].procurement_type+'</div>'+
            '</div>'+
          '</div>'+
          '<div class="list-group-separator"></div>';
          $('#content').append(html);
          
        }
          
    }
}