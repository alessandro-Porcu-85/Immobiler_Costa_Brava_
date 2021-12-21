var locations = new Array();

locations[0] = "20,Aigua Xelida,4";
locations[1] = "5,AiguaBlava,1";
locations[2] = "7,Aiguafreda,1";
locations[3] = "67,Albons,6";
locations[4] = "77,Baix Empordà,6";
locations[5] = "1,Begur,1";
locations[6] = "21,Calella de Palafrugell,2";
locations[7] = "8,Casa de Campo,1";
locations[8] = "31,Corça,6";
locations[9] = "10,Es Valls,1";
locations[10] = "11,Esclanyá,1";
locations[11] = "28,Foixà,6";
locations[12] = "78,Forallac,6";
locations[13] = "22,Golfet,2";
locations[14] = "79,l'Escala,9";
locations[15] = "72,La Bisbal de l&#39;Empordà,6";
locations[16] = "2,La Borna,1";
locations[17] = "18,La Pineda,3";
locations[18] = "33,La Tallada,6";
locations[19] = "36,Llafranc,2";
locations[20] = "68,Llofriu,6";
locations[21] = "12,Mas Mató,1";
locations[22] = "9,Mas Prats,1";
locations[23] = "16,Mas Tomasi,3";
locations[24] = "17,Masos de Pals	,3";
locations[25] = "27,Monells,6";
locations[26] = "26,Mont Ras,6";
locations[27] = "13,Palafrugell ,2";
locations[28] = "73,Palamós,7";
locations[29] = "14,Pals,3";
locations[30] = "35,Peratallada,6";
locations[31] = "70,Platja d&#39;Aro,6";
locations[32] = "15,Playa de Pals,3";
locations[33] = "38,Regencos,1";
locations[34] = "76,S&#39;Agaró,6";
locations[35] = "3,Sa Punta,1";
locations[36] = "4,Sa Riera,1";
locations[37] = "6,Sa Tuna,1";
locations[38] = "69,Sant Antoni de Calonge,6";
locations[39] = "34,Sant Climent,6";
locations[40] = "23,Sant Feliu de Boada,6";
locations[41] = "25,Sant Feliu de Guixols,6";
locations[42] = "24,Sant Juliá de Boada,6";
locations[43] = "75,Sant Sadurni de l’Heure,6";
locations[44] = "71,Santa Cristina d&#39;Aro,6";
locations[45] = "19,Tamariu,4";
locations[46] = "29,Torrent,6";
locations[47] = "32,Torroella de Montgrí,6";
locations[48] = "30,Ullastret,6";
locations[49] = "37,Vall-Llobrega,6";




$(document).ready(function() {
    var location_select = '';
    //al realitzar una cerca guardem la selecció anterior de la localitat

    if (location_select) {
        var area = $("#select_area").find(':selected').val();
        var loc = '<option value=""></option>';
        var order = [];
        if (area) {
            for (var i = 0; i < locations.length; i++) {
                var locat = locations[i].split(",");
                if (parseInt(area) == parseInt(locat[2])) {
                    order[locat[1]] = locat[0];
                }
            }
            var keys = Object.keys(order);
            var i;
            var len = keys.length;

            keys.sort();
            var order_loc;
            for (i = 0; i < len; i++) {
                k = keys[i];
                if (location_select == order[k]) {
                    loc += '<option value="' + order[k] + '"' + " selected" + '>' + k + '</option>';
                } else {
                    loc += '<option value="' + order[k] + '">' + k + '</option>';
                }
            }
            console.log(loc);
            $('#locations').html(loc);
        }

    } else // si a la cerca anterior no vam escollir cap localitat, muntem el combo segons l'àrea escollida	
    {
        var area = $("#select_area").find(':selected').val();
        var loc = '<option value=""></option>';
        var selected = "";
        var order = [];
        if (area) {
            for (var i = 0; i < locations.length; i++) {
                var locat = locations[i].split(",");
                if (parseInt(area) == parseInt(locat[2])) {
                    order[locat[1]] = locat[0];
                }
            }
            var keys = Object.keys(order);
            var i;
            var len = keys.length;

            keys.sort();
            var order_loc;
            for (i = 0; i < len; i++) {
                k = keys[i];
                loc += '<option value="' + order[k] + '">' + k + '</option>';
            }
            $('#locations').html(loc);
        }
    }
});

// mostrar desplegable more optons si havíem seleccionat alguna opcio abans de la fer la cerca
var options = "" + "" + "" + "";
if (options) {
    $("#options").slideDown('fast');
    $("#buscador").css("height", "433px");
}

// Menu more options quan cliquem sobre
$("#moreOptions span ").click(function(event) {
        //event.preventDefault();
        if ($("#options li").is(":hidden")) {
            $("#options li").slideDown('fast');

        } else {
            $("#options li").slideUp('fast');

        }
    })
    // quan modifiquem l'àrea muntem combo localitats
$("#select_area").change(function(event) {
    var area = $("#select_area").find(':selected').val();
    var loc = '<option value=""></option>';
    var order = [];
    if (area) {
        locations.sort();
        for (var i = 0; i < locations.length; i++) {
            var locat = locations[i].split(",");
            if (parseInt(area) == parseInt(locat[2])) {
                order[locat[1]] = locat[0];
            }
        }
        var keys = Object.keys(order);
        var i;
        var len = keys.length;

        keys.sort();
        var order_loc;
        for (i = 0; i < len; i++) {
            k = keys[i];
            loc += '<option value="' + order[k] + '">' + k + '</option>';
        }
        $('#locations').html(loc);
    } else {
        loc = null;
        locations.sort();
        for (var i = 0; i < locations.length; i++) {
            var locat = locations[i].split(",");
            order[locat[1]] = locat[0];
        }
        var keys = Object.keys(order);
        var i;
        var len = keys.length;

        keys.sort();
        var order_loc;
        for (i = 0; i < len; i++) {
            k = keys[i];
            loc += '<option value="' + order[k] + '">' + k + '</option>';
        }
        $('#locations').html(loc);
    }

});



//<script type="text/javascript" src="/templates/common/_scripts.js?v=6.66"></script>

//<script type="text/javascript">
$('a[href^=mailto]').click(function() {
    _gaq.push(['_trackEvent', 'FX-Events', 'Clicks', $(this).attr('href'), 1, true]);
});
$('a[href$=pdf]').click(function() {
    _gaq.push(['_trackPageview', $(this).attr('href')]);
    _gaq.push(['_trackEvent', 'FX-Events', 'Download', $(this).attr('href'), 1, true]);
});
$('.inquiry').click(function() {
    _gaq.push(['_trackEvent', 'FX-Events', 'Inquiry', $("#category_id").val(), 1, true]);
});
$('.promo-link').click(function() {
    _gaq.push(['_trackEvent', 'FX-Events', 'Promotions', $(this).attr('data-id'), 1, true]);
});
$('a[href^="tel:"]').click(function() {
    _gaq.push(['_trackEvent', 'FX-Events', 'Calls', $(this).attr('href'), 1, true]);
});
//</script>

//<script type="text/javascript">
function fxTrackInquiry(action, label, value) {
    var defVal = 1;
    action = action || 'Inquiry';
    label = label || '';
    value = value !== null && !isNaN(value) ? parseFloat(value) : defVal;
    if (window._gaq)
        _gaq.push(['_trackEvent', 'FX-Events', action, $("#category_id").val(), 1, true]);
    if (window.fbq)
        fbq('track', 'Lead');
}
//</script>