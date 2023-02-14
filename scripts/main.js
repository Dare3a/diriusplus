// Toast za poslatu poruku u kontakt formi
// namesteno je na click zbog testa na lokalu u produkciji promeniti na submit
$(document).ready(function () {
    $("#form-contact, #form-contact-modal").submit(function () {
        $(".toast").toast({ delay: 1200 });
        $(".toast").toast("show");
        resetForm();
    });
});
// Reset kontakt forme i modal kontakt forme
function resetForm() {
    setTimeout(() => {
        $("#form-contact")[0].reset();
        $("#form-contact-modal")[0].reset();
    }, 1000);

    console.log("resetovao sam formu");
}