export interface IForm {
    name: string;
    pages: IPage[];
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
}

export interface IFormResponse {
    form_id: string;
    responses: any;
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
    {value: WIDGET_TYPES.linear, label: 'Paragraph'},
    {value: WIDGET_TYPES.date, label: 'Date'},
    {value: WIDGET_TYPES.time, label: 'Time'},
];
