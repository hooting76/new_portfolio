$(function(){
    // 정보 뿌려주기 위한 엘레멘츠 지정
    let weather_selector    = document.getElementById('sky_info');
    let temp_info           = document.getElementById('temp_info');
    let weather_icon        = document.querySelector('.w_icon>img');

    //사용자 위치 기반의 날씨 정보 제공
    var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=37.56421353&lon=127.0016985&appid=4afec870ec014022424572cf68c6181e";
    $.ajax({
        url: apiURI,
        dataType: "json",
        type: "GET",
        async: "false",
        success: function(resp_done) {

            let current_temper      = Math.round(resp_done.main.temp- 273.15) + "°C";
            let current_weather     = resp_done.weather[0].main;

            const iconUrl = `http://openweathermap.org/img/wn/${resp_done.weather[0].icon}@2x.png`; // 날씨 아이콘

            weather_icon.src        = iconUrl;
            weather_selector.value  = current_weather;
            temp_info.value         = current_temper;

        }
    });
});


