# Thoughts on Grading AI Slop: Possibly Impractical Solutions to Practical Problems

### Preliminaries
I have never taught a course fully. I have never experienced pressure to make student grades fit a certain distribution. I am not a faculty member. At the time of writing this, I am not even a Grad TA. I am 22 years old, and my interests and opinions mostly reflect that of 22 year olds. This is not a post that aims to comment on a specific LLM or AI company. This post is writing with no intention of harming anyone or anything. 

In the past few days, I have thought a lot about what type of professor I would like to be when I grow up. In particular, I have been thinking about how to adminster a class in the best way while trying to optimize between student happiness, student success, and actually teaching material successfully. As I began to write this, my guiding thought was 'What will my course be like in 10 years when as LLMs become more powerful and undetectable?'. [^1] With some loss of generality, this is assuming that I will be teaching an undergraduate Cryptography class. 


# The Student 
My comments hereafter are considering students who are grades motivated, but, find the concepts interesting enough once they gain confidence. In other words, they need a ‘least-resistance’  and consistent way to build momentum. I am aware that catering to students like this may not be someone's goals as a professor. 

### On Grade Weightage
#### Finals:
Everyone has finals around the same time, so finals should never be more than 20% of ur grade. There should not be more than 2 midterms, or 3 midterms if there is no other closed book assessment. Anything more forces students to constantly have pre-exam anxiety, or to spend a lot of their time studying with the goal of grades, not with the goal of learning. 

#### Test Corrections: 
The most important thing I have to say in this post is that test corrections should be brought back. It is a shame that these were phased out since high school. Putting aside the obvious fact that test corrections require students to review their exam mistakes and learn from them, this is also better at satisfying the needs of the grades motivated student. Without the time pressure of an exam setting, students might also be motivated to attend office hours and ask questions about their mistakes, or you can enforce that they must attend one office hour. 

Also, if grading n exams is scalable, grading ~1.5n examples should be possible, especially since that is a loose upper bound. In practice, less than half the students will end up doing test corrections if you introduce brackets. E.g., students who got between 60% and 80% on the exam can get up to 10% back, student who got between 40% and 60% can get up to 15% back, etc. 

#### Attendance: 
Attendance should be the only free marks given, but within reason. Any student who shows up regulary (> 85% attendance) should get all the points in this category, but this category shouldn't count for more than 10% of the overall grade. I've been in courses where this is called participation, but I think that this results in a lot of meaningless particpation (eg. fluff) along with students who simply do not participate. I've talked to professors about this, and some believe that it is not their responsibility to incentivize students to ask questions, especially at the collegiate level. 

#### Quizzes: 
Hand-written weekly quizzes seem like a good way of gauging student performance in a more low stakes setting than frequent exams. Obviously, homeworks are not useful in doing this anymore, with increased LLM usage. It is necessary that they are handwritten to ensure that students are not using AI tools while solving them. This would also increase attendance, and if done enough, might make sense to replace the attendance category with. I think these should be graded very generously, with almost 80% for a reasonable attempt, but also given detailed feedback. These should also be no more than 2 problems, for example, one definition, and one application problem. It should not take the students more than 10-15 minutes. 

### On What Constitutes a Good Exam

I personally am a fan of a hybrid final, where it is technically cumulative, but with an emphasis on untested material. In general, exams should have a reasonable mix of definitions, applications, and proofs, with minimal 'puzzle-y' problems. The most straightforward to do this is to break problems into parts, where part a is a simple definition or application, part b is more challenging application, and part c is perhaps a semi-rigorous proof. Of course, the points per problem increase with increased difficulty. 

Cheat sheets are ridiculous if they are greater than 1 page, and not handwritten. They encourage students to just cram info into a cheat sheet and not actually study the material, whereas handwriting forces them to absorb at least some. I see many people scrambling to find information on their cheat sheets during exams, instead of focusing on solving the problem. In fact, my best exam experiences have been when I have handwritten a cheat sheet and then never looked at it during the exam. 

Lastly, exams need to be timed well. I think it is normal for the first exam in a course or iteration of it is too long, but if exams do not adapt to student pacing, it is often a reflection of student understandings, which is thereby a reflection on teaching. There's a delicate balance to strike here, between testing very frequently to cover all the material, and tests being of reasonable lengths. The quizzes mentioned above hopefully cover this. 

For an undergraduate cryptography class, I would have one (in)security proof, one explanation/definition with multiple parts, and 2 short answer questions for a 1 hour exam. By cutting out some questions, you can have another (in)security proof, but I would make one proof easier than the other. As a student I am not a fan of True/False questions, but I understand why they are neccessary for breadth. 



### On TA-ship

In my experience, TAs are often utilized in a somewhat incorrect way, stemming from the fact that we forget TAs are students too (could be an extreme generalization). My problem comes from the fact that TAs often spend a lot of time doing quite administrative tasks, and don't actually interact with students often enough. In my opinion, the whole reason a student TA exists is because they experienced learning the subject material a lot more recently than the professor, and they can relate to the student experience. Moreover, people forget that TAs need to learn to teach too, and not in the way that courses about teaching teach you, since everyone takes the easiest route in those classes. Rather, they need to have more experiences teaching. 

Here's a problem I've faced a few times: I go to a TAs office hours, they don't really understand the question that I am asking, and then they give some handwavy answer which doesn't help me that much.

Here's my impractical solution: Maybe instead of each TA hosting weekly office hours all covering the HW and general course questions, each TA can be sort of the 'general boss' of one question. They should of course have some sense of the other ones, but it is okay if they do not know that much, and can redirect the student to the one that knows it. This is always a good way to have the TA learn more deeply. Impracticalities: does this mean if one student cannot attend a TA's office hours, that they are screwed for that question? That's not fair. Also, this is probably not scalable.

Another problem I see is that TAs spend far too much time grading. I'd rather the TA's proritize being active on the class forum answering administrative questions like when an assignment is due or when an exam is or small simple questions, than grade (especially if they waste their time grading AI slop). I am someone who enjoys grading, and I find it interesting to see the different way people solved problems, and I don't really mind if there is a lot of repetitiveness in this. However, it does use up my grading time as a TA, and sometimes having oral exams is more useful, since there is more interaction with the student. This is also not scalable. 

Furthermore, TAs are students, and it is odd grading a fellow students assingment and having a sense of their grades in a class. Grades are deeply personal and someone who is in the same boat as the student shouldn't be able to see that. Until we find a grading system akin to [double blind review](https://www.crowdmark.com/help/double-blind-grading/), professors should just grade more. When the TAs do grade, it should be low stakes assignments. Impracticalities: professors also don't have that much time. This only works in a course where there are not many assingments. 

My last problem is that TAs are most impactful in discussion, and we are not capitializing on that enough. If a 5 hour TA spends 1 hour on discussion, 3 on grading, and 1 on office hour, are we really using them enough? For starters in some courses, office hours are crickets (either it is useless, or it doesn't fit the schedule of the students). Even grading is variable, and how often are students directly benefitting from the graded feedback? It's not useful to the TA either, if we pay that TA to spend 3 hours grading AI slop. Impractical Solution? I don't know. It seems a trivial solution is to have more discussion sections, but who wants to have 3 discussion sections a week on top of lecture? Maybe a possibility is an integrated lecture discussion, where each TA rotates showing up to lecture and does a mini discussion at the end. This can also be done by the professor. 

# If you can't beat 'em, join 'em!
I think there is something positive about allowing students to use AI on assingments. I've had this happen in one of my classes, where the professor required students upload a transcript of them conversing with an LLM on a given prompt ('Discuss big O notation with me as if I am a college student and ask me 5 questions at the end to test my understanding'). It's also not unreasonable to expect that students to use tools in college that they will likely be forced to use in their careers. Regardless, it is impossible to generalize the AI usage perspective amongst all students, and it is important that when designing courses, one takes into account this fact. Also, it is important to consider that different people have different financial backgrounds. As such, certain students may have accesss to better models with greater compute. 



[^1]: Education has changed a lot over the course of the last few years due to AI usage. I am not making a claim about whether or not usage will increase or decrease, but rather, proposing solutions to problems that even exist today. 