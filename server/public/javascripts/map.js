var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};

var map = new kakao.maps.Map(container, options);

const API_SRC = `http://localhost:8080/map`;
fetch(API_SRC).then(function (response) {
    return response.json();
}).then(function (data) {
    for (var i = 0; i < data.length; i++) {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = {
                center: new kakao.maps.LatLng(data[0]["wido"], data[0]["gyungdo"]) ,
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < data.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);
        
            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, 
                position: new kakao.maps.LatLng(data[i]["wido"], data[i]["gyungdo"]),
                title: data[i]["pk"]+"번 Bot", 
                image: markerImage
            });
        }

    }
})
