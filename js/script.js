window.onload = function() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("name").innerText = userName;
    }
};

function submitForm() {
    let name = document.getElementById("form-name").value;
    let birthdate = document.getElementById("form-birthdate").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let message = document.getElementById("form-message").value;

    let result = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

    document.getElementById("form-result").innerHTML = result;
}


