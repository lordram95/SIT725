function clearForm() {
    $('#pet-name').val("");
    $('#pet-type').val("");
    $('#pet-age').val("");
    $('#pet-owner-name').val("");
    $('#location').val("");

}

function saveFormData() {

    var petName = $('#pet-name').val();
    var petType = $('#pet-type').val();
    var petAge = $('#pet-age').val();
    var petOwnerName = $('#pet-owner-name').val();
    var location = $('#location').val();
 

    if (petName === "" || petType === "" ||  petAge === "" || 
        petOwnerName === "" || location === ""
    ) {

        $('#error-msg').text(`Some fields not filled. Check again`);
        setTimeout(function() {
            $('#error-msg').text(``)
        }, 5000);

    } else {

        let data = {
            petName: petName,
            petType: petType,
            petAge: petAge,
            petOwnerName: petOwnerName,
            location: location,
        };

        $.ajax({
            url: '/api/pet',
            type: 'POST',
            data: data,
            success: (result)=>{
                if (result.statusCode === 201) {
                    alert('Pet details saved successful');
                    clearForm();
                    getAllPets();
                }
            }
        });

    }
}

function getAllPets(){
    $.get('/api/pets', (response)=>{
        if (response.statusCode === 200) {
            addCardItems(response.data);
        }
    });
}


// Open modal
$(document).ready(function(){
    
    // For get all pets data
    getAllPets();

    // For open modal
    $('.modal').modal();

    // For save form data
    $('#save-details').click(() => {
        saveFormData();
        clearForm();
    })
});