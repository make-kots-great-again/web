import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../core/services/auth.service";
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {QuestionsService} from "../../../core/services/questions.service";
import {ReplacePipe} from "../../../shared/pipes/replace.pipe";

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  questionType: any;
  question: string = "";
  questionPiped: string = "";

  option1: any;
  option2: any;

  alertMessage: string = "";
  deleteButton: boolean = false;

  questionId: any;
  users: any;

  totalItems: number;
  page: number = 1;

  regexAnswer: any;

  fillInexample: string = "Neil Armstrong {be}[was] born in 1930 and " +
    "{go}[went] to the moon in 1969. He {die}[died] in 2012. ";

  booleanAnswer: Object = {
    "optionB1": false,
    "optionB2": false,
  };
  multipleQuestionForm: FormGroup;

optionsArray: Array<any> = [];

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    public questions: QuestionsService,
    private replacePipe: ReplacePipe,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {

    if (!this.authService.getAllProfiles() ||
      (JSON.parse(localStorage.getItem('user')).role !== 'admin' &&
        JSON.parse(localStorage.getItem('user')).role !== 'teacher')) {
      this.authService.logout();
      return this._flashMessagesService.show("", {
        navigate: `${this.router.navigate(['/login'])}`
      });
    }

    this.multipleQuestionForm = this.formBuilder.group({
      options: this.formBuilder.array([this.createOption()])
    });

    this.showAllQuestion();
  }

  showAllQuestion() {

    this.questions.getQuestions()
      .toPromise()
      .then((data: any) => {

        data.filter(x => x.type === 'fill in')
          .forEach(x => {
            x.question = this.replacePipe.transform(x.question);
          });

        data.filter(x => x.type === 'fill in')
          .forEach(x =>
            x.answers.forEach((x, i) =>
              x.option = '(' + ++i + ') ' + x.option));

        data.forEach((x, i) => {x.questionNumber = ++i;});

        this.questions.qns = data;
        this.totalItems = this.questions.qns.length;
      })
      .catch(err => {
        console.log(err);
      });
  }

  createOption(): FormGroup {
    return this.formBuilder.group({
      option: ['', Validators.required],
    });
  }

  get getAnswerOptions() {
    return this.multipleQuestionForm.get('options') as FormArray;

  }

  addAlternateOptions() {
    this.getAnswerOptions.push(this.createOption());
  }

  removeSkill(index: number) {
    this.getAnswerOptions.removeAt(index);
    this.optionsArray.splice(index, 1);
  }


  checkArray(event: any, tab: Object) {
    (event.checked) ? tab[event.id] = true : tab[event.id] = false;
  }

   buttonChecked(event) {
    this.checkArray(event, this.booleanAnswer);
    this.checkArray(event, this.optionsArray);
  }

  questionTypeChoosen(event) {
    this.questionType = event.id;
  }

  submitOneAnswerCheck(): boolean {
    return (this.questionType === 'multipleQuestion') ?
      this.optionsArray.filter(x => x).length === 1 :
      (this.questionType === 'booleanQuestion') ?
        Object.keys(this.booleanAnswer)
          .filter(x => this.booleanAnswer[x]).length === 1 : undefined;
  }

  onCreateQuestion(event) {

    this.questionPiped = this.replacePipe.transform(this.question);

    let questionCreated: Object;

    if (event.id === 'sumbitMultiple') {

      questionCreated = {
        "type": "multiple",
        "question": this.question,
        "answers": []
      };

      this.multipleQuestionForm.value.options
        .forEach((x, i) =>
          questionCreated["answers"].push({
            "option": x.option,
            "isCorrect": (i === this.optionsArray.indexOf(true))
          }));

    } else if (event.id === 'sumbitBoolean') {

      questionCreated = {
        "type": "boolean",
        "question": this.question,
        "answers": [
          {"option": this.option1, "isCorrect": this.booleanAnswer["optionB1"]},
          {"option": this.option2, "isCorrect": this.booleanAnswer["optionB2"]}
        ]
      };

    } else if (event.id === 'sumbitFillIn') {
      questionCreated = {
        "type": "fill in",
        "question": this.question,
        "answers": []
      };

      let questionAnswer = this.questions.getAnswer(this.question);
      questionAnswer.forEach(x =>
        questionCreated["answers"].push({"option": x, "isCorrect": true}));
    }

    this.questions.createQuestion(questionCreated)
      .toPromise()
      .then((data) => {
        this.showAllQuestion();
        this.alertMessage = `${data["message"]}`;
      })
      .catch(err => {
        this.alertMessage = "Something went wrong !";
        console.log(err);
      });
  }

  deleteClicked() {
    (this.deleteButton) ? this.deleteButton = false : this.deleteButton = true;
  }

  getQuestionId(event) {
    this.questionId = event.id;
  }

  onDeleteQuestion() {
    this.questions.deleteQuestion(this.questionId)
      .toPromise()
      .then((data) => {
        this.showAllQuestion();
        this.alertMessage = `${data["message"]}`;
      })
      .catch(err => {
        this.alertMessage = "Something went wrong !";
        console.log(err);
      });

  }

  trackByMethod(index: number, el: any): number {
    return el;
  }

  closeAlert() {
    this.alertMessage = "";
    Object.keys(this.booleanAnswer).forEach(x => this.booleanAnswer[x] = false);
  }

}

