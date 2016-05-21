$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        
        var id = $('#id').val();
        var product_name = $('#product_name').val();
        var description = $('#description').val();
        var model = $('#model').val();
        var center_id = $('#center_id').val();
        var company_name = $('#company_name').val();
        var emp_resp = $('#emp_resp').val();
        var procurement_type = $('#procurement_type').val();
        var recipient_id = $('#recipient_id').val();
        var status = $('#status').val();
        
        var obj = {
            id: id,
            product_name: product_name,
            description: description,
            model: model,
            center_id: center_id,
            company_name: company_name,
            emp_resp: emp_resp,
            procurement_type: procurement_type,
            recipient_id: recipient_id,
            status: status,
            created_on: null
        }
        
        $.ajax({
            url: '/allocate/create',
            type: 'post',
            dataType: 'json',
            success: function(data) {
                // data posted successfully
                $('form')[0].reset();
                
                var elem_alert = '<div class="alert alert-dismissible alert-success">'+
                            '<button type="button" class="close" data-dismiss="alert">×</button>'+
                            'You successfully update the inventory.'+
                            '</div>';
                $('#content').html(elem_alert);
            },
            data: obj
        });
          
    })
})