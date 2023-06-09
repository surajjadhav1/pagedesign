$(document).ready(function () {
var availableTags=["Agra","Ahmedabad","Ajmer","Aligarh","Allahabad","Amravati","Amritsar","Asansol","Aurangabad","Bareilly","Belgaum","Bhavnagar","Bhiwandi","Bhopal","Bhubaneswar","Bikaner","Bilaspur","Bokaro Steel City","Chandigarh","Coimbatore","Cuttack","Dehradun","Delhi","Dhanbad","Durgapur","Faridabad","Firozabad","Ghaziabad","Gorakhpur","Gulbarga","Guntur","Gurgaon","Guwahati","Gwalior","Hubli-Dharwad","Hyderabad","Indore","Jabalpur","Jaipur","Jalandhar","Jammu","Jamnagar","Jamshedpur","Jhansi","Jodhpur","Kakinada","Kalyan-Dombivali","Kannur","Kanpur","Karnal","Kochi","Kolhapur","Kolkata","Kollam","Kota","Kozhikode","Kurnool","Lucknow","Ludhiana","Madurai","Malappuram","Mathura","Mangalore","Meerut","Moradabad","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nagpur","Nanded","Nashik","Nellore","Noida","Palakkad","Patna","Pimpri-Chinchwad","Pondicherry","Pune","Raipur","Rajkot","Rajahmundry","Ranchi","Rourkela","Salem","Sangli","Satara","Siliguri","Solapur","Srinagar","Surat","Thane","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirunelveli","Ujjain","Vadodara","Varanasi","Vasai-Virar","Vijayawada","Visakhapatnam","Warangal"];
    $(".autocomplete").autocomplete({
        source: availableTags,
        minLength: 2,
        delay: 500,
    });

    function initAutocomplete($element) {
        $element.autocomplete({
            source: availableTags,
            minLength: 2,
            delay: 500,
        });
    }

    $('#returndate, #returndate2').hide();

    var dommaxAppends = 9;  // Maximum number of allowed cities
    var domnumAppends = 0;  // Counter for the number of cities
    $("input[type='radio']").on("change", function () {
        // Remove all appended elements
        $(".domAppendLi").remove();
        domnumAppends = 0;  // Reset the counter
    });

    $(".addCityButton").on('click', function () {
        if (domnumAppends < dommaxAppends) {
            var html = '<ul><li class="domAppendLi"><div class="row pad1 element "> <div class="col-md-10"> <div class="row"> <div class="col-md-3"> <div class="label font-sty1">From</div> <div class="tripHeading">   <input type="text" class="form-control form-control autocomplete ui-autocomplete-input"> </div> <div class="tripSubHeading font-13">BOM, Chhatrapati Shivaji International Airport India </div> </div> <div class="col-md-3"> <div class="label font-sty1">To</div> <div class="tripHeading">   <input type="text" class="form-control form-control autocomplete ui-autocomplete-input"></div> <div class="tripSubHeading font-13">Indira Gandhi International Airport </div> </div> <div class="col-md-3"> <div class="label font-sty1">Departure</div> <div class="tripHeading"> <div class="d-flex align-items-center"> <input type="date" class="form-control " id="expenseFrom" value="01/01/2023"> <!-- <img src="images/svg/Calendar Icon.svg" alt="icon" class="dp-calender-icon"> --> </div> </div> </div> <div class="col-md-3" id="returndate"> <div> <div class="label"> <span class="font-sty1">Return</span> </div> <div class="tripHeading"> <div class="d-flex align-items-center"> <input type="date" class="form-control " id="expenseFrom" value="31/01/2023"> <!-- <img src="images/svg/Calendar Icon.svg" alt="icon" class="dp-calender-icon"> --> </div> </div> </div> </div> </div> </div> <!-- Buttons for Appending Start --> <div class="col-md-2 btnadd mt-25" id="appendButtons"><a class="btn3  removeCityButton mt-20 remove"> <i class="fa fa-trash-o" aria-hidden="true"></i> Remove</a></div> <!-- Buttons for Appending End --></li></ul>';

            var $element = $(html);
            $(".addDomCity").append($element);
            $('#returndate, #returndate2').hide();

            initAutocomplete($element.find(".autocomplete"));


            $element.find(".removeCityButton").on("click", function () {
                $(this).closest(".domAppendLi").remove();
                domnumAppends--;
            });
            domnumAppends++;
        } else {
            // Reached the maximum number of cities
            alert("You can only add up to " + dommaxAppends + " cities.");
        }
    });

    // Domestic Function End //


    // International Function Start //
    var maxAppends = 9;  // Maximum number of allowed cities
    var numAppends = 0;  // Counter for the number of cities
    $("input[type='radio']").on("change", function () {
        // Remove all appended elements
        $(".intAppendLi").remove();
        numAppends = 0;  // Reset the counter
    });
    $(".addIntBtn").on('click', function () {
        if (numAppends < maxAppends) {
            var html = '<ul><li class="intAppendLi"><div class="row pad1 element "> <div class="col-md-10"> <div class="row"> <div class="col-md-3"> <div class="label font-sty1">From</div> <div class="tripHeading">    <input type="text" class="form-control autocomplete"> </div> <div class="tripSubHeading font-13">BOM, Chhatrapati Shivaji International Airport India </div> </div> <div class="col-md-3"> <div class="label font-sty1">To</div> <div class="tripHeading">   <input type="text" class="form-control autocomplete"></div> <div class="tripSubHeading font-13">Indira Gandhi International Airport </div> </div> <div class="col-md-3"> <div class="label font-sty1">Departure</div> <div class="tripHeading"> <div class="d-flex align-items-center"> <input type="date" class="form-control " id="expenseFrom" value="01/01/2023"> <!-- <img src="images/svg/Calendar Icon.svg" alt="icon" class="dp-calender-icon"> --> </div> </div> </div> <div class="col-md-3" id="returndate"> <div> <div class="label"> <span class="font-sty1">Return</span> </div> <div class="tripHeading"> <div class="d-flex align-items-center"> <input type="date" class="form-control " id="expenseFrom" value="31/01/2023"> <!-- <img src="images/svg/Calendar Icon.svg" alt="icon" class="dp-calender-icon"> --> </div> </div> </div> </div> </div> </div> <!-- Buttons for Appending Start --> <div class="col-md-2 btnadd mt-25" id="appendButtons"><a class="btn3 removeIntBtn mt-20 remove"> <i class="fa fa-trash-o" aria-hidden="true"></i> Remove</a></div> <!-- Buttons for Appending End --></li></ul>';

            var $element = $(html);
            $(".addIntCity").append($element);
            $('#returndate, #returndate2').hide();
            initAutocomplete($element.find(".autocomplete"));

            $element.find(".removeIntBtn").on("click", function () {
                $(this).closest(".intAppendLi").remove();
                numAppends--;
            });

            numAppends++;
        } else {
            // Reached the maximum number of cities
            alert("You can only add up to " + maxAppends + " cities.");
        }
    });

    // International Function End //

    $(':radio').change(function (event) {
        var id = $(this).data('id');
        // alert(id);
        if (id == 'returndatehidden') {
            $('#returndate, #returndate2').css('display', 'none');
            $(".addCityButton, .addIntBtn").addClass("none");
            $(".removeCityButton, .removeIntBtn").addClass("none");
            $(".addCity, .addIntCity").addClass("none");
        }
        if (id == 'returndate') {
            $(this).closest(".intAppendLi").empty();
            $('#returndate, #returndate2').css('display', 'block');
            $(".addCityButton, .addIntBtn").addClass("none");
            $(".removeCityButton, .removeIntBtn").addClass("none");
        }

        if (id == 'multicity') {
            $('#returndate, #returndate2').css('display', 'none');
            $(".addCity, .addIntCity").removeClass("none");
            $(".addCityButton, .addIntBtn").removeClass("none");
            $(".removeCityButton, .removeIntBtn").addClass("none");
        }
    });

    $(".travel__details").click(function (e) {
        $(".summary__block").collapse("show");
    });


    $("#toggle").click(function () {
        $(".search-reset-box").toggle();
    });
    $("#createTrip").click(function () {
        $(".createTrip").toggle();
    });
    $(".custom-checkbox").click(function () {
        $(".custom-checkbox").removeClass("active");
        $(this).addClass("active");
    });

    // // form-check-input
    // $('#expenseFrom').daterangepicker({
    //     singleDatePicker: true,
    //     startDate: moment().subtract(6, 'days')
    // });
    // $('#expenseTo').daterangepicker({
    //     singleDatePicker: true,
    //     startDate: moment()
    // });
});