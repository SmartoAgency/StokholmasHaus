import markersFromPrevSite from './markersFromPrevSite';

const baseFolder =
    document.documentElement.dataset.status === 'local'
        ? './assets/images/markers/'
        : '/wp-content/themes/3d/assets/images/markers/';

const markersAdresses = {
    main: `${baseFolder}main.svg`,
    church: `${baseFolder}church.svg`,
    court: `${baseFolder}court.svg`,
    golf: `${baseFolder}gold.svg`,
    kindergarten: `${baseFolder}kindergarten.svg`,
    medicine: `${baseFolder}medicine.svg`,
    narvessen: `${baseFolder}narvessen.svg`,
    park: `${baseFolder}park.svg`,
    pool: `${baseFolder}pool.svg`,
    zoo: `${baseFolder}zoo.svg`,
    shop: `${baseFolder}shop.svg`,
};

const markerPopupStyle = `
style="
height: 100%;
width: 100%;
text-align: center;
background: #ECEBE9;
color:#424242;
padding:5px 10px;
font-size: 16px;
line-height: 120%;"
`;

export async function fetchMarkersData(google) {
    const sizes = {
        main: new google.maps.Size(307, 88),
        link: new google.maps.Size(240, 58),
        park: new google.maps.Size(227, 120),
        kindergarten: new google.maps.Size(150, 120),
    };
    const anchors = {
        main: new google.maps.Point(0, 70), // Центр иконки (28, 28) для 56x56
        church: new google.maps.Point(20, 20),
        court: new google.maps.Point(20, 20),
        park: new google.maps.Point(123, 0),
        kindergarten: new google.maps.Point(85, 110),
        // Добавьте для остальных маркеров аналогичные значения
    };
    const sendData = new FormData();
    sendData.append('action', 'infrastructure');
    const url = window.location.href.match(/localhost/)
        ? 'https://central-park-wp.smarto.com.ua/wp-admin/admin-ajax.php'
        : '/wp-admin/admin-ajax.php';
    // let markersData = window.location.href.match(/localhost|smarto/) ? Promise.resolve(mockData()) : await fetch(url, {
    //   method: 'POST',
    //   body: sendData,
    // });
    let markersData = Promise.resolve(mockData());
    // markersData = window.location.href.match(/localhost|smarto/) ? mockData() : await markersData.json();
    markersData = mockData();
    if (!markersData) {
        console.warn('Wrong data recieved');
        return;
    }

    let formatedMarkersDataForMap = markersData.reduce((acc, el) => {
        if (!el.list) return acc;
        el.list.forEach(marker => {
            console.log('marker!!!!!!!!!!!!');
            const { category, id } = marker;
            console.log('category: ', category);
            console.log('id: ', id);
            console.log('markersAdresses[el.code] ', markersAdresses[el.code]);
            acc.push({
                content: `<div ${markerPopupStyle}>${marker.name}</div>`,
                position: {
                    lat: marker.coordinations.latitude,
                    lng: marker.coordinations.longitude,
                },
                type: el.code,
                id: marker.id,
                zIndex: 2,
                icon: {
                    url: markersAdresses[el.code],
                    scaledSize: sizes[el.code],
                    anchor: anchors[el.code],
                },
            });
        });
        return acc;
    }, []);

    console.log(formatedMarkersDataForMap);

    markersFromPrevSite().forEach(marker => {
        formatedMarkersDataForMap.push({
            content: marker.description,
            position: {
                lat: marker.lat,
                lng: marker.lng,
            },
            type: marker.category,
            id: marker.id,
            zIndex: 1,
            icon: { url: markersAdresses[marker.category], scaledSize: buildLogoSize },
        });
    });

    return formatedMarkersDataForMap;
}

function mockData() {
    return [
        {
            name: 'Stokholmas 26',
            code: 'main',
            list: [
                {
                    name:
                        "<a style='display: flex; padding: 20px; flex-direction: column; align-items: flex-end; gap: 10px;width: 100%; height: 100%;' href='#'>Stokholmas 26</a>",
                    id: '00',
                    coordinations: {
                        latitude: 57.000598932864904,
                        longitude: 24.162005804789086,
                    },
                },
            ],
        },
        {
            name: 'court',
            code: 'court',
            list: [
                {
                    name: 'Court',
                    id: '00',
                    coordinations: {
                        latitude: 57.0043142,
                        longitude: 24.166839216,
                    },
                },
            ],
        },
        {
            name: 'Kindergarten',
            code: 'kindergarten',
            list: [
                {
                    name: 'Kindergarten',
                    id: '00',
                    coordinations: {
                        latitude: 57.002172783686106,
                        longitude: 24.16481920715561,
                    },
                },
            ],
        },
        {
            name: 'Medicine',
            code: 'medicine',
            list: [
                {
                    name: 'Medicine',
                    id: '00',
                    coordinations: {
                        latitude: 57.0007506,
                        longitude: 24.157361118,
                    },
                },
            ],
        },
        {
            name: 'Narvessen',
            code: 'narvessen',
            list: [
                {
                    name: 'Narvessen',
                    id: '00',
                    coordinations: {
                        latitude: 57.0047546,
                        longitude: 24.157188819,
                    },
                },
            ],
        },
        {
            name: 'Park',
            code: 'park',
            list: [
                {
                    name: 'Cycle path mezhapark',
                    id: '00',
                    coordinations: {
                        latitude: 57.00503039943158,
                        longitude: 24.17984959244774,
                    },
                },
            ],
        },
        {
            name: 'Pool',
            code: 'pool',
            list: [
                {
                    name: 'Pool',
                    id: '00',
                    coordinations: {
                        latitude: 57.0031926,
                        longitude: 24.17090041692,
                    },
                },
            ],
        },
        {
            name: 'Shop',
            code: 'shop',
            list: [
                {
                    name: 'Shop',
                    id: '00',
                    coordinations: {
                        latitude: 57.0007724,
                        longitude: 24.157348318,
                    },
                },
            ],
        },
        {
            name: 'zoo',
            code: 'zoo',
            list: [
                {
                    name: 'Zoo',
                    id: '00',
                    coordinations: {
                        latitude: 57.0047908,
                        longitude: 24.1578988,
                    },
                },
            ],
        },
    ];
}
