var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BikeAndRide_1 = new ol.format.GeoJSON();
var features_BikeAndRide_1 = format_BikeAndRide_1.readFeatures(json_BikeAndRide_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeAndRide_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeAndRide_1.addFeatures(features_BikeAndRide_1);
var lyr_BikeAndRide_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BikeAndRide_1, 
                style: style_BikeAndRide_1,
                interactive: true,
    title: 'BikeAndRide<br />\
    <img src="styles/legend/BikeAndRide_1_0.png" /> 0 - 6<br />\
    <img src="styles/legend/BikeAndRide_1_1.png" /> 6 - 12<br />\
    <img src="styles/legend/BikeAndRide_1_2.png" /> 12 - 18<br />\
    <img src="styles/legend/BikeAndRide_1_3.png" /> 18 - 32<br />\
    <img src="styles/legend/BikeAndRide_1_4.png" /> 32 - 668<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BikeAndRide_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BikeAndRide_1];
lyr_BikeAndRide_1.set('fieldAliases', {'fid': 'fid', 'bezeichnung': 'bezeichnung', 'symbol': 'symbol', 'adresse': 'Adresse', 'ort': 'Ort', 'anlagen': 'anlagen', 'plaetzegesamt': 'Anzahl der Plätze', 'platzdach': 'Platz mit Dach', 'buegeldach': 'buegeldach', 'vordraddach': 'vordraddach', 'platzoffen': 'Platz ohne Dach', 'buegeloffen': 'buegeloffen', 'vordradoffen': 'vordradoffen', 'fahrradbox': 'Fahrradbox', 'sammelschlanlage': 'sammelschlanlage', 'ansprechpartner': 'ansprechpartner', 'telefon': 'telefon', 'email': 'email', 'stand': 'stand', 'belegung_absolut': 'belegung_absolut', 'belegung_relativ': 'belegung_relativ', 'wildparker_absolut': 'wildparker_absolut', 'gesamtbelegung_absolut': 'gesamtbelegung_absolut', 'gesamtbelegung_relativ': 'gesamtbelegung_relativ', 'fahrradleichen': 'fahrradleichen', });
lyr_BikeAndRide_1.set('fieldImages', {'fid': 'Hidden', 'bezeichnung': 'Hidden', 'symbol': 'Hidden', 'adresse': 'TextEdit', 'ort': 'TextEdit', 'anlagen': 'Hidden', 'plaetzegesamt': 'Range', 'platzdach': 'Range', 'buegeldach': 'Hidden', 'vordraddach': 'Hidden', 'platzoffen': 'Range', 'buegeloffen': 'Hidden', 'vordradoffen': 'Hidden', 'fahrradbox': 'Range', 'sammelschlanlage': 'Hidden', 'ansprechpartner': 'Hidden', 'telefon': 'Hidden', 'email': 'Hidden', 'stand': 'Hidden', 'belegung_absolut': 'Hidden', 'belegung_relativ': 'Hidden', 'wildparker_absolut': 'Hidden', 'gesamtbelegung_absolut': 'Hidden', 'gesamtbelegung_relativ': 'Hidden', 'fahrradleichen': 'Hidden', });
lyr_BikeAndRide_1.set('fieldLabels', {'adresse': 'inline label', 'ort': 'inline label', 'plaetzegesamt': 'inline label', 'platzdach': 'inline label', 'platzoffen': 'inline label', 'fahrradbox': 'inline label', });
lyr_BikeAndRide_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});