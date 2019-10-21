const linkify = require("linkifyjs")
const mail = require("nodemailer")
const conf = require("./conf")

let emails = []

let str = `1 

Ziyaad Seedat
071 222 2222




APK 6 10 CAROLINE STREET,
BRIXTON,
JOHANNESBURG, 2019
45
Closeby
Accommodation
Jacques van der Walt
0826014690
incrediblegates@telkomsa.net
Aloma Hees
0845840466
APK 10 14 FULHAM ROAD,
BRIXTON,
JOHANNESBURG, 2092
46
DELIA DUNBAR Anet Du Preez
082 853 0304
Charntelle Du Preez
079 877 2693

APK 8 26 Huntley street, Hurst
hill, johannesburg, 2091
12 | P a g e
47
DELIA DUNBAR Anet Du Preez
082 853 0304
mbongi1933@gmail.com
Charntelle Du Preez
079 877 2693

APK
5 5 Huntley street, Hurst
Hill, Johannesburg, 2091
48
DJD TRUST Francois Smit
083 280 5786
fsmit06@gmail.com
Gerda Smit
083 376 1102
fsmit06@gmail.com
APK
5 1 Bushey Road,
Rossmore, Johannesburg,
2092
49
DJD TRUST Francois Smit
0832805786
fsmit06@gmail.com
Gerda Smit
0833761102
APK 12 171 Perth Road
Westdene
Johannesburg
2092
50
DOCEM FAMILY
TRUST
Ebrahim Abdool Majid
082 677 0535
emajid5@gmail.com
Yusuf Majid
0746031110
ymajid9@gmail.com
APK
8 126 Fulham Road, 126
Fulham Road, Brixton,
2019
51
DOCEM FAMILY
TRUST
Ebrahim Abdool Majid
082 677 0535
emajid5@gmail.com
Yusuf Majid
0746031110
APK 16 20 High Street, 20 High
Street, Crosby, 2092
13 | P a g e
ymajid9@gmail.com
52
DV & LK PARKERS Dion Parker
071 440 5091
dionp@bankservafrica.com
Anet Du Preez
082 853 0304
doepies@mweb.co.za
APK 8 44A First Avenue,
Westdene
53
EMERITIUS
INVESTMENTS 33
(PTY) LTD
Anet Du Preez
082 853 0304

Charntelle Du Preez
079 877 2693

APK 27 85 Main road, Newlands,
Johannesburg, 2091
54
Fareraah Trading
Enterprise
Ntjeka Rebecca Monaheng
076 759 8189
johannes@nlcsa.org.za
Ramosai Johannes Nkutshweu
082 805 0995
Johannes@nlcsa.org.za
APK 8 7 Chiswick Brixton,
Johannesburg, 7 Chiswick
brixton, Johannesburg,
2092
55
Fasa Properties CC Ebrahim Mohamed
0836001300
ebrahmkulfi@gmail.com
Ashraf Ebrahim Mohamed
0833801234
APK 13 4 ACTON ROAD/23
CAROLINE STREET,
BRIXTON,
JOHANNESBURG, 2000
14 | P a g e
56
Fasa Properties CC Ebrahim Mohamed
0836001300
ebrahmkulfi@gmail.com
Ashraf Ebrahim Mohamed
0833801234
APK 8 122 FULHAM ROAD,
Brixton, Johannesburg,
2000
57
Fasa Properties CC Ebrahim Mohamed
0836001300
ebrahmkulfi@gmail.com
Ashraf Ebrahim Mohamed
0833801234
APK 14 26 Caroline Street,
Brixton, Johannesburg,
2000
58
FOGP Financial
Management Services
(Pty)Ltd
Melonie Phillips
0829014446
meloniebp@gmail.com
Angelique Eagle
0795003201
APK 3 91A 1st Avenue, Melville,
Johannesburg, 2001
59
FOGP Financial
Management Services
(Pty)Ltd
Melonie Phillips
0829014446
meloniebp@gmail.com
Angelique Eagle
0795003201
APK 9 35A Stafford Street,
Westdene, Johannesburg,
2001
60
FOGP Financial
Management Services
(Pty)Ltd
Melonie Phillips
0829014446
meloniebp@gmail.com
APK 9 66 St Swithin Street,
Auckland Park,
Johannesburg, 2001
15 | P a g e
Angelique Eagle
0795003201
61
FOGP Financial
Management Services
(Pty)Ltd
Melonie Phillips
0829014446
meloniebp@gmail.com
Angelique Eagle
0795003201
APK 12 44 Menton Street,
Richmond, Johannesburg,
2001
62
Grass Root Project
Management
Floyd Rezant
0844653358
info@ribsis-bnb.co.za
Shahima Rezant
0844492929
APK 8 30 Fulham street, Brixton,
Johannesburg, 1902
63
HANNEMANN
HOMEOPATHICS
PTY LTD
Jo Cilliers
082 578 0715
jo@umlozi.com
Anet Du Preez
082 853 0304
doepies@mweb.co.za
APK 7 100 Aberdeen, Westdene,
Johannesburg, 2092
64
HANNEMANN
HOMEOPATHICS
PTY LTD
Jo Cilliers
082 578 0715
jo@umlozi.com
Anet Du Preez
082 853 0304
doepies@mweb.co.za
APK 11 131 Caroline Street,
Brixton, Johannesburg,
2092
16 | P a g e
65
HANNEMANN
HOMEOPATHICS
PTY LTD
Jo Cilliers
082 578 0715
jo@umlozi.com
Anet Du Preez
082 853 0304
doepies@mweb.co.za
APK 14 133 Caroline Street,
Brixton, Johannesburg,
2092
66
HANNEMANN
HOMEOPATHICS
PTY LTD
Jo Cilliers
082 578 0715
khumalothssto87@gmail.com
Anet Du Preez
082 853 0304
doepies@mweb.co.za
APK 8 133 Fulham road, Brixton,
Johannesburg, 2092
67
HANNEMANN
HOMEOPATHICS
PTY LTD
Jo Cilliers
082 578 0715
khumalothssto87@gmail.com
Anet Du Preez
082 853 0304
doepies@mweb.co.za
APK 10 115 Caroline Street
Brixton
Johannesburg
2092
68
HEADFORD GUEST
HOUSE
hamida nagdee
0825567652
headford@mweb.co.za
APK 9 70 Headford Avenue,
Crosby, Johannesburg,
2092
17 | P a g e
Koos Niemand
0828828361
69
Hlala Kamnandi
Properties
Johann Cornel Phillip Grobler
0829555950
minky@hlalakamnandi.co.za
Minky Mhlongo
0732560297
APK 10
34 HAMPTON AVENUE,
ROSSMORE,
JOHANNESBURG, 2092
70
Mmakola Investments keletso Mmakola
0760278152
kelem09@gmail.com
keletso mmakola
0760278152
APK 46 3 Threadneedle Street,
Hurst Hill, Johannesburg,
2092
71
Mmakola Investments keletso Mmakola
0760278152
kelem09@gmail.com
keletso mmakola
0760278152
APK
8 21 Huntley Street , Hurst
Hill, Johannesburg,
Johannesburg, 2092
72
JJD
TESTAMENTORY
TRUST
Anet Du Preez
08
2 853 0304
boohlesibanyoni@gmail.com
Charntelle Du Preez
079 877 2693

APK
8 9 Huntley street, Hurst hill,
Johannesburg, 2091
73
JJD
TESTAMENTORY
TRUST
Anet Du Preez
082 853 0304
boohlesibanyoni@gmail.com
Charntelle Du Preez
079 877 2693

APK
8 15 Huntley Street, HURST
HILL, JOHANNESBURG,
2091
74
JJD
TESTAMENTORY
TRUST
Anet Du Preez
082 853 0304
boohlesibanyoni@gmail.com
APK
8 13 Huntley street, Hurst
hill, Johannesburg, 2091
18 | P a g e
Charntelle Du Preez
079 877 2693

75
JJD
TESTAMENTORY
TRUST
Anet Du Preez
082 853 0304
boohlesibanyoni@gmail.com
Charntelle Du Preez
079 877 2693

APK 8 166 Fulham Road,
BRIXTON,
JOHANNESBURG, 2092
76
JJD
TESTAMENTORY
TRUST
Anet Du Preez
082 853 0304
boohlesibanyoni@gmail.com
Charntelle Du Preez
079 877 2693

APK 8 12 Caroline Street,
BRIXTON,
JOHANNESBURG, 2091
77
JJD
TESTAMENTORY
TRUST
Anet Du Preez
082 853 0304
boohlesibanyoni@gmail.com
Charntelle Du Preez
079 877 2693

APK 8 11 Huntley street, Hurst
hill, Johannesburg, 2092
78
JOSEPHWING
RESIDENCE (PTY)
LTD
Hayden Hartley
0832946567

Charntelle Du Preez
0798772693
APK 109 150 CAROLINE STREET,
BRIXTON, Johannesburg,
2092
79
kgo's palace (pty) ltd Makgoshi Lizzette Monare
0110835453
lizzettemonare@yahoo.com
APK 7 46 Barnes road, brixton,
johannesburg, 2029
19 | P a g e
fundiswa nzimande
0606660262
80
kgo's palace (pty) ltd Makgoshi Lizzette Monare
0110835453
lizzettemonare@yahoo.com
fundiswa nzimande
0606660262
APK 7 158 fulham road, brixton,
johannesburg, 2029
81
khanya ngo lwazi
(pty)ltd
thabo siso sibanda
0828610311
tssibanda@yahoo.co.uk
lesego sibanda
0724464953
APK 14 20 Plunkett Avenue,
hursthill, johannesburg,
2092
82
KHOZI PROJECTS
(PTY) LTD
Dumisani Kweyama
082 566 6445
kweyamad@vodamail.co.za
Nomusa Kweyama
072 125 5765
kweyaman@sabc.co.za
APK 8 149 Collins Street,
Brixton, Johannesburg,
2109
20 | P a g e
83
KHOZI PROJECTS
(PTY) LTD
Dumisani Kweyama
082 566 6445
kweyamad@vodamail.co.za
Nomusa Kweyama
072 125 5765
kweyaman@sabc.co.za
APK 8 158 Collins Street,
Brixton, Johannesburg,
2109
84
KHOZI PROJECTS
(PTY) LTD
Dumisani Kweyama
082 566 6445
kweyamad@vodamail.co.za
Nomusa Kweyama
072 125 5765
kweyaman@sabc.co.za
APK 8 40 Portland Street,
Hhursthill, Johannesburg,
2109
85
Kiss Properties (Pty)
Ltd
Marcel Maree
0735856756
ecklepp@gmail.com
Paul Dedlow
0722063935
APK 9 50 Ararat, Westdene,
Johannesburg, 2092
86
Kiss Properties (Pty)
Ltd Marcel Maree
0735856756
APK 5 7 Korea Street,
Westdene, Johannesburg,
2092
21 | P a g e
ecklepp@gmail.com
Paul Dedlow
0722063935
87
Kiss Properties (Pty)
Ltd
Marcel Maree
0735856756 ecklepp@gmail.com
Paul Dedlow
0722063935
APK 9 8 Third Ave, Melville
Johannesburg, 2092
88
KUTLEANO YA
BOKAMOSO
Kgosi Makhene
0827623929
gettyns@gmail.com
Getty Makhene
732103189
APK 6 15 6th Street, Vrededorp,
Johannesburg, 2092
89
LAPENG STUDENT
ACCOMMODATION
Sizwe Noruwana
082 667 0295
sizwe.noruwana@gmail.com
Lindiwe Noruwana
060 975 3658
lindiwe.noruwana@gmail.com
APK 9 77 Collins Street, Brixton,
Jonannesburg, 2092
90
LAPENG STUDENT
ACCOMMODATION
Sizwe Noruwana
082 667 0295
sizwe.noruwana@gmail.
Lindiwe Noruwana
060 975 3658
lindiwe.noruwana@gmail.com
APK 13 79 & 79A Collins Street,
Brixton, Johannesburg,
2092
91
LAPENG STUDENT
ACCOMMODATION
Sizwe Noruwana APK 10 18 Plunkett Avenue,
Hurshill
22 | P a g e
0826670295
lapengstudents@gmail.com
Lindiwe Noruwana
0609753658
Johannesburg
2092
92
LEHAENG-EKHAYA
PROPERTY
INVESTMENTS
Mlungisi Ntsele
071 525 7320
 ntselemlungisi4@gmail.com
Zoyisile Mshunqane
082 896 7137
zmshunqane@gmail.com
APK 8 12 Seymour Street,
Westdene, Johannesburg,
2092
93
LEHAENG-EKHAYA
PROPERTY
INVESTMENTS
Mlungisi Ntsele
071 525 7320
ntselemlungisi4@gmail.com
Zoyisile Mshunqane
082 896 7137
zmshunqane@gmail.com
APK 10 27 3rd Avenue,
Westdene, JHB, 2092
94
LUCKIE
PROPERTIES AND
PROJECTS
Mutshutshu Steven Mamphaga
0823240493
mamphagasteve@gmail.com
Gadifele Mamphaga
0827124234
APK 16 23 KATJIEPERING STR
JAN HOFMEYER TOWN,
23 KATJIEPERING STR
JAN HOFMEYER TOWN, 
23 | P a g e
Johannesburg, 2092
95
MAFADI PROPERTY
MANAGEMENT
Ronell van Deventer
071 267 6849
 clinton1@mafadi.co.za
 Clinton Moodlly
0825883199
brixton@mafadi.co.za
APK 45 145 High Street, Brixton,
Johannesburg, 2092
96
MAFADI PROPERTY
MANAGEMENT
Ronell van Deventer
071 267 6849
 clinton1@mafadi.co.za
 Clinton Moodlly
0825883199
brixton@mafadi.co.za
APK 28 147 High Street, Brixton,
Johannesburg, 2092
97
Mafadi Property
Management
Clinton Moodley
0825883199
brixton@mafadi.co.za
Neville Hewett
0713326832
APK
9 10 Huntley, Hursthill,
Johannesburg, 2042
98
MALIBU ESTATES Hester Boshoff
083 788 1204
malibu@absamail.co.za
Mike King
084 062 4401
malibu@absamail.co.za
APK
8 153 Collins Street,
Brixton, Johannesburg,
2019
99
MALIBU ESTATES Hester Boshoff
083 788 1204
malibu@absamail.co.za
Mike King
084 062 4401
malibu@absamail.co.za
APK
6 27 Threadneedle Street,
Brixton, Johannesburg,
2109
24 | P a g e
100
Mat Projects
Management
Tebogo Madumo
0763487049
tebogo.matprojects@gmail.com
Tebogo Madumo
0743615006
APK 12 14 caroline street, brixton,
JOHANNESBURG, 1868
101
MF SAJIB Fartun Kanyare
0749764847
kanyare@gmail.com
Bilal Dubow
0622880805
APK 10 4 Ludlow Rd
Westdene
Johannesburg
2092
102
Mgcina Properties Zongezile Mgcina
0735533741
z_mgcina@yahoo.com
Lungile Mgcina
0733866576
APK 6 27 First Avenue,
Westdene, Johannesburg,
2092
103
MOONLAND
TRADING
momo baholo-phakela
084 775 0221
momo@live.co.za
momo baholo-phakela
073 799 2627
APK 50 5 lime street, sunnyside,
johannesburg, 2092
25 | P a g e
momo@live.co.za
104
Motseothata Kujane Motseothata Kujane
0796767211
benedictor.gaorenwe@gmail.com
Motseothata Kujane
0796767211
APK 10 95 Barnes Road Brixton,
Johannesburg, 2192
105
Nolwando Bomela Campbell Bomela
0832838994
campbell@westpropgroup.com
Nolwando (Bomela) Maoto
728880831
APK 24 101 Perth Road,
Westdene, Johannesburg,
2092
106
NONIE RASHAMA
TRADING
Palesa Rashama
078 934 1538
nonierashamatrading@gmail.com
Thandi Rashama
078 532 1790
APK 6 124 Collins Street Brixton,
124 Collins Street Brixton,
Johannesburg, 2000
107
Ntwanano and Mfumo
105 cc
Errol Ngobeni
0843911758
ngobeni.mza@gmail.com
Sibusiso Vilakazi
849514802
APK 7 8 Huntley Street, Hurst
Hill, Johannesburg, 2092
108
Papo Communications Thabo Serame
0733258270
thabo.serame@gmail.com
Thabo Serame
0814981076
APK 8 11 RIEBEEK STREET,
HURST HILL,
JOHANNESBURG, 2092
26 | P a g e
109
Patrick Randles Patrick Randles
0722390660
patrand3@gmail.com
Shenaaz Randles
0721399809
APK 7 74 PUTNEY STREET,
BRIXTON,
JOHANNESBUG, 2092
110
PESCANOVA
TRADING
Yusuf Moosa
0836991001
yusufmoosa3@gmail.com
Hazel Sibanda
0733751794
APK 10 26 A Banbury Road,
Westedene
Johannesburg
2092
111
PESCANOVA
TRADING (PTY) LTD
Yusuf Moosa
083 699 1001
yusufmoosa3@gmail.com
Hazel Sibanda
073 375 1794
yusufadmn95@gmail.com
APK 10 152 Caroline Street,
Brixton, Johannesburg,
2019
112
Pescanova Trading
(PTY) LTD
Yusuf Moosa
0836991001
yusufmoosa3@gmail.com
Hazel Sibanda
0733751794
APK 13 101 Caroline Street,
Brixton, Johannesburg,
2019
27 | P a g e
113
Pescanova Trading
(PTY) LTD
Yusuf Moosa
0836991001
yusufmoosa3@gmail.com
Hazel Sibanda
0733751794
APK 14 103 Caroline Street,
Brixton, Johannesburg,
2019
114
PIERRE
SERFONTEIN
Anet Du Preez
0828530304
west56ararat@gmail.com
Ruan Du Preez
APK 8 56 Ararat street Westdene
Johannesburg
2092
115
PIETER AND WILNA
PROPERTIES
Pieter Hugo
082 901 0550
prop@isd.strl.co.za
Wilna Havemann
083 258 8480
Havemann7@gmail.com
APK 10 14 Huntley Street, Hurst
Hill, Johannesburg, 2092
116
RAPID DAWN
1276CC
Ayesha Waja
082 572 4248
awaja@telkomsa.net
Shauket Waja
082 337 5420
westdene@wajadentalsurgeries.co.za
APK 20 23A Thornton Road,
Westdene, Johannesburg,
2092
28 | P a g e
117
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK
7 16 Huntley Rd, Hursthill,
Johannesburg, 2092
118
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK
9 12 Huntley Rd, Hursthill,
Johannesburg, 2092
119
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK
8 58 Gold Street,
Sophiatown,
Johannesburg, 2092
120
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK 10 17 Huntley, Hurst Hill,
Johannesburg, 2092
121
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK 10 47 Collins, Brixton,
Johannesburg, 2092
29 | P a g e
122
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK
8 24 Gold Street,
Sophiatown,
Johannesburg, 2092
123
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK 10 28a Toby street,
Westdene, Johannesburg,
2092
124
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK
8 47 Good Street,
Sophiatown,
Johannesburg, 2092
125
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK
9 55 Good street,
Sophiatown,
Johannesburg, 2092
126
RENT 360 Orly Shapiro
072 766 6302
daniels@ssda.co.za
Titus Moyo
072 766 6302
info@rent360.co.za
APK 10 68a 3rd Avenue,
Westdene, Johannesburg,
2092
127 Richmond Property Edelweiss Gray APK 665 59 Richmond Ave, 
30 | P a g e
Management (Pty) Ltd 0829209159
pieter@feenstragroup.co.za
Tlhalefo Thipe
0722524197
Auckland Park,
Johannesburg, 2001
128
Richmond Property
Management (Pty) Ltd
Edelweiss Gray
0829209159
pieter@feenstragroup.co.za
Tlhalefo Thipe
0722524197
APK 392 42 Richmond Ave,
Auckland Park,
Johannesburg, 2001
129
Richmond Property
Management (Pty) Ltd
Edelweiss Gray
0829209159
pieter@feenstragroup.co.za
Tlhalefo Thipe
0722524197
APK 392 38 Richmond Ave,
Auckland Park,
Johannesburg, 2001
130
RITZSHELF 1071CC
T/A FENCORP
GROUP
Jonny Fenster
0825523291
fencorp@global.co.za
Ignatius (Eric) Tshuma
0769304762
APK 6 Fulham Estate
60 Fullham Road, Brixton
31 | P a g e
131
RITZSHELF 1071CC
T/A FENCORP
GROUP
Jonny Fenster
0825523291
fencorp@global.co.za
Ignatius (Eric) Tshuma
0769304762
APK 7 62 Fullham Road, Brixton
132
RITZSHELF 1071CC
T/A FENCORP
GROUP
Jonny Fenster
0825523291
fencorp@global.co.za
Ignatius (Eric) Tshuma
0769304762
APK 8 64 A & B Fullham Road,
Brixton
133
RITZSHELF 1071CC
T/A FENCORP
GROUP
Jonny Fenster
0825523291
fencorp@global.co.za
Ignatius (Eric) Tshuma
0769304762
APK 8 21 Ripley Road, Brixton
134
S2A PROPERTY
PORTFOLIO AND
DESIGN BUILD
Nothando Tshuma
082 976 5458
sabelo@s2a.co.za
Sabelo Sithole
082 219 9186
nomcebo@s2a.co.za
APK 8 5 & 5A Ripley Road,
Brixton, Johannesburg,
2092
32 | P a g e
135
S2a Property Portfolio
And Design Build
Nothando Tshuma
082 976 5458
sabelo@s2a.co.za
Sabelo Sithole
082 219 9186
nomcebo@s2a.co.za
APK 8 73 & 73A High Street,
Brixton, Johannesburg,
2092
136
S2A PROPERTY
PORTFOLIO AND
DESIGN BUILD
Nothando Tshuma
082 976 5458
sabelo@s2a.co.za
Sabelo Sithole
082 2199186
nomcebo@s2a.co.za
APK 8 1 & 1A Ripley Road,
Brixton, Johannesburg,
2092
137
S2A PROPERTY
PORTFOLIO AND
DESIGN BUILD
Nothando Tshuma
082 976 5458
sabelo@s2a.co.za
Sabelo Sithole
082 2199186
nomcebo@s2a.co.za
APK 9 75 High Street, Brixton,
Johannesburg, 2092
138
sayedsguesthouse ismail sayed
0762873237
sayedsguesthouse@gmail.com
sarah fakroodeen
0646068167
APK 8 21 isleworth road, brixton,
johannesburg, 2000
33 | P a g e
139
SCARLET RIBBON
PROPERTIES 43
(PTY) LTD
ANET DU PREEZ
082 853 0304
lungisani.mthimkulu@gmail.com
CHARNTELLE DU PREEZ
079 877 2693

APK 234
32 Threadneedle Street,
Hurst Hill, Johannesburg,
2091
140
Sesu Holdings pvt ltd Sheela Agrawal
0837785858
ashokhagrawal@gmail.com
Ashok Agrawal
0741400332
APK 10 58 Collins Street, Brixton,
Johannesburg, 2092
141
Sesu Holdings pvt ltd Sheela Agrawal
0837785858
ashokhagrawal@gmail.com
Ashok Agrawal
0741400332
APK 8 169 Caroline Street,
Brixton, Johannesburg,
2092
142
Socks Property
Investment (pty)ltd
John Masokameng
823778403
philamasokameng@gmail.com
APK 8 31 Barnes Street, Brixton,
Johannesburg, 2000
34 | P a g e
Silvia Masokameng
718731635
143
Street Talk Trading 17
CC t/a J-One
Michelle Abrahams
0731305151
mail@j-prop.com
Ebrahim Joosub
0828404082
APK 500 1-4 Leyds Street, Corner
Biccard Street,
Braamfontein, 2001
144
STUDENTDIGZ Phawu Nyembe
083 547 3924
pnyembe@ihsinvestments.co.za
Erin O'Brien
078 258 0865
erin@studentdigz.co.za
APK 653 11 Hospital Street,
Joubert Park,
Johannesburg, 2000
145
STUDENTDIGZ Phawu Nyembe
083 547 3924
psnyembe@ihsinvestments.co.za
Erin O'Brien
078 258 0865
erin@studentdigz.co.za
APK 122 11 Hospital Street,
Joubert Park,
Johannesburg, 2000
146
STUDENTDIGZ Phawu Nyembe
083 547 3924
psnyembe@ihsinvestments.co.za
Erin O'Brien
078 258 0865
erin@studentdigz.co.za
APK 140 11 Hospital Street,
Joubert Park, Gauteng,
2000
147
The Methodist Church
Of SA Wesley Ladies
Residence
Margaret James
0722471706
margejames1949@gmail.com
APK 40 14 MOEPEL STREET,
BOSMONT,
JOHANNESBURG, 2093
35 | P a g e
Eileen Swart
729225519
148
THE PROPERTY
FORUM
INVESTMENT TRUST
Anet Du Preez
082 853 0304
pamjacu@gmail.com
Charntelle Du Preez
079 877 2693

APK 69 34 Threadneedle street,
Hurst hill, Johannesburg,
2091
149
THE PROPERTY
FORUM
INVESTMENT TRUST
Anet Du Preez
082 853 0304
pamjacu@gmail.com
Charntelle Du Preez
079 877 2693

APK 20 21 Fulham street, Brixton,
Johannesburg, 2091
150
TLHOLO A RE
KOPANENG
PRIMARY COOPERATIVE LIMITED
Snowy Motlhabi
061 471 2548
leamogetswe01@gmail.com
Tshepo Motlhabi
081 751 4602
Lmogetswe@telkomsa.net
APK 10 33a Stafford Street,
Westdene, Johannesburg,
2092
151
TLHOLO A RE
KOPANENG
PRIMARY COOPERATIVE LIMITED
Snowy Motlhabi
061 471 2548
leamogetswe01@gmail.com
APK 10 9 third Avenue, Melville,
Johannesburg, 2092
36 | P a g e
Tshepo Motlhabi
081 751 4602
Lmogetswe@telkomsa.net
152
TLHOLO A RE
KOPANENG
PRIMARY COOPERATIVE LIMITED
Jefrey Mahopi
0837485631
0733489042
tshepang.mofolo23@gmail.com
Snowy Motlhabi
0614712548
tshepang.mofolo23@gmail.com
APK 10 9 Kora Street
Westdene
Johannesburg
153
TOLA
CONTRACTORS T/A
BRIXTON BOARDING
HOUSE
Moses Tola
0834198116
mosestola9@gmail.com
Princess Dhlamini
0786613732
APK 18 130 Fulham Road
Brixton
Johannesburg
2092
154
TWIN FAMILY TRUST ANET DU PREEZ
082 853 0304
APK 30 103 Coliins street, Brixton,
Johannesburg, 2091
37 | P a g e

CHARNTELLE DU PREEZ
079 877 2693
Cdupreez@gmail.com
155
UMALUSI WASE
NHLUNGWANE KASI
KALI UYASINDA
Malusi Mathonsi
0838572379
malusimathonsi@yahoo.com
Malusi Mathonsi
0838572379
APK 8 46 Second Avenue,
Westedene,
johannesburg, 2092
156
UNI-STAY ELRIKA DU PLESSIS
082 792 0176
info@uni-stay.co.za
SHARLEEN USHE
082 792 0176
APK 24 3 LANCASTER ROAD,
CNR ABERDEEN
STREET & LANCASTER
ROAD, WESTDENE,
2092
157
UNI-STAY Elrika Du Plessis (Brown)
0878026694
info@uni-stay.co.za
Tanaka Chitumba
0827920176
APK 10 86 ABERDEEN STREET,
WESTDENE,
JOHANNESBURG, 2092
158
UNI-STAY Elrika Du Plessis (Brown)
0878026694
info@uni-stay.co.za
Tanaka Chitumba
0827920176
APK 7 88 ABERDEEN STREET,
WESTDENE,
JOHANNESBURG, 2092
38 | P a g e
159
UNI
-STAY Elrika Du Plessis (Brown)
0878026694
info@uni
-stay.co.za
Tanaka Chitumba
0827920176
APK
8 18 ABERCORN STREET,
HURSTHILL,
JOHANNESBURG, 2092
160
UNI
-STAY Elrika Du Plessis (Brown)
0878026694
info@uni
-stay.co.za
Tanaka Chitumba
0827920176
APK
6 8 GLOUCESTER
STREET, WESTDENE,
JOHANNESBURG, 2092
161
UNIT 67 BEACHWAY
CC t/a BEACHWAY
ACCOMMODATION
Muneerah Williams 0823254786
muneerahwilliams@gmail.com
Lailah Williams
0636949734
APK 150 44/50 Soutpansburg
Avenue
Bosmont
Johannesburg
2093
162
WEST DUNES
PROPERTIES 232
PTY LTD
Gerhard Heydenrych
072 326 1130

Andre Joubert
084 475 9585

APK
8 20 Ararat Street,
Westdene, Johannesburg,
2142
163
XYLONOR 385 CC Hilton. Holmes
082 306 4164
hillaandmarc@yahoo.com
Marceline
076 020 3976
APK
8 36 Bertha street, Triomf,
Johannesburg, 2092
164
Y Woolford Le Roux Yolande Woolford Le Roux
0736716181
yolande@summerfieldsa.com
Hettie Boshoff
0837881204
APK 10 81 And 81a Caroline
Street, 81 And 81a
Caroline Street, Brixton,
2195
39 | P a g e
165
ZS Property
Investment
Muhammed Ziyaad Suliman
0828883314
zsproperty@yahoo.com
Zuleika Kana
718793149
APK 10 152 Fulham Street,
Brixton, Johannesburg,
2092
166
ZS Property
Investment
Muhammed Ziyaad Suliman
0828883314
zsproperty@yahoo.com
Zuleika Kana
718793149
APK 10
167
Jintango Investment
Holding
Emmanuel Tumelo Ramugondo
0829732941
Gintango@hotmail.co.za
Ndivhuwo Mudau
0799763457
APK 7 48 Barnes Road, Brixton,
Johannesburg, 2092
168
JETLUXSA Anet Du Preez
0828530304
thando01@gmail.com
Charntelle Du Preez
APK 7 49 CAROLINE STREET,
BRIXTON, Johannesburg,
2092
40 | P a g e
0798772693
169
Ebrahim Mohamed Ebrahim Mohamed
0836001300
ebrahimkulfi@gmail.com
Ashraf Ebrahim Mohamed
0833801234
APK 8 14 Saint Ermins Street,
Hursthill, Johannesburg,
2000
DFC 2018 ACCREDITED POSA
1
Afhco Property
Management (Pty) Ltd
Tarrin Naidoo
0766657511
kevin@afhco.co.za
Kevin van den Heever
0826998066
Kevin@afhco.co.za
DFC 384 81 Rissik Street, 81 Rissik
Street, Johanessburg,
2000
2
Afhco Property
Management (Pty) Ltd
Tarrin Naidoo
0766657511
kevin@afhco.co.za
Kevin van den Heever
0826998066
Kevin@afhco.co.za
DFC 540 73 Nugget Street, 73
Nugget Street,
Johanesburg, 2000
3
Bafokeng Properties Bafokeng Properties 0840556223
rentals@mutlaholdings.co.za
DFC 20 09 Gordon Road, 
41 | P a g e
Lehlohonolo Mofokeng
0834526222
Betrams, JHB, 2001
4
CARLINFORD
MANAGEMENT CC
T/A VICTTEREN
TOWERS (PTY) LTD
Erika Rall
076 450 0780
shaunleeoliver@gmail.com
Johan Botha
084 444 5744
johan@gateway.im
DFC 2050 30 - 38 Claim street,
Joubertpark,
Johannesburg, 2017
5
CARLINFORD
MANAGEMENT CC
T/A VICTTEREN
TOWERS (PTY) LTD
Erika Rall
076 450 0780
johan@gateway.im
Johan Botha
084 444 5744
johan@gateway.im
DFC 417 23 Error street, New
Doornfontein,
Johannesburg, 2017
6
CITY WALDORF
STUDENT
ACCOMMODATION
Kevin Le Roux DFC 200 CITY WALDORF
STUDENT
ACCOMMODATION
7
CONSOLIDATED
URBAN
MANAGEMENT (PTY)
LTD
Jeremy Berman
083 788 8812
danielw@conurban.co.za
Paul Berman
079 888 4422
paul@conurban.co.za
DFC 180 3 Nugget Street Hillbrow,
3 Nugget Street Hillbrow,
Johanneburg, 2001
8
CONSOLIDATED
URBAN
MANAGEMENT (PTY)
LTD
Jeremy Berman
083 788 8812
danielw@conurban.co.za
Paul Berman
079 888 4422
paul@conurban.co.za
DFC 18
126 Siemert Road New
Doornfontein,
Johannesburg, 2094
42 | P a g e
9
Consolidated Urban
Management (Pty) Ltd
Jeremy Berman
0837888812
lebogangkali@yahoo.com
Paul Berman
0798884422
DFC 80 49 Ockerse Street,
Hillbrow, Johannesburg,
2001
10
Colec Properties (Pty)
Ltd
Dash Coville
0843333124
dustin@colecproperties.co.za
Dustin Dale
0844172141
DFC 20 3 Gordon Terrace,
Yeoville, Johannesburg,
2198
11
Eswan Investments
CC t/a Summit
Student
Accommodation
Amina Wania
0823674003
rsltrust@telkomsa.net
Ahmed Said Wania
0828332876
DFC 96 33 HEIGHT STREET,
DOORNFONTEIN,
JOHANNESBURG, 2028
12
Flamingo Services
(Pty) Ltd
Chris Wijtenburg
0824670750
crwijtenburg@hotmail.com
Chris Wijtenburg
0824670750
DFC 150 27 buxton street,
Doorfontein,
Johannesburg, 2094
13
GAUGELO NSM
PROJECTS PTY LTD
Ntokozo Selby Mdlalose
0722078059
luvhani@gmail.com
Luvhani Gladstone Nedzingahe
0839653902
DFC 107 44 Terrace Road,
Bertrams, Johannesburg,
2094
14
GR NAIDOO
PROPERTY (PTY)
LTD
ASIF AHMOD
839767866
DFC 400 68 president street, corner
eloff street, johannesburg,
2000
43 | P a g e
mo@crownmobile.co.za
mohamed bamath
839767866
15
Highlands Urban
Living (Pty) Ltd
Siboniso Skhosana
0835480182
smskhosana@gmail.com
Andrie van Heerden
0824130713
DFC 268 3 Hunter Street,
Highlands, Johannesburg,
2094
16
Kiss Properties (Pty)
Ltd
Marcel Maree
0735856756 ecklepp@gmail.com
Paul Dedlow
0722063935
DFC 260 72 Davies Street,
Doornfontein,
Johannesburg, 2094
17
Lispropco 4 (Pty) Ltd Dylan Jennings
0824661029
geoff@lisam-investments.com
Ciara Cullerton
0795276372
DFC 603 2 Herb Street, New
Doornfontein,
Johannesburg, 2094
18
LOUCHING STEAM
INVESTMENT
Nqobile Khumalo
076 491 3967
sonskynguyz@neomail.co.za
Cabangani Nyoni
076 631 5280
sonskynguyz@neomail.co.za
DFC 75 Sonskyn Court, 8 Hadfield
Road Berea,
Johannesburg, 2094
19
Paak Eagle
Investments
Aadil Adnan Assad Ghumman
0822120220
adibitsa@gmail.com
DFC 54 10 Derby Road, Bertrams,
Johannesburg, 2094
44 | P a g e
Muhammad Ali Anjum
20
PERFECT PLACES Alice Kraft
082 857 4769
alice@designkraft.co.za
Andrew Hoffeldt
083 309 5000
andrew@bsctools.co.za
DFC 39
60 Berea Road,
Lorentzville,
Johannesburg, 2094
21
Petraglo (Pty) Ltd Rowan Lewis
741809314
david@quorumproperties.co.za
Trent Saldsman
74908781
4
DFC 294
11 Buxton Avenue,
Doornfontein,
Johannesburg, 2094
22
Proxisol pty ltd Clinton Moodley
0825883199
clinton1@mafadi.co.za
Neville hewette
0713326832
DFC 220 4 terrace road, Bertrams,
johannesburg, 2092
23
PULSE URBAN
PROPERTIES(RF)
(PTY) LTD
Rubaiyyah Ali
083 262 6259
rali@pulseliving.co.za
Diane Collopen
071 360 5965
dcollopen@pulseliving.co.za
DFC 84
73 Gordon Road,
LORENTZVILLE,
GAUTENG, 2094
24
RESPUBLICA
STUDENT LIVING
(PTY) LTD
Xiki Baloyi
0 100 200 300
xiki@respublica.co.za
DFC 308 128 van Beek Street, New
Doornfontein,
Johannesburg, 2000
25
RESPUBLICA
STUDENT LIVING
XIKI Baloyi
0 100 200 300
DFC 1077 17 Hadfield Road, Berea,
Johannesburg, 2000
45 | P a g e
(PTY) LTD xiki@respublica.co.za
26
Rusticana Investments
154 CC
Aadil Adnan Assad Ghumman
0822120220
adibitsa@gmail.com
Muhammad Ali Anjum
DFC 36 6 Rocky Street,
Doornfontein,
Johannesburg, 2094
27
Seraph Investments Aadil Adnan Assad Ghumman
0822120220
adibitsa@gmail.com
Muhammad Ali Anjum
DFC 300 35 Upper Railway Road,
35 Upper Railway Road,
Johannesburg, 2094
28 STAY AT SOUTH
POINT
Khetha Msane
072 164 6000 / 081 307 0088 / 011
087 7249

DFC
406
131 van beek street,
Doornfontein,
Johannesburg, 2094
29
THE WILLOW TREE
TRADING
Josephine Tshaboeng
072 808 8807
natasha.malgas@gmail.com
Natasha Malgas
064 750 1808
DFC 124
9 Saratoga Avenue,
Berea, Johannesburg,
2198
SWC 2018 ACCREDITED POSA
46 | P a g e
1
8 Miles Trading David Msebetsi Mahlangu
0719954127
8miles0719954127@gmail.com
Joyce Baloyi
0794976851
SWC 24 87 Mtambo Street,
Dhlamini, Soweto, 1818
2
BAKSMAN1402 (PTY)
LTD
Obakeng Petlele
072 916 8069 / 011 989 0122
Baksman1402@gmail.com
Tlhage Petlele
082 974 6293
Tlhagep@gmail.com
SWC 18 1068 Mokhudi Street,
Dobsonville,
Johannesburg, 1863
3
BERTHA'S BED AND
BREAKFAST
Bertha Mwale
0836605487
berthasmbnb@telkomsa.net
Xoliswa Mbolongwane
0735132845
berthasmbnb@telkomsa.net
SWC 8 2719 Isihlangu Street
Protea North
Soweto 1818
4
BERTHA'S BED AND
BREAKFAST
Bertha Mwale
0836605487
berthasmbnb@telkomsa.net
Xoliswa Mbolongwane
0735132845
SWC 20 874 Letsatsi Street
Naledi Ext 2
Soweto 1818
47 | P a g e
5
Bertha's Bed and
Breakfast
Bertha Mwale
0836605487
berthasmbnb@telkomsa.net
Xoliswa Mbolongwane
0735132845
SWC 20 2136 Gumede Street,
Rockville, Soweto, 1818
6
Bhekimbeko property Clement Mhlongo
832414323
tsholofelomhlongo@yahoo.com
Tsholofelo Mhlongo
844713544
SWC 15 6699 Transient street,
Devland, Soweto
7
BHELE PHUTHUMA
GUEST HOUSE Thembeka Maureen Wells
072 792 6502
wellsmaury@gmail.com SWC
10
2672 Tloome street
Orlando, Soweto
1804
8
Bohumi Rifumo
Services (Pty) Ltd
RAMASELA MOKGATHI
0822554009
sophien@vodamail.co.za
LAWRENCE NKWINIKA
0795111115
SWC 6 228 KLAAS STREET,
PROTEA NORTH,
JOHANNESBURG, 1818
48 | P a g e
9
BO-MEKO TRADING
AND PROJECTS
Molifi Meko
0784999487
moloipaul@gmail.com
Paul Moloi
0837378941
SWC 10 4141 Kgaka Street
Orlando East
Soweto, Johannesburg,
1804
10
BO-MEKO TRADING
AND PROJECTS
Molifi Meko
0784999487
molifimeko@gmail.com
Paul Moloi
0837378941
moloipaul@gmail.com
SWC 7 9144 Zone 6 Pimville
Soweto johannesburg,
1809
11
BULISA STUDENT
ACCOMMODATION
Susan Bulisa
0726413486
renauldat@gmail.com
Renoulda Tshabalala
0724537490
renouldat@gmail.com
SWC 5 556 Mnqibisa Street
Klipspruit
Pimville
Soweto, 1809
49 | P a g e
12
CARNIVAL BISCUITS
CC
sol Mojapelo
0835226571
sol@carnivalbiscuits.co.za
Rose Mojapelo
0731557975
rose@carnivalbiscuits.co.za
SWC 11 521 Zone 1 Ebencuyler
Drive Street, Diepkloof,
Johannesburg, 1864
13
CARNIVAL BISCUITS
CC
sol Mojapelo
0835226571
sol@carnivalbiscuits.co.za
Rose Mojapelo
0731557975
 rose@carnivalbiscuits.co.za
SWC 9 1235/37 Eucalyptus Road
Xavier Reef, Ormonde Ext
16, Johannesburg, 2091
14
CARNIVAL BISCUITS
CC
sol Mojapelo
0835226571
sol@carnivalbiscuits.co.za
Rose Mojapelo
0731557975
 rose@carnivalbiscuits.co.za
SWC 16 1050 Molemole Street,
Naledi Ext 2, Soweto,
1818
15
Cebo Projects Mziwakhe Makhubu
0829630696
ceboprojectsandtrading@gmail.com
Sibongile Makhubu
0735411773
SWC 10 9247 Unonyayi street,
Zone , Pimville
16
COOLAFEELA KHOLOFELO MASOLA
0727462330
serepokgaphola1@gmail.com
SWC 6 528 Tau street, Diepkloof
50 | P a g e
 SEREPO KGAPHOLA
0724970328
17
COOLAFEELA KHOLOFELO MASOLA
0727462330
serepokgaphola1@gmail.com
 SEREPO KGAPHOLA
0724970328
SWC 10 6821 CONDUCT STREET,
DEVLAND,
JOHANNESBURG, 1862
18
CYNTHIA MASHIGO CYNTHIA MASHIGO
0824238554
mphashus@gmail.com
REAGILE MASHIGO
0822286396
reamashigo@gmail.com
SWC 8 17680 Tree Heaven
Street, Protea Glen,
Johannesburg, 1818
19
DBK KHAYALETHU BUSISIWE HEATHER KUBEKA
0829571613
xolilenynyemee@gmail.com
 LUYANDA NOBUHLE KUBEKA
0725336107
kubekaluyanda@gmail.com
SWC 10
9191 Nongawe Street
Pimville Zone 6, Bester
Phase 1 Ext Soweto
1809
51 | P a g e
20
DIBULETSWE
INVESTMENT
Tumisang Magasa
0837335705
tumisang.magasa@gmail.com
Ontiretse Magasa
0780839231
Ntiri.magaz@gmail.com
SWC 10
9231 Unomyayi Crescent
Pimville
phase 2, soweto
1809
21
DIRAGOTLHE
TRADING AND
PROJECTS
Kegomoditswe Mogale
084 359 3521
mmotsobandb@gmail.com
Elizabeth Molatedi
084 866 5206
letoanem4@gmail.com
SWC 6 9146 Inciniba Street,
Pimville, 1809
22
DIRAGOTLHE
TRADING AND
PROJECTS
Kegomoditswe Mogale
0843593521
letoanem4@gmail.com
Elizabeth Molatedi
 0848665206
SWC 16 9177 Inciniba Street
Zone 6 Pimviile
1809
23
DISTANT SUNSET
INVESTMENTS 19
PTY LTD
Ramaitai Malohle
0839922593
ramaitai@distantsunset.co.za
Alpheus Nonyane
0834427290
nonyane@icon.co.za
SWC 148 4 Tempest StreeT
View Ext. 1 Ormonde
Johannesburg, 12
Bradford Street Bradford
House Block A
Bedfordview,
Johanneburg, 2091
52 | P a g e
24
Ekuphumuleni kwa
MaQamu
Jeanette Sibongile Majozi
0782909397
sibongile.majozi10@gmail.com
Mpho Sikakana
823735901
SWC 8 9291 Inqilo Pimville,
Soweto, Johannesburg,
1809
25
EVILOX 232CC Eisenhower Mnguni
0825722645
emnguni@mweb.co.za
Ayanda mnguni
0825090209
mjpclothing@gmail.com
SWC 20 8110 B KOKWANE
STREET, DIEPKLOOF,
JOHANNESBURG, 1863
26
Evilox 232cc Eisenhower Mnguni
825722645
emnguni@mweb.co.za
Ayanda mnguni
825090209
SWC 32 24466 KOKWANE
STREET, DIEPKLOOF
ZONE 6,
JOHANNESBURG, 1862
27
FANYANA
OFFICETECH
John Kumalo Jonah
0604540700
johnkhumalo04@gmail.com
Fanyana Kumalo
SWC 20 116/33 Mnepula Street
Zone 7, Pimville, Soweto,
1809
53 | P a g e
0833487234
28
Fhatuwani Maanda
Properties
Fhatuwani Maanda Mphaphuli
0832914532
fmmphaphuli@gmail.com
Ester Azwihangwisi Mphaphuli
0723396354
SWC 6 14489/11 Protea Glen,
ext 7
29
FITVENTURE PATRICK THAMI NDABA
0786839408
fitventure@webmail.co.za
BEAUTY BUSI NDABA
0735150893
fitventure@webmail.co.za
SWC 8 50 switch street, power
park, johannesburg, 1808
30
FLOSSIE'S B AND B
CATERING AND
TRANSPORT
SERVICES
Florence Mondi
0833889047
flossiebnb@telkomsa.net
Pascaline Masasa
0738774707
 flossiebnb@telkomsa.net
SWC 30 1161 zone1 Pimville, 37
Dube street zone1
Pimville, Johannesburg,
1809
54 | P a g e
31
FUDI INVESTMENTS
PTY LTD
Dirra Mogoto
0605033414
lawrence.mogoto@gmail.com
Noxolo Msitshana
0799534408
noxmsitshana@gmail.com
SWC 20 519 Sundu street
Pimville zone 7, 1808
32
FulaNoPhumi Fanyana Dladla
0784864957
fulacivilcon@gmail.com
Serepo Kgaphola
0724970328
SWC 30 2350 Braam Fischer
Phase 1, Soweto
33
GTL Food
Manufacturers &
Distributors
Dimakatso Radasi
0826590458
md@gtlfoods.co.za
Boyana Radasi
0826590457
SWC 19 2442 Mageza Street,
Protea North, Soweto,
1818
34
Gwazelihle Nokwanda Jele
0823491096
SWC 20 523 Kutwano street,
Diepkloof, Johannesburg,
1809
55 | P a g e
kwandajel82@gmail.com
Tebogo Mazibuko
0721785327
35
Harambe
Accommodation
THABISILE MFABA
0824502400
mfaba.thabisile@gmail.com
Thabisile Mfaba
0824502400
SWC 14 955, PYTHON
CRESCENT,
JOHANNESBURG, 1862
36
Harambe
Accommodation
THABISILE MFABA
0824502400
mfaba.thabisile@gmail.com
Thabisile Mfaba
0824502400
SWC 22 13 TARENTAL,
BASSONIA,
JOHANNESBURG, 2190
37
Harambe
Accommodation
THABISILE MFABA
0824502400
mfaba.thabisile@gmail.com
Thabisile Mfaba
0824502400
SWC 30 56 GOMBA STREET,
ORLANDO EAST,
JOHANNESBURG, 1804
56 | P a g e
38
Iketse Trading Miriam Mofolo
0731378688
felicity.mosaka@gmail.com
Felicity Mofolo
0738776882
SWC 6 412 Eureka Sreet
Klipspruit ext2, Soweto
Pimville, Johannesburg,
1809
39
IMBUBE TOWERS
(PTY) LTD
Mlungisi Dube
0760229129
mlungisid08@gmail.com
Popi Beauty Luvuno
0729582254
SWC 14 666/47 Mpela Street,
Dube Village, 666/47
Mpela Street, Dube
Village, Johannesburg,
1801
40
Joshua Moagi JOSHUA MOAGI
0762485475
sfisotreay@gmail.com
sifiso Ngomane
0791944693
SWC 12 27887 Protea Glen, Ext
24
41
Kelekae Projects (Pty)
Ltd
Thabo Ledimo
0731887791
tledimo@investec.co.za
Precouis Ntombifuthi Mola
SWC 12 1123 Molefe Street, Dube
Village, Johannesburg,
1800
57 | P a g e
0614130577
42
Kenneth Siphayi
Property CC
Kenneth Siphayi
0823362505
esther@kennysbrick.co.za
Esther Ngwebelele
0829249116
SWC 50 11872 Cnr Mohloka &
Chris Hani RD, Zone 9
Pimville, Soweto, 1808
43
Khumopax Nomsa Nkosi
0733107196
studentmphafa2309@gmail.com
Tony Nkosi
0845507179
SWC 10 2309 Mphafa street, Zone
2, Pimville
44
KWA-THABENGREST
Violet Mathope
0721271619
mabosha18@gmail.com
Tebogo Moletsane
0726379928
pimvilleinternetcafe@gmail.com
SWC 20 9138 Nonqawe Street
Pimville Ext 6, Soweto,
1809
58 | P a g e
45
L Z RWAXA Llewellyn Zuko Rwaxa
0815012349
zuko@npgs.co.za
Nomvuzo Rwaxa
0791812223
zuko@npgs.co.za
SWC 20
7525 Maseko Street
Orlando West, Soweto
Johannesburg
1848
46
LEASELET Nwabejane Solly Mogodi
0832660182
sollymogodi@gmail.com
Matseleng Mogodi
0837014898
SWC 16 9 Cecil Street, Meredale,
Johannesburg, 2091
47
LEB LEB
INVESTMENT
Mokotedi Jeremiah Leboa
0829606882
leblebinvestment@gmil.com
Pule Leboa
0712921166
khwaifa@gmail.com
SWC 49 2362 Mehlomakhulu
street Dube Village,
Soweto 1800
48
Lebotshepo Ea Rona Victor Makhoa
0767188576
sanzeroh@yahoo.com
Sandile Mguli
SWC 30 6022 Kuse street, Orlando
East, Soweto, 1804
59 | P a g e
0761726682
49
LEDWARA STUDENT
ACCOMMOADTION
 Violet Ledwara
 0794340048
 violet.tekane@gmail.com
 Palesa Tekane
 0824719793
palesatekane@multichoice.co.za
SWC 12
8126 Ngakane street,
Orlando West, Soweto
1804
50
LEHOOANA MAHASE
MATLASA TRADING
ENTERPRISE
ALICE MAMASOLE MATSOSO
0786166472
alice.mamasole9@gmail.com
RAMOLAE RASEKHULA
0732040142
SWC 10 02259 Motlhatsoa Street,
Zone 2 Pimville,
Johannesburg, 1809
51
LEJWE
MANAGEMENT
CONSULTING
Jone Mofokeng
0828074968
jonem5647@gmail.com
Refentse Shinners
829242134
refentse.shinners@icloud.com
SWC 14
8211A Mlahlankunzi
Street
Zone 6, Pimville, Soweto,
Johannesburg
1809
52
Leka o bone General
Dealer
Mapule Mngomezulu
0824539917
mapule.morele@gmail.com
Mapule Mngomezulu
SWC 9 33 SAINT JOAN
AVENUE, EXTENSION 9,
ELDORADO PARK,
JOHANNESBURG, 1811
60 | P a g e
0824539917
53
Lempitse Trading
Enterprise 16
Mapula Mokoena
0618102006
Lofentsemokoena@yahoo.com
Lofentse Mokoena
0786817532
SWC 10 9306 Inqilo street zone6,
Pimville, Soweto, 1809
54
Leratokatlego
Services
Phumzile Makhalemele
0827969159
sello.makhalemele@gmail.com
Sello Makhalemele
0795152193
SWC 7 32 Dlebelendlovu street,
Zone 1, Pimville
55
LesediTiro
Investments
Irene Matlou-Perris
0833132621
studioinprotea28@gmail.com
SWC 20 25065 Carob street,
Protea Glen ext 28,
SOWETO, 2000
56
LETHUNATHI
BUSINESS
ENTERPRISE
Omphemetse Xaba
0833942317
omphemetsexaba@gmail.com
LEBO MAJOLA
SWC 40 12344 Mopani crescent,
Dobsinville
61 | P a g e
0726858152
57
LETSOGAPELE B
AND B AND
GENERAL SERVICES
1
Peggy Maseko
0733858568
masekopeggy@gmail.com
Wandile McKenzie
0619399074
risingfive00@gmail.com
SWC 20
1653 Bululu Street
Pimville Zone 1, Soweto
1809
58
MADIDA'S B AND B Bridgeman Madida
079 493 7208
madida01@gmail.com
Mary Madida
079 538 8189
madida01@gmail.com
SWC
9
11149 Mabane Street,
Orlando West Soweto,
Johannesburg, 1804
59
Majolas Resident Pauline Majola
0795292664
georgemajola28@gmail.com
pauline Majola
0795292664
SWC 10 24624 Giyani street,
Diepkloof
62 | P a g e
60
MAKENTHA PTY LTD Honey Masango 0824652026
Honeymasa2@gmail.com
Tefo Masango 0764806149
SWC
9
1244 Mokoena Street
Orlando East, 1244
Mokoena Street Orlando
East, Johannesburg, 1804
61
MAKENTSE
BUILDING
CONSTUCTION &
ELECTRICAL CC
 Busisiwe Yvonne Ndleleleni
 0837210653
 Zinhle.bzmaseko@gmail.com
 Busisiwe Zinhle Maseko
 0837319884
 zinhle.bzmaseko@gmail.com
SWC
6
49 Lesedi Street
Police View, Protea South
Johannesburg
1804
62
MAKENTSE
BUILDING
CONSTUCTION &
ELECTRICAL CC
 Busisiwe Yvonne Ndleleleni
 0837210653
 Zinhle.bzmaseko@gmail.com
 Busisiwe Zinhle Maseko
 0837319884
 zinhle.bzmaseko@gmail.com
SWC 50
8 Dynamo Street
Power Park, Soweto
Johannesburg
1804
63
MAKENTSE
BUILDING
CONSTUCTION &
ELECTRICAL CC
 Busisiwe Yvonne Ndleleleni
 0837210653
 Zinhle.bzmaseko@gmail.com
 Busisiwe Zinhle Maseko
 0837319884
 zinhle.bzmaseko@gmail.com
SWC 20
14466/188
Camellia Street, Protea
Glen Ext12,
Johannesburg 1818
64
MAKENTSE
BUILDING
CONSTUCTION &
ELECTRICAL CC
 Busisiwe Yvonne Ndleleleni
 0837210653
 Zinhle.bzmaseko@gmail.com
 Busisiwe Zinhle Maseko
 0837319884
SWC 40 14483/12 Matchwood
Street
Protea Glen, Soweto
Johannesburg
1818
63 | P a g e
 zinhle.bzmaseko@gmail.com
65
Makentse Building
Constuction &
Electrical cc
SWC 20 4685/3925 Ntimbani
street, Pimville Zone 4,
Soweto, Johanesburg,
1818
66
MAKHUBELA'S
RESIDENT
ALFRED DUDU MAKHUBELA
824570889
dudumakhubela63@gmail.com
MOSA SETUKE
729275093
SWC 15 655, legwale street,
Johaneesburg, 1709
67
MAKHUBELA'S
RESIDENT
ALFRED DUDU MAKHUBELA
0824570889
dudumakhubela63@gmail.com
MOSA SETUKE
0729275093
SWC 16 979 Legwale street, tladi
68 Mameke PTY(LTD) ALFRED DUDU MAKHUBELA
0824570889
dudumakhubela63@gmail.com
MOSA SETUKE
0729275093
SWC 14 26645 Olifants street,
Prorea glen ext 31,
Soweto, 1819
64 | P a g e
69
Mamorwa Mosimane mamorwa mosimane
0844373826
mamorwam@gmail.com
naomi mosimane
0827090167
SWC 20 10 Dynamo street, Power
park
70
Mamvee Student
Accommodation
Valerie Virginia Nkomo
723937062
valerienkomo9@gmail.com
Petty Nkomo
788182285
SWC 8 533 Sundu street, Pimville
Zone 7, Soweto, 1808
71
Masebri (Pty) Ltd Masenyani Bring Rikhotso
0832814348
mr.mbrikhotso@gmail.com
Lydia Rikhotso
0732643104
SWC 8 78 Cable street, POWER
PARK, SOWETO,
JOHANNESBURG, 1808
72
Matricomm Mathapelo Motsepe
0622001388
mathapelo.motsepe@gmail.com
Karabo Mhlongo
0726188654
SWC 10 4912 Imbuzana street,
Protea Glen
65 | P a g e
73
MAZZY GROUP Tebogo Mazibuko
0721785327
kwandas@yahoo.com
Nokwanda Jele
0823491096
kwandas@yahoo.com
SWC 18
24737 Inkunzi Street
 Diepkloof Soweto
 1862
74
Mkalavo Consulting Goodwill Molefe
0761756439
mkalavo@gmail.com
Thato Marumo
726072108
SWC 25 76 Cable Street, Power
Park, Johannesburg, 1804
75
MMM
ACCOMMODATION
AND OTHER
SERVICES
Martha Nakedi
824494557
martha.nakedi@vodamail.co.za
MARTHA Nakedi
0824494557
SWC 6 1669 Gonothi Steet
Zone 1, Pimville, 1809
76
MMM
ACCOMMODATION
AND OTHER
SERVICES
MARTHA Nakedi
0824494557
martha.nakedi@vodamail.co.za
SWC 10 5494 KHOVA STR, ZONE
5, PIMVILLE, 1809
66 | P a g e
77
MMM Accommodation
and other Services
Martha Nakedi
0824494557
martha.nakedi@vodamail.co.za
MARTHA Nakedi
0824494557
SWC 8 450/82, Kgama Street
Klipspruit ext 2, Pimville,
1809
78
Mogale Properties Dira Solomon Mogale
0832789111
mogaleproperties52@gmail.com
Mtambo Brighton
719212061
SWC 40 60 SWITCH STREET
POWER PARK,
JOHANNESBURG, 1804
79
MOGWANE'S
COMFORT ZONE
MOGOTSI MOGWANE
083 800 8531
mogotsimogwane@gmail.com
JABULILE MOGWANE
084 702 6513
JabuMog@nedbank.co.za
SWC 18 1910 Ntuli Street,
MOROKA, SOWETO,
1818
80
MOTSEI STUDENT
RES
jacob letsoalo
081 409 9379
jjletsoalo2@gmail.com
Motsei Bertha
081 415 7673
jjletsoalo2@gmail.com
SWC 10 3300/64 Kelimotse Street,
Moroka, Soweto, 1818
81
MPONE
INVESTMENT
HOLDINGS
Sipho Moloi
0736483395
sipho.moloi.sm@gmail.com
Sedie Moloi
SWC 30 3870 Hlakutsa Street
Orlando East,
Soweto,Johannesburg,
1804
67 | P a g e
072407004664
Tannia.Moloi@ekurhuleni.gov.za
82
Musaphi Residence Hlakanipha Mbatha
0828755111
musaphiservices@gmail.com
Hlakanipha Mbatha
0836184212
musaphiservices@gmail.com
SWC 7 1961 Mangrove Street,
Protea Glen Ext 1,
Johannesburg, 1819
83
Netsh Properties Adolf Netshiukhwi
0720737404
adolfnetsh@gmail.com
Portia Netshiukhwi
0840588130
SWC 16 6740 Transient Street,
Devland, Soweto
84
Ngemane Pauline Maggie Ngemane
0827416452/ 0798919237
paulinengemane@gmail.com
SWC
10
691 C Njikelane, White
city, Johannesburg
68 | P a g e
85
Ngwamisaba Business
Enterprises
Fanyana Samuel Khoza
0832633704
fsffanyana@gmail.com
Ntombizamagoza Khoza
0834132317
zamagoza.kunene999@gmail.com
SWC 11 1180 Mamba Crescent,
diepkloop ext, Soweto,
1864
86
NHAZI INVESTMENT
PTY LTD
 Monase Mashaba
 0788590228
 ma.mashaba@gmail.com
 Joy March
 0787920644
 joy.march@gmail.com
SWC 13 1978 Masiane street
Molapo, Soweto
1818
87
NHAZI INVESTMENT
PTY LTD
 Monase Mashaba
 0788590228
 ma.mashaba@gmail.com
 Joy March
 0787920644
 joy.march@gmail.com
SWC 56 5699 Mthongwane Street
Pimville zone 5
1809
69 | P a g e
88
NINTSI Magdeline Mongake
0712243576
tsiane.mongake@gmail.com
Karabo Mongake
798767910
SWC 6 1608 Mashike
Street,Protea
North,Soweto
89
NMC Mosime Motswane
0790203856
motswanet@webmail.co.za
Tshegofatso Motswane
0637215366
info@nyashaconsultants.co.za
SWC 10
10654B Ntihtili Street
Orlando West, Soweto
1809
90
NMC Mosime Motswane
0790203856
motswanet@webmail.co.za
Tshegofatso Motswane
0637215366
info@nyashaconsultants.co.za
SWC 10
58 Byvanger Avenue
Meredale, Johannesburg
2091
91
Ntumu Linda Siwedi Ntumu Linda Siwedi
0718763727
ntumu.siwedi@gmail.com
Ofentse Siwedi
0795049985
SWC 8 11763 Nonqawe street,
Zone 6, Pimville
70 | P a g e
922
Ntumu Linda Siwedi Ntumu Linda Siwedi
0718763727
ntumu.siwedi@gmail.com
Ofentse Siwedi
0795049985
SWC 14 11763 Cnr Ikoloni &
Nonqawe street, Pimville,
Zone 6
93
NTWANANO AND
MFUMO 105 CC
Errol Ngobeni
0843911758
ngobeni.mza@gmail.com
Sibusiso Vilakazi
0849514802
Sibusiso.Vilakazi2@absa.co.za
SWC 11
557 Nyathi Street, Pimville
Zone 7, Johannesburg
1809
94
PHOLANE
PROJECTS
TREVOR LEGODI
0733119333
trevorlegodi3@gmail.com
TIISETSO NKOMO
0768760457
SWC 10 28 GENERATOR
STREET, POWER PARK,
JOHANNESBURG, 1804
95
PHOLANE
PROJECTS
TREVOR LEGODI
0733119333
trevorlegodi3@gmail.com
TIISETSO NKOMO
0768760457
SWC 10 1861 Nuse Street,
Moroka, Johannesburg,
1808
71 | P a g e
96
PILLAR REACHING
TRANSPORT AND
PROJECTS
RICHARD PETERSON
0711984394
barenfpeterson@gmail.com
BARENG PETERSON
0722640781
SWC 20 966 Mkhonza Street,
Dube Village, Soweto,
1801
97
Pimville student village Thoko Tshabalala
0713729842
sandza03@gmail.com
sandile Sibiya
0732026994
SWC 18 1003 Skota street,
Klipspruit, Pimville,
Johannesburg, 1809
98
PIMVILLE VIEW
STUDENT
ACCOMMODATION
Thulani Bernard Buthelezi
0824748125
tbbuthelezi1@gmail.com
Sibusiso Nkosi
0826490990
tbbuthelezi1@gmail.com
SWC 35
8270 Msida Street
Zone 6, Pimville, Soweto
1809
99
PLT Transport Thabo Sentwa
0782783032
sentwa@webmail.co.za
Ntsako Sibisi
0732981719
SWC 20 4084 Thutlwa street, Zone
4, Pimville
72 | P a g e
100
PM ORLANDO
PROPERTIES PTY
LTD
Nothando Sophie Senoa
0837072030
nothando@makhwane.co.za J
ustice Senoa
0720769114
SWC 24 24730 INKUNZI STREET,
DIEPKLOOF EXT 2,
SOWETO, 1862
101
Ralubaho Projects and
Services
Dodi Baholo
0826887569
dodib2@gmail.com
Jeminah Tsotetsi
0796450743
SWC 10 10741b, Orlando West 2,
Soweto, 1804
102
Ramase GTB Trading
(PTY) LTD
Patricia Nkosi
0794985905
patriciankosi25@gmail.com
Gugu Nkosi
0744013958
SWC 11 9370/64 Nongawe Street,
Zone 6 Pimville,
Johannesburg, 1809
103
Rammeka
Accomodation and
Projects (PTY) LTD
Selina Rammeka
0720936482
srammeka@gmail.com
Karabo Rammeka
SWC 14 3797 Mathithibala street,
Pimville Zone4,
Johannesburg, 1809
73 | P a g e
0815538504
s.k.rammeka@gmail.com
104
RASEK JOSE AND
RASIE PTY LTD
Ramolae Darius Rasekhula
0732040142
ramolaerasekhul@gmail.com
Josephine Rasekhula
0825078791
ramolaerasekhula@gmail.com
SWC 15
323 Mnqande, Zone 7
Pimville, Soweto
1809
105
Rehoboth Way Phalenyane Madisakwane
0718835872
P.Madisakwane@gmail.com
Lebogang Ledwaba
0738869235
Onewame29@gmail.com
SWC 20 1567 Makapan street,
Moroka, Soweto, 1818
106
RESEARCH
FOOTPRINT
(PTY)LTD
Dipuo Christina Koape
0824362614
dkoape@gmail.com
Framunda Mpiki Mabuthoe
0828599922
framundamabuthoue@gmail.com
SWC 6
645 Indulamthi Street
Diepkloof ext 2, Soweto
1862
74 | P a g e
107
RESEARCH
FOOTPRINT
(PTY)LTD
Mpiki Framunda Mabuthoe
0828599922
framundamabuthoue@gmail.com
Dipuo Koape
0824362614
dkoape@gmail.com
SWC 4 1012 Cobra Street,
Diepkloof Ext 3, Soweto,
1862
108
ROSE TRADING
ENTERPRISE
Rose Mlonyeni
0822190044
therosebb69@gmail.com
Lona Mlonyeni
0621475090
lona0033@gmail.com
SWC 30 8024 Bacela Street,
Orlando West, Soweto,
1804
109
scucle construction
and project
Shonisani Malange
0781116739
scucle@webmail.co.za
Mbulungeni Malange
0725687578
SWC 12 246 mamakwana street,
chiawelo, johannesburg,
1818
110
SEBOPI TRADING
CC
Mochekoane Molefi
0836770472
mochekoane.molefi@gmail.com
SWC 12 4314 NHLABA STREE,
ZONE 4, PIMVILLE
75 | P a g e
Ntolo Helen Molefi
0832761611
111
Sempolosire (Pty) LTD Sempe Derrick Sirengqe
0839963502
sempe.sirengqe@gmail.com
Louisa Sirengqe
0823728453
SWC 6 2304 Mphafa street,
112
SENOA318GRAND
(PTY) LTD
Thulane Justice Senoa
0720769114
justhulane2189@gmail.com
Nothando Sophie Senoa
0837072030
SWC 34 7981 MODJADJI
STREET, ZONE 1
PIMVILLE, SOWETO,
1809
113
Serolod trading Dolores Masike
0733899517
dmasike56@gmail.com
Cindy Masike
733899517
SWC 17 17778 Woodpecker
Street, Protea Glen ext
14, Soweto, 1818
76 | P a g e
114
SGE Transport &
Project (Pty) Ltd
William Magazi Nhlapho
0825353209
zakhele436@gmail.com
Zodwa Nhlapho
0820748838
SWC 14 436 JOBA STREET,
PIMVILLE ZONE 7,
SOWETO, 1809
115
Shebatown Rachel Koma
765482980
shebakoma@gmail.com
Charity Khanyisile Khalo
741151100
SWC 32 4231 Sofasonke street,
Orlando East
116
Sherperd Stationers Kate Moalusi
0725864922
moganwem@gmail.com
Philemon Moalusi
0832226330
moganwem@gmail.com
SWC 7 9258 Nonqawe street,
Pimville zone 6, Soweto,
1908
117
SHIELA'S B AND B
SERVICES
Dikeledi Shiela Mkhomude
0728139449
dikeledisheilamkhomude@gmail.com
SWC 10 11379 Thambo Street
Orlando West Soweto 
77 | P a g e
Victor Mkhomude
0713981603
1804
118
Sicelo Khumalo Sicelo Khumalo
730088334
s.khumalo.k@gmail.com
Sicelo Khumalo
818755526
s.khumalo.k@gmail.com
SWC 20 5752 Mpondonde
street,pimville, zone 5,
soweto
119
Sifiso Nkosi Sifiso Nkosi
0760911419
Sifisonkosi01@yahoo.com
Gift Nkosi
824401001
SWC 16 1998 Mpane street,
Orlando East
120
SIGENDE
CLEOPHAS
KHANYILE
Sigende Khanyile
828169301
nomvulakhanyile57@gmail.com
Zama Khanyile
845308997
SWC 6 9 Msida street Pimville
Zone 6, 9699 Mhlaza
Street Pimville Zone 6,
Johannesburg, 1809
78 | P a g e
200810182@student.uj.ac.za
121
SIGENDE
CLEOPHAS
KHANYILE
Sigende Khanyile
828169301
nomvulakhanyile57@gmail.com
Zama Khanyile
845308997
200810182@student.uj.ac.za
SWC 12 9699 Mhlaza Street
Pimville Zone 6,
Johannesburg, 1809
122
SIGE-NTHO
ENTERPRISE
 Paul Nhlapo
 0829738385
palesamosala@standardbank.co.za
SWC 8 2694B Motloma Street
Zone 2, Pimville
Soweto
1809
123
Sihlenosipho Trading
Pty Ltd
Fanyana Nhleko
0787575786
sihlefanyana@gmail.com
Amanda Msomi
0817821595
SWC 20 1957 MANGROOVE
STREET, PROTEA
GLEN,
JOHANNESBURG, 1818
124
Sthulis Kandaba Sibusiso Zulu
0829316137
SWC 21 1058 Vundla drive,
Moroka
79 | P a g e
stitozulu@gmail.com
Sibusiso Mahlalela
0783049122
125
Sthulis Kandaba Sibusiso Zulu
0829316137
stitozulu@gmail.com
Sibusiso Mahlalela
0783049122
SWC 14 5869 Morobadilepe,
Zone 5, Pimville
126
STREET TALK
TRADING 77
Alex Mandlenkosi Langa
0834223721
streettalktradin77@webmail.co.za
Lebogang Sechabela
0719316278
chonamof@gmail.com
SWC 20 71 Makanda Street
Chiawelo, Johannesburg
1818
127
STUDENT HOUSING
IN SOWETO
Renaulda Tshabalala
0724537490
renouldat@gmail.com
Simon Tshabalala
724583486
SWC 26 475 Makhubu Street,
Klipspruit, Pimville,
Soweto 1809 
80 | P a g e
simon.tshabalala@adcock.com
128
sydney z property
rental and
development
Nhlanhla Sydney Zwane
0762950721
0762950721nsz@gmail.com
Ntokozo Zwane
0765934207
SWC 10 7900 mhlwathi street
zone 1 ext, pimville,
johannesburg, 1809
129
T Qalinge Investment
(PTY)LTD
Thabo Qalinge
0826520901
qalingethabo@yahoo.com
THABO QALINGE
0826520901
SWC 24 11453 GONSI STREET,
PIMVILLE ZONE 1,
SOWETO, 1809
130
Tafari Electrical Daniel Mathaba
0786780713
daniel@tafarielectric.co.za
Serepo Kgaphola
0724970328
SWC 16 12 DIEPENAAR ROAD,
Diepkloof, johannesburg,
1864
81 | P a g e
131
Tahok Projects Kennedy Taho
0730046184
tahomongezi@gmail.com
Lindiwe Mbatha
0725472620
SWC 10 7944 Modjadji street,
Zone 1, Pimville
132
Thadiso Trading
Enterprise CC
Moipone Molaudzi
0824149652
percynkabane@outlook.com
Modise Nkabane
0749977164
SWC 52 1011 Sickle bush street,
Protea Glen, Ext 1
133
Thagisa holdings Josias Thagisa
0843322346
jthagge@gmail.com
Mpho Thagisa
0843322346
SWC 7 11789/7 Golden wattle
street
134
Thagisa holdings Josias Thagisa
0843322346
jthagge@gmail.com
SWC 7 12945/1 Poplae Avenue
82 | P a g e
Mpho Thagisa
0843322346
135
Thagisa holdings Josias Thagisa
0843322346
jthagge@gmail.com
Mpho Thagisa
0843322346
SWC 7 17689/6 Golden wattle
street
136
Thulz Products and
Distributors
Margaret Luthuli
0825435149
tchochoe55@gmail.com
Tebogo Molamu Chochoe
0764242516
SWC 8 9509 Kamela Street,
Pimvile
137
Tiyimiseni 101 IT
Solutions
Solomon Dhlamini
0835833483
dikeledilenkoe@gmail.com
Tebogo Dhlamini
0833024448
SWC 20 9230/146 Unomyayi
street, Zone 6, Pimville
83 | P a g e
138
Tiyisela Enlightened
consulting and
properties
Tiyisela Sibusiso Rikhotso
766832346
tiyiselarikhotso@gmail.com
Adolf Netshiukhwi
720737404
SWC 16 6735/36 transient street,
devland ext 33,
johannesburg, 1811
139
TOTO
TSHABALALA
CONSTRUCTION
AND PROJECTS CC
nicholas tshabalala
0769788150
tshepiso@mahlaba.co.za
toto tshabalala
0769788150
totonict@gmail.com
SWC 10 73 Stirling Street
Ormonde View
JOHANNESBURG
2091
140
TOTO TSHABALALA
CONSTRUCTION
AND PROJECTS CC
nicholas Tshabalala
0769788150
tshepiso@mahlaba.co.za
 toto tshabalala
0769788150
totonict@gmail.com
SWC 10 86 Natuur Avenue
Naturena
Johannesburg
2095
84 | P a g e
141
TSHELLAINE
HOLDINGS
Elaine Phasha
0795353682
tshellaineholdings@gmail.com
Tshepo Lekgau
0767816517
SWC 200 30 Cristal Avenue
Naturena
Johannesburg
2091
142
TSHIDISEGA
INVESTMENT
WINSTON TSHABALALA
0825536773
tshidisegainvestment@gmail.com
KHOLOFELO MASOLA
0727462330
SWC 10 PIMVILLE ZONE 3,
SOWETO,
JOHANNESBURG, 1809
143
Twelve91 Investments Vusumuzi Ntshingila
837543608
vusi.ntshingila@gmail.com
Piet Litsooane 823450245
plitsooane@gmail.com
SWC 20 2388 Mohwelere Street,
Pimville Zone 2, Soweto,
1809
144
Twelve91 Investments Vusumuzi Ntshingila
837543608
vusi.ntshingila@gmail.com
SWC 20 8229B Sihlehle Street,
Pimville Zone 6, Soweto,
1809
85 | P a g e
Piet Litsooane 823450245
plitsooane@gmail.com
145
Ulwazi Lubanzi
Property Company
Nompumelelo Nene
0795197030
contract.essential@gmail.com
Mathews Masemola
0832718136
SWC 8 1840 Kingsley Crescent,
Mondeor Ext 4,
Johannesburg, 2091
146
UMKHONTO
WEMFUNDO
Tidimalo Mandewo
0820902125
mshongwe65@gmail.com
Thandiwe Mandewo
0763522774
tidi.mm1@gmail.com
SWC 10
94 David Street
Meredale, Johannesburg
2091
147
UMKHONTO
WEMFUNDO
Tidimalo Mandewo
0820902125
mshongwe65@gmail.com
Thandiwe Mandewo
0763522774
tidi.mm1@gmail.com
SWC 10
40 Main Street
Meredale, Johannesburg
2091
148
UMKHONTO
WEMFUNDO
Tidimalo Mandewo
0820902125
mshongwe65@gmail.com
Thandiwe Mandewo
0763522774
SWC 50
8 Antrim Crescent
Diepkloof
Johannesburg
2091
86 | P a g e
tidi.mm1@gmail.com
149
ValorDomicile Nkosinathi Thabede
0723939356
Nathinice69@hotmail.com
Obakeng Petlele
0729168069
SWC 26 8126B Mhlabamanzi
Street, Pimville Zone 6,
Johannesburg, 1803
150
Vilani Bread &
Breakfast
Veli Vilani
0837071872
vialnit50@gamil.com
Thoko Vilani
0827509274
SWC 21 1636 Molahloe street,
Orlando East
151
Vimadge trading and
projects
Fikile Madonsela
0825155873
hle2madonsela@gmail.com
Hlengiwe Madonsela
0711517896
SWC 16 4832 Iwilli street, Protea
Glen EXT 3, JHG, 1818
87 | P a g e
152
Wandy's student
Accomodation
&Transportation
Boitumelo Sago
0718531744
Boitumelosago@gmail.com
Lucy Sago
0711790542
SWC 19 Tshekedi street, Dube
Village, Soweto, 1802
153
WIL BED
BREAKFAST AND
SERVICES
Wilhelmina Ntuli
0839686614
wilbnb@gmail.com
Bongani Mchunu
0792539358
bonganimc@joburg.org.za
SWC 8 744 Kolotsane street
Klipspruit, P.O. Pimville,
Johannesburg, 1819
154
ZIKHEPHI TRADING Khethiwe Mabuso
082 830 9365
mabuso832@gmail.com
Khethiwe Mabuso
082 830 9365
mabuso832@gmail.com
SWC
10
59 Ensign Street,
Ormonde View,
Johannseburg, 2091
88 | P a g e
155
Hkstransport and
projects
Mahlomola Mthethwa
0824411154
hkstransport23@gmail.com
Mimi Mthethwa
0609657783
SWC 28 5368 kuzwayo street,
Orlando East,
Johannesburg, 1804
156
Peace of mind
accommodation
Tsepiso Jostina Mojapela
0790606909
shaitj65@gmail.com
Jerry Mojapela
0719128282
SWC 16 5171 mpane street,
Orlando East, Soweto,
1804
157
Thandi Mofolo Trading
and Enterprise (Pty)
Ltd
Mpho Mofolo
0763217540
mpho@tmftrading.co.za
Nomasonto Mofolo
0763217540
SWC 18 9223 Unomyayi Cresent,
Pimville Zone 6 ext,
Soweto, 1809
158
TAMPANE
INVESTMENT
Edwin Gabriel
0723561959
tampanecc97@gmail.com
Nokuzola Gabriel
SWC 17 1541 MPHELA STREET,
DUBE, soweto, 1801
89 | P a g e
0832789269
159
Kodi Projects PTY
LTD
Boikago Thage
0631870573
boikagothage@gmail.com
Shadrack Shaddy Kodi
0119333213
SWC 8 4 AMP AVENUE,
SOWETO,
JOHANNESBURG, 1804
160
Nyikes student
accommodation
Lillian Mwale
0835669676
shadympilo@gmail.com
Mpilo Manyike
0815012776
SWC 9 11121 Nyenye street,
Pimville zone 5,
johannesburg, 1809
161
Nyikes student
accommodation
Lillian Mwale
0835669676
shadympilo@gmail.com
Mpilo Manyike
0815012776
SWC 10 1820, Budaza street,
Moroka, 1809
90 | P a g e
162
GHADO TRADING
PTY LTD
Prince Dire
0826934539
princedire@gmail.com
Seipati Dire
0784253016
SWC 7 5601 Mamba Street
Pimville Zone 5, 5601
Mamba Street Pimville
Zone, Soweto, 1809
163
Bongani Donovan
Zikalala
Bongani Zikalala
0784709443
swazizika@gmail.com
Swazi Zikalala
0739678921
SWC 16 legodi street, rockville,
soweto, 1818
164
MH BUSINESS
RESIDENCE
ZODWA HLOPHE
0833019723
zodwahlophe@telkomsa.net
JOSEPH HLOPHE
0833056717
SWC 7 9648/09 Ugilonko street,
Zone 6, Pimville, Soweto,
1809
165
SHIBHAM
Ivan Hlongwane
0732040813
hlongwanei@gmail.com
Shibha Hlongwane
SWC 7 4003 Belt Street
Devland
Johannesburg
1811
91 | P a g e
0726891736
166
Z STUDENT HOUSE Xolani Zikalala
0824541470
Xolani.Zikalala@standardbank.co.za
Zanele Zikalala
0826961553
SWC 6 9385 Nonqawe Street,
Pimville Zone 6 Ext
167
PYG Properties Pakiso Gumbi
0723546837
pakiso@pygproperties.co.za
Mpho Tolong
0715517524
SWC 20 4146 Kgaka street,
Orlando East, Soweto,
nixcorn8@gmail.com

1804`
//console.log(emails)

async function mailer(b) {

  let arr = await linkify.find(str)

  for (let i = 0; i < arr.length; i++) {    
  
    if(arr[i].type == "email") {
      
      if(!emails.includes(arr[i].value)) {
        await emails.push(arr[i].value)
      }
  
    }
  
  }
  

  let transport = await mail.createTransport({

    service: "gmail",
    auth: {
      user: conf.authUsr,
      pass: conf.authPwd
    }

  })

  let mailOpts = {
    
    from: conf.authUsr,
    to: "",
    subject: "Am looking for accomodation | Around APK",
    html: `
    
      <h4>Am a male UJ student using NSFAS</h4>
      <p>Am looking for single room around the APK campus to book for next year. It should be a single NSFAS accredited room. Without any topups and not far from the APK campus, having a walking distance to APK.You can call me on 079 300 4047. Or email me on <a href"mailto:nixcorn8@gmail.com">nixcorn8@gmail.com</a>.</p>
      
      I apologize if you received too many of these emails, I am sending them from a program i just created so it isnt stable yet.
    
    `

  }

    await setTimeout(async () => {

      mailOpts.to = emails[b]
      console.log(mailOpts.to)

      await transport.sendMail(mailOpts, (err, i) => {

        if (err) {
          throw err
        } else {
          console.log(i)

          if(b == emails.length) {
            return false
          }

          mailer(Number(b + 1))
        }
    
      })
    }, 2000)
  


}

mailer(0)