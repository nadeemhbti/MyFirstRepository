var joinEntityCollection = null;
var CPGoalSymptomsAll = null;
var tagCPGoalSymptomsAll = "";
var CPGoalSymptomsNotMet = null;
var CPGoalSymptomsOpen = null;
var CPGoalSymptomsMet = null;
var CPGoalSymptomsOverDue = null;
var intTotalSymptoms = null;
var intTotalSymptomsNotMet = null;
var intTotalSymptomsMet = null;
var intTotalSymptomsOpen = null;
var intTotalSymptomsOverDue = null;
var tagSymptomsAll = "";
var tagSymptomsAllrevised = "";
var tagSymptomsRed = "";
var tagSymptomsOrange = "";
var tagSymptomsGreen = "";
var tagSymptomsGrey = "";
var strTargetVal = "";
var strDueDate = "";
var CPGoaltestcareAll = null;
var tagCPGoaltestcareAll = "";
var CPGoaltestcareNotMet = null;
var CPGoaltestcareOpen = null;
var CPGoaltestcareMet = null;
var CPGoaltestcareOverDue = null;
var intTotaltestcare = null;
var intTotaltestcareNotMet = null;
var intTotaltestcareMet = null;
var intTotaltestcareOpen = null;
var intTotaltestcareOverDue = null;
var tagtestcareAll = "";
var tagtestcareRed = "";
var tagtestcareOrange = "";
var tagtestcareGreen = "";
var tagtestcareGrey = "";
//---vitals--
var CPGoalvitalsAll = null;
var tagCPGoalvitalsAll = "";
var CPGoalvitalsNotMet = null;
var CPGoalvitalsOpen = null;
var CPGoalvitalsMet = null;
var CPGoalvitalsOverDue = null;
var intTotalvitals = null;
var intTotalvitalsNotMet = null;
var intTotalvitalsMet = null;
var intTotalvitalsOpen = null;
var intTotalvitalsOverDue = null;
var tagvitalsAll = "";
var tagvitalsRed = "";
var tagvitalsOrange = "";
var tagvitalsGreen = "";
var tagvitalsGrey = "";
//--medications
var CPGoalmedicationsAll = null;
var tagCPGoalmedicationsAll = "";
var CPGoalmedicationsNotMet = null;
var CPGoalmedicationsOpen = null;
var CPGoalmedicationsMet = null;
var CPGoalmedicationsOverDue = null;
var intTotalmedications = null;
var intTotalmedicationsNotMet = null;
var intTotalmedicationsMet = null;
var intTotalmedicationsOpen = null;
var intTotalmedicationsOverDue = null;
var tagmedicationsAll = "";
var tagmedicationsRed = "";
var tagmedicationsOrange = "";
var tagmedicationsGreen = "";
var tagmedicationsGrey = "";
//--activity
var CPGoalactivityAll = null;
var tagCPGoalactivityAll = "";
var CPGoalactivityNotMet = null;
var CPGoalactivityOpen = null;
var CPGoalactivityMet = null;
var CPGoalactivityOverDue = null;
var intTotalactivity = null;
var intTotalactivityNotMet = null;
var intTotalactivityMet = null;
var intTotalactivityOpen = null;
var intTotalactivityOverDue = null;
var tagactivityAll = "";
var tagactivityRed = "";
var tagactivityOrange = "";
var tagactivityGreen = "";
var tagactivityGrey = "";
//--nutrition
var CPGoalnutritionAll = null;
var tagCPGoalnutritionAll = "";
var CPGoalnutritionNotMet = null;
var CPGoalnutritionOpen = null;
var CPGoalnutritionMet = null;
var CPGoalnutritionOverDue = null;
var intTotalnutrition = null;
var intTotalnutritionNotMet = null;
var intTotalnutritionMet = null;
var intTotalnutritionOpen = null;
var intTotalnutritionOverDue = null;
var tagnutritionAll = "";
var tagnutritionRed = "";
var tagnutritionOrange = "";
var tagnutritionGreen = "";
var tagnutritionGrey = "";
//--psychosocial
var CPGoalpsychosocialAll = null;
var tagCPGoalpsychosocialAll = "";
var CPGoalpsychosocialNotMet = null;
var CPGoalpsychosocialOpen = null;
var CPGoalpsychosocialMet = null;
var CPGoalpsychosocialOverDue = null;
var intTotalpsychosocial = null;
var intTotalpsychosocialNotMet = null;
var intTotalpsychosocialMet = null;
var intTotalpsychosocialOpen = null;
var intTotalpsychosocialOverDue = null;
var tagpsychosocialAll = "";
var tagpsychosocialRed = "";
var tagpsychosocialOrange = "";
var tagpsychosocialGreen = "";
var tagpsychosocialGrey = "";
//--wrapup
var CPGoalwrapupAll = null;
var tagCPGoalwrapupAll = "";
var CPGoalwrapupNotMet = null;
var CPGoalwrapupOpen = null;
var CPGoalwrapupMet = null;
var CPGoalwrapupOverDue = null;
var intTotalwrapup = null;
var intTotalwrapupNotMet = null;
var intTotalwrapupMet = null;
var intTotalwrapupOpen = null;
var intTotalwrapupOverDue = null;
var tagwrapupAll = "";
var tagwrapupRed = "";
var tagwrapupOrange = "";
var tagwrapupGreen = "";
var tagwrapupGrey = "";
var tri_PatientModifierName_join;

var isCarePlanUpdated = true;
var IsPersonalizeClosed = false;
var IsWindowsWrapperClosed = false;

var vitalTypeToSaveArray = [];
var lastVitalId = "";
var IsDataChanged = false;
var IsObservedValueAndFactorModifierChanged = false;
var IsOtherValuesChanged = false;
var saveCliced = false;
var saveprsnlizeCliced = false;
//var filteredCarePlangoalIds = [];

$(document).ready(function () {
    //if (parent.Xrm.Page.data.entity.getId() == null) {
    //    parent.Xrm.Utility.openEntityForm("Health360 Core")
    //};
    var PatientId1 = parent.Xrm.Page.data.entity.getId();
    //alert(PatientId1);
    var PatientId2 = PatientId1.replace("{", "");
    var PatientId = PatientId2.replace("}", "");
    var joinEntityCollection = null;
    
    if (PatientId1 === null || PatientId1 === "") {
        
        gotohealth360Form();

    };
    if (PatientId !== null && PatientId !== "") {
        DisplayMonitorMode(PatientId);
    };

    $('.indicator-box-big_symptoms_all').click(function () {
        $('.tablecontent_symptoms_red,.tablecontent_symptoms_orange,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
        $('.tablecontent_symptoms_all').toggle('slow');
        $('.indicator-line_symptoms').removeClass("red orange green grey");
        $('.indicator-line_symptoms').addClass("blue");
        $('.maintable_symptoms_all').show('slow');
    });
    $('.indicator-box-small_symptoms_red').click(function () {
        $('.tablecontent_symptoms_all,.tablecontent_symptoms_orange,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
        $('.tablecontent_symptoms_red').toggle('slow');
        $('.indicator-line_symptoms').removeClass("blue orange green grey");
        $('.indicator-line_symptoms').addClass("red");
        $('.maintable_symptoms_red').show('slow');
    });
    $('.indicator-box-small_symptoms_orange').click(function () {
        $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
        $('.tablecontent_symptoms_orange').toggle('slow');
        $('.indicator-line_symptoms').removeClass("red blue green grey");
        $('.indicator-line_symptoms').addClass("orange");
        $('.maintable_symptoms_orange').show('slow');
    });
    $('.indicator-box-small_symptoms_green').click(function () {
        $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_orange,.tablecontent_symptoms_grey').hide();
        $('.tablecontent_symptoms_green').toggle('slow');
        $('.indicator-line_symptoms').removeClass("red orange blue grey");
        $('.indicator-line_symptoms').addClass("green");
        $('.maintable_symptoms_green').show('slow');
    });
    $('.indicator-box-small_symptoms_grey').click(function () {
        $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_green,.tablecontent_symptoms_orange').hide();
        $('.tablecontent_symptoms_grey').toggle('slow');
        $('.indicator-line_symptoms').removeClass("red orange green blue");
        $('.indicator-line_symptoms').addClass("grey");
        $('.maintable_symptoms_grey').show('slow');
    });
    //----testcare
    $('.indicator-box-big_testcare_all').click(function () {
        $('.tablecontent_testcare_red,.tablecontent_testcare_orange,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
        $('.tablecontent_testcare_all').toggle('slow');
        $('.indicator-line_testcare').removeClass("red orange green grey");
        $('.indicator-line_testcare').addClass("blue");
        $('.maintable_testcare_all').show('slow');
    });
    $('.indicator-box-small_testcare_red').click(function () {
        $('.tablecontent_testcare_all,.tablecontent_testcare_orange,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
        $('.tablecontent_testcare_red').toggle('slow');
        $('.indicator-line_testcare').removeClass("blue orange green grey");
        $('.indicator-line_testcare').addClass("red");
        $('.maintable_testcare_red').show('slow');
    });
    $('.indicator-box-small_testcare_orange').click(function () {
        $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
        $('.tablecontent_testcare_orange').toggle('slow');
        $('.indicator-line_testcare').removeClass("red blue green grey");
        $('.indicator-line_testcare').addClass("orange");
        $('.maintable_testcare_orange').show('slow');
    });
    $('.indicator-box-small_testcare_green').click(function () {
        $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_orange,.tablecontent_testcare_grey').hide();
        $('.tablecontent_testcare_green').toggle('slow');
        $('.indicator-line_testcare').removeClass("red orange blue grey");
        $('.indicator-line_testcare').addClass("green");
        $('.maintable_testcare_green').show('slow');
    });
    $('.indicator-box-small_testcare_grey').click(function () {
        $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_green,.tablecontent_testcare_orange').hide();
        $('.tablecontent_testcare_grey').toggle('slow');
        $('.indicator-line_testcare').removeClass("red orange green blue");
        $('.indicator-line_testcare').addClass("grey");
        $('.maintable_testcare_grey').show('slow');
    });
    //-----vitals
    $('.indicator-box-big_vitals_all').click(function () {
        $('.tablecontent_vitals_red,.tablecontent_vitals_orange,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
        $('.tablecontent_vitals_all').toggle('slow');
        $('.indicator-line_vitals').removeClass("red orange green grey");
        $('.indicator-line_vitals').addClass("blue");
        $('.maintable_vitals_all').show('slow');
    });
    $('.indicator-box-small_vitals_red').click(function () {
        $('.tablecontent_vitals_all,.tablecontent_vitals_orange,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
        $('.tablecontent_vitals_red').toggle('slow');
        $('.indicator-line_vitals').removeClass("blue orange green grey");
        $('.indicator-line_vitals').addClass("red");
        $('.maintable_vitals_red').show('slow');
    });
    $('.indicator-box-small_vitals_orange').click(function () {
        $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
        $('.tablecontent_vitals_orange').toggle('slow');
        $('.indicator-line_vitals').removeClass("red blue green grey");
        $('.indicator-line_vitals').addClass("orange");
        $('.maintable_vitals_orange').show('slow');
    });
    $('.indicator-box-small_vitals_green').click(function () {
        $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_orange,.tablecontent_vitals_grey').hide();
        $('.tablecontent_vitals_green').toggle('slow');
        $('.indicator-line_vitals').removeClass("red orange blue grey");
        $('.indicator-line_vitals').addClass("green");
        $('.maintable_vitals_green').show('slow');
    });
    $('.indicator-box-small_vitals_grey').click(function () {
        $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_green,.tablecontent_vitals_orange').hide();
        $('.tablecontent_vitals_grey').toggle('slow');
        $('.indicator-line_vitals').removeClass("red orange green blue");
        $('.indicator-line_vitals').addClass("grey");
        $('.maintable_vitals_grey').show('slow');
    });
    //----medications
    $('.indicator-box-big_medications_all').click(function () {
        $('.tablecontent_medications_red,.tablecontent_medications_orange,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
        $('.tablecontent_medications_all').toggle('slow');
        $('.indicator-line_medications').removeClass("red orange green grey");
        $('.indicator-line_medications').addClass("blue");
        $('.maintable_medications_all').show('slow');
    });
    $('.indicator-box-small_medications_red').click(function () {
        $('.tablecontent_medications_all,.tablecontent_medications_orange,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
        $('.tablecontent_medications_red').toggle('slow');
        $('.indicator-line_medications').removeClass("blue orange green grey");
        $('.indicator-line_medications').addClass("red");
        $('.maintable_medications_red').show('slow');
    });
    $('.indicator-box-small_medications_orange').click(function () {
        $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
        $('.tablecontent_medications_orange').toggle('slow');
        $('.indicator-line_medications').removeClass("red blue green grey");
        $('.indicator-line_medications').addClass("orange");
        $('.maintable_medications_orange').show('slow');
    });
    $('.indicator-box-small_medications_green').click(function () {
        $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_orange,.tablecontent_medications_grey').hide();
        $('.tablecontent_medications_green').toggle('slow');
        $('.indicator-line_medications').removeClass("red orange blue grey");
        $('.indicator-line_medications').addClass("green");
        $('.maintable_medications_green').show('slow');
    });
    $('.indicator-box-small_medications_grey').click(function () {
        $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_green,.tablecontent_medications_orange').hide();
        $('.tablecontent_medications_grey').toggle('slow');
        $('.indicator-line_medications').removeClass("red orange green blue");
        $('.indicator-line_medications').addClass("grey");
        $('.maintable_medications_grey').show('slow');
    });
    //----activity
    $('.indicator-box-big_activity_all').click(function () {
        $('.tablecontent_activity_red,.tablecontent_activity_orange,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
        $('.tablecontent_activity_all').toggle('slow');
        $('.indicator-line_activity').removeClass("red orange green grey");
        $('.indicator-line_activity').addClass("blue");
        $('.maintable_activity_all').show('slow');
    });
    $('.indicator-box-small_activity_red').click(function () {
        $('.tablecontent_activity_all,.tablecontent_activity_orange,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
        $('.tablecontent_activity_red').toggle('slow');
        $('.indicator-line_activity').removeClass("blue orange green grey");
        $('.indicator-line_activity').addClass("red");
        $('.maintable_activity_red').show('slow');
    });
    $('.indicator-box-small_activity_orange').click(function () {
        $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
        $('.tablecontent_activity_orange').toggle('slow');
        $('.indicator-line_activity').removeClass("red blue green grey");
        $('.indicator-line_activity').addClass("orange");
        $('.maintable_activity_orange').show('slow');
    });
    $('.indicator-box-small_activity_green').click(function () {
        $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_orange,.tablecontent_activity_grey').hide();
        $('.tablecontent_activity_green').toggle('slow');
        $('.indicator-line_activity').removeClass("red orange blue grey");
        $('.indicator-line_activity').addClass("green");
        $('.maintable_activity_green').show('slow');
    });
    $('.indicator-box-small_activity_grey').click(function () {
        $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_green,.tablecontent_activity_orange').hide();
        $('.tablecontent_activity_grey').toggle('slow');
        $('.indicator-line_activity').removeClass("red orange green blue");
        $('.indicator-line_activity').addClass("grey");
        $('.maintable_activity_grey').show('slow');
    });
    //----nutrition
    $('.indicator-box-big_nutrition_all').click(function () {
        $('.tablecontent_nutrition_red,.tablecontent_nutrition_orange,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
        $('.tablecontent_nutrition_all').toggle('slow');
        $('.indicator-line_nutrition').removeClass("red orange green grey");
        $('.indicator-line_nutrition').addClass("blue");
        $('.maintable_nutrition_all').show('slow');
    });
    $('.indicator-box-small_nutrition_red').click(function () {
        $('.tablecontent_nutrition_all,.tablecontent_nutrition_orange,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
        $('.tablecontent_nutrition_red').toggle('slow');
        $('.indicator-line_nutrition').removeClass("blue orange green grey");
        $('.indicator-line_nutrition').addClass("red");
        $('.maintable_nutrition_red').show('slow');
    });
    $('.indicator-box-small_nutrition_orange').click(function () {
        $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
        $('.tablecontent_nutrition_orange').toggle('slow');
        $('.indicator-line_nutrition').removeClass("red blue green grey");
        $('.indicator-line_nutrition').addClass("orange");
        $('.maintable_nutrition_orange').show('slow');
    });
    $('.indicator-box-small_nutrition_green').click(function () {
        $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_orange,.tablecontent_nutrition_grey').hide();
        $('.tablecontent_nutrition_green').toggle('slow');
        $('.indicator-line_nutrition').removeClass("red orange blue grey");
        $('.indicator-line_nutrition').addClass("green");
        $('.maintable_nutrition_green').show('slow');
    });
    $('.indicator-box-small_nutrition_grey').click(function () {
        $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_green,.tablecontent_nutrition_orange').hide();
        $('.tablecontent_nutrition_grey').toggle('slow');
        $('.indicator-line_nutrition').removeClass("red orange green blue");
        $('.indicator-line_nutrition').addClass("grey");
        $('.maintable_nutrition_grey').show('slow');
    });
    //----psychosocial
    $('.indicator-box-big_psychosocial_all').click(function () {
        $('.tablecontent_psychosocial_red,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
        $('.tablecontent_psychosocial_all').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("red orange green grey");
        $('.indicator-line_psychosocial').addClass("blue");
        $('.maintable_psychosocial_all').show('slow');
    });
    $('.indicator-box-small_psychosocial_red').click(function () {
        $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
        $('.tablecontent_psychosocial_red').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("blue orange green grey");
        $('.indicator-line_psychosocial').addClass("red");
        $('.maintable_psychosocial_red').show('slow');
    });
    $('.indicator-box-small_psychosocial_orange').click(function () {
        $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
        $('.tablecontent_psychosocial_orange').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("red blue green grey");
        $('.indicator-line_psychosocial').addClass("orange");
        $('.maintable_psychosocial_orange').show('slow');
    });
    $('.indicator-box-small_psychosocial_green').click(function () {
        $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_grey').hide();
        $('.tablecontent_psychosocial_green').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("red orange blue grey");
        $('.indicator-line_psychosocial').addClass("green");
        $('.maintable_psychosocial_green').show('slow');
    });
    $('.indicator-box-small_psychosocial_grey').click(function () {
        $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_green,.tablecontent_psychosocial_orange').hide();
        $('.tablecontent_psychosocial_grey').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("red orange green blue");
        $('.indicator-line_psychosocial').addClass("grey");
        $('.maintable_psychosocial_grey').show('slow');
    });
    //----wrapup
    $('.indicator-box-big_wrapup_all').click(function () {
        $('.tablecontent_wrapup_red,.tablecontent_wrapup_orange,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
        $('.tablecontent_wrapup_all').toggle('slow');
        $('.indicator-line_wrapup').removeClass("red orange green grey");
        $('.indicator-line_wrapup').addClass("blue");
        $('.maintable_wrapup_all').show('slow');
    });
    $('.indicator-box-small_wrapup_red').click(function () {
        $('.tablecontent_wrapup_all,.tablecontent_wrapup_orange,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
        $('.tablecontent_wrapup_red').toggle('slow');
        $('.indicator-line_wrapup').removeClass("blue orange green grey");
        $('.indicator-line_wrapup').addClass("red");
        $('.maintable_wrapup_red').show('slow');
    });
    $('.indicator-box-small_wrapup_orange').click(function () {
        $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
        $('.tablecontent_wrapup_orange').toggle('slow');
        $('.indicator-line_wrapup').removeClass("red blue green grey");
        $('.indicator-line_wrapup').addClass("orange");
        $('.maintable_wrapup_orange').show('slow');
    });
    $('.indicator-box-small_wrapup_green').click(function () {
        $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_orange,.tablecontent_wrapup_grey').hide();
        $('.tablecontent_wrapup_green').toggle('slow');
        $('.indicator-line_wrapup').removeClass("red orange blue grey");
        $('.indicator-line_wrapup').addClass("green");
        $('.maintable_wrapup_green').show('slow');
    });
    $('.indicator-box-small_wrapup_grey').click(function () {
        $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_green,.tablecontent_wrapup_orange').hide();
        $('.tablecontent_wrapup_grey').toggle('slow');
        $('.indicator-line_wrapup').removeClass("red orange green blue");
        $('.indicator-line_wrapup').addClass("grey");
        $('.maintable_wrapup_grey').show('slow');
    });

    // Display ToolTip
    // $('[data-toggle="tooltip"]').tooltip();

    $('.maintable_symptoms_all,.maintable_symptoms_red,.maintable_symptoms_orange,.maintable_symptoms_green, .maintable_symptoms_grey,.maintable_testcare_all,.maintable_testcare_red,.maintable_testcare_orange,.maintable_testcare_green, .maintable_testcare_grey,.maintable_vitals_all,.maintable_vitals_red,.maintable_vitals_orange,.maintable_vitals_green, .maintable_vitals_grey,.maintable_medications_all,.maintable_medications_red,.maintable_medications_orange,.maintable_medications_green, .maintable_medications_grey,.maintable_activity_all,.maintable_activity_red,.maintable_activity_orange,.maintable_activity_green, .maintable_activity_grey,.maintable_nutrition_all, .maintable_nutrition_red,.maintable_nutrition_orange,.maintable_nutrition_green, .maintable_nutrition_grey,.maintable_psychosocial_all, .maintable_psychosocial_red,.maintable_psychosocial_orange,.maintable_psychosocial_green, .maintable_psychosocial_grey, .maintable_wrapup_all, .maintable_wrapup_red,.maintable_wrapup_orange,.maintable_wrapup_green, .maintable_wrapup_grey').on("click", "td", function () {
        //alert($(this).text());
        if ($(this).text() === "...") {
            var currentId = $(this).attr('id');

            //hide plan filter
            $('#planFilter').hide('slow');

            ReviewAndUpdateGoal(currentId);

        }
    });

    //on click X button, close current form and go back to original window
    $('#closepersonalizewindow').click(function () {
        IsDataChanged = false;

        if (vitalTypeToSaveArray.length > 0) {
            var okClicked = confirm('There is unsaved data. Do you want to continue?');
            if (okClicked == true) {
                IsDataChanged = false;
                ClosePersonalizeWindow(PatientId);
               
            } else {
                // Do Nothing;
            }
        }
        else {
            IsDataChanged = false;
            ClosePersonalizeWindow(PatientId);
        }
    });

    $('#windowwrapperclose').click(function () {
        if (IsDataChanged) {
            var okClicked = confirm('There is unsaved data. Do you want to continue?');
            if (okClicked == true) {
                IsDataChanged = false;
                CloseWindowWrapper(PatientId);
               
            } else {
                // Do Nothing
            }
        }
        else {
            IsDataChanged = false;
            CloseWindowWrapper(PatientId);
        }

    });
}); //document ready function closes here

// Tooltip functions
$(document).load(function () {
    debugger;
    $('[data-toggle="tooltip"]').attr('title', $('[data-toggle="tooltip"]').text());
});

$(window).on('load', '[data-toggle="tooltip"]', function () {
    debugger;
    $('[data-toggle="tooltip"]').attr('title', $('[data-toggle="tooltip"]').text());
});

function ClosePersonalizeWindow(PatientId) {

    $('.Personalize-details,.personalize-section').hide();
    $("div[class^='tablecontent_']").hide('slow');//divs whose class name start with tablecontent_
    $('.monitor-wrapper').show('slow');
    // $('#planFilter').css('margin-bottom','-10px');
    ResetFilter();
    DisplayMonitorMode(PatientId);
}

function ResetFilter() {
    filteredCarePlangoalIds.length = 0;
    IsRefreshedClicked = false;
    IsScheduleCategoryPresent = false;
}

function CloseWindowWrapper(PatientId) {
    $("div[class^='tablecontent_']").hide('slow');//divs whose class name start with tablecontent_
    // $('.window-wrapper').hide('slow');
    $('.window-wrapper').css('display', 'none');
    $('#planFilter').show('slow');
    ResetFilter();
    IsObservedValueAndFactorModifierChanged = false;
    IsOtherValuesChanged = false;
    DisplayMonitorMode(PatientId);
    $('.monitor-wrapper').show('slow');
}

function DisplayMonitorMode(PatientId) {
    DisplayMode = monitorMode;
    UpdateVitalFilters(PatientId, monitorMode);
}

function DisplayIndicators(PatientId) {
    getCPGoalSymptomsAll(PatientId);
    getCPGoaltestcareAll(PatientId);
    getCPGoalvitalsAll(PatientId);
    getCPGoalmedicationsAll(PatientId);
    getCPGoalactivityAll(PatientId);
    getCPGoalnutritionAll(PatientId);
    getCPGoalpsychosocialAll(PatientId);
    getCPGoalwrapupAll(PatientId);
    getCPGoalSymptomsNotMet(PatientId);
    getCPGoaltestcareNotMet(PatientId);
    getCPGoalvitalsNotMet(PatientId);
    getCPGoalmedicationsNotMet(PatientId);
    getCPGoalactivityNotMet(PatientId);
    getCPGoalnutritionNotMet(PatientId);
    getCPGoalpsychosocialNotMet(PatientId);
    getCPGoalwrapupNotMet(PatientId);
    getCPGoalSymptomsOpen(PatientId);
    getCPGoaltestcareOpen(PatientId);
    getCPGoalvitalsOpen(PatientId);
    getCPGoalmedicationsOpen(PatientId);
    getCPGoalactivityOpen(PatientId);
    getCPGoalnutritionOpen(PatientId);
    getCPGoalpsychosocialOpen(PatientId);
    getCPGoalwrapupOpen(PatientId);
    getCPGoalSymptomsMet(PatientId);
    getCPGoaltestcareMet(PatientId);
    getCPGoalvitalsMet(PatientId);
    getCPGoalmedicationsMet(PatientId);
    getCPGoalactivityMet(PatientId);
    getCPGoalnutritionMet(PatientId);
    getCPGoalpsychosocialMet(PatientId);
    getCPGoalwrapupMet(PatientId);
    getCPGoalSymptomsOverDue(PatientId);
    getCPGoaltestcareOverDue(PatientId);
    getCPGoalvitalsOverDue(PatientId);
    getCPGoalmedicationsOverDue(PatientId);
    getCPGoalactivityOverDue(PatientId);
    getCPGoalnutritionOverDue(PatientId);
    getCPGoalpsychosocialOverDue(PatientId);
    getCPGoalwrapupOverDue(PatientId);

    // ------symptoms
    $('.indicator-line_symptoms').removeClass("red orange green grey");
    $('.indicator-line_symptoms').addClass("blue");
    //----testcare
    $('.indicator-line_testcare').removeClass("red orange green grey");
    $('.indicator-line_testcare').addClass("blue");
    //-----vitals
    $('.indicator-line_vitals').removeClass("red orange green grey");
    $('.indicator-line_vitals').addClass("blue");
    //----medications
    $('.indicator-line_medications').removeClass("red orange green grey");
    $('.indicator-line_medications').addClass("blue");
    //----activity
    $('.indicator-line_activity').removeClass("red orange green grey");
    $('.indicator-line_activity').addClass("blue");
    //----nutrition
    $('.indicator-line_nutrition').removeClass("red orange green grey");
    $('.indicator-line_nutrition').addClass("blue");
    //----psychosocial
    $('.indicator-line_psychosocial').removeClass("red orange green grey");
    $('.indicator-line_psychosocial').addClass("blue");
    //----wrapup
    $('.indicator-line_wrapup').removeClass("red orange green grey");
    $('.indicator-line_wrapup').addClass("blue");
}

var IsRefreshedClicked = false;
var IsScheduleCategoryPresent = false;
var filteredCarePlangoalIds = [];
var CarePlans;
var ScheduleCategoryCTSArray = [];
var monitorMode = "monitor";
var personalizeMode = "personalize";
var DisplayMode;

function UpdateVitalFilters(PatientId, mode) {
    if (!IsRefreshedClicked) {
        $('#planFilter ul').html('');
        $('#planFilter ul').append('<li role="presentation" class="dropdown-header"><input type="checkbox" checked="checked" name="All"><span>Select All</span></li>');
        ScheduleCategoryCTSArray.length = 0;
        var allPlans = GetCarePlanfromPatitentId(PatientId);

        // Get all care plans
        CarePlans = Enumerable.From(allPlans)
        .Where(function (y) { return y.attributes.tri_careplangoalid !== null && y.attributes.tri_careplangoalid !== undefined && y.attributes.tri_careplangoalid.id !== "" })
        .Select(function (x) {
            return {
                'text': x.attributes.tri_planname.value,
                'value': x.attributes.tri_careplanid.id,
                'careplangoalid': x.attributes.tri_careplangoalid.id,
                'schedulecategory': (x.attributes.tri_schedulecategory !== null && x.attributes.tri_schedulecategory !== undefined ? x.attributes.tri_schedulecategory.value : 0)
            };
        }).ToArray();
        debugger;
        // Get Distinct CarePlans where any CTS is selected and rest other distinct
        var distinctCarePlansTextArray = Enumerable.From(CarePlans)
                                            .Where(function (x) { return x.schedulecategory === 100000001; })
                                            .Select(function (x) { return x; })
                                            .Distinct(function (y) { return y.text; })
                                            .ToArray()

        var ctsArrayText = Enumerable.From(distinctCarePlansTextArray)
                                     .Select(function (x) { return x.text; })
                                     .ToArray();

        distinctCarePlansTextArray = distinctCarePlansTextArray.concat(Enumerable.From(CarePlans)
                                                                        .Where(function (x) { return ctsArrayText.indexOf(x.text) === -1; })
                                                                        .Select(function (x) { return x; })
                                                                        .Distinct(function (y) { return y.text; })
                                                                        .ToArray());

        /// distinctCarePlansTextArray == CarePlans  // added
        ScheduleCategoryCTSArray = Enumerable.From(CarePlans)
                                             .Where(function (x) { return x.schedulecategory === 100000001; })
                                             .Select(function (x) { return x; })
                                             .ToArray();

        var IsAnyScheduleCategoryCTSPlansPresent = (ScheduleCategoryCTSArray.length > 0 ? true : false);

        for (var i = 0; i < distinctCarePlansTextArray.length; i++) {
            if (!IsAnyScheduleCategoryCTSPlansPresent || (IsAnyScheduleCategoryCTSPlansPresent && distinctCarePlansTextArray[i].schedulecategory === 100000001)) {
                $('#planFilter ul').append('<li role="presentation" class="dropdown-header"><input type="checkbox" checked="checked" id="' + distinctCarePlansTextArray[i].value + "_VITALFLTRID" + '" name="' + distinctCarePlansTextArray[i].text + '"><span>' + distinctCarePlansTextArray[i].text + '</span></li>');
            }
            else {
                $('#planFilter ul').append('<li role="presentation" class="dropdown-header"><input type="checkbox" id="' + distinctCarePlansTextArray[i].value + "_VITALFLTRID" + '" name="' + distinctCarePlansTextArray[i].text + '"><span>' + distinctCarePlansTextArray[i].text + '</span></li>');
            }
        }

        var planFilterbuttontext = "";
        // check if schedule category present then update html and call DisplayFiltered data
        if (IsAnyScheduleCategoryCTSPlansPresent) {
            IsScheduleCategoryPresent = true;
            $('.planFilterbutton').html("Care Transition Schedule Plans Selected");
              DisplayFilteredData(PatientId, mode); ///////////////
        }
        else {
            IsScheduleCategoryPresent = false;
            $('.planFilterbutton').html("All Plans Selected");
            if (mode === monitorMode) {
                DisplayIndicators(PatientId);  ///////////////
            }
            else if (mode === personalizeMode) {
                DisplayPersonalizeMode(PatientId);
            }
        }
    }
    else {
        if (IsScheduleCategoryPresent) {
            $('.planFilterbutton').html('');

            $('#planFilter ul li input').each(function () {

                if ($(this)[0].id !== undefined && $(this)[0].id !== null && $(this)[0].id !== "") {
                    if ($(this).is(':checked')) {
                        var planId = $(this)[0].id.replace("_VITALFLTRID", "");

                           var CTSPlanArray  = Enumerable.From(ScheduleCategoryCTSArray)
                                              .Where(function (x) { return x.value === planId; })
                                              .Select(function (x) { return x; })
                                              .Distinct(function (y) { return y.text; })  // added
                                              .ToArray();

                           if (CTSPlanArray.length > 0) {
                               $('.planFilterbutton').append('<span class="closespan">' + $(this)[0].name + '<a class="closefilter">X</a></span>');
                           }
                           else {
                               $(this).prop('checked', false);
                           }
                    }
                }
            });
            DisplayFilteredData(PatientId, DisplayMode);
        }
    }
}

$(document).on('click', '#btnFilterRefresh', function () {
    var PatientId1 = parent.Xrm.Page.data.entity.getId();
    var PatientId2 = PatientId1.replace("{", "");
    var PatientId = PatientId2.replace("}", "");
    $('.maintable_symptoms_all,.maintable_symptoms_red,.maintable_symptoms_orange,.maintable_symptoms_green, .maintable_symptoms_grey,.maintable_testcare_all,.maintable_testcare_red,.maintable_testcare_orange,.maintable_testcare_green, .maintable_testcare_grey,.maintable_vitals_all,.maintable_vitals_red,.maintable_vitals_orange,.maintable_vitals_green, .maintable_vitals_grey,.maintable_medications_all,.maintable_medications_red,.maintable_medications_orange,.maintable_medications_green, .maintable_medications_grey,.maintable_activity_all,.maintable_activity_red,.maintable_activity_orange,.maintable_activity_green, .maintable_activity_grey,.maintable_nutrition_all, .maintable_nutrition_red,.maintable_nutrition_orange,.maintable_nutrition_green, .maintable_nutrition_grey,.maintable_psychosocial_all, .maintable_psychosocial_red,.maintable_psychosocial_orange,.maintable_psychosocial_green, .maintable_psychosocial_grey, .maintable_wrapup_all, .maintable_wrapup_red,.maintable_wrapup_orange,.maintable_wrapup_green, .maintable_wrapup_grey').hide();
    IsRefreshedClicked = true;
    UpdateVitalFilters(PatientId, DisplayMode);
   // DisplayFilteredData(PatientId, DisplayMode);
});

function DisplayFilteredData(PatientId,mode) {

    filteredCarePlangoalIds.length = 0;
    // Add code to hide indicator
    IsRefreshedClicked = true;
    var btnFilterCTS;

    $('#planFilter ul li input').each(function () {
        if ($(this)[0].id !== undefined && $(this)[0].id !== null && $(this)[0].id !== "") {
            var planId = $(this)[0].id.replace("_VITALFLTRID", "");
            var carePlanGoalIds = [];

            if (!$(this).is(':checked')) {
                carePlanGoalIds = Enumerable.From(CarePlans)
                                    .Where(function (x) { return x.value === planId })
                                    .Select(function (y) { return y.careplangoalid; })
                                    .ToArray();
            }
            // Include the checked non CTS plans to remove
            if (IsScheduleCategoryPresent && $(this).is(':checked')) {

                var schCatPlanArray = Enumerable.From(CarePlans)
                                                .Where(function (x) { return x.value === planId && x.schedulecategory === 100000001 })
                                                .Select(function (y) { return y; })
                                                .ToArray();

                if (schCatPlanArray.length <= 0) {
                    carePlanGoalIds = carePlanGoalIds.concat(Enumerable.From(CarePlans)
                                                             .Where(function (x) { return x.value === planId }) //x.schedulecategory !== 100000001 })
                                                             .Select(function (y) { return y.careplangoalid; })
                                                             .ToArray());
                }
            }

            for (var i = 0; i < carePlanGoalIds.length; i++) {
                filteredCarePlangoalIds.push(carePlanGoalIds[i]);
            }
        }
    });
    if (mode === monitorMode) {
        DisplayIndicators(PatientId);  ///////////////
    }
    else if (mode === personalizeMode) {
        DisplayPersonalizeMode(PatientId);
    }
}

// Filter check box selection
$(document).on('click', '#planFilter ul li input', function () {
    var btnPlanFilteHtml = $('.planFilterbutton').html();
    if ($(this)[0].name === "All") { // All Plans
        var btntext = "";
        var allselectedchecked = false;
        if ($(this).is(':checked')) {
            btntext = "All Plans Selected";
            allselectedchecked = true;
        }
        $('.planFilterbutton').html(btntext);
        $('#planFilter ul li').each(function () {
            $($(this)[0].children[0]).prop('checked', allselectedchecked);
        });
    }
    else if (btnPlanFilteHtml.indexOf($(this)[0].name) > -1) {  // if plan present in multiselect and unchecked
        if (!$(this).is(':checked')) {
            $('.planFilterbutton').children().remove('span:contains(' + $(this)[0].name + ')');
        }
        else if ($(this).is(':checked')) {
            // this scenario should not occur 
        }
    }
    else if (!btnPlanFilteHtml.indexOf($(this)[0].name) > -1) { // if plan present in multiselect 
        if ($(this).is(':checked')) { // checked

            if (btnPlanFilteHtml === "Care Transition Schedule Plans Selected") {
                btnPlanFilteHtml = "";

                $('#planFilter ul li input[name*="All"]').prop('checked', false);
                $('#planFilter ul li').each(function () {
                    if ($($(this)[0].children[0]).is(':checked'))
                    {
                        btnPlanFilteHtml = btnPlanFilteHtml + '<span class="closespan">' + $($(this)[0].children[0])[0].name + '<a class="closefilter">X</a></span>';
                    }
                });
            }
            else {
                btnPlanFilteHtml = btnPlanFilteHtml + '<span class="closespan">' + $(this)[0].name + '<a class="closefilter">X</a></span>';
            }
            $('.planFilterbutton').html(btnPlanFilteHtml);
        }
        else if (!$(this).is(':checked')) { // unchecked
            var planName = $(this)[0].name;
            $('.planFilterbutton').html('');
            btnPlanFilteHtml = $('.planFilterbutton').html();
            $('#planFilter ul li').each(function () {
                if ($($(this)[0].children[0]).is(':checked') && $(this)[0].children[0].name !== planName && $(this)[0].children[0].name !== "All") {
                    btnPlanFilteHtml = btnPlanFilteHtml + '<span class="closespan">' + $(this)[0].children[0].name + '<a class="closefilter">X</a></span>';
                    $('.planFilterbutton').html(btnPlanFilteHtml);
                }
                else if (planName !== "All") {
                    $($(this)[0].children[0]).prop('checked', false);
                }
            });
        }
    }
});

$(document).on('click', 'a.closefilter', function () {
    var closeParentText = $(this).parent().text();
    closeParentText = closeParentText.substr(0, closeParentText.length - 1);
    $('.planFilterbutton').children().remove('span:contains(' + closeParentText + ')');
    $('#planFilter ul li').find('input[name*="' + closeParentText + '"]').prop('checked', false);
});

function getJoinsForContact(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
        "tri_careplanjoin",
       //"$select=tri_planname&$filter=_tri_patientid_value eq 0CDF8B04-C90B-E611-80D1-005056810C7C",
       "?$select=tri_PlanName,tri_GoalName&$filter=tri_PatientID/Id eq guid'" + PatientId + "'",
        function (results) {
            var firstResult = results;
            //alert(firstResult.length);
            if (firstResult != null) {
                joinEntityCollection = results;
                //alert(joinEntityCollection[1].tri_GoalName);
            }
            else {
                alert("No Join records found.");
            }
        },
        errorHandler,
        function () {
            //OnComplete handler
            //alert('done');
        }
      );
}

// getCPGoal(PatientId, '.indicator-box-big_symptoms_all',intTotalSymptoms,100000000);
function getCPGoal(PatientId, indicatorBox, indicatorValue, goalSection) {
    $(indicatorBox).show();
    $(indicatorBox).text('');
    indicatorValue = "";

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_lastresult,tri_activitydescription,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq " + goalSection + " and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {

        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            indicatorValue = "ALL " + results.length + "";

            $(indicatorBox).text(indicatorValue);

            strTargetVal = "";
            strLastTargetVal = "";
            strLastGoalDt = "";
            strNextDueDt = "";
            strGoalId = tri_cccareplangoalId;
            vtxtColor = "";

            switch (tri_typeofgoalcode) {
                case 100000000:

                    strTargetVal = results[i].tri_qualitativetarget
                    strLastTargetVal = tri_lastresult;

                    break;

                case 100000001:

                    var vMtrcOprtr1txt = "";
                    vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);
                    
                    if (tri_range == true) {
                        var vMtrcOprtr2txt = "";
                        vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                        strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                       vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' +( (tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo )+ '" style="background-color: #FAFAFA;border:none; width:40px">';
                    }
                    else {
                        // alert(vMtrcOprtr1txt);
                        strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                    }

                    if (tri_LastTargetValue !== null) {
                        strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                    }
                    break;

                case null:
                    strTargetVal = results[i].tri_qualitativetarget;
                    break;
            }
           

            if (tri_LastGoalDate !== null) {
                strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
            }

            if (tri_NextDueDate !== null) {
                strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
            }

            switch (tri_CarePlanGoalState) {
                case 167410000:
                    vtxtColor = "#ff7d09";//orange

                    break;
                case 167410001:
                    vtxtColor = "#99cc00";//green

                    break;
                case 167410002:
                    vtxtColor = "#dd3b31";//red

                    break;
                case 167410003:
                    vtxtColor = "#ff7d09";//orange
                    break;

            }

            getVitalNameAndAppendTag("maintable_symptoms_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);


        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something

        if (intTotalSymptoms === null || intTotalSymptoms === undefined || intTotalSymptoms === "") {
            $('.indicator-box-big_symptoms_all').text('');
            $('.indicator-box-big_symptoms_all').hide();
        }
    }
);


}

function getCPGoalSymptomsAll(PatientId) {
    $('.indicator-box-big_symptoms_all').show();
    $('.indicator-box-big_symptoms_all').text('');
    intTotalSymptoms = "";
    var intSymptomsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {
        
        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                intSymptomsCount = intSymptomsCount + 1;
                intTotalSymptoms = "ALL " + intSymptomsCount + "";

                // intTotalSymptoms = "ALL " + results.length + "";
                $('.indicator-box-big_symptoms_all').text(intTotalSymptoms);
                strTargetVal = "";
                strLastTargetVal = "";
                strLastGoalDt = "";
                strNextDueDt = "";
                strGoalId = tri_cccareplangoalId;
                vtxtColor = "";

                switch (tri_typeofgoalcode) {
                    case 100000000:
                        strTargetVal = results[i].tri_qualitativetarget;
                        strLastTargetVal = tri_lastresult;
                        break;
                    case 100000001:
                        var vMtrcOprtr1txt = "";
                        vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);
                        if (tri_range == true) {
                            var vMtrcOprtr2txt = "";
                            vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                           vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        else {
                            // alert(vMtrcOprtr1txt);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                        }
                        if (tri_LastTargetValue !== null) {
                            strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        break;
                    case null:
                        strTargetVal = results[i].tri_qualitativetarget;
                        break;
                }

                if (tri_LastGoalDate !== null) {
                    strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                }

                if (tri_NextDueDate !== null) {
                    strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                }

                switch (tri_CarePlanGoalState) {
                    case 167410000:
                        vtxtColor = "#ff7d09";//orange
                        break;
                    case 167410001:
                        vtxtColor = "#99cc00";//green
                        break;
                    case 167410002:
                        vtxtColor = "#dd3b31";//red
                        break;
                    case 167410003:
                        vtxtColor = "#ff7d09";//orange
                        break;
                }
                getVitalNameAndAppendTag("maintable_symptoms_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
            }
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
       
        if (intTotalSymptoms === null || intTotalSymptoms === undefined || intTotalSymptoms === "") {
            $('.indicator-box-big_symptoms_all').text("ALL " + intSymptomsCount);
           // $('.indicator-box-big_symptoms_all').hide();
        }
    }
);


}

function GetMetricOperatorTextBasedOnVal(OprtrVal) {
    switch (OprtrVal) {
        case 167410000:
           
            return (">");
            break;
        case 167410001:
          
            return ("<");
            break;
        case 167410002:
         
            return ("=");
            break;
        case 167410003:
         
            return ("% Increase");
            break;
        case 167410004:
            
            return ("% Decrease");
            break;
        case 167410005:
           
            return (">=");
            break;
        case 167410006:
            
            return ("<=");
            break;


    }
}

function getVitalNameAndAppendTag(AppendClassName, tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor) {

    $('.' + AppendClassName).html('');

    if (tri_vitalsvaluetype !== null && tri_vitalsvaluetype !== undefined && tri_vitalsvaluetype !== "") { // filter change
        //if (tri_vitalsvaluetype !== null && tri_vitalsvaluetype !== undefined && tri_vitalsvaluetype !== "" && (filteredCarePlangoalIds.indexOf(tri_vitalsvaluetype) == -1)) { // filter change

        SDK.JQuery.retrieveMultipleRecords(
        "tri_vitalsvaluetype",
        "?$select=tri_name&$filter=tri_vitalsvaluetypeId eq (guid'" + tri_vitalsvaluetype + "')",
        function (results) {
            for (var i = 0; i < results.length; i++) {
                var tri_name = results[i].tri_name;
            }

            if (strLastTargetVal === null || strLastTargetVal === undefined) {
                strLastTargetVal = ""
            }

            tagSymptomsAll = '<tr >' +
                            '<td class="typedetails">' + tri_name + '</td>' +
                            //'<td class="target"><input type="text" id = "'+vinputTrgtId+'" class="txtfield"  style="background-color: #FAFAFA;border:none;"></td >' +
                            '<td class="target" style="color:' + vtxtColor + ';">' + strTargetVal + '<td>' +
                            '<td class="lastresult">' + strLastTargetVal + '</td>' +
                            '<td class="lastresultdate">' + strLastGoalDt + '</td>' +
                            '<td class="duedate">' + strNextDueDt + '</td>' +
                            '<td class="more" id="' + strGoalId + '">...</td>' +
                            '</tr>' +
                            '<tr>' +
                            '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                            '</tr>'

            $('.' + AppendClassName).append(tagSymptomsAll);
            $('.txtfieldquantitative').spinner();
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something

        }
    );
    }
}

function getCPGoalSymptomsNotMet(PatientId) {
    //alert(PatientId);

    $('.indicator-box-small_symptoms_red').show();
    $('.indicator-box-small_symptoms_red').text('');
    intTotalSymptomsNotMet = "";
    var intSymptomsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
     "tri_cccareplangoal",
     "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000000 and  tri_CarePlanGoalState/Value eq 167410002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     function (results) {

         for (var i = 0; i < results.length; i++) {
             var vVitalName = "";
             var tri_activitydescription = results[i].tri_activitydescription;
             var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
             var tri_activitydueon = results[i].tri_activitydueon;
             var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
             var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
             var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
             var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
             var tri_GoalSelected = results[i].tri_GoalSelected;
             var tri_LastGoalDate = results[i].tri_LastGoalDate;
             var tri_LastResultDate = results[i].tri_LastResultDate;
             var tri_LastTargetValue = results[i].tri_LastTargetValue;
             var tri_lastresult = results[i].tri_lastresult;
             var tri_Metric = results[i].tri_Metric;
             var tri_MetricOperator = results[i].tri_MetricOperator.Value;
             var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
             var tri_name = results[i].tri_name;
             var tri_NextDueDate = results[i].tri_NextDueDate;
             var tri_qualitativeaction = results[i].tri_qualitativeaction;
             var tri_qualitativetarget = results[i].tri_qualitativetarget;
             var tri_range = results[i].tri_range;
             var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
             var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
             var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
             var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
             var tri_cccareplangoalId = results[i].tri_cccareplangoalId;


             if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                 intSymptomsCount = intSymptomsCount + 1;
                 intTotalSymptomsNotMet = " " + intSymptomsCount + "";

                 // intTotalSymptomsNotMet = " " + results.length + " ";

                 $('.indicator-box-small_symptoms_red').text(intTotalSymptomsNotMet);


                 strTargetVal = "";
                 strLastTargetVal = "";
                 strLastGoalDt = "";
                 strNextDueDt = "";
                 strGoalId = tri_cccareplangoalId;
                 vtxtColor = "";

                 switch (tri_typeofgoalcode) {
                     case 100000000:

                         strTargetVal = results[i].tri_qualitativetarget;
                         strLastTargetVal = tri_lastresult;

                         break;

                     case 100000001:

                         var vMtrcOprtr1txt = "";
                         vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                         if (tri_range == true) {
                             var vMtrcOprtr2txt = "";
                             vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                            vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         else {
                             // alert(vMtrcOprtr1txt);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                         }

                         if (tri_LastTargetValue !== null) {
                             strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         break;

                     case null:
                         strTargetVal = results[i].tri_qualitativetarget;
                         break;
                 }


                 if (tri_LastGoalDate !== null) {
                     strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                 }

                 if (tri_NextDueDate !== null) {
                     strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                 }

                 switch (tri_CarePlanGoalState) {
                     case 167410000:
                         vtxtColor = "#ff7d09";//orange

                         break;
                     case 167410001:
                         vtxtColor = "#99cc00";//green

                         break;
                     case 167410002:
                         vtxtColor = "#dd3b31";//red

                         break;
                     case 167410003:
                         vtxtColor = "#ff7d09";//orange
                         break;

                 }

                 getVitalNameAndAppendTag("maintable_symptoms_red", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

             }
         }
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something

         if (intTotalSymptomsNotMet === null || intTotalSymptomsNotMet === undefined || intTotalSymptomsNotMet === "") {
             $('.indicator-box-small_symptoms_red').text('');
             $('.indicator-box-small_symptoms_red').hide();
         }
     }
 );
}

function getCPGoalSymptomsMet(PatientId) {

    $('.indicator-box-small_symptoms_green').show();
    $('.indicator-box-small_symptoms_green').text('');
    intTotalSymptomsMet = "";
    var intSymptomsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000000 and  tri_CarePlanGoalState/Value eq 167410001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intSymptomsCount = intSymptomsCount + 1;
                    intTotalSymptomsMet = " " + intSymptomsCount + "";

                    // intTotalSymptomsMet = " " + results.length + " ";

                    $('.indicator-box-small_symptoms_green').text(intTotalSymptomsMet);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_symptoms_green", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalSymptomsMet === null || intTotalSymptomsMet === undefined || intTotalSymptomsMet === "") {
                $('.indicator-box-small_symptoms_green').text('');
                $('.indicator-box-small_symptoms_green').hide();
            }
        }
    );
}

function getCPGoalSymptomsOpen(PatientId) {

    //alert(PatientId);
    $('.indicator-box-small_symptoms_orange').show();
    $('.indicator-box-small_symptoms_orange').text('');
    intTotalSymptomsOpen = "";
    var intSymptomsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000000 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {

          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

              if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                  intSymptomsCount = intSymptomsCount + 1;
                  intTotalSymptomsOpen = " " + intSymptomsCount + "";

                  //              intTotalSymptomsOpen = " " + results.length + " ";

                  $('.indicator-box-small_symptoms_orange').text(intTotalSymptomsOpen);


                  strTargetVal = "";
                  strLastTargetVal = "";
                  strLastGoalDt = "";
                  strNextDueDt = "";
                  strGoalId = tri_cccareplangoalId;
                  vtxtColor = "";

                  switch (tri_typeofgoalcode) {
                      case 100000000:

                          strTargetVal = results[i].tri_qualitativetarget;
                          strLastTargetVal = tri_lastresult;

                          break;

                      case 100000001:

                          var vMtrcOprtr1txt = "";
                          vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                          if (tri_range == true) {
                              var vMtrcOprtr2txt = "";
                              vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                             vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          else {
                              // alert(vMtrcOprtr1txt);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                          }

                          if (tri_LastTargetValue !== null) {
                              strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }

                          break;

                      case null:
                          strTargetVal = results[i].tri_qualitativetarget;
                          break;
                  }


                  if (tri_LastGoalDate !== null) {
                      strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                  }

                  if (tri_NextDueDate !== null) {
                      strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                  }

                  switch (tri_CarePlanGoalState) {
                      case 167410000:
                          vtxtColor = "#ff7d09";//orange

                          break;
                      case 167410001:
                          vtxtColor = "#99cc00";//green

                          break;
                      case 167410002:
                          vtxtColor = "#dd3b31";//red

                          break;
                      case 167410003:
                          vtxtColor = "#ff7d09";//orange
                          break;

                  }

                  getVitalNameAndAppendTag("maintable_symptoms_orange", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

              }
          }
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something

          if (intTotalSymptomsOpen === null || intTotalSymptomsOpen === undefined || intTotalSymptomsOpen === "") {
              $('.indicator-box-small_symptoms_orange').text('');
              $('.indicator-box-small_symptoms_orange').hide();
          }
      }
  );
}

function getCPGoalSymptomsOverDue(PatientId) {

    $('.indicator-box-small_symptoms_grey').show();
    $('.indicator-box-small_symptoms_grey').text('');
    intTotalSymptomsOverDue = "";
    var intSymptomsCount = 0;

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000000 and tri_NextDueDate le datetime'" + dateMsg + "'  and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intSymptomsCount = intSymptomsCount + 1;
                    intTotalSymptomsOverDue = " " + intSymptomsCount + "";

                    // intTotalSymptomsOverDue = " " + results.length + " ";

                    $('.indicator-box-small_symptoms_grey').html('<img class="symptomoverdueimg" src="../tri_imgs/KMcalendar.png" width="14">' + intTotalSymptomsOverDue);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }
                    getVitalNameAndAppendTag("maintable_symptoms_grey", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalSymptomsOverDue === null || intTotalSymptomsOverDue === undefined || intTotalSymptomsOverDue === "") {
                $('.indicator-box-small_symptoms_grey').text('');
                $('.indicator-box-small_symptoms_grey').hide();
            }
        }
    );
}

function errorHandler(error) {
    alert(error.message);
}

function SetNextDuedate(NextDueDate, GoalState, InrangeFreq, OutrangeFreq){
    var nextDueDateValue;
    // goal_state is 'Met' or 'Open' and in range freq = every encounter or goal-STate = not met, and out of range freq is every encounter
    if(((GoalState === 167410001 || GoalState === 167410000) && InrangeFreq === 167410007) 
        || (GoalState === 167410002 && OutrangeFreq === 167410007))
    {
        nextDueDateValue = "Every Encounter";
    }
    else
    {
        nextDueDateValue = $.datepicker.formatDate('mm/dd/yy', NextDueDate);
    }
    return nextDueDateValue;
}

function retrievePatient(PatientId) {
    SDK.JQuery.retrieveRecord(
        PatientId,
        "Contact",
        null, null,
        function (contact) {
            alert("Retrieved the contact named \"" + contact.FullName + "\". This contact was created on : \"" + contact.CreatedOn + "\".");
            //updateAccount(AccountId);
        },
        errorHandler
      );
}

function ReviewAndUpdateGoal(currentId) {
    //alert(currentId);
    //$('.savebtn_prsnlize').prop("disabled", false);

    SDK.JQuery.retrieveRecord(
  currentId,
  "tri_cccareplangoal",
  "tri_actiontriggervalue,tri_range,tri_PatientID,tri_metricoperatortwo,tri_vitalsvaluetype,tri_MetricOperator,tri_qualitativetarget,tri_Metric,tri_targetvaluetwo,tri_typeofgoalcode,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_qualitativeaction,tri_activityrecurrencemultiplierabnormal,tri_activityrecurrencemultipliernormal,tri_PatientModifierId,tri_activitydescription,tri_LastTargetValue,tri_activitydescriptionabnormal,tri_CarePlanGoalState,tri_LastGoalDate,tri_LastResultDate,tri_name,tri_NextDueDate,tri_typeofgoalcode,tri_patientmodifier_tri_cccareplangoal/tri_name,tri_tri_vitalsvaluetype_tri_cccareplangoal_vitalsvaluetype/tri_name",
  'tri_patientmodifier_tri_cccareplangoal,tri_tri_vitalsvaluetype_tri_cccareplangoal_vitalsvaluetype,tri_lastresult',
  function (result) {
      //alert(result.tri_name);
      var tri_actiontriggervalue = result.tri_actiontriggervalue;
      var tri_activitydescription = result.tri_activitydescription;
      var tri_activitydescriptionabnormal = result.tri_activitydescriptionabnormal;
      var tri_CarePlanGoalState = result.tri_CarePlanGoalState.Value;
      var tri_LastGoalDate = result.tri_LastGoalDate;
      var tri_LastTargetValue = result.tri_LastTargetValue;
      var tri_lastresult = result.tri_lastresult;
      var tri_LastResultDate = result.tri_LastResultDate;
      var tri_name = result.tri_name;
      var tri_NextDueDate = result.tri_NextDueDate;
      var tri_typeofgoalcode = result.tri_typeofgoalcode;
      var tri_vitalsvaluetype = result.tri_vitalsvaluetype.Id;
      var tri_PatientModifierId = result.tri_PatientModifierId.Id;
      var tri_MetricOperator = result.tri_MetricOperator.Value;
      var tri_metricoperatortwo = result.tri_metricoperatortwo.Value;
      var tri_qualitativetarget = result.tri_qualitativetarget;
      var tri_Metric = result.tri_Metric;
      var tri_targetvaluetwo = result.tri_targetvaluetwo;
      var tri_typeofgoalcode = result.tri_typeofgoalcode.Value;
      var tri_activityrecurrencemultiplierabnormal = result.tri_activityrecurrencemultiplierabnormal;
      var tri_activityrecurrencemultipliernormal = result.tri_activityrecurrencemultipliernormal;
      var tri_activityrecurrence = result.tri_activityrecurrence.Value;
      var tri_activityrecurrenceabnormal = result.tri_activityrecurrenceabnormal.Value;
      var tri_qualitativeaction = result.tri_qualitativeaction;
      var tri_range = result.tri_range;
      var tri_PatientID = result.tri_PatientID.Id;
      var tri_patientmodifier_tri_cccareplangoal_tri_name = result.tri_patientmodifier_tri_cccareplangoal.tri_name;
      var tri_tri_vitalsvaluetype_tri_cccareplangoal_vitalsvaluetype_tri_name = result.tri_tri_vitalsvaluetype_tri_cccareplangoal_vitalsvaluetype.tri_name;

      /////////////////// var strLstGoalDt = $.datepicker.formatDate('mm/dd/yy', result.tri_LastGoalDate);
      var strNxtGoalDt = $.datepicker.formatDate('mm/dd/yy', result.tri_NextDueDate);
      var strLastTrgtVal = tri_LastTargetValue;
      // alert(tri_vitalsvaluetype);

      //if (parent.Xrm !== undefined) {
      //    var contactId = parent.Xrm.Page.data.entity.getId();
      //}

     // alert(contactId);

      GetPersonLizationModifierBasedOnValueType(tri_vitalsvaluetype, tri_PatientID);

      $('.monitor-wrapper').hide();
      $('.sectiontitle_personalize').text(tri_name);
     
      ///////////////// $('#lastresultdate_personalize').val(strLstGoalDt).datepicker({ disabled: true });
      $('#nextresultdate_personalize').val(strNxtGoalDt).datepicker({ disabled: true });
      //$('#lastresultdate_personalize').datepicker();
      $('.personalizedropdownmenu').attr('id', tri_vitalsvaluetype + "_ULPRSNL");
      $('.personalizenormalmultiplier').val(tri_activityrecurrencemultipliernormal); //.spinner();
      $('.personalizeabnormalmultiplier').val(tri_activityrecurrencemultiplierabnormal); //.spinner();
      $('.personalizetriggeraction').val(tri_qualitativeaction).prop('readonly', true);
      $('.savebtn_prsnlize1').attr('id', tri_vitalsvaluetype + "_PRSNLSAVEBTN");
      $('.personalizeULnormalrecurr').attr('id', tri_vitalsvaluetype + "_PRSNLULNRMLRCR");
      $('.personalizeULabnormalrecurr').attr('id', tri_vitalsvaluetype + "_PRSNLULABNRMLRCR");
      $('.personalizeULoperatorOne').attr('id', tri_vitalsvaluetype + "_PRSNLULOPRTR1");
      $('.personalizeULoperatorTwo').attr('id', tri_vitalsvaluetype + "_PRSNLULOPRTR2");
      //$('.personalizeULoperator').attr('id', tri_vitalsvaluetype + "_PRSNLULOPRTR");


      SDK.JQuery.retrieveRecord(
       tri_PatientModifierId,
        "tri_patientmodifier",
        "tri_name",
        null,
        function (result) {
            var tri_name = result.tri_name;
            $('.personalizemodifierbutton').html(tri_name);//append  modifier
           
        },
        function (error) {
            alert(error.message);
        }
    );

      switch (tri_CarePlanGoalState) {
          case 167410000:
              $('.personalizegoalbutton').text("Open");
              //$('.flag-box-big').text(" Open ");
              $('.personalizegoalbutton').val(167410000);
              $('.indicator-line,.flag-box-big').addClass("orange").removeClass("red grey green blue");
              break;
          case 167410001:
              $('.personalizegoalbutton').text("Met");
              $('.personalizegoalbutton').val(167410001);
              $('.indicator-line,.flag-box-big').addClass("green").removeClass("red grey orange blue");
              break;
          case 167410002:
              $('.personalizegoalbutton').text("Not Met");
              $('.personalizegoalbutton').val(167410002);
              $('.indicator-line,.flag-box-big').addClass("red").removeClass("orange grey green blue");
              break;
          case 167410003:
              $('.personalizegoalbutton').text("Closed, Cancelled");
              $('.personalizegoalbutton').val(167410003);
              $('.indicator-line,.flag-box-big').addClass('orange').removeClass("red grey green blue");
              break;
          
      }

      switch (tri_typeofgoalcode) {
          case 100000000: // Qualitative
              $('#qualLastresult_personalize').css('display', 'block');
              $('#lastresult_personalize').css('display', 'none');

              //$('#tbl_ObservedValue').css('display', 'block');
              $('#tbl_ObservedValue').show();
              $('.personalizetargetvalQual').val(tri_qualitativetarget).addClass('qualitative').removeClass('quantitative').prop('readonly',true);
              $('.personalizequalitative,.personalizetargetvalQual').show();
              $('.personalizequantitative').hide();
              $('.personalizegoalbutton').prop({ disabled: false });
              $('#qualLastresult_personalize').val(tri_lastresult).prop('readonly', true);
              //$('#lastresultdate_personalize').css('display', 'none')
              $('#observedValue').val('');
              var strLstResultDt = $.datepicker.formatDate('mm/dd/yy', result.tri_LastResultDate);
              $('#lastresultdate_personalize').val(strLstResultDt).datepicker({ disabled: true });

              break;
          case 100000001: // Quantitative
             // $('.personalizetargetval').val(tri_Metric).removeClass('qualitative').addClass('quantitative');
              // // $("#" + vMETRICselector).;
              $('#lastresult_personalize').css('display', 'block');
              // $('#tbl_ObservedValue').css('display', 'none');
              $('#tbl_ObservedValue').hide();

              var strLstGoalDt = $.datepicker.formatDate('mm/dd/yy', result.tri_LastGoalDate);
              $('#lastresultdate_personalize').val(strLstGoalDt).datepicker({ disabled: true });
              $('#qualLastresult_personalize').css('display', 'none');

              $('.personalizegoalbutton').prop({ disabled: true });
              switch (tri_MetricOperator) {
                  case 167410000:
                      $('.personalizeoperatorOne').text(">");
                      $('.personalizeoperatorOne').val(167410000);
                      break;
                  case 167410001:
                      $('.personalizeoperatorOne').text("<");
                      $('.personalizeoperatorOne').val(167410001);
                      break;
                  case 167410002:
                      $('.personalizeoperatorOne').text("=");
                      $('.personalizeoperatorOne').val(167410002);
                      break;
                  case 167410003:
                      $('.personalizeoperatorOne').text("% Increase");
                      $('.personalizeoperatorOne').val(167410003);
                      break;
                  case 167410004:
                      $('.personalizeoperatorOne').text("% Decrease");
                      $('.personalizeoperatorOne').val(167410004);
                      break;
                  case 167410005:
                      $('.personalizeoperatorOne').text(">=");
                      $('.personalizeoperatorOne').val(167410005);
                      break;
                  case 167410006:
                      $('.personalizeoperatorOne').text("<=");
                      $('.personalizeoperatorOne').val(167410006);
                      break;
              }

              switch (tri_metricoperatortwo) {
                  case 167410000:
                      $('.personalizeoperatorTwo').text(">");
                      $('.personalizeoperatorTwo').val(167410000);
                      break;
                  case 167410001:
                      $('.personalizeoperatorTwo').text("<");
                      $('.personalizeoperatorTwo').val(167410001);
                      break;
                  case 167410002:
                      $('.personalizeoperatorTwo').text("=");
                      $('.personalizeoperatorTwo').val(167410002);
                      break;
                  case 167410003:
                      $('.personalizeoperatorTwo').text("% Increase");
                      $('.personalizeoperatorTwo').val(167410003);
                      break;
                  case 167410004:
                      $('.personalizeoperatorTwo').text("% Decrease");
                      $('.personalizeoperatorTwo').val(167410004);
                      break;
                  case 167410005:
                      $('.personalizeoperatorTwo').text(">=");
                      $('.personalizeoperatorTwo').val(167410005);
                      break;
                  case 167410006:
                      $('.personalizeoperatorTwo').text("<=");
                      $('.personalizeoperatorTwo').val(167410006);
                      break;
              }

              if (tri_targetvaluetwo === null || tri_targetvaluetwo === undefined)
              {
                  tri_targetvaluetwo = 0;
              }
              var metric1 = tri_Metric.substr(0, tri_Metric.indexOf("."));
              $('.personalizetargetvalMetric').val(metric1).prop('readonly', true); //.spinner({ step: 1.00, numberFormat: "n" });

              var metric2 = tri_targetvaluetwo.substr(0,tri_targetvaluetwo.indexOf("."));
              $('.personalizetargetvalMetricTwo').val(metric2).prop('readonly', true); //.spinner({ step: 1.00, numberFormat: "n" });

              $('.personalizequantitative').show();
              $('.personalizequalitative').hide();

              //if (tri_range == false || tri_range === null || tri_range === undefined) {
              //    $('.personalizerangeAnd,.personalizeoperatorTwo,.personalizetargetvalMetricTwo').hide();
              //};
              if (tri_range == true) {
                  $('.personalizerangeAnd,.personalizeoperatorTwo,.personalizetargetvalMetricTwo').show();
              }
              else {
                  $('.personalizerangeAnd,.personalizeoperatorTwo,.personalizetargetvalMetricTwo').hide();
              }
              //// GetSetTargetMetricOperator(tri_vitalsvaluetypeid, tri_targetmetricoperator);
              if (strLastTrgtVal !== null && strLastTrgtVal !== "") {
                  $('#lastresult_personalize').val(strLastTrgtVal).prop('readonly', true); //.spinner({ step: 1.00, numberFormat: "n", disabled: true });
              }

              break;
          case null:
              $('.personalizequantitative').hide();
              $('.personalizequalitative').show();
              $('#qualLastresult_personalize').css('display', 'block');
              break;
      }

      $('.personalizenormalmultiplier').show();
      switch (tri_activityrecurrence) {
          case 1:
              $('.personalizerecurrnormal').text("Day");
              $('.personalizerecurrnormal').val(1);
              break;
          case 167410000:
              $('.personalizerecurrnormal').text("Week");
              $('.personalizerecurrnormal').val(167410000);
              break;
          //case 167410001:
          //    $('.personalizerecurrnormal').text("Bi-Week");
          //    $('.personalizerecurrnormal').val(167410001);
          //    break;
          case 167410002:
              $('.personalizerecurrnormal').text("Month");
              $('.personalizerecurrnormal').val(167410002);
              break;
          case 167410003:
              $('.personalizerecurrnormal').text("Quarter");
              $('.personalizerecurrnormal').val(167410003);
              break;
          //case 167410004:
          //    $('.personalizerecurrnormal').text("Every 6 Months");
          //    $('.personalizerecurrnormal').val(167410004);
          //    break;
          case 167410005:
              $('.personalizerecurrnormal').text("Year");
              $('.personalizerecurrnormal').val(167410005);
              break;
          //case 167410006:
          //    $('.personalizerecurrnormal').text("3 times a day");
          //    $('.personalizerecurrnormal').val(167410006);
          //    break;
          case 167410007:
              $('.personalizerecurrnormal').text("Every Encounter");
              $('.personalizerecurrnormal').val(167410007);
              $('.personalizenormalmultiplier').hide();
              break;
      }

      $('.personalizeabnormalmultiplier').show();
      switch (tri_activityrecurrenceabnormal) {
          case 1:
              $('.personalizerecurrabnormal').text("Day");
              $('.personalizerecurrabnormal').val(1);
              break;
          case 167410000:
              $('.personalizerecurrabnormal').text("Week");
              $('.personalizerecurrabnormal').val(167410000);
              break;
          //case 167410001:
          //    $('.personalizerecurrabnormal').text("Bi-Week");
          //    $('.personalizerecurrabnormal').val(167410001);
          //    break;
          case 167410002:
              $('.personalizerecurrabnormal').text("Month");
              $('.personalizerecurrabnormal').val(167410002);
              break;
          case 167410003:
              $('.personalizerecurrabnormal').text("Quarter");
              $('.personalizerecurrabnormal').val(167410003);
              break;
          //case 167410004:
          //    $('.personalizerecurrabnormal').text("Every 6 Months");
          //    $('.personalizerecurrabnormal').val(167410004);
          //    break;
          case 167410005:
              $('.personalizerecurrabnormal').text("Year");
              $('.personalizerecurrabnormal').val(167410005);
              break;
          //case 167410006:
          //    $('.personalizerecurrabnormal').text("3 times a day");
          //    $('.personalizerecurrabnormal').val(167410006);
          //    break;
          case 167410007:
              $('.personalizerecurrabnormal').text("Every Encounter");
              $('.personalizerecurrabnormal').val(167410007);
              $('.personalizeabnormalmultiplier').hide();
              break;
      }
      

      //$('.window-wrapper').show('slow');
      $('.window-wrapper').css('display', 'inline-block');

      //$('.savebtn_prsnlize').prop('disabled', true);
  },

  function (error) {
      alert(error.message);
  }



);

    
}

function getCPGoaltestcareAll(PatientId) {
    $('.indicator-box-big_testcare_all').show();
    $('.indicator-box-big_testcare_all').text('');
    intTotaltestcare = "";
    var intTestcareCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {

        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            
            if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                intTestcareCount = intTestcareCount + 1;
                intTotaltestcare = "ALL " + intTestcareCount + "";

                // intTotaltestcare = "ALL " + results.length + "";

                $('.indicator-box-big_testcare_all').text(intTotaltestcare);


                strTargetVal = "";
                strLastTargetVal = "";
                strLastGoalDt = "";
                strNextDueDt = "";
                strGoalId = tri_cccareplangoalId;
                vtxtColor = "";

                switch (tri_typeofgoalcode) {
                    case 100000000:

                        strTargetVal = results[i].tri_qualitativetarget;
                        strLastTargetVal = tri_lastresult;

                        break;

                    case 100000001:

                        var vMtrcOprtr1txt = "";
                        vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                        if (tri_range == true) {
                            var vMtrcOprtr2txt = "";
                            vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                           vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        else {
                            // alert(vMtrcOprtr1txt);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                        }

                        if (tri_LastTargetValue !== null) {
                            strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        break;

                    case null:
                        strTargetVal = results[i].tri_qualitativetarget;
                        break;
                }


                if (tri_LastGoalDate !== null) {
                    strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                }

                if (tri_NextDueDate !== null) {
                    strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                }

                switch (tri_CarePlanGoalState) {
                    case 167410000:
                        vtxtColor = "#ff7d09";//orange

                        break;
                    case 167410001:
                        vtxtColor = "#99cc00";//green

                        break;
                    case 167410002:
                        vtxtColor = "#dd3b31";//red

                        break;
                    case 167410003:
                        vtxtColor = "#ff7d09";//orange
                        break;

                }

                getVitalNameAndAppendTag("maintable_testcare_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
            }

        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        if (intTotaltestcare === null || intTotaltestcare === undefined || intTotaltestcare === "") {
            $('.indicator-box-big_testcare_all').text("ALL " + intTestcareCount);
            //$('.indicator-box-big_testcare_all').hide();
        }
    }
);
}

function getCPGoaltestcareNotMet(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_testcare_red').show();
    $('.indicator-box-small_testcare_red').text('');
    intTotaltestcareNotMet = "";
    var intTestcareCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
     "tri_cccareplangoal",
     "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000001 and  tri_CarePlanGoalState/Value eq 167410002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     function (results) {

         for (var i = 0; i < results.length; i++) {
             var vVitalName = "";
             var tri_activitydescription = results[i].tri_activitydescription;
             var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
             var tri_activitydueon = results[i].tri_activitydueon;
             var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
             var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
             var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
             var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
             var tri_GoalSelected = results[i].tri_GoalSelected;
             var tri_LastGoalDate = results[i].tri_LastGoalDate;
             var tri_LastResultDate = results[i].tri_LastResultDate;
             var tri_LastTargetValue = results[i].tri_LastTargetValue;
             var tri_lastresult = results[i].tri_lastresult;
             var tri_Metric = results[i].tri_Metric;
             var tri_MetricOperator = results[i].tri_MetricOperator.Value;
             var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
             var tri_name = results[i].tri_name;
             var tri_NextDueDate = results[i].tri_NextDueDate;
             var tri_qualitativeaction = results[i].tri_qualitativeaction;
             var tri_qualitativetarget = results[i].tri_qualitativetarget;
             var tri_range = results[i].tri_range;
             var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
             var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
             var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
             var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
             var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

             if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                 intTestcareCount = intTestcareCount + 1;
                 intTotaltestcareNotMet = " " + intTestcareCount + "";

                 //intTotaltestcareNotMet = " " + results.length + " ";

                 $('.indicator-box-small_testcare_red').text(intTotaltestcareNotMet);


                 strTargetVal = "";
                 strLastTargetVal = "";
                 strLastGoalDt = "";
                 strNextDueDt = "";
                 strGoalId = tri_cccareplangoalId;
                 vtxtColor = "";

                 switch (tri_typeofgoalcode) {
                     case 100000000:

                         strTargetVal = results[i].tri_qualitativetarget;
                         strLastTargetVal = tri_lastresult;

                         break;

                     case 100000001:

                         var vMtrcOprtr1txt = "";
                         vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                         if (tri_range == true) {
                             var vMtrcOprtr2txt = "";
                             vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                            vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         else {
                             // alert(vMtrcOprtr1txt);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                         }

                         if (tri_LastTargetValue !== null) {
                             strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         break;

                     case null:
                         strTargetVal = results[i].tri_qualitativetarget;
                         break;
                 }


                 if (tri_LastGoalDate !== null) {
                     strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                 }

                 if (tri_NextDueDate !== null) {
                     strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                 }

                 switch (tri_CarePlanGoalState) {
                     case 167410000:
                         vtxtColor = "#ff7d09";//orange

                         break;
                     case 167410001:
                         vtxtColor = "#99cc00";//green

                         break;
                     case 167410002:
                         vtxtColor = "#dd3b31";//red

                         break;
                     case 167410003:
                         vtxtColor = "#ff7d09";//orange
                         break;

                 }

                 getVitalNameAndAppendTag("maintable_testcare_red", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
             }

         }
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
         if (intTotaltestcareNotMet === null || intTotaltestcareNotMet === undefined || intTotaltestcareNotMet === "") {
             $('.indicator-box-small_testcare_red').text('');
             $('.indicator-box-small_testcare_red').hide();
         }
     }
 );
}

function getCPGoaltestcareOpen(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_testcare_orange').show();
    $('.indicator-box-small_testcare_orange').text('');
    intTotaltestcareOpen = "";
    var intTestcareCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000001 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {

          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

              if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                  intTestcareCount = intTestcareCount + 1;
                  intTotaltestcareOpen = " " + intTestcareCount + "";

                  // intTotaltestcareOpen = " " + results.length + " ";

                  $('.indicator-box-small_testcare_orange').text(intTotaltestcareOpen);


                  strTargetVal = "";
                  strLastTargetVal = "";
                  strLastGoalDt = "";
                  strNextDueDt = "";
                  strGoalId = tri_cccareplangoalId;
                  vtxtColor = "";

                  switch (tri_typeofgoalcode) {
                      case 100000000:

                          strTargetVal = results[i].tri_qualitativetarget;
                          strLastTargetVal = tri_lastresult;

                          break;

                      case 100000001:

                          var vMtrcOprtr1txt = "";
                          vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                          if (tri_range == true) {
                              var vMtrcOprtr2txt = "";
                              vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                             vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          else {
                              // alert(vMtrcOprtr1txt);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                          }

                          if (tri_LastTargetValue !== null) {
                              strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          break;

                      case null:
                          strTargetVal = results[i].tri_qualitativetarget;
                          break;
                  }


                  if (tri_LastGoalDate !== null) {
                      strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                  }

                  if (tri_NextDueDate !== null) {
                      strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                  }

                  switch (tri_CarePlanGoalState) {
                      case 167410000:
                          vtxtColor = "#ff7d09";//orange

                          break;
                      case 167410001:
                          vtxtColor = "#99cc00";//green

                          break;
                      case 167410002:
                          vtxtColor = "#dd3b31";//red

                          break;
                      case 167410003:
                          vtxtColor = "#ff7d09";//orange
                          break;

                  }

                  getVitalNameAndAppendTag("maintable_testcare_orange", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

              }
          }
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
          if (intTotaltestcareOpen === null || intTotaltestcareOpen === undefined || intTotaltestcareOpen === "") {
              $('.indicator-box-small_testcare_orange').text('');
              $('.indicator-box-small_testcare_orange').hide();
          }
      }
  );
}

function getCPGoaltestcareMet(PatientId) {
    $('.indicator-box-small_testcare_green').show();
    $('.indicator-box-small_testcare_green').text('');
    intTotaltestcareMet = "";
    var intTestcareCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000001 and  tri_CarePlanGoalState/Value eq 167410001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intTestcareCount = intTestcareCount + 1;
                    intTotaltestcareMet = " " + intTestcareCount + "";

                    // intTotaltestcareMet = " " + results.length + " ";

                    $('.indicator-box-small_testcare_green').text(intTotaltestcareMet);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_testcare_green", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotaltestcareMet === null || intTotaltestcareMet === undefined || intTotaltestcareMet === "") {
                $('.indicator-box-small_testcare_green').text('');
                $('.indicator-box-small_testcare_green').hide();
            }
        }
    );
}

function getCPGoaltestcareOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    $('.indicator-box-small_testcare_grey').show();
    $('.indicator-box-small_testcare_grey').text('');
    intTotaltestcareOverDue = "";
    var intTestcareCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000001 and tri_NextDueDate le datetime'" + dateMsg + "'  and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intTestcareCount = intTestcareCount + 1;
                    intTotaltestcareOverDue = " " + intTestcareCount + "";
                    // intTotaltestcareOverDue = " " + results.length + " ";

                    $('.indicator-box-small_testcare_grey').html('<img class="symptomoverdueimg" src="../tri_imgs/KMcalendar.png" width="14">' + intTotaltestcareOverDue);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_testcare_grey", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotaltestcareOverDue === null || intTotaltestcareOverDue === undefined || intTotaltestcareOverDue === "") {
                $('.indicator-box-small_testcare_grey').text('');
                $('.indicator-box-small_testcare_grey').hide();
            }
        }
    );
}

function getCPGoalvitalsAll(PatientId) {
    $('.indicator-box-big_vitals_all').show();
    $('.indicator-box-big_vitals_all').text('');
    intTotalvitals = "";
    var intVitalAllCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000007 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {

        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                intVitalAllCount = intVitalAllCount + 1;
                intTotalvitals = "ALL " + intVitalAllCount + "";

                // intTotalvitals = "ALL " + results.length + "";

                $('.indicator-box-big_vitals_all').text(intTotalvitals);


                strTargetVal = "";
                strLastTargetVal = "";
                strLastGoalDt = "";
                strNextDueDt = "";
                strGoalId = tri_cccareplangoalId;
                vtxtColor = "";

                switch (tri_typeofgoalcode) {
                    case 100000000:

                        strTargetVal = results[i].tri_qualitativetarget;
                        strLastTargetVal = tri_lastresult;

                        break;

                    case 100000001:

                        var vMtrcOprtr1txt = "";
                        vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                        if (tri_range == true) {
                            var vMtrcOprtr2txt = "";
                            vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                           vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        else {
                            // alert(vMtrcOprtr1txt);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                        }

                        if (tri_LastTargetValue !== null) {
                            strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        break;

                    case null:
                        strTargetVal = results[i].tri_qualitativetarget;
                        break;
                }


                if (tri_LastGoalDate !== null) {
                    strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                }

                if (tri_NextDueDate !== null) {
                    strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                }

                switch (tri_CarePlanGoalState) {
                    case 167410000:
                        vtxtColor = "#ff7d09";//orange

                        break;
                    case 167410001:
                        vtxtColor = "#99cc00";//green

                        break;
                    case 167410002:
                        vtxtColor = "#dd3b31";//red

                        break;
                    case 167410003:
                        vtxtColor = "#ff7d09";//orange
                        break;

                }
                getVitalNameAndAppendTag("maintable_vitals_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
            }
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        if (intTotalvitals === null || intTotalvitals === undefined || intTotalvitals === "") {
            $('.indicator-box-big_vitals_all').text("ALL " + intVitalAllCount);
           // $('.indicator-box-big_vitals_all').hide();
        }
    }
);
}

function getCPGoalvitalsNotMet(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_vitals_red').show();
    $('.indicator-box-small_vitals_red').text('');
    intTotalvitalsNotMet = "";
    var intVitalAllCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
     "tri_cccareplangoal",
     "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000007 and  tri_CarePlanGoalState/Value eq 167410002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     function (results) {

         for (var i = 0; i < results.length; i++) {
             var vVitalName = "";
             var tri_activitydescription = results[i].tri_activitydescription;
             var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
             var tri_activitydueon = results[i].tri_activitydueon;
             var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
             var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
             var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
             var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
             var tri_GoalSelected = results[i].tri_GoalSelected;
             var tri_LastGoalDate = results[i].tri_LastGoalDate;
             var tri_LastResultDate = results[i].tri_LastResultDate;
             var tri_LastTargetValue = results[i].tri_LastTargetValue;
             var tri_lastresult = results[i].tri_lastresult;
             var tri_Metric = results[i].tri_Metric;
             var tri_MetricOperator = results[i].tri_MetricOperator.Value;
             var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
             var tri_name = results[i].tri_name;
             var tri_NextDueDate = results[i].tri_NextDueDate;
             var tri_qualitativeaction = results[i].tri_qualitativeaction;
             var tri_qualitativetarget = results[i].tri_qualitativetarget;
             var tri_range = results[i].tri_range;
             var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
             var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
             var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
             var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
             var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

             if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                 intVitalAllCount = intVitalAllCount + 1;
                 intTotalvitalsNotMet = " " + intVitalAllCount + "";

                 // intTotalvitalsNotMet = " " + results.length + " ";

                 $('.indicator-box-small_vitals_red').text(intTotalvitalsNotMet);


                 strTargetVal = "";
                 strLastTargetVal = "";
                 strLastGoalDt = "";
                 strNextDueDt = "";
                 strGoalId = tri_cccareplangoalId;
                 vtxtColor = "";

                 switch (tri_typeofgoalcode) {
                     case 100000000:

                         strTargetVal = results[i].tri_qualitativetarget;
                         strLastTargetVal = tri_lastresult;

                         break;

                     case 100000001:

                         var vMtrcOprtr1txt = "";
                         vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                         if (tri_range == true) {
                             var vMtrcOprtr2txt = "";
                             vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                            vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         else {
                             // alert(vMtrcOprtr1txt);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                         }

                         if (tri_LastTargetValue !== null) {
                             strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         break;

                     case null:
                         strTargetVal = results[i].tri_qualitativetarget;
                         break;
                 }


                 if (tri_LastGoalDate !== null) {
                     strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                 }

                 if (tri_NextDueDate !== null) {
                     strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                 }

                 switch (tri_CarePlanGoalState) {
                     case 167410000:
                         vtxtColor = "#ff7d09";//orange

                         break;
                     case 167410001:
                         vtxtColor = "#99cc00";//green

                         break;
                     case 167410002:
                         vtxtColor = "#dd3b31";//red

                         break;
                     case 167410003:
                         vtxtColor = "#ff7d09";//orange
                         break;

                 }
                 getVitalNameAndAppendTag("maintable_vitals_red", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
             }
         }
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
         if (intTotalvitalsNotMet === null || intTotalvitalsNotMet === undefined || intTotalvitalsNotMet === "") {
             $('.indicator-box-small_vitals_red').text('');
             $('.indicator-box-small_vitals_red').hide();
         }
     }
 );
}

function getCPGoalvitalsOpen(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_vitals_orange').show();
    $('.indicator-box-small_vitals_orange').text('');
    intTotalvitalsOpen = "";
    var intVitalAllCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000007 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {

          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

              if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                  intVitalAllCount = intVitalAllCount + 1;
                  intTotalvitalsOpen = " " + intVitalAllCount + "";

                  // intTotalvitalsOpen = " " + results.length + " ";

                  $('.indicator-box-small_vitals_orange').text(intTotalvitalsOpen);


                  strTargetVal = "";
                  strLastTargetVal = "";
                  strLastGoalDt = "";
                  strNextDueDt = "";
                  strGoalId = tri_cccareplangoalId;
                  vtxtColor = "";

                  switch (tri_typeofgoalcode) {
                      case 100000000:

                          strTargetVal = results[i].tri_qualitativetarget;
                          strLastTargetVal = tri_lastresult;

                          break;

                      case 100000001:

                          var vMtrcOprtr1txt = "";
                          vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                          if (tri_range == true) {
                              var vMtrcOprtr2txt = "";
                              vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                             vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          else {
                              // alert(vMtrcOprtr1txt);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                          }

                          if (tri_LastTargetValue !== null) {
                              strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          break;

                      case null:
                          strTargetVal = results[i].tri_qualitativetarget;
                          break;
                  }


                  if (tri_LastGoalDate !== null) {
                      strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                  }

                  if (tri_NextDueDate !== null) {
                      strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                  }

                  switch (tri_CarePlanGoalState) {
                      case 167410000:
                          vtxtColor = "#ff7d09";//orange

                          break;
                      case 167410001:
                          vtxtColor = "#99cc00";//green

                          break;
                      case 167410002:
                          vtxtColor = "#dd3b31";//red

                          break;
                      case 167410003:
                          vtxtColor = "#ff7d09";//orange
                          break;

                  }
                  getVitalNameAndAppendTag("maintable_vitals_orange", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
              }
          }
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
          if (intTotalvitalsOpen === null || intTotalvitalsOpen === undefined || intTotalvitalsOpen === "") {
              $('.indicator-box-small_vitals_orange').text('');
              $('.indicator-box-small_vitals_orange').hide();
          }
      }
  );
}

function getCPGoalvitalsMet(PatientId) {
    $('.indicator-box-small_vitals_green').show();
    $('.indicator-box-small_vitals_green').text('');
    intTotalvitalsMet = "";
    var intVitalAllCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000007 and  tri_CarePlanGoalState/Value eq 167410001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;


                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intVitalAllCount = intVitalAllCount + 1;
                    intTotalvitalsMet = " " + intVitalAllCount + "";

                    // intTotalvitalsMet = " " + results.length + " ";

                    $('.indicator-box-small_vitals_green').text(intTotalvitalsMet);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }
                    getVitalNameAndAppendTag("maintable_vitals_green", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalvitalsMet === null || intTotalvitalsMet === undefined || intTotalvitalsMet === "") {
                $('.indicator-box-small_vitals_green').text('');
                $('.indicator-box-small_vitals_green').hide();
            }
        }
    );
}

function getCPGoalvitalsOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    $('.indicator-box-small_vitals_grey').show();
    $('.indicator-box-small_vitals_grey').text('');
    intTotalvitalsOverDue = "";
    var intVitalAllCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000007 and tri_NextDueDate le datetime'" + dateMsg + "'  and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results_vitalsod) {

            for (var i = 0; i < results_vitalsod.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results_vitalsod[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results_vitalsod[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results_vitalsod[i].tri_activitydueon;
                var tri_activityrecurrence = results_vitalsod[i].tri_activityrecurrence;
                var tri_CarePlanGoalState = results_vitalsod[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results_vitalsod[i].tri_activityrecurrenceabnormal;
                var tri_activityrecurrencemultiplierabnormal = results_vitalsod[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results_vitalsod[i].tri_GoalSelected;
                var tri_LastGoalDate = results_vitalsod[i].tri_LastGoalDate;
                var tri_LastResultDate = results_vitalsod[i].tri_LastResultDate;
                var tri_LastTargetValue = results_vitalsod[i].tri_LastTargetValue;
                var tri_lastresult = results_vitalsod[i].tri_lastresult;
                var tri_Metric = results_vitalsod[i].tri_Metric;
                var tri_MetricOperator = results_vitalsod[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results_vitalsod[i].tri_metricoperatortwo.Value;
                var tri_name = results_vitalsod[i].tri_name;
                var tri_NextDueDate = results_vitalsod[i].tri_NextDueDate;
                var tri_qualitativeaction = results_vitalsod[i].tri_qualitativeaction;
                var tri_qualitativetarget = results_vitalsod[i].tri_qualitativetarget;
                var tri_range = results_vitalsod[i].tri_range;
                var tri_targetmetricoperator = results_vitalsod[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results_vitalsod[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results_vitalsod[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results_vitalsod[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results_vitalsod[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intVitalAllCount = intVitalAllCount + 1;
                    intTotalvitalsOverDue = " " + intVitalAllCount + "";

                    // intTotalvitalsOverDue = " " + results_vitalsod.length + " ";

                    $('.indicator-wrapper_vitals >.indicator-box-small_vitals_grey').html('<img class="symptomoverdueimg" src="../tri_imgs/KMcalendar.png" width="14">' + intTotalvitalsOverDue);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results_vitalsod[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results_vitalsod[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_vitals_grey", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalvitalsOverDue === null || intTotalvitalsOverDue === undefined || intTotalvitalsOverDue === "") {
                $('.indicator-box-small_vitals_grey').text('');
                $('.indicator-box-small_vitals_grey').hide();
            }
        }
    );
}

function getCPGoalmedicationsAll(PatientId) {
    $('.indicator-box-big_medications_all').show();
    $('.indicator-box-big_medications_all').text('');
    intTotalmedications = "";
    var intMedicationsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {

        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                intMedicationsCount = intMedicationsCount + 1;
                intTotalmedications = "ALL " + intMedicationsCount + "";

               // intTotalmedications = "ALL " + results.length + "";

                $('.indicator-box-big_medications_all').text(intTotalmedications);


                strTargetVal = "";
                strLastTargetVal = "";
                strLastGoalDt = "";
                strNextDueDt = "";
                strGoalId = tri_cccareplangoalId;
                vtxtColor = "";

                switch (tri_typeofgoalcode) {
                    case 100000000:

                        strTargetVal = results[i].tri_qualitativetarget;
                        strLastTargetVal = tri_lastresult;

                        break;

                    case 100000001:

                        var vMtrcOprtr1txt = "";
                        vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                        if (tri_range == true) {
                            var vMtrcOprtr2txt = "";
                            vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                           vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        else {
                            // alert(vMtrcOprtr1txt);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                        }

                        if (tri_LastTargetValue !== null) {
                            strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        break;

                    case null:
                        strTargetVal = results[i].tri_qualitativetarget;
                        break;
                }


                if (tri_LastGoalDate !== null) {
                    strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                }

                if (tri_NextDueDate !== null) {
                    strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                }

                switch (tri_CarePlanGoalState) {
                    case 167410000:
                        vtxtColor = "#ff7d09";//orange

                        break;
                    case 167410001:
                        vtxtColor = "#99cc00";//green

                        break;
                    case 167410002:
                        vtxtColor = "#dd3b31";//red

                        break;
                    case 167410003:
                        vtxtColor = "#ff7d09";//orange
                        break;

                }
                getVitalNameAndAppendTag("maintable_medications_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
            }
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        if (intTotalmedications === null || intTotalmedications === undefined || intTotalmedications === "") {
            $('.indicator-box-big_medications_all').text("ALL " + intMedicationsCount);
            //$('.indicator-box-big_medications_all').hide();
        }
    }
);
}

function getCPGoalmedicationsNotMet(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_medications_red').show();
    $('.indicator-box-small_medications_red').text('');
    intTotalmedicationsNotMet = "";
    var intMedicationsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
     "tri_cccareplangoal",
     "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000002 and  tri_CarePlanGoalState/Value eq 167410002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     function (results) {

         for (var i = 0; i < results.length; i++) {
             var vVitalName = "";
             var tri_activitydescription = results[i].tri_activitydescription;
             var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
             var tri_activitydueon = results[i].tri_activitydueon;
             var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
             var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
             var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
             var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
             var tri_GoalSelected = results[i].tri_GoalSelected;
             var tri_LastGoalDate = results[i].tri_LastGoalDate;
             var tri_LastResultDate = results[i].tri_LastResultDate;
             var tri_LastTargetValue = results[i].tri_LastTargetValue;
             var tri_lastresult = results[i].tri_lastresult;
             var tri_Metric = results[i].tri_Metric;
             var tri_MetricOperator = results[i].tri_MetricOperator.Value;
             var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
             var tri_name = results[i].tri_name;
             var tri_NextDueDate = results[i].tri_NextDueDate;
             var tri_qualitativeaction = results[i].tri_qualitativeaction;
             var tri_qualitativetarget = results[i].tri_qualitativetarget;
             var tri_range = results[i].tri_range;
             var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
             var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
             var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
             var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
             var tri_cccareplangoalId = results[i].tri_cccareplangoalId;


             if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                 intMedicationsCount = intMedicationsCount + 1;
                 intTotalmedicationsNotMet = " " + intMedicationsCount + "";

                 // intTotalmedicationsNotMet = " " + results.length + " ";

                 $('.indicator-box-small_medications_red').text(intTotalmedicationsNotMet);


                 strTargetVal = "";
                 strLastTargetVal = "";
                 strLastGoalDt = "";
                 strNextDueDt = "";
                 strGoalId = tri_cccareplangoalId;
                 vtxtColor = "";

                 switch (tri_typeofgoalcode) {
                     case 100000000:

                         strTargetVal = results[i].tri_qualitativetarget;
                         strLastTargetVal = tri_lastresult;

                         break;

                     case 100000001:

                         var vMtrcOprtr1txt = "";
                         vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                         if (tri_range == true) {
                             var vMtrcOprtr2txt = "";
                             vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                            vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         else {
                             // alert(vMtrcOprtr1txt);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                         }

                         if (tri_LastTargetValue !== null) {
                             strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         break;

                     case null:
                         strTargetVal = results[i].tri_qualitativetarget;
                         break;
                 }


                 if (tri_LastGoalDate !== null) {
                     strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                 }

                 if (tri_NextDueDate !== null) {
                     strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                 }

                 switch (tri_CarePlanGoalState) {
                     case 167410000:
                         vtxtColor = "#ff7d09";//orange

                         break;
                     case 167410001:
                         vtxtColor = "#99cc00";//green

                         break;
                     case 167410002:
                         vtxtColor = "#dd3b31";//red

                         break;
                     case 167410003:
                         vtxtColor = "#ff7d09";//orange
                         break;

                 }

                 getVitalNameAndAppendTag("maintable_medications_red", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
             }
         }
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
         if (intTotalmedicationsNotMet === null || intTotalmedicationsNotMet === undefined || intTotalmedicationsNotMet === "") {
             $('.indicator-box-small_medications_red').text('');
             $('.indicator-box-small_medications_red').hide();
         }
     }
 );
}

function getCPGoalmedicationsOpen(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_medications_orange').show();
    $('.indicator-box-small_medications_orange').text('');
    intTotalmedicationsOpen = "";
    var intMedicationsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000002 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {

          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

              if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                  intMedicationsCount = intMedicationsCount + 1;
                  intTotalmedicationsOpen = " " + intMedicationsCount + "";

                  // intTotalmedicationsOpen = " " + results.length + " ";

                  $('.indicator-box-small_medications_orange').text(intTotalmedicationsOpen);


                  strTargetVal = "";
                  strLastTargetVal = "";
                  strLastGoalDt = "";
                  strNextDueDt = "";
                  strGoalId = tri_cccareplangoalId;
                  vtxtColor = "";

                  switch (tri_typeofgoalcode) {
                      case 100000000:

                          strTargetVal = results[i].tri_qualitativetarget;
                          strLastTargetVal = tri_lastresult;

                          break;

                      case 100000001:

                          var vMtrcOprtr1txt = "";
                          vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                          if (tri_range == true) {
                              var vMtrcOprtr2txt = "";
                              vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                             vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          else {
                              // alert(vMtrcOprtr1txt);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                          }

                          if (tri_LastTargetValue !== null) {
                              strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          break;

                      case null:
                          strTargetVal = results[i].tri_qualitativetarget;
                          break;
                  }


                  if (tri_LastGoalDate !== null) {
                      strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                  }

                  if (tri_NextDueDate !== null) {
                      strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                  }

                  switch (tri_CarePlanGoalState) {
                      case 167410000:
                          vtxtColor = "#ff7d09";//orange

                          break;
                      case 167410001:
                          vtxtColor = "#99cc00";//green

                          break;
                      case 167410002:
                          vtxtColor = "#dd3b31";//red

                          break;
                      case 167410003:
                          vtxtColor = "#ff7d09";//orange
                          break;

                  }

                  getVitalNameAndAppendTag("maintable_medications_orange", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

              }
          }
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
          if (intTotalmedicationsOpen === null || intTotalmedicationsOpen === undefined || intTotalmedicationsOpen === "") {
              $('.indicator-box-small_medications_orange').text('');
              $('.indicator-box-small_medications_orange').hide();
          }
      }
  );
}

function getCPGoalmedicationsMet(PatientId) {
    $('.indicator-box-small_medications_green').show();
    $('.indicator-box-small_medications_green').text('');
    intTotalmedicationsMet = "";
    var intMedicationsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000002 and  tri_CarePlanGoalState/Value eq 167410001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intMedicationsCount = intMedicationsCount + 1;
                    intTotalmedicationsMet = " " + intMedicationsCount + "";

                    // intTotalmedicationsMet = " " + results.length + " ";

                    $('.indicator-box-small_medications_green').text(intTotalmedicationsMet);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_medications_green", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalmedicationsMet === null || intTotalmedicationsMet === undefined || intTotalmedicationsMet === "") {
                $('.indicator-box-small_medications_green').text('');
                $('.indicator-box-small_medications_green').hide();
            }
        }
    );
}

function getCPGoalmedicationsOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    $('.indicator-box-small_medications_grey').show();
    $('.indicator-box-small_medications_grey').text('');
    intTotalmedicationsOverDue = "";
    var intMedicationsCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000002 and tri_NextDueDate le datetime'" + dateMsg + "'  and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intMedicationsCount = intMedicationsCount + 1;
                    intTotalmedicationsOverDue = " " + intMedicationsCount + "";

                    // intTotalmedicationsOverDue = " " + results.length + " ";

                    $('.indicator-box-small_medications_grey').html('<img class="symptomoverdueimg" src="../tri_imgs/KMcalendar.png" width="14">' + intTotalmedicationsOverDue);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }
                    getVitalNameAndAppendTag("maintable_medications_grey", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalmedicationsOverDue === null || intTotalmedicationsOverDue === undefined || intTotalmedicationsOverDue === "") {
                $('.indicator-box-small_medications_grey').text('');
                $('.indicator-box-small_medications_grey').hide();
            }
        }
    );
}

function getCPGoalactivityAll(PatientId) {
    $('.indicator-box-big_activity_all').show();
    $('.indicator-box-big_activity_all').text('');
    intTotalactivity = "";
    var intActivityCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000003 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {

        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                intActivityCount = intActivityCount + 1;
                intTotalactivity = "ALL " + intActivityCount + "";

                // intTotalactivity = "ALL " + results.length + "";

                $('.indicator-box-big_activity_all').text(intTotalactivity);


                strTargetVal = "";
                strLastTargetVal = "";
                strLastGoalDt = "";
                strNextDueDt = "";
                strGoalId = tri_cccareplangoalId;
                vtxtColor = "";

                switch (tri_typeofgoalcode) {
                    case 100000000:

                        strTargetVal = results[i].tri_qualitativetarget;
                        strLastTargetVal = tri_lastresult;

                        break;

                    case 100000001:

                        var vMtrcOprtr1txt = "";
                        vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                        if (tri_range == true) {
                            var vMtrcOprtr2txt = "";
                            vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                           vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        else {
                            // alert(vMtrcOprtr1txt);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                        }

                        if (tri_LastTargetValue !== null) {
                            strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        break;

                    case null:
                        strTargetVal = results[i].tri_qualitativetarget;
                        break;
                }


                if (tri_LastGoalDate !== null) {
                    strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                }

                if (tri_NextDueDate !== null) {
                    strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                }

                switch (tri_CarePlanGoalState) {
                    case 167410000:
                        vtxtColor = "#ff7d09";//orange

                        break;
                    case 167410001:
                        vtxtColor = "#99cc00";//green

                        break;
                    case 167410002:
                        vtxtColor = "#dd3b31";//red

                        break;
                    case 167410003:
                        vtxtColor = "#ff7d09";//orange
                        break;

                }

                getVitalNameAndAppendTag("maintable_activity_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

            }
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        if (intTotalactivity === null || intTotalactivity === undefined || intTotalactivity === "") {
            $('.indicator-box-big_activity_all').text("ALL " + intActivityCount);
            // $('.indicator-box-big_activity_all').hide();
        }
    }
);
}

function getCPGoalactivityNotMet(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_activity_red').show();
    $('.indicator-box-small_activity_red').text('');
    intTotalactivityNotMet = "";
    var intActivityCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
     "tri_cccareplangoal",
     "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000003 and  tri_CarePlanGoalState/Value eq 167410002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     function (results) {

         for (var i = 0; i < results.length; i++) {
             var vVitalName = "";
             var tri_activitydescription = results[i].tri_activitydescription;
             var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
             var tri_activitydueon = results[i].tri_activitydueon;
             var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
             var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
             var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
             var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
             var tri_GoalSelected = results[i].tri_GoalSelected;
             var tri_LastGoalDate = results[i].tri_LastGoalDate;
             var tri_LastResultDate = results[i].tri_LastResultDate;
             var tri_LastTargetValue = results[i].tri_LastTargetValue;
             var tri_lastresult = results[i].tri_lastresult;
             var tri_Metric = results[i].tri_Metric;
             var tri_MetricOperator = results[i].tri_MetricOperator.Value;
             var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
             var tri_name = results[i].tri_name;
             var tri_NextDueDate = results[i].tri_NextDueDate;
             var tri_qualitativeaction = results[i].tri_qualitativeaction;
             var tri_qualitativetarget = results[i].tri_qualitativetarget;
             var tri_range = results[i].tri_range;
             var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
             var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
             var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
             var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
             var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

             if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                 intActivityCount = intActivityCount + 1;
                 intTotalactivityNotMet = " " + intActivityCount + "";

                 // intTotalactivityNotMet = " " + results.length + " ";

                 $('.indicator-box-small_activity_red').text(intTotalactivityNotMet);


                 strTargetVal = "";
                 strLastTargetVal = "";
                 strLastGoalDt = "";
                 strNextDueDt = "";
                 strGoalId = tri_cccareplangoalId;
                 vtxtColor = "";

                 switch (tri_typeofgoalcode) {
                     case 100000000:

                         strTargetVal = results[i].tri_qualitativetarget;
                         strLastTargetVal = tri_lastresult;

                         break;

                     case 100000001:

                         var vMtrcOprtr1txt = "";
                         vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                         if (tri_range == true) {
                             var vMtrcOprtr2txt = "";
                             vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                            vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         else {
                             // alert(vMtrcOprtr1txt);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                         }

                         if (tri_LastTargetValue !== null) {
                             strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }

                         break;

                     case null:
                         strTargetVal = results[i].tri_qualitativetarget;
                         break;
                 }


                 if (tri_LastGoalDate !== null) {
                     strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                 }

                 if (tri_NextDueDate !== null) {
                     strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                 }

                 switch (tri_CarePlanGoalState) {
                     case 167410000:
                         vtxtColor = "#ff7d09";//orange

                         break;
                     case 167410001:
                         vtxtColor = "#99cc00";//green

                         break;
                     case 167410002:
                         vtxtColor = "#dd3b31";//red

                         break;
                     case 167410003:
                         vtxtColor = "#ff7d09";//orange
                         break;

                 }
                 getVitalNameAndAppendTag("maintable_activity_red", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
             }
         }
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
         if (intTotalactivityNotMet === null || intTotalactivityNotMet === undefined || intTotalactivityNotMet === "") {
             $('.indicator-box-small_activity_red').text('');
             $('.indicator-box-small_activity_red').hide();
         }
     }
 );
}

function getCPGoalactivityOpen(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_activity_orange').show();
    $('.indicator-box-small_activity_orange').text('');
    intTotalactivityOpen = "";
    var intActivityCount = 0;
    
    SDK.JQuery.retrieveMultipleRecords(
      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000003 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {

          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

              if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                  intActivityCount = intActivityCount + 1;
                  intTotalactivityOpen = " " + intActivityCount + "";

                  // intTotalactivityOpen = " " + results.length + " ";

                  $('.indicator-box-small_activity_orange').text(intTotalactivityOpen);


                  strTargetVal = "";
                  strLastTargetVal = "";
                  strLastGoalDt = "";
                  strNextDueDt = "";
                  strGoalId = tri_cccareplangoalId;
                  vtxtColor = "";

                  switch (tri_typeofgoalcode) {
                      case 100000000:

                          strTargetVal = results[i].tri_qualitativetarget;
                          strLastTargetVal = tri_lastresult;

                          break;

                      case 100000001:

                          var vMtrcOprtr1txt = "";
                          vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                          if (tri_range == true) {
                              var vMtrcOprtr2txt = "";
                              vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                             vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          else {
                              // alert(vMtrcOprtr1txt);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                          }

                          if (tri_LastTargetValue !== null) {
                              strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          break;

                      case null:
                          strTargetVal = results[i].tri_qualitativetarget;
                          break;
                  }


                  if (tri_LastGoalDate !== null) {
                      strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                  }

                  if (tri_NextDueDate !== null) {
                      strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                  }

                  switch (tri_CarePlanGoalState) {
                      case 167410000:
                          vtxtColor = "#ff7d09";//orange

                          break;
                      case 167410001:
                          vtxtColor = "#99cc00";//green

                          break;
                      case 167410002:
                          vtxtColor = "#dd3b31";//red

                          break;
                      case 167410003:
                          vtxtColor = "#ff7d09";//orange
                          break;

                  }
                  getVitalNameAndAppendTag("maintable_activity_orange", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
              }
          }
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
          if (intTotalactivityOpen === null || intTotalactivityOpen === undefined || intTotalactivityOpen === "") {
              $('.indicator-box-small_activity_orange').text('');
              $('.indicator-box-small_activity_orange').hide();
          }
      }
  );
}

function getCPGoalactivityMet(PatientId) {
    $('.indicator-box-small_activity_green').show();
    $('.indicator-box-small_activity_green').text('');
    intTotalactivityMet = "";
    var intActivityCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000003 and  tri_CarePlanGoalState/Value eq 167410001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intActivityCount = intActivityCount + 1;
                    intTotalactivityMet = " " + intActivityCount + "";

                    // intTotalactivityMet = " " + results.length + " ";

                    $('.indicator-box-small_activity_green').text(intTotalactivityMet);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }
                    getVitalNameAndAppendTag("maintable_activity_green", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalactivityMet === null || intTotalactivityMet === undefined || intTotalactivityMet === "") {
                $('.indicator-box-small_activity_green').text('');
                $('.indicator-box-small_activity_green').hide();
            }
        }
    );
}

function getCPGoalactivityOverDue(PatientId) {
    $('.indicator-box-small_activity_grey').show();
    $('.indicator-box-small_activity_grey').text('');
    intTotalactivityOverDue = "";
    var intActivityCount = 0;
    
    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000003 and tri_NextDueDate le datetime'" + dateMsg + "'  and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intActivityCount = intActivityCount + 1;
                    intTotalactivityOverDue = " " + intActivityCount + "";

                    // intTotalactivityOverDue = " " + results.length + " ";

                    $('.indicator-box-small_activity_grey').html('<img class="symptomoverdueimg" src="../tri_imgs/KMcalendar.png" width="14">' + intTotalactivityOverDue);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_activity_grey", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalactivityOverDue === null || intTotalactivityOverDue === undefined || intTotalactivityOverDue === "") {
                $('.indicator-box-small_activity_grey').text('');
                $('.indicator-box-small_activity_grey').hide();
            }
        }
    );
}

function getCPGoalnutritionAll(PatientId) {
    $('.indicator-box-big_nutrition_all').show();
    $('.indicator-box-big_nutrition_all').text('');
    intTotalnutrition = "";
    var intNutritionCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000004 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {

        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                intNutritionCount = intNutritionCount + 1;
                intTotalnutrition = "ALL " + intNutritionCount + "";

                // intTotalnutrition = "ALL " + results.length + "";

                $('.indicator-box-big_nutrition_all').text(intTotalnutrition);


                strTargetVal = "";
                strLastTargetVal = "";
                strLastGoalDt = "";
                strNextDueDt = "";
                strGoalId = tri_cccareplangoalId;
                vtxtColor = "";

                switch (tri_typeofgoalcode) {
                    case 100000000:

                        strTargetVal = results[i].tri_qualitativetarget;
                        strLastTargetVal = tri_lastresult;

                        break;

                    case 100000001:

                        var vMtrcOprtr1txt = "";
                        vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                        if (tri_range == true) {
                            var vMtrcOprtr2txt = "";
                            vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                           vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        else {
                            // alert(vMtrcOprtr1txt);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                        }

                        if (tri_LastTargetValue !== null) {
                            strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        break;

                    case null:
                        strTargetVal = results[i].tri_qualitativetarget;
                        break;
                }


                if (tri_LastGoalDate !== null) {
                    strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                }

                if (tri_NextDueDate !== null) {
                    strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                }

                switch (tri_CarePlanGoalState) {
                    case 167410000:
                        vtxtColor = "#ff7d09";//orange

                        break;
                    case 167410001:
                        vtxtColor = "#99cc00";//green

                        break;
                    case 167410002:
                        vtxtColor = "#dd3b31";//red

                        break;
                    case 167410003:
                        vtxtColor = "#ff7d09";//orange
                        break;

                }

                getVitalNameAndAppendTag("maintable_nutrition_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
            }

        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        if (intTotalnutrition === null || intTotalnutrition === undefined || intTotalnutrition === "") {
            $('.indicator-box-big_nutrition_all').text("ALL " + intNutritionCount);
            // $('.indicator-box-big_nutrition_all').hide();
        }
    }
);
}

function getCPGoalnutritionNotMet(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_nutrition_red').show();
    $('.indicator-box-small_nutrition_red').text('');
    intTotalnutritionNotMet = "";
    var intNutritionCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
     "tri_cccareplangoal",
     "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000004 and  tri_CarePlanGoalState/Value eq 167410002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     function (results) {

         for (var i = 0; i < results.length; i++) {
             var vVitalName = "";
             var tri_activitydescription = results[i].tri_activitydescription;
             var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
             var tri_activitydueon = results[i].tri_activitydueon;
             var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
             var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
             var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
             var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
             var tri_GoalSelected = results[i].tri_GoalSelected;
             var tri_LastGoalDate = results[i].tri_LastGoalDate;
             var tri_LastResultDate = results[i].tri_LastResultDate;
             var tri_LastTargetValue = results[i].tri_LastTargetValue;
             var tri_lastresult = results[i].tri_lastresult;
             var tri_Metric = results[i].tri_Metric;
             var tri_MetricOperator = results[i].tri_MetricOperator.Value;
             var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
             var tri_name = results[i].tri_name;
             var tri_NextDueDate = results[i].tri_NextDueDate;
             var tri_qualitativeaction = results[i].tri_qualitativeaction;
             var tri_qualitativetarget = results[i].tri_qualitativetarget;
             var tri_range = results[i].tri_range;
             var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
             var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
             var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
             var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
             var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

             if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                 intNutritionCount = intNutritionCount + 1;
                 intTotalnutritionNotMet = " " + intNutritionCount + "";

                 //intTotalnutritionNotMet = " " + results.length + " ";

                 $('.indicator-box-small_nutrition_red').text(intTotalnutritionNotMet);


                 strTargetVal = "";
                 strLastTargetVal = "";
                 strLastGoalDt = "";
                 strNextDueDt = "";
                 strGoalId = tri_cccareplangoalId;
                 vtxtColor = "";

                 switch (tri_typeofgoalcode) {
                     case 100000000:

                         strTargetVal = results[i].tri_qualitativetarget;
                         strLastTargetVal = tri_lastresult;

                         break;

                     case 100000001:

                         var vMtrcOprtr1txt = "";
                         vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                         if (tri_range == true) {
                             var vMtrcOprtr2txt = "";
                             vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                            vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         else {
                             // alert(vMtrcOprtr1txt);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                         }

                         if (tri_LastTargetValue !== null) {
                             strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         break;

                     case null:
                         strTargetVal = results[i].tri_qualitativetarget;
                         break;
                 }


                 if (tri_LastGoalDate !== null) {
                     strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                 }

                 if (tri_NextDueDate !== null) {
                     strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                 }

                 switch (tri_CarePlanGoalState) {
                     case 167410000:
                         vtxtColor = "#ff7d09";//orange

                         break;
                     case 167410001:
                         vtxtColor = "#99cc00";//green

                         break;
                     case 167410002:
                         vtxtColor = "#dd3b31";//red

                         break;
                     case 167410003:
                         vtxtColor = "#ff7d09";//orange
                         break;

                 }

                 getVitalNameAndAppendTag("maintable_nutrition_red", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
             }

         }
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
         if (intTotalnutritionNotMet === null || intTotalnutritionNotMet === undefined || intTotalnutritionNotMet === "") {
             $('.indicator-box-small_nutrition_red').text('');
             $('.indicator-box-small_nutrition_red').hide();
         }
     }
 );
}

function getCPGoalnutritionOpen(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_nutrition_orange').text('');
    $('.indicator-box-small_nutrition_orange').show();
    intTotalnutritionOpen = "";
    var intNutritionCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000004 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {

          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

              if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                  intNutritionCount = intNutritionCount + 1;
                  intTotalnutritionOpen = " " + intNutritionCount + "";

                  // intTotalnutritionOpen = " " + results.length + " ";

                  $('.indicator-box-small_nutrition_orange').text(intTotalnutritionOpen);


                  strTargetVal = "";
                  strLastTargetVal = "";
                  strLastGoalDt = "";
                  strNextDueDt = "";
                  strGoalId = tri_cccareplangoalId;
                  vtxtColor = "";

                  switch (tri_typeofgoalcode) {
                      case 100000000:

                          strTargetVal = results[i].tri_qualitativetarget;
                          strLastTargetVal = tri_lastresult;

                          break;

                      case 100000001:

                          var vMtrcOprtr1txt = "";
                          vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                          if (tri_range == true) {
                              var vMtrcOprtr2txt = "";
                              vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                             vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          else {
                              // alert(vMtrcOprtr1txt);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                          }

                          if (tri_LastTargetValue !== null) {
                              strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          break;

                      case null:
                          strTargetVal = results[i].tri_qualitativetarget;
                          break;
                  }


                  if (tri_LastGoalDate !== null) {
                      strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                  }

                  if (tri_NextDueDate !== null) {
                      strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                  }

                  switch (tri_CarePlanGoalState) {
                      case 167410000:
                          vtxtColor = "#ff7d09";//orange

                          break;
                      case 167410001:
                          vtxtColor = "#99cc00";//green

                          break;
                      case 167410002:
                          vtxtColor = "#dd3b31";//red

                          break;
                      case 167410003:
                          vtxtColor = "#ff7d09";//orange
                          break;

                  }

                  getVitalNameAndAppendTag("maintable_nutrition_orange", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

              }
          }
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
          if (intTotalnutritionOpen === null || intTotalnutritionOpen === undefined || intTotalnutritionOpen === "") {
              $('.indicator-box-small_nutrition_orange').text('');
              $('.indicator-box-small_nutrition_orange').hide();
          }

      }
  );
}

function getCPGoalnutritionMet(PatientId) {
    $('.indicator-box-small_nutrition_green').show();
    $('.indicator-box-small_nutrition_green').text('');
    intTotalnutritionMet = "";
    var intNutritionCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000004 and  tri_CarePlanGoalState/Value eq 167410001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intNutritionCount = intNutritionCount + 1;
                    intTotalnutritionMet = " " + intNutritionCount + "";

                    // intTotalnutritionMet = " " + results.length + " ";

                    $('.indicator-box-small_nutrition_green').text(intTotalnutritionMet);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_nutrition_green", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalnutritionMet === null || intTotalnutritionMet === undefined || intTotalnutritionMet === "") {
                $('.indicator-box-small_nutrition_green').text('');
                $('.indicator-box-small_nutrition_green').hide();
            }

        }
    );
}

function getCPGoalnutritionOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);

    $('.indicator-box-small_nutrition_grey').show();
    $('.indicator-box-small_nutrition_grey').text('');
    intTotalnutritionOverDue = "";
    var intNutritionCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000004 and tri_NextDueDate le datetime'" + dateMsg + "'  and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;


                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intNutritionCount = intNutritionCount + 1;
                    intTotalnutritionOverDue = " " + intNutritionCount + "";

                    // intTotalnutritionOverDue = " " + results.length + " ";

                    $('.indicator-box-small_nutrition_grey').html('<img class="symptomoverdueimg" src="../tri_imgs/KMcalendar.png" width="14">' + intTotalnutritionOverDue);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_nutrition_grey", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalnutritionOverDue === null || intTotalnutritionOverDue === undefined || intTotalnutritionOverDue === "") {
                $('.indicator-box-small_nutrition_grey').text('');
                $('.indicator-box-small_nutrition_grey').hide();
            }

        }
    );
}

function getCPGoalpsychosocialAll(PatientId) {
    $('.indicator-box-big_psychosocial_all').show();
    $('.indicator-box-big_psychosocial_all').text('');
    intTotalpsychosocial = "";
    var intPsychosocialCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000005 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {

        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                intPsychosocialCount = intPsychosocialCount + 1;
                intTotalpsychosocial = "ALL " + intPsychosocialCount + "";

                // intTotalpsychosocial = "ALL " + results.length + "";

                $('.indicator-box-big_psychosocial_all').text(intTotalpsychosocial);


                strTargetVal = "";
                strLastTargetVal = "";
                strLastGoalDt = "";
                strNextDueDt = "";
                strGoalId = tri_cccareplangoalId;
                vtxtColor = "";

                switch (tri_typeofgoalcode) {
                    case 100000000:

                        strTargetVal = results[i].tri_qualitativetarget;
                        strLastTargetVal = tri_lastresult;

                        break;

                    case 100000001:

                        var vMtrcOprtr1txt = "";
                        vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                        if (tri_range == true) {
                            var vMtrcOprtr2txt = "";
                            vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                           vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        else {
                            // alert(vMtrcOprtr1txt);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                        }

                        if (tri_LastTargetValue !== null) {
                            strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        break;

                    case null:
                        strTargetVal = results[i].tri_qualitativetarget;
                        break;
                }


                if (tri_LastGoalDate !== null) {
                    strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                }

                if (tri_NextDueDate !== null) {
                    strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                }

                switch (tri_CarePlanGoalState) {
                    case 167410000:
                        vtxtColor = "#ff7d09";//orange

                        break;
                    case 167410001:
                        vtxtColor = "#99cc00";//green

                        break;
                    case 167410002:
                        vtxtColor = "#dd3b31";//red

                        break;
                    case 167410003:
                        vtxtColor = "#ff7d09";//orange
                        break;

                }

                getVitalNameAndAppendTag("maintable_psychosocial_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
            }

        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        if (intTotalpsychosocial === null || intTotalpsychosocial === undefined || intTotalpsychosocial === "") {
            $('.indicator-box-big_psychosocial_all').text("ALL " + intPsychosocialCount);
            // $('.indicator-box-big_psychosocial_all').hide();
        }
    }
);
}

function getCPGoalpsychosocialNotMet(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_psychosocial_red').show();
    $('.indicator-box-small_psychosocial_red').text();
    intTotalpsychosocialNotMet = "";
    var intPsychosocialCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
     "tri_cccareplangoal",
     "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000005 and  tri_CarePlanGoalState/Value eq 167410002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     function (results) {

         for (var i = 0; i < results.length; i++) {
             var vVitalName = "";
             var tri_activitydescription = results[i].tri_activitydescription;
             var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
             var tri_activitydueon = results[i].tri_activitydueon;
             var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
             var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
             var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
             var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
             var tri_GoalSelected = results[i].tri_GoalSelected;
             var tri_LastGoalDate = results[i].tri_LastGoalDate;
             var tri_LastResultDate = results[i].tri_LastResultDate;
             var tri_LastTargetValue = results[i].tri_LastTargetValue;
             var tri_lastresult = results[i].tri_lastresult;
             var tri_Metric = results[i].tri_Metric;
             var tri_MetricOperator = results[i].tri_MetricOperator.Value;
             var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
             var tri_name = results[i].tri_name;
             var tri_NextDueDate = results[i].tri_NextDueDate;
             var tri_qualitativeaction = results[i].tri_qualitativeaction;
             var tri_qualitativetarget = results[i].tri_qualitativetarget;
             var tri_range = results[i].tri_range;
             var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
             var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
             var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
             var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
             var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

             if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                 intPsychosocialCount = intPsychosocialCount + 1;
                 intTotalpsychosocialNotMet = " " + intPsychosocialCount + "";

                 //  intTotalpsychosocialNotMet = " " + results.length + " ";

                 $('.indicator-box-small_psychosocial_red').text(intTotalpsychosocialNotMet);


                 strTargetVal = "";
                 strLastTargetVal = "";
                 strLastGoalDt = "";
                 strNextDueDt = "";
                 strGoalId = tri_cccareplangoalId;
                 vtxtColor = "";

                 switch (tri_typeofgoalcode) {
                     case 100000000:

                         strTargetVal = results[i].tri_qualitativetarget
                         strLastTargetVal = tri_lastresult;

                         break;

                     case 100000001:

                         var vMtrcOprtr1txt = "";
                         vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                         if (tri_range == true) {
                             var vMtrcOprtr2txt = "";
                             vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                            vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         else {
                             // alert(vMtrcOprtr1txt);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                         }

                         if (tri_LastTargetValue !== null) {
                             strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         break;

                     case null:
                         strTargetVal = results[i].tri_qualitativetarget;
                         break;
                 }


                 if (tri_LastGoalDate !== null) {
                     strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                 }

                 if (tri_NextDueDate !== null) {
                     strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                 }

                 switch (tri_CarePlanGoalState) {
                     case 167410000:
                         vtxtColor = "#ff7d09";//orange

                         break;
                     case 167410001:
                         vtxtColor = "#99cc00";//green

                         break;
                     case 167410002:
                         vtxtColor = "#dd3b31";//red

                         break;
                     case 167410003:
                         vtxtColor = "#ff7d09";//orange
                         break;

                 }

                 getVitalNameAndAppendTag("maintable_psychosocial_red", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
             }

         }
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
         if (intTotalpsychosocialNotMet === null || intTotalpsychosocialNotMet === undefined || intTotalpsychosocialNotMet === "") {
             $('.indicator-box-small_psychosocial_red').text();

             $('.indicator-box-small_psychosocial_red').hide();
         }
     }
 );
}

function getCPGoalpsychosocialOpen(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_psychosocial_orange').show();
    $('.indicator-box-small_psychosocial_orange').text('');
    intTotalpsychosocialOpen = "";
    var intPsychosocialCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000005 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {

          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;


              if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                  intPsychosocialCount = intPsychosocialCount + 1;
                  intTotalpsychosocialOpen = " " + intPsychosocialCount + "";

                  // intTotalpsychosocialOpen = " " + results.length + " ";

                  $('.indicator-box-small_psychosocial_orange').text(intTotalpsychosocialOpen);


                  strTargetVal = "";
                  strLastTargetVal = "";
                  strLastGoalDt = "";
                  strNextDueDt = "";
                  strGoalId = tri_cccareplangoalId;
                  vtxtColor = "";

                  switch (tri_typeofgoalcode) {
                      case 100000000:

                          strTargetVal = results[i].tri_qualitativetarget;
                          strLastTargetVal = tri_lastresult;

                          break;

                      case 100000001:

                          var vMtrcOprtr1txt = "";
                          vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                          if (tri_range == true) {
                              var vMtrcOprtr2txt = "";
                              vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                             vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          else {
                              // alert(vMtrcOprtr1txt);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                          }

                          if (tri_LastTargetValue !== null) {
                              strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          break;

                      case null:
                          strTargetVal = results[i].tri_qualitativetarget;
                          break;
                  }


                  if (tri_LastGoalDate !== null) {
                      strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                  }

                  if (tri_NextDueDate !== null) {
                      strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                  }

                  switch (tri_CarePlanGoalState) {
                      case 167410000:
                          vtxtColor = "#ff7d09";//orange

                          break;
                      case 167410001:
                          vtxtColor = "#99cc00";//green

                          break;
                      case 167410002:
                          vtxtColor = "#dd3b31";//red

                          break;
                      case 167410003:
                          vtxtColor = "#ff7d09";//orange
                          break;

                  }

                  getVitalNameAndAppendTag("maintable_psychosocial_orange", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

              }
          }
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
          if (intTotalpsychosocialOpen === null || intTotalpsychosocialOpen === undefined || intTotalpsychosocialOpen === "") {
              $('.indicator-box-small_psychosocial_orange').text('');

              $('.indicator-box-small_psychosocial_orange').hide();
          }
      }
  );
}

function getCPGoalpsychosocialMet(PatientId) {
    $('.indicator-box-small_psychosocial_green').show();
    $('.indicator-box-small_psychosocial_green').text('');
    intTotalpsychosocialMet = "";
    var intPsychosocialCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000005 and  tri_CarePlanGoalState/Value eq 167410001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intPsychosocialCount = intPsychosocialCount + 1;
                    intTotalpsychosocialMet = " " + intPsychosocialCount + "";

                    // intTotalpsychosocialMet = " " + results.length + " ";

                    $('.indicator-box-small_psychosocial_green').text(intTotalpsychosocialMet);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }
                    getVitalNameAndAppendTag("maintable_psychosocial_green", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalpsychosocialMet === null || intTotalpsychosocialMet === undefined || intTotalpsychosocialMet === "") {
                $('.indicator-box-small_psychosocial_green').text('');

                $('.indicator-box-small_psychosocial_green').hide();
            }
        }
    );
}

function getCPGoalpsychosocialOverDue(PatientId) {
    $('.indicator-box-small_psychosocial_grey').show();
    $('.indicator-box-small_psychosocial_grey').text('');
    intTotalpsychosocialOverDue = "";
    var intPsychosocialCount = 0;

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000005 and tri_NextDueDate le datetime'" + dateMsg + "'  and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intPsychosocialCount = intPsychosocialCount + 1;
                    intTotalpsychosocialOverDue = " " + intPsychosocialCount + "";

                    // intTotalpsychosocialOverDue = " " + results.length + " ";

                    $('.indicator-box-small_psychosocial_grey').html('<img class="symptomoverdueimg" src="../tri_imgs/KMcalendar.png" width="14">' + intTotalpsychosocialOverDue);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_psychosocial_grey", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalpsychosocialOverDue === null || intTotalpsychosocialOverDue === undefined || intTotalpsychosocialOverDue === "") {
                $('.indicator-box-small_psychosocial_grey').text('');
                $('.indicator-box-small_psychosocial_grey').hide();
            }
        }
    );
}

function getCPGoalwrapupAll(PatientId) {
    $('.indicator-box-big_wrapup_all').show();
    $('.indicator-box-big_wrapup_all').text('');
    intTotalwrapup = "";
    var intWrapCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000006 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
    function (results) {

        for (var i = 0; i < results.length; i++) {
            var vVitalName = "";
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

            
            if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                intWrapCount = intWrapCount + 1;
                intTotalwrapup = "ALL " + intWrapCount + "";

                // intTotalwrapup = "ALL " + results.length + "";

                $('.indicator-box-big_wrapup_all').text(intTotalwrapup);


                strTargetVal = "";
                strLastTargetVal = "";
                strLastGoalDt = "";
                strNextDueDt = "";
                strGoalId = tri_cccareplangoalId;
                vtxtColor = "";

                switch (tri_typeofgoalcode) {
                    case 100000000:

                        strTargetVal = results[i].tri_qualitativetarget;
                        strLastTargetVal = tri_lastresult;

                        break;

                    case 100000001:

                        var vMtrcOprtr1txt = "";
                        vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                        if (tri_range == true) {
                            var vMtrcOprtr2txt = "";
                            vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                           vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        else {
                            // alert(vMtrcOprtr1txt);
                            strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                        }

                        if (tri_LastTargetValue !== null) {
                            strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                        }
                        break;

                    case null:
                        strTargetVal = results[i].tri_qualitativetarget;
                        break;
                }


                if (tri_LastGoalDate !== null) {
                    strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                }

                if (tri_NextDueDate !== null) {
                    strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                }

                switch (tri_CarePlanGoalState) {
                    case 167410000:
                        vtxtColor = "#ff7d09";//orange

                        break;
                    case 167410001:
                        vtxtColor = "#99cc00";//green

                        break;
                    case 167410002:
                        vtxtColor = "#dd3b31";//red

                        break;
                    case 167410003:
                        vtxtColor = "#ff7d09";//orange
                        break;

                }

                getVitalNameAndAppendTag("maintable_wrapup_all", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

            }
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        if (intTotalwrapup === null || intTotalwrapup === undefined || intTotalwrapup === "") {
            $('.indicator-box-big_wrapup_all').text("ALL " + intWrapCount);
           // $('.indicator-box-big_wrapup_all').hide();
        }
    }
);


}

function getCPGoalwrapupNotMet(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_wrapup_red').show();
    $('.indicator-box-small_wrapup_red').text('');
    intTotalwrapupNotMet = "";
    var intWrapCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
     "tri_cccareplangoal",
     "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000006 and  tri_CarePlanGoalState/Value eq 167410002 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     function (results) {

         for (var i = 0; i < results.length; i++) {
             var vVitalName = "";
             var tri_activitydescription = results[i].tri_activitydescription;
             var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
             var tri_activitydueon = results[i].tri_activitydueon;
             var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
             var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
             var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
             var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
             var tri_GoalSelected = results[i].tri_GoalSelected;
             var tri_LastGoalDate = results[i].tri_LastGoalDate;
             var tri_LastResultDate = results[i].tri_LastResultDate;
             var tri_LastTargetValue = results[i].tri_LastTargetValue;
             var tri_lastresult = results[i].tri_lastresult;
             var tri_Metric = results[i].tri_Metric;
             var tri_MetricOperator = results[i].tri_MetricOperator.Value;
             var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
             var tri_name = results[i].tri_name;
             var tri_NextDueDate = results[i].tri_NextDueDate;
             var tri_qualitativeaction = results[i].tri_qualitativeaction;
             var tri_qualitativetarget = results[i].tri_qualitativetarget;
             var tri_range = results[i].tri_range;
             var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
             var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
             var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
             var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
             var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

             if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                 intWrapCount = intWrapCount + 1;
                 intTotalwrapupNotMet = " " + intWrapCount + "";

                 // intTotalwrapupNotMet = " " + results.length + " ";

                 $('.indicator-box-small_wrapup_red').text(intTotalwrapupNotMet);


                 strTargetVal = "";
                 strLastTargetVal = "";
                 strLastGoalDt = "";
                 strNextDueDt = "";
                 strGoalId = tri_cccareplangoalId;
                 vtxtColor = "";

                 switch (tri_typeofgoalcode) {
                     case 100000000:

                         strTargetVal = results[i].tri_qualitativetarget;
                         strLastTargetVal = tri_lastresult;

                         break;

                     case 100000001:

                         var vMtrcOprtr1txt = "";
                         vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                         if (tri_range == true) {
                             var vMtrcOprtr2txt = "";
                             vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                            vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         else {
                             // alert(vMtrcOprtr1txt);
                             strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                         }

                         if (tri_LastTargetValue !== null) {
                             strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                         }
                         break;

                     case null:
                         strTargetVal = results[i].tri_qualitativetarget;
                         break;
                 }


                 if (tri_LastGoalDate !== null) {
                     strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                 }

                 if (tri_NextDueDate !== null) {
                     strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                 }

                 switch (tri_CarePlanGoalState) {
                     case 167410000:
                         vtxtColor = "#ff7d09";//orange

                         break;
                     case 167410001:
                         vtxtColor = "#99cc00";//green

                         break;
                     case 167410002:
                         vtxtColor = "#dd3b31";//red

                         break;
                     case 167410003:
                         vtxtColor = "#ff7d09";//orange
                         break;

                 }

                 getVitalNameAndAppendTag("maintable_wrapup_red", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);
             }

         }
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
         if (intTotalwrapupNotMet === null || intTotalwrapupNotMet === undefined || intTotalwrapupNotMet === "") {
             $('.indicator-box-small_wrapup_red').text('');
             $('.indicator-box-small_wrapup_red').hide();
         }
     }
 );
}

function getCPGoalwrapupOpen(PatientId) {
    //alert(PatientId);
    $('.indicator-box-small_wrapup_orange').show();
    $('.indicator-box-small_wrapup_orange').text('');
    intTotalwrapupOpen = "";
    var intWrapCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000006 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {

          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

              if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                  intWrapCount = intWrapCount + 1;
                  intTotalwrapupOpen = " " + intWrapCount + "";

                  // intTotalwrapupOpen = " " + results.length + " ";

                  $('.indicator-box-small_wrapup_orange').text(intTotalwrapupOpen);


                  strTargetVal = "";
                  strLastTargetVal = "";
                  strLastGoalDt = "";
                  strNextDueDt = "";
                  strGoalId = tri_cccareplangoalId;
                  vtxtColor = "";

                  switch (tri_typeofgoalcode) {
                      case 100000000:

                          strTargetVal = results[i].tri_qualitativetarget;
                          strLastTargetVal = tri_lastresult;

                          break;

                      case 100000001:

                          var vMtrcOprtr1txt = "";
                          vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                          if (tri_range == true) {
                              var vMtrcOprtr2txt = "";
                              vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                             vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          else {
                              // alert(vMtrcOprtr1txt);
                              strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                          }

                          if (tri_LastTargetValue !== null) {
                              strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                          }
                          break;

                      case null:
                          strTargetVal = results[i].tri_qualitativetarget;
                          break;
                  }


                  if (tri_LastGoalDate !== null) {
                      strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                  }

                  if (tri_NextDueDate !== null) {
                      strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                  }

                  switch (tri_CarePlanGoalState) {
                      case 167410000:
                          vtxtColor = "#ff7d09";//orange

                          break;
                      case 167410001:
                          vtxtColor = "#99cc00";//green

                          break;
                      case 167410002:
                          vtxtColor = "#dd3b31";//red

                          break;
                      case 167410003:
                          vtxtColor = "#ff7d09";//orange
                          break;

                  }

                  getVitalNameAndAppendTag("maintable_wrapup_orange", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

              }
          }
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
          if (intTotalwrapupOpen === null || intTotalwrapupOpen === undefined || intTotalwrapupOpen === "") {
              $('.indicator-box-small_wrapup_orange').text('');
              $('.indicator-box-small_wrapup_orange').hide();
          }
      }
  );
}

function getCPGoalwrapupMet(PatientId) {
    $('.indicator-box-small_wrapup_green').show();
    $('.indicator-box-small_wrapup_green').text('');
    intTotalwrapupMet = "";
    var intWrapCount = 0;

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000006 and  tri_CarePlanGoalState/Value eq 167410001 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intWrapCount = intWrapCount + 1;
                    intTotalwrapupMet = " " + intWrapCount + "";

                    // intTotalwrapupMet = " " + results.length + " ";

                    $('.indicator-box-small_wrapup_green').text(intTotalwrapupMet);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_wrapup_green", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalwrapupMet === null || intTotalwrapupMet === undefined || intTotalwrapupMet === "") {
                $('.indicator-box-small_wrapup_green').text('');
                $('.indicator-box-small_wrapup_green').hide();
            }
        }
    );
}

function getCPGoalwrapupOverDue(PatientId) {
    $('.indicator-box-small_wrapup_grey').show();
    $('.indicator-box-small_wrapup_grey').text('');
    intTotalwrapupOverDue = "";
    var intWrapCount = 0;

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);

    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_cccareplangoalId,tri_CarePlanGoalState,tri_activitydescription,tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000006 and tri_NextDueDate le datetime'" + dateMsg + "'  and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
        function (results) {

            for (var i = 0; i < results.length; i++) {
                var vVitalName = "";
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_lastresult = results[i].tri_lastresult;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator.Value;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                if (filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                    intWrapCount = intWrapCount + 1;
                    intTotalwrapupOverDue = " " + intWrapCount + "";

                    // intTotalwrapupOverDue = " " + results.length + " ";

                    $('.indicator-box-small_wrapup_grey').html('<img class="symptomoverdueimg" src="../tri_imgs/KMcalendar.png" width="14">' + intTotalwrapupOverDue);


                    strTargetVal = "";
                    strLastTargetVal = "";
                    strLastGoalDt = "";
                    strNextDueDt = "";
                    strGoalId = tri_cccareplangoalId;
                    vtxtColor = "";

                    switch (tri_typeofgoalcode) {
                        case 100000000:

                            strTargetVal = results[i].tri_qualitativetarget;
                            strLastTargetVal = tri_lastresult;

                            break;

                        case 100000001:

                            var vMtrcOprtr1txt = "";
                            vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                            if (tri_range == true) {
                                var vMtrcOprtr2txt = "";
                                vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px"> and ' +
                                               vMtrcOprtr2txt + ' <input type="text" class="txtfieldquantitative" value="' + ((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : tri_targetvaluetwo) + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            else {
                                // alert(vMtrcOprtr1txt);
                                strTargetVal = vMtrcOprtr1txt + ' <input type="text" class="txtfieldquantitative" value="' + tri_Metric + '" style="background-color: #FAFAFA;border:none; width:40px">'
                            }

                            if (tri_LastTargetValue !== null) {
                                strLastTargetVal = '<input type="text" class="txtfieldquantitative" value="' + tri_LastTargetValue + '" style="background-color: #FAFAFA;border:none; width:40px">';
                            }
                            break;

                        case null:
                            strTargetVal = results[i].tri_qualitativetarget;
                            break;
                    }


                    if (tri_LastGoalDate !== null) {
                        strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
                    }

                    if (tri_NextDueDate !== null) {
                        strNextDueDt = SetNextDuedate(tri_NextDueDate,tri_CarePlanGoalState,tri_activityrecurrence,tri_activityrecurrenceabnormal);
                    }

                    switch (tri_CarePlanGoalState) {
                        case 167410000:
                            vtxtColor = "#ff7d09";//orange

                            break;
                        case 167410001:
                            vtxtColor = "#99cc00";//green

                            break;
                        case 167410002:
                            vtxtColor = "#dd3b31";//red

                            break;
                        case 167410003:
                            vtxtColor = "#ff7d09";//orange
                            break;

                    }

                    getVitalNameAndAppendTag("maintable_wrapup_grey", tri_vitalsvaluetype, strTargetVal, strLastTargetVal, strLastGoalDt, strNextDueDt, strGoalId, vtxtColor);

                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            if (intTotalwrapupOverDue === null || intTotalwrapupOverDue === undefined || intTotalwrapupOverDue === "") {
                $('.indicator-box-small_wrapup_grey').text('');
                $('.indicator-box-small_wrapup_grey').hide();
            }
        }
    );
}

function GetSectionName(OptionSetVal) {

    var vSectnName = "";

    switch (OptionSetVal) {
        case 100000000:
            vSectnName = "Symptoms";
            break;
        case 100000001:
            vSectnName = "Tests/Care";
            break;
        case 100000002:
            vSectnName = "Medications";
            break;
        case 100000003:
            vSectnName = "Activity";
            break;
        case 100000004:
            vSectnName = "Nutrition";
            break;
        case 100000005:
            vSectnName = "Psycho-Social / Behavioural Health";
            break;
        case 100000006:
            vSectnName = "Wrap Up";
            break;
        case 100000007:
            vSectnName = "Home Vitals";
            break;
        case -1:
            vSectnName = "";
            break;

    }

    return vSectnName;
    
}

function gotoAddCarePlan() {

    IsDataChanged = false;
    vitalTypeToSaveArray = [];
    var personId = parent.Xrm.Page.data.entity.getId();

    if (personId === null||personId ==="") {
       
        gotohealth360Form();
    };

    if (personId !== null && personId !== "") {
        $('.monitor-wrapper').hide('slow');
        $('.Personalize-details').html('');
        // update filter css
        $('#planFilter').css('margin-bottom','10px');
        ResetFilter();
        DisplayMode = personalizeMode;

        //var vSelectedGoal = [];
        if (parent.Xrm !== undefined) {
            var contactId = parent.Xrm.Page.data.entity.getId();
        }

        /// Add care plan dropdown
        var selectedCarePath;
        var selectedCarePathId;
        var allPlans = GetCarePlanfromPatitentId(contactId);
        var allPaths = GetAllCarePath();

        // Get All CarePaths for DropDown
        var ddCarePath = Enumerable.From(allPaths)
        .Select(function (x) { return { 'text': x.attributes.tri_name.value, 'value': x.attributes.tri_cccarepathid.value }; })
        .ToArray();

        // Get All CarePlan to display on Page
        var ddCarePlans = Enumerable.From(allPlans)
        .Select(function (x) { return { 'text': x.attributes.tri_planname.value, 'value': x.attributes.tri_careplanid.id }; })
        .ToArray();

        // Get Distinct CarePlans
        var distinctCarePlansTextArray = Enumerable.From(ddCarePlans)
                                          .Select(function (x) { return x.text; })
                                          .Distinct(function (y) { return y; })
                                          .ToArray();

        // Get data to display on dropdown
        // AllCarePath - distinctCarePlans
        var carePathDropdownArray = ddCarePath.filter(function (x) { return !Enumerable.From(distinctCarePlansTextArray).Contains(x.text); });

        // create DropDownList from input HTML element
        var kendoAutoCompleteWC = $("#carePaths").kendoAutoComplete({
            dataTextField: "text",
            dataValueField: "value",
            filter: "startswith",
            placeholder: "Viewing All (Select Category)",
            dataSource: carePathDropdownArray,
            index: 0,
            change: onCarePlanChange
        }).data("kendoAutoComplete");

        function onCarePlanChange() {
            // Get the selected carepath from dropdown
            var selectedCarePath = $('#carePaths').val();
            var listCarePath = Enumerable.From(carePathDropdownArray);
            // Get the selected CarePathId
            var selectedCarePathId = listCarePath
                                     .Where(function (x) { return x.text === selectedCarePath })
                                     .Select(function (x) { return x.value; })
                                     .FirstOrDefault();
            // Check if the data selcted from datasource <> ''
            var IsSelectedCarePathfromDataSource = listCarePath
                                                   .Select(function (x) { return x.text; })
                                                   .Contains(selectedCarePath);

            if (selectedCarePath !== '' && IsSelectedCarePathfromDataSource) {

                var carePathdataToUpdate = {
                    tri_cccarepathid: { 'value': selectedCarePathId },
                    tri_name: { "value": selectedCarePath }
                };

                var contact = {};
                contact.tri_CarePlantoAddID = { Id: selectedCarePathId, LogicalName: "tri_cccarepath", Name: selectedCarePath };
                SDK.REST.updateRecord(
                    contactId, // Pass Contact ID
                    contact,
                    "Contact",
                   // updateSuccessCallback(selectedCarePath, selectedCarePathId, data, kendoAutoCompleteWC),
                    updateSuccessCallback,
                    errorHandler); //
            }

            // Function to execute after CarePlanToAdd is updated
            function updateSuccessCallback() {
                alert("The Patient record changes were saved");
                // get the newly added CarePlan Data
                // Recheck this logic
                var carePlanJoinData = GetCarePlanfromPatitentId(contactId)
                var addedCarePlan = Enumerable.From(carePlanJoinData)
                    .Where(function (x) { return x.attributes.tri_planname.value === selectedCarePath })
                    .Select(function (x) { return { 'text': x.attributes.tri_planname.value, 'value': x.attributes.tri_careplanid.id }; })
                    .ToArray();

                // Check if added careplanjoin records were created, then update the UI & dropdown 
                if (addedCarePlan !== undefined && addedCarePlan !== null && addedCarePlan.length > 0) {
                    // Get Distinct CarePlans
                    var distinctAddedCarePlans = Enumerable.From(addedCarePlan)
                                                 .Select(function (x) { return { 'text': x.text, 'value': x.value }; })
                                                 .Distinct(function (y) { return y.text; })
                                                 .ToArray();

                    // Get data and show 
                    DisplayPersonalizeMode(contactId);

                    carePathDropdownArray = Enumerable.From(carePathDropdownArray)
                                            .Where(function (x) { return x.text !== selectedCarePath; })
                                            .ToArray();
                    // Bind new data to KendAutocomplete
                    kendoAutoCompleteWC.setDataSource(carePathDropdownArray);
                    $('#carePaths').val('');
                }
            }
        };

        // DisplayPersonalizeMode(contactId);
        $('.Personalize-details,.personalize-section').show();
        UpdateVitalFilters(contactId,personalizeMode)
    };//if closes here
}

function dynamicToolTip(data, idtest) {
    $("#" + idtest).attr('data-original-title', data)
    .tooltip('fixTitle')
    .tooltip('show');
}

function DisplayPersonalizeMode(contactId) {

    var vFinalTbl = "";
    var vTblRowsSymptoms = "";
    var vTblRowsTestCare = "";
    var vTblRowsMedications = "";
    var vTblRowsActivity = "";
    var vTblRowsNutrition = "";
    var vTblRowsPyschoSocial = "";
    var vTblRowsWrapUp = "";
    var vTblRowsHomeVitals = "";
    var vTblRowsNone = "";
    var VitalTypeArray = [];

    IsDataChanged = false;

    //SDK.JQuery.retrieveMultipleRecords(
    //   "tri_careplanjoin",
    //   "?$select=tri_GoalSection,tri_typeofgoalcode,new_GoalState,tri_vitalsvaluetypeid,tri_VitalValueTypeName&$filter=tri_PatientID/Id eq (guid'" + contactId + "')&$orderby=tri_GoalSection",

    var FetchXmlgoal =

"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
  "<entity name='tri_cccareplangoal'>" +
    "<attribute name='tri_cccareplangoalid' />" +
    "<attribute name='createdon' />" +
    "<attribute name='tri_vitalsvaluetype' />" +
    "<attribute name='tri_typeofgoalcode' />" +
    "<attribute name='tri_careplangoalstate' />" +
    "<attribute name='tri_goalselected' />" +
    "<attribute name='tri_goalsection' />" +
    "<attribute name='tri_careplangoalstate' />" +
    "<order attribute='tri_goalsection' descending='false' />" +
    "<filter type='and'>" +
      "<condition attribute='tri_patientid' operator='eq' value='" + contactId + "' />" +
      "<condition attribute='tri_vitalsvaluetype' operator='not-null' />" +
      "<condition attribute='tri_goalsection' operator='not-null' />" +
    "</filter>" +
    "<link-entity name='tri_vitalsvaluetype' from='tri_vitalsvaluetypeid' to='tri_vitalsvaluetype' visible='false' link-type='outer' alias='a_valtype'>" +
      "<attribute name='tri_name' />" +
    "</link-entity>" +
  "</entity>" +
"</fetch>"

    results = XrmServiceToolkit.Soap.Fetch(FetchXmlgoal);
    // alert(results.length);
    if (results.length > 0) {
        for (var i = 0; i < results.length; i++) {

            vVitalTypeId = results[i].attributes["tri_vitalsvaluetype"].id;
            var vVitalFactorButtonId = results[i].attributes["tri_vitalsvaluetype"].id + "_BTN";
            var vVitalMetricOperatorButtonId = results[i].attributes["tri_vitalsvaluetype"].id + "_MTRCOPRTRBTN";
            var vVitalMetricOperatorButtonIdTwo = results[i].attributes["tri_vitalsvaluetype"].id + "_MTRCOPRTRBTNTWO";
            var vVitalFreqNormalButtonId = results[i].attributes["tri_vitalsvaluetype"].id + "_FRQNRMLBTN";
            var vVitalFreqAbNormalButtonId = results[i].attributes["tri_vitalsvaluetype"].id + "_FRQABNRMLBTN";
            var vVitalAssgnRoleButtonId = results[i].attributes["tri_vitalsvaluetype"].id + "_ASSGNROLEBTN";
            var vVitalSaveButtonId = results[i].attributes["tri_vitalsvaluetype"].id + "_SAVEBTN";
            var vVitalFactorANDId = results[i].attributes["tri_vitalsvaluetype"].id + "_AND";
            var vVitalFactorQualSPAN = results[i].attributes["tri_vitalsvaluetype"].id + "_QUALSPAN";
            var vVitalFactorQuantSPAN = results[i].attributes["tri_vitalsvaluetype"].id + "_QUANTSPAN";
            var vVitalFactorULId = results[i].attributes["tri_vitalsvaluetype"].id + "_UL";// used in PatienModifier dropdown
            var vVitalMetricOperatorULId = results[i].attributes["tri_vitalsvaluetype"].id + "_MTRCOPRTRUL";// used in PatienModifier dropdown
            var vVitalMetricOperatorULIdTwo = results[i].attributes["tri_vitalsvaluetype"].id + "_MTRCOPRTRULTWO";// used in PatienModifier dropdown
            var vVitalFreqNormalULId = results[i].attributes["tri_vitalsvaluetype"].id + "_FRQNRMLUL";// used in PatienModifier dropdown
            var vVitalFreqAbNormalULId = results[i].attributes["tri_vitalsvaluetype"].id + "_FRQABNRMLUL";// used in PatienModifier dropdown
            var vVitalAssgnRoleULId = results[i].attributes["tri_vitalsvaluetype"].id + "_ASSGNROLEUL";
            var vVitalFactorMETRICId = results[i].attributes["tri_vitalsvaluetype"].id + "_METRIC";// used in Metric textbox
            var vVitalFactortargetvaluetwoId = results[i].attributes["tri_vitalsvaluetype"].id + "_TARGETVALTWO";// used in targetval two textbox
            var vVitalFactorQUALITATIVEId = results[i].attributes["tri_vitalsvaluetype"].id + "_QUALITATIVETXT";// used in targetval two textbox
            var vVitalFactorMULTIPLIER_NORMALId = results[i].attributes["tri_vitalsvaluetype"].id + "_MULTIPLIER_NORMAL";// used in normal multipler textbox
            var vVitalFactorMULTIPLIER_ABNORMALId = results[i].attributes["tri_vitalsvaluetype"].id + "_MULTIPLIER_ABNORMAL";// used in abnormal textbox
            var vVitalFactorQUAL_ACTIONId = results[i].attributes["tri_vitalsvaluetype"].id + "_QUAL_ACTION";// used in trigger action textbox
            var tri_cccareplangoalId = results[i].attributes["tri_cccareplangoalid"].value;
            var tri_typeofgoalcode = results[i].attributes["tri_typeofgoalcode"].value;
            var tri_GoalState = results[i].attributes["tri_careplangoalstate"];
            var tri_GoalSection = GetSectionName(results[i].attributes["tri_goalsection"].value);
            var tri_VitalValueTypeName = results[i].attributes["a_valtype.tri_name"].value;

            if (tri_cccareplangoalId !== undefined && tri_cccareplangoalId !== null && filteredCarePlangoalIds.indexOf(tri_cccareplangoalId) == -1) {
                //get the selected goal for this vital type
                if (tri_VitalValueTypeName !== null && tri_VitalValueTypeName !== undefined) {
                    var IndexOfVitalType = VitalTypeArray.indexOf(tri_VitalValueTypeName);
                    if (IndexOfVitalType === -1 && IndexOfVitalType !== null && IndexOfVitalType !== undefined) {
                        VitalTypeArray.push(tri_VitalValueTypeName)

                        GetSelectedGoalForCurrentVitalType(results[i].attributes["tri_vitalsvaluetype"].id, contactId);  //need this to default the dropdownlist and all the fields when the page loads the first time.
                        var goalState;

                        if (tri_GoalState !== undefined && tri_GoalState !== null)
                            goalState = tri_GoalState.value;

                        if (goalState == 167410000) {
                            goalClass = "orange";
                        }
                        else if (goalState == 167410001) {
                            goalClass = "green";
                        }
                        else if (goalState == 167410002) {
                            goalClass = "red";
                        }
                        else {
                            goalClass = "grey";
                        }

                        var modifierList = "";

                        if (vVitalTypeId !== null && vVitalTypeId !== undefined) {
                            modifierList = GetModifierBasedOnValueType(results[i].attributes["tri_vitalsvaluetype"].id, contactId);
                        }
                        if (modifierList === undefined || modifierList === "") {
                            modifierList = "<li></li>";
                        }

                        switch (results[i].attributes["tri_goalsection"].value) {
                            case 100000000:
                                // vSectnName = "Symptoms";
                                vTblRowsSymptoms = vTblRowsSymptoms +
                                    '<br><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div>' +  // indicator wrapper div open-closes

              //<!-- FACTORS & VALUES -->     
             '<table  class="maintable" align="left">' + //table 1 start
             '<tr>' +
                '<td class="labelcenter" width="270px">Factor / Modifier:</td>' +
                '<td class="labelcenter" width="600px"> Target Value:</td>' +
                '<td class="labelcenter" width="220px"> In Range Frequency:</td>' +
                '<td class="labelcenter" width="220px"> Out of Range Frequency:</td>' +
             '</tr>' +//'</table>' +//table 1 end
             // '<table >' +//table 2 start
              '<tr class="factors" align="left">' +
              '<td class="labelcenter" style="width:90px; padding-right:20px;" colspan="4">' + //table2 column1 
              //<!-- FACTOR DROP-DOWN -->    
                '<div class="btn-group" style="width: 90px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="tooltip" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' + modifierList +
                '</ul>' +
                  '</div>' +
                  '</td></tr>' +
                    '<tr><td  width="270px"></td><td class="labelcenter" width="600px">' + //table2 column2  width="270px"
                    //<!-- MODIFIER DROP-DOWN -->    if(
                    '<span class="quantitativespan"  style="display:inline" id=' + vVitalFactorQuantSPAN + '><div class="btn-group" >' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" data-toggle="tooltip1" onmouseover = dynamicToolTip(this.value) class="txtfield"  id=' + vVitalFactorMETRICId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" >' +
                    '<p id =' + vVitalFactorANDId + ' style="display:none"> And </p><div class="btn-group">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonIdTwo + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactortargetvaluetwoId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '<span class="qualititativespan" id=' + vVitalFactorQualSPAN + ' style="display:inline"><input type="text" class="txtfield" id="' + vVitalFactorQUALITATIVEId + '"  style="width:480px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '</td >' +
                    '<td width="220px">' + //
                    '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                    //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
                  '</td>' +
                    '<td width="220px"> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                     //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
             '<br></td>' +
                 '</tr></table>' +//table 2 end
                 '<br>';//tablecontent div closes here

                                break;
                            case 100000001:
                                //vSectnName = "Tests/Care";
                                vTblRowsTestCare = vTblRowsTestCare +
                                                           '<br><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div>' +  // indicator wrapper div open-closes
              //<!-- FACTORS & VALUES -->     
             '<table class="maintable" align="left">' + //table 1 start
             '<tr>' +
                '<td class="labelcenter" width="270px">Factor / Modifier:</td>' +
                '<td class="labelcenter" width="600px"> Target Value:</td>' +
                '<td class="labelcenter" width="220px"> In Range Frequency:</td>' +
                '<td class="labelcenter" width="220px"> Out of Range Frequency:</td>' +
             '</tr>' +//table 1 end
              //table 2 start
              '<tr class="factors" align="left">' +
              '<td class="labelcenter" style="width:90px; padding-right:20px;" colspan="4">' + //table2 column1 
              //<!-- FACTOR DROP-DOWN -->    
                '<div class="btn-group" style="width: 90px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' + modifierList +
                '</ul>' +
                  '</div>' +
                  '</td></tr>' +
                    '<tr><td  width="270px"></td><td class="labelcenter" width="600px">' + //table2 column2  width="270px"
                    //<!-- MODIFIER DROP-DOWN -->    if(
                    '<span class="quantitativespan"  style="display:inline" id=' + vVitalFactorQuantSPAN + '><div class="btn-group" >' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield"  id=' + vVitalFactorMETRICId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" >' +
                    '<p id =' + vVitalFactorANDId + ' style="display:none"> And </p><div class="btn-group">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonIdTwo + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactortargetvaluetwoId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '<span class="qualititativespan" id=' + vVitalFactorQualSPAN + ' style="display:inline"><input type="text" class="txtfield" id="' + vVitalFactorQUALITATIVEId + '"  style="width:480px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '</td >' +
                    '<td width="220px">' + //
                    '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                    //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
                  '</td>' +
                    '<td width="220px"> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                     //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
             '<br></td>' +
                 '</tr></table>' +//table 2 end
                 '<br>';//tablecontent div closes here
                                break;
                            case 100000002:
                                //vSectnName = "Medications";
                                vTblRowsMedications = vTblRowsMedications +
                                                            '<br><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div>' +  // indicator wrapper div open-closes
              //<!-- FACTORS & VALUES -->     
             '<table class="maintable" align="left">' + //table 1 start
             '<tr>' +
                '<td class="labelcenter" width="270px">Factor / Modifier:</td>' +
                '<td class="labelcenter" width="600px"> Target Value:</td>' +
                '<td class="labelcenter" width="220px"> In Range Frequency:</td>' +
                '<td class="labelcenter" width="220px"> Out of Range Frequency:</td>' +
             '</tr>' +//table 1 end
              //table 2 start
              '<tr class="factors" align="left">' +
              '<td class="labelcenter" style="width:90px; padding-right:20px;" colspan="4">' + //table2 column1 
              //<!-- FACTOR DROP-DOWN -->    
                '<div class="btn-group" style="width: 90px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' + modifierList +
                '</ul>' +
                  '</div>' +
                  '</td></tr>' +
                    '<tr><td  width="270px"></td><td class="labelcenter" width="600px">' + //table2 column2  width="270px"
                    //<!-- MODIFIER DROP-DOWN -->    if(
                    '<span class="quantitativespan"  style="display:inline" id=' + vVitalFactorQuantSPAN + '><div class="btn-group" >' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield"  id=' + vVitalFactorMETRICId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" >' +
                    '<p id =' + vVitalFactorANDId + ' style="display:none"> And </p><div class="btn-group">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonIdTwo + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactortargetvaluetwoId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '<span class="qualititativespan" id=' + vVitalFactorQualSPAN + ' style="display:inline"><input type="text" class="txtfield" id="' + vVitalFactorQUALITATIVEId + '"  style="width:480px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '</td >' +
                    '<td width="220px">' + //
                    '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                    //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
                  '</td>' +
                    '<td width="220px"> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                     //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
             '<br></td>' +
                 '</tr></table>' +//table 2 end
                 '<br>';//tablecontent div closes here
                                break;
                            case 100000003:
                                //vSectnName = "Activity";
                                vTblRowsActivity = vTblRowsActivity +
                                                               '<br><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div>' +  // indicator wrapper div open-closes
              //<!-- FACTORS & VALUES -->     
             '<table class="maintable" align="left">' + //table 1 start
             '<tr>' +
                '<td class="labelcenter" width="270px">Factor / Modifier:</td>' +
                '<td class="labelcenter" width="600px"> Target Value:</td>' +
                '<td class="labelcenter" width="220px"> In Range Frequency:</td>' +
                '<td class="labelcenter" width="220px"> Out of Range Frequency:</td>' +
             '</tr>' +//table 1 end

              //table 2 start
              '<tr class="factors" align="left">' +
              '<td class="labelcenter" style="width:90px; padding-right:20px;" colspan="4">' + //table2 column1 
              //<!-- FACTOR DROP-DOWN -->    
                '<div class="btn-group" style="width: 90px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' + modifierList +
                '</ul>' +
                  '</div>' +
                  '</td></tr>' +
                    '<tr><td  width="270px"></td><td class="labelcenter" width="600px">' + //table2 column2  width="270px"
                    //<!-- MODIFIER DROP-DOWN -->    if(
                    '<span class="quantitativespan"  style="display:inline" id=' + vVitalFactorQuantSPAN + '><div class="btn-group" >' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" data-toggle="tooltip" onmouseover ="dynamicToolTip(this.value,' + "'"+vVitalFactorMETRICId+"')"+'"' +'class="txtfield"  id=' + vVitalFactorMETRICId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" >' +
                    '<p id =' + vVitalFactorANDId + ' style="display:none"> And </p><div class="btn-group">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonIdTwo + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactortargetvaluetwoId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '<span class="qualititativespan" id=' + vVitalFactorQualSPAN + ' style="display:inline"><input type="text" class="txtfield" id="' + vVitalFactorQUALITATIVEId + '"  style="width:480px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '</td >' +
                    '<td width="220px">' + //
                    '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                    //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
                  '</td>' +
                    '<td width="220px"> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                     //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
             '<br></td>' +
                 '</tr></table>' +//table 2 end
                 '<br>';//tablecontent div closes here

                                break;
                            case 100000004:
                                //vSectnName = "Nutrition";
                                vTblRowsNutrition = vTblRowsNutrition +
                                       '<br><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div>' +  // indicator wrapper div open-closes

              //<!-- FACTORS & VALUES -->     
             '<table class="maintable" align="left">' + //table 1 start
             '<tr>' +
                '<td class="labelcenter" width="270px">Factor / Modifier:</td>' +
                '<td class="labelcenter" width="600px"> Target Value:</td>' +
                '<td class="labelcenter" width="220px"> In Range Frequency:</td>' +
                '<td class="labelcenter" width="220px"> Out of Range Frequency:</td>' +
             '</tr>' +//table 1 end
              //table 2 start
              '<tr class="factors" align="left">' +
              '<td class="labelcenter" style="width:90px; padding-right:20px;" colspan="4">' + //table2 column1 
              //<!-- FACTOR DROP-DOWN -->    
                '<div class="btn-group" style="width: 90px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' + modifierList +
                '</ul>' +
                  '</div>' +
                  '</td></tr>' +
                    '<tr><td  width="270px"></td><td class="labelcenter" width="600px">' + //table2 column2  width="270px"
                    //<!-- MODIFIER DROP-DOWN -->    if(
                    '<span class="quantitativespan"  style="display:inline" id=' + vVitalFactorQuantSPAN + '><div class="btn-group" >' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield"  id=' + vVitalFactorMETRICId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" >' +

                    '<p id =' + vVitalFactorANDId + ' style="display:none"> And </p><div class="btn-group">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonIdTwo + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactortargetvaluetwoId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '<span class="qualititativespan" id=' + vVitalFactorQualSPAN + ' style="display:inline"><input type="text" class="txtfield" id="' + vVitalFactorQUALITATIVEId + '"  style="width:480px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '</td >' +
                    '<td width="220px">' + //
                    '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                    //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
                  '</td>' +
                    '<td width="220px"> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                     //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
             '<br></td>' +
                 '</tr></table>' +//table 2 end
                 '<br>';//tablecontent div closes here

                                break;
                            case 100000005:
                                //vSectnName = "Psycho-Social / Behavioural Health";
                                vTblRowsPyschoSocial = vTblRowsPyschoSocial +
                                      '<br><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div>' +  // indicator wrapper div open-closes

              //<!-- FACTORS & VALUES -->     
             '<table class="maintable" align="left">' + //table 1 start
             '<tr>' +
                '<td class="labelcenter" width="270px">Factor / Modifier:</td>' +
                '<td class="labelcenter" width="600px"> Target Value:</td>' +
                '<td class="labelcenter" width="220px"> In Range Frequency:</td>' +
                '<td class="labelcenter" width="220px"> Out of Range Frequency:</td>' +
             '</tr>' +//table 1 end

              //table 2 start
              '<tr class="factors" align="left">' +
              '<td class="labelcenter" style="width:90px; padding-right:20px;" colspan="4">' + //table2 column1 
              //<!-- FACTOR DROP-DOWN -->    
                '<div class="btn-group" style="width: 90px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' + modifierList +
                '</ul>' +
                  '</div>' +
                  '</td></tr>' +
                    '<tr><td  width="270px"></td><td class="labelcenter" width="600px">' + //table2 column2  width="270px"
                    //<!-- MODIFIER DROP-DOWN -->    if(
                    '<span class="quantitativespan"  style="display:inline" id=' + vVitalFactorQuantSPAN + '><div class="btn-group" >' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield"  id=' + vVitalFactorMETRICId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" >' +

                    '<p id =' + vVitalFactorANDId + ' style="display:none"> And </p><div class="btn-group">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonIdTwo + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactortargetvaluetwoId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '<span class="qualititativespan" id=' + vVitalFactorQualSPAN + ' style="display:inline"><input type="text" class="txtfield" id="' + vVitalFactorQUALITATIVEId + '"  style="width:480px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '</td >' +
                    '<td width="220px">' + //
                    '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                    //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
                  '</td>' +
                    '<td width="220px"> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                     //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
             '<br></td>' +
                 '</tr></table>' +//table 2 end
                 '<br>';//tablecontent div closes here

                                break;
                            case 100000006:
                                //vSectnName = "Wrap Up";
                                vTblRowsWrapUp = vTblRowsWrapUp +
                                                          '<br><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div>' +  // indicator wrapper div open-closes
              //<!-- FACTORS & VALUES -->     
             '<table class="maintable" align="left">' + //table 1 start
             '<tr>' +
                '<td class="labelcenter" width="270px">Factor / Modifier:</td>' +
                '<td class="labelcenter" width="600px"> Target Value:</td>' +
                '<td class="labelcenter" width="220px"> In Range Frequency:</td>' +
                '<td class="labelcenter" width="220px"> Out of Range Frequency:</td>' +
             '</tr>' +//table 1 end
              //table 2 start
              '<tr class="factors" align="left">' +
              '<td class="labelcenter" style="width:90px; padding-right:20px;" colspan="4">' + //table2 column1 
              //<!-- FACTOR DROP-DOWN -->    
                '<div class="btn-group" style="width: 90px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' + modifierList +
                '</ul>' +
                  '</div>' +
                  '</td></tr>' +
                    '<tr><td  width="270px"></td><td class="labelcenter" width="600px">' + //table2 column2  width="270px"
                    //<!-- MODIFIER DROP-DOWN -->    if(
                    '<span class="quantitativespan"  style="display:inline" id=' + vVitalFactorQuantSPAN + '><div class="btn-group" >' +
                    '</div>' +
                    '<input type="text" class="txtfield"  id=' + vVitalFactorMETRICId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" >' +

                    '<p id =' + vVitalFactorANDId + ' style="display:none"> And </p><div class="btn-group">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonIdTwo + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactortargetvaluetwoId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '<span class="qualititativespan" id=' + vVitalFactorQualSPAN + ' style="display:inline"><input type="text" class="txtfield" id="' + vVitalFactorQUALITATIVEId + '"  style="width:480px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '</td >' +
                    '<td width="220px">' + //
                    '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                    //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
                  '</td>' +
                    '<td width="220px"> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                     //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
             '<br></td>' +
                 '</tr></table>' +//table 2 end
                 '<br>';//tablecontent div closes here

                                break;
                            case 100000007:
                                //vSectnName = "Home Vitals";
                                vTblRowsHomeVitals = vTblRowsHomeVitals +
                                      '<br><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div>' +  // indicator wrapper div open-closes

              //<!-- FACTORS & VALUES -->     
             '<table class="maintable" align="left">' + //table 1 start
             '<tr>' +
                '<td class="labelcenter" width="270px">Factor / Modifier:</td>' +
                '<td class="labelcenter" width="600px"> Target Value:</td>' +
                '<td class="labelcenter" width="220px"> In Range Frequency:</td>' +
                '<td class="labelcenter" width="220px"> Out of Range Frequency:</td>' +
             '</tr>' +//table 1 end

              //table 2 start
              '<tr class="factors" align="left">' +
              '<td class="labelcenter" style="width:90px; padding-right:20px;" colspan="4">' + //table2 column1 
              //<!-- FACTOR DROP-DOWN -->    
                '<div class="btn-group" style="width: 90px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' + modifierList +
                '</ul>' +
                  '</div>' +
                  '</td></tr>' +
                    '<tr><td  width="270px"></td><td class="labelcenter" width="600px">' + //table2 column2  width="270px"
                    //<!-- MODIFIER DROP-DOWN -->    if(
                    '<span class="quantitativespan"  style="display:inline" id=' + vVitalFactorQuantSPAN + '><div class="btn-group" >' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + ' style="display:none"><span class="caret"></span></button>' +
                    '</div>' +
                    '<input type="text" class="txtfield"  id=' + vVitalFactorMETRICId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" >' +

                    '<p id =' + vVitalFactorANDId + ' style="display:none"> And </p><div class="btn-group">' +
                    '</div>' +
                    '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactortargetvaluetwoId + ' style="width:50px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '<span class="qualititativespan" id=' + vVitalFactorQualSPAN + ' style="display:inline"><input type="text" class="txtfield" id="' + vVitalFactorQUALITATIVEId + '"  style="width:480px;text-align: left; padding-left: 10px; display:none" ></span>' +
                    '</td >' +
                    '<td width="220px">' + //
                    '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                    //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
                  '</td>' +
                    '<td width="220px"> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                     //<!-- MODIFIER DROP-DOWN -->    
                    '<div class="btn-group" style="width:60px;">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                      '<li role="presentation" class="dropdown-header">Day</li>' +
                      '<li role="presentation" class="dropdown-header">Week</li>' +
                      '<li role="presentation" class="dropdown-header">Month</li>' +
                      '<li role="presentation" class="dropdown-header">Quarter</li>' +
                      '<li role="presentation" class="dropdown-header">Year</li>' +
                      '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                    '</ul>' +
                  '</div>' +
             '<br></td>' +
                 '</tr></table>' +//table 2 end
                 '<br>';//tablecontent div closes here
                                break;
                            case -1:
                                break;
                        }
                        //add current row to previous row
                    }
                }
            }
        }
        /// End For
    };//end if
    $('.Personalize-details').html('');
    vFinalTbl = '<div class="panel-group" id="accordion">' +
                 CreateTooglePanels(vTblRowsSymptoms, 'Symptoms', 'panelSymptoms') +
                 CreateTooglePanels(vTblRowsTestCare, 'Tests/Care', 'panelTestsCare') +
                 CreateTooglePanels(vTblRowsHomeVitals, 'Home Vitals', 'panelHomeVitals') +
                 CreateTooglePanels(vTblRowsMedications, 'Medications', 'panelMedications') +
                 CreateTooglePanels(vTblRowsActivity, 'Activity', 'panelActivity') +
                 CreateTooglePanels(vTblRowsNutrition, 'Nutrition', 'panelNutrition') +
                 CreateTooglePanels(vTblRowsPyschoSocial, 'Psycho-Social/Behavioral Health', 'panelPsychoSocial') +
                 CreateTooglePanels(vTblRowsWrapUp, 'Wrap-Up', 'panelWrap') +
                 '<table class="maintable" >' +//table5 start
                 '<tr></tr>' +
                 '</table>' +
                 '</div>';

    $('.Personalize-details').append(vFinalTbl);
}

function CreateTooglePanels(body,title,collapsePanelId) {
    var panel ="";
    panel = '<div class="panel panel-default">'+
            '<div class="panel-heading tg tg-typedetail">' +
                '<h4 class="panel-title">'+
                    '<a data-toggle="collapse" data-parent="#accordion" href="#' + collapsePanelId + '"><div class="panelHeader">' + title + '</div></a>' +
                '</h4>'+
            '</div>'+
            '<div id="' + collapsePanelId + '" class="panel-collapse collapse">' +
                '<div class="panel-body">' + body + '</div>' +
            '</div>'+
            '</div>';

    return panel;
}

// enabling save buttons on input text change
$(document).on('keyup click', 'input[type=text]', function () {
    var inputId = this.id;
    //EnableSaveChangesButton(inputId);
    AddVitaTypeToSave(inputId);
    IsDataChanged = true;

    if (NonAcknowledgementPopupCondition(this)) {
        IsObservedValueAndFactorModifierChanged = true;
    }
    else {
        IsOtherValuesChanged = true;
    }
});

function NonAcknowledgementPopupCondition(element) {
    return (element.id.indexOf("observedValue") > -1 || element.id.indexOf("_QUALITATIVETXT") > -1 || element.className.indexOf("personalizetargetvalQual") > -1
            || element.className.indexOf("personalizetriggeraction") > -1 || element.className.indexOf("personalizetargetvalMetric") > -1
            || element.className.indexOf("personalizetargetvalMetricTwo") > -1);
}

$(document).on('click', '.ui-spinner-button', function () {
    var vSiblingId = $(this).siblings('input').attr('id')
    if (vSiblingId == undefined) {
        IsDataChanged = true;
    }
    else {
        AddVitaTypeToSave(vSiblingId);
        //IsDataChanged = true;
    }
    IsOtherValuesChanged = true;

   ////alert("Hello");
  //alert( $(this).siblings('input').attr('id'));
});

function AddVitaTypeToSave(inputId) {

    if (inputId !== null && inputId !== undefined && inputId.length > 0 && inputId !== "observedValue") {
        var vitalId = $(inputId.substring(0, 36)).selector;

        var IndexOfVitalTypeId = vitalTypeToSaveArray.indexOf(vitalId);
        if (IndexOfVitalTypeId === -1 && IndexOfVitalTypeId !== null && IndexOfVitalTypeId !== undefined) {
            vitalTypeToSaveArray.push(vitalId);
        }
    }
}

function GetModifierBasedOnValueType(tri_vitalsvaluetypeid,contactId) {
        var FinalModifierTag = "";
        var vMdfrIdArray = [];
        var vMdfrIdGoalSelectedArray = [];
        //var vMdfrTagArray = [];
        var vULselector = tri_vitalsvaluetypeid + "_UL";
        var modifierValue = "";

        //get modifier ids and put them in an array
        SDK.JQuery.retrieveMultipleRecords(
            "tri_cccareplangoal",
            "?$select=tri_PatientModifierId,tri_cccareplangoalId,tri_GoalSelected,tri_vitalsvaluetype&$filter=tri_vitalsvaluetype/Id eq (guid'" + tri_vitalsvaluetypeid + "') and tri_PatientID/Id eq (guid'" + contactId + "')&$orderby=tri_PatientModifierId asc",
            function (results) {
                if (results.length > 0) {
                    for (var i = 0; i < results.length; i++) {

                        var tri_PatientModifierId = results[i].tri_PatientModifierId.Id;
                        var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype;
                        var tri_GoalSelected = results[i].tri_GoalSelected;
                        var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                        modifierValue = results[i].tri_PatientModifierId.Name;

                        var IndexOfMdfrId = vMdfrIdArray.indexOf(tri_PatientModifierId);

                        if (IndexOfMdfrId === -1 && IndexOfMdfrId !== null && IndexOfMdfrId !== undefined) {

                            vMdfrIdArray.push(tri_PatientModifierId);
                            vMdfrIdGoalSelectedArray.push({ 'ModifierId': tri_PatientModifierId, 'GoalSelecetd': tri_GoalSelected, 'CarePlanGoalId': tri_cccareplangoalId });
                        }
                    }
                }
            },
            function (error) {
                alert(error.message);
            },
            function () {
                //On Complete - Do Something
                // return vMdfrIdArray;
                // AppendModfrTagFromArray(vMdfrIdArray, vitalUlSelector);
                var MdfrarrayLength = vMdfrIdArray.length;
                var IncrementalModifierTag = "";

                if (MdfrarrayLength > 0) {
                   // var vloopMdfrId = "";
                    for (var i = 0; i < MdfrarrayLength; i++) {
                       // vloopMdfrId = vMdfrIdArray[i];
                        if (vMdfrIdArray[i] !== null ) {
                            SDK.JQuery.retrieveMultipleRecords(
                "tri_patientmodifier",
                "?$select=tri_name,tri_patientmodifierId&$filter=tri_patientmodifierId eq (guid'" + vMdfrIdArray[i] + "')",
                function (results) {

                    for (var i = 0; i < results.length; i++) {
                        var tri_name = results[i].tri_name;
                        var tri_patientmodId = results[i].tri_patientmodifierId;

                        if (tri_patientmodId !== null && tri_patientmodId !== undefined && $('#' + tri_patientmodId).length === 0) {
                            IncrementalModifierTag = IncrementalModifierTag + '<li role="presentation" class="dropdown-header" id=' + tri_patientmodId + '>' + tri_name + '</li>';

                            //IncrementalModifierTag.push('<li role="presentation" class="dropdown-header" id=' + tri_patientmodId + '>' + tri_name + '</li>');
                        }
                    }


                },
                function (error) {
                    alert(error.message);
                },
                function () {
                    //On Complete - Do Something
                     //alert(IncrementalModifierTag);
                    var vitalUlSelector = $("#" + vULselector);
                    vitalUlSelector.html('');
                    vitalUlSelector.append(IncrementalModifierTag);
                    /////
                    
                }
            );
                        };// null check if closes here
                    };// for clses here

                    // for single modifier default the goal, if goal selected is not true set it true
                    if (vMdfrIdGoalSelectedArray.length = 1 && !vMdfrIdGoalSelectedArray[0].GoalSelecetd) {
                        GetGoalForCurrentModifier(vMdfrIdGoalSelectedArray[0].ModifierId, tri_vitalsvaluetypeid, contactId, modifierValue, "personalize");

                        var tri_cccareplangoal = {}
                        tri_cccareplangoal.tri_GoalSelected = true;
                        SDK.REST.updateRecord(vMdfrIdGoalSelectedArray[0].CarePlanGoalId, tri_cccareplangoal, "tri_cccareplangoal", updateSuccessCallback, errorHandler);
                    }
                };// array count if closes here
                
            }
        );

    //}; //top if ends here
}

function GetPersonLizationModifierBasedOnValueType(tri_vitalsvaluetypeid, contactId) {
    var FinalModifierTag = "";
    var vMdfrIdArray = [];
    //var vMdfrTagArray = [];
    var vULselector = tri_vitalsvaluetypeid + "_ULPRSNL";

    //get modifier ids and put them in an array
    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_PatientModifierId,tri_vitalsvaluetype&$filter=tri_vitalsvaluetype/Id eq (guid'" + tri_vitalsvaluetypeid + "') and tri_PatientID/Id eq (guid'" + contactId + "')&$orderby=tri_PatientModifierId asc",
        function (results) {
           // alert(results.length);
            if (results.length > 0) {
                
                for (var i = 0; i < results.length; i++) {

                    var tri_PatientModifierId = results[i].tri_PatientModifierId.Id;
                    var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype;

                    var IndexOfMdfrId = vMdfrIdArray.indexOf(tri_PatientModifierId);

                    if (IndexOfMdfrId === -1 && IndexOfMdfrId !== null && IndexOfMdfrId !== undefined) {

                        vMdfrIdArray.push(tri_PatientModifierId);
                    }
                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            // return vMdfrIdArray;
            // AppendModfrTagFromArray(vMdfrIdArray, vitalUlSelector);
            var MdfrarrayLength = vMdfrIdArray.length;
            var IncrementalModifierTag2 = "";

            if (MdfrarrayLength > 0) {
                // var vloopMdfrId = "";
                for (var i = 0; i < MdfrarrayLength; i++) {
                    // vloopMdfrId = vMdfrIdArray[i];
                    if (vMdfrIdArray[i] !== null) {
                        SDK.JQuery.retrieveMultipleRecords(
            "tri_patientmodifier",
            "?$select=tri_name,tri_patientmodifierId&$filter=tri_patientmodifierId eq (guid'" + vMdfrIdArray[i] + "')",
            function (results) {

                for (var i = 0; i < results.length; i++) {
                    var tri_name = results[i].tri_name;
                    var tri_patientmodId = results[i].tri_patientmodifierId;

                    if (tri_patientmodId !== null && tri_patientmodId !== undefined && $('#' + tri_patientmodId + "_LIPRSNLN").length === 0) {
                        IncrementalModifierTag2 = IncrementalModifierTag2 + '<li role="presentation" class="dropdown-header" id=' + tri_patientmodId + "_LIPRSNLN" + '>' + tri_name + '</li>';

                        //IncrementalModifierTag.push('<li role="presentation" class="dropdown-header" id=' + tri_patientmodId + '>' + tri_name + '</li>');
                    }
                }

                var vitalUlSelector = $("#" + vULselector);
                vitalUlSelector.html('');
                vitalUlSelector.append(IncrementalModifierTag2);
            },
            function (error) {
                alert(error.message);
            },
            function () {
                //On Complete - Do Something
                // alert(IncrementalModifierTag2);
                //var vitalUlSelector = $("#" + vULselector);
                //vitalUlSelector.html('');
                //vitalUlSelector.append(IncrementalModifierTag2);

            }
        );
                    };// null check if closes here
                };// for clses here

            };// array count if closes here

        }
    );

    //}; //top if ends here
}

function GetSelectedGoalForCurrentVitalType(tri_vitalsvaluetypeid, contactId) {
    var vBTNselector = tri_vitalsvaluetypeid + "_BTN";
    var vMETRICselector = tri_vitalsvaluetypeid + "_METRIC";
    var vMETRICselectorTwo = tri_vitalsvaluetypeid + "_TARGETVALTWO";
    var vMETRICOPERATORselector = tri_vitalsvaluetypeid + "_MTRCOPRTRBTN";
    var vMETRICOPERATORselectorTwo = tri_vitalsvaluetypeid + "_MTRCOPRTRBTNTWO";
    var vMetricANDSelector = tri_vitalsvaluetypeid + "_AND";
    var vQuantSpan = tri_vitalsvaluetypeid + "_QUANTSPAN";
    var vQualSpan = tri_vitalsvaluetypeid + "_QUALSPAN";
    var vMULTIPLIER_NORMALselector = tri_vitalsvaluetypeid + "_MULTIPLIER_NORMAL";
    var vMULTIPLIER_ABNORMALselector = tri_vitalsvaluetypeid + "_MULTIPLIER_ABNORMAL";
    var vQUAL_ACTIONselector = tri_vitalsvaluetypeid + "_QUAL_ACTION";
    var vQUAL_TXTBOXselector = tri_vitalsvaluetypeid + "_QUALITATIVETXT";
    var ModIdStr = "";
    var ButtonText = "";
    if (tri_vitalsvaluetypeid !== undefined && tri_vitalsvaluetypeid !== null && tri_vitalsvaluetypeid.length > 0) {

        SDK.JQuery.retrieveMultipleRecords(
"tri_cccareplangoal",
//"?$select=new_GoalState,tri_actiontriggervalue,tri_activitydescription,tri_activitydescriptionabnormal,tri_activityrcurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_activityassignmentrole,tri_activityrecurrencemultipliernormal,tri_GoalName,tri_GoalSelected,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_PatientModifierId,tri_PatientModifierName,tri_qualitativeaction,tri_qualitativetarget,tri_targetmetricoperator,tri_typeofgoalcode,tri_vitalsvaluetypeid,tri_VitalValueTypeName&$filter=tri_PatientID/Id eq (guid'" + contactId + "') and tri_GoalSelected eq true and tri_vitalsvaluetypeid/Id eq (guid'" + tri_vitalsvaluetypeid + "')",
"?$select=tri_actiontriggermetricoperator,tri_actiontriggervalue,tri_activityassignmentrole,tri_activitydescription,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_activityrecurrencemultipliernormal,tri_CarePlanGoalState,tri_cccareplangoalId,tri_GoalSection,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_PatientID,tri_PatientModifierId,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + contactId + "')  and tri_GoalSelected eq true and tri_vitalsvaluetype/Id eq (guid'" + tri_vitalsvaluetypeid + "')",
function (results) {
    //alert(resultsjoin.length);
    for (var i = 0; i < results.length; i++) {
        var tri_actiontriggermetricoperator = results[i].tri_actiontriggermetricoperator;
        var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
        var tri_activityassignmentrole = results[i].tri_activityassignmentrole;
        var tri_activitydescription = results[i].tri_activitydescription;
        var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
        var tri_activitydueon = results[i].tri_activitydueon;
        var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
        var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
        var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
        var tri_activityrecurrencemultipliernormal = results[i].tri_activityrecurrencemultipliernormal;
        var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState;
        var tri_cccareplangoalId = results[i].tri_cccareplangoalId;
        var tri_GoalSection = results[i].tri_GoalSection;
        var tri_GoalSelected = results[i].tri_GoalSelected;
        var tri_LastGoalDate = results[i].tri_LastGoalDate;
        var tri_LastResultDate = results[i].tri_LastResultDate;
        var tri_LastTargetValue = results[i].tri_LastTargetValue;
        var tri_Metric = results[i].tri_Metric;
        var tri_MetricOperator = results[i].tri_MetricOperator.Value;
        var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
        var tri_name = results[i].tri_name;
        var tri_NextDueDate = results[i].tri_NextDueDate;
        var tri_PatientID = results[i].tri_PatientID;
        var tri_PatientModifierId = results[i].tri_PatientModifierId;
        var tri_qualitativeaction = results[i].tri_qualitativeaction;
        var tri_qualitativetarget = results[i].tri_qualitativetarget;
        var tri_range = results[i].tri_range;
        var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
        var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
        var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
        var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
    }

    

    if (tri_PatientModifierId !== null && tri_PatientModifierId !== undefined) {
        SDK.JQuery.retrieveRecord(
           tri_PatientModifierId.Id,
            "tri_patientmodifier",
            "tri_name",
            null,
            function (result) {
                var tri_name = result.tri_name;
                //$("#" + vBTNselector).val(tri_name);//append  modifier
                if ($("#" + vBTNselector).text() !== tri_name) {
                    $("#" + vBTNselector).text(tri_name);
                    $("#" + vBTNselector).val(tri_name);
                }
                switch (tri_typeofgoalcode) {
                    case 100000000:
                        //$("#" + vQuantSpan).hide();
                        //$("#" + vQualSpan).show();
                        $("#" + vQUAL_TXTBOXselector).val(tri_qualitativetarget);
                        $("#" + vQUAL_TXTBOXselector).css("display", "inline");

                        break;
                    case 100000001:
                        //$("#" + vQuantSpan).show();
                        //$("#" + vQualSpan).hide();
                        $("#" + vMETRICOPERATORselector).css("display", "inline");
                        $("#" + vMETRICselector).css("display", "inline").val(tri_Metric).spinner({ step: 1.00, numberFormat: "n" });
                        GetSetTargetMetricOperator(tri_vitalsvaluetypeid, tri_MetricOperator, "personalize");
                        if (tri_range == true) {
                            $("#" + vMetricANDSelector).css("display", "inline");
                            $("#" + vMETRICOPERATORselectorTwo).css("display", "inline");
                            $("#" + vMETRICselectorTwo).css("display", "inline").val(tri_targetvaluetwo).spinner({ step: 1.00, numberFormat: "n" });
                            GetSetTargetMetricOperatorTwo(tri_vitalsvaluetypeid, tri_metricoperatortwo, "personalize");
                        }

                        break;
                    case null:

                        break;
                }

                $("#" + vMULTIPLIER_NORMALselector).val(tri_activityrecurrencemultipliernormal);//append  metric
                $("#" + vMULTIPLIER_NORMALselector).spinner();//append  metric
                if (tri_activityrecurrence === 167410007) {
                    $("#" + vMULTIPLIER_NORMALselector).hide();
                }

                $("#" + vMULTIPLIER_ABNORMALselector).val(tri_activityrecurrencemultiplierabnormal);//append  metric
                $("#" + vMULTIPLIER_ABNORMALselector).spinner();//append  metric
                if (tri_activityrecurrenceabnormal === 167410007) {
                    $("#" + vMULTIPLIER_ABNORMALselector).hide();
                }

                $("#" + vQUAL_ACTIONselector).val(tri_qualitativeaction).prop('readonly', true);//append  metric, make readonly and change  background color to grey


                GetSetFreqOsetNormal(tri_vitalsvaluetypeid, tri_activityrecurrence, "personalize");
                GetSetFreqOsetAbnormal(tri_vitalsvaluetypeid, tri_activityrecurrenceabnormal, "personalize");
                //GetSetTargetMetricOperator(tri_vitalsvaluetypeid, tri_MetricOperator, "personalize");
                //GetSetTargetMetricOperatorTwo(tri_vitalsvaluetypeid, tri_metricoperatortwo, "personalize");
            },
            function (error) {
                alert(error.message);
            }
        );
    }

    

    //$("#" + vMETRICselector).val(tri_qualitativetarget);//append  metric

    //GetSetAssgnmntRoleOset(tri_vitalsvaluetypeid, tri_activityassignmentrole);
},
function (error) {
    alert(error.message);
},
function () {
    //On Complete - Do Something
}
);
    }//if condition closes here
}

$(document).on('click', '.dropdown-menu li', function () {
    var vParentUL = $(this).parent('ul').attr('id');
    var vModId = $(this).attr('id');

    if (vParentUL !== null && vParentUL !== undefined) {
        var vULguid = vParentUL.substr(vParentUL.indexOf("_"), vParentUL.length);
        var vBTNid = "";
        //alert(vULguid);
        switch (vULguid) {
            case "_UL":
                vBTNid = vParentUL.replace(vULguid, "_BTN");
                var vVitalTypeId = vParentUL.replace("_UL", "");

                if (parent.Xrm !== undefined) {
                    var contactId = parent.Xrm.Page.data.entity.getId();
                }

                GetGoalForCurrentModifier(vModId, vVitalTypeId, contactId, $(this).text(), "personalize");

                //$("#" + vBTNid).text($(this).text());
                //$("#" + vBTNid).val($(this).text());
                break;
            case "_ULPRNLGOAL":
                var vThisLiId = ($(this).attr('id'));
                switch (vThisLiId) {
                    case "ULPRNLGOAL_OPEN":
                        $('.personalizegoalbutton').text("Open");
                        $('.personalizegoalbutton').val("Open");
                        $('.indicator-line,.flag-box-big').addClass("orange").removeClass("red grey green blue");
                        break;
                    case "ULPRNLGOAL_MET":
                        $('.personalizegoalbutton').text("Met");
                        $('.personalizegoalbutton').val("Met");
                        $('.indicator-line,.flag-box-big').addClass("green").removeClass("red grey orange blue");
                        break;
                    case "ULPRNLGOAL_NOTMET":
                        $('.personalizegoalbutton').text("Not Met");
                        $('.personalizegoalbutton').val("Not Met");
                        $('.indicator-line,.flag-box-big').addClass("red").removeClass("orange grey green blue");
                        break;
                    case "ULPRNLGOAL_CLOSED":
                        $('.personalizegoalbutton').text("Closed, Cancelled");
                        $('.personalizegoalbutton').val("Closed, Cancelled");
                        $('.indicator-line,.flag-box-big').addClass('orange').removeClass("red grey green blue");
                        break;
                }
                break;
            case "_PRSNLUL":
                vBTNid = vParentUL.replace(vULguid, "_BTN");
                var vVitalTypeId = vParentUL.replace("_PRSNLUL", "");

                if (parent.Xrm !== undefined) {
                    var contactId = parent.Xrm.Page.data.entity.getId();
                }

                GetGoalForCurrentModifier(vModId, vVitalTypeId, contactId, $(this).text(), "personalize");

                //$("#" + vBTNid).text($(this).text());
                //$("#" + vBTNid).val($(this).text());
                break;
            case "_ULPRSNL":
                //vBTNid = vParentUL.replace(vULguid, "_BTN");
                var vVitalTypeId = vParentUL.replace("_ULPRSNL", "");

                if (parent.Xrm !== undefined) {
                    var contactId = parent.Xrm.Page.data.entity.getId();
                }
                var vStrippedModId = vModId.replace("_LIPRSNLN", "");
                //alert(vStrippedModId);
                GetGoalForCurrentModifier(vStrippedModId, vVitalTypeId, contactId, $(this).text(), "window");

                //$('.personalizemodifierbutton').text($(this).text());
                //$('.personalizemodifierbutton').val($(this).text());
                break;
            case "_MTRCOPRTRUL":
                vBTNid = vParentUL.replace(vULguid, "_MTRCOPRTRBTN");

                $("#" + vBTNid).text($(this).text());
                $("#" + vBTNid).val($(this).text());
                break;
            case "_MTRCOPRTRULTWO":
                vBTNid = vParentUL.replace(vULguid, "_MTRCOPRTRBTNTWO");

                $("#" + vBTNid).text($(this).text());
                $("#" + vBTNid).val($(this).text());
                break;
            case "_FRQNRMLUL":
                vBTNid = vParentUL.replace(vULguid, "_FRQNRMLBTN");

                $("#" + vBTNid).text($(this).text());
                $("#" + vBTNid).val($(this).text());

                if ($(this).text() === "Every Encounter") {
                    $("#" + vParentUL.replace(vULguid, "") + "_MULTIPLIER_NORMAL").hide();
                } else {
                    $("#" + vParentUL.replace(vULguid, "") + "_MULTIPLIER_NORMAL").show();
                }
                //$("#" + vBTNid).spinner();
                break;
            case "_FRQABNRMLUL":
                vBTNid = vParentUL.replace(vULguid, "_FRQABNRMLBTN");

                $("#" + vBTNid).text($(this).text());
                $("#" + vBTNid).val($(this).text());
                if ($(this).text() === "Every Encounter") {
                    $("#" + vParentUL.replace(vULguid, "") + "_MULTIPLIER_ABNORMAL").hide();
                } else {
                    $("#" + vParentUL.replace(vULguid, "") + "_MULTIPLIER_ABNORMAL").show();
                }
                //$("#" + vBTNid).spinner();
                break;
            case "_ASSGNROLEUL":
                vBTNid = vParentUL.replace(vULguid, "_ASSGNROLEBTN");

                $("#" + vBTNid).text($(this).text());
                $("#" + vBTNid).val($(this).text());
                break;
            case "_PRSNLULNRMLRCR":
                // vBTNid = vParentUL.replace(vULguid, "_ASSGNROLEBTN");

                $('.personalizerecurrnormal').text($(this).text());
                $('.personalizerecurrnormal').val($(this).text());

                if ($(this).text() === "Every Encounter") {
                    $('.personalizenormalmultiplier').hide();
                } else {
                    $('.personalizenormalmultiplier').show();
                }
                break;
            case "_PRSNLULABNRMLRCR":
                //vBTNid = vParentUL.replace(vULguid, "_ASSGNROLEBTN");

                $('.personalizerecurrabnormal').text($(this).text());
                $('.personalizerecurrabnormal').val($(this).text());
                if ($(this).text() === "Every Encounter") {
                    $('.personalizeabnormalmultiplier').hide();
                } else {
                    $('.personalizeabnormalmultiplier').show();
                }

                break;
            case "_PRSNLULOPRTR":
                //vBTNid = vParentUL.replace(vULguid, "_ASSGNROLEBTN");

                $('.personalizeoperator').text($(this).text());
                $('.personalizeoperator').val($(this).text());
                break;
            case "_PRSNLULOPRTR1":
                $('.personalizeoperatorOne').text($(this).text());
                $('.personalizeoperatorOne').val($(this).text());
                break;
            case "_PRSNLULOPRTR2":
                $('.personalizeoperatorTwo').text($(this).text());
                $('.personalizeoperatorTwo').val($(this).text());
                break;
        }

        // enabling save buttons on dropdown change
        var inputId = $(this).parent().prev()[0].id;
        //EnableSaveChangesButton(inputId);
        AddVitaTypeToSave(inputId);
        IsDataChanged = true;

        if ((this.id.indexOf("_LIPRSNLN") > -1) || (inputId.indexOf("_BTN") > -1)) {
            IsObservedValueAndFactorModifierChanged = true;
        }
        else {
            IsOtherValuesChanged = true;
        }
    }
});

function GetSetTargetMetricOperator(tri_vitalsvaluetypeid, Vmetricoperator,strWrapper) {
    if (tri_vitalsvaluetypeid !== null && Vmetricoperator !== null) {
         
        var vBTNselector = tri_vitalsvaluetypeid + "_MTRCOPRTRBTN";
               
        switch (Vmetricoperator) {
            case 167410000:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text(">");
                    $("#" + vBTNselector).val(167410000);
                };
                if (strWrapper === "window") {
                    $('.personalizeoperatorOne').text(">");
                    $('.personalizeoperatorOne').val(167410000);
                };
                
                break;
            case 167410001:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("<");
                    $("#" + vBTNselector).val(167410001);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorOne').text("<");
                    $('.personalizeoperatorOne').val(167410001);
                }
                break;
            case 167410002:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("=");
                    $("#" + vBTNselector).val(167410002);
                };
                if (strWrapper === "window") {
                    $('.personalizeoperatorOne').text("=")
                    $('.personalizeoperatorOne').val(167410002);
                }
                break;
            case 167410003:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("% Increase");
                    $("#" + vBTNselector).val(167410003);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorOne').text("% Increase");
                    $('.personalizeoperatorOne').val(167410003);
                }
                break;
            case 167410004:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("% Decrease");
                    $("#" + vBTNselector).val(167410004);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorOne').text("% Decrease");
                    $('.personalizeoperatorOne').val(167410004);
                }
                break;
            case 167410005:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text(">=");
                    $("#" + vBTNselector).val(167410005);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorOne').text(">=");
                    $('.personalizeoperatorOne').val(167410005);
                }
                break;
            case 167410006:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("<=");
                    $("#" + vBTNselector).val(167410006);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorOne').text("<=");
                    $('.personalizeoperatorOne').val(167410006);
                }
                break;

        }
    }
};

function GetSetTargetMetricOperatorTwo(tri_vitalsvaluetypeid, Vmetricoperator, strWrapper) {

    if (tri_vitalsvaluetypeid !== null && Vmetricoperator !== null) {

        var vBTNselector = tri_vitalsvaluetypeid + "_MTRCOPRTRBTNTWO";

        switch (Vmetricoperator) {
            case 167410000:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text(">");
                    $("#" + vBTNselector).val(167410000);
                };
                if (strWrapper === "window") {
                    $('.personalizeoperatorTwo').text(">");
                    $('.personalizeoperatorTwo').val(167410000);
                };

                break;
            case 167410001:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("<");
                    $("#" + vBTNselector).val(167410001);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorTwo').text("<");
                    $('.personalizeoperatorTwo').val(167410001);
                }
                break;
            case 167410002:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("=");
                    $("#" + vBTNselector).val(167410002);
                };
                if (strWrapper === "window") {
                    $('.personalizeoperatorTwo').text("=");
                    $('.personalizeoperatorTwo').val(167410002);
                }
                break;
            case 167410003:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("% Increase");
                    $("#" + vBTNselector).val(167410003);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorTwo').text("% Increase");
                    $('.personalizeoperatorTwo').val(167410003);
                }
                break;
            case 167410004:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("% Decrease");
                    $("#" + vBTNselector).val(167410004);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorTwo').text("% Decrease");
                    $('.personalizeoperatorTwo').val(167410004);
                }
                break;
            case 167410005:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text(">=");
                    $("#" + vBTNselector).val(167410005);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorTwo').text(">=");
                    $('.personalizeoperatorTwo').val(167410005);
                }
                break;
            case 167410006:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("<=");
                    $("#" + vBTNselector).val(167410006);
                }
                if (strWrapper === "window") {
                    $('.personalizeoperatorTwo').text("<=");
                    $('.personalizeoperatorTwo').val(167410006);
                }
                break;

        }
    }
};

function GetSetFreqOsetNormal(tri_vitalsvaluetypeid, VFreqOSVal,strWrapper) {

    if (tri_vitalsvaluetypeid !== null && VFreqOSVal !== null) {

        if (strWrapper === "personalize") {
            $("#" + tri_vitalsvaluetypeid + "_MULTIPLIER_NORMAL").show();
        }
        else if (strWrapper === "window") {
            $('.personalizenormalmultiplier').show();
        }
        var vBTNselector = tri_vitalsvaluetypeid + "_FRQNRMLBTN";
        switch (VFreqOSVal) {
            case 1:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Day");
                    $("#" + vBTNselector).val(1);
                };
                break;
                if (strWrapper === "window") {
                    $('.personalizerecurrnormal').text("Day");
                    $('.personalizerecurrnormal').val(1);
                };
            case 167410000:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Week");
                    $("#" + vBTNselector).val(167410000);
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrnormal').text("Week");
                    $('.personalizerecurrnormal').val(167410000);
                };
                break;
            case 167410002: if (strWrapper === "personalize") {
                $("#" + vBTNselector).text("Month");
                $("#" + vBTNselector).val(167410002);
            };
                if (strWrapper === "window") {
                    $('.personalizerecurrnormal').text("Month");
                    $('.personalizerecurrnormal').val(167410002);
                };
                break;
            case 167410003:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Quarter");
                    $("#" + vBTNselector).val(167410003);
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrnormal').text("Quarter");
                    $('.personalizerecurrnormal').val(167410003);
                };
                break;
            case 167410005:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Year");
                    $("#" + vBTNselector).val(167410005);
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrnormal').text("Year");
                    $('.personalizerecurrnormal').val(167410005);
                };

                break;
            case 167410007:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Every Encounter");
                    $("#" + vBTNselector).val(167410007);
                    $("#" + tri_vitalsvaluetypeid + "_MULTIPLIER_NORMAL").hide();
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrnormal').text("Every Encounter");
                    $('.personalizerecurrnormal').val(167410007);
                    $('.personalizenormalmultiplier').hide();
                };
                break;
        }
    };
}

function GetSetFreqOsetAbnormal(tri_vitalsvaluetypeid, VFreqOSVal,strWrapper) {

    if (tri_vitalsvaluetypeid !== null && VFreqOSVal !== null) {
       
        if (strWrapper === "personalize") {
            $("#" + tri_vitalsvaluetypeid + "_MULTIPLIER_ABNORMAL").show();
        }
        else if (strWrapper === "window")
        {
            $('.personalizeabnormalmultiplier').show();
        }

        var vBTNselector = tri_vitalsvaluetypeid + "_FRQABNRMLBTN";
        switch (VFreqOSVal) {
            case 1:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Day");
                    $("#" + vBTNselector).val(1);
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrabnormal').text("Day");
                    $('.personalizerecurrabnormal').val(1);
                };
                break;

            case 167410000:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Week");
                    $("#" + vBTNselector).val(167410000);
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrabnormal').text("Week");
                    $('.personalizerecurrabnormal').val(167410000);
                };
                break;
            case 167410002: if (strWrapper === "personalize") {
                $("#" + vBTNselector).text("Month");
                $("#" + vBTNselector).val(167410002);
            };
                if (strWrapper === "window") {
                    $('.personalizerecurrabnormal').text("Month");
                    $('.personalizerecurrabnormal').val(167410002);
                };
                break;
            case 167410003:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Quarter");
                    $("#" + vBTNselector).val(167410003);
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrabnormal').text("Quarter");
                    $('.personalizerecurrabnormal').val(167410003);
                };
                break;
            case 167410005:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Year");
                    $("#" + vBTNselector).val(167410005);
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrabnormal').text("Year");
                    $('.personalizerecurrabnormal').val(167410005);
                };

                break;
            case 167410007:
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).text("Every Encounter");
                    $("#" + vBTNselector).val(167410007);
                    $("#" + tri_vitalsvaluetypeid + "_MULTIPLIER_ABNORMAL").hide();
                };
                if (strWrapper === "window") {
                    $('.personalizerecurrabnormal').text("Every Encounter");
                    $('.personalizerecurrabnormal').val(167410007);
                    $('.personalizeabnormalmultiplier').hide();
                };
                break;

        }
    };
}

function GetSetAssgnmntRoleOset(tri_vitalsvaluetypeid, VRoleOSVal,strWrapper) {
    if (tri_vitalsvaluetypeid !== null && VRoleOSVal !== null) {

        var vBTNselector = tri_vitalsvaluetypeid + "_ASSGNROLEBTN";

        switch (VRoleOSVal) {
            
            case 167410000:
                $("#" + vBTNselector).text("Care Manager");
                $("#" + vBTNselector).val(167410000);
                break;
            case 167410001:
                $("#" + vBTNselector).text("Nurse");
                $("#" + vBTNselector).val(167410001);
                break;
            case 167410002:
                $("#" + vBTNselector).text("Dietician");
                $("#" + vBTNselector).val(167410002);
                break;
            case 167410003:
                $("#" + vBTNselector).text("Care Navigator");
                $("#" + vBTNselector).val(167410003);
                break;
            case 100000000:
                $("#" + vBTNselector).text("Physiatrist");
                $("#" + vBTNselector).val(100000000);
                break;
            case 100000001:
                $("#" + vBTNselector).text("Cardiologist");
                $("#" + vBTNselector).val(100000001);
                break;
            case 100000002:
                $("#" + vBTNselector).text("Physician");
                $("#" + vBTNselector).val(100000002);
                break;
            

        }
    };
}

function GetGoalForCurrentModifier(vModId, tri_vitalsvaluetypeid, contactId,currText,strWrapper) {

    var vBTNselector = tri_vitalsvaluetypeid + "_BTN";
    var vMETRICselector = tri_vitalsvaluetypeid + "_METRIC";
    var vMETRICselectorTwo = tri_vitalsvaluetypeid + "_TARGETVALTWO";
       var vMETRICOPERATORselector = tri_vitalsvaluetypeid + "_MTRCOPRTRBTN";
    var vMETRICOPERATORselectorTwo = tri_vitalsvaluetypeid + "_MTRCOPRTRBTNTWO";
    var vMULTIPLIER_NORMALselector = tri_vitalsvaluetypeid + "_MULTIPLIER_NORMAL";
    var vMULTIPLIER_ABNORMALselector = tri_vitalsvaluetypeid + "_MULTIPLIER_ABNORMAL";
    var vQUAL_ACTIONselector = tri_vitalsvaluetypeid + "_QUAL_ACTION";
    var vVitalFactorQUALITATIVEId = tri_vitalsvaluetypeid + "_QUALITATIVETXT";
    var vMetricANDSelector = tri_vitalsvaluetypeid + "_AND";
    var ModIdStr = "";
    var ButtonText = "";
    if (tri_vitalsvaluetypeid !== undefined && tri_vitalsvaluetypeid !== null && tri_vitalsvaluetypeid.length > 0 && vModId !== undefined && vModId !== null && vModId.length > 0) {

        SDK.JQuery.retrieveMultipleRecords(
"tri_cccareplangoal",
 "?$select=tri_actiontriggermetricoperator,tri_actiontriggervalue,tri_activityassignmentrole,tri_activitydescription,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_activityrecurrencemultipliernormal,tri_CarePlanGoalState,tri_cccareplangoalId,tri_GoalSection,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_PatientID,tri_PatientModifierId,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + contactId + "') and tri_vitalsvaluetype/Id eq (guid'" + tri_vitalsvaluetypeid + "') and tri_PatientModifierId/Id eq (guid'" + vModId + "')",
function (results) {
    if (results.length > 0) {
        for (var i = 0; i < results.length; i++) {
            var tri_actiontriggermetricoperator = results[i].tri_actiontriggermetricoperator;
            var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
            var tri_activityassignmentrole = results[i].tri_activityassignmentrole;
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_activityrecurrencemultipliernormal = results[i].tri_activityrecurrencemultipliernormal;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;
            var tri_GoalSection = results[i].tri_GoalSection;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_PatientID = results[i].tri_PatientID;
            var tri_PatientModifierId = results[i].tri_PatientModifierId;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
        }

        SDK.JQuery.retrieveRecord(
           tri_PatientModifierId.Id,
            "tri_patientmodifier",
            "tri_name",
            null,
            function (result) {
                var tri_name = result.tri_name;
                if (strWrapper === "personalize") {
                    $("#" + vBTNselector).html(tri_name);//append  modifier
                };
                if (strWrapper === "window") {
                    $('.personalizemodifierbutton').html(tri_name);//append  modifier
                };

                switch (tri_typeofgoalcode) {
                    case 100000000:
                        if (strWrapper === "personalize") {

                            $("#" + tri_vitalsvaluetypeid + "_QUANTSPAN").hide();//////////////////////
                            $("#" + tri_vitalsvaluetypeid + "_QUALSPAN").show();////////////////////

                            $("#" + vVitalFactorQUALITATIVEId).val(tri_qualitativetarget);
                            $("#" + vVitalFactorQUALITATIVEId).css("display", "inline");
                        };
                        if (strWrapper === "window") {

                            $(".personalizequantitative").hide();//////////////////////
                            $(".personalizequalitative").show();////////////////////
                            $("#tbl_ObservedValue").show();////////////////////

                            $('.personalizetargetvalQual').val(tri_qualitativetarget).prop('readonly', true); //.addClass('qualitative').removeClass('quantitative');
                        };

                        break;
                    case 100000001:
                        if (strWrapper === "personalize") {
                            $("#" + tri_vitalsvaluetypeid + "_QUALSPAN").hide();/////////////////////////////
                            $("#" + tri_vitalsvaluetypeid + "_QUANTSPAN").show();//////////////////////////////

                            $("#" + vMETRICOPERATORselector).css("display", "inline");
                            $("#" + vMETRICselector).css("display", "inline").val(tri_Metric).spinner({ step: 1.00, numberFormat: "n" });
                            GetSetTargetMetricOperator(tri_vitalsvaluetype, tri_MetricOperator, "personalize");
                            if (tri_range == true) {
                                $("#" + vMetricANDSelector).css("display", "inline");
                                $("#" + vMETRICOPERATORselectorTwo).css("display", "inline");
                                $("#" + vMETRICselectorTwo).css("display", "inline").val(tri_targetvaluetwo).spinner({ step: 1.00, numberFormat: "n" });
                                GetSetTargetMetricOperatorTwo(tri_vitalsvaluetype, tri_metricoperatortwo, "personalize");
                            }
                        }
                        if (strWrapper === "window") {
                            $(".personalizequalitative").hide();//////////////////////
                            $("#tbl_ObservedValue").hide();////////////////////
                            $(".personalizequantitative").show();////////////////////

                            $('.personalizetargetvalMetric').val(tri_Metric);//.spinner({ step: 1.00, numberFormat: "n" });
                            $('.personalizetargetvalMetricTwo').val(tri_targetvaluetwo);//.spinner({ step: 1.00, numberFormat: "n" });
                            GetSetTargetMetricOperator(tri_vitalsvaluetypeid, tri_MetricOperator, "window");
                            GetSetTargetMetricOperatorTwo(tri_vitalsvaluetypeid, tri_metricoperatortwo, "window");
                        };
                        break;
                    case null:
                        if (strWrapper === "personalize") {
                            $("#" + tri_vitalsvaluetypeid + "_QUANTSPAN").hide();//////////////////////
                            $("#" + tri_vitalsvaluetypeid + "_QUALSPAN").show();////////////////////
                            $("#tbl_ObservedValue").show();////////////////////

                            $("#" + vMETRICselector).val(tri_qualitativetarget).addClass('qualitative').removeClass('quantitative');
                            $("#" + vMETRICOPERATORselector).hide();
                        };
                        if (strWrapper === "window") {

                            $(".personalizequantitative").hide();//////////////////////
                            $(".personalizequalitative").show();////////////////////

                            $('.personalizetargetvalQual').val(tri_qualitativetarget).prop('readonly', true);//.addClass('qualitative').removeClass('quantitative');
                        };
                        break;
                }
            },
            function (error) {
                alert(error.message);
            }
        );

        // $("#" + vMETRICselector).val(tri_qualitativetarget);//append  metric
        if (strWrapper === "personalize") {
            $("#" + vMULTIPLIER_NORMALselector).val(tri_activityrecurrencemultipliernormal);//append  metric
            $("#" + vMULTIPLIER_NORMALselector).spinner();//append  metric
            $("#" + vMULTIPLIER_ABNORMALselector).val(tri_activityrecurrencemultiplierabnormal);//append  metric
            $("#" + vMULTIPLIER_ABNORMALselector).spinner();//append  metric
            $("#" + vQUAL_ACTIONselector).val(tri_qualitativeaction).prop('readonly', true);//append  metric, make readonly and change  background color to grey
        }
        if (strWrapper === "window") {
            $('.personalizenormalmultiplier').val(tri_activityrecurrencemultipliernormal);//append  metric
            $('.personalizeabnormalmultiplier').val(tri_activityrecurrencemultiplierabnormal);//append  metric
            $('.personalizetriggeraction').val(tri_qualitativeaction).prop('readonly', true);//append  metric, make readonly and change  background color to grey
        }
        if (strWrapper === "personalize") {
            GetSetFreqOsetNormal(tri_vitalsvaluetypeid, tri_activityrecurrence, "personalize");
            GetSetFreqOsetAbnormal(tri_vitalsvaluetypeid, tri_activityrecurrenceabnormal, "personalize");
        }
        if (strWrapper === "window") {
            GetSetFreqOsetNormal(tri_vitalsvaluetypeid, tri_activityrecurrence, "window");
            GetSetFreqOsetAbnormal(tri_vitalsvaluetypeid, tri_activityrecurrenceabnormal, "window");
        }
    }
    else {
        alert("No Goals for this Modifier");
    }
},
function (error) {
    alert("There are no Goals for this Modifier");
},
function () {
    //On Complete - Do Something
}
);
    }//if condition closes here

}

function AcknowledgementDialog() {
    if (IsOtherValuesChanged) {
        $("#alert-wrapper").dialog({
            //  title: "jQuery Dialog Popup",
            modal: true,
            width: 400,
            position: { my: "center top", at: "center top" },
            show: { effect: "blind", duration: 800 },
            hide: { effect: "blind", duration: 400 },
        });
    }
    else if(IsObservedValueAndFactorModifierChanged){
        SaveData();
    }
    else if (!IsObservedValueAndFactorModifierChanged && !IsOtherValuesChanged) {
        SaveData();
    }
}

$(document).on('click', '.greybtn-alert', function () {
    $("#alert-wrapper").dialog('close');
});

$(document).on('click', '.bluebtn-alert', function () {
    $("#alert-wrapper").dialog('close');
    SaveData();
});

function SaveData() {
    IsObservedValueAndFactorModifierChanged = false;
    IsOtherValuesChanged = false;

    if (saveCliced == true) {
        saveCliced = false;
        OnSaveClicked();
    } else if (saveprsnlizeCliced == true) {
        saveprsnlizeCliced = false;
        OnSavePrsnlizeClicked();
    }

}

$(document).on('click', '.savebtn', function () {
    saveCliced = true;
    AcknowledgementDialog();
});

$(document).on('click', '.savebtn_prsnlize1', function () {
    saveprsnlizeCliced = true;
    AcknowledgementDialog();
});

function OnSaveClicked() {
    var PatientId1 = parent.Xrm.Page.data.entity.getId();
    var PatientId2 = PatientId1.replace("{", "");
    var PatientId = PatientId2.replace("}", "");
    if (PatientId !== null && PatientId !== undefined && PatientId !== 0 && vitalTypeToSaveArray.length === 0) {
        ClosePersonalizeWindow(PatientId);
    }

    for (i = 0; i < vitalTypeToSaveArray.length; i++) {
        var vModfrName = $("#" + vitalTypeToSaveArray[i] + "_BTN").text();
        var vMetricOprtrTxt = $("#" + vitalTypeToSaveArray[i] + "_MTRCOPRTRBTN").text();
        var vTargetValueTxt = $("#" + vitalTypeToSaveArray[i] + "_METRIC").val();

        var vFreqNormalTxt = $("#" + vitalTypeToSaveArray[i] + "_FRQNRMLBTN").text();
        var vFreqAbNormalTxt = $("#" + vitalTypeToSaveArray[i] + "_FRQABNRMLBTN").text();
        //var vAssignmentRoleTxt = $("#" + vitalTypeToSaveArray[i] + "_ASSGNROLEBTN").text();
        var vMultiplierNormalTxt = $("#" + vitalTypeToSaveArray[i] + "_MULTIPLIER_NORMAL").val();
        var vMultiplierAbormalTxt = $("#" + vitalTypeToSaveArray[i] + "_MULTIPLIER_ABNORMAL").val();

        var vTargetValue2Txt = $("#" + vitalTypeToSaveArray[i] + "_TARGETVALTWO").val();
        var vQualTxt = $("#" + vitalTypeToSaveArray[i] + "_QUALITATIVETXT").val();
        var vMetricOprtr2Txt = $("#" + vitalTypeToSaveArray[i] + "_MTRCOPRTRBTNTWO").text();

        if (parent.Xrm !== undefined) {
            var contactId = parent.Xrm.Page.data.entity.getId();
        }
        var vOsetValMetricOperator = "";
        if (vMetricOprtrTxt !== null && vMetricOprtrTxt !== "") {
            vOsetValMetricOperator = GetOsetValFromTextMtrcOprtr(vMetricOprtrTxt);
        }
        var vOsetValMetricOperator2 = "";
        if (vMetricOprtr2Txt !== null && vMetricOprtr2Txt !== "") {
            vOsetValMetricOperator2 = GetOsetValFromTextMtrcOprtr2(vMetricOprtr2Txt);
        }

        var vOsetValFreqNormal = "";
        if (vFreqNormalTxt !== null && vFreqNormalTxt !== "") {
            vOsetValFreqNormal = GetOsetValFromTextFreqNormal(vFreqNormalTxt);
        };

        var vOsetValFreqAbNormal = "";
        if (vFreqAbNormalTxt !== null && vFreqAbNormalTxt !== "") {
            vOsetValFreqAbNormal = GetOsetValFromTextFreqAbNormal(vFreqAbNormalTxt);
        };

        GetModfrIdFromName(vitalTypeToSaveArray[i], contactId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, "", vMultiplierNormalTxt, vMultiplierAbormalTxt, vTargetValue2Txt, vQualTxt, vOsetValMetricOperator2, "");
        if (i === vitalTypeToSaveArray.length - 1) {
            lastVitalId = vitalTypeToSaveArray[i];
        }
    }
    vitalTypeToSaveArray.length = 0;
    IsPersonalizeClosed = true;
}

function OnSavePrsnlizeClicked() {

    var vVitalTypIdStr1 = $('.savebtn_prsnlize1').attr('id');
    var vVitalTypId1 = vVitalTypIdStr1.replace("_PRSNLSAVEBTN", "");
    var vModfrName1 = $('.personalizemodifierbutton').text();
    var vMetricOprtrTxt1 = $('.personalizeoperatorOne').text();
    var vTargetValueTxt1 = $('.personalizetargetvalMetric').val();
    var vFreqNormalTxt1 = $('.personalizerecurrnormal').text();
    var vFreqAbNormalTxt1 = $('.personalizerecurrabnormal').text();
    var vMultiplierNormalTxt1 = $('.personalizenormalmultiplier').val();
    var vMultiplierAbormalTxt1 = $('.personalizeabnormalmultiplier').val();

    var vTargetValue2Txt1 = $('.personalizetargetvalMetricTwo').val();
    var vQualTxt1 = $('.personalizetargetvalQual').val();
    var vMetricOprtr2Txt1 = $('.personalizeoperatorTwo').text();
    var vGoalStateTxt1 = $('.personalizegoalbutton').text();
    var vobservedValue = $('#observedValue').val();
    var vLastResultDate = new Date();

    //alert(vGoalStateTxt1);
    if (parent.Xrm !== undefined) {
        var contactId1 = parent.Xrm.Page.data.entity.getId();
    };

    var vOsetValMetricOperator1 = "";
    if (vMetricOprtrTxt1 !== null && vMetricOprtrTxt1 !== "") {
        vOsetValMetricOperator1 = GetOsetValFromTextMtrcOprtr(vMetricOprtrTxt1);
    }
    var vOsetValMetricOperator21 = "";
    if (vMetricOprtr2Txt1 !== null && vMetricOprtr2Txt1 !== "") {
        vOsetValMetricOperator21 = GetOsetValFromTextMtrcOprtr2(vMetricOprtr2Txt1);
    }

    var vOsetValFreqNormal1 = "";
    if (vFreqNormalTxt1 !== null && vFreqNormalTxt1 !== "") {
        vOsetValFreqNormal1 = GetOsetValFromTextFreqNormal(vFreqNormalTxt1);
    };

    var vOsetValFreqAbNormal1 = "";
    if (vFreqAbNormalTxt1 !== null && vFreqAbNormalTxt1 !== "") {
        vOsetValFreqAbNormal1 = GetOsetValFromTextFreqAbNormal(vFreqAbNormalTxt1);
    };

    var vOsetValGoalState1 = "";
    if (vGoalStateTxt1 !== null && vGoalStateTxt1 !== "") {
        vOsetValGoalState1 = GetOsetValFromTextGoalState(vGoalStateTxt1);
    };

    GetModfrIdFromName(vVitalTypId1, contactId1, vModfrName1, vOsetValMetricOperator1, vTargetValueTxt1, vOsetValFreqNormal1, vOsetValFreqAbNormal1, "", vMultiplierNormalTxt1, vMultiplierAbormalTxt1, vTargetValue2Txt1, vQualTxt1, vOsetValMetricOperator21, vOsetValGoalState1, vobservedValue, vLastResultDate);
    lastVitalId = vVitalTypId1;
    IsDataChanged = false;
    IsWindowsWrapperClosed = true;
}

function GetModfrIdFromName(vVitalTypId, contactId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, vOsetValAssignmentRole, vMultiplierNormalTxt, vMultiplierAbormalTxt, vTargetValue2Txt, vQualTxt, vOsetValMetricOperator2, vOsetValGoalState,vobservedValue,vLastResultDate) {
   var vModfrIdStr;
 // alert("hello")
    SDK.REST.retrieveMultipleRecords(
    "tri_patientmodifier",
    "?$select=tri_name,tri_patientmodifierId,tri_VitalValueTypeId&$filter=tri_name eq '" + vModfrName + "'",
    function (results) {
        //alert(results.length);
        for (var i = 0; i < results.length; i++) {
            var tri_name = results[i].tri_name;
            var tri_patientmodifierId = results[i].tri_patientmodifierId;
            var tri_VitalValueTypeId = results[i].tri_VitalValueTypeId.Id;
           // alert(tri_VitalValueTypeId + "===" + vVitalTypId);
            if (tri_VitalValueTypeId === vVitalTypId && tri_patientmodifierId !== undefined && tri_patientmodifierId !== null && tri_patientmodifierId.length>0) {
                vModfrIdStr = tri_patientmodifierId;
                
                UpdateCarePlanJoin(vVitalTypId, contactId, tri_patientmodifierId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, vOsetValAssignmentRole, vMultiplierNormalTxt, vMultiplierAbormalTxt, vTargetValue2Txt, vQualTxt, vOsetValMetricOperator2, vOsetValGoalState,vobservedValue,vLastResultDate);
            };
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
   // return vModfrIdStr;
}

function GetOsetValFromTextMtrcOprtr(vMetricOprtrTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

     if (vMetricOprtrTxt !== null && vMetricOprtrTxt.length > 0) {
         switch (vMetricOprtrTxt) {
             case ">":
                 OprtrVal = "167410000";
                 break;
             case "<":
                 OprtrVal = "167410001";
                 break;
             case "=":
                 OprtrVal = "167410002";
                 break;
             case "% Increase":
                 OprtrVal = "167410003";
                 break;
             case "% Decrease":
                 OprtrVal = "167410004";
                 break;
             case ">=":
                 OprtrVal = "167410005";
                 break;
             case "<=":
                 OprtrVal = "167410006";
                 break;
         }
     }
     else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function GetOsetValFromTextMtrcOprtr2(vMetricOprtr2Txt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vMetricOprtr2Txt !== null && vMetricOprtr2Txt.length > 0) {
        switch (vMetricOprtr2Txt) {
            case ">":
                OprtrVal = "167410000";
                break;
            case "<":
                OprtrVal = "167410001";
                break;
            case "=":
                OprtrVal = "167410002";
                break;
            case "% Increase":
                OprtrVal = "167410003";
                break;
            case "% Decrease":
                OprtrVal = "167410004";
                break;
            case ">=":
                OprtrVal = "167410005";
                break;
            case "<=":
                OprtrVal = "167410006";
                break;
        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function GetOsetValFromTextFreqNormal(vFreqNormalTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vFreqNormalTxt !== null && vFreqNormalTxt.length > 0) {
        switch (vFreqNormalTxt) {
            case "Day":
                OprtrVal = "1";
                break;
            case "Week":
                OprtrVal = "167410000";
                break;
            //case "Bi-Week":
            //    OprtrVal = "167410001";
            //    break;
            case "Month":
                OprtrVal = "167410002";
                break;
            case "Quarter":
                OprtrVal = "167410003";
                break;
            //case "Every 6 Months":
            //    OprtrVal = "167410004";
            //    break;
            case "Year":
                OprtrVal = "167410005";
                break;
            //case "3 times a day":
            //    OprtrVal = "167410006";
            //    break;
            case "Every Encounter":
                OprtrVal = "167410007";
                break;
        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function GetOsetValFromTextFreqAbNormal(vFreqAbNormalTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vFreqAbNormalTxt !== null && vFreqAbNormalTxt.length > 0) {
        switch (vFreqAbNormalTxt) {
            case "Day":
                OprtrVal = "1";
                break;
            case "Week":
                OprtrVal = "167410000";
                break;
            //case "Bi-Week":
            //    OprtrVal = "167410001";
            //    break;
            case "Month":
                OprtrVal = "167410002";
                break;
            case "Quarter":
                OprtrVal = "167410003";
                break;
            //case "Every 6 Months":
            //    OprtrVal = "167410004";
            //    break;
            case "Year":
                OprtrVal = "167410005";
                break;
            //case "3 times a day":
            //    OprtrVal = "167410006";
            //    break;
            case "Every Encounter":
                OprtrVal = "167410007";
                break;
        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function GetOsetValFromTextAssignmentRole(vAssignmentRoleTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vAssignmentRoleTxt !== null && vAssignmentRoleTxt.length > 0) {
        switch (vAssignmentRoleTxt) {
            
            case "Care Manager":
                OprtrVal = "167410000";
                break;
            case "Nurse":
                OprtrVal = "167410001";
                break;
            case "Dietician":
                OprtrVal = "167410002";
                break;
            case "Care Navigator":
                OprtrVal = "167410003";
                break;
            case "Physiatrist":
                OprtrVal = "100000000";
                break;
            case "Cardiologist":
                OprtrVal = "100000001";
                break;
            case "Physician":
                OprtrVal = "100000002";
                break;
           
        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function GetOsetValFromTextGoalState(vGoalStateTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vGoalStateTxt !== null && vGoalStateTxt.length > 0) {
        switch (vGoalStateTxt) {
            case "Open":
                OprtrVal = "167410000";
                break;
            case "Met":
                OprtrVal = "167410001";
                break;
            case "Not Met":
                OprtrVal = "167410002";
                break;
            case "Closed, Cancelled":
                OprtrVal = "167410003";
                break;
           
        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function UpdateCarePlanJoin(vVitalTypId, contactId, modifierId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, vOsetValAssignmentRole, vMultiplierNormalTxt, vMultiplierAbormalTxt, vTargetValue2Txt, vQualTxt, vOsetValMetricOperator2, vOsetValGoalState,vobservedValue,vLastResultDate) {
    //alert(contactId + "++" + modifierId + "++" + vVitalTypId);
    SDK.REST.retrieveMultipleRecords(
    "tri_cccareplangoal",
    //"?$select=tri_CarePlanGoalID,tri_careplanjoinId,tri_GoalSelected,tri_typeofgoalcode&$filter=tri_PatientID/Id eq (guid'" + contactId + "') and tri_vitalsvaluetypeid/Id eq (guid'" + vVitalTypId + "') and tri_PatientModifierId/Id eq (guid'" + modifierId + "')",
    "?$select=tri_actiontriggermetricoperator,tri_actiontriggervalue,tri_activityassignmentrole,tri_activitydescription,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_activityrecurrencemultipliernormal,tri_CarePlanGoalState,tri_cccareplangoalId,tri_GoalSection,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_PatientID,tri_PatientModifierId,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + contactId + "')   and  tri_PatientModifierId/Id eq (guid'" + modifierId + "') and tri_vitalsvaluetype/Id eq (guid'" + vVitalTypId + "')",
    function (results) {
       //alert(results.length);
        if (results.length > 0) {
            var boolCpgoal = true;

            for (var i = 0; i < results.length; i++) {
                var tri_actiontriggermetricoperator = results[i].tri_actiontriggermetricoperator;
                var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
                var tri_activityassignmentrole = results[i].tri_activityassignmentrole;
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_activityrecurrencemultipliernormal = results[i].tri_activityrecurrencemultipliernormal;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;
                var tri_GoalSection = results[i].tri_GoalSection;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_PatientID = results[i].tri_PatientID;
                var tri_PatientModifierId = results[i].tri_PatientModifierId;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;

                
                //var tri_careplanjoin = {}
                var tri_cccareplangoal = {}

                tri_cccareplangoal.tri_GoalSelected = boolCpgoal;

                switch (tri_typeofgoalcode) {
                    case 100000000:
                        //tri_careplanjoin.tri_qualitativetarget = vTargetValueTxt;
                        if (vQualTxt !== null && vQualTxt !== "") {
                            tri_cccareplangoal.tri_qualitativetarget = vQualTxt;
                        }
                        if (vobservedValue !== null && vobservedValue !== "" && vobservedValue !== undefined) {
                            tri_cccareplangoal.tri_lastresult = vobservedValue;
                            tri_cccareplangoal.tri_LastResultDate = vLastResultDate;
                        }
                        break;
                    case 100000001:
                        if (vTargetValueTxt !== null && vTargetValueTxt !== "") {
                            tri_cccareplangoal.tri_Metric = parseFloat(vTargetValueTxt).toFixed(2);
                        }
                        if (vTargetValue2Txt !== null && vTargetValue2Txt !== "") {
                            tri_cccareplangoal.tri_targetvaluetwo = parseFloat(vTargetValue2Txt).toFixed(2);
                        }
                        if (vOsetValMetricOperator !== null && vOsetValMetricOperator !== "") {
                            tri_cccareplangoal.tri_MetricOperator = { Value: parseInt(vOsetValMetricOperator, 10) };
                        }
                        if (vOsetValMetricOperator2 !== null && vOsetValMetricOperator2 !== "") {
                            tri_cccareplangoal.tri_metricoperatortwo = { Value: parseInt(vOsetValMetricOperator2, 10) };
                        }
                        break;
                }

                if (vOsetValGoalState !== null && vOsetValGoalState !== "") {
                    tri_cccareplangoal.tri_CarePlanGoalState = { Value: parseInt(vOsetValGoalState, 10) };
                };

                if (vOsetValFreqNormal !== null && vOsetValFreqNormal !== "") {
                    tri_cccareplangoal.tri_activityrecurrence = { Value: parseInt(vOsetValFreqNormal, 10) };
                };
                if (vOsetValFreqAbNormal !== null && vOsetValFreqAbNormal !== "") {
                    tri_cccareplangoal.tri_activityrecurrenceabnormal = { Value: parseInt(vOsetValFreqAbNormal, 10) };
                };
                if (vMultiplierNormalTxt !== null && vMultiplierNormalTxt !== "") {
                    tri_cccareplangoal.tri_activityrecurrencemultipliernormal = parseInt(vMultiplierNormalTxt, 10);
                };
                if (vMultiplierAbormalTxt !== null && vMultiplierAbormalTxt !== "") {
                    tri_cccareplangoal.tri_activityrecurrencemultiplierabnormal = parseInt(vMultiplierAbormalTxt, 10);
                };
                SDK.REST.updateRecord(tri_cccareplangoalId, tri_cccareplangoal, "tri_cccareplangoal", updateSuccessCallback, errorHandler);
            }
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        if (vVitalTypId === lastVitalId)
        {
            var PatientId1 = parent.Xrm.Page.data.entity.getId();
            var PatientId2 = PatientId1.replace("{", "");
            var PatientId = PatientId2.replace("}", "");

            if (PatientId !== null && PatientId !== undefined && PatientId !== 0) {
                if (IsPersonalizeClosed) {
                    IsPersonalizeClosed = false;
                    ClosePersonalizeWindow(PatientId);
                }
                else if (IsWindowsWrapperClosed)
                {
                    IsWindowsWrapperClosed = false;
                    CloseWindowWrapper(PatientId);
                }
            }
           // alert("Goal Saved!");
        }
    }
);

}
function updateSuccessCallback() {
    // alert("The record changes were saved");
}
function errorHandler(error) {
    alert(error.message);
}

function validateQuantitative(thistxtBox) {
   
    if ($(thistxtBox).hasClass('quantitative')) {
        //alert($(thistxtBox).val());
    }

    //alert($(thistxtBox).attr('class'));
}
function gotohealth360Form() {
    alert("Cannot create new Patient here. Switching Form.");
    var items = parent.Xrm.Page.ui.formSelector.items.get();
    for (var i in items) {
        var item = items[i];
        var itemId = item.getId();
        var itemLabel = item.getLabel()

        if (itemLabel == "Health360 Core") {
            //navigate to the form
            item.navigate();
        } //endif
    } //end for

};
function RetrieveVitalName(vVitalTypeId) {
    //alert(vVitalTypeId);
    var vVitalName = "";

   var FetchXMlVital =
  " <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'> " +
  " <entity name='tri_vitalsvaluetype'> " +
    " <attribute name='tri_vitalsvaluetypeid' /> " +
    " <attribute name='tri_name' /> " +
    " <attribute name='createdon' /> " +
    " <order attribute='tri_name' descending='false' /> " +
    " <filter type='and'> " +
      " <condition attribute='statecode' operator='eq' value='0' /> " +
      " <condition attribute='tri_vitalsvaluetypeid' operator='eq'  value='" + vVitalTypeId + "' /> " +
    " </filter> " +
  " </entity> " +
" </fetch> "
//   // alert(FetchXMlVital);
    results2 = XrmServiceToolkit.Soap.Fetch(FetchXmlVital);
//    alert(results2.length);
//    if (results2.length > 0) {
//        for (var i = 0; i < results2.length; i++) {
            vVitalName = results2[0].attributes["tri_name"];
//        }
        return vVitalName;

    //    }

//    SDK.JQuery.retrieveRecord(
//    vVitalTypeId,
//    "tri_vitalsvaluetype",
//    "tri_name",
//    null,
//    function (result) {
//        var tri_name = result.tri_name;
//        vVitalName = tri_name;
//        return vVitalName;
//    },
//    function (error) {
//        alert(error.message);
//    }
//);
   // return tri_name;
}



