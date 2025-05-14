import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { randomUUID } from 'crypto';

export const HeroesApi: HeroesPropsDto[] = [
  {
    id: randomUUID(),
    name: 'Spider Man',
    heroOrVilain: 'hero',
    image: 'https://www.superherodb.com/gallery/075/876/87687.webp',
    about:
      "One evening, Parker attended a public exhibition demonstrating the safe handling of nuclear laboratory waste materials sponsored by the General Techtronics Corporation. During the demonstration, a small common house spider happened to be in the path of a particle accelerator's beam and was massively irradiated. The stricken spider fell on to Parker's hand, broke his skin with its fangs, and died.",
  },
  {
    id: randomUUID(),
    name: 'Wolverine',
    heroOrVilain: 'hero',
    image: 'https://www.superherodb.com/gallery/075/879/87982.webp',
    about:
      "Wolverine's life began in Alberta, Canada, sometime around the 1880s and 1890s. The mutant who would come to be known simply as 'Logan' was born James Howlett, the second son of Elizabeth Howlett (who was married to John Howlett, owner of a large estate) and the illegitimate son of the Howlett's grounds-keeper, Thomas Logan. As a boy, James was notably frail and prone to bouts of allergic attacks. He was largely neglected by his mother, who had been institutionalized for a time following the death of her first son, John Jr., in 1897. James was constantly under the pressure of his grandfather, Mister Howlett, who believed that James required constant punishment by a strong hand, in order to be raised properly. 'Firm, but fair' was what Mister Howlett used to say to justify any of his abusive actions.",
  },
  {
    id: randomUUID(),
    name: 'Doctor Doom',
    heroOrVilain: 'vilain',
    image: 'https://www.superherodb.com/gallery/075/883/88318.webp',
    about:
      'Victor von Doom was born a gypsy camp outside of Haasenstadt, Latveria. His parents died when he was very young. His mother, Cynthia, was killed due to a bargain with Mephisto gone wrong. After a noblewoman died despite his attempts to care for her, Werner von Doom and a young Victor fled on a cold winter night. Although Victor survived, his father did not. Doom sought to increase his knowledge of both science and magic in order to avenge his parents. In his youth Doom fell in love with a woman named Valeria, but she resisted his advances. As part of a bargain with the Hazareth Three, Doom had her sacrificed to gain him power.',
  },
  {
    id: randomUUID(),
    name: 'Loki',
    heroOrVilain: 'vilain',
    image: 'https://www.superherodb.com/gallery/075/526/52613.webp',
    about:
      'Before dying at the hands of the Void during the Siege on Asgard, the Trickster God Loki laid schemes to break free from the chains of destiny, manipulating Hela into taking his name out of the Book of Hel, allowing himself to be reborn instead of truly dying, and return as a completely new Loki, free of the weight of his past. When he was trying to find the motive of his past incarnation for his sacrifice at the hands of the Void, the new Kid Loki found himself transported to a hidden chamber where he encountered an echo of his elder self. The spirit revealed the elder Loki desired to have a new start, a fresh page with fresh ink to write a free future',
  },
  {
    id: randomUUID(),
    name: 'Adam Warlock',
    heroOrVilain: 'hero',
    image:
      'https://www.fromcovertocover.com/content/images/2021/11/Warlock-Feature-lrg.jpg',
    about:
      'Adam Warlock, a character with superhuman strength, energy manipulation, flight, durability, and regeneration, has had a fascinating journey in the Marvel universe. He was created by a group with intentions of world domination, but upon his emergence, he sensed their evil plans and rebelled, flying off into space',
  },
  {
    id: randomUUID(),
    name: 'Ant Man',
    heroOrVilain: 'hero',
    image: 'https://www.superherodb.com/gallery/075/10/1035.webp',
    about:
      "Dr. Henry 'Hank' Pym, is an American biochemist with extensive knowledge in various scientific fields, married Maria Trovaya, a brave and beautiful young woman who had been a political dissident in her native Hungary, from which she had fled. Naively believing that his American citizenship would protect her, Henry and Maria Pym traveled to Hungary shortly after their marriage. The Pyms were confronted by agents of the secret police there. Henry Pym was knocked unconscious and Maria was murdered. Pym was greatly distraught by his wife's death, and decided to do whatever he could in the future to battle injustice and inhumanity.",
  },
  {
    id: randomUUID(),
    name: 'Apocalypse',
    heroOrVilain: 'vilain',
    image: 'https://www.superherodb.com/gallery/075/317/31724.webp',
    about:
      "Having tried and failed for five lifetimes to save mutantkind from the rise of the machines, Moira MacTaggert decided to turn towards the one path she had yet to try; Apocalypse. She awoke him when she was 18, and told him of her previous lives and the fate of mutantkind to fall at the hands of the Sentinels. Apocalypse transformed Moira with a Celestial Seed into a more enhanced version of herself dubbed Mother Akkaba, and together the two waged war against humanity. Two years after awakening, Apocalypse killed Charles Xavier and Magneto, potential rivals for the leadership of mutantkind. Five years after awakening, he and Moira managed to rescue Apocalypse's children; the original Horsemen from their exile in Amenth.",
  },
  {
    id: randomUUID(),
    name: 'Arnim Zola',
    heroOrVilain: 'vilain',
    image: 'https://www.superherodb.com/gallery/075/524/52483.webp',
    about:
      "Doctor Arnim Zola was a Swiss scientist working for HYDRA before, during, and after World War II. Originally an employee of the Nazi Sturmabteilung, in 1934 he was recruited by Johann Schmidt to become a lead scientist for Schmidt's HYDRA organization. During the war, he designed many advanced weapons to aid HYDRA in its quest for world domination. Despite being captured by the Allies shortly before Schmidt's defeat in 1945, he was offered a position in S.H.I.E.L.D., the newly formed peacekeeping organization, and he used that opportunity to secretly rebuild HYDRA. When Zola received a fatal diagnosis in 1972, he transferred his mind into a complex computer system.",
  },
  {
    id: randomUUID(),
    name: 'Banshee',
    heroOrVilain: 'hero',
    image: 'https://www.superherodb.com/gallery/075/300/30099.webp',
    about:
      'Sean Cassidy was born as the heir to the castle and estate of Cassidy Keep, Ireland, as well as a small fortune. After graduating from Trinity College, Dublin, with the degree of Bachelor of Science, Cassidy became a detective at Interpol, the international law enforcement organization. By the time he married Maeve Rourke, Cassidy had risen to the rank of Inspector at Interpol. Although Cassidy had discovered his mutant powers in his adolescence, he kept them secret, even from the rest of Interpol.',
  },
  {
    id: randomUUID(),
    name: 'Beast',
    heroOrVilain: 'hero',
    image: 'https://www.superherodb.com/gallery/075/744/74437.webp',
    about:
      "Henry Phillip McCoy's father, Norton McCoy, worked at a nuclear power plant where he was exposed to massive amounts of radiation, during an accident. Norton was unharmed, but the radiation affected his genes and, as a result, his and Edna's son, Henry, was born a mutant. Unlike most mutants, Henry showed signs of mutation from birth: unusually large hands and feet. A prodigy, Hank was also endowed with an innate superhuman intellect and during adolescence, he gained the power of simian-like augmented agility, reflexes, and strength. Thanks to his powers, Henry became a star football player as a teenager and earned the nickname Magilla Gorilla.",
  },
  {
    id: randomUUID(),
    name: 'Black Cat',
    heroOrVilain: 'vilain',
    image: 'https://www.superherodb.com/gallery/075/853/85375.webp',
    about:
      "The Black Cat's father was a world renowned cat burglar who, before his arrest, encouraged her to never settle for second best. If she loved basketball, she should work to become a basketball player and not just a cheerleader. During her freshman year in college, she had gone to a party and was nearly raped by a drunken student in a bathroom, when she was saved by another student, named Ryan. Felicia and Ryan became close friends, spending most of their time together until one night Ryan demanded that it was time for their relationship to become physical. Felicia's protests were in vain. Hating the idea of being a victim, she decided that she would murder her rapist despite the consequences. She put aside her studies and began training in various fighting styles and acrobatics.",
  },
  {
    id: randomUUID(),
    name: 'Black Panther',
    image:
      'https://sm.ign.com/t/ign_br/gallery/b/black-pant/black-panther-6-marvel-comics-that-could-inspire-the-new-gam_eagq.600.jpg',
    heroOrVilain: 'hero',
    about:
      "Pantera Negra (em inglês: Black Panther) é um super-herói das histórias em quadrinhos publicadas pela Marvel Comics, cuja identidade secreta é a de T'Challa, rei de Wakanda, um reino fictício na África. O personagem foi criado pelo escritor e editor Stan Lee e pelo escritor e ilustrador Jack Kirby, aparecendo pela primeira vez em Fantastic Four nº 52 (julho de 1966) na Era de Prata das histórias em quadrinhos. Além de possuir habilidades aprimoradas alcançadas através de um antigo ritual de Wakanda, T'Challa também conta com seu intelecto genial, treinamento físico rigoroso, habilidade em artes marciais, acesso a tecnologias avançadas e riqueza para combater seus inimigos. Pantera Negra também é conhecido por seu relacionamento com a super-heroína Tempestade dos X-Men. Embora os dois fossem casados e se envolvessem em inúmeras batalhas, suas lealdades colocariam uma pressão sobre o relacionamento, o que levaria a um eventual divórcio.",
  },
  {
    id: randomUUID(),
    name: 'Black Widow',
    image: 'https://www.superherodb.com/gallery/075/862/86248.webp',
    heroOrVilain: 'hero',
    about:
      "It was rumored that Natasha Romanoff (Romanova) was somehow related to the last ruling czars of Russia, but was never proven. Nothing else was known about her prior to World War II. Nazis set the building Natasha was in on fire in Stalingrad, and her mother threw her out the window to a Russian soldier before dying in the fire. The soldier's name was Ivan Petrovitch, and he watched over Natasha for her entire life, to this day remaining by her side as her chauffeur.",
  },
  {
    id: randomUUID(),
    name: 'Blade',
    image: 'https://www.superherodb.com/gallery/075/571/57123.webp',
    heroOrVilain: 'hero',
    about:
      'Blade, originally born as Eric Brooks, was born as a dhampir/half-vampire when his mother was bitten by a vampire while pregnant with him. Sometime later, Blade would be trained by the vampire hunter Anthony along with various street-fighters such as Daredevil, Stick, Stone. and Shaft to fight the vampire threat before Anthony was bitten and turned by a vampire and disappeared. Blade would bolster his skills as a Vampire Hunter and eventually train under Stick, becoming his best student. Spider-Man would come into contact with Blade when he stopped what he thought was a robbery but turned out that Blade was fighting a vampire in an alleyway. Although he was victorious, Blade punched Spider-Man, warning him to never appear in his sight again, and disappears into the night.',
  },
  {
    id: randomUUID(),
    name: 'Capitain America',
    image: 'https://www.superherodb.com/gallery/075/869/86992.webp',
    heroOrVilain: 'hero',
    about:
      "In current Marvel Universe history, Steven Rogers was a sickly American fine arts student specializing in illustration in the early 1940s before America's entry into World War II. He was disturbed by the rise of the Third Reich enough to attempt to enlist only to be rejected due to his poor constitution. By chance, an Army officer looking for test subjects for a top secret defense research project offered Rogers an alternate way to serve his country. The officer was looking for suitable test subjects for a top secret defense research project, Operation: Rebirth. This project consisted of developing a means to create physically superior soldiers and Rogers was deemed ideal.",
  },
  {
    id: randomUUID(),
    name: 'Captain Britain',
    image: 'https://www.superherodb.com/gallery/075/402/40241.webp',
    heroOrVilain: 'hero',
    about:
      "Born in the small town of Malden, Essex, Brian was a graduate student in physics, in advance of his years, at England's Thames University. Working under his mentor Dr Travis at the Darkmoor Research Centre during the holidays, he was present when the mercenary Reaver and his men raided the facility to kidnap the scientists there. Escaping with the intention to get help, Brian fled on a motorbike, but was run off the road. Bleeding to death, Brian was approached by Merlin and his daughter Roma, who told him that he could live if he became Britain's next great champion. They offered Brian a choice: The Amulet of Right (or Life) or the Sword of Might (or Death). Being a scholar and not conceiving of himself as a warrior, Brian chose the Amulet.",
  },
  {
    id: randomUUID(),
    name: 'Captain Marvel',
    image: 'https://www.superherodb.com/gallery/075/862/86291.webp',
    heroOrVilain: 'hero',
    about:
      "After Gamora donned the identity of Requiem and set out to collect the Infinity Stones, Phyla-Vell and Moondragon travelled to the neighboring universe of Earth-616 to retrieve their universe's Reality Stone since each version of this artifact across the Multiverse had become displaced to an adjacent universe. They confronted Star-Lord and Collector. They handed over the Reality Stone to Phyla-Vell since it was useless in their universe. Moondragon eventually hid the stone and erased her memories of the event. Requiem captured Phyla-Vell and Moondragon before killing Loki Odinson and taking the Infinity Stones in his possession for herself. Moondragon tricked Gamora into reading her mind for the Reality Stone's location, allowing her to lock Gamora in mental combat.",
  },
  {
    id: randomUUID(),
    name: 'Colossus',
    image: 'https://www.superherodb.com/gallery/075/804/80477.webp',
    heroOrVilain: 'hero',
    about:
      "Growing up on his parents' farm, Piotr Rasputin saw his older brother Mikhail become a Cosmonaut. Mikhail was later discovered to be a latent mutant with energy warping powers, and to keep him secret the government faked his death. In later years, Piotr learned that he too was a mutant, and could transform his flesh into steel, but he was content to use his powers to help his fellow farmers. When a transformed Piotr rescued his sister Illyana from a runaway tractor, he was approached by Professor Charles Xavier, who was recruiting mutants for a new team of X-Men to help save his original students from the sentient island Krakoa. Dubbed Colossus by Xavier, Piotr reluctantly joined this new team, which freed the original X-Men and helped defeat Krakoa.",
  },
  {
    id: randomUUID(),
    name: 'Cyclops',
    image: 'https://www.superherodb.com/gallery/075/851/85164.webp',
    heroOrVilain: 'hero',
    about:
      "Scott Summers was the first of two sons born to Major Christopher Summers, a test pilot for the U.S. Air Force, and his wife Katherine. Christopher was flying his family home from vacation when their plane was attacked by a spacecraft from the interstellar Shi'ar Empire. To save their lives, Katherine pushed Scott and his brother Alex out of the plane with the only available parachute. Scott suffered a head injury upon landing, thus forever preventing him from controlling his mutant power by himself.",
  },
  {
    id: randomUUID(),
    name: 'Daredevil',
    image: 'https://www.superherodb.com/gallery/075/889/88967.webp',
    heroOrVilain: 'hero',
    about:
      "Daredevil's life is a mix of joy and tragedy. The story of Matt Murdock began with his father. 'Battlin' Jack Murdock raised his son alone, laiming Matt's mother had died. Jack wanted his son to be more successful than him. He impressed upon Matt the need to constantly study instead of playing sports with other kids. Jack hoped that Matt would become a doctor or a lawyer instead of an 'uneducated pug' like himself. This led the neighborhood kids to taunt the 'cowardly' Matt as 'Daredevil.' Matt took out his frustrations by secretly training in his father's gym. One day, Matt saw a blind man walking towards an oncoming truck. Matt pushed the man out of the way.",
  },
  {
    id: randomUUID(),
    name: 'Deadpool',
    image: 'https://www.superherodb.com/gallery/075/882/88212.webp',
    heroOrVilain: 'hero',
    about:
      'Wade Wilson was a mercenary born in Canada, and at some point was married to Vanessa Carlysle. Diagnosed with inoperable cancer, he underwent an experimental treatment that gave him superhuman regenerative abilities but caused the cancer to consume his entire body. Wade took on the costumed identity Deadpool, but when Vanessa was killed he was unable to save her and went insane from grief. For a time, Deadpool was an infamously ruthless assassin, but mellowed into a still-violent but wisecracking antihero who used fourth-wall breaking humor as an outlet for his grief. At some point, Deadpool used a time machine to travel to feudal Japan, where he fought a samurai.',
  },
  {
    id: randomUUID(),
    name: 'Doctor Strange',
    image: 'https://www.superherodb.com/gallery/075/596/59694.webp',
    heroOrVilain: 'hero',
    about:
      "Stephen Strange was born to Eugene and Beverly Strange in 1930 while the couple was vacationing in Philadelphia. In 1932 Stephen's sister Donna was born at the family's Nebraska farm. Knowing that Strange was destined to become the next Sorcerer Supreme, resentful apprentice sorcerer Karl Mordo beset the child with demons from the age of eight, and on throughout his youth. Ultimately Strange was rescued by Mordo's master, the Ancient One, mystic protector of the Earth-realm as the current  Sorcerer Supreme. A year or two after this torment began, Stephen's brother, Victor, was born. At age eleven Strange aided an injured Donna, an experience which ultimately fostered an interest in medicine. Strange entered New York College as a pre-med directly out of high school.",
  },
  {
    id: randomUUID(),
    name: 'Elektra',
    image: 'https://www.superherodb.com/gallery/075/771/77179.webp',
    heroOrVilain: 'hero',
    about:
      "Elektra once defined herself by the men in her life: She was the daughter of a powerful Greek diplomat and the girlfriend of blind American law student Matt Murdock. Her father's assassination, however, left her emotionally shattered, and she withdrew from the world. Her choice led her to Japan, where she attempted to penetrate the secret fraternity of martial artists known as the Chaste. Befriended by the organization's leader, Stick, Elektra honed her fighting skills. However, Stick saw that her hatred of the world was all-consuming and ultimately asked her to leave the Chaste. Determined to prove herself to her mentor, she infiltrated the rival organization known as The Hand.",
  },
  {
    id: randomUUID(),
    name: 'Falcon',
    image: 'https://www.superherodb.com/gallery/075/637/63734.webp',
    heroOrVilain: 'hero',
    about:
      "Sam Wilson grew up in a tough Harlem neighborhood. His father, a minister, had been killed trying to stop a fight. Sam did his best to try and do the right thing, but his grief and anger eventually led him down a criminal path. He took on the name of 'Snap' Wilson while working for the mob.",
  },
  {
    id: randomUUID(),
    name: 'Gamora',
    image: 'https://www.superherodb.com/gallery/075/603/60344.webp',
    heroOrVilain: 'hero',
    about:
      "Gamora was the sole survivor of the alien humanoid race called the Zen Whoberis, a peace-loving people whose population were wiped out by a zealous religious order seeking to establish a galaxy-wide empire. Agents of the Church, called Grand Inquisitors, herded the entire population of the planet into a valley and exterminated them all for their resistance. The mad Titan Thanos rescued Gamora and brought her through time to a period at least two decades prior to her people's deaths, travelling from Earth-7528 to Earth-616. Aboard his space station Sanctuary, Thanos raised Gamora and used advanced technology to endow her with enhanced humanoid abilities. He also subtly altered her perceptions so that she would not recognize the evil of her deeds.",
  },
];
