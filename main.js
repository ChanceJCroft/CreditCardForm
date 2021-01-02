const cleaveCC = new Cleave("#cardNumber", {
    creditCard: true,
    delimiter: "-",
    onCreditCardTypeChanged: function (type) {
        const cardBrand = ddocument.getElementById('cardBrand'),
        visa = ""
    },
})