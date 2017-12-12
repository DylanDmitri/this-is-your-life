const random = require('./random');

const classes = {
  'PHB': [
    {
      name: 'Barbarian', reasons: [
        'your devotion to your people lifted you in battle, making you powerful and dangerous.',
        'the spirits of your ancestors called on you to carry out a great task.',
        'you lost control in battle one day, and it was as if something else was manipulating your body, forcing it to kill every foe you could reach.',
        'you went on a spiritual journey to find yourself and instead found a spirit animal to guide, protect, and inspire you.',
        'you were struck by lightning and lived. Afterward, you found a new strength within you that let you push beyond your limitations.',
        'your anger needed to be channeled into battle, or you risked becoming an indiscriminate killer.',
      ], other: {
        'Personal Totems': [
          'None',
          'A tuft of fur from a solitary wolf that you befriended during a hunt',
          'Three eagle feathers given to you by a wise shaman, who told you they would play a role in determining your fate',
          'A necklace made from the claws of a young cave bear that you slew singlehandedly as a child',
          'A small leather pouch holding three stones that represent your ancestors',
          'A few small bones from the first beast you killed, tied together with colored wool',
          'An egg-sized stone in the shape of your spirit',
        ],
        'Tattoo': [
          'None',
          'The wings of an eagle are spread wide across your upper back.',
          'Etched on the backs of your hands are the paws of a cave bear.',
          'The symbols of your clan are displayed in viny patterns along your arms. The antlers of an elk are inked across your back.',
          'Images of your spirit animal are tattooed along your weapon arm and hand.',
          'The eyes of a wolf are marked on your back to help you see and ward off evil spirits.',
        ],
        'Superstitions': [
          'None',
          'If you disturb the bones of the dead, you inherit all the troubles that plagued them in life.',
          'Never trust a wizard. They\'re all devils in disguise, especially the friendly ones.',
          'Dwarves have lost their spirits, and are almost like the undead. That\'s why they live underground.',
          'Magical things bring trouble. Never sleep with a magic object within ten feet of you.',
          'When you walk through a graveyard, be sure to wear silver, or a ghost might jump into your body.',
          'If an elf looks you in the eyes, she\'s trying to read your thoughts.',
        ]
      }
    },
    {
      name: 'Bard', reasons: [
        'you awakened your latent bardic abilities through trial and error.',
        'you were a gifted performer and attracted the attention of a master bard who schooled you in the old techniques.',
        'you joined a loose society of scholars and orators to learn new techniques of performance and magic.',
        'you felt a calling to recount the deeds of champions and heroes, to bring them alive in song and story.',
        'you joined one of the great colleges to learn old lore, the secrets of magic, and the art of performance.',
        'you picked up a musical instrument one day and instantly discovered that you could play it.',
      ],
      other: {
        'Defining Work': [
          '"The Three Flambinis," a ribald song concerning mistaken identities and unfettered desire.',
          '"Waltz: of the Myconids," an upbeat tune that children in particular enjoy.',
          '"Asmodeus\'s Golden Arse," a dramatic poem you claim was inspired by your personal visit to Avernus.',
          '"The Pirates of Luskan" your firsthand account of being kidnapped by sea reavers as a child.',
          '"A Hoop, Two Pigeons, and a Hell Hound," a subtle parody of an incompetent noble.',
          '"A Fool in the Abyss," a comedic poem about a jester\'s travels among demons.',
        ],
        'Instrument': [
          'A masterfully crafted halfling fiddle',
          'A mithral horn made by elves',
          'A zither made with drow spider silk',
          'An orcish drum',
          'A wooden bullywug croak box',
          'A tinker\'s harp of gnomish design',
        ],
        'Embarrassment': [
          'None',
          'The time when your comedic song, "Big Tom\'s Hijinks"—which, by the way, you thought was brilliant— did not go over well with Big Tom',
          'The matinee performance when a circus\'s owlbear got loose and terrorized the crowd',
          'When your opening song was your enthusiastic but universally hated rendition of "Song of the Froghemoth"',
          'The first and last public performance of "Mirt, Man about Town"',
          'The time on stage when your wig caught fire and you threw it down——which set fire to the stage',
          'When you sat on your lute by mistake during the final stanza of "Starlight Serenade"',
        ]
      }
    },
    {
      name: 'Cleric', reasons: [
        'a supernatural being in service to the gods called you to become a divine agent in the world.',
        'you saw the injustice and horror in the world and felt moved to take a stand against them.',
        'your god gave you an unmistakable sign. You dropped everything to serve the divine.',
        'although you were always devout, it wasn\'t until you completed a pilgrimage that you knew your true calling.',
        'you used to serve in your religion\'s bureaucracy but found you needed to work in the world, to bring the message of your faith to the darkest corners of the land.',
        'you realize that your god works through you, and you do as commanded, even though you don\'t know why you were chosen to serve.',
      ],
      other: {
        'Temple': [
          'Your temple is said to be the oldest surviving structure built to honor your god.',
          'Acolytes of several like—minded deities all received instruction together in your temple.',
          'You come from a temple famed for the brewery it operates. Some say you smell like one of its ales.',
          'Your temple is a fortress and a proving ground that trains warrior-priests.',
          'Your temple is a peaceful, humble place, filled with vegetable gardens and simple priests.',
          'You served in a temple in the Outer Planes',
        ],
        'Keepsake': [
          'The finger bone of a saint',
          'A metal-bound book that tells how to hunt and destroy infernal creatures',
          'A pig\'s whistle that reminds you of your humble and beloved mentor A braid of hair woven from the tail of a unicorn',
          'A scroll that describes how best to rid the world of necromancers',
          'A runestone said to be blessed by your god',
        ],
        'Secret': [
          'An imp offers you counsel. You try to ignore the creature, but sometimes its advice is helpful.',
          'You believe that, in the final analysis, the gods are nothing more than ultra-powerful mortal creatures.',
          'You acknowledge the power of the gods, but you think that most events are dictated by pure chance.',
          'Even though you can work divine magic, you have never truly felt the presence of a divine essence within yourself.',
          'You are plagued by nightmares that you believe are sent by your god as punishment for some unknown transgression.',
          'In times of despair, you feel that you are but a plaything of the gods, and you resent their remoteness.',
        ]
      }
    },
    {
      name: 'Druid', reasons: [
        'you saw too much devastation in the wild places, too much of nature\'s splendor ruined by the despoilers. You joined a circle of druids to fight back against the enemies of nature.',
        'you found a place among a group of druids after you fled a catastrophe.',
        'you have always had an affinity for animals, so you explored your talent to see how you could best use it.',
        'you befriended a druid and was moved by druidic teachings. You decided to follow your friend\'s guidance and give something back to the world.',
        'while you were growing up, you saw spirits all around you — entities no one else could perceive. You sought out the druids to help you understand the visions and communicate with these beings.',
        'you have always felt disgust for creatures of unnatural origin. For this reason, you immersed yourself the study of the druidic mysteries and became a champion of the natural order.',
      ],
      other: {
        'Treasured Item': [
          'None',
          'A twig from the meeting tree that stands in the center of your village',
          'A vial of water from the source of a sacred river',
          'Special herbs tied together in a bundle',
          'A small bronze bowl engraved with animal images',
          'A rattle made from a dried gourd and holly berries',
          'A miniature golden sickle handed down to you by your mentor',
        ],
        'Guiding Aspect': [
          'None',
          'Yew trees remind you of renewing your mind and spirit, letting the old die and the new spring forth.',
          'Oak trees represent strength and vitality. Meditating under an oak fills your body and mind with resolve and fortitude.',
          'The river\'s endless flow reminds you of the great span of the world. You seek to act with the long term interests of nature in mind.',
          'The sea is a constant, churning cauldron of power and chaos. It reminds you that accepting change is necessary to sustain yourself in the world.',
          'The birds in the sky are evidence that even the smallest creatures can survive if they remain above the fray.',
          'As demonstrated by the actions of the wolf, an individual\'s strength is nothing compared to the power of the pack.',
        ],
        'Mentor': [
          'None',
          'Your mentor was a wise treant who taught you to think in terms of years and decades rather than days or months.',
          'You were tutored by a dryad who watched over a slumbering portal to the Abyss. During your training, you were tasked with watching for hidden threats to the world.',
          'Your tutor always interacted with you in the form of a falcon. You never saw the tutor\'s humanoid form.',
          'You were one of several youngsters who were mentored by an old druid, until one ofyour fellow pupils betrayed your group and killed your master.',
          'Your mentor has appeared to you only in visions. You have yet to meet this person, and you are not sure such a person exists in mortal form.',
          'Your mentor was a werebear who taught you to treat all living things with equal regard.',
        ]
      }
    },
    {
      name: 'Fighter', reasons: [
        'you wanted to hone your combat skills, and so you joined a war college.',
        'you squired for a knight who taught you how to fight, care for a steed, and conduct yourself with honor. You decided to take up that path for yourself.',
        'horrible monsters descended on your community, killing someone you loved. You took up arms to destroy those creatures and others of a similar nature.',
        'you joined the army and learned how to fight as part of a group.',
        'you grew up fighting, and you refined your talents by defending yourself against people who crossed you.',
        'you could always pick up just about any weapon and know how to use it effectively.',
      ],
      other: {
        'Heraldic Sign': [
          'None',
          'A rampant golden dragon on a green field, representing valor and a quest for wealth',
          'The fist of a storm giant clutching lightning before a storm cloud, symbolizing wrath and power',
          'Crossed greatswords in front of a castle gate, signifying the defense of a city or kingdom',
          'A skull with a dagger through it, representing the doom you bring to your enemies',
          'A phoenix in a ring of fire, an expression of an indomitable spirit',
          'Three drops of blood beneath a horizontal sword blade on a black background, symbolizing three foes you have sworn to kill',
        ],
        'Instructor': [
          'None',
          'Gladiator. Your instructor was a slave who fought for freedom in the arena, or one who willingly chose the gladiator\'s life to earn money and fame.',
          'Military. Your trainer served with a group of soldiers and knows much about working as a team.',
          'City Watch. Crowd control and peacekeeping are your instructor\'s specialties.',
          'Tribal Warrior. Your instructor grew up in a tribe, where fighting for one\'s life was practically an everyday occurrence.',
          'Street Fighter. Your trainer excels at urban combat, combining close-quarters work with silence and efficiency.',
          'Weapon Master. Your mentor helped you to become one with your chosen weapon, by imparting highly specialized knowledge of how to wield it most effectively.',
        ],
        'Signature Style': [
          'Elegant. You move with precise grace and total control, never using more energy than you need.',
          'Brutal. Your attacks rain down like hammer blows, meant to splinter bone or send blood flying.',
          'Cunning. You dart in to attack at just the right moment and use small-scale tactics to tilt the odds in your favor.',
          'Effortless. You rarely perspire or display anything other than a stoic expression in battle.',
          'Energetic. You sing and laugh during combat as your spirit soars. You are happiest when you have a foe in front ofyou and a weapon in hand.',
          'Sinister. You scowl and sneer while fighting, and you enjoy mocking your foes as you defeat them.',
        ]
      }
    },
    {
      name: 'Monk', reasons: [
        'you were chosen to study at a secluded monastery. There, you were taught the fundamental techniques required to eventually master a tradition.',
        'you sought instruction to gain a deeper understanding of existence and your place in the world.',
        'you stumbled into a portal to the Shadowfell and took refuge in a strange monastery, where you learned how to defend yourself against the forces of darkness.',
        'you were overwhelmed with grief after losing someone close to you, and you sought the advice of philosophers to help you cope with your loss.',
        'you could feel that a special sort of power lay within you, so you sought out those who could help you call it forth and master it.',
        'you were wild and undisciplined as a youngster, but then you realized the error of your ways. You applied to a monastery and became a monk as a way to live a life of discipline',
      ],
      other: {
        'Monastery': [
          'None',
          'Your monastery is carved out of a mountainside, where it looms over a treacherous pass.',
          'Your monastery is high in the branches of an immense tree in the Feywild.',
          'Your monastery was founded long ago by a cloud giant and is inside a cloud castle that can be reached only by flying.',
          'Your monastery is built beside a volcanic system of hot springs, geysers, and sulfur pools. You regularly received visits from azer traders.',
          'Your monastery was founded by gnomes and is an underground labyrinth of tunnels and rooms.',
          'Your monastery was carved from an iceberg in the frozen reaches of the world.',
        ],
        'Monastic Icon': [
          'Monkey. Quick reflexes and the ability to travel through the treetops are two of the reasons why your order admires the monkey.',
          'Dragon Turtle. The monks of your seaside monastery venerate the dragon turtle, reciting ancient prayers and offering garlands of flowers to honor this living spirit of the sea.',
          'Ki-rin. Your monastery sees its main purpose as watching over and protecting the land in the manner of the ki-rin.',
          'Owlbear. The monks of your monastery revere a family of owlbears and have coexisted with them for generations.',
          'Hydra. Your order singles out the hydra for its ability to unleash several attacks simultaneously.',
          'Dragon. A dragon once laired within your monastery. Its influence remains long after its departure.',
        ],
        'Master': [
          'None',
          'Your master was a tyrant whom you had to defeat in single combat to complete your instruction.',
          'Your master was kindly and taught you to pursue the cause of peace.',
          'Your master was merciless in pushing you to your limits. You nearly lost an eye during one especially brutal practice session.',
          'Your master seemed goodhearted while tutoring you, but betrayed your monastery in the end.',
          'Your master was cold and distant. You suspect that the two of you might be related.',
          'Your master was kind and generous, never critical of your progress. Nevertheless, you feel you never fully lived up to the expectations placed on you.',
        ]
      }
    },
    {
      name: 'Paladin', reasons: [
        'a fantastical being appeared before you and called on you to undertake a holy quest.',
        'one of your ancestors left a holy quest unfulfilled, so you intend to finish that work.',
        'the world is a dark and terrible place. You decided to serve as a beacon of light shining out against the gathering shadows.',
        'you served as a paladin\'s squire, learning all you needed to swear your own sacred oath.',
        'evil must be opposed on all fronts. You feel compelled to seek out wickedness and purge it from the world.',
        'becoming a paladin was a natural consequence of your unwavering faith. In taking your vows, you became the holy sword of your religion.',
      ],
      other: {
        'Personal Goal': [
          'None',
          'Peace. You fight so that future generations will not have to.',
          'Revenge. Your oath is the vehicle through which you will right an ancient wrong.',
          'Duty. You will live up to what you have sworn to do, or die trying.',
          'Leadership. You will win a great battle that bards will sing about, and in so doing, you will become an example to inspire others.',
          'Faith. You know your path is righteous, or else the gods would not have set you upon it.',
          'Glory. You will lead the world into a grand new era, one that will be branded with your name.',
        ],
        'Symbol': [
          'A dragon, emblematic of your nobility in peace and your ferocity in combat',
          'A clenched fist, because you are always ready to fight for your beliefs',
          'An upraised open hand, indicating your preference for diplomacy over combat',
          'A red heart, showing the world your commitment to justice',
          'A black heart, signifying that emotions such as pity do not sway your dedication to your oath',
          'An unblinking eye, meaning that you are ever alert to all threats against your cause',
        ],
        'Nemesis': [
          'None',
          'A mighty orc war chief who threatens to overrun and destroy everything you hold sacred',
          'A fiend or a celestial, the agent of a power of the Outer Planes, who has been charged with corrupting or redeeming you, as appropriate',
          'A dragon whose servants dog your steps A high priest who sees you as a misguided fool and wants you to abandon your religion',
          'A rival paladin who trained with you but became an oath—breaker and holds you responsible',
          'A vampire who has sworn revenge against all paladins after being defeated by one',
        ],
        'Temptation': [
          'None',
          'Fury. When your anger is roused, you have trouble thinking straight, and you fear you might do something you\'ll regret.',
          'Pride. Your deeds are noteworthy, and no one takes note of them more often than you.',
          'Lust. You can\'t resist an attractive face and a pleasant smile.',
          'Envy. You are mindful of what some famous folk have accomplished, and you feel inadequate when your deeds don\'t compare to theirs.',
          'Despair. You consider the great strength of the enemies you must defeat, and at times you see no way to achieve final victory.',
          'Greed. Regardless of how much glory and treasure you amass, it\'s never enough for you.',
        ]
      },
    },
    {
      name: 'Ranger', reasons: [
        'you found purpose while you honed your hunting skills by bringing down dangerous animals at the edge of civilization.',
        'you always had a way with animals, able to calm them with a soothing word and a touch.',
        'you suffer from terrible wanderlust, so being a ranger gave you a reason not to remain in one place for too long.',
        'you have seen what happens when the monsters come out from the dark. You took it upon yourself to become the first line of defense against the evils that lie beyond civilization\'s borders.',
        'you met a grizzled ranger who taught you woodcraft and the secrets of the wild lands.',
        'you served in an army, learning the precepts of your profession while blazing trails and scouting enemy encampments.',
      ],
      other: {
        'World View': [
          'Towns and cities are the best places for those who can\'t survive on their own. The advancement of civilization is the best way to thwart chaos, but its reach must be monitored.',
          'Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more.',
          'Walls are for cowards, who huddle behind them while others do the work of making the world safe.',
          'Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild.',
          'Cities breed weakness by isolating folk from the harsh lessons of the wild.',
        ],
        'Homeland': [
          'None',
          'You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell.',
          'As part of a group of nomads, you acquired the skills for surviving in the desert.',
          'Your early life in the Underdark prepared you for the challenges of combating its denizens.',
          'You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones.',
          'Because you grew up among the peaks, finding the best path through the mountains is second nature to you.',
          'You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice.',
        ],
        'Sworn Enemy': [
          'None',
          'You seek revenge on nature\'s behalf for the great transgressions your foe has committed.',
          'Your forebears or predecessors fought these creatures, and so shall you.',
          'You hear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal.',
          'You find your foe fascinating, and you collect books of tales and history concerning it.',
          'You collect tokens of your fallen enemies to remind you of each kill.',
          'You respect your chosen enemy, and you see your battles as a test of respective skills.',
        ]
      }
    },
    {
      name: 'Rogue', reasons: [
        'you\'ve always been nimble and quick of wit, so you decided to use those talents to help you make your way in the world.',
        'an assassin or a thief wronged you, so you focused your training on mastering the skills of your enemy to better combat foes of that sort.',
        'an experienced rogue saw something in you and taught you several useful tricks.',
        'you decided to turn your natural lucky streak into the basis of a career, though you still realize that improving your skills is essential.',
        'you took up with a group of ruffians who showed you how to get what you want through sneakiness rather than direct confrontation.',
        'you\'re a sucker for a shiny bauble or a sack of coins, as long as you can get your hands on it without risking life and limb.',
      ],
      other: {
        'Guilty Pleasure': [
          'None',
          'Large gems',
          'A smile from a pretty face',
          'A new ring for your finger',
          'The chance to deflate someone\'s ego',
          'The finest food and drink',
          'Adding to your collection of exotic coins',
        ],
        'Adversaries': [
          'None',
          'The pirate captain on whose ship you once served; what you call moving on, the captain calls mutiny',
          'A master spy to whom you unwittingly fed bad information, which led to the assassination of the wrong target',
          'The master of the local thieves\' guild, who wants you to join the organization or leave town',
          'An art collector who uses illegal means to acquire masterpieces',
          'A fence who uses you as a messenger to set up illicit meetings',
          'The proprietor of an illegal pit fighting arena where you once took bets',
        ],
        'Benefactor': [
          'None',
          'A smuggler kept you from getting caught but lost a valuable shipment in doing so. Now you owe that person an equally valuable favor.',
          'The Beggar King has hidden you from your pursuers many times, in return for future considerations.',
          'A magistrate once kept you out of jail in return for information on a powerful crime lord.',
          'Your parents used their savings to bail you out of trouble in your younger days and are now destitute.',
          'A dragon didn\'t eat you when it had a chance, and in return you promised to set aside choice pieces of treasure for it.',
          'A druid once helped you out of a tight spot; now any random animal you see could be that benefactor, perhaps come to claim a return favor.',
        ]
      }
    },
    {
      name: 'Sorcerer', reasons: [
        'When you were born, all the water in the house froze solid, the milk spoiled, or all the iron turned to copper. Your family was convinced that this event was a harbinger of stranger things to come for you.',
        'you suffered a terrible emotional or physical strain, which brought forth your latent magical power. You have fought to control it ever since.',
        'your immediate family never spoke of your ancestors, and when you asked, they would change the subject. It wasn\'t until you started displaying strange talents that the full truth of your heritage came out.',
        'when a monster threatened one of your friends, you became filled with anxiety. You lashed out instinctively and blasted the wretched thing with a force that came from within.',
        'sensing something special in you, a stranger taught you how to control your gift.',
        'after you escaped from a magical conflagration, you realized that though you were unharmed, you was not unchanged. You began to exhibit unusual abilities that you are just beginning to understand.',
      ],
      other: {
        'Arcane Origin': [
          'Your power arises from your family\'s bloodline. You are related to some powerful creature, or you inherited a blessing or a curse.',
          'You are the reincarnation of a being from another plane of existence.',
          'A powerful entity entered the world. Its magic changed you.',
          'Your birth was prophesied in an ancient text, and you are foretold to use your power for terrible ends.',
          'You are the product of generations of careful, selective breeding.',
          'You were made in a vat by an alchemist.',
        ],
        'Reaction': [
          'Your powers are seen as a great blessing by those around you, and you are expected to use them in service to your community.',
          'Your powers caused destruction and even a death when they became evident, and you were treated as a criminal.',
          'Your neighbors hate and fear your power, causing them to shun you.',
          'You came to the attention of a sinister cult that plans on exploiting your abilities.',
          'People around you believe that your powers are a curse levied on your family for a past transgression.',
          'Your powers are believed to be tied to an ancient line of mad kings that supposedly ended in a bloody revolt over a century ago.',
        ],
        'Supernatural Mark': [
          'Your eyes are an unusual color, such as red.',
          'You have an extra toe on one foot.',
          'One of your ears is noticeably larger than the other.',
          'Your hair grows at a prodigious rate.',
          'You wrinkle your nose repeatedly while you are chewing.',
          'A red splotch appears on your neck once a day, then vanishes after an hour.',
        ],
        'Sign of Sorcery': [
          'You deliver the verbal components of your spells in the booming voice of a titan.',
          'For a moment after you cast a spell, the area around you grows dark and gloomy.',
          'You sweat profusely while casting a spell and for a few seconds thereafter.',
          'Your hair and garments are briefly buffeted about, as if by a breeze, whenever you call forth a spell.',
          'If you are standing when you cast a spell, you rise six inches into the air and gently float back down.',
          'Illusory blue flames wreathe your head as you begin your casting, then abruptly disappear.',
        ]
      }
    },
    {
      name: 'Warlock', reasons: [
        'while wandering around in a forbidden place, you encountered an otherworldly being that offered to enter into a pact with you.',
        'you were examining a strange tome you found in an abandoned library when the entity that would become your patron suddenly appeared before you.',
        'you stumbled into the clutches of your patron after you accidentally stepped through a magical doorway.',
        'when you were faced with a terrible crisis, you prayed to any being who would listen, and the creature that answered became your patron.',
        'your future patron visited you in your dreams and offered great power in exchange for your service.',
        'one of your ancestors had a pact with your patron, so that entity was determined to bind you to the same agreement.',
      ],
      other: {
        'Patron Attitude': [
          'Your patron has guided and helped your family for generations and is kindly toward you.',
          'Each interaction with your capricious patron is a surprise, whether pleasant or painful.',
          'Your patron is the spirit of a long-dead hero who sees your pact as a way for it to continue to influence the world.',
          'Your patron is a strict disciplinarian but treats you with a measure of respect.',
          'Your patron tricked you into a pact and treats you as a slave.',
          'You are mostly left to your own devices with no interference from your patron. Sometimes you dread the demands it will make when it does appear.',
        ],
        'Special Terms': [
          'None',
          'When directed, you must take immediate action against a specific enemy of your patron.',
          'Your pact tests your willpower; you are required to abstain from alcohol and other intoxicants.',
          'At least once a day, you must inscribe or carve your patron\'s name or symbol on the wall of a building.',
          'You must occasionally conduct bizarre rituals to maintain your pact.',
          'You can never wear the same outfit twice, since your patron finds such predictability to be boring.',
          'When you use an eldritch invocation, you must speak your patron\'s name aloud or risk incurring its displeasure.',
        ],
        'Binding Mark': [
          'One of your eyes looks the same as one of your patron\'s eyes.',
          'Each time you wake up, the small blemish on your face appears in a different place.',
          'You display outward symptoms of a disease but suffer no ill effects from it.',
          'Your tongue is an unnatural color. You have a vestigial tail.',
          'Your nose glows in the dark.',
        ]
      }
    },
    {
      name: 'Wizard', reasons: [
        'an old wizard chose you from among several candidates to serve an apprenticeship.',
        'when you became lost in a forest, a hedge wizard found you, took you in, and taught you the rudiments of magic.',
        'you grew up listening to tales of great wizards and knew you wanted to follow their path. You strove to be accepted at an academy of magic and succeeded.',
        'one of your relatives was an accomplished wizard who decided you were smart enough to learn the craft.',
        'while exploring an old tomb, library, or temple, you found a spellbook. You was immediately driven to learn all you could about becoming a wizard.',
        'you were a prodigy who demonstrated mastery of the arcane arts at an early age. When you became old enough to set out on your own, you did so to learn more magic and expand your power.',
      ],
      other: {
        'Spellbook': [
          'A tome with pages that are thin sheets of metal, spells etched into them with acid',
          'Long straps of leather on which spells are written, wrapped around a staff for ease of transport',
          'A battered tome filled with pictographs that only you can understand',
          'Small stones inscribed with spells and kept in a cloth bag',
          'A scorched book, ravaged by dragon fire, with the script of your spells barely visible on its pages',
          'A tome full of black pages whose writing is visible only in dim light or darkness',
        ],
        'Ambition': [
          'You will prove that the gods aren\'t as powerful as folk believe.',
          'Immortality is the end goal of your studies.',
          'If you can fully understand magic, you can unlock its use for all and usher in an era of equality.',
          'Magic is a dangerous tool. You use it to protect what you treasure.',
          'Arcane power must be taken away from those who would abuse it.',
          'You will become the greatest wizard the world has seen in generations.',
        ],
        'Eccentricity': [
          'None',
          'You have the habit of tapping your foot incessantly, which often annoys those around you.',
          'Your memory is quite good, but you have no trouble pretending to be absentminded when it suits your purposes.',
          'You never enter a room without looking to see what\'s hanging from the ceiling.',
          'Your most prized possession is a dead worm that you keep inside a potion vial.',
          'When you want people to leave you alone, you start talking to yourself. That usually does the trick.',
          'Your fashion sense and grooming, or more accurately lack thereof, sometimes cause others to assume you are a beggar.',
        ]
      }
    },
  ]
};

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(classes).map(r => classes[r])).filter(r => r.name === name)[0];
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(classes, sources);
  },
  reason: function (cClass) {
    return random.element(cClass.reasons);
  },
  other: function (cClass) {
    if (!cClass.other) return [];
    return Object.keys(cClass.other).map(o => [o, random.element(cClass.other[o])]);
  },
}