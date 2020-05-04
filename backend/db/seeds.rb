# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
UserBook.destroy_all
User.destroy_all
Book.destroy_all

book1 = Book.create(title: "How to Meditate", author: "Tara Brach", description: "Meditation is a simple practice available to all, which can reduce stress, increase calmness and clarity and promote happiness. Learning how to meditate is straightforward, and the benefits can come quickly. Here, we offer basic tips to get you started on a path toward greater equanimity, acceptance and joy. Take a deep breath, and get ready to relax.", link_url: "https://www.tarabrach.com/wp-content/uploads/pdf/how-to-meditate.pdf")
book2 = Book.create(title: "The Miracle of Mindfulness: An Introduction to the Practice of Meditation ", author: "Thich Nhat Hanh", description: "Meditation taught through a series of anecdotes is a good start to a budding practice. Our minds can’t help but to engage when we hear someone begin to tell a story. Stories help us remember key points. This book is a translation of a letter Nhat Hanh wrote to his colleagues in Vietnam. It is personal and direct in its approach. He emphasizes breath work and being present.", link_url: "https://terebess.hu/zen/mesterek/Thich%20Nhat%20Hanh%20-%20The%20Miracle%20of%20Mindfulness.pdf")
book3 = Book.create(title: "The Mindfullness Sampler", author: "None listed", description: "How can life be lived fully? Our culture bombards us every day with suggested answers: Buy this, do that, then you’ll be satisfied. But what really works? A new approach has been growing in popularity—though it’s not really new at all—and it offers a solution that is startling in its simplicity: Just be present where you are, moment by moment. No tricks, no secrets, no special requirements. This is the message of mindfulness.
    As a way of introducing readers to the mindfulness movement and its contemporary practice, Shambhala Publications is pleased to offer this short eBook of teachings by some of the movement’s most acclaimed teachers.", link_url: "http://www.shambhala.com/images/illus/MindfulnessSampler/9780834829817.pdf")

user1 = User.create(name: "Iuliia")
user2 = User.create(name: "Hannah")
user3 = User.create(name: "Ahmed")

UserBook.create(user: user1, book: book1)
UserBook.create(user: user1, book: book2)
UserBook.create(user: user1, book: book3)

UserBook.create(user: user2, book: book2)
UserBook.create(user: user2, book: book3)

UserBook.create(user: user3, book: book3)