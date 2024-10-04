"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesPersistence = exports.HeroesToDomain = void 0;
var HeroesToDomain = /** @class */ (function () {
    function HeroesToDomain(_a) {
        var name = _a.name, about = _a.about, hero_or_vilain = _a.hero_or_vilain, image = _a.image, id = _a.id;
        this.id = id;
        this.name = name;
        this.image = image;
        this.heroOrVilain = hero_or_vilain;
        this.about = about;
    }
    HeroesToDomain.createHero = function (_a) {
        var name = _a.name, about = _a.about, hero_or_vilain = _a.hero_or_vilain, image = _a.image;
        var id = crypto.randomUUID();
        return new HeroesToDomain({ name: name, about: about, hero_or_vilain: hero_or_vilain, image: image, id: id });
    };
    return HeroesToDomain;
}());
exports.HeroesToDomain = HeroesToDomain;
var HeroesPersistence = /** @class */ (function () {
    function HeroesPersistence(_a) {
        var name = _a.name, about = _a.about, heroOrVilain = _a.heroOrVilain, image = _a.image, id = _a.id;
        this.id = id;
        this.name = name;
        this.image = image;
        this.hero_or_vilain = heroOrVilain;
        this.about = about;
    }
    HeroesPersistence.createHero = function (_a) {
        var name = _a.name, about = _a.about, heroOrVilain = _a.heroOrVilain, image = _a.image;
        var id = crypto.randomUUID();
        return new HeroesPersistence({ name: name, about: about, heroOrVilain: heroOrVilain, image: image, id: id });
    };
    return HeroesPersistence;
}());
exports.HeroesPersistence = HeroesPersistence;
