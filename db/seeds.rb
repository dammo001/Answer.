# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
u1 = User.create(username: "guest", password: "password")
u2 = User.create(username: "guest2", password: "password") 
u3 = User.create(username: "guest3", password: "password") 
u4 = User.create(username: "guest4", password: "password") 
u6 = User.create(username: "guest5", password: "password") 
u5 = User.create(username: "guest6", password: "password") 

q1 = Question.create(title: "q1", body: "I have a question!!", user_id: 2)
q2 = Question.create(title: "q2", body: "I do too!!", user_id: 2)
q3 = Question.create(title: "q3", body: "SO MANY QUESTIONS", user_id: 2)
q4 = Question.create(title: "q4", body: "Please give me answers :( !", user_id: 2)
q5 = Question.create(title: "What is it like to serve a life sentence in prison?", body: "", user_id: 3)
q6 = Question.create(title: "What are the most difficult and useful things people have to learn in their 20s?
", body: "", user_id: 2)
q7 = Question.create(title: "What are some fascinating facts about the woolly mammoth?", body: "", user_id: 4)
q8 = Question.create(title: "What is it like to be a drug dealer?", body: "I imagine this is very different depending on what type of dealer you are (someone dealing meth in a trailer park, probably has a different life than Charlie Sheen's coke dealer.) That said, thought to keep it all on a single thread.", user_id: 3)



a1 = Answer.create!(user_id: 2, question_id: 5, body: "I want some chocolate")
a2 = Answer.create!(user_id: 3, question_id: 5, body: "I want some too, damnnn")
a3 = Answer.create!(user_id: 4, question_id: 6, body: "Dum deee dum")
a4 = Answer.create!(user_id: 1, question_id: q5.id, body: "Serving a life sentence in prison feels like a long and arduous journey towards a freedom that is not guaranteed to be there once you arrive.
 
In 2001, I went to my sentencing hearing and received a 16 year to life sentence for the crime of second degree murder. This was an extremely harsh reality for someone who had never been to prison before. I had almost no idea of what to expect and would be lying if I said I wasn't at least a little bit nervous. I remember several of the men in the county jail warning me not to take a deal with 'Life' on the end of it, because whether it was 7 to Life, 15 to Life, or 25 to Life, the governor was not letting lifers go and 'Life' would mean my whole life. In the end, I chose to go against their advice and accepted the district attorney's  plea  bargain offer for  16 to Life. This was an  excruciating decision, but it came down to the fact that no matter how badly I wanted to avoid prison, I was guilty and knew it. If I had taken it to trial and lost, I might have wound up with 25 to Life or even worse, Life Without the Possibility of Parole. There is no coming back from that one.
 
My 16 year to life sentence means that I must serve 16 years first, and then I will start going in front of the Board of Prison Terms to try to exhibit my suitability for parole. The board looks at things like psychiatric evaluations, disciplinary records, supervisor reports, vocational training, education certificates, self-help participation,parole plans,and letters of support. They will also ask questions to determine if I have gained insight into the causative factors that led to my crime, what I've done to address those issues, and my plans for making sure it never happens again.  I learned very early on what an uphill climb lay in front of me from the other lifers who had already received several denials from the board.  For the most part, the guys in the county had been right. Only a handful of lifers were being found suitable for release, and even some of them had their dates taken back by a reversal of decision from the governor. There was almost no light at the end of the tunnel, but I made the decision to put my fate in God's hands and committed myself to doing everything in my power to prepare myself for a hearing that was still 16 years down the road.
 
For a lifer who is trying to earn his freedom, and not all are, because many are still caught up in their addictions and criminal thinking, the margin for error is razor thin. Any rules violations from a fistfight to a dirty urinalysis test could be grounds for a parole board denial and add several years to your sentence.   I've  even seen guys get written up for things like smoking or other minor things.  These infractions are  documented in  a  lifer's  C-file  and usually result in them receiving a denial. Currently, the board is looking for a 5 to 10 year span of disciplinary free behavior before finding a lifer suitable for parole.  It's definitely something to think about the next time your craving that cigarette.

When I first came into the system, the parole board was issuing 1 to 5 year denials.  If you were close to being found suitable, maybe you'd receive a 1-year denial, which meant you'd  go back to the board and try again in a year.   If you were still screwing up, see you in 5 years or somewhere in between.  Then in 2008, California passed Marsy's Law, which extended denials to 3, 5, 7, 10, and 15 years... crazy.  A 1 year became a 3 year...a 2 became a 5, and so on. Imagine serving a 15 to Life sentence and then going to the board and receiving a 15-year denial that's equal to your time in. The constitutionality of this law is being challenged in the courts,because it essentially lengthens prison sentences ex post facto. I certainly don't understand it, but nevertheless, it has become just another hurdle a lifer must overcome.
 
I think the hardest part about serving a life sentence is not being able to tell your loved ones when you're coming home. Going in front of the parole board is a highly subjective process and as yet, there is no magic formula for being found suitable.  I've seen lifers seemingly do everything right and still be denied for things like the nature of their crime.  This has also been ruled unconstitutional, because the commitment of the crime is the one thing that a lifer doesn't have the power to change.  Technically, the parole board is supposed to base a lifer's suitability on his time in and his current threat to society. I know lifers with more than 30 years in on their sentences and I often wonder why they're still here.
 
I was seven years into my own life sentence, before I saw my first lifer go home. His name was Irish and it happened right here at San Quentin.  Honestly, it was like witnessing a miracle, because it made me believe that maybe all my hard work could result in me getting out one day.  Since that time, I've seen a multitude of lifers who have served their time and done the work go home. I'm still surrounded by darkness, but now I know that if I remain vigilant, there is the light of freedom waiting for me at the end of the the journey.")

a5 = Answer.create!(user_id: 1, question_id: q6.id, body: "Two top things I've learned echo two top things provided by Brendon Chu (his list is great, by the way), yet my lessons were a little bit different.

1. There are always going to be people smarter/better than you.

This point is not a matter of your acceptance, this situation is actually good for you --- this is how you will become smarter/'better'. In fact, being surrounded by smarter people is extremely important for developing an individual. If you consistently find yourself being the smartest guy in the room, you are doing it wrong --- either your self-assessment is way off, or you are in a wrong place.

We are defined mostly by our background and our environment. Studying the mental development of children has shown that their IQ 'moves' in direction of an average IQ of a group they socialize with: 'dumber' people getting 'smarter', and 'smarter' people getting 'dumber' depending on their surroundings. It corresponds to my observations for adults too.

One old study can be found here: http://www.jstor.org/discover/10... 

Incidentally it gives a rationale for people wanting to attend 'good' schools rather than 'bad', and parents wanting to give their kids the 'best education possible'.

It is always interesting to read historical literature about people we recognize as unquestionable 'geniuses' in any field. Invariably you will find that their friends were really smart too --- either 'geniuses' themselves, or people who were recognized as outstanding by their contemporaries.

What if you live in a middle of nowhere? In this case 'surrogates' will help, both 'canned wisdom' (books, articles), and virtual/remote interactions (Internet in all forms, web-based communities).

To sum it up: you should actively work on your environment, and find friendly people smarter and better than you. That's how you will become better.

2. Success is a product of hard work, not talent (it doesn't hurt to have a talent, but not required).

There is an anecdotal evidence that in order to truly master something you have to spend ~10,000 hours doing it. 10k hours is 5 work-years. Does it mean that all people, who worked 5 years in one business area are pros at the top of their career? Not really. The problem is that usually a work day includes a lot of 'other' non-core activities: meetings, emails, paperwork, phone calls, and so on. In order to speed up your development in a chosen area, you should maximize core activities. Incidentally it explains why an age by itself does not equate to 'high skills' directly. Basically it means work harder and try to pick up a fun stuff to do in related areas, e.g., if you are a programmer, try Open Source in your spare time.

While a practice is an indisputable driver of getting better at manual tasks, does it really work for a mental activity? It does. I was convinced by a chess example.

Everybody knows that chess is a purely mental activity. While some people equate chess with math, or a military strategy, such correlations were not found. You cannot get better at chess by doing something else. You have to practice chess. The real question is how it depends on a talent, general smarts, or some other innate mental ability. It turned out that the latter are mostly irrelevant. The main driver is an experience, which is measured in hours spent playing chess. While 'intelligence points' play their role, it turned out that 'smarts' correlate with experience too. More precisely an experience can be represented as a logarithm of hours spent playing chess == an order of magnitude of hours. Coincidentally it explains why it is hard to gain XP ('experience points') when your 'level' is already high.

One such study can be found here: http://v-scheiner.brunel.ac.uk/b...

To sum it up: hard work is a cornerstone of success. 'I have no talent' or 'Maybe I am just stupid' is no excuse for a failure in any area for a healthy individual.

3. Bonus point: it is never too late to become smarter/'better'. Never stop learning.

Interesting to see that all three lessons I have learned are actually related.")

a6 = Answer.create!(user_id: 3, question_id: q7.id, body: "Here are some:

#1 Despite its reputation, the woolly mammoth wasn't exactly 'mammoth' in size:

While it was a big animal, the woolly mammoth was actually smaller than the African Bush elephants of today.  Though other mammoth species such as the Columbian and Steppe mammoth grew larger, the woolly mammoth was about the same size as an Asian elephant, with females at around 2.6-2.9m tall and weighing a maximum of 4 tonnes, and males being slightly larger, at 2.7-3.4m tall and weighing up to 6 tonnes.


​
​#2 During the Ice age, woolly mammoths were EVERYWHERE:

Well, not exactly. But they did have quite the range, from England, all the way to the Canadian Yukon (and at times further than that!). 

You see, during the glacial periods of the Ice age, so much sea water was frozen up at the poles, sea levels plummeted, connecting the British Isles to mainland Europe, and Siberia to Alaska (this place was called Beringia). The cold and dry environment created a massive grassland, known as the Mammoth Steppe, aka the Woolly Mammoth's perfect habitat. 

Along with huge numbers of wild horses, reindeer, bison and saiga antelope (and their predators), to name a few, mammoths were free to travel around the world.

#3 The mammoth and mastodon are DIFFERENT things, understand?:

The woolly mammoth and mastodon are both simialry-sized-hairy-prehistoric-elephant-things, and many people confuse the two to be close cousins. They were, however, only distant cousins with very different diets and ecological niches. Mammoths had flat, grinding teeth for chewing grasses they ate out on the plains. Mastodons, on the other hand, had these odd, jagged teeth for grinding leaves, shrubs and aquatic plants (the very name 'mastodon', means 'nipple-tooth').

​(Woolly mammoth is on the left, American Mastodon is on the right.) 
(Artist:Daniel Reed).

Some more differences can be seen in their outward anatomy. The mammoth has a sloping back and a tall shoulder, with a hump, full of fat. The mastodon has no such hump and has a much flatter back and stockier build. The telltale domed mammoth head is not present in the mastodon, and while the woolly mammoth's tusks are huge and curved, to deliver an impressive display, the mastodon's tusks are rather straight and forward-facing.
 Here's a diagram showing how closely related the two species are (woolly mammoth= Mammuthus primigenius, American mastodon=Mammut americanum):

​

#4 Mammoths WERE elephants:

Indeed. As seen in the above diagram, mammoths are found in the family Elephantidae, making them true elephants, unlike the mastodon, which branched off earlier. Mammoths (mammuthus), African elephants (Loxodonta africana) and Asians elephants (Elephas maximus) share a common ancestor in Africa some 6 million years ago, or so. Mammoths share an even more recent ancestor with Asian elephants. In other words, Asian elephants are more closely related to mammoths than they are to African elephants.

#5 It's also very likely that they were as intelligent as them:

Their close relation to modern elephants, and the fact that we have actually found mammoth brains, makes it very likely that woolly mammoths were intelligent animals- just like modern-day elephants.

​ They probably traveled in herds consisting largely of females and calves, with males leaving at adolescence to live alone, only visiting herds to mate.

​
​
#6 Woolly mammoths left behind more than just fossils...:

This one is fairly obvious. We have found multiple frozen mammoth specimens in the Siberian permafrost, to the point that we have been able to study their DNA:
http://www.newswise.com/articles/first-comprehensive-analysis-of-the-woolly-mammoth-genome-completed
One of the most famous woolly mammoth specimens found was a calf found in 2007 by a reindeer herder, who was later named Lyuba. I was lucky enough to have seen her in London's Natural History Muse... (more)
Upvote453DownvoteComments8+
Share4
Kyle Hayashi
Kyle Hayashi, We do things, we change, we do better, then we change again.
524 Views • Kyle has 120+ answers in Animals.
There is a market for mammoth ivory.

Mammoth carcasses are preserved so well that people who uncovered them could sell their tusks for phenomenal prices. 



And sometimes, their carcasses are preserved SO well, that prospectors who uncovered them could still eat the mammoth meat, and somewhere out there, some filthy rich person may be eating a plate of mammoth meat right now! 

" )
a7 = Answer.create(user_id: 5, question_id: q8.id, body: "As Ian Peters-Campbell notes, the following 'is only true for the subset of drug dealers who work in large, inner-city organizations that are set up as top-down command-and-control enterprise.'

Steven Levitt of Freakonomics fame held a pretty good TED talk about the economics of crack dealing:

It's based on Sudhir Venkatesh's research, living in public projects and crackhouses for ten years, studying the daily life, the accounting, and other aspects of a gang in Chicago.

Organization
Overall such drug gangs could best be compared to McDonalds, in terms of organizational structure, wages, their basic franchising system, and other factors. The upper-most echelon even calls itself Board of Directors. J.T., Venkatesh's guide throughout his studies, had a college degree and was a local leader of the Black Kings. A local leader would have an area of about four blocks under his control, and gets to use the brand/name of the gang and exclusive drug-selling rights for his territory.

Wages
Foot soldiers: $3.50 per hour
Local leader: $100,000 per year
Regional leader: $200,000 per year
Board of directors: $400,000 per year

Sounds ok, but:

Why is it still a horrible line of work to be in?
While the wages compare (on some levels) to that of a McDonalds employee, in the drug gang you're getting shot at. Be aware that the following data was collected during a period of intense violence, but it's still telling.
The death rate was 7% per person per year, and then there's still the risk of getting wounded or arrested. For four years in the gang you have about 25% chance of dying. Other seemingly dangerous walks of life are much less risky: even on death row you have only 2% yearly risk of death. An American soldier in Iraq in 2006 had a death rate of about 1.5% per year.

Reasons why someone would still do it
Drug gangs used to be something young people did, and at some point in your life you got wealthy enough and dropped out. But the rules changed: the people leading the major gangs in Chicago at the end of the 1980s still ruled them when Venkatesh did his research. The leaders did great employer marketing, basically tricking young people into believing that the gang was a place for them to get rich. 
Also, and more importantly, for young people growing up where this gang was active, the gang was one of the very few economic opportunities. Levitt says that in his view, despite all the negative factors, it seems like the best economic opportunity widely available for those young people. One in half a million (this number is pure speculation) may find his way into professional sports, and others may find low-wage jobs at legal companies. But for the most part, the drug gang is your best bet.

TL/DR: In conclusion, drug gangs very much work like any other company. But Levitt makes clear that it is capitalism unfettered of the rule of law: foot soldiers may get twice the hourly wage during a gang war, but because of a general lack of economical opportunities, they are for the most part bound to work for the gang.

More on this topic can be found in the book Venkatesh himself published about his ten years of study, called Off the Books: The Underground Economy of the Urban Poor. The third chapter of Freakonomics, by Steven Levitt and Stephen Dubner, is based on Venkatesh's studies.")

t1 = Tag.create!(name: "Sports")
t2 = Tag.create!(name: "Love")
t3 = Tag.create!(name: "Psychology")
t4 = Tag.create!(name: "Food")
t5 = Tag.create!(name: "Science")
t6 = Tag.create!(name: "Health")
t7 = Tag.create!(name: "Games")
t8 = Tag.create!(name: "Technology")
t9 = Tag.create!(name: "Life Questions")
t10 = Tag.create!(name: "Philanthropy")


ta1 = Tagging.create!(question_id: q1.id, tag_id: 2)
ta2 = Tagging.create!(question_id: q2.id, tag_id: 2)
ta3 = Tagging.create!(question_id: q3.id, tag_id: 2)
ta4 = Tagging.create!(question_id: q4.id, tag_id: 3)
ta5 = Tagging.create!(question_id: q5.id, tag_id: 6)
ta6 = Tagging.create!(question_id: q6.id, tag_id: 9) 
ta7 = Tagging.create!(question_id: q8.id, tag_id: 9) 
ta8 = Tagging.create!(question_id: q7.id, tag_id: 7) 

ut1 = UserTag.create(user_id: 1, tag_id: 1) 
ut2 = UserTag.create(user_id: 2, tag_id: 1) 
ut3 = UserTag.create(user_id: 3, tag_id: 1) 
ut4 = UserTag.create(user_id: 4, tag_id: 1) 
ut5 = UserTag.create(user_id: 1, tag_id: 2) 
ut6 = UserTag.create(user_id: 1, tag_id: 3) 
ut7 = UserTag.create(user_id: 1, tag_id: 4) 
ut8 = UserTag.create(user_id: 1, tag_id: 5) 





