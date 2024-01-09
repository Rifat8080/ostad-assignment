function checkAge() {
  const age = document.getElementById('age').value;

  if (age >= 18) {
    $('#adultModal').modal('show');
  } else if (age >= 1 && age < 18) {
    $('#childModal').modal('show');
  } else {
    $('#errorModal').modal('show');
  }
}
