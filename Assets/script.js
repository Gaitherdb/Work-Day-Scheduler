//waits until local data has loaded to run the main function
$(document).ready(function () {
    timeBlocks();
});
//reports local time at top
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"))

function timeBlocks() {
    //gets saved text array and loads them as they were saved
    var savePlans = JSON.parse(localStorage.getItem('plans'));
    if (savePlans == null) {
        savePlans = [];
    }
    //creates html in a loop
    for (var i = 9; i < 18; i++) {
        var row = $('<div>');
        row.addClass('row time-block');
        $(".container").append(row);
        //sets appropriate time for each timeblock
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
        //changes the textarea color based on current time. Page needs to be refreshed by the hour to be accurate
        var textArea = $('<textarea>');
        textArea.addClass('col');
        if (i < moment().hour()) {
            textArea.addClass('past');
        } else if (i == moment().hour()) {
            textArea.addClass('present');
        } else {
            textArea.addClass('future');
        }
        //matches text with the hour timeblock
        textArea.attr('data-time', i);
        //loads the text with the appropriate saved text matching the time
        textArea.val(savePlans[i]);
        row.append(textArea);
        //create button and assigns data-time to it
        var saveBtn = $('<button>');
        saveBtn.addClass('col col-1 saveBtn');
        saveBtn.attr('data-time', i);
        saveBtn.click(saveToLocalStorage);
        var saveIcon = $('<i>');
        saveIcon.addClass('fa fa-save');
        row.append(saveBtn);
        saveBtn.append(saveIcon);
    }
}

function saveToLocalStorage() {
    //gets the clicked savebutton data-time attribute
    var saveHour = $(this).attr('data-time');
    //SelectorAll for <textarea>
    var textPlans = $('textarea');
    var toSaveText = " ";
    //loop that goes through each textarea looking for a matching data-time attribute with the clicked savebtn attribute. If it matches, the text in the textarea is saved to variable toSaveText
    textPlans.each(function () {
        if ($(this).attr('data-time') === saveHour) {
            toSaveText = $(this).val();
        }
    });
    //Gets from local storage and returns the strings back as object
    var plans = JSON.parse(localStorage.getItem('plans'));
    if (plans == null) {
        plans = [];
    }
    //saves the text to the plans array. Saved in chronological order depending on which timeblock the text is in. First 10 strings in the array are null
    plans[saveHour] = toSaveText;
    localStorage.setItem('plans', JSON.stringify(plans));
}

















