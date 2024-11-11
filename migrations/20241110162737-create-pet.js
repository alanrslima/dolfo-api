"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "pet",
    {
      id: { type: "string", primaryKey: true, notNull: true },
      name: { type: "string" },
      specie: { type: "string" },
      breed: { type: "string" },
      birthday: { type: "date" },
      guardian_id: {
        type: "string",
        notNull: true,
        foreignKey: {
          name: "id",
          table: "user",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT",
          },
          mapping: "id",
        },
      },
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("pet", callback);
};

exports._meta = {
  version: 1,
};
