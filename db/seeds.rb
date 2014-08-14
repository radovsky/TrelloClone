u1 = User.create(email: 'guest', password: 'password')

b1 = u1.boards.create(title: "Help I'm a Board!")
b2 = u1.boards.create(title: 'Horde Board')
b3 = u1.boards.create(title: 'Smorgasbord')

l1 = b1.lists.create(title: 'done')
l2 = b1.lists.create(title: 'doing')
l3 = b1.lists.create(title: 'todo')

l4 = b2.lists.create(title: 'done')
l5 = b2.lists.create(title: 'doing')
l6 = b2.lists.create(title: 'todo')

l7 = b3.lists.create(title: 'done')
l8 = b3.lists.create(title: 'doing')
l9 = b3.lists.create(title: 'todo')

l3.cards.create(title: 'Susie Creamcheese')
l3.cards.create(title: 'Sheik Yerbouti')

l1.cards.create(title: "Joe's Garage")
l1.cards.create(title: 'Billy the Mountain')

l2.cards.create(title: 'Bobby Brown')
l2.cards.create(title: 'Hot Rats')

l4.cards.create(title: 'Sack Constantinople')
l4.cards.create(title: 'Take a shower')

l5.cards.create(title: 'Pillage, Pillage, Pillage')
l5.cards.create(title: 'Conquer all of mainland Eurasia')

l6.cards.create(title: 'Pay tribute to Genghis')
l6.cards.create(title: 'Ride horse real good and shoot arrows')

l7.cards.create(title: 'lutefisk')
l7.cards.create(title: 'lingonberries')

l8.cards.create(title: 'lefsa')
l8.cards.create(title: 'more fish')

l9.cards.create(title: 'roots')
l9.cards.create(title: 'rotten shark')