module.exports = {
    modelBaseDirectory: './dist/src/models', // model directory name
    models: '**/*.js',
    data: './dist/src/seeders', // Ruta a tus archivos de datos
    db: 'mongodb://0.0.0.0:27017/SAFA', // URL de tu base de datos MongoDB
    dropDatabase: true, // Si es true, Seedgoose eliminará todas las colecciones antes de sembrar los datos
};