var wms_layers = [];


        var lyr_CartoDBDarkAll_0 = new ol.layer.Tile({
            'title': 'CartoDB Dark All',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_jalan_clean_1 = new ol.format.GeoJSON();
var features_jalan_clean_1 = format_jalan_clean_1.readFeatures(json_jalan_clean_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_clean_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_clean_1.addFeatures(features_jalan_clean_1);
var lyr_jalan_clean_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_clean_1, 
                style: style_jalan_clean_1,
                popuplayertitle: 'jalan_clean',
                interactive: true,
                title: '<img src="styles/legend/jalan_clean_1.png" /> jalan_clean'
            });
var format_Servicearealines_2 = new ol.format.GeoJSON();
var features_Servicearealines_2 = format_Servicearealines_2.readFeatures(json_Servicearealines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_2.addFeatures(features_Servicearealines_2);
var lyr_Servicearealines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_2, 
                style: style_Servicearealines_2,
                popuplayertitle: 'Service area (lines)',
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_2.png" /> Service area (lines)'
            });
var format_halte_pt_3 = new ol.format.GeoJSON();
var features_halte_pt_3 = format_halte_pt_3.readFeatures(json_halte_pt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_3.addFeatures(features_halte_pt_3);
var lyr_halte_pt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_3, 
                style: style_halte_pt_3,
                popuplayertitle: 'halte_pt',
                interactive: true,
                title: '<img src="styles/legend/halte_pt_3.png" /> halte_pt'
            });

lyr_CartoDBDarkAll_0.setVisible(true);lyr_jalan_clean_1.setVisible(true);lyr_Servicearealines_2.setVisible(true);lyr_halte_pt_3.setVisible(true);
var layersList = [lyr_CartoDBDarkAll_0,lyr_jalan_clean_1,lyr_Servicearealines_2,lyr_halte_pt_3];
lyr_jalan_clean_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_Servicearealines_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_halte_pt_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_jalan_clean_1.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_Servicearealines_2.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_halte_pt_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_jalan_clean_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_Servicearealines_2.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_halte_pt_3.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'Informasi Halte__RUTE': 'inline label - always visible', 'Informasi Halte__Destinasi': 'inline label - always visible', });
lyr_halte_pt_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});