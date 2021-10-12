/*
    Objetivo:
        Ver rápidamente las definiciones de la clase
        También funciona con archivos HTML y otros

    Tips:
        ⌘ P => luego escribir la @
        ⇧ ⌘ O

        Ctrl + P => luego escribir la @
        Ctrl + Shift + o                    ambos cmd son iguales en linux

        Se pueden agrupar si después de la @ se escriben :   se agrupan segun secuencia de aparicion
*/
var SuperHeroe = /** @class */ (function () {
    function SuperHeroe() {
    }
    SuperHeroe.prototype.usarPoder = function () { };
    SuperHeroe.prototype.volar = function () { };
    SuperHeroe.prototype.correr = function () { };
    SuperHeroe.prototype.caminar = function () { };
    SuperHeroe.prototype.revivir = function () { };
    Object.defineProperty(SuperHeroe.prototype, "nombreSecreto", {
        get: function () {
            return this._nombreSecreto;
        },
        set: function (nombre) {
            this._nombreSecreto = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return SuperHeroe;
}());
//# sourceMappingURL=01-clase-definiciones.js.map