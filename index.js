document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("volume_field");
    var mixValueLabel = document.getElementById("mix_value");
    var waterValueLabel = document.getElementById("water_value");

    input.oninput = function () {
        var mixVolume = input.value;
        var multiplier, waterValue, mixValue;

        if (mixVolume > 100) {
            multiplier = mixVolume / 100
            waterValue = 90 * multiplier
            mixValue = 3 * multiplier
        } else {
            multiplier = 100 / mixVolume
            waterValue = 90 / multiplier
            mixValue = 3 / multiplier
        }

        mixValueLabel.textContent = `${mixValue.toFixed(1)} ≈ ${mixValue.toFixed()}`
        waterValueLabel.textContent = `${waterValue.toFixed(1)} ≈ ${waterValue.toFixed()}`
    };
});