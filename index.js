function halfYear(date) {
    return date.getMonth() < 8 || (date.getMonth() === 8 && date.getDate() < 22);
}

function year(date) {
    if (halfYear(date)) {
        return date.getFullYear() - 1792;
    }
    return date.getFullYear() - 1791;
}

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
function dayOfYear(date) {
    const currentYear = halfYear(date) ? date.getFullYear() - 1 : date.getFullYear(),
        firstDayOfYear = new Date(currentYear, 8, 22);
    return Math.floor((date - firstDayOfYear) / ONE_DAY_IN_MS) + 1;
}

const DAYS = ['raisin', 'safran', 'châtaigne', 'colchique', 'cheval', 'balsamine', 'carotte', 'amaranthe', 'panais', 'cuve', 'pomme de terre', 'immortelle', 'potiron', 'réséda', 'âne', 'belle de nuit', 'citrouille', 'sarrasin', 'tournesol', 'pressoir', 'chanvre', 'pêche', 'navet', 'amaryllis', 'bœuf', 'aubergine', 'piment', 'tomate', 'orge', 'tonneau', 'pomme', 'céleri', 'poire', 'betterave', 'oie', 'héliotrope', 'figue', 'scorsonère', 'alisier', 'charrue', 'salsifis', 'macre', 'topinambour',
    'endive', 'dindon', 'chervis', 'cresson', 'dentelaire', 'grenade', 'herse', 'bacchante', 'azerole', 'garance', 'orange', 'faisan', 'pistache', 'macjonc', 'coing', 'cormier', 'rouleau', 'raiponce', 'turneps', 'chicorée', 'nèfle', 'cochon', 'mâche', 'chou-fleur', 'épicéa', 'genièvre', 'pioche', 'thuya', 'raifort', 'cèdre', 'sapin', 'chevreuil', 'ajonc', 'cyprès', 'lierre', 'sabine', 'hoyau', 'érable sucre', 'bruyère', 'roseau', 'oseille', 'grillon', 'pignon', 'liège', 'truffe', 'olive', 'pelle', 'tourbe', 'houille', 'bitume', 'soufre', 'chien', 'lave', 'terre végétale', 'fumier', 'salpêtre', 'fléau', 'granit', 'argile', 'ardoise', 'grès', 'lapin', 'silex', 'marne', 'pierre à chaux', 'marbre', 'van', 'pierre à plâtre', 'sel', 'fer', 'cuivre', 'chat', 'étain', 'plomb', 'zinc', 'mercure', 'crible', 'lauréole', 'mousse', 'fragon', 'perce-neige', 'taureau', 'laurier-tin', 'amadouvier', 'mézéréon', 'peuplier', 'coignée', 'ellébore', 'brocoli', 'laurier', 'avelinier', 'vache', 'buis', 'lichen', 'if', 'pulmonaire', 'serpette', 'thlaspi', 'thymélée', 'chiendent', 'traînasse', 'lièvre', 'guède', 'noisetier', 'cyclamen', 'chélidoine', 'traîneau', 'tussilage', 'cornouiller', 'violier', 'troène', 'bouc', 'asaret', 'alaterne', 'violette', 'marsault', 'bêche', 'narcisse', 'orme', 'fumeterre', 'vélar', 'chèvre', 'épinard', 'doronic', 'mouron', 'cerfeuil', 'cordeau', 'mandragore', 'persil', 'cochléaria', 'pâquerette', 'thon', 'pissenlit', 'sylvie', 'capillaire', 'frêne', 'plantoir', 'primevère', 'platane', 'asperge', 'tulipe', 'poule', 'bette', 'bouleau', 'jonquille', 'aulne', 'couvoir', 'pervenche', 'charme', 'morille', 'hêtre', 'abeille', 'laitue', 'mélèze', 'ciguë', 'radis', 'ruche', 'gainier', 'romaine', 'marronnier', 'roquette', 'pigeon', 'lilas', 'anémone', 'pensée', 'myrtille', 'greffoir', 'rose', 'chêne', 'fougère', 'aubépine', 'rossignol', 'ancolie', 'muguet', 'champignon', 'hyacinthe', 'râteau', 'rhubarbe', 'sainfoin', 'bâton d\'or', 'chamérisier', 'ver à soie', 'consoude', 'pimprenelle', 'corbeille d\'or', 'arroche', 'sarcloir', 'statice', 'fritillaire', 'bourrache', 'valériane', 'carpe', 'fusain', 'civette', 'buglose', 'sénevé', 'houlette', 'luzerne', 'hémérocalle', 'trèfle', 'angélique', 'canard', 'mélisse', 'fromental', 'martagon', 'serpolet', 'faux', 'fraise', 'bétoine', 'pois', 'acacia', 'caille', 'œillet', 'sureau', 'pavot', 'tilleul', 'fourche', 'barbeau', 'camomille', 'chèvrefeuille', 'caille-lait', 'tanche', 'jasmin', 'verveine', 'thym', 'pivoine', 'chariot', 'seigle', 'avoine', 'oignon', 'véronique', 'mulet', 'romarin', 'concombre', 'échalote', 'absinthe', 'faucille', 'coriandre', 'artichaut', 'giroflée', 'lavande', 'chamois', 'tabac', 'groseille', 'gesse', 'cerise', 'parc', 'menthe', 'cumin', 'haricot', 'orcanette', 'pintade', 'sauge', 'ail', 'vesce', 'blé', 'chalémie', 'épeautre', 'bouillon-blanc', 'melon', 'ivraie', 'bélier', 'prêle', 'armoise', 'carthame', 'mûre', 'arrosoir', 'panis', 'salicorne', 'abricot', 'basilic', 'brebis', 'guimauve', 'lin', 'amande', 'gentiane', 'écluse', 'carline', 'câprier', 'lentille', 'aunée', 'loutre', 'myrte', 'colza', 'lupin', 'coton', 'moulin', 'prune', 'millet', 'lycoperdon', 'escourgeon', 'saumon', 'tubéreuse', 'sucrion', 'apocyn', 'réglisse', 'échelle', 'pastèque', 'fenouil', 'épine-vinette', 'noix', 'truite', 'citron', 'cardère', 'nerprun', 'tagète', 'hotte', 'églantier', 'noisette', 'houblon', 'sorgho', 'écrevisse', 'bigarade', 'verge d\'or', 'maïs', 'marron', 'panier'];
function dayOfYearName(date) {
    return DAYS[dayOfYear(date) - 1];
}

function month(date) {
    return Math.floor((dayOfYear(date) - 1) / 30) + 1;
}

const MONTHS = ['vendémiaire', 'brumaire', 'frimaire', 'nivôse', 'pluviôse',
    'ventôse', 'germinal', 'floréal', 'prairial', 'messidor', 'thermidor',
    'fructidor', 'sans-culottides'];
function monthName(date) {
    return MONTHS[month(date) - 1];
}

function dayOfMonth(date) {
    return ((dayOfYear(date) - 1) - (month(date) - 1) * 30) + 1;
}

function dayOfDecade(date) {
    return ((dayOfMonth(date) - 1) % 10) + 1;
}

const DAYS_OF_DECADE = ['primidi', 'duodi', 'tridi', 'quartidi', 'quintidi',
    'sextidi', 'septidi', 'octidi', 'nonidi', 'décadi'];
function dayOfDecadeName(date) {
    return DAYS_OF_DECADE[dayOfDecade(date) - 1];
}

module.exports = {
    year,
    dayOfYear,
    dayOfYearName,
    month,
    monthName,
    dayOfMonth,
    dayOfDecade,
    dayOfDecadeName
};
