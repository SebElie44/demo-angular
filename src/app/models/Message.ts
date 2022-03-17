export class Message{
  private _nom : string;
  private _date : Date;
  private _message : string;


  constructor(nom: string, message: string) {
    this._nom = nom;
    this._date = new Date();
    this._message = message;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
