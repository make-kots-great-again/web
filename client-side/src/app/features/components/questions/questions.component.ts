import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import {QuestionsService} from "../../../core/services/questions.service";
import {ReplacePipe} from "../../../shared/pipes/replace.pipe";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  option: any;
  progress: number = 0;
  compArray: boolean;
  dynamicInputsForm: FormGroup;
  tab: Array<number> = [];

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    public question: QuestionsService,
    private replacePipe: ReplacePipe,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {

    this.dynamicInputsForm = this.formBuilder.group({
      inputs: new FormArray([])
    });

    this.question.qnProgress = 0;
    this.question.seconds = 0;
    this.showQuestion();
    this.startTimer();

    if (!Object.keys(localStorage).includes('id_token')) {
      return this._flashMessagesService.show("", {
        navigate: `${this.router.navigate(['/login'])}`
      });
    }
  }

  showQuestion() {
    this.question.getQuestions()
      .toPromise()
      .then((data: any) => {

        data.filter(x => x.type === 'fill in')
          .forEach(x => {
            x.regexAnswer = this.question.getAnswer(x.question);
            x.question = this.replacePipe.transform(x.question);
            this.tab.push(x.regexAnswer.length);
          });

        data.forEach((x, i) => {
          x.questionNumber = ++i;
        });

        this.question.qns = data;
        this.question.correctAnswerCount = 0;
      })
      .catch(err => {
        console.log(err);
      });
  }

  get getDynamicInputsForm() {
    return this.dynamicInputsForm.controls;
  }

  get getInputs() {
    return this.getDynamicInputsForm.inputs as FormArray;
  }

  onChangeTickets() {
    const numberOfInputs = this.tab[this.progress] || 0;
    if (this.getInputs.length < numberOfInputs) {
      for (let i = this.getInputs.length; i < numberOfInputs; i++) {
        this.getInputs.push(this.formBuilder.group({
          name: ['', Validators.required]
        }));
      }

    } else {
      for (let i = this.getInputs.length; i >= numberOfInputs; i--) {
        this.getInputs.removeAt(i);
      }
    }
  }

  async test() {

    let t: Array<string> = [];
    let t1: Array<string> = [];

    Object.keys(this.dynamicInputsForm.value)
      .forEach(x => (this.dynamicInputsForm.value[x])
        .forEach(y => t.push((y.name).toLocaleLowerCase())));

    this.question.qns[this.question.qnProgress].fill = t;

    this.question.qns[this.question.qnProgress].answers
      .forEach(x => t1.push(x.option));

    (this.compareTwoArray(t, t1)) ? this.question.correctAnswerCount++ : undefined;

    this.question.qnProgress++;
    this.progress++;

    if (this.question.qnProgress == (this.question.qns).length) {
      this.question.timeTaken = this.question.displayTimeElapsed();
      clearInterval(this.question.timer);
      await this.router.navigate(['/results']);
    }
  }

  test1() {
    this.question.qnProgress--;
    this.progress--;
  }

  private compareTwoArray(t1: Array<string>, t2: Array<string>): boolean {
    let tab: Array<string> = t1.filter(x => t2.includes(x));
    return tab.length === t1.length;
  }

  startTimer() {
    this.question.timer = setInterval(() => {
      this.question.seconds++;
      localStorage.setItem('seconds', this.question.seconds.toString());
    }, 1000);
  }

  async answer(index, choice) {
    this.question.qns[this.question.qnProgress].answer = choice;
    this.question.qns[this.question.qnProgress].index = index;

    if (JSON.parse(this.question.qns[this.question.qnProgress].answer
      || this.compArray)) {
      this.question.correctAnswerCount++;
    }

    /**
     * if (JSON.parse(choice.toLowerCase())) {
      this._flashMessagesService.show("correct answer", {
        cssClass: "alert-success w-25 text-center",
        timeout: 2000
      });
    } else {
      this._flashMessagesService.show("wrong answer", {
        cssClass: "alert-danger w-25 text-center",
        timeout: 2000,
      });
    }
     await new Promise(r => setTimeout(r, 2000));
     */

    this.question.qnProgress++;
    if (this.question.qnProgress == (this.question.qns).length) {
      this.question.timeTaken = this.question.displayTimeElapsed();
      clearInterval(this.question.timer);
      await this.router.navigate(['/results']);
    }
  }
}
