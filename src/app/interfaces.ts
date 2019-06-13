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

export const WIDGET_NAMES = {
    short_answer: 'Short Answer',
    paragraph: 'Paragraph',
    multiple_choice: 'Multiple Choice',
    checkboxes: 'Checkboxes',
    linear: 'Linear Scale',
    date: 'Date',
    time: 'Time'
};
