// Time - 77ms, Memory - 44.5MB
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = (intervals) => {
  const sortedIntervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });

  let pointer = 0;

  while (pointer <= sortedIntervals.length) {
    if (sortedIntervals[pointer + 1] === undefined || sortedIntervals[pointer] === undefined) {
      break;
    }

    if (sortedIntervals[pointer][0] <= sortedIntervals[pointer + 1][0] && sortedIntervals[pointer + 1][1] <= sortedIntervals[pointer][1]) {
      let temp = sortedIntervals[pointer];
      sortedIntervals[pointer] = sortedIntervals[pointer + 1];
      sortedIntervals[pointer + 1] = temp;
      continue;
    }

    if (sortedIntervals[pointer + 1][0] <= sortedIntervals[pointer][0] && sortedIntervals[pointer][1] <= sortedIntervals[pointer + 1][1]) {
      sortedIntervals.shift();
      continue;
    }

    pointer += 1;
  }

  return sortedIntervals.length;
};

// 5
console.log(removeCoveredIntervals([[97744, 99177], [9782, 42547], [21210, 35161], [31377, 85790], [53330, 82476], [59552, 64449], [4177, 4511], [22686, 79581], [7900, 55898], [70317, 75508], [48660, 60445], [4175, 59106], [64406, 97296], [2547, 35392], [24716, 42920], [69598, 78736], [74744, 91826], [66305, 69290], [34631, 95035], [23099, 86779], [23707, 83804], [84597, 91731], [76336, 97281], [4507, 19729], [68007, 87741], [47660, 72540], [20096, 72534], [79422, 89929], [66650, 94270], [17827, 46319], [5584, 44234], [52418, 53669], [29550, 79734], [4525, 37837], [26458, 54655], [10550, 97776], [19571, 49453], [62428, 94877], [41642, 76480], [22741, 44283], [40915, 83070], [41016, 59403], [49628, 97532], [2874, 25053], [902, 4508], [17388, 46321], [64582, 70841], [27836, 36686], [29291, 82231], [34819, 96651]]));

// 13
console.log(removeCoveredIntervals([[11995, 28274], [47744, 59720], [11441, 53958], [16599, 88855], [1064, 29223], [814, 10502], [33584, 68326], [3922, 76157], [21581, 44691], [22485, 66281], [3833, 82902], [39990, 64664], [4865, 19289], [42042, 43209], [40467, 44294], [19354, 33796], [29556, 36353], [14098, 28050], [27231, 82353], [33717, 51442], [52063, 98581], [16311, 72217], [69844, 95564], [59750, 99966], [7257, 99401], [25358, 90320], [28025, 52637], [986, 15475], [23651, 87877], [9084, 67602], [49136, 99754], [15145, 67503], [64969, 81015], [69497, 99218], [29095, 84180], [14478, 88739], [27801, 82293], [37572, 61575], [47398, 56480], [13513, 34691], [74792, 87762], [19476, 93602], [73534, 73749], [35694, 84497], [15097, 22418], [22904, 58988], [17327, 63663], [44647, 58185], [14047, 30123], [15791, 87394], [17648, 25528], [43588, 76033], [47477, 93314], [11256, 25063], [3627, 90155], [85314, 89526], [4353, 4476], [13680, 86218], [12310, 41538], [10285, 59116], [42982, 46069], [49709, 74957], [55039, 97308], [91717, 98261], [2154, 53585], [21729, 84287], [15548, 59124], [62752, 78647], [5952, 64203], [12562, 24974], [11126, 34023], [52796, 71583], [35232, 60880], [257, 84911], [49289, 54379], [63009, 95593], [18630, 98663], [81389, 90779], [2462, 63117], [12225, 57519], [15572, 27989], [343, 81821], [28428, 71429], [16874, 70784], [82849, 95017], [9832, 75457], [68658, 88573], [23477, 83343], [7803, 79790], [1125, 88631], [24759, 30914], [22175, 55660], [19739, 86639], [34428, 48437], [71079, 75532], [11226, 32727], [62282, 74386], [9263, 75742], [36841, 79389], [318, 74407], [12796, 24227], [3161, 96658], [65012, 82540], [47392, 68036], [25733, 68241], [42462, 58674], [76731, 82782], [36350, 87080], [48397, 94655], [82808, 94487], [26707, 41603], [7327, 85661], [17227, 38350], [41986, 93270], [57907, 77447], [74647, 86798], [26712, 52358], [1126, 90346], [22050, 22146], [57707, 80158], [52330, 88221], [17409, 89473], [34782, 59232], [46010, 63355], [17475, 40800], [51155, 68804], [17842, 49513], [38047, 45619], [1411, 34335], [84936, 97310], [11622, 66570], [7272, 59801], [54175, 57842], [57519, 91819], [11613, 14858], [9203, 93176], [22547, 52160], [8012, 11383], [7468, 50204], [38525, 79242], [5077, 11469], [49001, 67032], [32169, 70361], [69482, 85407], [27899, 30509], [24268, 57932], [27203, 84936], [75124, 97607], [65235, 98822], [17508, 96812], [79988, 83452], [17604, 47911], [47188, 55419], [37769, 76465], [32266, 43390], [58399, 59555], [78188, 78608], [48013, 88606], [6090, 38292], [15618, 51056], [11419, 36811], [59181, 92429], [30998, 88042], [38675, 57627], [14364, 19964], [22681, 67304], [36128, 88721], [64038, 65355], [84040, 97513], [32519, 56836], [17291, 42032], [23143, 52013], [55964, 85367], [1592, 90786], [25487, 40500], [16765, 97606], [403, 7559], [33947, 40272], [7852, 98655], [55290, 85677], [15450, 16412], [31239, 90865], [46794, 76604], [45177, 49557], [3538, 18767], [23289, 36557], [63962, 65419], [12871, 34855], [66661, 86647], [58938, 68784], [62810, 74787], [52066, 54421], [53032, 81890], [33067, 83157], [87179, 98732], [88281, 92646], [58000, 83643], [54811, 99735], [32485, 34625], [53750, 95280], [1032, 59039], [23170, 34645], [2052, 12934], [37637, 73724], [51678, 80953], [12667, 71458], [17296, 53427], [5217, 79397], [35332, 96420], [82235, 82866], [21995, 97162], [43265, 94064], [33283, 84142], [45523, 94228], [81183, 93535], [40540, 87176], [21049, 85456], [73045, 86312], [596, 89088], [27958, 36392], [15823, 43793], [78864, 96503], [3112, 6248], [34558, 87629], [170, 63369], [66091, 66313], [19301, 54363], [21618, 86468], [63944, 64863], [48803, 85080], [17115, 21437], [31735, 48506], [15760, 53660], [15807, 83699], [6660, 24964], [9774, 63931], [51830, 71985], [19367, 53628], [2381, 3228], [33054, 67317], [16373, 60700], [32222, 59069], [6708, 16931], [16121, 55528], [85444, 89599], [296, 39445], [21894, 40467], [15943, 85034], [6495, 72997], [55629, 67888], [187, 68680], [78572, 89034], [47319, 65716], [5883, 38474], [33772, 50509], [24916, 86379], [40827, 66206], [62272, 98260], [14160, 27333], [39607, 66346], [43100, 74168], [47607, 96756], [17687, 85296], [29744, 78191], [15403, 87331], [39693, 66482], [49830, 69296], [83653, 99221], [62955, 99566], [69331, 86938], [62566, 91629], [42599, 67840], [13782, 85744], [29296, 67885], [7728, 82084], [7466, 21896], [69498, 88962], [30279, 53152], [20352, 80767], [46914, 82249], [58379, 66650], [67337, 99308], [24544, 53440], [13082, 18453], [11286, 64505], [78372, 87606], [19336, 60550], [41037, 53591], [71014, 73010], [2667, 5923], [30854, 47204], [3951, 41034], [92728, 99385], [50407, 70849], [38931, 95734], [38748, 66500], [28177, 44829], [18839, 57625], [85123, 93864], [1564, 80791], [70435, 85236], [87891, 91046], [45962, 75796], [33654, 99879], [5083, 78714], [34698, 53073], [9745, 24084], [2417, 69064], [58445, 73014], [14189, 26072], [46348, 62657], [31278, 38459], [1025, 93923], [24744, 59133], [28286, 37442], [19777, 77046], [39650, 46135], [7336, 51556], [633, 85327], [9911, 93341], [83571, 92955], [21845, 40023], [45722, 45992], [38781, 66706], [60772, 84220], [45143, 84777], [21923, 53341], [26123, 71075], [44796, 97362], [9068, 35478], [63512, 97358], [40660, 96111], [26832, 53881], [58097, 59478], [5140, 59564], [74131, 83639], [55738, 60482], [2564, 19421], [20640, 47655], [83499, 95154], [31412, 64425], [19733, 33881], [78711, 97308], [25617, 78164], [10961, 43164], [14837, 44690], [76221, 94197], [75351, 80421], [38963, 42397], [24525, 84161], [2264, 17008], [39517, 67760], [24628, 61896], [13389, 82393], [23894, 92593], [11882, 87619], [26645, 57686], [1070, 10949], [29417, 54664], [44736, 55447], [31496, 46845], [8850, 49169], [2048, 7183], [74018, 86877], [36968, 44092], [13954, 64886], [19339, 39659], [41383, 96086], [4400, 93455], [34588, 50791], [61109, 69504], [901, 15073], [43542, 82298], [28528, 97347], [10719, 22277], [50406, 52449], [10926, 62637], [55405, 96800], [50404, 65436], [43353, 77943], [40939, 68376], [80876, 86225], [1227, 51096], [28889, 96044], [26444, 81158], [16166, 27286], [88794, 97171], [25613, 89537], [77593, 84473], [20127, 82330], [13966, 96649], [91435, 92472], [42325, 90282], [32473, 98249], [80137, 85542], [39355, 59651], [2766, 23926], [15484, 30163], [79, 19049], [30527, 85535], [55364, 65209], [53056, 58181], [84710, 91944], [1287, 97565], [187, 38077], [25806, 67468], [20667, 89373], [68384, 76159], [30927, 67655], [35511, 60066], [3847, 96087], [29352, 72233], [33108, 90153], [20230, 96249], [41298, 86352], [55059, 99018], [69569, 99498], [16352, 56530], [27254, 76657], [43035, 96944], [93541, 98866], [47915, 93154], [11360, 58261], [2982, 74934], [35833, 85595], [15317, 81510], [62398, 64315], [60852, 99537], [77957, 95681], [35941, 93756], [42322, 74522], [32016, 76043], [79069, 87006], [3394, 5815], [31837, 48965], [20751, 76362], [46162, 85914], [31741, 45165], [4799, 74344], [77896, 82901], [32007, 62867], [7354, 25926], [81197, 82740], [8254, 75080], [9725, 44337], [7647, 59684], [58892, 97956], [62939, 89601], [58816, 85162], [16761, 46861], [8990, 14902], [11685, 40244], [2516, 48562], [58455, 86912], [1388, 67217], [7288, 90632], [48245, 96035], [75585, 89832], [47217, 66249], [37385, 70076], [15460, 22202], [841, 76737], [57203, 94193], [85792, 86800], [65188, 80071], [47040, 69938], [71563, 75091], [29798, 95116], [39473, 69386], [30565, 80186], [11304, 91614], [27544, 64933], [4853, 69539], [17384, 67114], [13579, 99374], [39513, 78109], [27786, 69981], [33841, 56604], [67025, 73289], [45707, 70237], [31667, 67121], [10795, 42593], [11709, 76983], [5695, 58506], [42652, 65384], [54115, 76078], [16075, 80456], [38118, 66296], [39525, 98821], [58917, 72307], [65726, 82094], [6559, 24523], [9749, 60518], [9183, 37856], [42181, 82770], [52516, 73016], [30708, 68339], [55656, 72383], [54481, 99620], [48034, 52992], [12842, 37848], [59903, 91834], [58065, 84441], [28214, 63721], [17546, 80637], [51801, 91076], [71205, 95471], [22316, 28656], [17568, 87339], [4175, 28303], [49895, 92642], [25027, 70707], [34965, 65729], [27311, 95881], [1182, 60216], [36634, 42535], [51766, 54843], [69465, 80039], [19408, 75584], [13063, 71166], [58006, 94576], [54817, 81182], [34308, 98488], [62862, 85785], [23883, 60134], [42925, 76344], [27449, 71914], [22834, 85499], [13126, 80279], [61720, 82244], [15456, 38104], [43215, 77712], [31195, 45676], [11071, 27718], [50010, 89318], [49926, 51355], [61225, 66685], [5568, 88553], [16153, 71115], [14264, 17885], [38182, 60405], [20007, 81259], [84210, 98808], [45060, 54166], [75004, 87685], [54014, 76015], [25765, 43672], [21083, 36108], [79613, 90611], [72433, 80386], [25304, 43022], [52094, 94386], [40327, 89872], [48486, 72795], [27820, 73609], [2794, 72730], [4921, 99192], [8393, 46533], [29049, 89524], [15597, 37529], [60124, 84793], [8174, 64378], [3226, 10621], [35397, 46115], [9978, 47544], [84259, 96299], [4830, 42750], [68528, 94633], [54049, 74230], [11747, 27970], [3855, 31228], [7538, 41632], [2144, 34265], [43490, 59596], [48635, 54643], [4482, 29810], [338, 25687], [24417, 58823], [18504, 68573], [8776, 95468], [43263, 70438], [6870, 47155], [5617, 50070], [42192, 47038], [81076, 87044], [83040, 83827], [22947, 58147], [76486, 84789], [54558, 59696], [35313, 68591], [56831, 83104], [13728, 34620], [892, 35095], [30423, 65149], [18201, 36482], [35452, 36132], [61124, 67132], [9209, 36636], [60863, 74755], [10516, 24803], [11932, 60997], [44833, 47723], [22198, 91329], [16035, 83876], [27480, 53545], [3416, 47093], [33743, 98306], [7703, 81581], [22112, 70578], [20311, 99544], [52958, 90949], [23202, 44693], [39383, 43663], [31817, 44296], [52041, 71889], [43214, 82820], [29437, 95257], [28470, 82015], [75578, 85661], [72840, 76394], [11342, 28055], [9497, 34214], [38192, 91055], [54914, 94161], [52167, 85829], [10536, 62305], [16177, 92358], [38279, 56947], [52432, 99381], [9051, 18722], [18276, 91673], [13660, 71478], [49901, 72306], [48132, 62454], [10700, 45816], [26733, 49335], [11017, 63771], [9914, 31042], [1594, 67842], [18728, 73613], [18894, 77368], [19761, 60156], [66778, 70564], [1976, 36290], [26368, 33869], [28418, 97276], [7819, 24955], [29098, 62640], [1574, 18127], [35574, 96433], [7375, 90686], [12860, 43079], [6416, 80786], [91318, 98333], [5602, 58323], [23429, 45674], [85244, 87578], [21079, 82059], [57777, 73351], [73240, 96811], [14376, 32204], [68789, 87483], [73133, 96598], [6085, 32918], [2688, 32103], [50784, 72859], [15326, 45994], [3168, 53191], [23811, 44014], [30745, 86997], [17320, 93384], [21221, 45424], [15490, 44685], [11119, 22261], [5887, 75336], [11829, 20518], [2514, 5384], [6074, 51068], [4139, 7345], [5847, 21677], [7368, 80470], [60496, 83689], [57556, 98087], [21321, 59002], [9652, 37755], [38524, 97520], [85776, 95259], [83472, 88451], [29039, 74514], [3954, 59339], [17013, 56960], [26583, 95258], [47778, 66233], [45684, 65026], [29117, 69748], [25250, 69915], [30085, 78835], [31071, 54224], [34424, 60953], [17381, 91534], [3174, 66718], [11854, 63496], [10036, 13196], [10589, 37589], [1465, 85275], [33809, 58132], [3615, 32098], [76856, 88134], [56056, 68096], [46263, 93479], [19645, 80888], [7611, 37544], [42997, 88382], [44803, 99099], [10372, 12058], [6562, 90464], [56481, 86497], [30477, 72537], [9701, 27059], [80662, 95868], [47803, 59619], [13801, 60326], [11191, 85602], [71054, 80491], [15516, 83414], [58202, 94020], [58865, 91885], [50219, 87712], [18277, 83618], [39260, 89885], [5084, 55687], [19183, 36191], [63928, 67097], [41574, 94227], [15883, 19250], [194, 5409], [72984, 85564], [6450, 7711], [7326, 35946], [57924, 98059], [5203, 77398], [60755, 87876], [12193, 86007], [9341, 36825], [34398, 36304], [54429, 68324], [72602, 92486], [46379, 95695], [22330, 31086], [53907, 54259], [10077, 95268], [1525, 38999], [2589, 40825], [50766, 98805], [32503, 35209], [19185, 68034], [66654, 67142], [78489, 97189], [60140, 66378], [23195, 38700], [70249, 70487], [42031, 52602], [54445, 83920], [30404, 64171], [39887, 60521], [22953, 75951], [29919, 58912], [44089, 63237], [68898, 85027], [38196, 66189], [80884, 90011], [32589, 41450], [22824, 38767], [53016, 97948], [14469, 66917], [44238, 63444], [827, 19214], [5966, 58865], [18843, 55342], [54102, 97088], [46245, 63384], [39285, 71530], [13801, 78739], [48567, 96620], [48364, 57842], [55099, 87358], [40424, 50460], [55429, 65403], [7233, 14062], [64514, 66636], [37846, 53196], [16028, 44377], [2141, 94708], [5163, 34321], [39565, 66508], [43151, 58650], [1258, 8976], [31947, 54973], [52851, 58521], [2071, 32998], [18058, 43853], [13068, 74408], [9276, 60508], [45791, 87900], [43160, 98237], [64285, 70478], [12519, 52657], [56397, 64097], [55406, 64900], [28822, 73168], [2245, 32992], [8055, 97337], [74712, 90381], [3287, 20683], [1858, 69725], [15135, 74483], [25182, 45512], [32602, 55587], [46562, 51647], [14848, 70943], [11241, 87025], [597, 58251], [28694, 48052], [92614, 97712], [40740, 51869], [12579, 98048], [10880, 80063], [67436, 89657], [37451, 44282], [20452, 42663], [40940, 57973], [17776, 45739], [59299, 80680], [72766, 98406], [27743, 70788], [9119, 77517], [42442, 69154], [69721, 80753], [18367, 55353], [30451, 90018], [18456, 25037], [55022, 64078], [9264, 68370], [60606, 76861], [39311, 92700], [36267, 72600], [2261, 46124], [1128, 5747], [13384, 36348], [22325, 43474], [35054, 82334], [2951, 20169], [45668, 74502], [6223, 62667], [73090, 91267], [37463, 87112], [32846, 75529], [26399, 94166], [12172, 57303], [12345, 79223], [755, 24846], [9011, 42300], [13755, 92188], [11014, 16840], [68612, 93029], [10143, 20531], [14834, 78781], [12174, 15049], [54028, 79335], [41907, 79990], [47756, 99719], [18719, 98161], [28774, 36893], [16862, 99355], [33081, 91114], [1066, 81155], [48092, 49664], [60944, 74521], [75919, 97345], [33102, 37327], [66168, 74296], [14131, 70206], [23625, 58469], [4603, 29433], [70306, 75330], [64692, 86321], [87176, 96021], [70986, 98515], [19123, 63332], [46414, 65336], [86796, 93664], [25959, 42116], [8217, 70970], [30036, 62129], [19220, 95030], [37803, 44630], [4722, 6695], [4398, 65357], [18963, 99454], [12875, 63242], [401, 72348], [78829, 90985], [12785, 82667], [9484, 13846], [16449, 86524], [1324, 64979], [47915, 86157], [59312, 61693], [21864, 73973], [54222, 93245], [19371, 89608], [19732, 94772], [72195, 95899], [45810, 87127], [2473, 14617], [19661, 32823], [33387, 90468], [23002, 45857], [67096, 97540], [32273, 88620], [17030, 87020], [43708, 73847], [87299, 90541], [16602, 80945], [23082, 61084], [15593, 70802], [54157, 61796], [36031, 74619], [75740, 81180], [4590, 49415], [44158, 71687], [19200, 68593], [6933, 34152], [9037, 12207], [49951, 69407], [5961, 19950], [48306, 50176], [60930, 67235], [53010, 78553], [60752, 96047], [7441, 97241], [32357, 72901], [3365, 30548], [64257, 87185], [62128, 92422], [7251, 77890], [44958, 74074], [67956, 83576], [73697, 81252], [57683, 75151], [49586, 58747], [10732, 37899], [22913, 71055], [38636, 86675], [25314, 90336], [29960, 88526], [8139, 85634], [53492, 70756], [25732, 86609], [25017, 44491], [44635, 84151], [33871, 64035], [28075, 69615], [8652, 65197], [12943, 21697], [60556, 63172], [351, 13774], [10611, 59442], [11508, 78158], [79893, 94964], [15321, 68225], [20097, 87133], [37985, 58282], [65507, 78149], [1807, 52152], [7968, 73999], [71498, 93356], [2559, 76050], [29246, 59139], [18548, 44218], [10090, 36249], [873, 43005], [11072, 35552], [6938, 27637], [72770, 90197], [12780, 53537], [54810, 62637], [63593, 90651], [14345, 77146], [38719, 58106], [15319, 54566], [55364, 67000], [39718, 98549], [14513, 72963], [25587, 96809], [32196, 37856], [26063, 57720], [71218, 87559], [2137, 84774], [54678, 63395]]));

// 1
console.log(removeCoveredIntervals([[1, 2], [1, 4], [3, 4]]));

// 2
console.log(removeCoveredIntervals([[34335, 39239], [15875, 91969], [29673, 66453], [53548, 69161], [40618, 93111]]));

// 2
console.log(removeCoveredIntervals([[3, 10], [4, 10], [5, 11]]));

// 2
console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]]));

// 1
console.log(removeCoveredIntervals([[1, 4], [2, 3]]));