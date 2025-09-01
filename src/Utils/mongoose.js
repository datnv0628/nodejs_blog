module.exports = {
  multiDataToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  DataToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
