//List of valid state abbreviations
const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
];

//Start the validation
function initValidation(formName) {

  let $form = $(formName);

  $(':input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")
  });
  
  $form.submit(function(event){
    console.log("submit");
    $form = $(this);
    formEl = this;

    event.preventDefault();
    event.stopPropagation();

    validateForm();
    console.log("Done validating")

    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
      console.log("Something went wrong");
    }
    else{
      submitForm();
    }
   

  });
}

function validateForm() {
  
  validateState("#state", "You must enter a valid two character state code, e.g., UT");
  
  validateCheckboxGroup("#source", "you must select at least one!");
  
}

function validateState(id, msg){
  $el = $(id);
  let valid=false;
  let temp = $el.html().toUpperCase();
  for (let i = 0; i < stateAbbreviations.length; i++) {
      if (temp == stateAbbreviations[i]) {
          valid = true;
      }
  }
  setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, message) {
  let valid=false;

  
  if ($(fieldName + "1").is(":checked")) {
      valid = true;
  }
  else if ($(fieldName + "2").is(":checked")) {
      valid = true;
  }
  else if ($(fieldName + "3").is(":checked")) {
      valid = true;
  }
  
  setElementValidity(fieldName, valid, message);
}

function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  if (valid) {  //it has a value

    $field.html("");
  } else {

    $field.html(message);
   
  }
  
}