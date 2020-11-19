"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makePasswordFactory;

function makePasswordFactory({
  bcrypt
}) {
  return Object.freeze({
    verifyPassword,
    hashPassword
  });

  async function verifyPassword(password1, password2) {
    return await bcrypt.compare(password1, password2);
  }

  function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }
}

;