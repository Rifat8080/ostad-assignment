function checkAge() {
    const age = document.getElementById('age').value;

    if (age >= 18) {
      $('#adultModal').modal('show');
    } else {
      $('#childModal').modal('show');
    }
  }