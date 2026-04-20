// CS2 map data. `image` uses wsrv.nl as an on-the-fly WebP proxy in front of
// MurkyYT/cs2-map-icons — a repo that auto-scrapes CS2 map thumbnails from
// the official game depot, so these are real in-game screenshots. `fallback`
// is a themed placeholder that renders if the primary URL ever fails.
//
// To try a different shot for a map, change `_1_png.png` to `_2_png.png`,
// `_3_png.png`, or `_4_png.png` in the URL below.

const shot = (map, n = 1) =>
  `https://wsrv.nl/?url=raw.githubusercontent.com/MurkyYT/cs2-map-icons/main/images/thumbs/${map}_${n}_png.png&w=1920&output=webp&q=82`;

const ph = (text) =>
  `https://placehold.co/1920x1080/0b0e13/f5a623/png?text=${encodeURIComponent(text)}&font=oswald`;

export const maps = [
  {
    id: 'mirage',
    name: 'Mirage',
    type: 'Defusal',
    tagline: '沙漠中的经典对抗',
    description:
      '自 CS:GO 时代便是职业赛场出镜率最高的地图之一,A 门 / B 拱门 / 窗户三点布局成就无数经典战术。',
    image: shot('de_mirage'),
    fallback: ph('MIRAGE'),
  },
  {
    id: 'inferno',
    name: 'Inferno',
    type: 'Defusal',
    tagline: '意大利小镇的火与血',
    description:
      '狭窄巷道与香蕉道的压制博弈,烟雾与燃烧瓶的经典配合让这张地图永远充满 Tension。',
    image: shot('de_inferno'),
    fallback: ph('INFERNO'),
  },
  {
    id: 'dust2',
    name: 'Dust II',
    type: 'Defusal',
    tagline: 'CS 历史上最具标志性的地图',
    description:
      '中门对狙、长 A 冲锋、短 B 烟雾……几乎每个 CS 玩家的第一张地图,也是永恒的经典。',
    image: shot('de_dust2'),
    fallback: ph('DUST+II'),
  },
  {
    id: 'nuke',
    name: 'Nuke',
    type: 'Defusal',
    tagline: '立体纵深的核工厂',
    description:
      '上下包点的垂直结构,让 Nuke 成为对定位、沟通要求最高的地图之一,CT 防守强势但 T 有无数破解路线。',
    image: shot('de_nuke'),
    fallback: ph('NUKE'),
  },
  {
    id: 'vertigo',
    name: 'Vertigo',
    type: 'Defusal',
    tagline: '摩天楼顶的施工现场',
    description:
      '垂直双层结构 + 边缘坠落机制,节奏紧凑,中路控制往往决定胜负,是 CS2 Active Duty 中的人气图。',
    image: shot('de_vertigo'),
    fallback: ph('VERTIGO'),
  },
  {
    id: 'ancient',
    name: 'Ancient',
    type: 'Defusal',
    tagline: '丛林深处的失落神殿',
    description:
      '环形中路与复杂包点构造,需要灵活的烟雾与穿透弹药配合,视觉风格极具特色。',
    image: shot('de_ancient'),
    fallback: ph('ANCIENT'),
  },
  {
    id: 'anubis',
    name: 'Anubis',
    type: 'Defusal',
    tagline: '尼罗河畔的古埃及遗迹',
    description:
      'CS2 主动地图库的新星,双层包点与水道连接带来全新的 Rotation 思路,视野通透、对枪干脆。',
    image: shot('de_anubis'),
    fallback: ph('ANUBIS'),
  },
];
