$(document).ready(function() {
    
    // sldkjf
    $.getJSON('/api/products', function(data) {
        
         $('#products').html('');
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
              '<div class="least-content">'+data[i].category+'</div>'+
              '<h4 class="list-group-item-heading">'+data[i].name+'</h4>'+
            '</div>'+
          '</div>'+
          '<div class="list-group-separator"></div>';
          $('#products').append(html);
          
        }
    });
        
    // click event
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        
        var res = $(this).html().toLowerCase();
        debugger;
        $.getJSON('/api/'+res, function(data) {
              
              var str = res[0].toUpperCase() + res.slice(1);
              var elem = $('#'+str);
              elem.html('');
        var data = data.data;
        for(var i = 0; i < data.length; i++) {
          
          if(str === 'Employees') {
              var html = '<div class="list-group-item">' +
            '<div class="row-action-primary">' +
              '<i class="material-icons">folder</i>' +
             '</div>' +
            '<div class="row-content">'+
              '<h4 class="list-group-item-heading">'+data[i].emp_id+'</h4>'+
              '<p class="list-group-item-heading">'+data[i].name +'</p>'+
              '<p class="list-group-item-heading">'+data[i].role_name +'</p>'+
              '<p class="list-group-item-heading">'+data[i].center_id +'</p>'+
            '</div>'+
          '</div>'+
          '<div class="list-group-separator"></div>';
          $('#employees').append(html);
          } else if (str === 'Locations') {
              var html = '<div class="list-group-item">' +
            '<div class="row-action-primary">' +
              '<i class="material-icons">folder</i>' +
             '</div>' +
            '<div class="row-content">'+
              '<h4 class="list-group-item-heading">'+data[i].center_id+'</h4>'+
              '<p class="list-group-item-heading">'+data[i].center_name +'</p>'+
              '<p class="list-group-item-heading">'+data[i].city +'</p>'+
              '<p class="list-group-item-heading">'+data[i].center_head_id +'</p>'+
            '</div>'+
          '</div>'+
          '<div class="list-group-separator"></div>';
          $('#locations').append(html);
          } else if(str === 'Donors') {
               var html = '<div class="list-group-item">' +
            '<div class="row-action-primary">' +
              '<i class="material-icons">folder</i>' +
             '</div>' +
            '<div class="row-content">'+
              '<p class="list-group-item-heading">'+data[i].company_name +'</p>'+
              '<p class="list-group-item-heading">'+data[i].location +'</p>'+
              '<p class="list-group-item-heading">'+data[i].emp_resp +'</p>'+
            '</div>'+
          '</div>'+
          '<div class="list-group-separator"></div>';
          $('#donors').append(html);
          }
          
          
        }
        });
    });
    

});

      var obj = {
      htmlEmployee: '<div class="list-group-item">' +
            '<div class="row-action-primary">' +
              '<i class="material-icons">folder</i>' +
             '</div>' +
            '<div class="row-content">'+
              '<h4 class="list-group-item-heading">'+data[i].emp_id+'</h4>'+
              '<p class="list-group-item-heading">'+data[i].name +'</p>'+
              '<p class="list-group-item-heading">'+data[i].role_name +'</p>'+
              '<p class="list-group-item-heading">'+data[i].center_id +'</p>'+
            '</div>'+
          '</div>'+
          '<div class="list-group-separator"></div>',
      htmlLocations:'<div class="list-group-item">' +
            '<div class="row-action-primary">' +
              '<i class="material-icons">folder</i>' +
             '</div>' +
            '<div class="row-content">'+
              '<div class="least-content">'+data[i].company_name+'</div>'+
              '<h4 class="list-group-item-heading">'+data[i].gender+'</h4>'+
            '</div>'+
          '</div>'+
          '<div class="list-group-separator"></div>',
      htmlDonors: '<div class="list-group-item">' +
            '<div class="row-action-primary">' +
              '<i class="material-icons">folder</i>' +
             '</div>' +
            '<div class="row-content">'+
              '<div class="least-content">'+data[i].company_name+'</div>'+
              '<h4 class="list-group-item-heading">'+data[i].gender+'</h4>'+
            '</div>'+
          '</div>'+
          '<div class="list-group-separator"></div>'
  }