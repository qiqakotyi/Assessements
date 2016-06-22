(function ($, undefined) {
    $(document).ready(function () {

        var contacts = [
            {
                name: 'Christian',
                email: 'christian@yahoo.com',
                mobile: '323-545-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            }
            ,
            {
                name: 'Rich',
                email: 'rich@tripod.com',
                mobile: '323-515-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            },
            {
                name: 'Scott',
                email: 'scott@malinator.com',
                mobile: '323-595-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            },
            {
                name: 'Danny',
                email: 'danny@hotmail.com',
                mobile: '323-585-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            },
            {
                name: 'Taka',
                email: 'taka@myspacer.com',
                mobile: '323-575-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'offline'
            },
            {
                name: 'Tim',
                email: 'tim@netspace.com',
                mobile: '323-525-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'away'
            },
            {
                name: 'Patrick',
                email: 'patrick@live.com',
                mobile: '323-545-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            },
            {
                name: 'Jacques',
                email: 'jacques@aol.com',
                mobile: '323-555-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'away'
            }
        ];

        var col = $('.contacts');
        var name = $('.name');
        var email = $('.email');
        //Iterate through array of names and contacts 
        $.each(contacts, function (index, val) {
            name.text(val.name);
            
            email.text(val.email);
            
            // Online ,offline and away statuses
            if (val.status === 'online') {
                name.prepend('<img src="assets/imgs/green-dot.png">');
            } else if (val.status === 'offline') {
                name.prepend('<img src="assets/imgs/red-dot.png">');
            }
            else {
                name.prepend('<img src="assets/imgs/away-dot.png">');
            }
                //change output on select
            $('.contact-select').on('change',function() {
                var option = $('option:selected',this);  
                var valueSelected = this.value;  
                
                if(valueSelected === 'Phone number') {
                    email.text(val.mobile);
                    console.log(val.mobile);
                }else {
                    email.text(val.email);
                }
            });
            // clone dom element
            col.clone().appendTo('.col');
            col.closest('.contacts').remove();
        });
            
  
            
    });
})(jQuery);