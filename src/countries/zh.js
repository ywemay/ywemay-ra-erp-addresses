const countries = [
  { id: 'AF', name: "阿富汗" },
  { id: 'AL', name: "阿尔巴尼亚" },
  { id: 'DZ', name: "阿尔及利亚" },
  { id: 'AS', name: "美属萨摩亚" },
  { id: 'AD', name: "安道尔" },
  { id: 'AO', name: "安哥拉" },
  { id: 'AI', name: "安圭拉" },
  { id: 'AQ', name: "南极洲" },
  { id: 'AG', name: "安提瓜和巴布达" },
  { id: 'AR', name: "阿根廷" },
  { id: 'AM', name: "亚美尼亚" },
  { id: 'AW', name: "阿鲁巴" },
  { id: 'AU', name: "澳大利亚" },
  { id: 'AT', name: "奥地利" },
  { id: 'AZ', name: "阿塞拜疆" },
  { id: 'BS', name: "巴哈马" },
  { id: 'BH', name: "巴林" },
  { id: 'BD', name: "孟加拉国" },
  { id: 'BB', name: "巴巴多斯" },
  { id: 'BY', name: "白俄罗斯" },
  { id: 'BE', name: "比利时" },
  { id: 'BZ', name: "伯利兹" },
  { id: 'BJ', name: "贝宁" },
  { id: 'BM', name: "百慕大" },
  { id: 'BT', name: "不丹" },
  { id: 'BO', name: "玻利维亚" },
  { id: 'BQ', name: "荷兰加勒比区" },
  { id: 'BA', name: "波斯尼亚和黑塞哥维那" },
  { id: 'BW', name: "博茨瓦纳" },
  { id: 'BV', name: "布韦岛" },
  { id: 'BR', name: "巴西" },
  { id: 'IO', name: "英属印度洋领地" },
  { id: 'BN', name: "文莱达鲁萨兰国" },
  { id: 'BG', name: "保加利亚" },
  { id: 'BF', name: "布基纳法索" },
  { id: 'BI', name: "布隆迪" },
  { id: 'CV', name: "佛得角" },
  { id: 'KH', name: "柬埔寨" },
  { id: 'CM', name: "喀麦隆" },
  { id: 'CA', name: "加拿大" },
  { id: 'KY', name: "开曼群岛" },
  { id: 'CF', name: "中非共和国" },
  { id: 'TD', name: "乍得" },
  { id: 'CL', name: "智利" },
  { id: 'CN', name: "中国" },
  { id: 'CX', name: "圣诞岛" },
  { id: 'CC', name: "科科斯（基林）群岛" },
  { id: 'CO', name: "哥伦比亚" },
  { id: 'KM', name: "科摩罗" },
  { id: 'CD', name: "刚果民主共和国" },
  { id: 'CG', name: "刚果" },
  { id: 'CK', name: "库克群岛" },
  { id: 'CR', name: "哥斯达黎加" },
  { id: 'HR', name: "克罗地亚" },
  { id: 'CU', name: "古巴" },
  { id: 'CW', name: "库拉索" },
  { id: 'CY', name: "塞浦路斯" },
  { id: 'CZ', name: "捷克共和国" },
  { id: 'CI', name: "科特迪瓦" },
  { id: 'DK', name: "丹麦" },
  { id: 'DJ', name: "吉布提" },
  { id: 'DM', name: "多米尼克" },
  { id: 'DO', name: "多米尼加共和国" },
  { id: 'EC', name: "厄瓜多尔" },
  { id: 'EG', name: "埃及" },
  { id: 'SV', name: "萨尔瓦多" },
  { id: 'GQ', name: "赤道几内亚" },
  { id: 'ER', name: "厄立特里亚" },
  { id: 'EE', name: "爱沙尼亚" },
  { id: 'SZ', name: "斯威士兰" },
  { id: 'ET', name: "埃塞俄比亚" },
  { id: 'FK', name: "福克兰群岛（马尔维纳斯）" },
  { id: 'FO', name: "法罗群岛" },
  { id: 'FJ', name: "斐济" },
  { id: 'FI', name: "芬兰" },
  { id: 'FR', name: "法国" },
  { id: 'GF', name: "法属圭亚那" },
  { id: 'PF', name: "法属波利尼西亚" },
  { id: 'TF', name: "法属南部领地" },
  { id: 'GA', name: "加蓬" },
  { id: 'GM', name: "冈比亚" },
  { id: 'GE', name: "格鲁吉亚" },
  { id: 'DE', name: "德国" },
  { id: 'GH', name: "加纳" },
  { id: 'GI', name: "直布罗陀" },
  { id: 'GR', name: "希腊" },
  { id: 'GL', name: "格陵兰" },
  { id: 'GD', name: "格林纳达" },
  { id: 'GP', name: "瓜德罗普" },
  { id: 'GU', name: "关岛" },
  { id: 'GT', name: "危地马拉" },
  { id: 'GG', name: "根西岛" },
  { id: 'GN', name: "几内亚" },
  { id: 'GW', name: "几内亚比绍" },
  { id: 'GY', name: "圭亚那" },
  { id: 'HT', name: "海地" },
  { id: 'HM', name: "赫德岛和麦克唐纳群岛" },
  { id: 'VA', name: "梵蒂冈城国" },
  { id: 'HN', name: "洪都拉斯" },
  { id: 'HK', name: "香港" },
  { id: 'HU', name: "匈牙利" },
  { id: 'IS', name: "冰岛" },
  { id: 'IN', name: "印度" },
  { id: 'ID', name: "印度尼西亚" },
  { id: 'IR', name: "伊朗（伊斯兰共和国）" },
  { id: 'IQ', name: "伊拉克" },
  { id: 'IE', name: "爱尔兰" },
  { id: 'IM', name: "马恩岛" },
  { id: 'IL', name: "以色列" },
  { id: 'IT', name: "意大利" },
  { id: 'JM', name: "牙买加" },
  { id: 'JP', name: "日本" },
  { id: 'JE', name: "泽西岛" },
  { id: 'JO', name: "约旦" },
  { id: 'KZ', name: "哈萨克斯坦" },
  { id: 'KE', name: "肯尼亚" },
  { id: 'KI', name: "基里巴斯" },
  { id: 'KP', name: "朝鲜（朝鲜民主主义人民共和国）" },
  { id: 'KR', name: "韩国（大韩民国）" },
  { id: 'KW', name: "科威特" },
  { id: 'KG', name: "吉尔吉斯斯坦" },
  { id: 'LA', name: "老挝人民民主共和国" },
  { id: 'LV', name: "拉脱维亚" },
  { id: 'LB', name: "黎巴嫩" },
  { id: 'LS', name: "莱索托" },
  { id: 'LR', name: "利比里亚" },
  { id: 'LY', name: "利比亚" },
  { id: 'LI', name: "列支敦士登" },
  { id: 'LT', name: "立陶宛" },
  { id: 'LU', name: "卢森堡" },
  { id: 'MO', name: "澳门" },
  { id: 'MG', name: "马达加斯加" },
  { id: 'MW', name: "马拉维" },
  { id: 'MY', name: "马来西亚" },
  { id: 'MV', name: "马尔代夫" },
  { id: 'ML', name: "马里" },
  { id: 'MT', name: "马耳他" },
  { id: 'MH', name: "马绍尔群岛" },
  { id: 'MQ', name: "马提尼克" },
  { id: 'MR', name: "毛里塔尼亚" },
  { id: 'MU', name: "毛里求斯" },
  { id: 'YT', name: "马约特" },
  { id: 'MX', name: "墨西哥" },
  { id: 'FM', name: "密克罗尼西亚联邦" },
  { id: 'MD', name: "摩尔多瓦共和国" },
  { id: 'MC', name: "摩纳哥" },
  { id: 'MN', name: "蒙古" },
  { id: 'ME', name: "黑山" },
  { id: 'MS', name: "蒙特塞拉特" },
  { id: 'MA', name: "摩洛哥" },
  { id: 'MZ', name: "莫桑比克" },
  { id: 'MM', name: "缅甸" },
  { id: 'NA', name: "纳米比亚" },
  { id: 'NR', name: "瑙鲁" },
  { id: 'NP', name: "尼泊尔" },
  { id: 'NL', name: "荷兰" },
  { id: 'NC', name: "新喀里多尼亚" },
  { id: 'NZ', name: "新西兰" },
  { id: 'NI', name: "尼加拉瓜" },
  { id: 'NE', name: "尼日尔" },
  { id: 'NG', name: "尼日利亚" },
  { id: 'NU', name: "纽埃" },
  { id: 'NF', name: "诺福克岛" },
  { id: 'MP', name: "北马里亚纳群岛" },
  { id: 'NO', name: "挪威" },
  { id: 'OM', name: "阿曼" },
  { id: 'PK', name: "巴基斯坦" },
  { id: 'PW', name: "帕劳" },
  { id: 'PS', name: "巴勒斯坦领土" },
  { id: 'PA', name: "巴拿马" },
  { id: 'PG', name: "巴布亚新几内亚" },
  { id: 'PY', name: "巴拉圭" },
  { id: 'PE', name: "秘鲁" },
  { id: 'PH', name: "菲律宾" },
  { id: 'PN', name: "皮特凯恩群岛" },
  { id: 'PL', name: "波兰" },
  { id: 'PT', name: "葡萄牙" },
  { id: 'PR', name: "波多黎各" },
  { id: 'QA', name: "卡塔尔" },
  { id: 'MK', name: "北马其顿共和国" },
  { id: 'RO', name: "罗马尼亚" },
  { id: 'RU', name: "俄罗斯联邦" },
  { id: 'RW', name: "卢旺达" },
  { id: 'RE', name: "留尼汪" },
  { id: 'BL', name: "圣巴泰勒米" },
  { id: 'SH', name: "圣赫勒拿、阿森松和特里斯坦-达库尼亚" },
  { id: 'KN', name: "圣基茨和尼维斯" },
  { id: 'LC', name: "圣卢西亚" },
  { id: 'MF', name: "法属圣马丁" },
  { id: 'PM', name: "圣皮埃尔和密克隆群岛" },
  { id: 'VC', name: "圣文森特和格林纳丁斯" },
  { id: 'WS', name: "萨摩亚" },
  { id: 'SM', name: "圣马力诺" },
  { id: 'ST', name: "圣多美和普林西比" },
  { id: 'SA', name: "沙特阿拉伯" },
  { id: 'SN', name: "塞内加尔" },
  { id: 'RS', name: "塞尔维亚" },
  { id: 'SC', name: "塞舌尔" },
  { id: 'SL', name: "塞拉利昂" },
  { id: 'SG', name: "新加坡" },
  { id: 'SX', name: "荷属圣马丁" },
  { id: 'SK', name: "斯洛伐克" },
  { id: 'SI', name: "斯洛文尼亚" },
  { id: 'SB', name: "所罗门群岛" },
  { id: 'SO', name: "索马里" },
  { id: 'ZA', name: "南非" },
  { id: 'GS', name: "南乔治亚岛和南桑威奇群岛" },
  { id: 'SS', name: "南苏丹" },
  { id: 'ES', name: "西班牙" },
  { id: 'LK', name: "斯里兰卡" },
  { id: 'SD', name: "苏丹" },
  { id: 'SR', name: "苏里南" },
  { id: 'SJ', name: "斯瓦尔巴和扬马延" },
  { id: 'SE', name: "瑞典" },
  { id: 'CH', name: "瑞士" },
  { id: 'SY', name: "叙利亚阿拉伯共和国" },
  { id: 'TW', name: "中国台湾省" },
  { id: 'TJ', name: "塔吉克斯坦" },
  { id: 'TZ', name: "坦桑尼亚联合共和国" },
  { id: 'TH', name: "泰国" },
  { id: 'TL', name: "东帝汶" },
  { id: 'TG', name: "多哥" },
  { id: 'TK', name: "托克劳" },
  { id: 'TO', name: "汤加" },
  { id: 'TT', name: "特立尼达和多巴哥" },
  { id: 'TN', name: "突尼斯" },
  { id: 'TR', name: "土耳其" },
  { id: 'TM', name: "土库曼斯坦" },
  { id: 'TC', name: "特克斯和凯科斯群岛" },
  { id: 'TV', name: "图瓦卢" },
  { id: 'UG', name: "乌干达" },
  { id: 'UA', name: "乌克兰" },
  { id: 'AE', name: "阿拉伯联合酋长国" },
  { id: 'GB', name: "英国" },
  { id: 'UM', name: "美国本土外小岛屿" },
  { id: 'US', name: "美国" },
  { id: 'UY', name: "乌拉圭" },
  { id: 'UZ', name: "乌兹别克斯坦" },
  { id: 'VU', name: "瓦努阿图" },
  { id: 'VE', name: "委内瑞拉玻利瓦尔共和国" },
  { id: 'VN', name: "越南" },
  { id: 'VG', name: "英属维尔京群岛" },
  { id: 'VI', name: "美属维尔京群岛" },
  { id: 'WF', name: "瓦利斯和富图纳群岛" },
  { id: 'EH', name: "西撒哈拉" },
  { id: 'YE', name: "也门" },
  { id: 'ZM', name: "赞比亚" },
  { id: 'ZW', name: "津巴布韦" },
  { id: 'AX', name: "奥兰群岛" },
];

export default countries;