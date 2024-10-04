"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var prisma_service_1 = require("./service/prisma.service");
var hero_mapper_1 = require("./mappers/hero.mapper");
var heroes_data_1 = require("./data/heroes.data");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var PORT = Number(process.env.PORT_SERVER);
var prismaService = prisma_service_1.prisma;
app.get("/", function (request, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, currentPage, pageSize, current, size, totalItems_1, totalPages_1, heroes_1, heroesMap_1, totalItems, totalPages, heroes, heroesMap;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.query, currentPage = _a.currentPage, pageSize = _a.pageSize;
                if (!(!currentPage || !pageSize)) return [3 /*break*/, 3];
                console.log("currentPage or pageSize is not defined");
                current = 1;
                size = 10;
                return [4 /*yield*/, prismaService.heroes.count()];
            case 1:
                totalItems_1 = _b.sent();
                totalPages_1 = Math.ceil(totalItems_1 / Number(pageSize));
                return [4 /*yield*/, prismaService.heroes.findMany({
                        skip: (Number(current) - 1) * Number(size),
                        take: Number(size),
                        orderBy: {
                            name: "asc",
                        },
                    })];
            case 2:
                heroes_1 = _b.sent();
                heroesMap_1 = heroes_1.map(function (hero) {
                    return new hero_mapper_1.HeroesToDomain(hero);
                });
                res.json({
                    heroes: heroesMap_1,
                    currentPage: Number(currentPage),
                    pageSize: Number(pageSize),
                    totalPages: totalPages_1,
                    total: heroes_1.length,
                });
                _b.label = 3;
            case 3: return [4 /*yield*/, prismaService.heroes.count()];
            case 4:
                totalItems = _b.sent();
                totalPages = Math.ceil(totalItems / Number(pageSize));
                return [4 /*yield*/, prismaService.heroes.findMany({
                        skip: (Number(currentPage) - 1) * Number(pageSize),
                        take: Number(pageSize),
                        orderBy: {
                            name: "asc",
                        },
                    })];
            case 5:
                heroes = _b.sent();
                heroesMap = heroes.map(function (hero) {
                    return new hero_mapper_1.HeroesToDomain(hero);
                });
                res.json({
                    heroes: heroesMap,
                    currentPage: Number(currentPage),
                    pageSize: Number(pageSize),
                    totalPages: totalPages,
                    total: heroes.length,
                });
                return [2 /*return*/];
        }
    });
}); });
app.post("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, image, heroOrVilain, about, heroPersistence, hero;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, image = _a.image, heroOrVilain = _a.heroOrVilain, about = _a.about;
                heroPersistence = hero_mapper_1.HeroesPersistence.createHero({
                    name: name,
                    image: image,
                    heroOrVilain: heroOrVilain,
                    about: about,
                });
                return [4 /*yield*/, prismaService.heroes.create({
                        data: heroPersistence,
                    })];
            case 1:
                hero = _b.sent();
                res.json(hero);
                return [2 /*return*/];
        }
    });
}); });
app.delete("/deleteall", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prismaService.heroes.deleteMany()];
            case 1:
                _a.sent();
                res.json({
                    message: "All heroes was deleted",
                });
                return [2 /*return*/];
        }
    });
}); });
app.get("/details/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, hero;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, prismaService.heroes.findUnique({
                        where: {
                            id: String(id),
                        },
                    })];
            case 1:
                hero = _a.sent();
                if (!hero) {
                    return [2 /*return*/, res.status(404).json({
                            message: "Hero not found",
                        })];
                }
                res.json(new hero_mapper_1.HeroesToDomain(hero));
                return [2 /*return*/];
        }
    });
}); });
app.patch("/update/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, image, heroOrVilain, about, hero, updateHeroProps, heroUpdated;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, name = _a.name, image = _a.image, heroOrVilain = _a.heroOrVilain, about = _a.about;
                return [4 /*yield*/, prismaService.heroes.findUnique({
                        where: {
                            id: String(id),
                        },
                    })];
            case 1:
                hero = _b.sent();
                if (!hero) {
                    return [2 /*return*/, res.status(404).json({
                            message: "Hero not found",
                        })];
                }
                updateHeroProps = {
                    name: name === undefined ? hero.name : name,
                    image: image === undefined ? hero.image : image,
                    heroOrVilain: heroOrVilain === undefined ? hero.hero_or_vilain : heroOrVilain,
                    about: about === undefined ? hero.about : about,
                };
                return [4 /*yield*/, prismaService.heroes.update({
                        where: {
                            id: String(id),
                        },
                        data: updateHeroProps,
                    })];
            case 2:
                _b.sent();
                return [4 /*yield*/, prismaService.heroes.findUnique({
                        where: {
                            id: String(id),
                        },
                    })];
            case 3:
                heroUpdated = _b.sent();
                res.json(new hero_mapper_1.HeroesToDomain(heroUpdated));
                return [2 /*return*/];
        }
    });
}); });
app.get("/seeder-execute", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, HeroesApi_1, hero;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, HeroesApi_1 = heroes_data_1.HeroesApi;
                _a.label = 1;
            case 1:
                if (!(_i < HeroesApi_1.length)) return [3 /*break*/, 4];
                hero = HeroesApi_1[_i];
                return [4 /*yield*/, prisma_service_1.prisma.heroes.create({
                        data: {
                            id: hero.id,
                            name: hero.name,
                            hero_or_vilain: hero.heroOrVilain,
                            image: hero.image,
                            about: hero.about,
                        },
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                res.json({
                    message: "Seeder executed",
                });
                return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
