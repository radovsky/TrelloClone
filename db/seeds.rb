u1 = User.create(email: 'guest', password: 'password')

b1 = u1.boards.create(title: "Help I'm a Board!")
b2 = u1.boards.create(title: 'Horde Board')
b3 = u1.boards.create(title: 'Smorgasbord')

l1 = b1.lists.create(title: 'todo')
l2 = b1.lists.create(title: 'doing')
l3 = b1.lists.create(title: 'done')

l4 = b2.lists.create(title: 'todo')
l5 = b2.lists.create(title: 'doing')
l6 = b2.lists.create(title: 'done')

l7 = b3.lists.create(title: 'todo')
l8 = b3.lists.create(title: 'doing')
l9 = b3.lists.create(title: 'done')

l3.cards.create(title: 'Weasels Ripped my Face')
l3.cards.create(title: 'Sheik Yerbouti')

l1.cards.create(title: 'My guitar wants to kill your mama')
l1.cards.create(title: 'Billy the Mountain')

l2.cards.create(title: 'Bobby Brown')
l2.cards.create(title: 'Hot Rats')

l4.cards.create(title: 'Kill everything until the Atlantic')
l4.cards.create(title: 'Take a shower')

l5.cards.create(title: 'Pillage, Pillage, Pillage')
l5.cards.create(title: 'Kill everyone in mainland Eurasia')

l6.cards.create(title: 'Pay tribute to Genghis')
l6.cards.create(title: 'Ride horse real good and shoot arrows')

l7.cards.create(title: 'lutefisk')
l7.cards.create(title: 'lingonberries')

l8.cards.create(title: 'lefsa')
l8.cards.create(title: 'more fish')

l9.cards.create(title: 'roots')
l9.cards.create(title: 'rotten shark')