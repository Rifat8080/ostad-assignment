function checkAge() {
    const age = document.getElementById('age').value;

    if (age >= 18) {
      $('#adultModal').modal('show');
    } else if (age <= 18 && age===1) {
      $('#childModal').modal('show');
    }
    else{
        $('#errorModal').modal('show');
    }
  }