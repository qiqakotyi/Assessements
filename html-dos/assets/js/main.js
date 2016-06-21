(function ($, undefined) {
    $(document).ready(function () {

        var contacts = [
            {
                name: 'Christian',
                email: 'christian@yahoo.com',
                mobile: '323-555-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            }
            ,
            {
                name: 'Rich',
                email: 'rich@tripod.com',
                mobile: '323-555-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            },
            {
                name: 'Scott',
                email: 'scott@malinator.com',
                mobile: '323-555-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            },
            {
                name: 'Danny',
                email: 'danny@hotmail.com',
                mobile: '323-555-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'online'
            },
            {
                name: 'Taka',
                email: 'taka@myspacer.com',
                mobile: '323-555-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'offline'
            },
            {
                name: 'Tim',
                email: 'tim@netspace.com',
                mobile: '323-555-1234',
                address: '6539 Wilton Ave',
                address2: 'Culver City CA 90234',
                status: 'away'
            },
            {
                name: 'Patrick',
                email: 'patrick@live.com',
                mobile: '323-555-1234',
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

        $.each(contacts, function (index, value) {
            name.text(value.name);
            email.text(value.email);

            if (value.status === 'online') {
                name.prepend('<img src="assets/imgs/green-dot.png">');
            } else if (value.status === 'offline') {
                name.prepend('<img src="assets/imgs/red-dot.png">');
            }
            else {
                name.prepend('<img src="assets/imgs/away-dot.png">');
            }

            col.clone().appendTo('.col');
            col.closest('.contacts').remove();
        });

    });
})(jQuery);