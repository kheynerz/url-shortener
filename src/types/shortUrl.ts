export interface ShortUrl {
    id:             number;
    full_url:       string;
    title:          null;
    click_count:    number;
    created_at:     Date;
    updated_at:     Date;
    short_url_code: string;
    short_code:     string;
}

export interface ErrorResponse {
    errors:   string[];
    full_url: string[];
}