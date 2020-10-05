import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  qns: any[];
  seconds: number;
  timer: any;
  timeTaken: any;
  qnProgress: number;
  correctAnswerCount: number = 0;

  token : string = localStorage.getItem('id_token');

  constructor(private _http: HttpClient) {
  }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60)
      + ':' + Math.floor(this.seconds % 60);

  }

  getQuestions() {
    const httpAuthHeaders = new HttpHeaders().set('Authorization', this.token);
    return this._http.get('/server/api/questions', {headers: httpAuthHeaders});
  }

  createQuestion(question: any) {
    const httpAuthHeaders = new HttpHeaders().set('Authorization', this.token);
    return this._http.post('/server/api/questions', question, {headers: httpAuthHeaders});
  }

  deleteQuestion(questionId: any) {
    const httpAuthHeaders = new HttpHeaders().set('Authorization', this.token);
    return this._http.delete(`/server/api/questions/${questionId}`, {headers: httpAuthHeaders});
  }

  getAnswer(value) {

    let tab = value.match(/\[.+?]/g);
    if (tab === null) {
      return value;
    }
    tab.forEach((x, i) => {
      tab[i] = x.replace(x, x.slice(1, x.length - 1))
    });
    return tab;
  }

  retrans(value) {

    let s: string = "";

    //let t = value.match(/\(\d+\)/g);
    let tab = value.match(/{.+?}/g);
    let tab1 = value.match(/\[.+?]/g);
    if (tab === null) {
      return value;
    }

    tab.forEach((x, i) => {
      (i === 0) ?
        s = value.replace(tab[0] + tab1[0], tab1[0].slice(1, tab1[0].length - 1)) :
        s = s.replace(tab[i] + tab1[i], tab1[i].slice(1, tab1[i].length - 1));
    });

    return s;
  }

  levelDescription() {
    return {

      'A1': {
        Title: 'A1 | Beginner',
        Subtitle: 'At the A1 CEFR level, a language learner can:',
        Level: 'A1',
        1: 'Understand and use very basic expressions to satisfy concrete needs.',
        2: 'Introduce themselves and ask others questions about personal details.',
        3: 'Interact simply as long as the other person speaks slowly and clearly.'
      },

      'A2': {
        Title: 'A2 | Elementary',
        Subtitle: 'At the A2 CEFR level, a language learner can:',
        Level: 'A2',
        1: 'Understand frequently used expressions in most intermediate areas such as shopping, family, employment, etc.',
        2: 'Complete tasks that are routine and involve a direct exchange of information.',
        3: 'Describe matters of immediate need in simple terms.'
      },

      'B1': {
        Title: 'B1 | Intermediate',
        Subtitle: 'At the B1 CEFR level, a language learner can:',
        Level: 'B1',
        1: 'Understand points regarding family, work, school or leisure-related topics.',
        2: 'Deal with most travel situations in areas where the language is spoken.',
        3: 'Describe experiences, events, dreams, and ambitions, as well as opinions or plans in brief.',
      },

      'B2': {
        Title: 'B2 | Upper Intermediate',
        Subtitle: 'At the B2 CEFR level, a language learner can:',
        Level: 'B2',
        1: 'Understand the main ideas of a complex text such as a technical piece related to their field.',
        2: 'Spontaneously interact without too much strain for either the learner or the native speaker.',
        3: 'Produce a detailed text on a wide range of subjects.'
      },

      'C1': {
        Title: 'C1 | Advanced',
        Subtitle: 'At the C1 CEFR level, a language learner can:',
        Level: 'C1',
        1: 'Understand a wide range of longer and more demanding texts or conversations.',
        2: 'Express ideas without too much searching.',
        3: 'Effectively use the language for social, academic or professional situations.'
      },

      'C2': {
        Title: 'C2 | Proficiency',
        Subtitle: 'At the C2 CEFR level, a language learner can:',
        Level: 'C2',
        1: 'Understand almost everything read or heard with ease.',
        2: 'Summarize information from a variety of sources into a coherent presentation.',
        3: 'Express themselves using precise meaning in complex scenarios.'
      },
    };
  }

  getLevelDescription(level) {
    if (level === undefined) {
      return level;
    } else if (level === 'A1') {
      return this.levelDescription().A1;
    } else if (level === 'A2') {
      return this.levelDescription().A2;
    } else if (level === 'B1') {
      return this.levelDescription().B1;
    } else if (level === 'B2') {
      return this.levelDescription().B2;
    } else if (level === 'C1') {
      return this.levelDescription().C1;
    } else if (level === 'C2') {
      return this.levelDescription().C2;
    }
  }

}
