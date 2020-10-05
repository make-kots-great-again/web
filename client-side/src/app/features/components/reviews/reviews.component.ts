import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {ReviewsService} from "../../../core/services/reviews.service";
import {timer} from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  title: string;
  currentRate: number;
  reviewText: string;

  readonly: boolean = true;
  deleteId: any;
  loggedInUser: any;

  loggedInUserRole: any;
  updateId: any;
  date: any;

  reviewAuthor: any;

  totalItems: number;
  page: number = 1;

  alertMessage: string = "";

  constructor(
    private _flashMessagesService: FlashMessagesService,
    public authService: AuthService,
    private router: Router,
    public reviews: ReviewsService
  ) {
  }

  ngOnInit() {

    this.loggedInUser = !(JSON.parse(localStorage.getItem('user'))) ?
      "" : JSON.parse(localStorage.getItem('user')).username;

    this.loggedInUserRole = !(localStorage.getItem('role')) ?
      "" : localStorage.getItem('role');
    this.showReviews();
  }

  showReviews() {
    let tab: Array<any> = [];
    this.reviews.getAllReviews()
      .toPromise()
      .then((data: any) => {

        if (data.message) return this.reviews.rev;

        this.reviews.userId = data._id;
        data
          .sort((a, b) => Date.parse(b.created) - Date.parse(a.created))
          .forEach(x => {
            x.rating = Number(x.rating);
            x.imageNumber = Math.round(Math.random() * 14);

            (new Date(x.updated).getTime() > new Date(x.created).getTime()) ?
              x.date = `Updated ${x.updated}` :
              x.date = `Created ${x.created}`;

          });
        this.reviews.rev = data;
        this.totalItems = this.reviews.rev.length;

      })
      .catch(err => {
        console.log(err);
      });
  }

  onReviewCreate() {
    const review = {
      "rating": this.currentRate,
      "reviewText": this.reviewText
    };

    this.reviews.createReview(review)
      .toPromise()
      .then((data: any) => {
        this.showReviews();
        this.alertMessage = data.message;
      })
      .catch(err => {
        this.alertMessage = "Something went wrong !";
        console.log(err);
      });

  }

  chooseModalTitle(event) {
    this.updateId = event.id;
    this.reviewAuthor = event.title;
    (event.name === 'createReview') ? this.title = 'Create a new review'
      : this.title = 'Update this review';
  }

  getDeleteId(event) {
    this.reviewAuthor = event.id;
    this.deleteId = event.title;
  }

  onDeleteReview() {
    if (!localStorage.getItem('id_token')) {
      this.alertMessage = "Something went wrong !";
    } else {
      this.reviews.deleteReview(this.reviewAuthor, this.deleteId)
        .toPromise()
        .then((data: any) => {
          this.showReviews();
          this.alertMessage = `${data.message}`;
        })
        .catch(err => {
          this.alertMessage = "Something went wrong !";
          console.log(err);
        })
    }
  }

  onUpdateReview() {

    const review = {
      "rating": this.currentRate,
      "reviewText": this.reviewText
    };

    if (!localStorage.getItem('id_token')) {
      this.alertMessage = "Something went wrong !";
    } else {
      this.reviews.updateReview(this.reviewAuthor, this.updateId, review)
        .toPromise()
        .then(() => {
          this.showReviews();
          this.alertMessage = "Review updated successfully !";
        })
        .catch(err => {
          this.alertMessage = "Something went wrong !";
          console.log(err);
        });
    }
  }

  choose() {
    if (this.title === 'Create a new review') {
      this.onReviewCreate();

    } else if (this.title === 'Update this review') {
      this.onUpdateReview();
    }
  }

  closeAlert() {
    this.alertMessage = "";
  }

  checkTokens() {
    return !localStorage.getItem('id_token');
  }

}
