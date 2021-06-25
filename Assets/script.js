// var saveBtn = $('.saveBtn');
// var ninePlans = $('#ninePlans');
// var nineInput = $('input[name="nine"]').val();
// var tenPlans = $('#tenPlans');
// var tenInput = $('input[name="ten"]');


// $('input[name="first-name"]');





$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"))

// $(document).ready(function(){
//     timeBlocks();
// })
timeBlocks();
// moment().format('MMM DD, YYYY [at] hh:mm:ss a');



function timeBlocks() {

    var savePlans = [];
    
    for (var i = 9; i < 18; i++) {
        var row = $('<div>');
        row.addClass('row time-block');
        $(".container").append(row);

        var hour = $('<div>');
        hour.addClass('col col-2 hour');
        var time = i + "AM";
        if (i > 12) {
            time = (i - 12) + "PM";
        } else if (i == 12) {
            time = i + "PM";
        }
        hour.text(time);
        row.append(hour);

        var textArea = $('<textarea>');
        textArea.addClass('col');
        if (i < moment().hour()) {
            textArea.addClass('past');
        } else if (i == moment().hour()) {
            textArea.addClass('present');
        } else {
            textArea.addClass('future');
        }
        textArea.attr('data-time', i);
        textArea.val(savePlans[i]);
        row.append(textArea);
        
        var saveBtn = $('<button>');
        saveBtn.addClass('col col-1 saveBtn');
        var lock = $('<i>');
        lock.addClass('fa fa-save');
        lock.attr('data-hour', i);
        lock.click()
        row.append(saveBtn);
        saveBtn.append(lock);
    }
}

















// ninePlans.on('click', submitPlans);
// tenPlans.on('click', submitPlans);

// function submitPlans(event) {
//     event.preventDefault();
//     console.log('$[nineInput]');
//     var plans = {
//         nine: nineInput,
//         ten: tenInput

//     };
//     localStorage.setItem("plans", JSON.stringify(plans));
//     console.log(nineInput);
// }



// eleven: elevenInput.value,
        // twelve: twelveInput.value,
        // one: oneInput.value,
        // two: twoInput.value,
        // three: threeInput.value,
        // four: fourInput.value,
        // five: fiveInput.value