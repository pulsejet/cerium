export interface IForm {
    name: string;
    pages: IPage[];
    can_edit: boolean;
    collect_email: boolean;
    require_login: boolean;
    single_response: boolean;
    is_closed: boolean;
    close_on: Date;
}

export interface IPage {
    title: string;
    description: string;
    widgets: IWidget[];
}

export interface IWidget {
    type: string;
    uid: string;
    props: any;
    response: any;
}

export interface IFormResponse {
    form_id: string;
    responses: any;
    timestamp: Date;
}

export interface IUser {
    id: number;
    roll_number: string;
    first_name: string;
    last_name: string;
    profile_picture: string;
    email: string;
}

export const WIDGET_TYPES = {
    short_answer: 'short_answer',
    paragraph: 'paragraph',
    multiple_choice: 'mcq',
    checkboxes: 'check',
    linear: 'linear',
    date: 'date',
    time: 'time'
};

export const WIDGET_OPTIONS = [
    {value: WIDGET_TYPES.short_answer, label: 'Short Answer'},
    {value: WIDGET_TYPES.paragraph, label: 'Paragraph'},
    {value: WIDGET_TYPES.multiple_choice, label: 'Multiple Choice'},
    {value: WIDGET_TYPES.checkboxes, label: 'Checkboxes'},
    {value: WIDGET_TYPES.linear, label: 'Linear Scale'},
    {value: WIDGET_TYPES.date, label: 'Date'},
    {value: WIDGET_TYPES.time, label: 'Time'},
];
